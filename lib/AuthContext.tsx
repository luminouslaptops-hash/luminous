'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  enrolledCourses: string[]; // Array of course IDs
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, name: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
  enrollCourse: (courseId: string) => void;
  unenrollCourse: (courseId: string) => void;
  isEnrolled: (courseId: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check if user was previously logged in (from localStorage)
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    console.log('Loading user from localStorage...');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        console.log('Found stored user:', parsedUser);
        // Ensure enrolledCourses array exists
        if (!parsedUser.enrolledCourses) {
          parsedUser.enrolledCourses = [];
        }
        console.log('User enrolled courses after load:', parsedUser.enrolledCourses);
        setUser(parsedUser);
      } catch (e) {
        console.error('Error parsing stored user:', e);
        localStorage.removeItem('user');
      }
    } else {
      console.log('No stored user found');
    }
    setIsLoading(false);
  }, []);

  const login = (email: string, name: string) => {
    const newUser: User = {
      id: `user_${Date.now()}`,
      email,
      name,
      enrolledCourses: [],
    };
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('enrolledCourses');
  };

  const enrollCourse = (courseId: string) => {
    if (!user) {
      console.log('Error: No user logged in');
      return;
    }
    const updatedUser = {
      ...user,
      enrolledCourses: [...new Set([...user.enrolledCourses, courseId])],
    };
    console.log('Enrolling course:', courseId);
    console.log('Updated enrolled courses:', updatedUser.enrolledCourses);
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
    console.log('Saved to localStorage:', JSON.parse(localStorage.getItem('user') || '{}').enrolledCourses);
  };

  const unenrollCourse = (courseId: string) => {
    if (!user) return;
    const updatedUser = {
      ...user,
      enrolledCourses: user.enrolledCourses.filter(id => id !== courseId),
    };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  const isEnrolled = (courseId: string) => {
    return user?.enrolledCourses.includes(courseId) || false;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        login,
        logout,
        isAuthenticated: !!user,
        enrollCourse,
        unenrollCourse,
        isEnrolled,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
