



  'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth';
import { Menubar } from 'primereact/menubar';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { PanelMenu } from 'primereact/panelmenu';
import { classNames } from 'primereact/utils';

export default function AdminLayout({ children }) {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [theme, setTheme] = useState('light');
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push('/auth/login');
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const navItems = [
    // Core
    {
      label: 'Dashboard',
      icon: 'pi pi-home',
      url: '/admin/dashboard'
    },
    {
      label: 'Users',
      icon: 'pi pi-users',
      items: [
        {
          label: 'User Details',
          icon: 'pi pi-user',
          url: '/admin/users/[userId]'
        }
      ]
    },

    // Content Management
    {
      label: 'Engagement',
      icon: 'pi pi-thumbs-up',
      items: [
        {
          label: 'Announcements',
          icon: 'pi pi-megaphone',
          url: '/admin/engagement/announcements'
        },
        {
          label: 'Badges',
          icon: 'pi pi-star',
          url: '/admin/engagement/badges'
        },
        {
          label: 'Polls',
          icon: 'pi pi-check-square',
          url: '/admin/engagement/polls'
        }
      ]
    },

    // Moderation
    {
      label: 'Moderation',
      icon: 'pi pi-shield',
      items: [
        {
          label: 'Reports',
          icon: 'pi pi-flag',
          url: '/admin/moderation/[reportId]'
        },
        {
          label: 'Rules',
          icon: 'pi pi-book',
          url: '/admin/moderation/rules'
        }
      ]
    },
    {
      label: 'Audit',
      icon: 'pi pi-history',
      items: [
        {
          label: 'Activity',
          icon: 'pi pi-list',
          url: '/admin/audit/activity'
        }
      ]
    },

    // Analytics
    {
      label: 'Analytics',
      icon: 'pi pi-chart-bar',
      items: [
        {
          label: 'Real-time',
          icon: 'pi pi-clock',
          url: '/admin/analytics/real-time'
        }
      ]
    },

    // System
    {
      label: 'Permissions',
      icon: 'pi pi-lock',
      url: '/admin/permissions'
    },
    {
      label: 'Settings',
      icon: 'pi pi-cog',
      items: [
        {
          label: 'API',
          icon: 'pi pi-code',
          url: '/admin/settings/api'
        },
        {
          label: 'Emails',
          icon: 'pi pi-envelope',
          url: '/admin/settings/emails'
        },
        {
          label: 'Platform',
          icon: 'pi pi-server',
          url: '/admin/settings/platform'
        },
        {
          label: 'Tickets',
          icon: 'pi pi-ticket',
          url: '/admin/settings/tickets'
        }
      ]
    }
  ];


  const menubarStart = (
    <div className="flex items-center">
      <Button
        icon="pi pi-bars"
        onClick={() => setSidebarVisible(true)}
        className="mr-2 md:hidden"
        rounded
      />
      <Link href="/admin/dashboard">
        <span className="font-bold text-xl">{theme === 'light' ? 'Admin Panel (Light)' : 'Admin Panel (Dark)'}</span>
      </Link>
    </div>
  );

  const menubarEnd = (
    <div className="flex items-center gap-2">
      <span className="font-medium">{user?.username || 'Admin'}</span>
      <Button
        icon="pi pi-sign-out"
        onClick={handleLogout}
        className="p-button-danger"
        tooltip="Logout"
        tooltipOptions={{ position: 'bottom' }}
        rounded
      />
      <Button
        icon={theme === 'light' ? 'pi pi-moon' : 'pi pi-sun'}
        onClick={toggleTheme}
        className="p-button-text"
        tooltip={theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
        tooltipOptions={{ position: 'bottom' }}
        rounded
      />
    </div>
  );

  useEffect(() => {
    document.body.className = theme === 'light' ? 'theme-light' : 'theme-dark';
  }, [theme]);

  return (
    <div className={classNames('flex flex-column min-h-screen', theme)}>
      {/* Mobile Sidebar */}
      <Sidebar
        visible={sidebarVisible}
        onHide={() => setSidebarVisible(false)}
        className="w-full md:w-20rem lg:w-22rem"
      >
        <div className="flex flex-col h-full">
          <div className="mb-4 p-4 border-bottom-1 surface-border">
            <h2 className="text-xl font-bold m-0">Navigation</h2>
          </div>
          <PanelMenu
            model={navItems}
            className="w-full flex-1"
            multiple={false}
          />
        </div>
      </Sidebar>

      {/* Desktop Sidebar */}
      <div className="hidden md:block flex-shrink-0 w-20rem lg:w-22rem h-screen sticky top-0">
        <div className="flex flex-col h-full">
          <div className="p-4 border-bottom-1 surface-border">
            <Link href="/admin/dashboard">
              <h2 className="text-xl font-bold m-0">Admin Panel</h2>
            </Link>
          </div>
          <PanelMenu
            model={navItems}
            className="w-full flex-1"
            multiple={false}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Menubar
          start={menubarStart}
          end={menubarEnd}
          className="sticky top-0 z-5 border-b surface-border"
        />
        <main className="flex-1 p-4 md:p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
