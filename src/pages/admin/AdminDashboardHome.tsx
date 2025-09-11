import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { blogPostsApi, usersApi } from '@/utils/adminApi';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import { 
  FileText, Users, Mail, TrendingUp, Eye, Calendar, 
  BarChart3, Activity, Clock, CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface RecentPost {
  id: string;
  title: string;
  status: string;
  created_at: string;
  published_at?: string;
}

interface DashboardStats {
  totalPosts: number;
  publishedPosts: number;
  draftPosts: number;
  totalUsers: number;
  newsletterSubscribers: number;
  recentPosts: RecentPost[];
}

const AdminDashboardHome = () => {
  const [stats, setStats] = useState<DashboardStats>({
    totalPosts: 0,
    publishedPosts: 0,
    draftPosts: 0,
    totalUsers: 0,
    newsletterSubscribers: 0,
    recentPosts: []
  });
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAdminAuth();

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    if (!user) return;
    
    try {
      // Fetch blog posts stats
      const postsResponse = await blogPostsApi.getAll(user.id);
      if (!postsResponse.success || !postsResponse.data) {
        throw new Error(postsResponse.error || 'Failed to fetch posts');
      }
      const posts = postsResponse.data;

      // Fetch users stats
      const usersResponse = await usersApi.getAll(user.id);
      if (!usersResponse.success || !usersResponse.data) {
        throw new Error(usersResponse.error || 'Failed to fetch users');
      }
      const users = usersResponse.data.filter(profile => profile.role !== 'admin');

      // Calculate stats
      const totalPosts = posts?.length || 0;
      const publishedPosts = posts?.filter(post => post.status === 'published').length || 0;
      const draftPosts = posts?.filter(post => post.status === 'draft').length || 0;
      const totalUsers = users?.length || 0;
      const newsletterSubscribers = users?.filter(user => user.membership_tier === 'subscriber').length || 0;
      const recentPosts = posts?.slice(0, 5) || [];

      setStats({
        totalPosts,
        publishedPosts,
        draftPosts,
        totalUsers,
        newsletterSubscribers,
        recentPosts
      });
    } catch (error) {
      console.error('Error fetching dashboard stats:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      published: 'default',
      draft: 'secondary',
      archived: 'outline',
    } as const;
    
    return (
      <Badge variant={variants[status as keyof typeof variants] || 'secondary'}>
        {status}
      </Badge>
    );
  };

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[...Array(4)].map((_, i) => (
            <Card key={i}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="h-4 bg-muted rounded w-20 animate-pulse" />
                <div className="h-4 w-4 bg-muted rounded animate-pulse" />
              </CardHeader>
              <CardContent>
                <div className="h-8 bg-muted rounded w-16 animate-pulse mb-1" />
                <div className="h-3 bg-muted rounded w-24 animate-pulse" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to your admin dashboard. Here's an overview of your site's performance.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalPosts}</div>
            <p className="text-xs text-muted-foreground">
              {stats.publishedPosts} published, {stats.draftPosts} drafts
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Published Posts</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.publishedPosts}</div>
            <p className="text-xs text-muted-foreground">
              {stats.totalPosts > 0 ? Math.round((stats.publishedPosts / stats.totalPosts) * 100) : 0}% of total posts
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalUsers}</div>
            <p className="text-xs text-muted-foreground">
              Registered members
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Newsletter Subscribers</CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.newsletterSubscribers}</div>
            <p className="text-xs text-muted-foreground">
              {stats.totalUsers > 0 ? Math.round((stats.newsletterSubscribers / stats.totalUsers) * 100) : 0}% of users
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Blog Posts</CardTitle>
            <CardDescription>
              Your latest blog posts and their status
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stats.recentPosts.length === 0 ? (
                <p className="text-muted-foreground text-center py-4">
                  No blog posts found. <Link to="/admin/blog" className="text-primary hover:underline">Create your first post</Link>
                </p>
              ) : (
                stats.recentPosts.map((post) => (
                  <div key={post.id} className="flex items-center justify-between space-x-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{post.title}</p>
                      <p className="text-xs text-muted-foreground">
                        Created {formatDate(post.created_at)}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      {getStatusBadge(post.status)}
                    </div>
                  </div>
                ))
              )}
            </div>
            {stats.recentPosts.length > 0 && (
              <div className="mt-4">
                <Button variant="outline" asChild className="w-full">
                  <Link to="/admin/blog">
                    <FileText className="w-4 h-4 mr-2" />
                    Manage All Posts
                  </Link>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
        
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common admin tasks
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button asChild className="w-full justify-start">
              <Link to="/admin/blog">
                <FileText className="w-4 h-4 mr-2" />
                Create New Post
              </Link>
            </Button>
            
            <Button variant="outline" asChild className="w-full justify-start">
              <Link to="/admin/users">
                <Users className="w-4 h-4 mr-2" />
                Manage Users
              </Link>
            </Button>
            
            <Button variant="outline" asChild className="w-full justify-start">
              <Link to="/admin/newsletter">
                <Mail className="w-4 h-4 mr-2" />
                Send Newsletter
              </Link>
            </Button>
            
            <Button variant="outline" asChild className="w-full justify-start">
              <Link to="/admin/settings">
                <Activity className="w-4 h-4 mr-2" />
                System Settings
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* System Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="w-5 h-5" />
            System Status
          </CardTitle>
          <CardDescription>
            Current system health and information
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-sm">Database Connected</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-sm">Authentication Active</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-sm">Admin Panel Online</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboardHome;