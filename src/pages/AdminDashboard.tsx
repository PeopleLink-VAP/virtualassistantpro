import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BlogManager } from '@/components/admin/BlogManager';
import { CategoryManager } from '@/components/admin/CategoryManager';
import { UserManager } from '@/components/admin/UserManager';
import { SystemSettings } from '@/components/admin/SystemSettings';
import { Users, FileText, Settings, LogOut, Folder, User } from 'lucide-react';

export default function AdminDashboard() {
  const { signOut, profile } = useAuth();
  const [activeTab, setActiveTab] = useState('blog');

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b sticky top-0 z-50 bg-background">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
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

      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <div className="flex">
            <aside className="w-64 p-4 border-r">
              <nav className="space-y-2">
                <TabsList className="flex flex-col items-start space-y-1 w-full h-auto p-0 bg-transparent">
                  <TabsTrigger value="blog" className="w-full justify-start data-[state=active]:bg-muted data-[state=active]:text-primary">
                    <FileText className="w-4 h-4 mr-2" />
                    Blog Management
                  </TabsTrigger>
                  <TabsTrigger value="members" className="w-full justify-start data-[state=active]:bg-muted data-[state=active]:text-primary">
                    <Users className="w-4 h-4 mr-2" />
                    Members
                  </TabsTrigger>
                  <TabsTrigger value="settings" className="w-full justify-start data-[state=active]:bg-muted data-[state=active]:text-primary">
                    <Settings className="w-4 h-4 mr-2" />
                    System Settings
                  </TabsTrigger>
                </TabsList>
              </nav>
            </aside>
            <div className="flex-1 p-4">

          <TabsContent value="blog" className="space-y-4">
            <Tabs defaultValue="posts" className="space-y-4">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="posts">
                  <FileText className="w-4 h-4 mr-2" />
                  Post Listings
                </TabsTrigger>
                <TabsTrigger value="categories">
                  <Folder className="w-4 h-4 mr-2" />
                  Categories
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="posts" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Blog Posts Management</CardTitle>
                    <CardDescription>
                      Create, edit, and manage blog posts with SEO features
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BlogManager />
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="categories" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Category Management</CardTitle>
                    <CardDescription>
                      Organize and manage blog post categories
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CategoryManager />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </TabsContent>

          <TabsContent value="members" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>
                  Create, edit users and manage their tiers and permissions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <UserManager />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>System Settings</CardTitle>
                <CardDescription>
                  View system information and settings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SystemSettings />
              </CardContent>
            </Card>
          </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
}