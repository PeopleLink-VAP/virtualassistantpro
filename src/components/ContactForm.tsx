
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Send } from 'lucide-react';
import { toast } from 'sonner';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, "Tên phải có ít nhất 2 ký tự"),
  email: z.string().email("Email không hợp lệ"),
  inquiryType: z.string().min(1, "Vui lòng chọn loại yêu cầu"),
  message: z.string().min(10, "Tin nhắn phải có ít nhất 10 ký tự"),
});

type FormValues = z.infer<typeof formSchema>;

interface ContactFormProps {
  onSuccess?: () => void;
  buttonText?: string;
  showInquiryType?: boolean;
  className?: string;
}

const ContactForm = ({ 
  onSuccess, 
  buttonText = "Gửi Tin Nhắn", 
  showInquiryType = true,
  className = ""
}: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      inquiryType: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Make request to server
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          access_key: '9c6c79be-2d8e-47aa-8109-626fcf1ce000', // Replace with your Web3Forms access key
          ...data,
          subject: `New ${data.inquiryType} inquiry from ${data.name}`,
        })
      });
      
      if (response.ok) {
        toast.success('Cảm ơn bạn đã gửi tin nhắn! Chúng tôi sẽ liên hệ lại sớm.');
        form.reset();
        if (onSuccess) onSuccess();
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại sau.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={`space-y-6 ${className}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Họ Tên</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Nhập họ tên của bạn" className="bg-white/50" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} type="email" placeholder="Nhập email của bạn" className="bg-white/50" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        {showInquiryType && (
          <FormField
            control={form.control}
            name="inquiryType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Loại Yêu Cầu</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-white/50">
                      <SelectValue placeholder="Chọn loại yêu cầu" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-white/90 backdrop-blur-md">
                    <SelectItem value="course">Tôi muốn tìm hiểu khóa học</SelectItem>
                    <SelectItem value="va">Tôi muốn trở thành VA</SelectItem>
                    <SelectItem value="partnership">Cơ hội hợp tác</SelectItem>
                    <SelectItem value="job">Tuyển dụng</SelectItem>
                    <SelectItem value="other">Yêu cầu khác</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tin Nhắn</FormLabel>
              <FormControl>
                <Textarea 
                  {...field} 
                  placeholder="Bạn cần hỗ trợ gì?"
                  className="min-h-[120px] bg-white/50"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit" className="btn-primary w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-navy" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Đang gửi...
            </span>
          ) : (
            <span className="flex items-center">
              <Send className="mr-2 h-4 w-4" />
              {buttonText}
            </span>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
