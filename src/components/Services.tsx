
import { ClipboardCheck, Users, BarChart3, FolderKanban } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const serviceData = [
  {
    title: "Administrative Support",
    description: "Efficient handling of day-to-day tasks including email management, calendar scheduling, and document organization.",
    icon: ClipboardCheck,
    price: "$15-25",
    features: ["Email Management", "Calendar Management", "Data Entry", "Document Organization"]
  },
  {
    title: "Business Development",
    description: "Strategic support for growing your business through market research, lead generation, and competitor analysis.",
    icon: BarChart3,
    price: "$20-30",
    features: ["Market Research", "Lead Generation", "Competitor Analysis", "Growth Strategy Support"]
  },
  {
    title: "Client Management",
    description: "Maintaining excellent client relationships through regular communication, follow-ups, and satisfaction monitoring.",
    icon: Users,
    price: "$18-28",
    features: ["Client Communication", "Follow-up Systems", "CRM Management", "Satisfaction Surveys"]
  },
  {
    title: "Project Coordination",
    description: "Ensuring smooth project workflows with timeline management, team coordination, and progress tracking.",
    icon: FolderKanban,
    price: "$22-32",
    features: ["Timeline Management", "Team Coordination", "Progress Tracking", "Resource Allocation"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-warmWhite to-sunflower/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive virtual assistant solutions designed to help your business bloom and grow
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceData.map((service, index) => (
            <Card key={index} className="bg-white border-none navy-shadow card-hover">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-sunflower/20 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-navy" />
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                <CardDescription className="text-navy/70">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="mb-4">
                  <span className="text-2xl font-bold text-navy">{service.price}</span>
                  <span className="text-navy/60 ml-1">/hour</span>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <span className="w-5 h-5 bg-leafGreen/20 text-leafGreen rounded-full flex items-center justify-center text-xs mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-navy text-warmWhite hover:bg-navy/90">Learn More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-navy/80 mb-6">Looking for a custom solution for your business needs?</p>
          <Button className="btn-primary">Contact Us for Custom Packages</Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
