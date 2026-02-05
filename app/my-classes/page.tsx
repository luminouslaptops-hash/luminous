'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useAuth } from '@/lib/AuthContext';
import { useRouter } from 'next/navigation';
import { enrolledClasses } from '@/lib/mockData';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';

export default function MyClassesPage() {
  const { isAuthenticated, isLoading, user } = useAuth();
  const router = useRouter();
  const [, setRerender] = useState(0);

  // Authentication check
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isLoading, isAuthenticated, router]);

  // Force rerender when user enrolled courses change
  useEffect(() => {
    console.log('User enrolledCourses changed:', user?.enrolledCourses);
    setRerender(prev => prev + 1);
  }, [user?.enrolledCourses]);

  // Filter courses to show only enrolled ones - recalculate whenever user changes
  const myEnrolledClasses = useMemo(() => {
    console.log('=== MY-CLASSES FILTERING ===');
    console.log('User:', user);
    console.log('User enrolled courses:', user?.enrolledCourses);
    
    if (!user || !user.enrolledCourses || user.enrolledCourses.length === 0) {
      console.log('No enrolled courses');
      return [];
    }
    
    const filtered = enrolledClasses.filter(course => {
      const isIncluded = user.enrolledCourses.includes(course.id);
      console.log(`Checking course ${course.id}: ${isIncluded}`);
      return isIncluded;
    });
    
    console.log('Filtered courses:', filtered.map(c => ({ id: c.id, title: c.title })));
    console.log('Total enrolled:', filtered.length);
    
    return filtered;
  }, [user, user?.enrolledCourses]);

  // Early returns can happen after all hooks
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

  // Ensure user is loaded before processing
  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">Loading your profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col">
      <Navbar />

      {/* Debug Panel - Remove after testing */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mx-4 mt-4">
        <details className="cursor-pointer">
          <summary className="font-semibold text-yellow-800">🔧 Debug Info (Click to expand)</summary>
          <div className="text-xs bg-white p-4 mt-2 overflow-auto border rounded space-y-2">
            <pre className="bg-gray-100 p-2 rounded overflow-auto">
              {JSON.stringify({
                userExists: !!user,
                userName: user?.name,
                userId: user?.id,
                enrolledCoursesCount: user?.enrolledCourses.length || 0,
                enrolledCourseIds: user?.enrolledCourses,
                myEnrolledClassesCount: myEnrolledClasses.length,
                myEnrolledClassesTitles: myEnrolledClasses.map(c => c.title),
              }, null, 2)}
            </pre>
            <button
              onClick={() => {
                console.log('Clearing localStorage...');
                localStorage.removeItem('user');
                alert('localStorage cleared! Please refresh the page and login again.');
              }}
              className="block w-full mt-2 px-3 py-2 bg-red-500 text-white text-xs rounded hover:bg-red-600"
            >
              Clear localStorage & Refresh
            </button>
          </div>
        </details>
      </div>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <h1 className="text-5xl font-bold text-gray-800 mb-4 text-center">আমার কোর্স</h1>
          <p className="text-center text-gray-600 text-lg mb-12">আপনার শেখার যাত্রা চালিয়ে যান</p>

          {/* Classes Grid or Empty State */}
          {myEnrolledClasses.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="text-center">
                <div className="text-6xl mb-4">📚</div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">আপনি কোনো কোর্সে যোগদান করেননি</h2>
                <p className="text-gray-600 mb-8 max-w-md">
                  আপনার পছন্দের কোর্সে যোগদান করুন এবং শিখতে শুরু করুন শুরু করুন।
                </p>
                <Link
                  href="/browse-courses"
                  className="inline-block px-8 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
                >
                  কোর্সে যোগদান করুন
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {myEnrolledClasses.map((enrolledClass) => (
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
                    <div className="inline-block bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                      চলমান
                    </div>
                    <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                      {enrolledClass.title}
                    </h2>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {enrolledClass.description}
                    </p>

                    {/* Instructor and Stats */}
                    <div className="border-t border-gray-200 pt-4 mb-4">
                      <p className="text-sm text-gray-600 mb-2">
                        <span className="font-semibold text-gray-800">অনুপ্রেরক:</span> {enrolledClass.instructor}
                      </p>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">
                          অগ্রগামী: {enrolledClass.currentModuleIndex + 1}/{enrolledClass.totalModules}
                        </span>
                      </div>
                    </div>

                    {/* Progress Bar */}
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
                </Link>
              ))}
            </div>
          )}
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
