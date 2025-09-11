import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface AdminAuthContextType {
  isAdminAuthenticated: boolean;
  adminLogin: (username: string, password: string) => boolean;
  adminLogout: () => void;
  authMethod: 'basic' | null;
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);

interface AdminAuthProviderProps {
  children: ReactNode;
}

export const AdminAuthProvider = ({ children }: AdminAuthProviderProps) => {
  const [basicAuthAuthenticated, setBasicAuthAuthenticated] = useState(false);
  const [authMethod, setAuthMethod] = useState<'basic' | null>(null);

  // Check for stored basic auth session on mount
  useEffect(() => {
    const storedAuth = localStorage.getItem('admin_basic_auth');
    if (storedAuth === 'true') {
      setBasicAuthAuthenticated(true);
      setAuthMethod('basic');
    }
  }, []);

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

  const isAdminAuthenticated = basicAuthAuthenticated;

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