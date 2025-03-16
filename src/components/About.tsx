
import { Globe, Clock, Shield, Users } from 'lucide-react';

const stats = [
  { label: 'Trained VAs', value: '200+' },
  { label: 'Client Satisfaction', value: '98%' },
  { label: 'Countries Served', value: '25+' },
  { label: 'Years of Experience', value: '7+' }
];

const values = [
  { 
    icon: Globe, 
    title: 'Bilingual Excellence',
    description: 'Bridging cultures with fluent Vietnamese and English communication to serve global clients effectively.'
  },
  { 
    icon: Clock, 
    title: 'Reliable Support',
    description: 'Dependable assistance with consistent delivery and responsive communication across time zones.'
  },
  { 
    icon: Shield, 
    title: 'Professional Integrity',
    description: 'Upholding the highest standards of confidentiality, quality, and ethical business practices.'
  },
  { 
    icon: Users, 
    title: 'Growth Mindset',
    description: 'Committed to continuous learning and development for both our VAs and the businesses we serve.'
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-warmWhite to-navy/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">About VAP-Hub</h2>
          <p className="section-subtitle">
            Our mission is to nurture professional growth for both clients and aspiring Virtual Assistants
          </p>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-6 navy-shadow">
              <div className="text-4xl lg:text-5xl font-bold text-sunflower mb-2">{stat.value}</div>
              <div className="text-navy/80 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* Our Story */}
        <div className="bg-white/70 backdrop-blur-md rounded-2xl navy-shadow p-8 md:p-10 mb-20">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Our Story</h3>
              <div className="space-y-4 text-navy/80">
                <p>
                  VAP-Hub was founded in 2017 with a vision to create opportunities for talented Vietnamese professionals 
                  in the global remote work market while providing excellent support to international businesses.
                </p>
                <p>
                  Starting with just 5 VAs and 3 clients, we've grown into a thriving community of over 200 professional 
                  Virtual Assistants serving clients in more than 25 countries across diverse industries.
                </p>
                <p>
                  Our sunflower symbol represents the growth, warmth, and optimism we bring to every client relationship 
                  and VA career journey. Just as sunflowers turn toward the light, we continuously adapt and develop to 
                  meet evolving business needs.
                </p>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="relative h-full min-h-[300px] rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                  alt="VAP-Hub team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h4 className="text-xl font-bold">Growing Together</h4>
                    <p className="mt-2 text-white/90">
                      Our team of dedicated professionals is committed to nurturing growth for both clients and VAs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Our Values */}
        <h3 className="text-2xl font-bold text-center mb-10">Our Core Values</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, idx) => (
            <div key={idx} className="bg-white/70 backdrop-blur-md rounded-xl p-6 navy-shadow card-hover">
              <div className="w-12 h-12 bg-sunflower/20 rounded-full flex items-center justify-center mb-4">
                <value.icon className="h-6 w-6 text-navy" />
              </div>
              <h4 className="text-xl font-bold mb-2">{value.title}</h4>
              <p className="text-navy/80">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
