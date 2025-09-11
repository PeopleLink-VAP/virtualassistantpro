import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { getUserProfile, verifyAdminAccess } from '@/integrations/supabase/server';

interface Profile {
  id: string;
  user_id: string;
  email: string;
  full_name: string | null;
  role: string;
  membership_tier: string;
  bio: string | null;
  skills: string[] | null;
  avatar_url: string | null;
  country_of_origin: string | null;
}

interface AdminAuthContextType {
  isAdminAuthenticated: boolean;
  adminLogin: (username: string, password: string) => Promise<boolean>;
  adminLogout: () => void;
  authMethod: 'basic' | 'supabase' | null;
  user: User | null;
  session: Session | null;
  profile: Profile | null;
  isLoading: boolean;
  isAdmin: boolean;
  isVerified: boolean;
  refreshProfile: () => Promise<void>;
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);

interface AdminAuthProviderProps {
  children: ReactNode;
}

export const AdminAuthProvider = ({ children }: AdminAuthProviderProps) => {
  const [basicAuthAuthenticated, setBasicAuthAuthenticated] = useState(false);
  const [authMethod, setAuthMethod] = useState<'basic' | 'supabase' | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isVerified, setIsVerified] = useState(false);

  const fetchProfile = async (userId: string) => {
    try {
      // Use server-side function to get profile
      const profileData = await getUserProfile(userId);
      
      if (profileData) {
        setProfile({
          id: profileData.id,
          user_id: profileData.user_id,
          email: profileData.email,
          full_name: profileData.full_name,
          role: profileData.role || 'user',
          membership_tier: profileData.membership_tier || 'free',
          bio: profileData.bio,
          skills: profileData.skills,
          avatar_url: profileData.avatar_url,
          country_of_origin: profileData.country_of_origin
        });
        
        // Verify admin access using server-side function
        const adminVerified = await verifyAdminAccess(userId);
        setIsVerified(adminVerified);
        
        if (adminVerified) {
          setAuthMethod('supabase');
        }
      } else {
        setProfile(null);
        setIsVerified(false);
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
      setProfile(null);
      setIsVerified(false);
    }
  };

  const refreshProfile = async () => {
    if (user) {
      await fetchProfile(user.id);
    }
  };

  // Check for stored basic auth session and set up Supabase auth listener
  useEffect(() => {
    const storedAuth = localStorage.getItem('admin_basic_auth');
    if (storedAuth === 'true') {
      setBasicAuthAuthenticated(true);
      setAuthMethod('basic');
    }

    // Set up Supabase auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        if (session?.user) {
          // Use a small delay to ensure the session is fully established
          setTimeout(() => {
            fetchProfile(session.user.id);
          }, 100);
        } else {
          setProfile(null);
          setIsVerified(false);
          // Don't reset authMethod if basic auth is still valid
          if (authMethod !== 'basic') {
            setAuthMethod(null);
          }
        }
        
        setIsLoading(false);
      }
    );

    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      if (session?.user) {
        fetchProfile(session.user.id);
      }
      setIsLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const adminLogin = async (username: string, password: string): Promise<boolean> => {
    // First try Supabase authentication
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: username,
        password: password,
      });
      
      if (!error) {
        // Supabase auth successful, profile will be fetched via auth state change
        return true;
      }
    } catch (error) {
      console.error('Supabase auth error:', error);
    }

    // Fallback to basic auth
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

  const adminLogout = async () => {
    // Sign out from Supabase if authenticated
    if (session) {
      await supabase.auth.signOut();
    }
    
    // Clear basic auth
    setBasicAuthAuthenticated(false);
    setAuthMethod(null);
    localStorage.removeItem('admin_basic_auth');
    
    // Clear profile data
    setProfile(null);
    setIsVerified(false);
    setUser(null);
    setSession(null);
  };

  // Admin is authenticated if either basic auth is valid or Supabase admin is verified
  const isAdminAuthenticated = basicAuthAuthenticated || (profile?.role === 'admin' && isVerified);
  const isAdmin = profile?.role === 'admin' && isVerified;

  const value = {
    isAdminAuthenticated,
    adminLogin,
    adminLogout,
    authMethod,
    user,
    session,
    profile,
    isLoading,
    isAdmin,
    isVerified,
    refreshProfile,
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