import { TabsContent } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent } from '@/components/ui/card';

interface Profile {
  user_id: string;
  full_name?: string;
  email?: string;
  avatar_url?: string;
  country_of_origin?: string;
}

interface FormData {
  profile_id: string;
  va_status: string;
  experience_years: number;
  hourly_rate: string | number;
  currency: string;
  availability_hours: number;
  timezone: string;
  cv_url: string;
  portfolio_url: string;
  certifications: string;
  avatar_url: string;
  cover_image_url: string;
  specializations: string;
  languages: string;
  tools_proficiency: string;
  success_rate: number;
  completed_projects: number;
  client_rating: number;
  response_time_hours: number;
  admin_notes: string;
  tags: string;
  featured: boolean;
  preferred_contact_method: string;
  phone_number: string;
  whatsapp_number: string;
  telegram_handle: string;
  linkedin_profile: string;
}

interface VirtualAssistantFormTabsProps {
  formData: FormData;
  profiles: Profile[];
  isEditing: boolean;
  onInputChange: (field: string, value: any) => void;
}

export function VirtualAssistantFormTabs({ formData, profiles, isEditing, onInputChange }: VirtualAssistantFormTabsProps) {
  return (
    <>
      {/* Basic Info Tab */}
      <TabsContent value="basic" className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Profile Selection */}
          <div className="space-y-2">
            <Label htmlFor="profile_id">Select Profile *</Label>
            <Select value={formData.profile_id} onValueChange={(value) => onInputChange('profile_id', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Choose a user profile" />
              </SelectTrigger>
              <SelectContent>
                {profiles.map((profile) => (
                  <SelectItem key={profile.user_id} value={profile.user_id}>
                    {profile.full_name || profile.email} ({profile.email})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Status */}
          <div className="space-y-2">
            <Label htmlFor="va_status">Status</Label>
            <Select value={formData.va_status} onValueChange={(value) => onInputChange('va_status', value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
                <SelectItem value="suspended">Suspended</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Avatar URL */}
          <div className="space-y-2">
            <Label htmlFor="avatar_url">Avatar URL</Label>
            <Input
              id="avatar_url"
              value={formData.avatar_url}
              onChange={(e) => onInputChange('avatar_url', e.target.value)}
              placeholder="https://example.com/avatar.jpg"
            />
          </div>

          {/* Cover Image URL */}
          <div className="space-y-2">
            <Label htmlFor="cover_image_url">Cover Image URL</Label>
            <Input
              id="cover_image_url"
              value={formData.cover_image_url}
              onChange={(e) => onInputChange('cover_image_url', e.target.value)}
              placeholder="https://example.com/cover.jpg"
            />
          </div>

          {/* Featured Toggle */}
          <div className="flex items-center space-x-2">
            <Switch
              id="featured"
              checked={formData.featured}
              onCheckedChange={(checked) => onInputChange('featured', checked)}
            />
            <Label htmlFor="featured">Featured VA</Label>
          </div>
        </div>

        {/* Admin Notes */}
        <div className="space-y-2">
          <Label htmlFor="admin_notes">Admin Notes</Label>
          <Textarea
            id="admin_notes"
            value={formData.admin_notes}
            onChange={(e) => onInputChange('admin_notes', e.target.value)}
            placeholder="Internal admin notes about this virtual assistant..."
            rows={3}
          />
        </div>

        {/* Tags */}
        <div className="space-y-2">
          <Label htmlFor="tags">Admin Tags</Label>
          <Input
            id="tags"
            value={formData.tags}
            onChange={(e) => onInputChange('tags', e.target.value)}
            placeholder="urgent, premium, verified (comma separated)"
          />
          <p className="text-xs text-muted-foreground">
            Admin-managed tags for quick filtering and organization
          </p>
        </div>
      </TabsContent>

      {/* Professional Tab */}
      <TabsContent value="professional" className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Experience Years */}
          <div className="space-y-2">
            <Label htmlFor="experience_years">Experience Years</Label>
            <Input
              id="experience_years"
              type="number"
              value={formData.experience_years}
              onChange={(e) => onInputChange('experience_years', parseInt(e.target.value) || 0)}
              min="0"
            />
          </div>

          {/* Hourly Rate */}
          <div className="space-y-2">
            <Label htmlFor="hourly_rate">Hourly Rate</Label>
            <div className="flex gap-2">
              <Input
                id="hourly_rate"
                type="number"
                value={formData.hourly_rate}
                onChange={(e) => onInputChange('hourly_rate', e.target.value)}
                placeholder="25.00"
                step="0.01"
                min="0"
              />
              <Select value={formData.currency} onValueChange={(value) => onInputChange('currency', value)}>
                <SelectTrigger className="w-24">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="USD">USD</SelectItem>
                  <SelectItem value="EUR">EUR</SelectItem>
                  <SelectItem value="GBP">GBP</SelectItem>
                  <SelectItem value="CAD">CAD</SelectItem>
                  <SelectItem value="AUD">AUD</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Availability Hours */}
          <div className="space-y-2">
            <Label htmlFor="availability_hours">Availability (hours/week)</Label>
            <Input
              id="availability_hours"
              type="number"
              value={formData.availability_hours}
              onChange={(e) => onInputChange('availability_hours', parseInt(e.target.value) || 0)}
              min="1"
              max="168"
            />
          </div>

          {/* Timezone */}
          <div className="space-y-2">
            <Label htmlFor="timezone">Timezone</Label>
            <Input
              id="timezone"
              value={formData.timezone}
              onChange={(e) => onInputChange('timezone', e.target.value)}
              placeholder="UTC, EST, PST, etc."
            />
          </div>

          {/* CV URL */}
          <div className="space-y-2">
            <Label htmlFor="cv_url">CV/Resume URL</Label>
            <Input
              id="cv_url"
              value={formData.cv_url}
              onChange={(e) => onInputChange('cv_url', e.target.value)}
              placeholder="https://example.com/resume.pdf"
            />
          </div>

          {/* Portfolio URL */}
          <div className="space-y-2">
            <Label htmlFor="portfolio_url">Portfolio URL</Label>
            <Input
              id="portfolio_url"
              value={formData.portfolio_url}
              onChange={(e) => onInputChange('portfolio_url', e.target.value)}
              placeholder="https://portfolio.example.com"
            />
          </div>
        </div>

        {/* Certifications */}
        <div className="space-y-2">
          <Label htmlFor="certifications">Certifications</Label>
          <Textarea
            id="certifications"
            value={formData.certifications}
            onChange={(e) => onInputChange('certifications', e.target.value)}
            placeholder="Google Analytics Certified, Salesforce Admin, AWS Cloud Practitioner (comma separated)"
            rows={3}
          />
          <p className="text-xs text-muted-foreground">
            List professional certifications, comma separated
          </p>
        </div>

        {/* Performance Metrics */}
        <Card>
          <CardContent className="pt-6">
            <h4 className="font-semibold mb-4">Performance Metrics</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label htmlFor="success_rate">Success Rate (%)</Label>
                <Input
                  id="success_rate"
                  type="number"
                  value={formData.success_rate}
                  onChange={(e) => onInputChange('success_rate', parseFloat(e.target.value) || 0)}
                  min="0"
                  max="100"
                  step="0.1"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="completed_projects">Completed Projects</Label>
                <Input
                  id="completed_projects"
                  type="number"
                  value={formData.completed_projects}
                  onChange={(e) => onInputChange('completed_projects', parseInt(e.target.value) || 0)}
                  min="0"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="client_rating">Client Rating (1-5)</Label>
                <Input
                  id="client_rating"
                  type="number"
                  value={formData.client_rating}
                  onChange={(e) => onInputChange('client_rating', parseFloat(e.target.value) || 0)}
                  min="0"
                  max="5"
                  step="0.1"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="response_time_hours">Response Time (hours)</Label>
                <Input
                  id="response_time_hours"
                  type="number"
                  value={formData.response_time_hours}
                  onChange={(e) => onInputChange('response_time_hours', parseInt(e.target.value) || 0)}
                  min="1"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      {/* Skills Tab */}
      <TabsContent value="skills" className="space-y-4">
        <div className="space-y-4">
          {/* Specializations */}
          <div className="space-y-2">
            <Label htmlFor="specializations">Specializations</Label>
            <Textarea
              id="specializations"
              value={formData.specializations}
              onChange={(e) => onInputChange('specializations', e.target.value)}
              placeholder="Data Entry, Customer Support, Content Writing, Social Media Management (comma separated)"
              rows={3}
            />
            <p className="text-xs text-muted-foreground">
              Primary areas of expertise and service offerings
            </p>
          </div>

          {/* Languages */}
          <div className="space-y-2">
            <Label htmlFor="languages">Languages</Label>
            <Textarea
              id="languages"
              value={formData.languages}
              onChange={(e) => onInputChange('languages', e.target.value)}
              placeholder="English (Native), Spanish (Fluent), French (Intermediate) (comma separated)"
              rows={2}
            />
            <p className="text-xs text-muted-foreground">
              Languages spoken and proficiency levels
            </p>
          </div>

          {/* Tools Proficiency */}
          <div className="space-y-2">
            <Label htmlFor="tools_proficiency">Tools & Software Proficiency</Label>
            <Textarea
              id="tools_proficiency"
              value={formData.tools_proficiency}
              onChange={(e) => onInputChange('tools_proficiency', e.target.value)}
              placeholder="Microsoft Office, Google Workspace, Salesforce, HubSpot, Photoshop, Figma, WordPress (comma separated)"
              rows={4}
            />
            <p className="text-xs text-muted-foreground">
              Software, tools, and platforms the VA is proficient with
            </p>
          </div>
        </div>
      </TabsContent>

      {/* Contact Tab */}
      <TabsContent value="contact" className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Preferred Contact Method */}
          <div className="space-y-2">
            <Label htmlFor="preferred_contact_method">Preferred Contact Method</Label>
            <Select value={formData.preferred_contact_method} onValueChange={(value) => onInputChange('preferred_contact_method', value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="email">Email</SelectItem>
                <SelectItem value="phone">Phone</SelectItem>
                <SelectItem value="whatsapp">WhatsApp</SelectItem>
                <SelectItem value="telegram">Telegram</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <Label htmlFor="phone_number">Phone Number</Label>
            <Input
              id="phone_number"
              value={formData.phone_number}
              onChange={(e) => onInputChange('phone_number', e.target.value)}
              placeholder="+1234567890"
            />
          </div>

          {/* WhatsApp Number */}
          <div className="space-y-2">
            <Label htmlFor="whatsapp_number">WhatsApp Number</Label>
            <Input
              id="whatsapp_number"
              value={formData.whatsapp_number}
              onChange={(e) => onInputChange('whatsapp_number', e.target.value)}
              placeholder="+1234567890"
            />
          </div>

          {/* Telegram Handle */}
          <div className="space-y-2">
            <Label htmlFor="telegram_handle">Telegram Handle</Label>
            <Input
              id="telegram_handle"
              value={formData.telegram_handle}
              onChange={(e) => onInputChange('telegram_handle', e.target.value)}
              placeholder="@username"
            />
          </div>

          {/* LinkedIn Profile */}
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="linkedin_profile">LinkedIn Profile</Label>
            <Input
              id="linkedin_profile"
              value={formData.linkedin_profile}
              onChange={(e) => onInputChange('linkedin_profile', e.target.value)}
              placeholder="https://linkedin.com/in/username"
            />
          </div>
        </div>

        <Card>
          <CardContent className="pt-6">
            <h4 className="font-semibold mb-2">Contact Information Guidelines</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Ensure all contact information is current and verified</li>
              <li>• Phone numbers should include country codes</li>
              <li>• WhatsApp numbers can be different from regular phone numbers</li>
              <li>• Telegram handles should include the @ symbol</li>
              <li>• LinkedIn profiles should be complete professional URLs</li>
            </ul>
          </CardContent>
        </Card>
      </TabsContent>
    </>
  );
}
