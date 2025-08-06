import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useToast } from '@/hooks/use-toast';
import { Mail, Plus, Eye, Send, Users, Filter, BarChart3, Calendar } from 'lucide-react';

interface Campaign {
  id: string;
  title: string;
  content: string;
  status: string;
  scheduled_at: string | null;
  sent_at: string | null;
  created_at: string;
  open_rate: number;
  click_rate: number;
}

interface EmailList {
  id: string;
  name: string;
  description: string;
  filter_criteria: any;
  created_at: string;
  member_count?: number;
}

export const NewsletterManager = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [emailLists, setEmailLists] = useState<EmailList[]>([]);
  const [isCreateCampaignOpen, setIsCreateCampaignOpen] = useState(false);
  const [isCreateListOpen, setIsCreateListOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('campaigns');
  const [loading, setLoading] = useState(true);
  
  const [campaignForm, setCampaignForm] = useState({
    title: '',
    content: '',
    status: 'draft'
  });

  const [listForm, setListForm] = useState({
    name: '',
    description: '',
    filter_criteria: {}
  });

  const { toast } = useToast();

  useEffect(() => {
    fetchCampaigns();
    fetchEmailLists();
  }, []);

  const fetchCampaigns = async () => {
    try {
      const { data, error } = await supabase
        .from('newsletter_campaigns')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setCampaigns(data || []);
    } catch (error) {
      console.error('Error fetching campaigns:', error);
      toast({
        title: "Error",
        description: "Failed to fetch newsletter campaigns.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchEmailLists = async () => {
    try {
      const { data, error } = await supabase
        .from('newsletter_email_lists')
        .select(`
          *,
          newsletter_email_list_members(count)
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      const listsWithCount = data?.map(list => ({
        ...list,
        member_count: list.newsletter_email_list_members?.[0]?.count || 0
      })) || [];
      
      setEmailLists(listsWithCount);
    } catch (error) {
      console.error('Error fetching email lists:', error);
      toast({
        title: "Error",
        description: "Failed to fetch email lists.",
        variant: "destructive",
      });
    }
  };

  const handleCreateCampaign = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const { error } = await supabase
        .from('newsletter_campaigns')
        .insert([{
          title: campaignForm.title,
          content: campaignForm.content,
          status: campaignForm.status
        }]);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Newsletter campaign created successfully.",
      });

      setIsCreateCampaignOpen(false);
      setCampaignForm({ title: '', content: '', status: 'draft' });
      fetchCampaigns();
    } catch (error) {
      console.error('Error creating campaign:', error);
      toast({
        title: "Error",
        description: "Failed to create campaign.",
        variant: "destructive",
      });
    }
  };

  const handleCreateList = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const { error } = await supabase
        .from('newsletter_email_lists')
        .insert([{
          name: listForm.name,
          description: listForm.description,
          filter_criteria: listForm.filter_criteria
        }]);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Email list created successfully.",
      });

      setIsCreateListOpen(false);
      setListForm({ name: '', description: '', filter_criteria: {} });
      fetchEmailLists();
    } catch (error) {
      console.error('Error creating email list:', error);
      toast({
        title: "Error",
        description: "Failed to create email list.",
        variant: "destructive",
      });
    }
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      draft: { variant: 'secondary' as const, label: 'Draft' },
      scheduled: { variant: 'default' as const, label: 'Scheduled' },
      sent: { variant: 'outline' as const, label: 'Sent' }
    };
    
    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.draft;
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return '-';
    return new Date(dateString).toLocaleDateString();
  };

  const formatPercentage = (rate: number) => {
    return `${(rate * 100).toFixed(1)}%`;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p className="mt-2 text-muted-foreground">Loading newsletter data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="campaigns" className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            Campaigns
          </TabsTrigger>
          <TabsTrigger value="lists" className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            Email Lists
          </TabsTrigger>
        </TabsList>

        {/* Campaigns Tab */}
        <TabsContent value="campaigns" className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">Newsletter Campaigns</h3>
              <p className="text-sm text-muted-foreground">
                Create, manage, and track your newsletter campaigns
              </p>
            </div>
            
            <Dialog open={isCreateCampaignOpen} onOpenChange={setIsCreateCampaignOpen}>
              <DialogTrigger asChild>
                <Button className="flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  Create Campaign
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Create Newsletter Campaign</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleCreateCampaign} className="space-y-4">
                  <div>
                    <Label htmlFor="campaign-title">Campaign Title *</Label>
                    <Input
                      id="campaign-title"
                      value={campaignForm.title}
                      onChange={(e) => setCampaignForm(prev => ({ ...prev, title: e.target.value }))}
                      placeholder="Enter campaign title..."
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="campaign-content">Content</Label>
                    <Textarea
                      id="campaign-content"
                      value={campaignForm.content}
                      onChange={(e) => setCampaignForm(prev => ({ ...prev, content: e.target.value }))}
                      placeholder="Write your newsletter content..."
                      rows={8}
                    />
                  </div>

                  <div>
                    <Label htmlFor="campaign-status">Status</Label>
                    <Select
                      value={campaignForm.status}
                      onValueChange={(value) => setCampaignForm(prev => ({ ...prev, status: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="draft">Draft</SelectItem>
                        <SelectItem value="scheduled">Scheduled</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex justify-end gap-2">
                    <Button type="button" variant="outline" onClick={() => setIsCreateCampaignOpen(false)}>
                      Cancel
                    </Button>
                    <Button type="submit">Create Campaign</Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          {/* Campaigns Table */}
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Campaign</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Sent</TableHead>
                    <TableHead>Open Rate</TableHead>
                    <TableHead>Click Rate</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {campaigns.map((campaign) => (
                    <TableRow key={campaign.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{campaign.title}</p>
                          <p className="text-sm text-muted-foreground truncate max-w-xs">
                            {campaign.content?.slice(0, 60)}...
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        {getStatusBadge(campaign.status)}
                      </TableCell>
                      <TableCell>{formatDate(campaign.created_at)}</TableCell>
                      <TableCell>{formatDate(campaign.sent_at)}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3 text-muted-foreground" />
                          {formatPercentage(campaign.open_rate)}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <BarChart3 className="w-3 h-3 text-muted-foreground" />
                          {formatPercentage(campaign.click_rate)}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Button size="sm" variant="outline">
                            <Eye className="w-3 h-3" />
                          </Button>
                          {campaign.status === 'draft' && (
                            <Button size="sm" variant="outline">
                              <Send className="w-3 h-3" />
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                  {campaigns.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                        No campaigns found. Create your first campaign to get started.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Email Lists Tab */}
        <TabsContent value="lists" className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">Email Lists</h3>
              <p className="text-sm text-muted-foreground">
                Create targeted email lists with advanced filtering
              </p>
            </div>
            
            <Dialog open={isCreateListOpen} onOpenChange={setIsCreateListOpen}>
              <DialogTrigger asChild>
                <Button className="flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  Create List
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create Email List</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleCreateList} className="space-y-4">
                  <div>
                    <Label htmlFor="list-name">List Name *</Label>
                    <Input
                      id="list-name"
                      value={listForm.name}
                      onChange={(e) => setListForm(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Enter list name..."
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="list-description">Description</Label>
                    <Textarea
                      id="list-description"
                      value={listForm.description}
                      onChange={(e) => setListForm(prev => ({ ...prev, description: e.target.value }))}
                      placeholder="Describe this email list..."
                      rows={3}
                    />
                  </div>

                  <div className="flex justify-end gap-2">
                    <Button type="button" variant="outline" onClick={() => setIsCreateListOpen(false)}>
                      Cancel
                    </Button>
                    <Button type="submit">Create List</Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          {/* Email Lists Table */}
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>List Name</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Members</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {emailLists.map((list) => (
                    <TableRow key={list.id}>
                      <TableCell>
                        <p className="font-medium">{list.name}</p>
                      </TableCell>
                      <TableCell>
                        <p className="text-sm text-muted-foreground">
                          {list.description || 'No description'}
                        </p>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3 text-muted-foreground" />
                          {list.member_count || 0}
                        </div>
                      </TableCell>
                      <TableCell>{formatDate(list.created_at)}</TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Button size="sm" variant="outline">
                            <Filter className="w-3 h-3" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Users className="w-3 h-3" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                  {emailLists.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                        No email lists found. Create your first list to get started.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
