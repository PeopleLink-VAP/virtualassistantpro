import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import {
  Search,
  Star,
  Clock,
  Globe,
  Award,
  Filter,
  Users,
  Briefcase,
  MapPin,
  Languages,
  Grid,
  List
} from 'lucide-react';
import { toast } from 'sonner';

interface Profile {
  user_id: string;
  full_name?: string;
  email?: string;
  avatar_url?: string;
  country_of_origin?: string;
}

interface VirtualAssistant {
  id: string;
  profile_id: string;
  experience_years: number;
  availability_hours: number;
  timezone?: string;
  avatar_url?: string;
  specializations?: string[];
  languages?: string[];
  tools_proficiency?: string[];
  success_rate: number;
  completed_projects: number;
  client_rating: number;
  featured: boolean;
  created_at: string;
  profiles?: Profile;
}

const VANetworkPage = () => {
  const [virtualAssistants, setVirtualAssistants] = useState<VirtualAssistant[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [specializationFilter, setSpecializationFilter] = useState<string>('all');
  const [locationFilter, setLocationFilter] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [allSpecializations, setAllSpecializations] = useState<string[]>([]);
  const [allLocations, setAllLocations] = useState<string[]>([]);

  useEffect(() => {
    fetchVirtualAssistants();
  }, []);

  const fetchVirtualAssistants = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('virtual_assistants')
        .select(`
          *,
          profiles!virtual_assistants_profile_id_fkey (
            user_id,
            full_name,
            avatar_url,
            country_of_origin
          )
        `)
        .eq('va_status', 'approved')
        .order('featured', { ascending: false })
        .order('client_rating', { ascending: false });

      if (error) throw error;
      
      setVirtualAssistants(data || []);
      
      // Extract unique specializations and locations for filters
      const specs = new Set<string>();
      const locations = new Set<string>();
      
      data?.forEach(va => {
        va.specializations?.forEach(spec => specs.add(spec));
        if (va.profiles?.country_of_origin) {
          locations.add(va.profiles.country_of_origin);
        }
      });
      
      setAllSpecializations(Array.from(specs).sort());
      setAllLocations(Array.from(locations).sort());
      
    } catch (error) {
      console.error('Error fetching virtual assistants:', error);
      toast.error('Failed to load virtual assistants');
    } finally {
      setLoading(false);
    }
  };

  const filteredVAs = virtualAssistants.filter(va => {
    const matchesSearch = !searchTerm || 
      va.profiles?.full_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      va.specializations?.some(spec => spec.toLowerCase().includes(searchTerm.toLowerCase())) ||
      va.languages?.some(lang => lang.toLowerCase().includes(searchTerm.toLowerCase())) ||
      va.tools_proficiency?.some(tool => tool.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesSpecialization = specializationFilter === 'all' || 
      va.specializations?.includes(specializationFilter);
    
    const matchesLocation = locationFilter === 'all' || 
      va.profiles?.country_of_origin === locationFilter;
    
    return matchesSearch && matchesSpecialization && matchesLocation;
  });

  const featuredVAs = filteredVAs.filter(va => va.featured);
  const regularVAs = filteredVAs.filter(va => !va.featured);

  if (loading) {
    return (
      <div className="min-h-screen bg-warmWhite">
        <Seo 
          title="VA Network - Virtual Assistant Pro"
          description="Browse our directory of verified and skilled virtual assistants ready to help grow your business."
          keywords="virtual assistants, VA network, remote workers, freelancers, business support"
        />
        <Navbar />
        <div className="pt-20 flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sunflower"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-warmWhite">
      <Seo 
        title="VA Network - Virtual Assistant Pro"
        description="Browse our directory of verified and skilled virtual assistants ready to help grow your business."
        keywords="virtual assistants, VA network, remote workers, freelancers, business support"
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-navy to-navy/90">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-['Big_Shoulders_Stencil']">
              VA Network
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Meet our talented community of verified virtual assistants. Each member has been carefully vetted and approved to ensure the highest quality of service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Badge className="bg-sunflower text-navy px-4 py-2 text-lg">
                <Users className="w-5 h-5 mr-2" />
                {virtualAssistants.length} Verified VAs
              </Badge>
              <Badge className="bg-white/20 text-white px-4 py-2 text-lg">
                <Star className="w-5 h-5 mr-2" />
                {featuredVAs.length} Featured
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white/50 backdrop-blur-sm sticky top-16 z-40 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search by name, skills, or tools..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white"
                />
              </div>
            </div>
            
            {/* Filters */}
            <div className="flex gap-2 items-center flex-wrap">
              <Filter className="w-4 h-4 text-gray-500" />
              
              <Select value={specializationFilter} onValueChange={setSpecializationFilter}>
                <SelectTrigger className="w-48 bg-white">
                  <SelectValue placeholder="All Specializations" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Specializations</SelectItem>
                  {allSpecializations.map((spec) => (
                    <SelectItem key={spec} value={spec}>{spec}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={locationFilter} onValueChange={setLocationFilter}>
                <SelectTrigger className="w-40 bg-white">
                  <SelectValue placeholder="All Locations" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  {allLocations.map((location) => (
                    <SelectItem key={location} value={location}>{location}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              {/* View Mode Toggle */}
              <div className="flex border rounded-lg overflow-hidden bg-white">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="rounded-none"
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="rounded-none"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Assistants Directory */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Results Summary */}
          <div className="mb-8">
            <p className="text-gray-600">
              Showing {filteredVAs.length} of {virtualAssistants.length} virtual assistants
              {searchTerm && ` for "${searchTerm}"`}
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mb-8">
              <TabsTrigger value="all">All VAs ({filteredVAs.length})</TabsTrigger>
              <TabsTrigger value="featured">Featured ({featuredVAs.length})</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <VAGrid 
                virtualAssistants={filteredVAs}
                viewMode={viewMode}
                showFeaturedFirst={true}
              />
            </TabsContent>
            
            <TabsContent value="featured">
              <VAGrid 
                virtualAssistants={featuredVAs}
                viewMode={viewMode}
                showFeaturedFirst={false}
              />
            </TabsContent>
          </Tabs>

          {filteredVAs.length === 0 && (
            <div className="text-center py-16">
              <Users className="w-16 h-16 mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">No virtual assistants found</h3>
              <p className="text-gray-600">
                {searchTerm || specializationFilter !== 'all' || locationFilter !== 'all'
                  ? 'Try adjusting your filters or search terms'
                  : 'Check back soon as we add more talented virtual assistants to our network'}
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

interface VAGridProps {
  virtualAssistants: VirtualAssistant[];
  viewMode: 'grid' | 'list';
  showFeaturedFirst: boolean;
}

const VAGrid = ({ virtualAssistants, viewMode, showFeaturedFirst }: VAGridProps) => {
  let sortedVAs = [...virtualAssistants];
  
  if (showFeaturedFirst) {
    sortedVAs = sortedVAs.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return b.client_rating - a.client_rating;
    });
  }

  if (viewMode === 'grid') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sortedVAs.map((va) => (
          <VACard key={va.id} va={va} />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {sortedVAs.map((va) => (
        <VAListItem key={va.id} va={va} />
      ))}
    </div>
  );
};

interface VACardProps {
  va: VirtualAssistant;
}

const VACard = ({ va }: VACardProps) => {
  return (
    <Card className="relative hover:shadow-lg transition-shadow duration-300 border-0 bg-white/70 backdrop-blur-sm">
      {va.featured && (
        <div className="absolute -top-2 -right-2 z-10">
          <Badge className="bg-sunflower text-navy px-3 py-1 rounded-full shadow-lg">
            <Star className="w-3 h-3 mr-1 fill-current" />
            Featured
          </Badge>
        </div>
      )}
      
      <CardHeader className="text-center pb-4">
        <Avatar className="w-20 h-20 mx-auto mb-3 border-4 border-white shadow-lg">
          <AvatarImage src={va.avatar_url || va.profiles?.avatar_url} />
          <AvatarFallback className="bg-sunflower text-navy text-lg font-bold">
            {va.profiles?.full_name?.substring(0, 2).toUpperCase() || '??'}
          </AvatarFallback>
        </Avatar>
        
        <CardTitle className="text-lg mb-1">
          {va.profiles?.full_name || 'Virtual Assistant'}
        </CardTitle>
        
        {va.profiles?.country_of_origin && (
          <div className="flex items-center justify-center gap-1 text-sm text-gray-600">
            <MapPin className="w-3 h-3" />
            {va.profiles.country_of_origin}
          </div>
        )}
        
        <div className="flex items-center justify-center gap-1 mt-2">
          <Star className="w-4 h-4 text-yellow-500 fill-current" />
          <span className="text-sm font-medium">{va.client_rating.toFixed(1)}</span>
          <span className="text-xs text-gray-500">({va.completed_projects} projects)</span>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3 text-gray-500" />
            <span>{va.experience_years} years</span>
          </div>
          <div className="flex items-center gap-1">
            <Briefcase className="w-3 h-3 text-gray-500" />
            <span>{va.availability_hours}h/week</span>
          </div>
        </div>

        {va.specializations && va.specializations.length > 0 && (
          <div>
            <p className="text-xs font-medium text-gray-600 mb-2">Specializations:</p>
            <div className="flex flex-wrap gap-1">
              {va.specializations.slice(0, 3).map((spec, index) => (
                <Badge key={index} variant="outline" className="text-xs py-0 px-2">
                  {spec}
                </Badge>
              ))}
              {va.specializations.length > 3 && (
                <Badge variant="outline" className="text-xs py-0 px-2">
                  +{va.specializations.length - 3}
                </Badge>
              )}
            </div>
          </div>
        )}

        {va.languages && va.languages.length > 0 && (
          <div>
            <p className="text-xs font-medium text-gray-600 mb-2">Languages:</p>
            <div className="flex flex-wrap gap-1">
              {va.languages.slice(0, 2).map((lang, index) => (
                <Badge key={index} variant="secondary" className="text-xs py-0 px-2">
                  <Languages className="w-3 h-3 mr-1" />
                  {lang}
                </Badge>
              ))}
              {va.languages.length > 2 && (
                <Badge variant="secondary" className="text-xs py-0 px-2">
                  +{va.languages.length - 2}
                </Badge>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const VAListItem = ({ va }: VACardProps) => {
  return (
    <Card className="hover:shadow-md transition-shadow duration-200 border-0 bg-white/70 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="relative">
            <Avatar className="w-16 h-16 border-4 border-white shadow-lg">
              <AvatarImage src={va.avatar_url || va.profiles?.avatar_url} />
              <AvatarFallback className="bg-sunflower text-navy font-bold">
                {va.profiles?.full_name?.substring(0, 2).toUpperCase() || '??'}
              </AvatarFallback>
            </Avatar>
            {va.featured && (
              <div className="absolute -top-1 -right-1">
                <Badge className="bg-sunflower text-navy px-2 py-0 text-xs rounded-full">
                  <Star className="w-2 h-2 mr-1 fill-current" />
                </Badge>
              </div>
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-xl font-semibold mb-1">
                  {va.profiles?.full_name || 'Virtual Assistant'}
                </h3>
                {va.profiles?.country_of_origin && (
                  <div className="flex items-center gap-1 text-sm text-gray-600 mb-2">
                    <MapPin className="w-3 h-3" />
                    {va.profiles.country_of_origin}
                  </div>
                )}
              </div>
              
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="font-medium">{va.client_rating.toFixed(1)}</span>
                <span className="text-sm text-gray-500">({va.completed_projects})</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-gray-500" />
                <span>{va.experience_years} years exp.</span>
              </div>
              <div className="flex items-center gap-1">
                <Briefcase className="w-3 h-3 text-gray-500" />
                <span>{va.availability_hours}h/week</span>
              </div>
              <div className="flex items-center gap-1">
                <Award className="w-3 h-3 text-gray-500" />
                <span>{va.success_rate}% success</span>
              </div>
              {va.timezone && (
                <div className="flex items-center gap-1">
                  <Globe className="w-3 h-3 text-gray-500" />
                  <span>{va.timezone}</span>
                </div>
              )}
            </div>
            
            <div className="flex flex-wrap gap-2">
              {va.specializations?.slice(0, 4).map((spec, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {spec}
                </Badge>
              ))}
              {va.specializations && va.specializations.length > 4 && (
                <Badge variant="outline" className="text-xs">
                  +{va.specializations.length - 4} more
                </Badge>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VANetworkPage;
