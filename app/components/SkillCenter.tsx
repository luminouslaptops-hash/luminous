'use client';

import React, { useState, useRef, useEffect } from 'react';
import FileExplorer from './FileExplorer';
import CodeEditor from './CodeEditor';
import PreviewPanel from './PreviewPanel';
import { FileStructure } from '@/types/types';

interface SkillCenterProps {
  studentId?: string;
  studentName?: string;
  assignmentId?: string;
  assignmentTitle?: string;
}

export default function SkillCenter({
  studentId = 'demo-student',
  studentName = 'Demo Student',
  assignmentId = 'assignment-001',
  assignmentTitle = 'Web Design Basics',
}: SkillCenterProps) {
  const [files, setFiles] = useState<FileStructure>({});

  const [currentFile, setCurrentFile] = useState<string>('');
  const [mounted, setMounted] = useState(false);
  const [livePreview, setLivePreview] = useState<boolean>(false);
  const [explorerWidth, setExplorerWidth] = useState(256);
  const [editorWidth, setEditorWidth] = useState(600);
  const [isDraggingLeft, setIsDraggingLeft] = useState(false);
  const [isDraggingRight, setIsDraggingRight] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleCreateFile = (fileName: string) => {
    if (!files[fileName]) {
      setFiles({
        ...files,
        [fileName]: { name: fileName, type: 'file', content: '' },
      });
      setCurrentFile(fileName);
    }
  };

  const handleDeleteFile = (fileName: string) => {
    const newFiles = { ...files };
    delete newFiles[fileName];
    setFiles(newFiles);
    if (currentFile === fileName) {
      setCurrentFile(Object.keys(newFiles)[0] || '');
    }
  };

  const handleUpdateContent = (fileName: string, content: string) => {
    setFiles({
      ...files,
      [fileName]: { ...files[fileName], content },
    });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      // Convert files to a format suitable for MongoDB
      const filesData: Record<string, string> = {};
      Object.keys(files).forEach((fileName) => {
        filesData[fileName] = files[fileName].content || '';
      });

      const response = await fetch('/api/submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          studentId,
          studentName,
          assignmentId,
          assignmentTitle,
          files: filesData,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit code');
      }

      const data = await response.json();
      alert(
        `✅ Code submitted successfully!\n\nSubmission ID: ${data.submission._id}\nTime: ${new Date(data.submission.createdAt).toLocaleString()}`
      );
    } catch (error) {
      console.error('Submission error:', error);
      alert('❌ Failed to submit code. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Mouse move handler for resizing
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDraggingLeft && containerRef.current) {
        const container = containerRef.current;
        const newWidth = e.clientX - container.getBoundingClientRect().left;
        if (newWidth > 150 && newWidth < 400) {
          setExplorerWidth(newWidth);
        }
      } else if (isDraggingRight && containerRef.current) {
        const container = containerRef.current;
        const containerRight = container.getBoundingClientRect().right;
        const newEditorWidth = e.clientX - (container.getBoundingClientRect().left + explorerWidth);
        if (newEditorWidth > 200 && e.clientX < containerRight - 200) {
          setEditorWidth(newEditorWidth);
        }
      }
    };

    const handleMouseUp = () => {
      setIsDraggingLeft(false);
      setIsDraggingRight(false);
    };

    if (isDraggingLeft || isDraggingRight) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDraggingLeft, isDraggingRight, explorerWidth]);

  const previewWidth = containerRef.current
    ? containerRef.current.offsetWidth - explorerWidth - editorWidth
    : 0;

  // Typed handler to avoid implicit any in JSX inline callbacks
  const handleEditorOnChange = (content?: string) => {
    if (!currentFile) return;
    handleUpdateContent(currentFile, content ?? '');
  };

  // mounted guard to avoid SSR/client markup mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div ref={containerRef} className="h-screen bg-[#1e1e1e]" />;
  }

  return (
    <div ref={containerRef} className="flex flex-col h-screen bg-[#1e1e1e] text-white overflow-hidden">
      {/* Main content area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Column 1: File Explorer */}
        <div style={{ width: `${explorerWidth}px` }} className="border-r border-[#333] bg-[#252526] flex flex-col">
          <FileExplorer
            files={files}
            currentFile={currentFile}
            onSelectFile={setCurrentFile}
            onCreateFile={handleCreateFile}
            onDeleteFile={handleDeleteFile}
          />
        </div>

        {/* Divider 1 */}
        <div
          onMouseDown={() => setIsDraggingLeft(true)}
          className="w-1 bg-[#333] hover:bg-[#0ea5e9] cursor-col-resize transition-colors"
        />

        {/* Column 2: Code Editor */}
        <div style={{ width: `${editorWidth}px` }} className="border-r border-[#333] flex flex-col overflow-hidden">
          <CodeEditor
            fileName={currentFile}
            content={files[currentFile]?.content || ''}
            onChange={handleEditorOnChange}
          />
        </div>

        {/* Divider 2 */}
        <div
          onMouseDown={() => setIsDraggingRight(true)}
          className="w-1 bg-[#333] hover:bg-[#0ea5e9] cursor-col-resize transition-colors"
        />

        {/* Column 3: Preview Panel */}
        <div style={{ width: `${previewWidth}px` }} className="bg-[#252526] border-l border-[#333] flex flex-col overflow-hidden">
          <PreviewPanel
            files={files}
            livePreview={livePreview}
            onLivePreviewToggle={setLivePreview}
          />
        </div>
      </div>

      {/* Bottom Submit Button */}
      <div className="border-t border-[#333] bg-[#2d2d30] px-4 py-3 flex items-center justify-between">
        <div className="text-xs text-[#858585]">
          Student: <span className="text-[#0ea5e9]">{studentName}</span> | Assignment:{' '}
          <span className="text-[#0ea5e9]">{assignmentTitle}</span>
        </div>
        <button
          onClick={handleSubmit}
          disabled={isSubmitting || Object.keys(files).length === 0}
          className="px-6 py-2 bg-[#0ea5e9] text-white font-medium rounded hover:bg-[#06b6d4] disabled:bg-[#666] disabled:cursor-not-allowed transition-colors"
          title={Object.keys(files).length === 0 ? 'Create a file to enable submit' : ''}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Code'}
        </button>
      </div>
    </div>
  );
}
