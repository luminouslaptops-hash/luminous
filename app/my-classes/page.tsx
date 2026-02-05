'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/lib/AuthContext';
import { useRouter } from 'next/navigation';
import { enrolledClasses } from '@/lib/mockData';
import Link from 'next/link';
import Image from 'next/image';

export default function MyClassesPage() {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#1e1e1e] flex items-center justify-center">
        <p className="text-[#cccccc]">Loading...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#1e1e1e] flex items-center justify-center">
        <p className="text-[#cccccc]">Redirecting to login...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-[#f5f7fa] to-[#e9ecef] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-[#667eea] mb-4 text-center animate-fade-in relative pb-6 inline-block w-full">
          My Classes
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-linear-to-r from-[#667eea] to-[#764ba2] rounded-full"></span>
        </h1>
        <p className="text-center text-[#555] text-lg mb-16 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Continue your learning journey
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {enrolledClasses.map((enrolledClass) => (
            <Link
              key={enrolledClass.id}
              href={`/my-classes/${enrolledClass.id}`}
              className="card-base group bg-white rounded-2xl overflow-hidden cursor-pointer shadow-lg transition-all duration-300 hover:shadow-2xl"
            >
              {/* Class Thumbnail */}
              <div className="relative w-full h-56 overflow-hidden bg-linear-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center">
                <span className="text-7xl group-hover:scale-[1.08] transition-transform duration-400">
                  {enrolledClass.thumbnail}
                </span>
              </div>

              {/* Class Info */}
              <div className="p-8">
                <h2 className="text-2xl font-bold text-[#333] mb-4 group-hover:text-[#667eea] transition-colors duration-300">
                  {enrolledClass.title}
                </h2>
                <p className="text-[#666] mb-7 leading-relaxed group-hover:text-[#333] transition-colors duration-300 line-clamp-2">
                  {enrolledClass.description}
                </p>

                {/* Progress Indicator */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-[#667eea] font-bold">PROGRESS</span>
                    <span className="text-xs text-[#667eea] font-bold">
                      {enrolledClass.currentModuleIndex + 1}/{enrolledClass.totalModules}
                    </span>
                  </div>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-linear-to-r from-[#667eea] to-[#764ba2]"
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
                <p className="text-sm text-[#666] mt-4 group-hover:text-[#667eea] transition-colors duration-300">
                  👨‍🏫 {enrolledClass.instructor}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
