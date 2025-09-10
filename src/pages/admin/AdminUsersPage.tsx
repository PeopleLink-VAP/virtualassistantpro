import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { UserManager } from '@/components/admin/UserManager';
import { Users } from 'lucide-react';

const AdminUsersPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
          <Users className="w-8 h-8" />
          User Management
        </h1>
        <p className="text-muted-foreground">
          Manage user accounts, roles, and membership tiers.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Users & Members</CardTitle>
          <CardDescription>
            Create, edit, and manage user accounts and their permissions.
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