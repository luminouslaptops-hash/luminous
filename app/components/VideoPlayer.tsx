'use client';

import React, { useRef, useState } from 'react';
import { Module } from '@/lib/mockData';

interface VideoPlayerProps {
  module: Module;
  isCompact?: boolean;
}

export default function VideoPlayer({ module, isCompact = false }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className={`flex flex-col h-full bg-[#1e1e1e] ${!isCompact ? 'overflow-y-auto scrollbar-thin scrollbar-thumb-[#3e3e42] scrollbar-track-[#1e1e1e]' : ''}`}>
      {/* Video Header */}
      <div className="bg-[#252526] border-b border-[#333] px-4 py-3 sticky top-0 z-10">
        <h2 className="text-lg font-bold text-[#cccccc] mb-1">{module.title}</h2>
        <p className="text-xs text-[#858585]">{module.topic}</p>
      </div>

      {/* Video Player */}
      <div className={`bg-black flex items-center justify-center overflow-hidden ${isCompact ? 'flex-1' : ''}`}>
        <video
          ref={videoRef}
          className="w-full h-full object-contain"
          controls
          controlsList="nodownload"
        >
          <source src={module.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Video Info - Only show if not compact */}
      {!isCompact && (
        <div className="bg-[#252526] border-b border-[#333] px-6 py-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-[#858585] flex items-center gap-2">
              <span>⏱️</span>
              <span>Duration: {module.duration}</span>
            </span>
            <span className="text-xs bg-[#3e3e42] text-[#0ea5e9] px-3 py-1 rounded font-semibold">
              {module.topic}
            </span>
          </div>
          <p className="text-sm text-[#cccccc] leading-relaxed">
            {module.description}
          </p>
        </div>
      )}
    </div>
  );
}
