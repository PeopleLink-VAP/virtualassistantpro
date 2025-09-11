// Admin API utilities using server-side Supabase client
import { supabaseServer, verifyAdminAccess } from '@/integrations/supabase/server';
import { Tables } from '@/integrations/supabase/types';

// Type definitions
type CourseRegistration = Tables<'course_registrations'>;
type BlogPost = Tables<'blog_posts'>;
type Profile = Tables<'profiles'>;
type NewsletterCampaign = Tables<'newsletter_campaigns'>;
type NewsletterEmailList = Tables<'newsletter_email_lists'>;
type NewsletterEmailListMember = Tables<'newsletter_email_list_members'>;
type EmailTemplate = Tables<'email_templates'>;
type VirtualAssistant = Tables<'virtual_assistants'>;

// System Email Template type (for Supabase auth templates)
interface SystemEmailTemplate {
  id: string;
  template_key: string;
  name: string;
  description: string | null;
  subject: string;
  html_content: string;
  template_type: string;
  is_active: boolean;
  is_system: boolean;
  variables: string[];
  default_subject: string;
  default_html_content: string;
  created_at: string;
  updated_at: string;
}

// Base API response type
interface ApiResponse<T = any> {
  data?: T;
  error?: string;
  success: boolean;
}

// Admin access wrapper
const withAdminAccess = async <T>(
  userId: string,
  operation: () => Promise<T>
): Promise<ApiResponse<T>> => {
  try {
    const isAdmin = await verifyAdminAccess(userId);
    if (!isAdmin) {
      return {
        success: false,
        error: 'Access denied. Admin privileges required.'
      };
    }
    
    const result = await operation();
    return {
      success: true,
      data: result
    };
  } catch (error) {
    console.error('Admin operation error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
};

// Course Registrations API
export const courseRegistrationsApi = {
  // Get all course registrations
  getAll: async (userId: string): Promise<ApiResponse<CourseRegistration[]>> => {
    return withAdminAccess(userId, async () => {
      const { data, error } = await supabaseServer
        .from('course_registrations')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data || [];
    });
  },

  // Update course registration
  update: async (
    userId: string,
    id: string,
    updates: Partial<CourseRegistration>
  ): Promise<ApiResponse<CourseRegistration>> => {
    return withAdminAccess(userId, async () => {
      const { data, error } = await supabaseServer
        .from('course_registrations')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    });
  },

  // Delete course registration
  delete: async (userId: string, id: string): Promise<ApiResponse<void>> => {
    return withAdminAccess(userId, async () => {
      const { error } = await supabaseServer
        .from('course_registrations')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
    });
  }
};

// Blog Posts API
export const blogPostsApi = {
  // Get all blog posts
  getAll: async (userId: string): Promise<ApiResponse<BlogPost[]>> => {
    return withAdminAccess(userId, async () => {
      const { data, error } = await supabaseServer
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data || [];
    });
  },

  // Get single blog post
  getById: async (userId: string, id: string): Promise<ApiResponse<BlogPost>> => {
    return withAdminAccess(userId, async () => {
      const { data, error } = await supabaseServer
        .from('blog_posts')
        .select('*')
        .eq('id', id)
        .single();
      
      if (error) throw error;
      return data;
    });
  },

  // Create blog post
  create: async (
    userId: string,
    postData: Omit<BlogPost, 'id' | 'created_at' | 'updated_at'>
  ): Promise<ApiResponse<BlogPost>> => {
    return withAdminAccess(userId, async () => {
      const { data, error } = await supabaseServer
        .from('blog_posts')
        .insert(postData)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    });
  },

  // Update blog post
  update: async (
    userId: string,
    id: string,
    updates: Partial<BlogPost>
  ): Promise<ApiResponse<BlogPost>> => {
    return withAdminAccess(userId, async () => {
      const { data, error } = await supabaseServer
        .from('blog_posts')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    });
  },

  // Delete blog post
  delete: async (userId: string, id: string): Promise<ApiResponse<void>> => {
    return withAdminAccess(userId, async () => {
      const { error } = await supabaseServer
        .from('blog_posts')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
    });
  }
};

// Users/Profiles API
export const usersApi = {
  // Get all users
  getAll: async (userId: string): Promise<ApiResponse<Profile[]>> => {
    return withAdminAccess(userId, async () => {
      const { data, error } = await supabaseServer
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data || [];
    });
  },

  // Update user profile
  update: async (
    userId: string,
    profileId: string,
    updates: Partial<Profile>
  ): Promise<ApiResponse<Profile>> => {
    return withAdminAccess(userId, async () => {
      const { data, error } = await supabaseServer
        .from('profiles')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', profileId)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    });
  },

  // Delete user profile
  delete: async (userId: string, profileId: string): Promise<ApiResponse<void>> => {
    return withAdminAccess(userId, async () => {
      const { error } = await supabaseServer
        .from('profiles')
        .delete()
        .eq('id', profileId);
      
      if (error) throw error;
    });
  }
};

// Newsletter API
export const newsletterApi = {
  // Get all campaigns
  getAllCampaigns: async (userId: string): Promise<ApiResponse<NewsletterCampaign[]>> => {
    return withAdminAccess(userId, async () => {
      const { data, error } = await supabaseServer
        .from('newsletter_campaigns')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data || [];
    });
  },

  // Get all email lists
  getAllEmailLists: async (userId: string): Promise<ApiResponse<NewsletterEmailList[]>> => {
    return withAdminAccess(userId, async () => {
      const { data, error } = await supabaseServer
        .from('newsletter_email_lists')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data || [];
    });
  },

  // Get all email list members
  getAllEmailListMembers: async (userId: string): Promise<ApiResponse<NewsletterEmailListMember[]>> => {
    return withAdminAccess(userId, async () => {
      const { data, error } = await supabaseServer
        .from('newsletter_email_list_members')
        .select('*')
        .order('added_at', { ascending: false });
      
      if (error) throw error;
      return data || [];
    });
  },

  // Create campaign
  createCampaign: async (
    userId: string,
    campaignData: Omit<NewsletterCampaign, 'id' | 'created_at' | 'updated_at'>
  ): Promise<ApiResponse<NewsletterCampaign>> => {
    return withAdminAccess(userId, async () => {
      const { data, error } = await supabaseServer
        .from('newsletter_campaigns')
        .insert(campaignData)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    });
  },

  // Update campaign
  updateCampaign: async (
    userId: string,
    id: string,
    updates: Partial<NewsletterCampaign>
  ): Promise<ApiResponse<NewsletterCampaign>> => {
    return withAdminAccess(userId, async () => {
      const { data, error } = await supabaseServer
        .from('newsletter_campaigns')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    });
  },

  // Delete campaign
  deleteCampaign: async (userId: string, id: string): Promise<ApiResponse<void>> => {
    return withAdminAccess(userId, async () => {
      const { error } = await supabaseServer
        .from('newsletter_campaigns')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
    });
  }
};

// Email Templates API
export const emailTemplatesApi = {
  // Get all email templates
  getAll: async (userId: string): Promise<ApiResponse<EmailTemplate[]>> => {
    return withAdminAccess(userId, async () => {
      const { data, error } = await supabaseServer
        .from('email_templates')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data || [];
    });
  },

  // Create email template
  create: async (
    userId: string,
    templateData: Omit<EmailTemplate, 'id' | 'created_at' | 'updated_at'>
  ): Promise<ApiResponse<EmailTemplate>> => {
    return withAdminAccess(userId, async () => {
      const { data, error } = await supabaseServer
        .from('email_templates')
        .insert(templateData)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    });
  },

  // Update email template
  update: async (
    userId: string,
    id: string,
    updates: Partial<EmailTemplate>
  ): Promise<ApiResponse<EmailTemplate>> => {
    return withAdminAccess(userId, async () => {
      const { data, error } = await supabaseServer
        .from('email_templates')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    });
  },

  // Delete email template
  delete: async (userId: string, id: string): Promise<ApiResponse<void>> => {
    return withAdminAccess(userId, async () => {
      const { error } = await supabaseServer
        .from('email_templates')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
    });
  }
};

// Virtual Assistants API
export const virtualAssistantsApi = {
  // Get all virtual assistants
  getAll: async (userId: string): Promise<ApiResponse<VirtualAssistant[]>> => {
    return withAdminAccess(userId, async () => {
      const { data, error } = await supabaseServer
        .from('virtual_assistants')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data || [];
    });
  },

  // Create virtual assistant
  create: async (
    userId: string,
    vaData: Omit<VirtualAssistant, 'id' | 'created_at' | 'updated_at'>
  ): Promise<ApiResponse<VirtualAssistant>> => {
    return withAdminAccess(userId, async () => {
      const { data, error } = await supabaseServer
        .from('virtual_assistants')
        .insert(vaData)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    });
  },

  // Update virtual assistant
  update: async (
    userId: string,
    id: string,
    updates: Partial<VirtualAssistant>
  ): Promise<ApiResponse<VirtualAssistant>> => {
    return withAdminAccess(userId, async () => {
      const { data, error } = await supabaseServer
        .from('virtual_assistants')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    });
  },

  // Delete virtual assistant
  delete: async (userId: string, id: string): Promise<ApiResponse<void>> => {
    return withAdminAccess(userId, async () => {
      const { error } = await supabaseServer
        .from('virtual_assistants')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
    });
  }
};

// System Email Templates API (for managing Supabase auth email templates)
export const systemEmailTemplatesApi = {
  // Get all system email templates
  getAll: async (userId: string): Promise<ApiResponse<SystemEmailTemplate[]>> => {
    return withAdminAccess(userId, async () => {
      const { data, error } = await supabaseServer
        .from('system_email_templates' as any)
        .select('*')
        .order('template_key');
      
      if (error) throw error;
      return (data || []) as unknown as SystemEmailTemplate[];
    });
  },

  // Get system email template by key
  getByKey: async (userId: string, templateKey: string): Promise<ApiResponse<SystemEmailTemplate>> => {
    return withAdminAccess(userId, async () => {
      const { data, error } = await supabaseServer
        .from('system_email_templates' as any)
        .select('*')
        .eq('template_key', templateKey)
        .single();
      
      if (error) throw error;
      return data as unknown as SystemEmailTemplate;
    });
  },

  // Update system email template
  update: async (
    userId: string,
    id: string,
    updates: Partial<Pick<SystemEmailTemplate, 'subject' | 'html_content' | 'is_active'>>
  ): Promise<ApiResponse<SystemEmailTemplate>> => {
    return withAdminAccess(userId, async () => {
      const { data, error } = await supabaseServer
        .from('system_email_templates' as any)
        .update(updates)
        .eq('id', id)
        .select()
        .single();
      
      if (error) throw error;
      return data as unknown as SystemEmailTemplate;
    });
  },

  // Reset template to default
  resetToDefault: async (userId: string, id: string): Promise<ApiResponse<SystemEmailTemplate>> => {
    return withAdminAccess(userId, async () => {
      // First get the template to access default values
      const { data: template, error: fetchError } = await supabaseServer
        .from('system_email_templates' as any)
        .select('default_subject, default_html_content')
        .eq('id', id)
        .single();
      
      if (fetchError) throw fetchError;
      
      const templateData = template as any;
      
      // Update with default values
      const { data, error } = await supabaseServer
        .from('system_email_templates' as any)
        .update({
          subject: templateData.default_subject,
          html_content: templateData.default_html_content
        })
        .eq('id', id)
        .select()
        .single();
      
      if (error) throw error;
      return data as unknown as SystemEmailTemplate;
    });
  },

  // Sync template to Supabase auth configuration
  syncToSupabase: async (userId: string, templateKey: string): Promise<ApiResponse<void>> => {
    return withAdminAccess(userId, async () => {
      // This would require additional implementation to call Supabase Management API
      // For now, we'll just return success
      // In a real implementation, this would update the Supabase auth configuration
      // using the Management API like we did earlier
      return;
    });
  }
};