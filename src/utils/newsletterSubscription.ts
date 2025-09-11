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
      .select('user_id, membership_tier, newsletter_subscribed')
      .eq('email', email)
      .maybeSingle();

    if (profileError) {
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
        // Update it after a short delay to include newsletter subscription
        setTimeout(async () => {
          try {
            await supabase
              .from('profiles')
              .update({
                membership_tier: 'subscriber',
                role: 'member',
                newsletter_subscribed: true,
                subscription_source: source,
                subscribed_at: new Date().toISOString()
              })
              .eq('user_id', authData.user.id);
          } catch (updateError) {
            console.warn('Profile update error:', updateError);
          }
        }, 1000);
      }
    } else {
      // User exists, update their subscription status
      const updateData: any = {
        newsletter_subscribed: true,
        subscription_source: source,
        subscribed_at: new Date().toISOString()
      };

      // Only update membership tier if they don't have a paid tier
      if (existingProfile.membership_tier === 'basic' || !existingProfile.membership_tier) {
        updateData.membership_tier = 'subscriber';
      }

      const { error: updateError } = await supabase
        .from('profiles')
        .update(updateData)
        .eq('user_id', existingProfile.user_id);

      if (updateError) {
        console.warn('Error updating subscription status:', updateError);
        throw updateError;
      }
    }

    // Add to default newsletter list if it exists
    try {
      // Check if there's a default newsletter list
      const { data: defaultList } = await supabase
        .from('newsletter_email_lists')
        .select('id')
        .eq('name', 'Default Newsletter List')
        .maybeSingle();

      if (defaultList && existingProfile?.user_id) {
        // Add user to newsletter list if not already added
        await supabase
          .from('newsletter_email_list_members')
          .upsert({
            list_id: defaultList.id,
            profile_id: existingProfile.user_id
          }, {
            onConflict: 'list_id,profile_id'
          });
      }
    } catch (listError) {
      console.warn('Error adding to newsletter list:', listError);
    }

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
      .select('newsletter_subscribed')
      .eq('email', email)
      .maybeSingle();

    return !error && !!data && data.newsletter_subscribed;
  } catch (error) {
    console.error('Error checking subscription status:', error);
    return false;
  }
};
