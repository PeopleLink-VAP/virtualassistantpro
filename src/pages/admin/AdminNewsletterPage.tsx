import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { NewsletterManager } from '@/components/admin/NewsletterManager';
import { Mail } from 'lucide-react';

const AdminNewsletterPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
          <Mail className="w-8 h-8" />
          Newsletter Management
        </h1>
        <p className="text-muted-foreground">
          Create and manage email campaigns and subscriber lists.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Newsletter & Email Campaigns</CardTitle>
          <CardDescription>
            Send newsletters, manage subscribers, and track email campaign performance.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <NewsletterManager />
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminNewsletterPage;