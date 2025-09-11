import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CourseRegistrationsManager } from '@/components/admin/CourseRegistrationsManager';
import { GraduationCap } from 'lucide-react';

const AdminCourseRegistrationsPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
          <GraduationCap className="w-8 h-8" />
          Course Registration Management
        </h1>
        <p className="text-muted-foreground">
          Manage course registrations, track student enrollment status, and handle communications.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Course Registrations</CardTitle>
          <CardDescription>
            View and manage all course registration requests, update status, and track student progress.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CourseRegistrationsManager />
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminCourseRegistrationsPage;