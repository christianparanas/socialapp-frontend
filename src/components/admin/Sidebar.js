"use client";

import { useState, useEffect } from 'react';
import { 
  Accordion, 
  AccordionItem, 
  Link,
  NavbarContent
} from "@nextui-org/react";
import {
  HomeIcon,
  UsersIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  DocumentTextIcon,
  FlagIcon,
  ChevronDownIcon,
  EnvelopeIcon,
  LifebuoyIcon,
  ClipboardDocumentCheckIcon,
  WrenchIcon
} from '@heroicons/react/24/outline';
import { RealmLogo } from "@/components/common/RealmLogo";

export default function Sidebar() {
  
  const navItems = [
    {
      name: 'Dashboard',
      icon: HomeIcon,
      path: '/admin/dashboard',
      exact: true
    },
  
    // User Management
    {
      name: 'Users',
      icon: UsersIcon,
      path: '/admin/users',
      submenu: [
        { name: 'All Users', path: '/admin/users' },
        { name: 'Add New', path: '/admin/users/new' },
        { name: 'User Groups', path: '/admin/users/groups' },
        { name: 'Roles & Permissions', path: '/admin/users/roles' },
        { name: 'Activity Logs', path: '/admin/users/activity' },
        { name: 'Sessions', path: '/admin/users/sessions' }
      ]
    },
  
    // Content Management
    {
      name: 'Content',
      icon: DocumentTextIcon,
      path: '/admin/content',
      submenu: [
        { name: 'All Content', path: '/admin/content' },
        { name: 'Create New', path: '/admin/content/new' },
        { name: 'Categories', path: '/admin/content/categories' },
        { name: 'Tags', path: '/admin/content/tags' },
        { name: 'Comments', path: '/admin/content/comments' },
        { name: 'Media Library', path: '/admin/content/media' },
        { name: 'Content Audit', path: '/admin/content/audit' }
      ]
    },
  
    // Moderation
    {
      name: 'Moderation',
      icon: ShieldCheckIcon,
      path: '/admin/moderation',
      submenu: [
        { name: 'Reports', path: '/admin/moderation/reports', icon: FlagIcon },
        { name: 'Spam Control', path: '/admin/moderation/spam' },
        { name: 'Banned Users', path: '/admin/moderation/banned' },
        { name: 'Content Review', path: '/admin/moderation/review' },
        { name: 'Appeals', path: '/admin/moderation/appeals' }
      ]
    },
  
    // Communications
    {
      name: 'Communications',
      icon: EnvelopeIcon,
      path: '/admin/communications',
      submenu: [
        { name: 'Announcements', path: '/admin/communications/announcements' },
        { name: 'Newsletters', path: '/admin/communications/newsletters' },
        { name: 'Notifications', path: '/admin/communications/notifications' },
        { name: 'Email Templates', path: '/admin/communications/emails' },
        { name: 'Push Notifications', path: '/admin/communications/push' }
      ]
    },
  
    // Support
    {
      name: 'Support',
      icon: LifebuoyIcon,
      path: '/admin/support',
      submenu: [
        { name: 'Tickets', path: '/admin/support/tickets' },
        { name: 'Knowledge Base', path: '/admin/support/knowledge-base' },
        { name: 'FAQs', path: '/admin/support/faqs' },
        { name: 'Live Chat', path: '/admin/support/chat' }
      ]
    },
  
    // Analytics
    {
      name: 'Analytics',
      icon: ChartBarIcon,
      path: '/admin/analytics',
      submenu: [
        { name: 'Overview', path: '/admin/analytics' },
        { name: 'User Analytics', path: '/admin/analytics/users' },
        { name: 'Content Analytics', path: '/admin/analytics/content' },
        { name: 'Traffic Sources', path: '/admin/analytics/traffic' },
        { name: 'Conversion Funnels', path: '/admin/analytics/conversion' },
        { name: 'Custom Reports', path: '/admin/analytics/reports' }
      ]
    },
  
    // System
    {
      name: 'System',
      icon: Cog6ToothIcon,
      path: '/admin/system',
      submenu: [
        { name: 'General Settings', path: '/admin/system/general' },
        { name: 'Security', path: '/admin/system/security' },
        { name: 'API Management', path: '/admin/system/api' },
        { name: 'Integrations', path: '/admin/system/integrations' },
        { name: 'Maintenance', path: '/admin/system/maintenance' },
        { name: 'Backups', path: '/admin/system/backups' },
        { name: 'Update Center', path: '/admin/system/updates' }
      ]
    },
  
    // Audit
    {
      name: 'Audit Trail',
      icon: ClipboardDocumentCheckIcon,
      path: '/admin/audit',
      submenu: [
        { name: 'System Logs', path: '/admin/audit/system' },
        { name: 'Admin Actions', path: '/admin/audit/actions' },
        { name: 'Data Changes', path: '/admin/audit/data' },
        { name: 'Security Events', path: '/admin/audit/security' },
        { name: 'Export Logs', path: '/admin/audit/export' }
      ]
    },
  
    // Tools
    {
      name: 'Tools',
      icon: WrenchIcon,
      path: '/admin/tools',
      submenu: [
        { name: 'Import/Export', path: '/admin/tools/import-export' },
        { name: 'Data Cleanup', path: '/admin/tools/cleanup' },
        { name: 'SEO Tools', path: '/admin/tools/seo' },
        { name: 'Email Testing', path: '/admin/tools/email' },
        { name: 'System Diagnostics', path: '/admin/tools/diagnostics' }
      ]
    }
  ];

  const [isDarkMode, setIsDarkMode] = useState(false);
  
    useEffect(() => {
      // Check for saved theme preference or system preference
      const savedTheme = localStorage.getItem('theme');
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        setIsDarkMode(true);
        document.documentElement.classList.add('dark');
      }
    }, []);

  return (
    <div className="h-full w-64 p-4 flex flex-col bg-white dark:bg-black border-r border-gray-200 dark:border-gray-900">
      {/* Sidebar Header */}
      <div className="m-6 mb-12">
          <RealmLogo isDarkMode={isDarkMode} />
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto space-y-1">
        {navItems.map((item) => (
          item.exact ? (
            <Link
              key={item.name}
              href={item.path}
              className="flex items-center px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg cursor-pointer"
            >
              <item.icon className="h-5 w-5 mr-3 text-gray-500 dark:text-gray-400" />
              {item.name}
            </Link>
          ) : (
            <Accordion 
              key={item.name}
              selectionMode="multiple"
              variant="light"
              className="px-0 cursor-pointer"
              itemClasses={{
                base: "px-0 border-0 cursor-pointer",
                title: "font-medium text-gray-700 dark:text-gray-300",
                trigger: "px-3 py-2 data-[hover=true]:bg-gray-100 dark:data-[hover=true]:bg-gray-800 rounded-lg",
                indicator: "text-gray-500 dark:text-gray-400",
                content: "px-3 pb-0"
              }}
            >
              <AccordionItem
                title={
                  <div className="flex items-center">
                    <item.icon className="h-5 w-5 mr-3 text-gray-500 dark:text-gray-400" />
                    <span>{item.name}</span>
                  </div>
                }
                indicator={<ChevronDownIcon className="h-4 w-4" />}
              >
                <div className="ml-8 space-y-1 mt-1">
                  {item.submenu?.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.path}
                      className="flex items-center px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                    >
                      {subItem.icon && (
                        <subItem.icon className="h-4 w-4 mr-3" />
                      )}
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              </AccordionItem>
            </Accordion>
          )
        ))}
      </div>

      {/* Sidebar Footer */}
      <div className="pt-4 text-xs text-gray-500 dark:text-gray-400">
        v1.0.0
      </div>
    </div>
  );
}