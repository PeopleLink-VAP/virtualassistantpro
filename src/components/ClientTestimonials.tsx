
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart Solutions",
    avatar: "https://i.pravatar.cc/150?img=1",
    content: "Working with Virtual Assistant Pro has transformed how we manage our administrative tasks. Their attention to detail and quick turnaround has been exactly what our growing company needed.",
    rating: 5,
    company: "TechStart Solutions"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder, EcoGrowth",
    avatar: "https://i.pravatar.cc/150?img=3",
    content: "The business development support we've received has been exceptional. Our VA not only helps with market research but also provides valuable insights that have directly increased our client acquisition.",
    rating: 5,
    company: "EcoGrowth"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Director, Global Edu",
    avatar: "https://i.pravatar.cc/150?img=5",
    content: "The attention to detail and cultural understanding that our VA brings to client management has been invaluable. Our international clients feel understood and valued.",
    rating: 5,
    company: "Global Edu"
  },
  {
    id: 4,
    name: "David Kim",
    role: "Project Manager, BuildFlow",
    avatar: "https://i.pravatar.cc/150?img=8",
    content: "The project coordination service has streamlined our workflows significantly. Our VA anticipates needs before they arise and keeps everything moving smoothly.",
    rating: 5,
    company: "BuildFlow"
  }
];

const ClientTestimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-warmWhite to-sunflower/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Hear from businesses that have transformed their operations with our virtual assistant services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white/70 backdrop-blur-md border-none navy-shadow card-hover overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start">
                  <Avatar className="h-14 w-14 mr-4 border-2 border-sunflower">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-sunflower/50 text-navy font-bold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold text-navy text-lg">{testimonial.name}</h4>
                    <p className="text-navy/70 text-sm">{testimonial.role}</p>
                    <div className="flex mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-sunflower text-sunflower" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-navy/80 italic">"{testimonial.content}"</p>
                </div>
                <div className="mt-4 pt-4 border-t border-navy/10">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-navy/60">{testimonial.company}</span>
                    <span className="text-xs text-navy/60">Verified Client</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
