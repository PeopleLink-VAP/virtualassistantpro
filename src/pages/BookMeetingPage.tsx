
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { CalendarCheck, Users, Clock } from 'lucide-react';
import { toast } from 'sonner';

const BookMeetingPage = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date) {
      toast.error("Please select a date for your meeting");
      return;
    }
    
    setIsSubmitting(true);
    // Simulate booking process
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Your meeting has been booked! We'll send you a confirmation email shortly.");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-warmWhite">
      <Navbar />
      <section className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="section-title">Book a Consultation</h1>
            <p className="section-subtitle">
              Schedule a meeting with our team to discuss your virtual assistant needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white/70 backdrop-blur-md rounded-2xl navy-shadow p-6">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Users className="mr-3 h-6 w-6 text-sunflower" />
                  Why Book a Consultation?
                </h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-8 h-8 bg-sunflower/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-navy font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Personalized Assessment</h4>
                      <p className="text-navy/80">We'll analyze your specific business needs and recommend the right VA solutions.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-8 h-8 bg-sunflower/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-navy font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Custom Service Planning</h4>
                      <p className="text-navy/80">Get a tailored service plan designed specifically for your business goals.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-8 h-8 bg-sunflower/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-navy font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Meet Your Potential VA</h4>
                      <p className="text-navy/80">We can arrange for you to meet potential VA candidates that match your requirements.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-sunflower/30 to-leafGreen/20 backdrop-blur-md rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Clock className="mr-3 h-6 w-6 text-navy" />
                  Consultation Details
                </h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="font-medium">Duration:</span>
                    <span>30 minutes</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Format:</span>
                    <span>Video call (Zoom)</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Cost:</span>
                    <span>Free</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-navy/20">
                  <p className="text-sm">
                    After booking, you'll receive a confirmation email with the Zoom link and details.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3 bg-white/70 backdrop-blur-md rounded-2xl navy-shadow p-6 md:p-8">
              <h3 className="text-xl font-bold mb-6">Schedule Your Meeting</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name
                    </label>
                    <Input id="name" placeholder="Enter your name" required className="bg-white/50" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <Input id="email" type="email" placeholder="Enter your email" required className="bg-white/50" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="business" className="text-sm font-medium">
                    Business/Company Name
                  </label>
                  <Input id="business" placeholder="Enter your business name" required className="bg-white/50" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="service-interest" className="text-sm font-medium">
                      Service Interest
                    </label>
                    <Select>
                      <SelectTrigger className="bg-white/50">
                        <SelectValue placeholder="Select service" />
                      </SelectTrigger>
                      <SelectContent className="bg-white/90 backdrop-blur-md">
                        <SelectItem value="administrative">Administrative Support</SelectItem>
                        <SelectItem value="business">Business Development</SelectItem>
                        <SelectItem value="client">Client Management</SelectItem>
                        <SelectItem value="project">Project Coordination</SelectItem>
                        <SelectItem value="custom">Custom Solution</SelectItem>
                        <SelectItem value="training">VA Training</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="team-size" className="text-sm font-medium">
                      Team Size
                    </label>
                    <Select>
                      <SelectTrigger className="bg-white/50">
                        <SelectValue placeholder="Select team size" />
                      </SelectTrigger>
                      <SelectContent className="bg-white/90 backdrop-blur-md">
                        <SelectItem value="solo">Solo Entrepreneur</SelectItem>
                        <SelectItem value="small">Small Team (2-5)</SelectItem>
                        <SelectItem value="medium">Medium Team (6-20)</SelectItem>
                        <SelectItem value="large">Large Team (21-100)</SelectItem>
                        <SelectItem value="enterprise">Enterprise (100+)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Preferred Meeting Date
                  </label>
                  <div className="bg-white/50 p-3 rounded-md">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="mx-auto"
                      disabled={(date) => {
                        // Disable past dates, weekends
                        const now = new Date();
                        now.setHours(0, 0, 0, 0);
                        return date < now || date.getDay() === 0 || date.getDay() === 6;
                      }}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="notes" className="text-sm font-medium">
                    Additional Notes (Optional)
                  </label>
                  <Textarea 
                    id="notes" 
                    placeholder="Let us know any specific requirements or questions" 
                    className="min-h-[100px] bg-white/50" 
                  />
                </div>
                
                <Button type="submit" className="btn-primary w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-navy" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Booking...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <CalendarCheck className="mr-2 h-5 w-5" />
                      Book Consultation
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BookMeetingPage;
