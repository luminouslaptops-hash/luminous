'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/AuthContext';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const { user, logout, isAuthenticated } = useAuth();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMyClasses = () => {
    router.push('/my-classes');
  };

  const handleLogout = () => {
    logout();
    router.push('/');
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-linear-to-r from-[#667eea] to-[#764ba2] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="shrink-0 text-xl font-bold text-white hover:text-opacity-90 transition animate-slide-in-left"
          >
            ✨ Luminous Skill Center
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              href="/"
              className="nav-link px-5 py-3 text-white font-medium transition-all duration-300 hover:bg-white hover:bg-opacity-20 hover:text-gray-800 rounded-lg relative"
            >
              Home
              <span className="nav-underline"></span>
            </Link>
            <Link
              href="/#courses"
              className="nav-link px-5 py-3 text-white font-medium transition-all duration-300 hover:bg-white hover:bg-opacity-20 hover:text-gray-800 rounded-lg relative"
            >
              Courses
              <span className="nav-underline"></span>
            </Link>
            <Link
              href="/#about"
              className="nav-link px-5 py-3 text-white font-medium transition-all duration-300 hover:bg-white hover:bg-opacity-20 hover:text-gray-800 rounded-lg relative"
            >
              About
              <span className="nav-underline"></span>
            </Link>
            <Link
              href="/#contact"
              className="nav-link px-5 py-3 text-white font-medium transition-all duration-300 hover:bg-white hover:bg-opacity-20 hover:text-gray-800 rounded-lg relative"
            >
              Contact
              <span className="nav-underline"></span>
            </Link>

            {/* My Classes - only for logged in users */}
            {isAuthenticated && (
              <Link
                href="/my-classes"
                className="nav-link px-5 py-3 text-white font-medium transition-all duration-300 hover:bg-white hover:bg-opacity-20 hover:text-gray-800 rounded-lg relative"
              >
                📚 My Classes
                <span className="nav-underline"></span>
              </Link>
            )}
          </div>

          {/* Right Side - Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {isAuthenticated ? (
              <>
                <span className="text-white text-sm font-medium">{user?.name}</span>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-white bg-opacity-30 text-[#764ba2] rounded font-bold hover:bg-opacity-50 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 text-sm border-2 border-white"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/login"
                className="px-4 py-2 bg-white text-[#764ba2] rounded font-bold hover:bg-opacity-90 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 text-sm"
              >
                Sign Up
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#cccccc] hover:text-[#0ea5e9] transition"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  mobileMenuOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16M4 18h16'
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#333] py-4 space-y-3">
            <Link
              href="/"
              className="block text-[#cccccc] hover:text-[#0ea5e9] transition text-sm py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/#courses"
              className="block text-[#cccccc] hover:text-[#0ea5e9] transition text-sm py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Courses
            </Link>
            <Link
              href="/#about"
              className="block text-[#cccccc] hover:text-[#0ea5e9] transition text-sm py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/#contact"
              className="block text-[#cccccc] hover:text-[#0ea5e9] transition text-sm py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>

            {isAuthenticated && (
              <button
                onClick={() => {
                  handleMyClasses();
                  setMobileMenuOpen(false);
                }}
                className="w-full px-4 py-2 bg-[#10b981] text-white rounded hover:bg-[#059669] transition text-sm font-medium"
              >
                My Classes
              </button>
            )}

            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="w-full px-4 py-2 bg-[#ef4444] text-white rounded hover:bg-[#dc2626] transition text-sm font-medium"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/login"
                className="block w-full px-4 py-2 bg-[#0ea5e9] text-white rounded hover:bg-[#06b6d4] transition text-sm font-medium text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign Up
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
