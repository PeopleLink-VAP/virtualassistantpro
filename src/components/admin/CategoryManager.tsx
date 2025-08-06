import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { Plus, Edit, Trash2, Tag, Folder } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  description: string;
  slug: string;
  color: string;
  post_count?: number;
  created_at: string;
}

export const CategoryManager = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    slug: '',
    color: '#3B82F6',
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      // Since we don't have a separate categories table, we'll get unique categories from blog_posts
      interface CategorySelectResult {
        category: string | null;
      }

      const { data, error } = await supabase
        .from('blog_posts')
        .select('category')
        .not('category', 'is', null);

      if (error) throw error;

      // Count posts per category
      const categoryStats: { [key: string]: number } = {};
      (data as CategorySelectResult[])?.forEach(post => {
        if (post.category) {
          categoryStats[post.category] = (categoryStats[post.category] || 0) + 1;
        }
      });

      // Create category objects with post counts
      const categoryData = Object.keys(categoryStats).map((name, index) => ({
        id: `cat-${index}`,
        name,
        description: `Category for ${name} posts`,
        slug: name.toLowerCase().replace(/\s+/g, '-'),
        color: getColorForCategory(name),
        post_count: categoryStats[name],
        created_at: new Date().toISOString(),
      }));

      setCategories(categoryData);
    } catch (error) {
      console.error('Error fetching categories:', error);
      toast({
        title: "Error",
        description: "Failed to fetch categories.",
        variant: "destructive",
      });
    }
  };

  const getColorForCategory = (name: string) => {
    const colors = ['#3B82F6', '#EF4444', '#10B981', '#F59E0B', '#8B5CF6', '#EC4899'];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  };

  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      slug: '',
      color: '#3B82F6',
    });
    setEditingCategory(null);
  };

  const handleEdit = (category: Category) => {
    setEditingCategory(category);
    setFormData({
      name: category.name,
      description: category.description || '',
      slug: category.slug,
      color: category.color,
    });
    setIsDialogOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!editingCategory) {
      toast({
        title: "Info",
        description: "Category management is currently view-only. Categories are created automatically when used in blog posts.",
      });
      return;
    }

    try {
      // Update all posts with the old category name to use the new one
      const { error } = await supabase
        .from('blog_posts')
        .update({ category: formData.name })
        .eq('category', editingCategory.name);
      
      if (error) throw error;

      toast({ 
        title: "Success", 
        description: "Category updated successfully." 
      });

      setIsDialogOpen(false);
      resetForm();
      fetchCategories();
    } catch (error) {
      console.error('Error updating category:', error);
      toast({
        title: "Error",
        description: "Failed to update category.",
        variant: "destructive",
      });
    }
  };

  const handleDelete = async (category: Category) => {
    if (!confirm(`Are you sure you want to delete the category "${category.name}"? This will set all posts in this category to "General".`)) return;

    try {
      // Update all posts in this category to "General"
      const { error } = await supabase
        .from('blog_posts')
        .update({ category: 'General' })
        .eq('category', category.name);

      if (error) throw error;

      toast({ 
        title: "Success", 
        description: "Category deleted successfully. Posts moved to General category." 
      });
      fetchCategories();
    } catch (error) {
      console.error('Error deleting category:', error);
      toast({
        title: "Error",
        description: "Failed to delete category.",
        variant: "destructive",
      });
    }
  };

  const filteredCategories = categories;

  return (
    <div className="space-y-8">
      {/* Action Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span className="font-medium">{filteredCategories.length}</span>
          <span>categories total</span>
        </div>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={resetForm} className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white shadow-lg">
              <Plus className="w-4 h-4 mr-2" />
              New Category
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>
                {editingCategory ? 'Edit Category' : 'Create New Category'}
              </DialogTitle>
            </DialogHeader>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ 
                    ...prev, 
                    name: e.target.value,
                    slug: generateSlug(e.target.value)
                  }))}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="slug">Slug</Label>
                <Input
                  id="slug"
                  value={formData.slug}
                  onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                />
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="color">Color</Label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    id="color"
                    value={formData.color}
                    onChange={(e) => setFormData(prev => ({ ...prev, color: e.target.value }))}
                    className="w-12 h-8 border border-gray-300 rounded cursor-pointer"
                  />
                  <Input
                    value={formData.color}
                    onChange={(e) => setFormData(prev => ({ ...prev, color: e.target.value }))}
                    className="flex-1"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2">
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">
                  {editingCategory ? 'Update' : 'Create'} Category
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCategories.length === 0 ? (
          <div className="col-span-full py-12 text-center text-gray-500">
            <div className="flex flex-col items-center gap-3">
              <div className="p-3 bg-blue-50 rounded-full">
                <Folder className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="font-medium">No categories found</p>
                <p className="text-sm text-gray-400 mt-1">Categories are created automatically from blog posts</p>
              </div>
            </div>
          </div>
        ) : (
          filteredCategories.map((category) => (
            <Card key={category.id} className="group hover:shadow-lg transition-all duration-300 border border-gray-200/50">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: category.color }}
                    ></div>
                    <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {category.name}
                    </CardTitle>
                  </div>
                  <Badge variant="secondary" className="bg-blue-50 text-blue-600 border-blue-200">
                    {category.post_count} posts
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {category.description}
                </p>
                
                <div className="flex items-center gap-1">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-8 w-8 p-0 hover:bg-blue-100 hover:text-blue-600 text-gray-400"
                    onClick={() => handleEdit(category)}
                    title="Edit category"
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  {category.name !== 'General' && (
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-8 w-8 p-0 hover:bg-red-100 hover:text-red-600 text-gray-400"
                      onClick={() => handleDelete(category)}
                      title="Delete category"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};
