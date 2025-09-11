import React, { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import { courseRegistrationsApi } from '@/utils/adminApi';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  GraduationCap, 
  Mail, 
  Phone, 
  Calendar, 
  User, 
  MessageSquare, 
  Edit, 
  Trash2, 
  RefreshCw,
  Search,
  Filter,
  Download
} from 'lucide-react';
import { Tables } from '@/integrations/supabase/types';

type CourseRegistration = Tables<'course_registrations'>;

const statusColors = {
  pending: 'bg-yellow-100 text-yellow-800',
  contacted: 'bg-blue-100 text-blue-800',
  enrolled: 'bg-green-100 text-green-800',
  cancelled: 'bg-red-100 text-red-800'
};

const statusLabels = {
  pending: 'Chờ liên hệ',
  contacted: 'Đã liên hệ',
  enrolled: 'Đã ghi danh',
  cancelled: 'Đã hủy'
};

export function CourseRegistrationsManager() {
  const { user, isAdmin, isAdminAuthenticated } = useAdminAuth();
  const { toast } = useToast();
  const [registrations, setRegistrations] = useState<CourseRegistration[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedRegistration, setSelectedRegistration] = useState<CourseRegistration | null>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editForm, setEditForm] = useState({
    status: '',
    notes: '',
    contacted_at: ''
  });

  useEffect(() => {
    if (isAdminAuthenticated) {
      fetchRegistrations();
    } else if (user && !isAdmin) {
      setLoading(false);
      toast({
        title: "Truy cập bị từ chối",
        description: "Bạn không có quyền truy cập trang này.",
        variant: "destructive",
      });
    }
  }, [user, isAdmin, isAdminAuthenticated]);

  const fetchRegistrations = async () => {
    if (!user?.id) return;
    
    try {
      setLoading(true);
      const response = await courseRegistrationsApi.getAll(user.id);

      if (!response.success) {
        console.error('Error fetching registrations:', response.error);
        toast({
          title: "Lỗi tải dữ liệu",
          description: response.error || "Không thể tải danh sách đăng ký khóa học.",
          variant: "destructive"
        });
        return;
      }

      setRegistrations(response.data || []);
    } catch (error) {
      console.error('Unexpected error:', error);
      toast({
        title: "Lỗi hệ thống",
        description: "Có lỗi không mong muốn xảy ra.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (id: string, newStatus: string) => {
    if (!user?.id) return;
    
    try {
      const updateData: Partial<CourseRegistration> = { 
        status: newStatus
      };
      
      if (newStatus === 'contacted' && !selectedRegistration?.contacted_at) {
        updateData.contacted_at = new Date().toISOString();
      }

      const response = await courseRegistrationsApi.update(user.id, id, updateData);

      if (!response.success) {
        console.error('Error updating status:', response.error);
        toast({
          title: "Lỗi cập nhật",
          description: response.error || "Không thể cập nhật trạng thái đăng ký.",
          variant: "destructive"
        });
        return;
      }

      toast({
        title: "Cập nhật thành công",
        description: "Trạng thái đăng ký đã được cập nhật.",
        variant: "default"
      });
      
      fetchRegistrations();
    } catch (error) {
      console.error('Unexpected error:', error);
      toast({
        title: "Lỗi hệ thống",
        description: "Có lỗi không mong muốn xảy ra.",
        variant: "destructive"
      });
    }
  };

  const handleEditSubmit = async () => {
    if (!selectedRegistration || !user?.id) return;

    try {
      const updateData: Partial<CourseRegistration> = {
        status: editForm.status,
        notes: editForm.notes
      };

      if (editForm.contacted_at) {
        updateData.contacted_at = editForm.contacted_at;
      }

      const response = await courseRegistrationsApi.update(user.id, selectedRegistration.id, updateData);

      if (!response.success) {
        console.error('Error updating registration:', response.error);
        toast({
          title: "Lỗi cập nhật",
          description: response.error || "Không thể cập nhật thông tin đăng ký.",
          variant: "destructive"
        });
        return;
      }

      toast({
        title: "Cập nhật thành công",
        description: "Thông tin đăng ký đã được cập nhật.",
        variant: "default"
      });
      
      setIsEditDialogOpen(false);
      fetchRegistrations();
    } catch (error) {
      console.error('Unexpected error:', error);
      toast({
        title: "Lỗi hệ thống",
        description: "Có lỗi không mong muốn xảy ra.",
        variant: "destructive"
      });
    }
  };

  const openEditDialog = (registration: CourseRegistration) => {
    setSelectedRegistration(registration);
    setEditForm({
      status: registration.status || 'pending',
      notes: registration.notes || '',
      contacted_at: registration.contacted_at ? new Date(registration.contacted_at).toISOString().slice(0, 16) : ''
    });
    setIsEditDialogOpen(true);
  };

  const filteredRegistrations = registrations.filter(registration => {
    const matchesSearch = 
      registration.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      registration.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      registration.phone.includes(searchTerm);
    
    const matchesStatus = statusFilter === 'all' || registration.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const getExperienceLabel = (experience: string | null) => {
    const labels: { [key: string]: string } = {
      'beginner': 'Mới bắt đầu (0-1 năm)',
      'intermediate': 'Trung cấp (1-3 năm)',
      'advanced': 'Có kinh nghiệm (3+ năm)',
      'expert': 'Chuyên gia (5+ năm)'
    };
    return labels[experience || ''] || 'Chưa xác định';
  };

  const exportToCSV = () => {
    const headers = ['Họ tên', 'Email', 'Điện thoại', 'Kinh nghiệm', 'Trạng thái', 'Ngày đăng ký', 'Ngày liên hệ'];
    const csvData = filteredRegistrations.map(reg => [
      reg.full_name,
      reg.email,
      reg.phone,
      getExperienceLabel(reg.experience),
      statusLabels[reg.status as keyof typeof statusLabels] || reg.status,
      new Date(reg.created_at || '').toLocaleDateString('vi-VN'),
      reg.contacted_at ? new Date(reg.contacted_at).toLocaleDateString('vi-VN') : ''
    ]);
    
    const csvContent = [headers, ...csvData]
      .map(row => row.map(field => `"${field}"`).join(','))
      .join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `course-registrations-${new Date().toISOString().slice(0, 10)}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Show loading state while checking authentication
  if (!user) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
        <span className="ml-2">Đang tải...</span>
      </div>
    );
  }

  // Show access denied for non-admin users
  if (!isAdmin) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Truy cập bị từ chối</h2>
          <p className="text-gray-600">Bạn không có quyền truy cập trang này.</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <RefreshCw className="h-8 w-8 animate-spin text-muted-foreground" />
        <span className="ml-2 text-muted-foreground">Đang tải dữ liệu...</span>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header with stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-5 w-5 text-blue-600" />
              <div>
                <p className="text-sm font-medium text-muted-foreground">Tổng đăng ký</p>
                <p className="text-2xl font-bold">{registrations.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-yellow-600" />
              <div>
                <p className="text-sm font-medium text-muted-foreground">Chờ liên hệ</p>
                <p className="text-2xl font-bold">
                  {registrations.filter(r => r.status === 'pending').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-blue-600" />
              <div>
                <p className="text-sm font-medium text-muted-foreground">Đã liên hệ</p>
                <p className="text-2xl font-bold">
                  {registrations.filter(r => r.status === 'contacted').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <User className="h-5 w-5 text-green-600" />
              <div>
                <p className="text-sm font-medium text-muted-foreground">Đã ghi danh</p>
                <p className="text-2xl font-bold">
                  {registrations.filter(r => r.status === 'enrolled').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and actions */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex flex-col sm:flex-row gap-2 flex-1">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Tìm kiếm theo tên, email, số điện thoại..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[180px]">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Lọc theo trạng thái" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tất cả trạng thái</SelectItem>
              <SelectItem value="pending">Chờ liên hệ</SelectItem>
              <SelectItem value="contacted">Đã liên hệ</SelectItem>
              <SelectItem value="enrolled">Đã ghi danh</SelectItem>
              <SelectItem value="cancelled">Đã hủy</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex gap-2">
          <Button onClick={exportToCSV} variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Xuất CSV
          </Button>
          <Button onClick={fetchRegistrations} variant="outline">
            <RefreshCw className="h-4 w-4 mr-2" />
            Làm mới
          </Button>
        </div>
      </div>

      {/* Registrations list */}
      <div className="space-y-4">
        {filteredRegistrations.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center">
              <GraduationCap className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Chưa có đăng ký nào</h3>
              <p className="text-muted-foreground">
                {searchTerm || statusFilter !== 'all' 
                  ? 'Không tìm thấy đăng ký nào phù hợp với bộ lọc.' 
                  : 'Chưa có học viên nào đăng ký khóa học.'}
              </p>
            </CardContent>
          </Card>
        ) : (
          filteredRegistrations.map((registration) => (
            <Card key={registration.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {registration.full_name}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                          <div className="flex items-center gap-1">
                            <Mail className="h-4 w-4" />
                            <a href={`mailto:${registration.email}`} className="hover:text-primary">
                              {registration.email}
                            </a>
                          </div>
                          <div className="flex items-center gap-1">
                            <Phone className="h-4 w-4" />
                            <a href={`tel:${registration.phone}`} className="hover:text-primary">
                              {registration.phone}
                            </a>
                          </div>
                        </div>
                      </div>
                      <Badge className={statusColors[registration.status as keyof typeof statusColors] || 'bg-gray-100 text-gray-800'}>
                        {statusLabels[registration.status as keyof typeof statusLabels] || registration.status}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-muted-foreground">Kinh nghiệm:</span>
                        <span className="ml-2">{getExperienceLabel(registration.experience)}</span>
                      </div>
                      <div>
                        <span className="font-medium text-muted-foreground">Ngày đăng ký:</span>
                        <span className="ml-2">
                          {new Date(registration.created_at || '').toLocaleDateString('vi-VN', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </span>
                      </div>
                      {registration.contacted_at && (
                        <div>
                          <span className="font-medium text-muted-foreground">Ngày liên hệ:</span>
                          <span className="ml-2">
                            {new Date(registration.contacted_at).toLocaleDateString('vi-VN', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </span>
                        </div>
                      )}
                    </div>
                    
                    {registration.motivation && (
                      <div className="bg-muted/50 p-3 rounded-lg">
                        <span className="font-medium text-sm text-muted-foreground">Lý do tham gia:</span>
                        <p className="text-sm mt-1">{registration.motivation}</p>
                      </div>
                    )}
                    
                    {registration.notes && (
                      <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                        <span className="font-medium text-sm text-blue-900">Ghi chú admin:</span>
                        <p className="text-sm mt-1 text-blue-800">{registration.notes}</p>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex flex-col gap-2 lg:w-48">
                    <Select 
                      value={registration.status || 'pending'} 
                      onValueChange={(value) => handleStatusUpdate(registration.id, value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pending">Chờ liên hệ</SelectItem>
                        <SelectItem value="contacted">Đã liên hệ</SelectItem>
                        <SelectItem value="enrolled">Đã ghi danh</SelectItem>
                        <SelectItem value="cancelled">Đã hủy</SelectItem>
                      </SelectContent>
                    </Select>
                    
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => openEditDialog(registration)}
                      className="w-full"
                    >
                      <Edit className="h-4 w-4 mr-2" />
                      Chỉnh sửa
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Chỉnh sửa đăng ký khóa học</DialogTitle>
            <DialogDescription>
              Cập nhật thông tin và trạng thái đăng ký của {selectedRegistration?.full_name}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="status">Trạng thái</Label>
              <Select value={editForm.status} onValueChange={(value) => setEditForm({...editForm, status: value})}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pending">Chờ liên hệ</SelectItem>
                  <SelectItem value="contacted">Đã liên hệ</SelectItem>
                  <SelectItem value="enrolled">Đã ghi danh</SelectItem>
                  <SelectItem value="cancelled">Đã hủy</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="contacted_at">Ngày giờ liên hệ</Label>
              <Input
                id="contacted_at"
                type="datetime-local"
                value={editForm.contacted_at}
                onChange={(e) => setEditForm({...editForm, contacted_at: e.target.value})}
              />
            </div>
            
            <div>
              <Label htmlFor="notes">Ghi chú admin</Label>
              <Textarea
                id="notes"
                placeholder="Thêm ghi chú về học viên này..."
                value={editForm.notes}
                onChange={(e) => setEditForm({...editForm, notes: e.target.value})}
                rows={3}
              />
            </div>
          </div>
          
          <div className="flex justify-end gap-2 mt-6">
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Hủy
            </Button>
            <Button onClick={handleEditSubmit}>
              Lưu thay đổi
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}