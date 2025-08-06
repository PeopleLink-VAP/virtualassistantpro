import { supabase } from '@/integrations/supabase/client';
import { generateSimplePassword } from './passwordGenerator';

export interface NewsletterSubscriptionResult {
  success: boolean;
  message: string;
  userCreated?: boolean;
  error?: any;
}

/**
 * Subscribe user to newsletter and create account if they don't exist
 * @param email User's email address
 * @param source Source of subscription (e.g., 'newsletter_form', 'footer', etc.)
 * @returns Subscription result
 */
export const subscribeToNewsletter = async (
  email: string, 
  source: string = 'newsletter_form'
): Promise<NewsletterSubscriptionResult> => {
  try {
    // Check if user already exists
    const { data: existingProfile, error: profileError } = await supabase
      .from('profiles')
      .select('user_id, membership_tier')
      .eq('email', email)
      .single();

    if (profileError && profileError.code !== 'PGRST116') {
      // Error other than "not found"
      throw profileError;
    }

    let userCreated = false;

    if (!existingProfile) {
      // User doesn't exist, create a new account
      const password = generateSimplePassword(10);
      
      // Create user account using Supabase Auth Admin API
      const { data: authData, error: authError } = await supabase.auth.admin.createUser({
        email: email,
        password: password,
        email_confirm: true,
        user_metadata: {
          subscription_source: source,
          auto_generated: true,
        }
      });

      if (authError) throw authError;

      if (authData.user) {
        // Update profile with subscriber tier
        const { error: profileUpdateError } = await supabase
          .from('profiles')
          .update({
            membership_tier: 'subscriber',
            role: 'member'
          })
          .eq('user_id', authData.user.id);

        if (profileUpdateError) {
          console.warn('Profile update error:', profileUpdateError);
        }

        userCreated = true;
      }
    } else if (existingProfile.membership_tier === 'basic' || existingProfile.membership_tier === 'subscriber') {
      // User exists but has basic or subscriber tier, ensure they're marked as subscriber
      const { error: updateError } = await supabase
        .from('profiles')
        .update({
          membership_tier: 'subscriber'
        })
        .eq('user_id', existingProfile.user_id);

      if (updateError) {
        console.warn('Error updating membership tier:', updateError);
      }
    }

    // Add to newsletter list (if newsletter system is implemented)
    // This would be where you'd add the user to an email list
    // For now, we'll just log it
    console.log(`User ${email} subscribed to newsletter from ${source}`);

    return {
      success: true,
      message: userCreated 
        ? 'Đăng ký thành công! Bạn đã được tạo tài khoản và sẽ nhận được newsletter.' 
        : 'Đăng ký newsletter thành công!',
      userCreated
    };

  } catch (error: any) {
    console.error('Newsletter subscription error:', error);
    
    return {
      success: false,
      message: 'Đã xảy ra lỗi khi đăng ký newsletter. Vui lòng thử lại sau.',
      error: error.message || 'Unknown error',
      userCreated: false
    };
  }
};

/**
 * Check if an email is already subscribed
 * @param email Email to check
 * @returns Whether the email is subscribed
 */
export const isEmailSubscribed = async (email: string): Promise<boolean> => {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('user_id')
      .eq('email', email)
      .single();

    return !error && !!data;
  } catch (error) {
    console.error('Error checking subscription status:', error);
    return false;
  }
};
