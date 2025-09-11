import { useState, useEffect } from 'react';
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
import { useAdminAuth } from '@/hooks/useAdminAuth';
import { newsletterApi } from '@/utils/adminApi';
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
  const { user, isAdminAuthenticated } = useAdminAuth();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('campaigns');
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [emailLists, setEmailLists] = useState<EmailList[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isAdminAuthenticated) {
      fetchCampaigns();
      fetchEmailLists();
    }
  }, [isAdminAuthenticated]);

  const fetchCampaigns = async () => {
    if (!user?.id) return;
    
    try {
      const response = await newsletterApi.getAllCampaigns(user.id);
      if (response.success) {
        setCampaigns(response.data || []);
      } else {
        toast({
          title: "Error",
          description: response.error || "Failed to fetch campaigns.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error fetching campaigns:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchEmailLists = async () => {
    if (!user?.id) return;
    
    try {
      const response = await newsletterApi.getAllEmailLists(user.id);
      if (response.success) {
        setEmailLists(response.data || []);
      } else {
        toast({
          title: "Error",
          description: response.error || "Failed to fetch email lists.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error fetching email lists:', error);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Newsletter Management</h2>
        <p className="text-muted-foreground">
          Manage your email campaigns and subscriber lists (Feature coming soon)
        </p>
      </div>

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

        <TabsContent value="campaigns" className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">Newsletter Campaigns</h3>
              <p className="text-sm text-muted-foreground">
                Create, manage, and track your newsletter campaigns
              </p>
            </div>
            
            <Button disabled className="flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Create Campaign
            </Button>
          </div>

          <Card>
            <CardContent className="p-8">
              <div className="text-center space-y-2">
                <Mail className="w-12 h-12 text-muted-foreground mx-auto" />
                <h4 className="text-lg font-semibold">Newsletter Feature Coming Soon</h4>
                <p className="text-muted-foreground">
                  Newsletter campaign management will be available in a future update.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="lists" className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">Email Lists</h3>
              <p className="text-sm text-muted-foreground">
                Create targeted email lists with advanced filtering
              </p>
            </div>
            
            <Button disabled className="flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Create List
            </Button>
          </div>

          <Card>
            <CardContent className="p-8">
              <div className="text-center space-y-2">
                <Users className="w-12 h-12 text-muted-foreground mx-auto" />
                <h4 className="text-lg font-semibold">Email List Feature Coming Soon</h4>
                <p className="text-muted-foreground">
                  Email list management will be available in a future update.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
