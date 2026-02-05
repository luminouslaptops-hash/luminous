'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/lib/AuthContext';
import { useRouter } from 'next/navigation';
import { enrolledClasses } from '@/lib/mockData';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';

export default function MyClassesPage() {
  const { isAuthenticated, isLoading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isLoading, isAuthenticated, router]);



  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">Redirecting to login...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col">
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <h1 className="text-5xl font-bold text-gray-800 mb-4 text-center">আমার কোর্স</h1>
        <p className="text-center text-gray-600 text-lg mb-12">আপনার শেখার যাত্রা চালিয়ে যান</p>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {enrolledClasses.map((enrolledClass) => (
            <Link
              key={enrolledClass.id}
              href={`/my-classes/${enrolledClass.id}`}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
            >
              {/* Class Thumbnail */}
              <div className="relative w-full h-56 overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <span className="text-8xl group-hover:scale-110 transition-transform duration-300">
                  {enrolledClass.thumbnail}
                </span>
              </div>

              {/* Class Info */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-indigo-600 transition-colors">
                  {enrolledClass.title}
                </h2>
                <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                  {enrolledClass.description}
                </p>

                {/* Progress */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-indigo-600">অগ্রগামী</span>
                    <span className="text-xs font-bold text-indigo-600">
                      {enrolledClass.currentModuleIndex + 1}/{enrolledClass.totalModules}
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-600 to-purple-600"
                      style={{
                        width: `${
                          ((enrolledClass.currentModuleIndex + 1) /
                            enrolledClass.totalModules) *
                          100
                        }%`,
                      }}
                    />
                  </div>
                </div>

                {/* Instructor */}
                <p className="text-sm text-gray-600 mt-4 group-hover:text-indigo-600 transition-colors">
                  👨‍🏫 {enrolledClass.instructor}
                </p>
              </div>
            </Link>
          ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 mt-20">
        <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left text-sm">
            © 2026 Luminous Skill Center. All rights reserved.
          </div>
          <div className="flex space-x-6 mb-6 md:mb-0">
            <Link href="/" className="hover:text-indigo-400 transition text-sm">
              Home
            </Link>
            <Link href="/courses" className="hover:text-indigo-400 transition text-sm">
              Courses
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
