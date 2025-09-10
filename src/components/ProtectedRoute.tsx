import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import { AdminLogin } from '@/components/admin/AdminLogin';
import { Loader2 } from 'lucide-react';

interface ProtectedRouteProps {
  children: ReactNode;
  requireAdmin?: boolean;
}

export const ProtectedRoute = ({ children, requireAdmin = false }: ProtectedRouteProps) => {
  const { user, profile, isLoading } = useAuth();
  const { isAdminAuthenticated } = useAdminAuth();

  // Show loading state while authentication is being determined
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  // Redirect to login if not authenticated
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If admin is required, check both Supabase admin role and basic auth
  if (requireAdmin) {
    // If user is not authenticated at all, show login
    if (!user) {
      return <AdminLogin />;
    }
    
    // Wait for profile to be loaded before checking role
    if (!profile) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="flex flex-col items-center gap-4">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="text-muted-foreground">Loading profile...</p>
          </div>
        </div>
      );
    }
    
    // Check if user has admin access through either method
    if (!isAdminAuthenticated) {
      return <AdminLogin />;
    }
  }

  return <>{children}</>;
};
