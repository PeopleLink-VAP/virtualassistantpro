import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Switch } from '@/components/ui/switch';
import { 
  Search, 
  Plus, 
  Edit, 
  Trash2, 
  Check, 
  X, 
  Star, 
  Clock, 
  Globe, 
  DollarSign,
  User,
  FileText,
  Award,
  Phone,
  Mail,
  MessageSquare,
  Linkedin,
  Filter
} from 'lucide-react';
import { toast } from 'sonner';

interface Profile {
  user_id: string;
  full_name?: string;
  email?: string;
  avatar_url?: string;
  country_of_origin?: string;
}

interface VirtualAssistant {
  id: string;
  profile_id: string;
  va_status: 'pending' | 'approved' | 'rejected' | 'suspended';
  verification_date?: string;
  verified_by?: string;
  experience_years: number;
  hourly_rate?: number;
  currency: string;
  availability_hours: number;
  timezone?: string;
  cv_url?: string;
  portfolio_url?: string;
  certifications?: string[];
  avatar_url?: string;
  cover_image_url?: string;
  specializations?: string[];
  languages?: string[];
  tools_proficiency?: string[];
  success_rate: number;
  completed_projects: number;
  client_rating: number;
  response_time_hours: number;
  admin_notes?: string;
  tags?: string[];
  featured: boolean;
  preferred_contact_method: 'email' | 'phone' | 'whatsapp' | 'telegram';
  phone_number?: string;
  whatsapp_number?: string;
  telegram_handle?: string;
  linkedin_profile?: string;
  created_at: string;
  updated_at: string;
  profiles?: Profile;
}

const statusColors = {
  pending: 'bg-yellow-100 text-yellow-800',
  approved: 'bg-green-100 text-green-800',
  rejected: 'bg-red-100 text-red-800',
  suspended: 'bg-gray-100 text-gray-800'
};

const statusIcons = {
  pending: Clock,
  approved: Check,
  rejected: X,
  suspended: User
};

export function VirtualAssistantManager() {
  const [virtualAssistants, setVirtualAssistants] = useState<VirtualAssistant[]>([]);
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedVA, setSelectedVA] = useState<VirtualAssistant | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchVirtualAssistants();
    fetchProfiles();
  }, []);

  const fetchVirtualAssistants = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('virtual_assistants')
        .select(`
          *,
          profiles!virtual_assistants_profile_id_fkey (
            user_id,
            full_name,
            email,
            avatar_url,
            country_of_origin
          )
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setVirtualAssistants(data || []);
    } catch (error) {
      console.error('Error fetching virtual assistants:', error);
      toast.error('Failed to fetch virtual assistants');
    } finally {
      setLoading(false);
    }
  };

  const fetchProfiles = async () => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('user_id, full_name, email, avatar_url, country_of_origin')
        .order('full_name');

      if (error) throw error;
      setProfiles(data || []);
    } catch (error) {
      console.error('Error fetching profiles:', error);
    }
  };

  const handleStatusChange = async (vaId: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from('virtual_assistants')
        .update({ 
          va_status: newStatus,
          verification_date: newStatus === 'approved' ? new Date().toISOString() : null
        })
        .eq('id', vaId);

      if (error) throw error;
      
      toast.success(`Virtual assistant status updated to ${newStatus}`);
      fetchVirtualAssistants();
    } catch (error) {
      console.error('Error updating status:', error);
      toast.error('Failed to update status');
    }
  };

  const handleToggleFeatured = async (vaId: string, featured: boolean) => {
    try {
      const { error } = await supabase
        .from('virtual_assistants')
        .update({ featured })
        .eq('id', vaId);

      if (error) throw error;
      
      toast.success(`Virtual assistant ${featured ? 'featured' : 'unfeatured'}`);
      fetchVirtualAssistants();
    } catch (error) {
      console.error('Error updating featured status:', error);
      toast.error('Failed to update featured status');
    }
  };

  const handleDelete = async (vaId: string) => {
    if (!confirm('Are you sure you want to delete this virtual assistant?')) return;

    try {
      const { error } = await supabase
        .from('virtual_assistants')
        .delete()
        .eq('id', vaId);

      if (error) throw error;
      
      toast.success('Virtual assistant deleted successfully');
      fetchVirtualAssistants();
    } catch (error) {
      console.error('Error deleting virtual assistant:', error);
      toast.error('Failed to delete virtual assistant');
    }
  };

  const openDialog = (va?: VirtualAssistant) => {
    setSelectedVA(va || null);
    setIsEditing(!!va);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setSelectedVA(null);
    setIsEditing(false);
    setIsDialogOpen(false);
  };

  const filteredVAs = virtualAssistants.filter(va => {
    const matchesSearch = !searchTerm || 
      va.profiles?.full_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      va.profiles?.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      va.specializations?.some(spec => spec.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesStatus = statusFilter === 'all' || va.va_status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const getStatusIcon = (status: string) => {
    const Icon = statusIcons[status as keyof typeof statusIcons];
    return Icon ? <Icon className="w-4 h-4" /> : null;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header and Actions */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Virtual Assistants</h2>
          <p className="text-muted-foreground">Manage vetted VA members</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => openDialog()}>
              <Plus className="w-4 h-4 mr-2" />
              Add Virtual Assistant
            </Button>
          </DialogTrigger>
          <VirtualAssistantDialog
            va={selectedVA}
            profiles={profiles}
            isEditing={isEditing}
            onClose={closeDialog}
            onRefresh={fetchVirtualAssistants}
          />
        </Dialog>
      </div>

      {/* Filters */}
      <div className="flex gap-4 items-center">
        <div className="flex-1 max-w-sm">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search virtual assistants..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-muted-foreground" />
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="approved">Approved</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
              <SelectItem value="suspended">Suspended</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {['pending', 'approved', 'rejected', 'suspended'].map((status) => {
          const count = virtualAssistants.filter(va => va.va_status === status).length;
          const Icon = statusIcons[status as keyof typeof statusIcons];
          return (
            <Card key={status} className="p-4">
              <div className="flex items-center gap-2">
                <Icon className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-2xl font-bold">{count}</p>
                  <p className="text-sm text-muted-foreground capitalize">{status}</p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Virtual Assistants List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredVAs.map((va) => (
          <VirtualAssistantCard
            key={va.id}
            va={va}
            onStatusChange={handleStatusChange}
            onToggleFeatured={handleToggleFeatured}
            onEdit={() => openDialog(va)}
            onDelete={() => handleDelete(va.id)}
          />
        ))}
      </div>

      {filteredVAs.length === 0 && (
        <div className="text-center py-12">
          <User className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-lg font-semibold mb-2">No virtual assistants found</h3>
          <p className="text-muted-foreground mb-4">
            {searchTerm || statusFilter !== 'all' 
              ? 'No virtual assistants match your filters' 
              : 'Get started by adding your first virtual assistant'}
          </p>
          <Button onClick={() => openDialog()}>
            <Plus className="w-4 h-4 mr-2" />
            Add Virtual Assistant
          </Button>
        </div>
      )}
    </div>
  );
}

interface VirtualAssistantCardProps {
  va: VirtualAssistant;
  onStatusChange: (vaId: string, status: string) => void;
  onToggleFeatured: (vaId: string, featured: boolean) => void;
  onEdit: () => void;
  onDelete: () => void;
}

function VirtualAssistantCard({ va, onStatusChange, onToggleFeatured, onEdit, onDelete }: VirtualAssistantCardProps) {
  const StatusIcon = statusIcons[va.va_status];

  return (
    <Card className="relative">
      {va.featured && (
        <div className="absolute top-2 right-2">
          <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
            <Star className="w-3 h-3 mr-1" />
            Featured
          </Badge>
        </div>
      )}
      
      <CardHeader className="pb-3">
        <div className="flex items-start gap-3">
          <Avatar className="w-12 h-12">
            <AvatarImage src={va.avatar_url || va.profiles?.avatar_url} />
            <AvatarFallback>
              {va.profiles?.full_name?.substring(0, 2).toUpperCase() || '??'}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold truncate">{va.profiles?.full_name || 'Unknown'}</h3>
            <p className="text-sm text-muted-foreground truncate">{va.profiles?.email}</p>
            <div className="flex items-center gap-2 mt-1">
              <Badge className={`text-xs ${statusColors[va.va_status]}`}>
                <StatusIcon className="w-3 h-3 mr-1" />
                {va.va_status}
              </Badge>
              {va.profiles?.country_of_origin && (
                <Badge variant="outline" className="text-xs">
                  <Globe className="w-3 h-3 mr-1" />
                  {va.profiles.country_of_origin}
                </Badge>
              )}
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3 text-muted-foreground" />
            <span>{va.experience_years} years</span>
          </div>
          <div className="flex items-center gap-1">
            <DollarSign className="w-3 h-3 text-muted-foreground" />
            <span>${va.hourly_rate || 0}/hr</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 text-muted-foreground" />
            <span>{va.client_rating}/5</span>
          </div>
          <div className="flex items-center gap-1">
            <Award className="w-3 h-3 text-muted-foreground" />
            <span>{va.completed_projects} projects</span>
          </div>
        </div>

        {va.specializations && va.specializations.length > 0 && (
          <div className="space-y-1">
            <p className="text-xs font-medium text-muted-foreground">Specializations:</p>
            <div className="flex flex-wrap gap-1">
              {va.specializations.slice(0, 3).map((spec, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {spec}
                </Badge>
              ))}
              {va.specializations.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{va.specializations.length - 3} more
                </Badge>
              )}
            </div>
          </div>
        )}

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-1">
            <Label htmlFor={`featured-${va.id}`} className="text-sm">Featured</Label>
            <Switch
              id={`featured-${va.id}`}
              checked={va.featured}
              onCheckedChange={(checked) => onToggleFeatured(va.id, checked)}
            />
          </div>
          
          <div className="flex gap-1">
            <Select value={va.va_status} onValueChange={(value) => onStatusChange(va.id, value)}>
              <SelectTrigger className="w-24 h-8 text-xs">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
                <SelectItem value="suspended">Suspended</SelectItem>
              </SelectContent>
            </Select>
            
            <Button variant="outline" size="sm" onClick={onEdit}>
              <Edit className="w-3 h-3" />
            </Button>
            
            <Button variant="outline" size="sm" onClick={onDelete} className="text-red-600 hover:text-red-700">
              <Trash2 className="w-3 h-3" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

interface VirtualAssistantDialogProps {
  va?: VirtualAssistant | null;
  profiles: Profile[];
  isEditing: boolean;
  onClose: () => void;
  onRefresh: () => void;
}

function VirtualAssistantDialog({ va, profiles, isEditing, onClose, onRefresh }: VirtualAssistantDialogProps) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    profile_id: va?.profile_id || '',
    va_status: va?.va_status || 'pending',
    experience_years: va?.experience_years || 0,
    hourly_rate: va?.hourly_rate || '',
    currency: va?.currency || 'USD',
    availability_hours: va?.availability_hours || 40,
    timezone: va?.timezone || '',
    cv_url: va?.cv_url || '',
    portfolio_url: va?.portfolio_url || '',
    certifications: va?.certifications?.join(', ') || '',
    avatar_url: va?.avatar_url || '',
    cover_image_url: va?.cover_image_url || '',
    specializations: va?.specializations?.join(', ') || '',
    languages: va?.languages?.join(', ') || '',
    tools_proficiency: va?.tools_proficiency?.join(', ') || '',
    success_rate: va?.success_rate || 0,
    completed_projects: va?.completed_projects || 0,
    client_rating: va?.client_rating || 0,
    response_time_hours: va?.response_time_hours || 24,
    admin_notes: va?.admin_notes || '',
    tags: va?.tags?.join(', ') || '',
    featured: va?.featured || false,
    preferred_contact_method: va?.preferred_contact_method || 'email',
    phone_number: va?.phone_number || '',
    whatsapp_number: va?.whatsapp_number || '',
    telegram_handle: va?.telegram_handle || '',
    linkedin_profile: va?.linkedin_profile || ''
  });

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.profile_id) {
      toast.error('Please select a profile');
      return;
    }

    setLoading(true);
    try {
      const submitData = {
        ...formData,
        hourly_rate: formData.hourly_rate ? parseFloat(formData.hourly_rate.toString()) : null,
        certifications: formData.certifications ? formData.certifications.split(',').map(s => s.trim()).filter(Boolean) : [],
        specializations: formData.specializations ? formData.specializations.split(',').map(s => s.trim()).filter(Boolean) : [],
        languages: formData.languages ? formData.languages.split(',').map(s => s.trim()).filter(Boolean) : [],
        tools_proficiency: formData.tools_proficiency ? formData.tools_proficiency.split(',').map(s => s.trim()).filter(Boolean) : [],
        tags: formData.tags ? formData.tags.split(',').map(s => s.trim()).filter(Boolean) : []
      };

      if (isEditing && va) {
        const { error } = await supabase
          .from('virtual_assistants')
          .update(submitData)
          .eq('id', va.id);
        
        if (error) throw error;
        toast.success('Virtual assistant updated successfully');
      } else {
        const { error } = await supabase
          .from('virtual_assistants')
          .insert([submitData]);
        
        if (error) throw error;
        toast.success('Virtual assistant added successfully');
      }

      onRefresh();
      onClose();
    } catch (error) {
      console.error('Error saving virtual assistant:', error);
      toast.error('Failed to save virtual assistant');
    } finally {
      setLoading(false);
    }
  };

  return (
    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle>
          {isEditing ? 'Edit Virtual Assistant' : 'Add Virtual Assistant'}
        </DialogTitle>
        <DialogDescription>
          {isEditing ? 'Update virtual assistant information' : 'Add a new virtual assistant to the platform'}
        </DialogDescription>
      </DialogHeader>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <Tabs defaultValue="basic" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="basic">Basic Info</TabsTrigger>
            <TabsTrigger value="professional">Professional</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>
          
          <div className="p-4">
            <p className="text-sm text-muted-foreground">
              Virtual Assistant form tabs will be implemented here.
            </p>
          </div>
        </Tabs>
        
        <div className="flex justify-end space-x-2 pt-4 border-t">
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" disabled={loading}>
            {loading ? 'Saving...' : (isEditing ? 'Update' : 'Add')} Virtual Assistant
          </Button>
        </div>
      </form>
    </DialogContent>
  );
}
