import { useState, useMemo } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search, Filter, Eye, Edit, Trash2, SortAsc, SortDesc, Calendar, User, Tag, FileText } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image: string;
  author: string;
  status: string;
  category: string;
  meta_title: string;
  meta_description: string;
  tags: string[];
  published_at: string;
  created_at: string;
}

interface BlogPostsTableProps {
  posts: BlogPost[];
  onEdit: (post: BlogPost) => void;
  onDelete: (id: string) => void;
}

type SortField = 'title' | 'author' | 'status' | 'category' | 'published_at' | 'created_at';
type SortDirection = 'asc' | 'desc';

export const BlogPostsTable = ({ posts, onEdit, onDelete }: BlogPostsTableProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [sortField, setSortField] = useState<SortField>('created_at');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');

  // Get unique categories for filter
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(posts.map(post => post.category).filter(Boolean)));
    return uniqueCategories.sort();
  }, [posts]);

  // Filter and sort posts
  const filteredAndSortedPosts = useMemo(() => {
    let filtered = posts.filter(post => {
      const matchesSearch = 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesStatus = statusFilter === 'all' || post.status === statusFilter;
      const matchesCategory = categoryFilter === 'all' || post.category === categoryFilter;
      
      return matchesSearch && matchesStatus && matchesCategory;
    });

    // Sort posts
    filtered.sort((a, b) => {
      let aValue: string | number = '';
      let bValue: string | number = '';
      
      switch (sortField) {
        case 'title':
          aValue = a.title;
          bValue = b.title;
          break;
        case 'author':
          aValue = a.author;
          bValue = b.author;
          break;
        case 'status':
          aValue = a.status;
          bValue = b.status;
          break;
        case 'category':
          aValue = a.category || '';
          bValue = b.category || '';
          break;
        case 'published_at':
          aValue = new Date(a.published_at || a.created_at).getTime();
          bValue = new Date(b.published_at || b.created_at).getTime();
          break;
        case 'created_at':
          aValue = new Date(a.created_at).getTime();
          bValue = new Date(b.created_at).getTime();
          break;
      }

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortDirection === 'asc' 
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      } else {
        return sortDirection === 'asc' 
          ? (aValue as number) - (bValue as number)
          : (bValue as number) - (aValue as number);
      }
    });

    return filtered;
  }, [posts, searchTerm, statusFilter, categoryFilter, sortField, sortDirection]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) return null;
    return sortDirection === 'asc' ? 
      <SortAsc className="w-4 h-4 ml-1 inline" /> : 
      <SortDesc className="w-4 h-4 ml-1 inline" />;
  };

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  return (
    <div className="space-y-4">
      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex-1 max-w-sm">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search posts, authors, content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        
        <div className="flex gap-2">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="published">Published</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Results count */}
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>
          Showing {filteredAndSortedPosts.length} of {posts.length} posts
        </span>
      </div>

      {/* Table */}
      <div className="rounded-md border bg-background">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[40%]">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => handleSort('title')}
                  className="h-auto p-0 font-medium hover:bg-transparent"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Title
                  <SortIcon field="title" />
                </Button>
              </TableHead>
              <TableHead className="w-[15%]">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => handleSort('author')}
                  className="h-auto p-0 font-medium hover:bg-transparent"
                >
                  <User className="w-4 h-4 mr-2" />
                  Author
                  <SortIcon field="author" />
                </Button>
              </TableHead>
              <TableHead className="w-[12%]">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => handleSort('status')}
                  className="h-auto p-0 font-medium hover:bg-transparent"
                >
                  Status
                  <SortIcon field="status" />
                </Button>
              </TableHead>
              <TableHead className="w-[15%]">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => handleSort('category')}
                  className="h-auto p-0 font-medium hover:bg-transparent"
                >
                  <Tag className="w-4 h-4 mr-2" />
                  Category
                  <SortIcon field="category" />
                </Button>
              </TableHead>
              <TableHead className="w-[15%]">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => handleSort('published_at')}
                  className="h-auto p-0 font-medium hover:bg-transparent"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Published
                  <SortIcon field="published_at" />
                </Button>
              </TableHead>
              <TableHead className="w-[120px] text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAndSortedPosts.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                  No posts found matching your criteria.
                </TableCell>
              </TableRow>
            ) : (
              filteredAndSortedPosts.map((post) => (
                <TableRow key={post.id} className="hover:bg-muted/50">
                  <TableCell className="font-medium">
                    <div className="space-y-1">
                      <div className="font-semibold text-sm">
                        {truncateText(post.title, 60)}
                      </div>
                      <div className="text-xs text-muted-foreground line-clamp-2">
                        {truncateText(post.excerpt || post.content, 100)}
                      </div>
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex gap-1 flex-wrap mt-1">
                          {post.tags.slice(0, 3).map((tag, index) => (
                            <Badge key={index} variant="outline" className="text-xs h-5">
                              {tag}
                            </Badge>
                          ))}
                          {post.tags.length > 3 && (
                            <Badge variant="outline" className="text-xs h-5">
                              +{post.tags.length - 3}
                            </Badge>
                          )}
                        </div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm font-medium">{post.author}</div>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant={post.status === 'published' ? 'default' : 'secondary'}
                      className={
                        post.status === 'published' 
                          ? 'bg-green-100 text-green-800 hover:bg-green-100' 
                          : 'bg-orange-100 text-orange-800 hover:bg-orange-100'
                      }
                    >
                      <div className={`w-2 h-2 rounded-full mr-2 ${
                        post.status === 'published' ? 'bg-green-500' : 'bg-orange-500'
                      }`} />
                      {post.status === 'published' ? 'Published' : 'Draft'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      {post.category || 'General'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      {post.published_at 
                        ? new Date(post.published_at).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })
                        : new Date(post.created_at).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })
                      }
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-1">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-8 w-8 p-0 hover:bg-blue-100 hover:text-blue-600"
                        onClick={() => window.open(`/blog/${post.slug}`, '_blank')}
                        title="View post"
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-8 w-8 p-0 hover:bg-green-100 hover:text-green-600"
                        onClick={() => onEdit(post)}
                        title="Edit post"
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-8 w-8 p-0 hover:bg-red-100 hover:text-red-600"
                        onClick={() => onDelete(post.id)}
                        title="Delete post"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
