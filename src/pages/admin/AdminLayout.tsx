import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

import { useAdminAuth } from '@/hooks/useAdminAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { 
  Users, FileText, Settings, LogOut, Mail, UserCheck, 
  BarChart3, Shield, Menu, X, Home, GraduationCap
} from 'lucide-react';

const AdminLayout = () => {
  const { adminLogout, authMethod } = useAdminAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const handleSignOut = async () => {
    adminLogout();
    window.location.reload();
  };

  const navigation = [
    {
      name: 'Dashboard',
      href: '/admin',
      icon: BarChart3,
      current: location.pathname === '/admin'
    },
    {
      name: 'Blog Posts',
      href: '/admin/blog',
      icon: FileText,
      current: location.pathname.startsWith('/admin/blog')
    },
    {
      name: 'Users',
      href: '/admin/users',
      icon: Users,
      current: location.pathname.startsWith('/admin/users')
    },
    {
      name: 'Course Registrations',
      href: '/admin/course-registrations',
      icon: GraduationCap,
      current: location.pathname.startsWith('/admin/course-registrations')
    },
    {
      name: 'Newsletter',
      href: '/admin/newsletter',
      icon: Mail,
      current: location.pathname.startsWith('/admin/newsletter')
    },
    {
      name: 'Email Templates',
      href: '/admin/email-templates',
      icon: Mail,
      current: location.pathname.startsWith('/admin/email-templates')
    },
    {
      name: 'Settings',
      href: '/admin/settings',
      icon: Settings,
      current: location.pathname.startsWith('/admin/settings')
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
            
            <Link to="/" className="flex items-center gap-2 hover:scale-105 transition-transform">
              <svg height="36px" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M45 25C45 25.8583 44.7 26.7167 44.1417 27.4833C43.65 28.15 42.9667 28.7417 42.1667 29.1833C41.4333 29.5917 40.5917 29.8 39.7 29.8C39.0667 29.8 38.4167 29.6917 37.75 29.4833C36.9583 29.2417 36.0917 29.1333 35.05 29.1583C35.7667 29.85 36.525 30.4083 37.3583 30.8583C38.675 31.5667 39.6583 32.7417 40.0667 34.0833C40.6583 36.0417 40.3083 37.9833 39.1333 39.1417C38.35 39.9333 37.2417 40.35 35.95 40.35C35.35 40.35 34.7583 40.2667 34.175 40.0917C32.8167 39.7083 31.6333 38.675 30.8417 37.2C30.45 36.4667 29.9083 35.7667 29.1667 35.05C29.1833 36.05 29.325 36.975 29.6 37.8833C30.025 39.3333 29.9 40.8167 29.2333 42.075C28.275 43.8833 26.65 45 25 45C24.1417 45 23.2833 44.7 22.5167 44.1417C21.85 43.65 21.2583 42.9667 20.8167 42.1667C20.1167 40.9167 20.0167 39.35 20.5167 37.75C20.7583 36.9583 20.8667 36.0917 20.8417 35.05C20.15 35.7667 19.5917 36.525 19.1417 37.3583C18.4333 38.675 17.2583 39.6583 15.9167 40.0667C15.2917 40.2583 14.6583 40.35 14.0583 40.35C12.7917 40.35 11.6417 39.9333 10.8583 39.1333C10.0667 38.35 9.65 37.2417 9.65 35.95C9.65 35.35 9.73333 34.7583 9.90833 34.175C10.2917 32.8167 11.325 31.6333 12.8 30.8417C13.5333 30.45 14.2333 29.9083 14.95 29.1667C13.95 29.1833 13.025 29.325 12.1167 29.6C11.55 29.7667 10.9833 29.85 10.425 29.85C9.55 29.85 8.7 29.6417 7.925 29.2333C6.11667 28.275 5 26.65 5 25C5 24.1417 5.3 23.2833 5.85833 22.5167C6.35 21.85 7.03333 21.2583 7.83333 20.8167C9.08333 20.1167 10.65 20.0167 12.25 20.5167C13.0417 20.7583 13.9083 20.8667 14.95 20.8417C14.2333 20.15 13.475 19.5917 12.6417 19.1417C11.325 18.4333 10.3417 17.2583 9.93333 15.9167C9.34167 13.9583 9.69167 12.0167 10.8667 10.8583C11.65 10.0667 12.7583 9.65 14.05 9.65C14.65 9.65 15.2417 9.73333 15.825 9.90833C17.1833 10.2917 18.3667 11.325 19.1583 12.8C19.55 13.5333 20.0917 14.2333 20.8333 14.95C20.8167 13.95 20.675 13.025 20.4 12.1167C19.975 10.6667 20.1 9.18333 20.7667 7.925C21.725 6.11667 23.35 5 25 5C25.8583 5 26.7167 5.3 27.4833 5.85833C28.15 6.35 28.7417 7.03333 29.1833 7.83333C29.8833 9.08333 29.9833 10.65 29.4833 12.25C29.2417 13.0417 29.1333 13.9083 29.1583 14.95C29.85 14.2333 30.4083 13.475 30.8583 12.6417C31.5667 11.325 32.7417 10.3417 34.0833 9.93333C36.0417 9.34167 37.9833 9.69167 39.1417 10.8667C39.9333 11.65 40.35 12.7583 40.35 14.05C40.35 14.65 40.2667 15.2417 40.0917 15.825C39.7083 17.1833 38.675 18.3667 37.2 19.1583C36.4667 19.55 35.7667 20.0917 35.05 20.8333C36.05 20.8167 36.975 20.675 37.8833 20.4C39.3333 19.975 40.8167 20.1 42.075 20.7667C43.8833 21.725 45 23.35 45 25Z" fill="#FDD31E"></path>
                <path d="M32.5 25C32.5 25.3667 32.4667 25.75 32.4083 26.1833C32.4083 26.225 32.3917 26.2667 32.3833 26.3083C32.3167 26.7167 32.2083 27.1167 32.0667 27.5083C31.9417 27.875 31.775 28.2417 31.5833 28.5833C31.5583 28.65 31.4833 28.7833 31.4 28.9083C31.3167 29.0583 31.1917 29.2417 31.0667 29.4167C30.6167 30.0333 30.075 30.575 29.4583 31.025C29.4333 31.05 29.4083 31.075 29.375 31.0917C28.4333 31.7667 27.325 32.225 26.1833 32.4083C25.8167 32.4667 25.425 32.5 25 32.5C24.6333 32.5 24.25 32.4667 23.8167 32.4083C23.7667 32.4 23.725 32.3917 23.675 32.375H23.65C23.5417 32.3583 23.4333 32.3333 23.325 32.3083C23.2083 32.2833 23.0583 32.25 22.8917 32.2C22.8083 32.175 22.675 32.1333 22.525 32.075C22.175 31.9583 21.7917 31.7917 21.425 31.5833C21.3583 31.5583 21.2167 31.4833 21.0917 31.4C20.9417 31.3167 20.7583 31.1917 20.5833 31.0667C19.9667 30.6167 19.425 30.075 18.975 29.4583C18.95 29.4333 18.925 29.4083 18.9083 29.375C18.2333 28.4333 17.775 27.325 17.5917 26.1833C17.5333 25.8167 17.5 25.425 17.5 25C17.5 24.6333 17.5333 24.25 17.5917 23.8167C17.5917 23.775 17.6083 23.725 17.6167 23.6833C17.8083 22.575 18.2667 21.5 18.9333 20.5833C19.3917 19.95 19.9667 19.3833 20.6167 18.9083C21.9083 17.9833 23.4167 17.5 25 17.5C25.3667 17.5 25.75 17.5333 26.1833 17.5917C26.225 17.5917 26.275 17.6083 26.3167 17.6167C27.425 17.8083 28.4917 18.2667 29.4167 18.9333C29.4417 18.9583 29.4667 18.975 29.5 19C30.075 19.425 30.5917 19.9417 31.025 20.5417C31.05 20.5667 31.075 20.5917 31.0917 20.625C31.7667 21.5667 32.225 22.675 32.4083 23.8167C32.4667 24.1833 32.5 24.575 32.5 25Z" fill="#AA6228"></path>
              </svg>
              <span className="font-bold text-lg text-foreground font-condensed">VAP</span>
            </Link>
            
            <div className="h-6 border-l border-border"></div>
            <h1 className="text-xl font-bold text-foreground">Admin Dashboard</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                <Shield className="w-4 h-4 inline mr-1" />
                <span className="font-medium text-foreground">
                  Admin
                </span>
              </span>
            </div>
            
            <Button variant="outline" onClick={handleSignOut}>
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 fixed md:static inset-y-0 left-0 z-40
          w-64 bg-background border-r transition-transform duration-200 ease-in-out
          flex flex-col
        `}>
          {/* Sidebar overlay for mobile */}
          {sidebarOpen && (
            <div 
              className="md:hidden fixed inset-0 bg-black/20 z-30" 
              onClick={() => setSidebarOpen(false)}
            />
          )}
          
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <nav className="mt-5 flex-1 px-2 space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`
                      group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors
                      ${item.current
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                      }
                    `}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <Icon className="mr-3 h-5 w-5 flex-shrink-0" />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
            
            <Separator className="my-4" />
            
            <div className="px-2">
              <Link
                to="/"
                className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              >
                <Home className="mr-3 h-5 w-5 flex-shrink-0" />
                Back to Site
              </Link>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-h-screen">
          <div className="container mx-auto px-4 py-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;