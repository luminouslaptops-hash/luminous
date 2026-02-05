'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/lib/AuthContext';
import { useRouter, useParams } from 'next/navigation';
import { enrolledClasses, Module } from '@/lib/mockData';
import VideoPlayer from '@/app/components/VideoPlayer';
import ModuleList from '@/app/components/ModuleList';

export default function ClassDetailsPage() {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  const params = useParams();
  const classId = params.id as string;

  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);

  // Get class data
  const enrolledClass = enrolledClasses.find((c) => c.id === classId);

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

  if (!enrolledClass) {
    return (
      <div className="min-h-screen bg-[#1e1e1e] flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#cccccc] mb-4">Class not found</p>
          <button
            onClick={() => router.push('/my-classes')}
            className="px-6 py-2 bg-[#0ea5e9] text-white rounded hover:bg-[#06b6d4] transition"
          >
            Back to Classes
          </button>
        </div>
      </div>
    );
  }

  if (!selectedModule) {
    return (
      <div className="min-h-screen bg-[#1e1e1e] flex items-center justify-center">
        <p className="text-[#cccccc]">Loading module...</p>
      </div>
    );
  }

  const handleSelectModule = (module: Module) => {
    setSelectedModule(module);
    setCurrentModuleIndex(module.order - 1);
  };

  return (
    <div className="min-h-screen bg-[#1e1e1e] flex flex-col">
      {/* Breadcrumb */}
      <div className="bg-[#252526] border-b border-[#333] px-4 sm:px-6 lg:px-8 py-4 sticky top-0 z-10">
        <div className="flex items-center gap-2 text-sm">
          <button
            onClick={() => router.push('/my-classes')}
            className="text-[#0ea5e9] hover:text-[#06b6d4] transition font-semibold"
          >
            ← My Classes
          </button>
          <span className="text-[#858585]">/</span>
          <span className="text-[#cccccc] font-medium">{enrolledClass.title}</span>
        </div>
      </div>

      {/* Main Content - Responsive Layout */}
      <div className="flex-1 flex flex-col lg:flex-row gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
        {/* Left Column - Video and Homework */}
        <div className="flex-1 min-w-0 flex flex-col gap-8">
          {/* Video Container */}
          <div className="bg-[#252526] rounded-2xl border border-[#333] overflow-hidden shadow-lg">
            <VideoPlayer module={selectedModule} isCompact={true} />
          </div>

          {/* Homework Section - Full width below video */}
          <div className="bg-[#252526] rounded-2xl border border-[#333] p-6 sm:p-8 shadow-lg">
            <HomeworkSection module={selectedModule} />
          </div>
        </div>

        {/* Right Column - Module List */}
        <div className="w-full lg:w-80 min-w-0">
          <div className="bg-[#252526] rounded-2xl border border-[#333] overflow-hidden shadow-lg sticky top-24">
            <ModuleList
              modules={enrolledClass.modules}
              selectedModuleId={selectedModule.id}
              onSelectModule={handleSelectModule}
              currentModuleIndex={currentModuleIndex}
            />
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
        return 'from-[#10b981] to-[#059669]';
      case 'medium':
        return 'from-[#f59e0b] to-[#d97706]';
      case 'hard':
        return 'from-[#ef4444] to-[#dc2626]';
      default:
        return 'from-[#0ea5e9] to-[#06b6d4]';
    }
  };

  const getDifficultyBadgeColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-[#d1fae5] text-[#065f46]';
      case 'medium':
        return 'bg-[#fed7aa] text-[#92400e]';
      case 'hard':
        return 'bg-[#fee2e2] text-[#7f1d1d]';
      default:
        return 'bg-[#cffafe] text-[#164e63]';
    }
  };

  const handleStartHomework = () => {
    router.push('/playground');
  };

  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="mb-8 pb-6 border-b border-[#333]">
        <div className="flex items-center gap-3 mb-3">
          <div className="text-3xl">📝</div>
          <div>
            <h3 className="text-2xl font-bold text-[#0ea5e9]">Today&apos;s Homework</h3>
          </div>
        </div>
        <p className="text-sm text-[#858585] ml-12">Complete this assignment to reinforce your learning and master the concepts</p>
      </div>

      {/* Homework Card */}
      <div className={`bg-linear-to-br ${getDifficultyColor(module.homework.difficulty)} rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300`}>
        {/* Card Header */}
        <div className="px-6 sm:px-8 py-8 text-white">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
            <div className="flex-1 min-w-0">
              <h4 className="text-xl sm:text-2xl font-bold wrap-break-word">{module.homework.title}</h4>
            </div>
            <span className={`${getDifficultyBadgeColor(module.homework.difficulty)} px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap capitalize shadow-md`}>
              {module.homework.difficulty}
            </span>
          </div>
          <p className="text-base opacity-95 mb-6 leading-relaxed">{module.homework.description}</p>
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2 text-sm opacity-90">
              <span>📅</span>
              <span className="font-semibold">Due: {module.homework.dueDate}</span>
            </div>
            <div className="flex items-center gap-2 text-sm opacity-90">
              <span>⏱️</span>
              <span className="font-semibold">Est. Time: 30 mins</span>
            </div>
          </div>
        </div>

        {/* Requirements Section */}
        <div className="px-6 sm:px-8 py-6 bg-black bg-opacity-20 border-t border-white border-opacity-20">
          <h5 className="text-base font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-lg">✓</span>
            <span>Requirements</span>
          </h5>
          <ul className="space-y-3">
            {module.homework.requirements.map((req, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-white opacity-95">
                <span className="text-green-300 font-bold shrink-0 mt-1">✓</span>
                <span className="leading-relaxed">{req}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Button */}
        <div className="px-6 sm:px-8 py-6 bg-black bg-opacity-30 border-t border-white border-opacity-20 flex gap-4">
          <button
            onClick={handleStartHomework}
            className="flex-1 px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-opacity-95 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-xl text-base flex items-center justify-center gap-2"
          >
            <span>▶</span>
            <span>Start Homework</span>
          </button>
          <button
            onClick={() => router.push('/my-classes')}
            className="px-6 py-3 bg-white bg-opacity-20 text-white font-semibold rounded-lg hover:bg-opacity-30 transition-all duration-200 text-base"
          >
            Back
          </button>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-8 pt-6 border-t border-[#333]">
        <p className="text-xs text-[#858585] text-center">
          💡 Tip: Save your work regularly. The playground auto-saves every minute.
        </p>
      </div>
    </div>
  );
}
