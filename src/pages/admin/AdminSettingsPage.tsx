import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SystemSettings } from '@/components/admin/SystemSettings';
import { Settings } from 'lucide-react';

const AdminSettingsPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
          <Settings className="w-8 h-8" />
          System Settings
        </h1>
        <p className="text-muted-foreground">
          Configure system settings and view system information.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>System Configuration</CardTitle>
          <CardDescription>
            View system information and configure application settings.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SystemSettings />
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminSettingsPage;