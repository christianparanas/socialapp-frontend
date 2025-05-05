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
  WrenchIcon,
  UserGroupIcon,
  HeartIcon,
  ShoppingCartIcon,
  GlobeAltIcon,
  ChatBubbleLeftRightIcon,
  UserIcon,
  BellIcon,
  StarIcon
} from '@heroicons/react/24/outline';
import { RealmLogo } from "@/components/common/RealmLogo";

export default function Sidebar() {
  
  const navItems = [
    {
      name: 'Home',
      icon: HomeIcon,
      path: '/home',
      exact: true
    },
  
    // Social Features
    {
      name: 'Social',
      icon: UserGroupIcon,
      path: '/social',
      submenu: [
        { name: 'Feed', path: '/social/feed' },
        { name: 'Friends', path: '/social/friends' },
        { name: 'Groups', path: '/social/groups' },
        { name: 'Events', path: '/social/events' },
        { name: 'Discover People', path: '/social/discover' }
      ]
    },
  
    // Dating Features
    {
      name: 'Dating',
      icon: HeartIcon,
      path: '/dating',
      submenu: [
        { name: 'Discover Matches', path: '/dating/discover' },
        { name: 'My Matches', path: '/dating/matches' },
        { name: 'Likes', path: '/dating/likes' },
        { name: 'Dating Preferences', path: '/dating/preferences' },
        { name: 'Icebreakers', path: '/dating/icebreakers' },
        { name: 'Date Planner', path: '/dating/planner' },
        { name: 'Safety Tips', path: '/dating/safety' }
      ]
    },
  
    // Marketplace & Grocery
    {
      name: 'Marketplace',
      icon: ShoppingCartIcon,
      path: '/marketplace',
      submenu: [
        { 
          name: 'Grocery Store', 
          path: '/marketplace/grocery',
          submenu: [
            { name: 'Browse Items', path: '/marketplace/grocery/browse' },
            { name: 'Weekly Deals', path: '/marketplace/grocery/deals' },
            { name: 'My List', path: '/marketplace/grocery/list' },
            { name: 'Local Farmers', path: '/marketplace/grocery/farmers' },
            { name: 'Recipe Ideas', path: '/marketplace/grocery/recipes' }
          ]
        },
        { name: 'Local Services', path: '/marketplace/services' },
        { name: 'Community Sales', path: '/marketplace/community-sales' },
        { name: 'My Orders', path: '/marketplace/orders' },
        { name: 'Selling', path: '/marketplace/selling' }
      ]
    },
  
    // Community
    {
      name: 'Community',
      icon: GlobeAltIcon,
      path: '/community',
      submenu: [
        { name: 'Neighborhood', path: '/community/neighborhood' },
        { name: 'Interest Groups', path: '/community/groups' },
        { name: 'Local News', path: '/community/news' },
        { name: 'Bulletin Board', path: '/community/bulletin' },
        { name: 'Volunteering', path: '/community/volunteer' },
        { name: 'Car Pooling', path: '/community/carpool' }
      ]
    },
  
    // Messaging
    {
      name: 'Messages',
      icon: ChatBubbleLeftRightIcon,
      path: '/messages',
      submenu: [
        { name: 'Inbox', path: '/messages' },
        { name: 'Dating Chat', path: '/messages/dating' },
        { name: 'Group Chats', path: '/messages/groups' },
        { name: 'Marketplace', path: '/messages/marketplace' }
      ]
    },
  
    // Personal
    {
      name: 'My Profile',
      icon: UserIcon,
      path: '/profile',
      submenu: [
        { name: 'View Profile', path: '/profile' },
        { name: 'Edit Profile', path: '/profile/edit' },
        { name: 'Photos', path: '/profile/photos' },
        { name: 'Preferences', path: '/profile/preferences' },
        { name: 'Privacy Settings', path: '/profile/privacy' }
      ]
    },
  
    // Notifications
    {
      name: 'Notifications',
      icon: BellIcon,
      path: '/notifications',
      badge: true // indicates there are unread notifications
    },
  
    // Settings
    {
      name: 'Settings',
      icon: Cog6ToothIcon,
      path: '/settings',
      submenu: [
        { name: 'Account', path: '/settings/account' },
        { name: 'Notifications', path: '/settings/notifications' },
        { name: 'Security', path: '/settings/security' },
        { name: 'Payments', path: '/settings/payments' },
        { name: 'Blocked Users', path: '/settings/blocked' },
        { name: 'Help & Support', path: '/settings/help' }
      ]
    },
  
    // Premium Features
    {
      name: 'Premium',
      icon: StarIcon,
      path: '/premium',
      highlight: true, // for highlighting premium features
      submenu: [
        { name: 'Benefits', path: '/premium' },
        { name: 'Dating Boost', path: '/premium/dating' },
        { name: 'Marketplace Discounts', path: '/premium/marketplace' },
        { name: 'Exclusive Groups', path: '/premium/groups' },
        { name: 'Subscribe', path: '/premium/subscribe' }
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
    <div className="h-full w-64 p-4 flex flex-col bg-white dark:bg-black border-r border-gray-200 dark:border-gray-900 overflow-y-auto">
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