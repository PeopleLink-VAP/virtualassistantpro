import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useAuth } from './useAuth';

interface AdminAuthContextType {
  isAdminAuthenticated: boolean;
  adminLogin: (username: string, password: string) => boolean;
  adminLogout: () => void;
  authMethod: 'supabase' | 'basic' | null;
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);

interface AdminAuthProviderProps {
  children: ReactNode;
}

export const AdminAuthProvider = ({ children }: AdminAuthProviderProps) => {
  const { isAdmin, user } = useAuth();
  const [basicAuthAuthenticated, setBasicAuthAuthenticated] = useState(false);
  const [authMethod, setAuthMethod] = useState<'supabase' | 'basic' | null>(null);

  // Check for stored basic auth session on mount
  useEffect(() => {
    const storedAuth = localStorage.getItem('admin_basic_auth');
    if (storedAuth === 'true') {
      setBasicAuthAuthenticated(true);
      setAuthMethod('basic');
    }
  }, []);

  // Update auth method based on Supabase auth state
  useEffect(() => {
    if (isAdmin && user) {
      setAuthMethod('supabase');
    } else if (!user && !basicAuthAuthenticated) {
      setAuthMethod(null);
    }
  }, [isAdmin, user, basicAuthAuthenticated]);

  const adminLogin = (username: string, password: string): boolean => {
    const adminUsername = import.meta.env.VITE_ADMIN_USERNAME;
    const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD;

    if (username === adminUsername && password === adminPassword) {
      setBasicAuthAuthenticated(true);
      setAuthMethod('basic');
      localStorage.setItem('admin_basic_auth', 'true');
      return true;
    }
    return false;
  };

  const adminLogout = () => {
    setBasicAuthAuthenticated(false);
    setAuthMethod(null);
    localStorage.removeItem('admin_basic_auth');
  };

  const isAdminAuthenticated = isAdmin || basicAuthAuthenticated;

  const value = {
    isAdminAuthenticated,
    adminLogin,
    adminLogout,
    authMethod,
  };

  return (
    <AdminAuthContext.Provider value={value}>
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);
  if (context === undefined) {
    throw new Error('useAdminAuth must be used within an AdminAuthProvider');
  }
  return context;
};