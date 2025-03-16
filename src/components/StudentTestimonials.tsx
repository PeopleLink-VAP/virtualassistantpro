
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GraduationCap, Award, ThumbsUp } from "lucide-react";

const students = [
  {
    id: 1,
    name: "Linh Nguyen",
    avatar: "https://i.pravatar.cc/150?img=9",
    location: "Ho Chi Minh City",
    testimonial: "The training program gave me confidence and practical skills. I now work with international clients I never thought I could reach.",
    specialization: "Administrative Support",
    icon: GraduationCap
  },
  {
    id: 2,
    name: "Minh Tran",
    avatar: "https://i.pravatar.cc/150?img=12",
    location: "Hanoi",
    testimonial: "The mentorship and practical exercises prepared me for real client situations. I've tripled my income since completing the program.",
    specialization: "Business Development",
    icon: Award
  },
  {
    id: 3,
    name: "Huong Pham",
    avatar: "https://i.pravatar.cc/150?img=15",
    location: "Da Nang",
    testimonial: "Learning from experienced VAs made all the difference. The ongoing community support helps me continuously improve my services.",
    specialization: "Project Coordination",
    icon: ThumbsUp
  },
  {
    id: 4,
    name: "Trung Le",
    avatar: "https://i.pravatar.cc/150?img=20",
    location: "Can Tho",
    testimonial: "The program's focus on international standards and cultural awareness has been invaluable in working with clients from different countries.",
    specialization: "Client Management",
    icon: GraduationCap
  },
  {
    id: 5,
    name: "Mai Vo",
    avatar: "https://i.pravatar.cc/150?img=21",
    location: "Hue",
    testimonial: "The certification has opened doors to high-quality clients. The skills I learned have made me confident in handling complex projects.",
    specialization: "Administrative Support",
    icon: Award
  },
  {
    id: 6,
    name: "Quan Nguyen",
    avatar: "https://i.pravatar.cc/150?img=25",
    location: "Nha Trang",
    testimonial: "The practical, hands-on approach to learning made it easy to apply new skills immediately. I started getting clients even before graduation.",
    specialization: "Business Development",
    icon: ThumbsUp
  }
];

const StudentTestimonials = () => {
  const [visibleTestimonials, setVisibleTestimonials] = useState<number[]>([]);

  useEffect(() => {
    // Initial batch
    setVisibleTestimonials([0, 1, 2]);
    
    // Function to rotate testimonials
    const rotateTestimonials = () => {
      setVisibleTestimonials(prev => {
        const newBatch = [];
        for (let i = 0; i < 3; i++) {
          // Get next index, loop back to beginning if needed
          const nextIndex = (Math.max(...prev) + i + 1) % students.length;
          newBatch.push(nextIndex);
        }
        return newBatch;
      });
    };
    
    // Set interval to rotate testimonials every 5 seconds
    const interval = setInterval(rotateTestimonials, 5000);
    
    // Clean up interval
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-sunflower/10 to-warmWhite relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Success Stories</h2>
          <p className="section-subtitle">
            Meet the graduates who transformed their careers through our training program
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12 mb-12 relative">
          {students.map((student, index) => (
            <div 
              key={student.id}
              className={`
                relative transition-all duration-700 
                ${visibleTestimonials.includes(index) 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-10 scale-95 absolute -z-10'
                }
              `}
            >
              <div className="w-64 h-96 bg-white/70 backdrop-blur-md rounded-2xl p-6 flex flex-col navy-shadow overflow-hidden card-hover">
                <div className="relative mb-6">
                  <Avatar className="h-16 w-16 mx-auto border-2 border-sunflower">
                    <AvatarImage src={student.avatar} alt={student.name} />
                    <AvatarFallback className="bg-sunflower/50 text-navy font-bold">
                      {student.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-2 right-1/2 transform translate-x-1/2 bg-leafGreen text-warmWhite text-xs px-2 py-1 rounded-full">
                    {student.specialization}
                  </div>
                </div>
                
                <h4 className="font-bold text-center text-navy">{student.name}</h4>
                <p className="text-sm text-navy/70 text-center mb-4">{student.location}</p>
                
                <div className="flex-grow">
                  <p className="text-navy/80 text-sm italic">"{student.testimonial}"</p>
                </div>
                
                <div className="mt-4 flex justify-center">
                  <student.icon className="h-6 w-6 text-sunflower" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Floating avatars with animations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {students.map((student, index) => (
            <div 
              key={`floating-${student.id}`}
              className="absolute opacity-30"
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
                animationDelay: `${index * 0.5}s`
              }}
            >
              <Avatar className="h-12 w-12 border-2 border-sunflower/50 animate-pulse">
                <AvatarImage src={student.avatar} alt={student.name} />
                <AvatarFallback className="bg-sunflower/30 text-navy font-bold">
                  {student.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
            </div>
          ))}
        </div>
        
        {/* Animations CSS */}
        <style jsx global>{`
          @keyframes float {
            0% {
              transform: translateY(0) rotate(0deg);
            }
            50% {
              transform: translateY(-20px) rotate(5deg);
            }
            100% {
              transform: translateY(0) rotate(0deg);
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default StudentTestimonials;
