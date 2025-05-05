'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth'
import Navbar from '@/components/admin/Navbar'
import Sidebar from '@/components/admin/Sidebar'

export default function AdminLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { user, logout } = useAuth()
  const router = useRouter()

  const handleLogout = async () => {
    await logout()
    router.push('/auth/login')
  }

  const toggleDarkMode = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    localStorage.setItem('theme', newMode ? 'dark' : 'light')
  }

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark')
    } else {
      // Default to system preference if no saved theme
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setDarkMode(systemPrefersDark)
    }
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'dark' : ''}`}>
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 md:hidden" 
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex flex-1">
        {/* Desktop Sidebar - Hidden on mobile */}
        <aside className="hidden md:flex md:flex-shrink-0">
          <Sidebar />
        </aside>

        {/* Mobile Sidebar - Slides in from left */}
        <div className={`fixed inset-y-0 left-0 z-50 w-64 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
          <Sidebar isMobile onClose={() => setSidebarOpen(false)} />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar 
            darkMode={darkMode} 
            toggleDarkMode={toggleDarkMode}
            user={user}
            onLogout={handleLogout}
            onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
          />
          
          <main className="flex-1 overflow-auto p-4 md:p-6 bg-gray-50 dark:bg-black">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}