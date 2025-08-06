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
      .maybeSingle(); // Use maybeSingle() instead of single() to avoid throwing on not found

    if (profileError) {
      // If there's an error other than not found, throw it
      console.error('Profile lookup error:', profileError);
      throw profileError;
    }

    let userCreated = false;

    if (!existingProfile) {
      // User doesn't exist, create a new account using regular signup
      const password = generateSimplePassword(12);
      
      // Create user account using regular auth signup
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          data: {
            subscription_source: source,
            auto_generated: true,
            membership_tier: 'subscriber',
            role: 'member',
          },
          // Don't require email redirect for newsletter signups
          emailRedirectTo: undefined
        }
      });

      if (authError) {
        console.error('Auth signup error:', authError);
        throw authError;
      }

      if (authData.user) {
        userCreated = true;
        
        // The profile will be automatically created by database trigger
        // We can update it after a short delay to ensure it's created
        setTimeout(async () => {
          try {
            await supabase
              .from('profiles')
              .update({
                membership_tier: 'subscriber',
                role: 'member'
              })
              .eq('user_id', authData.user.id);
          } catch (updateError) {
            console.warn('Profile update error:', updateError);
          }
        }, 1000);
      }
    } else {
      // User exists, update their subscription status if needed
      if (existingProfile.membership_tier === 'basic' || !existingProfile.membership_tier) {
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
    }

    // Add to newsletter list (if newsletter system is implemented)
    // This would be where you'd add the user to an email list
    console.log(`User ${email} subscribed to newsletter from ${source}`);

    return {
      success: true,
      message: userCreated 
        ? 'Đăng ký thành công! Chúng tôi đã gửi email xác nhận đến hộp thư của bạn. Vui lòng kiểm tra và xác nhận để hoàn tất đăng ký newsletter.' 
        : 'Đăng ký newsletter thành công! Cảm ơn bạn đã đăng ký.',
      userCreated
    };

  } catch (error: any) {
    console.error('Newsletter subscription error:', error);
    
    // Handle specific error cases
    let errorMessage = 'Đã xảy ra lỗi khi đăng ký newsletter. Vui lòng thử lại sau.';
    
    if (error.message?.includes('User already registered')) {
      errorMessage = 'Email này đã được đăng ký. Nếu bạn đã có tài khoản, vui lòng đăng nhập.';
    } else if (error.message?.includes('Invalid email')) {
      errorMessage = 'Email không hợp lệ. Vui lòng kiểm tra lại địa chỉ email.';
    } else if (error.message?.includes('signup is disabled')) {
      errorMessage = 'Đăng ký tạm thời bị tắt. Vui lòng liên hệ quản trị viên.';
    }
    
    return {
      success: false,
      message: errorMessage,
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
