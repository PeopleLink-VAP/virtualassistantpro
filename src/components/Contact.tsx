
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    value: 'hello@vap-hub.com',
    description: 'For general inquiries and information'
  },
  {
    icon: Phone,
    title: 'Call Us',
    value: '+84 (28) 1234 5678',
    description: 'Mon-Fri from 9am to 6pm (GMT+7)'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    value: 'Ho Chi Minh City, Vietnam',
    description: 'District 1, Central Business Area'
  }
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Thank you for your message! We will get back to you soon.');
      // Would normally reset the form here
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-navy/5 to-warmWhite">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Have questions or ready to get started? Reach out to us and we'll be happy to help.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl navy-shadow p-6">
              <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                {contactMethods.map((method, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="w-10 h-10 bg-sunflower/20 rounded-full flex items-center justify-center mr-4">
                      <method.icon className="h-5 w-5 text-navy" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{method.title}</h4>
                      <p className="text-navy font-medium">{method.value}</p>
                      <p className="text-sm text-navy/70">{method.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-sunflower/30 to-navy/20 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4">Working Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM (GMT+7)</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Saturday:</span>
                  <span>9:00 AM - 1:00 PM (GMT+7)</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-navy/20">
                <p className="text-sm">
                  We also offer flexible scheduling to accommodate different time zones.
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 bg-white rounded-2xl navy-shadow p-6 md:p-8">
            <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Full Name
                  </label>
                  <Input id="name" placeholder="Enter your name" required />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <Input id="email" type="email" placeholder="Enter your email" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="inquiry-type" className="text-sm font-medium">
                  Inquiry Type
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select inquiry type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="client">I'm looking to hire a VA</SelectItem>
                    <SelectItem value="va">I want to become a VA</SelectItem>
                    <SelectItem value="partnership">Partnership opportunity</SelectItem>
                    <SelectItem value="other">Other inquiry</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Your Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="How can we help you?" 
                  className="min-h-[120px]"
                  required 
                />
              </div>
              
              <Button type="submit" className="btn-primary w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-navy" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
