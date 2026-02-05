'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/lib/AuthContext';
import { useRouter, useParams } from 'next/navigation';
import { enrolledClasses, Module } from '@/lib/mockData';
import Link from 'next/link';

export default function ClassDetailsPage() {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  const params = useParams();
  const classId = params.id as string;

  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  // Get class data
  const enrolledClass = enrolledClasses.find((c) => c.id === classId);

  // Filter modules based on search
  const filteredModules = enrolledClass?.modules.filter((m) =>
    m.title.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  // Initialize with current module
  useEffect(() => {
    if (enrolledClass) {
      setCurrentModuleIndex(enrolledClass.currentModuleIndex);
      setSelectedModule(enrolledClass.modules[enrolledClass.currentModuleIndex]);
    }
  }, [enrolledClass]);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <p className="text-gray-400">Loading...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <p className="text-gray-400">Redirecting to login...</p>
      </div>
    );
  }

  if (!enrolledClass) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 mb-4">Class not found</p>
          <button
            onClick={() => router.push('/my-classes')}
            className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
          >
            Back to Classes
          </button>
        </div>
      </div>
    );
  }

  if (!selectedModule) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <p className="text-gray-400">Loading module...</p>
      </div>
    );
  }

  const handleSelectModule = (module: Module) => {
    setSelectedModule(module);
    setCurrentModuleIndex(module.order - 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col">
      {/* Header/Breadcrumb */}
      <div className="bg-gray-800 border-b border-gray-700 px-4 sm:px-6 lg:px-8 py-4 sticky top-0 z-40">
        <div className="flex items-center gap-3 text-sm">
          <button
            onClick={() => router.push('/my-classes')}
            className="text-indigo-400 hover:text-indigo-300 transition font-semibold flex items-center gap-1"
          >
            ← আমার কোর্স
          </button>
          <span className="text-gray-600">/</span>
          <span className="text-gray-200 font-medium">{enrolledClass.title}</span>
        </div>
      </div>

      {/* Main Content - Two-column layout */}
      <div className="flex-1 flex gap-0 overflow-hidden">
        {/* Left Column - Video and Homework */}
        <div className="flex-1 flex flex-col overflow-auto border-r border-gray-700">
          {/* Video Section */}
          <div className="bg-black p-6 border-b border-gray-700">
            <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl mb-4">📚</div>
                <h2 className="text-2xl font-bold text-white mb-2">{selectedModule.title}</h2>
                <p className="text-gray-400">ভিডিও প্লেয়ার</p>
                <p className="text-gray-500 text-sm mt-2">এই মডিউলটির জন্য ভিডিও সামগ্রী এখানে প্রদর্শিত হবে</p>
              </div>
            </div>
            <p className="text-gray-300 mt-4 text-sm leading-relaxed">{selectedModule.description}</p>
          </div>

          {/* Homework Section */}
          <div className="p-6 border-b border-gray-700 flex-1">
            <HomeworkSection module={selectedModule} />
          </div>

          {/* Navigation Buttons */}
          <div className="p-6 flex gap-4 border-t border-gray-700 bg-gray-900">
            <button
              disabled={currentModuleIndex === 0}
              onClick={() => {
                const prevModule = enrolledClass.modules[currentModuleIndex - 1];
                if (prevModule) handleSelectModule(prevModule);
              }}
              className="flex-1 px-4 py-2 bg-gray-700 text-gray-300 rounded hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              ← পূর্ববর্তী
            </button>
            <button
              disabled={currentModuleIndex >= enrolledClass.modules.length - 1}
              onClick={() => {
                const nextModule = enrolledClass.modules[currentModuleIndex + 1];
                if (nextModule) handleSelectModule(nextModule);
              }}
              className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              পরবর্তী →
            </button>
          </div>
        </div>

        {/* Right Column - Module List */}
        <div className="w-80 border-l border-gray-700 bg-gray-900 flex flex-col overflow-hidden">
          {/* Search Bar */}
          <div className="p-4 border-b border-gray-700">
            <div className="relative">
              <input
                type="text"
                placeholder="মডিউল খুঁজুন..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
              />
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Module List */}
          <div className="flex-1 overflow-auto">
            {filteredModules.length > 0 ? (
              <div className="space-y-1 p-4">
                {filteredModules.map((module) => (
                  <button
                    key={module.id}
                    onClick={() => handleSelectModule(module)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                      selectedModule.id === module.id
                        ? 'bg-indigo-600 text-white shadow-lg'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-lg">📚</span>
                      <div className="min-w-0 flex-1">
                        <h3
                          className={`font-semibold text-sm leading-snug ${
                            selectedModule.id === module.id ? 'text-white' : 'text-gray-300'
                          }`}
                        >
                          {module.title}
                        </h3>
                        <p
                          className={`text-xs mt-1 ${
                            selectedModule.id === module.id ? 'text-indigo-100' : 'text-gray-500'
                          }`}
                        >
                          মডিউল {module.order}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="p-4 text-center text-gray-500 text-sm">
                কোনো মডিউল পাওয়া যায়নি
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Homework Section Component
function HomeworkSection({ module }: { module: Module }) {
  const router = useRouter();

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'from-green-600 to-green-700';
      case 'medium':
        return 'from-yellow-600 to-yellow-700';
      case 'hard':
        return 'from-red-600 to-red-700';
      default:
        return 'from-indigo-600 to-indigo-700';
    }
  };

  const getDifficultyBadgeColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-green-900 text-green-300';
      case 'medium':
        return 'bg-yellow-900 text-yellow-300';
      case 'hard':
        return 'bg-red-900 text-red-300';
      default:
        return 'bg-indigo-900 text-indigo-300';
    }
  };

  const handleStartHomework = () => {
    router.push('/playground');
  };

  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="mb-6 pb-4 border-b border-gray-700">
        <div className="flex items-center gap-3 mb-2">
          <div className="text-2xl">📝</div>
          <h3 className="text-xl font-bold text-indigo-400">আজকের হোমওয়ার্ক</h3>
        </div>
        <p className="text-sm text-gray-400 ml-11">এই অ্যাসাইনমেন্টটি সম্পূর্ণ করে আপনার জ্ঞান পরীক্ষা করুন</p>
      </div>

      {/* Homework Card */}
      <div className={`bg-gradient-to-br ${getDifficultyColor(module.homework.difficulty)} rounded-xl overflow-hidden shadow-xl`}>
        {/* Card Header */}
        <div className="px-6 py-6 text-white">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h4 className="text-lg font-bold">{module.homework.title}</h4>
            <span
              className={`${getDifficultyBadgeColor(
                module.homework.difficulty
              )} px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap capitalize`}
            >
              {module.homework.difficulty}
            </span>
          </div>
          <p className="text-sm opacity-95 mb-4 leading-relaxed">{module.homework.description}</p>
          <div className="flex flex-wrap items-center gap-4 text-sm opacity-90">
            <div className="flex items-center gap-2">
              <span>📅</span>
              <span className="font-semibold">সময়সীমা: {module.homework.dueDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>⏱️</span>
              <span className="font-semibold">আনুমানিক সময়: ৩০ মিনিট</span>
            </div>
          </div>
        </div>

        {/* Requirements Section */}
        <div className="px-6 py-4 bg-black bg-opacity-30 border-t border-white border-opacity-10">
          <h5 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
            <span>✓</span>
            <span>প্রয়োজনীয়তা</span>
          </h5>
          <ul className="space-y-2">
            {module.homework.requirements.map((req, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-white opacity-95">
                <span className="text-green-300 font-bold shrink-0 mt-0.5">✓</span>
                <span className="leading-relaxed">{req}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="px-6 py-4 bg-black bg-opacity-40 border-t border-white border-opacity-10 flex gap-3">
          <button
            onClick={handleStartHomework}
            className="flex-1 px-4 py-3 bg-white text-gray-900 font-bold rounded-lg hover:bg-opacity-95 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-xl text-sm flex items-center justify-center gap-2"
          >
            <span>▶</span>
            <span>হোমওয়ার্ক শুরু করুন</span>
          </button>
        </div>
      </div>

      {/* Tip */}
      <div className="mt-4 pt-4 border-t border-gray-700">
        <p className="text-xs text-gray-500 text-center">
          💡 টিপ: আপনার কাজ নিয়মিত সংরক্ষণ করুন। প্লেগ্রাউন্ড প্রতি মিনিটে স্বয়ংক্রিয়ভাবে সংরক্ষণ করে।
        </p>
      </div>
    </div>
  );
}
