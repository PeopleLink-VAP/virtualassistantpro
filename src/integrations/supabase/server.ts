// Server-side Supabase client with service role key for admin operations
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

// Get environment variables
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || "https://vjolbqhdnyrktxnugixe.supabase.co";
const SUPABASE_SERVICE_ROLE_KEY = import.meta.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_SERVICE_ROLE_KEY) {
  console.warn('SUPABASE_SERVICE_ROLE_KEY is not set. Server-side operations will be limited.');
  // In development, we'll fall back to using the regular client for now
  // In production, this should be properly configured
}

// Create server-side client with service role key
// This client bypasses RLS and has full database access
// If service role key is not available, fall back to publishable key (with limitations)
const SUPABASE_PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqb2xicWhkbnlya3R4bnVnaXhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0MDkwNTAsImV4cCI6MjA2OTk4NTA1MH0.-RVZ0b3Ia885rbzrszkPb2JpR4654A_xssNSUow4Y8g";

export const supabaseServer = createClient<Database>(
  SUPABASE_URL,
  SUPABASE_SERVICE_ROLE_KEY || SUPABASE_PUBLISHABLE_KEY,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
);

// Helper function to verify admin access
export const verifyAdminAccess = async (userId: string): Promise<boolean> => {
  try {
    const { data, error } = await supabaseServer
      .from('profiles')
      .select('role')
      .eq('user_id', userId)
      .single();
    
    if (error || !data) {
      console.error('Error verifying admin access:', error);
      return false;
    }
    
    return data.role === 'admin';
  } catch (error) {
    console.error('Error in verifyAdminAccess:', error);
    return false;
  }
};

// Helper function to get user profile
export const getUserProfile = async (userId: string) => {
  try {
    const { data, error } = await supabaseServer
      .from('profiles')
      .select('*')
      .eq('user_id', userId)
      .single();
    
    if (error) {
      console.error('Error fetching user profile:', error);
      return null;
    }
    
    return data;
  } catch (error) {
    console.error('Error in getUserProfile:', error);
    return null;
  }
};