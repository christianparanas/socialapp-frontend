'use client'

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth';
import { Button } from '@/components/common/Button';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';

export default function AdminLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push('/auth/login');
  };

  const toggleItem = (itemName) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemName]: !prev[itemName]
    }));
  };

  const navItems = [
    { 
      name: 'Dashboard', 
      href: '/admin/dashboard',
      icon: null 
    },
    { 
      name: 'Analytics', 
      href: '/admin/analytics',
      subItems: [
        { name: 'Real-time', href: '/admin/analytics/real-time' }
      ],
      icon: null
    },
    { 
      name: 'Audit', 
      href: '/admin/audit',
      subItems: [
        { name: 'Activity', href: '/admin/audit/activity' }
      ],
      icon: null
    },
    { 
      name: 'Users', 
      href: '/admin/users',
      subItems: [
        { name: 'User Details', href: '/admin/users/[userId]', dynamic: true }
      ],
      icon: null
    },
    { 
      name: 'Engagement', 
      href: '/admin/engagement',
      subItems: [
        { name: 'Announcements', href: '/admin/engagement/announcements' },
        { name: 'Badges', href: '/admin/engagement/badges' },
        { name: 'Polls', href: '/admin/engagement/polls' }
      ],
      icon: null
    },
    { 
      name: 'Moderation', 
      href: '/admin/moderation',
      subItems: [
        { name: 'Reports', href: '/admin/moderation/[reportId]', dynamic: true },
        { name: 'Rules', href: '/admin/moderation/rules' }
      ],
      icon: null
    },
    { 
      name: 'Permissions', 
      href: '/admin/permissions',
      icon: null
    },
    { 
      name: 'Settings', 
      href: '/admin/settings',
      subItems: [
        { name: 'API', href: '/admin/settings/api' },
        { name: 'Emails', href: '/admin/settings/emails' },
        { name: 'Platform', href: '/admin/settings/platform' },
        { name: 'Tickets', href: '/admin/settings/tickets' }
      ],
      icon: null
    }
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:relative md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <Link href="/admin/dashboard" className="text-xl font-bold text-gray-800">
            Admin Panel
          </Link>
          <button
            className="md:hidden"
            onClick={() => setIsSidebarOpen(false)}
            aria-label="Close sidebar"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        <nav className="p-4 overflow-y-auto h-[calc(100vh-64px)]">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.name}>
                {item.subItems ? (
                  <>
                    <button
                      onClick={() => toggleItem(item.name)}
                      className="flex items-center justify-between w-full p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-md"
                    >
                      <span>{item.name}</span>
                      {expandedItems[item.name] ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </button>
                    {expandedItems[item.name] && (
                      <ul className="ml-4 mt-1 space-y-1">
                        {item.subItems.map((subItem) => (
                          <li key={subItem.name}>
                            <Link
                              href={subItem.href}
                              className="block p-2 pl-4 text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-md text-sm"
                              onClick={() => setIsSidebarOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-md"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow p-4 flex items-center justify-between">
          <div className="flex items-center">
            <button
              className="md:hidden mr-4"
              onClick={() => setIsSidebarOpen(true)}
              aria-label="Open sidebar"
            >
              <Menu className="w-6 h-6 text-gray-600" />
            </button>
            <h1 className="text-lg font-semibold text-gray-800">Social App Admin</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">{user?.username || 'Admin'}</span>
            <Button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white"
            >
              Logout
            </Button>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}