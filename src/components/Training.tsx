
import { Check, BookOpen, Award, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const programSteps = [
  {
    title: "Foundations",
    description: "Master the essential skills of a professional VA",
    duration: "4 Weeks",
    topics: ["Professional Communication", "Time Management", "Digital Tools Mastery", "Client Service Excellence"]
  },
  {
    title: "Specialization",
    description: "Develop expertise in your chosen service area",
    duration: "6 Weeks",
    topics: ["Administrative Skills", "Business Development", "Client Management", "Project Coordination"]
  },
  {
    title: "Certification",
    description: "Demonstrate your professional capabilities",
    duration: "2 Weeks",
    topics: ["Portfolio Development", "Certification Assessment", "Client Simulation", "Professional Ethics"]
  },
  {
    title: "Career Launch",
    description: "Begin your journey as a professional VA",
    duration: "Ongoing",
    topics: ["Client Matching", "Mentorship Support", "Continuous Learning", "Professional Network"]
  }
];

const Training = () => {
  return (
    <section id="training" className="py-20 bg-gradient-to-b from-sunflower/10 to-warmWhite">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">VA Training Program</h2>
          <p className="section-subtitle">
            Empowering Vietnamese professionals with the skills and knowledge to excel in the global VA market
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-navy rounded-2xl p-8 text-warmWhite">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <BookOpen className="mr-3 h-6 w-6 text-sunflower" />
              Professional Development Pathway
            </h3>
            
            <div className="space-y-6">
              {programSteps.map((step, index) => (
                <div key={index} className="flex">
                  <div className="mr-4 flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-sunflower text-navy flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    {index < programSteps.length - 1 && (
                      <div className="w-0.5 h-full bg-sunflower/30 my-1"></div>
                    )}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold">{step.title}</h4>
                    <p className="text-warmWhite/80 mb-2">{step.description}</p>
                    <div className="text-sm text-sunflower font-medium">Duration: {step.duration}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <Button className="mt-8 bg-sunflower text-navy hover:bg-sunflower/90">
              Apply for Training Program
            </Button>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Award className="mr-3 h-6 w-6 text-sunflower" />
              Success Stories
            </h3>
            
            <div className="space-y-6">
              {[1, 2].map((i) => (
                <Card key={i} className="bg-white border-none navy-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sunflower to-leafGreen flex items-center justify-center text-white font-bold text-lg mr-4">
                        {i === 1 ? 'TL' : 'NH'}
                      </div>
                      <div>
                        <h4 className="font-semibold">{i === 1 ? 'Tran Linh' : 'Nguyen Huong'}</h4>
                        <p className="text-sm text-navy/70">
                          {i === 1 ? 'Administrative VA, Graduated 2022' : 'Project Coordination VA, Graduated 2023'}
                        </p>
                      </div>
                    </div>
                    <p className="text-navy/80 italic">
                      {i === 1 
                        ? "The VAP-Hub training program transformed my professional path. I now work with international clients and earn triple my previous salary while working from home."
                        : "The specialized skills I learned through VAP-Hub allowed me to secure high-quality clients. The ongoing community support has been invaluable for my career growth."}
                    </p>
                    <div className="mt-4 flex items-center">
                      <TrendingUp className="h-4 w-4 text-leafGreen mr-2" />
                      <span className="text-sm font-medium">
                        {i === 1 ? 'Income increased by 200%' : 'Now working with Fortune 500 clients'}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              <Button variant="outline" className="w-full mt-4 border-navy text-navy hover:bg-navy hover:text-warmWhite">
                View More Success Stories
              </Button>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-sunflower/20 to-leafGreen/20 rounded-2xl p-8 md:p-10">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Grow Your VA Career?</h3>
            <p className="text-navy/80 max-w-xl mx-auto">
              Join our comprehensive training program and become a certified professional Virtual Assistant with international standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {["Professional Certification", "Mentorship Support", "Client Matching", "Global Opportunities"].map((benefit, idx) => (
              <div key={idx} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 flex items-center">
                <Check className="h-5 w-5 text-leafGreen mr-2 flex-shrink-0" />
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button className="btn-primary text-base px-8">
              Start Your VA Journey Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;
