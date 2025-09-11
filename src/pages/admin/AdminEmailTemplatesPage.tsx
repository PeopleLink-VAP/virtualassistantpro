import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { EmailTemplateManager } from '@/components/admin/EmailTemplateManager';
import { Mail } from 'lucide-react';

const AdminEmailTemplatesPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
          <Mail className="w-8 h-8" />
          Email Templates
        </h1>
        <p className="text-muted-foreground">
          Create and manage email templates for newsletters, notifications, and automated campaigns.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Email Template Management</CardTitle>
          <CardDescription>
            Design professional email templates with dynamic variables for personalized communication.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <EmailTemplateManager />
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminEmailTemplatesPage;