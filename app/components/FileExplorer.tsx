'use client';

import React, { useState } from 'react';
import { FileStructure } from '@/types/types';

interface FileExplorerProps {
  files: FileStructure;
  currentFile: string;
  onSelectFile: (fileName: string) => void;
  onCreateFile: (fileName: string) => void;
  onDeleteFile: (fileName: string) => void;
}

export default function FileExplorer({
  files,
  currentFile,
  onSelectFile,
  onCreateFile,
  onDeleteFile,
}: FileExplorerProps) {
  const [newFileName, setNewFileName] = useState('');
  const [isCreating, setIsCreating] = useState(false);

  const handleCreateFile = () => {
    if (newFileName.trim()) {
      onCreateFile(newFileName.trim());
      setNewFileName('');
      setIsCreating(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-[#333] flex items-center justify-between">
        <h2 className="text-sm font-semibold text-[#cccccc]">EXPLORER</h2>
        <button
          onClick={() => setIsCreating(true)}
          className="p-1 hover:bg-[#3e3e42] rounded cursor-pointer text-[#cccccc]"
          title="New File"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
      </div>

      {/* File List */}
      <div className="flex-1 overflow-y-auto">
        {isCreating && (
          <div className="p-2">
            <input
              type="text"
              autoFocus
              placeholder="File name..."
              value={newFileName}
              onChange={(e) => setNewFileName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleCreateFile();
                if (e.key === 'Escape') {
                  setIsCreating(false);
                  setNewFileName('');
                }
              }}
              className="w-full px-2 py-1 bg-[#3c3c3c] border border-[#0ea5e9] text-white text-xs rounded focus:outline-none"
            />
          </div>
        )}

        {Object.keys(files).length === 0 ? (
          <div className="p-4 text-xs text-[#858585]">No files yet. Click the + button to create your first file.</div>
        ) : (
          Object.keys(files).map((fileName) => (
            <div
              key={fileName}
              onClick={() => onSelectFile(fileName)}
              className={`px-4 py-2 text-sm cursor-pointer flex items-center justify-between group ${
                currentFile === fileName
                  ? 'bg-[#37373d] text-white'
                  : 'text-[#cccccc] hover:bg-[#2d2d30]'
              }`}
            >
              <span className="truncate flex-1">{fileName}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDeleteFile(fileName);
                }}
                className="hidden group-hover:block p-1 hover:bg-[#3e3e42] rounded"
                title="Delete file"
              >
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
