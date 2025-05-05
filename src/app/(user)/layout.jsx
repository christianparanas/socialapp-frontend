



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

 
        
        <main className="flex-1 p-4 md:p-6 overflow-auto">
            <div>laout</div>
 
                        <div>{children}</div>
          
        </main>
 
  );
}
