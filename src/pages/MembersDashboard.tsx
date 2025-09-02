import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import Seo from '@/components/Seo';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { LogOut, User, Globe } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function MembersDashboard() {
  const { signOut, profile, user } = useAuth();
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    full_name: '',
    bio: '',
    skills: '',
    avatar_url: '',
    country_of_origin: '',
  });

  useEffect(() => {
    if (profile) {
      setFormData({
        full_name: profile.full_name || '',
        bio: profile.bio || '',
        skills: profile.skills?.join(', ') || '',
        avatar_url: profile.avatar_url || '',
        country_of_origin: profile.country_of_origin || '',
      });
    }
  }, [profile]);

  const handleSignOut = async () => {
    await signOut();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          full_name: formData.full_name,
          bio: formData.bio,
          skills: formData.skills.split(',').map(s => s.trim()).filter(Boolean),
          avatar_url: formData.avatar_url,
          country_of_origin: formData.country_of_origin,
        })
        .eq('user_id', user.id);

      if (error) throw error;

      toast({
        title: "Profile updated",
        description: "Your profile has been updated successfully.",
      });
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
      toast({
        title: "Error",
        description: "Failed to update profile. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <Seo
        title="Members Dashboard - Virtual Assistant Pro"
        description="Members dashboard for Virtual Assistant Pro"
        noIndex={true}
      />
      <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Member Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              Welcome, {profile?.full_name || profile?.email}
            </span>
            <Button variant="outline" onClick={handleSignOut}>
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5" />
              My Profile
            </CardTitle>
            <CardDescription>
              Manage your professional profile and skills
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Membership Tier</p>
                <Badge variant="secondary" className="mt-1">
                  {profile?.membership_tier?.toUpperCase()}
                </Badge>
              </div>
              <Button
                variant={isEditing ? "secondary" : "default"}
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? "Cancel" : "Edit Profile"}
              </Button>
            </div>

            {isEditing ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="avatar_url">Avatar URL</Label>
                  <Input
                    id="avatar_url"
                    value={formData.avatar_url}
                    onChange={(e) => setFormData(prev => ({ ...prev, avatar_url: e.target.value }))}
                    placeholder="Enter your avatar image URL"
                  />
                </div>

                <div>
                  <Label htmlFor="full_name">Full Name</Label>
                  <Input
                    id="full_name"
                    value={formData.full_name}
                    onChange={(e) => setFormData(prev => ({ ...prev, full_name: e.target.value }))}
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <Label htmlFor="country_of_origin">Country of Origin</Label>
                  <Select
                    value={formData.country_of_origin}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, country_of_origin: value }))}
                  >
                    <SelectTrigger id="country_of_origin">
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Vietnam">Vietnam</SelectItem>
                      <SelectItem value="United States">United States</SelectItem>
                      <SelectItem value="Canada">Canada</SelectItem>
                      <SelectItem value="Australia">Australia</SelectItem>
                      <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    value={formData.bio}
                    onChange={(e) => setFormData(prev => ({ ...prev, bio: e.target.value }))}
                    placeholder="Tell us about yourself..."
                    rows={4}
                  />
                </div>

                <div>
                  <Label htmlFor="skills">Skills (comma-separated)</Label>
                  <Input
                    id="skills"
                    value={formData.skills}
                    onChange={(e) => setFormData(prev => ({ ...prev, skills: e.target.value }))}
                    placeholder="e.g., Virtual Assistant, Data Entry, Customer Support"
                  />
                </div>

                <Button type="submit" className="w-full">
                  Save Changes
                </Button>
              </form>
            ) : (
              <div className="space-y-4">
                <div>
                  <Label className="text-sm font-medium">Avatar</Label>
                  <div className="mt-1">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src={profile?.avatar_url || ''} alt="User Avatar" />
                      <AvatarFallback>{profile?.full_name ? profile.full_name.charAt(0) : profile?.email?.charAt(0) || 'VA'}</AvatarFallback>
                    </Avatar>
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-medium">Email</Label>
                  <p className="text-sm text-muted-foreground mt-1">{profile?.email}</p>
                </div>

                <div>
                  <Label className="text-sm font-medium">Full Name</Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    {profile?.full_name || 'Not set'}
                  </p>
                </div>

                <div>
                  <Label className="text-sm font-medium">Country of Origin</Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    {profile?.country_of_origin || 'Not set'}
                  </p>
                </div>

                <div>
                  <Label className="text-sm font-medium">Bio</Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    {profile?.bio || 'No bio added yet'}
                  </p>
                </div>

                <div>
                  <Label className="text-sm font-medium">Skills</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {profile?.skills && profile.skills.length > 0 ? (
                      profile.skills.map((skill, index) => (
                        <Badge key={index} variant="outline">
                          {skill}
                        </Badge>
                      ))
                    ) : (
                      <p className="text-sm text-muted-foreground">No skills added yet</p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
      </div>
    </>
  );
}