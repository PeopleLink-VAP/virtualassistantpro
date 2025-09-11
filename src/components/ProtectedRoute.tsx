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

  // If admin is required, use only basic auth (skip regular user auth)
  if (requireAdmin) {
    // Check if user has admin access through basic auth only
    if (!isAdminAuthenticated) {
      return <AdminLogin />;
    }
    return <>{children}</>;
  }

  // For non-admin routes, use regular authentication
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

  return <>{children}</>;
};
