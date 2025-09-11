import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useToast } from '@/hooks/use-toast';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import { usersApi } from '@/utils/adminApi';
import { Search, Users } from 'lucide-react';

interface Profile {
  id: string;
  user_id: string;
  email: string;
  full_name: string;
  role: string;
  membership_tier: string;
  bio: string;
  skills: string[];
  created_at: string;
}

interface MembershipTier {
  id: string;
  name: string;
  description: string;
  price: number;
  features: string[];
}

export const MemberManager = () => {
  const { user, isAdminAuthenticated } = useAdminAuth();
  const [members, setMembers] = useState<Profile[]>([]);
  const [tiers, setTiers] = useState<MembershipTier[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    if (isAdminAuthenticated) {
      fetchMembers();
      fetchTiers();
    }
  }, [isAdminAuthenticated]);

  const fetchMembers = async () => {
    if (!user?.id) return;
    
    try {
      const response = await usersApi.getAll(user.id);

      if (!response.success) {
        console.error('Error fetching members:', response.error);
        toast({
          title: "Error",
          description: response.error || "Failed to fetch members.",
          variant: "destructive",
        });
        return;
      }
       setMembers(response.data || []);
    } catch (error: any) {
      console.error('Error fetching members:', error);
      toast({
        title: "Error",
        description: error?.message || "Failed to fetch members.",
        variant: "destructive",
      });
    }
  };

  const fetchTiers = async () => {
    // Use static membership tiers since we don't have a specific API for this
    const staticTiers = [
      { id: '1', name: 'free', description: 'Free tier', price: 0, features: ['Basic access'] },
      { id: '2', name: 'subscriber', description: 'Subscriber tier', price: 10, features: ['Premium content'] },
      { id: '3', name: 'premium', description: 'Premium tier', price: 25, features: ['All features'] }
    ];
    setTiers(staticTiers);
  };

  const updateMemberTier = async (userId: string, newTier: string) => {
    if (!user?.id) return;
    
    try {
      const memberToUpdate = members.find(m => m.user_id === userId);
      if (!memberToUpdate) return;
      
      const response = await usersApi.update(user.id, memberToUpdate.id, { membership_tier: newTier });

      if (!response.success) {
        throw new Error(response.error || 'Failed to update member tier');
      }
      
      toast({
        title: "Success",
        description: "Member tier updated successfully.",
      });
      
      fetchMembers();
    } catch (error: any) {
      console.error('Error updating member tier:', error);
      toast({
        title: "Error",
        description: error?.message || "Failed to update member tier.",
        variant: "destructive",
      });
    }
  };

  const updateMemberRole = async (userId: string, newRole: string) => {
    if (!user?.id) return;
    
    try {
      const memberToUpdate = members.find(m => m.user_id === userId);
      if (!memberToUpdate) return;
      
      const response = await usersApi.update(user.id, memberToUpdate.id, { role: newRole });

      if (!response.success) {
        throw new Error(response.error || 'Failed to update member role');
      }
      
      toast({
        title: "Success",
        description: "Member role updated successfully.",
      });
      
      fetchMembers();
    } catch (error: any) {
      console.error('Error updating member role:', error);
      toast({
        title: "Error",
        description: error?.message || "Failed to update member role.",
        variant: "destructive",
      });
    }
  };

  const filteredMembers = members.filter(member =>
    member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.full_name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const memberStats = {
    total: members.length,
    admins: members.filter(m => m.role === 'admin').length,
    basic: members.filter(m => m.membership_tier === 'basic').length,
    premium: members.filter(m => m.membership_tier === 'premium').length,
    vip: members.filter(m => m.membership_tier === 'vip').length,
  };

  return (
    <div className="space-y-6">
      {/* Statistics Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              <div>
                <p className="text-2xl font-bold">{memberStats.total}</p>
                <p className="text-xs text-muted-foreground">Total Members</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div>
              <p className="text-2xl font-bold">{memberStats.admins}</p>
              <p className="text-xs text-muted-foreground">Admins</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div>
              <p className="text-2xl font-bold">{memberStats.basic}</p>
              <p className="text-xs text-muted-foreground">Basic</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div>
              <p className="text-2xl font-bold">{memberStats.premium}</p>
              <p className="text-xs text-muted-foreground">Premium</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div>
              <p className="text-2xl font-bold">{memberStats.vip}</p>
              <p className="text-xs text-muted-foreground">VIP</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          placeholder="Search members..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-9"
        />
      </div>

      {/* Members Table */}
      <Card>
        <CardHeader>
          <CardTitle>Members</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Member</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Tier</TableHead>
                <TableHead>Skills</TableHead>
                <TableHead>Joined</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredMembers.map((member) => (
                <TableRow key={member.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{member.full_name || 'Unknown'}</p>
                      <p className="text-sm text-muted-foreground">{member.email}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Select
                      value={member.role}
                      onValueChange={(value) => updateMemberRole(member.user_id, value)}
                    >
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="member">Member</SelectItem>
                        <SelectItem value="admin">Admin</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Select
                      value={member.membership_tier}
                      onValueChange={(value) => updateMemberTier(member.user_id, value)}
                    >
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {tiers.map((tier) => (
                          <SelectItem key={tier.id} value={tier.name.toLowerCase()}>
                            {tier.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-1 flex-wrap">
                      {member.skills?.slice(0, 2).map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {member.skills && member.skills.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{member.skills.length - 2}
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <p className="text-sm">
                      {new Date(member.created_at).toLocaleDateString()}
                    </p>
                  </TableCell>
                  <TableCell>
                    <Badge variant={member.role === 'admin' ? 'default' : 'secondary'}>
                      {member.role}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};