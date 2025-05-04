"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function useAuth() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Mock: Replace with actual authentication logic
    // Example: Fetch user data from a token stored in cookies or localStorage
    const fetchUser = async () => {
      try {
        // Simulated API call to /api/auth/me (NestJS backend)
        // const response = await fetch('http://localhost:3000/api/auth/me', {
        //   headers: { Authorization: `Bearer ${token}` },
        // });
        // const data = await response.json();
        // setUser(data);

        // Mock user data
        setUser({ username: 'AdminUser', role: 'admin' });
      } catch (error) {
        console.error('Failed to fetch user:', error);
        setUser(null);
      }
    };

    fetchUser();
  }, []);

  const logout = async () => {
    try {
      // Mock: Replace with actual logout logic
      // Example: Call NestJS backend to invalidate token
      // await fetch('http://localhost:3000/api/auth/logout', { method: 'POST' });
      
      // Clear client-side auth data
      setUser(null);
      router.push('/auth/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return { user, logout };
}