import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useToast } from '@/hooks/use-toast';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import { usersApi } from '@/utils/adminApi';
import { Search, Users, Plus, Edit, RotateCcw, UserPlus, Key, CheckCircle, XCircle } from 'lucide-react';

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
  email_confirmed_at?: string;
  last_sign_in_at?: string;
}

interface MembershipTier {
  id: string;
  name: string;
  description: string;
  price: number;
  features: string[];
}

export const UserManager = () => {
  const { user, isAdmin, isAdminAuthenticated } = useAdminAuth();
  const [users, setUsers] = useState<Profile[]>([]);
  const [tiers, setTiers] = useState<MembershipTier[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isPasswordResetDialogOpen, setIsPasswordResetDialogOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<Profile | null>(null);
  const [resetPasswordUser, setResetPasswordUser] = useState<Profile | null>(null);
  const [createFormData, setCreateFormData] = useState({
    email: '',
    password: '',
    full_name: '',
    role: 'member',
    membership_tier: 'subscriber',
  });
  const [editFormData, setEditFormData] = useState({
    full_name: '',
    role: 'member',
    membership_tier: 'subscriber',
  });
  const [newPassword, setNewPassword] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    if (isAdminAuthenticated) {
      fetchUsers();
      fetchTiers();
    } else if (user && !isAdmin) {
      setLoading(false);
      toast({
        title: "Access Denied",
        description: "You don't have permission to access this page.",
        variant: "destructive",
      });
    }
  }, [user, isAdmin, isAdminAuthenticated]);

  const fetchUsers = async () => {
    if (!user?.id) return;
    
    try {
      setLoading(true);
      const response = await usersApi.getAll(user.id);

      if (!response.success) {
        console.error('Error fetching users:', response.error);
        toast({
          title: "Error",
          description: response.error || "Failed to fetch users.",
          variant: "destructive",
        });
        return;
      }
      
      // Add placeholder email verification status (to be implemented with proper DB function)
      const usersWithVerification = (response.data || []).map(user => ({
        ...user,
        email_confirmed_at: user.created_at, // Placeholder - assume verified for now
        last_sign_in_at: user.created_at // Placeholder
      }));
      
      setUsers(usersWithVerification);
    } catch (error: any) {
      console.error('Error fetching users:', error);
      toast({
        title: "Error",
        description: error?.message || "Failed to fetch users.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchTiers = async () => {
    // For now, use static membership tiers since we don't have a specific API for this
    // This can be extended later if needed
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
      const userToUpdate = users.find(u => u.user_id === userId);
      if (!userToUpdate) return;
      
      const response = await usersApi.update(user.id, userToUpdate.id, { membership_tier: newTier });

      if (!response.success) {
        throw new Error(response.error || 'Failed to update member tier');
      }
      
      toast({
        title: "Success",
        description: "Member tier updated successfully.",
      });
      
      fetchUsers();
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
      const userToUpdate = users.find(u => u.user_id === userId);
      if (!userToUpdate) return;
      
      const response = await usersApi.update(user.id, userToUpdate.id, { role: newRole });

      if (!response.success) {
        throw new Error(response.error || 'Failed to update member role');
      }
      
      toast({
        title: "Success",
        description: "Member role updated successfully.",
      });
      
      fetchUsers();
    } catch (error: any) {
      console.error('Error updating member role:', error);
      toast({
        title: "Error",
        description: error?.message || "Failed to update member role.",
        variant: "destructive",
      });
    }
  };

  const handleCreateMember = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Note: User creation with server-side API would require additional implementation
      // For now, show a message that this feature needs to be implemented
      toast({
        title: "Feature Not Available",
        description: "User creation via admin panel requires additional server-side implementation.",
        variant: "destructive",
      });
      return;
      
      // TODO: Implement server-side user creation API
      // This would require additional backend implementation
    } catch (error: any) {
      console.error('Error creating member:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to create member.",
        variant: "destructive",
      });
    }
  };

  const handleEditMember = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!editingUser || !user?.id) return;

    try {
      const response = await usersApi.update(user.id, editingUser.id, {
        full_name: editFormData.full_name,
        role: editFormData.role,
        membership_tier: editFormData.membership_tier,
      });

      if (!response.success) {
        throw new Error(response.error || 'Failed to update member');
      }

      toast({
        title: "Success",
        description: "Member updated successfully.",
      });

      setIsEditDialogOpen(false);
      setEditingUser(null);
      fetchUsers();
    } catch (error: any) {
      console.error('Error updating member:', error);
      toast({
        title: "Error",
        description: error?.message || "Failed to update member.",
        variant: "destructive",
      });
    }
  };

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!resetPasswordUser || !newPassword) return;

    try {
      // Note: Password reset functionality requires additional server-side implementation
      toast({
        title: "Feature Not Available",
        description: "Password reset via admin panel requires additional server-side implementation.",
        variant: "destructive",
      });
      return;
      
      // TODO: Implement server-side password reset API

      setIsPasswordResetDialogOpen(false);
      setResetPasswordUser(null);
      setNewPassword('');
    } catch (error: any) {
      console.error('Error resetting password:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to reset password.",
        variant: "destructive",
      });
    }
  };

  const openEditDialog = (user: Profile) => {
    setEditingUser(user);
    setEditFormData({
      full_name: user.full_name || '',
      role: user.role,
      membership_tier: user.membership_tier,
    });
    setIsEditDialogOpen(true);
  };

  const openPasswordResetDialog = (user: Profile) => {
    setResetPasswordUser(user);
    setNewPassword('');
    setIsPasswordResetDialogOpen(true);
  };

  const filteredUsers = users.filter(user =>
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.full_name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const userStats = {
    total: users.length,
    admins: users.filter(u => u.role === 'admin').length,
    subscribers: users.filter(u => u.membership_tier === 'subscriber').length,
    basic: users.filter(u => u.membership_tier === 'basic').length,
    premium: users.filter(u => u.membership_tier === 'premium').length,
    vip: users.filter(u => u.membership_tier === 'vip').length,
  };

  // Show loading state while checking authentication
  if (!user) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
        <span className="ml-2">Loading...</span>
      </div>
    );
  }

  // Show access denied for non-admin users
  if (!isAdmin) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Access Denied</h2>
          <p className="text-gray-600">You don't have permission to access this page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Statistics Cards */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              <div>
                <p className="text-2xl font-bold">{userStats.total}</p>
                <p className="text-xs text-muted-foreground">Total Members</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div>
              <p className="text-2xl font-bold">{userStats.admins}</p>
              <p className="text-xs text-muted-foreground">Admins</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div>
              <p className="text-2xl font-bold">{userStats.subscribers}</p>
              <p className="text-xs text-muted-foreground">Subscribers</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div>
              <p className="text-2xl font-bold">{userStats.basic}</p>
              <p className="text-xs text-muted-foreground">Basic</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div>
              <p className="text-2xl font-bold">{userStats.premium}</p>
              <p className="text-xs text-muted-foreground">Premium</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div>
              <p className="text-2xl font-bold">{userStats.vip}</p>
              <p className="text-xs text-muted-foreground">VIP</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Header with search and create button */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="relative max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search members..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9"
          />
        </div>

        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              <UserPlus className="w-4 h-4 mr-2" />
              Create Member
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Create New Member</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleCreateMember} className="space-y-4">
              <div>
                <Label htmlFor="create-email">Email *</Label>
                <Input
                  id="create-email"
                  type="email"
                  value={createFormData.email}
                  onChange={(e) => setCreateFormData(prev => ({ ...prev, email: e.target.value }))}
                  required
                />
              </div>
              <div>
                <Label htmlFor="create-password">Password *</Label>
                <Input
                  id="create-password"
                  type="password"
                  value={createFormData.password}
                  onChange={(e) => setCreateFormData(prev => ({ ...prev, password: e.target.value }))}
                  required
                  minLength={6}
                />
              </div>
              <div>
                <Label htmlFor="create-name">Full Name</Label>
                <Input
                  id="create-name"
                  value={createFormData.full_name}
                  onChange={(e) => setCreateFormData(prev => ({ ...prev, full_name: e.target.value }))}
                />
              </div>
              <div>
                <Label htmlFor="create-role">Role</Label>
                <Select value={createFormData.role} onValueChange={(value) => setCreateFormData(prev => ({ ...prev, role: value }))}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="member">Member</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="create-tier">Membership Tier</Label>
                <Select value={createFormData.membership_tier} onValueChange={(value) => setCreateFormData(prev => ({ ...prev, membership_tier: value }))}>
                  <SelectTrigger>
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
              </div>
              <div className="flex justify-end gap-2">
                <Button type="button" variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">Create Member</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
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
                <TableHead>Email Status</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Tier</TableHead>
                <TableHead>Skills</TableHead>
                <TableHead>Joined</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-8">
                    <div className="flex justify-center items-center">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
                      <span className="ml-2">Loading members...</span>
                    </div>
                  </TableCell>
                </TableRow>
              ) : filteredUsers.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-8">
                    <div className="flex flex-col items-center text-muted-foreground">
                      <Users className="w-12 h-12 mb-2" />
                      <p className="text-lg font-semibold mb-1">
                        {searchTerm ? 'No members found' : 'No members yet'}
                      </p>
                      <p className="text-sm">
                        {searchTerm ? 'Try adjusting your search terms' : 'Create your first member to get started'}
                      </p>
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
                filteredUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{user.full_name || 'Unknown'}</p>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {user.email_confirmed_at ? (
                          <>
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm text-green-600">Verified</span>
                          </>
                        ) : (
                          <>
                            <XCircle className="w-4 h-4 text-red-500" />
                            <span className="text-sm text-red-600">Unverified</span>
                          </>
                        )}
                      </div>
                    </TableCell>
                  <TableCell>
                    <Select
                      value={user.role}
                      onValueChange={(value) => updateMemberRole(user.user_id, value)}
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
                      value={user.membership_tier}
                      onValueChange={(value) => updateMemberTier(user.user_id, value)}
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
                      {user.skills?.slice(0, 2).map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {user.skills && user.skills.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{user.skills.length - 2}
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <p className="text-sm">
                      {new Date(user.created_at).toLocaleDateString()}
                    </p>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => openEditDialog(user)}
                      >
                        <Edit className="w-4 h-4 mr-1" />
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => openPasswordResetDialog(user)}
                      >
                        <Key className="w-4 h-4 mr-1" />
                        Reset
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Edit Member Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Member</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleEditMember} className="space-y-4">
            <div>
              <Label htmlFor="edit-name">Full Name</Label>
              <Input
                id="edit-name"
                value={editFormData.full_name}
                onChange={(e) => setEditFormData(prev => ({ ...prev, full_name: e.target.value }))}
              />
            </div>
            <div>
              <Label htmlFor="edit-role">Role</Label>
              <Select value={editFormData.role} onValueChange={(value) => setEditFormData(prev => ({ ...prev, role: value }))}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="member">Member</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="edit-tier">Membership Tier</Label>
              <Select value={editFormData.membership_tier} onValueChange={(value) => setEditFormData(prev => ({ ...prev, membership_tier: value }))}>
                <SelectTrigger>
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
            </div>
            <div className="flex justify-end gap-2">
              <Button type="button" variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">Update User</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Password Reset Dialog */}
      <Dialog open={isPasswordResetDialogOpen} onOpenChange={setIsPasswordResetDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Reset Password</DialogTitle>
          </DialogHeader>
          <form onSubmit={handlePasswordReset} className="space-y-4">
            <div>
              <Label>User</Label>
              <p className="text-sm text-muted-foreground">
                {resetPasswordUser?.full_name || resetPasswordUser?.email}
              </p>
            </div>
            <div>
              <Label htmlFor="new-password">New Password *</Label>
              <Input
                id="new-password"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                minLength={6}
                placeholder="Enter new password"
              />
            </div>
            <div className="flex justify-end gap-2">
              <Button type="button" variant="outline" onClick={() => setIsPasswordResetDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">Reset Password</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};
