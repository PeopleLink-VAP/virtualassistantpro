import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { UserManager } from '@/components/admin/UserManager';
import { Users } from 'lucide-react';

const AdminUsersPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
          <Users className="w-8 h-8" />
          Member Management
        </h1>
        <p className="text-muted-foreground">
          Manage member accounts, roles, and membership tiers.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Members & Accounts</CardTitle>
          <CardDescription>
            Create, edit, and manage member accounts and their permissions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <UserManager />
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminUsersPage;