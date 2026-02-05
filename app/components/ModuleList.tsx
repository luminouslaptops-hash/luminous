'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Module } from '@/lib/mockData';

interface ModuleListProps {
  modules: Module[];
  selectedModuleId: string;
  onSelectModule: (module: Module) => void;
  currentModuleIndex: number;
}

export default function ModuleList({
  modules,
  selectedModuleId,
  onSelectModule,
  currentModuleIndex,
}: ModuleListProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const selectedModuleRef = useRef<HTMLDivElement>(null);

  // Filter modules based on search query
  const filteredModules = useMemo(() => {
    return modules.filter(
      (module) =>
        module.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        module.topic.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [modules, searchQuery]);

  // Scroll to selected module when it changes
  useEffect(() => {
    if (selectedModuleRef.current && scrollContainerRef.current) {
      selectedModuleRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }, [selectedModuleId]);

  const handlePreviousModule = () => {
    if (currentModuleIndex > 0) {
      onSelectModule(modules[currentModuleIndex - 1]);
    }
  };

  const handleNextModule = () => {
    if (currentModuleIndex < modules.length - 1) {
      onSelectModule(modules[currentModuleIndex + 1]);
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#252526]">
      {/* Header */}
      <div className="bg-[#1e1e1e] border-b border-[#333] px-4 py-4">
        <h2 className="text-lg font-bold text-[#cccccc] mb-4">Course Modules</h2>

        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search modules..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 bg-[#3e3e42] border border-[#555] rounded text-[#cccccc] placeholder-[#858585] focus:outline-none focus:border-[#0ea5e9] transition text-sm"
          />
          <svg
            className="absolute right-3 top-2.5 w-5 h-5 text-[#858585]"
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

      {/* Module Count */}
      <div className="px-4 pt-3 pb-2 bg-[#1e1e1e] text-xs text-[#858585] border-b border-[#333]">
        {filteredModules.length} of {modules.length} modules
      </div>

      {/* Modules Container */}
      <div
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-[#3e3e42] scrollbar-track-[#1e1e1e]"
      >
        {filteredModules.length === 0 ? (
          <div className="p-4 text-center text-[#858585]">
            <p className="text-sm">No modules found matching your search.</p>
          </div>
        ) : (
          <div className="p-3 space-y-2">
            {filteredModules.map((module, index) => (
              <div
                key={module.id}
                ref={selectedModuleId === module.id ? selectedModuleRef : null}
              >
                <button
                  onClick={() => onSelectModule(module)}
                  className={`w-full p-3 rounded-lg text-left transition border ${
                    selectedModuleId === module.id
                      ? 'bg-[#0ea5e9] border-[#0ea5e9] text-white'
                      : currentModuleIndex === module.order - 1
                      ? 'bg-[#3e3e42] border-[#10b981] border-2 text-[#cccccc] hover:bg-[#454549]'
                      : 'bg-[#3e3e42] border-[#555] text-[#cccccc] hover:bg-[#454549]'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-sm">
                      {currentModuleIndex === module.order - 1 ? (
                        <span className="text-[#10b981]">▶</span>
                      ) : currentModuleIndex > module.order - 1 ? (
                        <span>✓</span>
                      ) : (
                        <span className="text-[#858585]">{module.order}</span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm truncate">
                        {module.title}
                      </h3>
                      <p className="text-xs opacity-75 truncate">{module.topic}</p>
                      <p className="text-xs opacity-60 mt-1">{module.duration}</p>
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="bg-[#1e1e1e] border-t border-[#333] px-4 py-3 flex gap-2">
        <button
          onClick={handlePreviousModule}
          disabled={currentModuleIndex === 0}
          className="flex-1 px-3 py-2 bg-[#3e3e42] text-[#cccccc] rounded hover:bg-[#454549] disabled:opacity-50 disabled:cursor-not-allowed transition text-sm font-medium"
        >
          ← Previous
        </button>
        <button
          onClick={handleNextModule}
          disabled={currentModuleIndex === modules.length - 1}
          className="flex-1 px-3 py-2 bg-[#0ea5e9] text-white rounded hover:bg-[#06b6d4] disabled:opacity-50 disabled:cursor-not-allowed transition text-sm font-medium"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
