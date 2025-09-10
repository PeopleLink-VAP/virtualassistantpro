import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BlogManager } from '@/components/admin/BlogManager';
import { FileText } from 'lucide-react';

const AdminBlogPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
          <FileText className="w-8 h-8" />
          Blog Management
        </h1>
        <p className="text-muted-foreground">
          Create, edit, and manage your blog posts with our enhanced editor.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Blog Posts</CardTitle>
          <CardDescription>
            Manage your blog content with advanced filtering, bulk operations, and a Medium-like editor.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <BlogManager />
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminBlogPage;