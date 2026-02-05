'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/AuthContext';
import { useRouter, usePathname } from 'next/navigation';

export default function Navbar() {
  const { logout, isAuthenticated } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="bg-white fixed w-full z-50 top-0 left-0 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-indigo-600 text-xl font-bold hover:text-indigo-700 transition">
            ✨ Luminous Skill Center
          </Link>

          <div className="hidden md:flex space-x-6">
            <Link href="/" className={isActive('/') ? 'text-indigo-600 border-b-2 border-indigo-600 font-semibold' : 'text-gray-700 hover:text-indigo-600 transition'}>
              Home
            </Link>
            <Link href="/courses" className={isActive('/courses') ? 'text-indigo-600 border-b-2 border-indigo-600 font-semibold' : 'text-gray-700 hover:text-indigo-600 transition'}>
              Courses
            </Link>
            <Link href="/blog" className={isActive('/blog') ? 'text-indigo-600 border-b-2 border-indigo-600 font-semibold' : 'text-gray-700 hover:text-indigo-600 transition'}>
              Blog
            </Link>
            <Link href="/about" className={isActive('/about') ? 'text-indigo-600 border-b-2 border-indigo-600 font-semibold' : 'text-gray-700 hover:text-indigo-600 transition'}>
              About
            </Link>
            <Link href="/contact" className={isActive('/contact') ? 'text-indigo-600 border-b-2 border-indigo-600 font-semibold' : 'text-gray-700 hover:text-indigo-600 transition'}>
              Contact
            </Link>
            {isAuthenticated && (
              <Link href="/my-classes" className={isActive('/my-classes') ? 'text-indigo-600 border-b-2 border-indigo-600 font-semibold' : 'text-gray-700 hover:text-indigo-600 transition'}>
                My Classes
              </Link>
            )}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {!isAuthenticated ? (
              <>
                <Link href="/login" className="px-4 py-1 rounded border text-indigo-600 border-indigo-600 hover:bg-indigo-50 font-medium">
                  লগইন
                </Link>
                <Link href="/register" className="px-4 py-1 rounded bg-indigo-600 text-white hover:bg-indigo-700 font-medium">
                  সাইন আপ
                </Link>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="px-4 py-1 rounded border text-gray-700 border-gray-200 hover:bg-gray-50 font-medium"
              >
                লগ আউট
              </button>
            )}
          </div>

          <div className="md:hidden">
            <button className="text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

