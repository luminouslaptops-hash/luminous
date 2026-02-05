'use client';

import React, { useRef, useEffect, useState } from 'react';
import { FileStructure } from '@/types/types';

interface PreviewPanelProps {
  files: FileStructure;
  livePreview: boolean;
  onLivePreviewToggle: (enabled: boolean) => void;
}

export default function PreviewPanel({
  files,
  livePreview,
  onLivePreviewToggle,
}: PreviewPanelProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [output, setOutput] = useState<string>('');

  // Generate HTML from files
  const generateHTML = () => {
    const htmlFile = files['index.html'];
    const cssFile = files['style.css'];
    const jsFile = files['script.js'];

    if (!htmlFile) return '<!doctype html><html><body><div style="padding:24px;color:#444">No index.html file. Create one to preview.</div></body></html>';

    let html = htmlFile.content || '';

    // Inject CSS if exists
    if (cssFile) {
      html = html.replace(
        /<link[^>]*href="style\.css"[^>]*>/,
        `<style>${cssFile.content || ''}</style>`
      );
    }

    // Inject JS if exists
    if (jsFile) {
      html = html.replace(
        /<script[^>]*src="script\.js"[^>]*><\/script>/,
        `<script>${jsFile.content || ''}</script>`
      );
    }

    return html;
  };

  // Update preview only when livePreview is enabled
  useEffect(() => {
    if (livePreview && iframeRef.current) {
      const html = generateHTML();
      iframeRef.current.srcdoc = html;
    }
  }, [files, livePreview]);

  const handleRun = () => {
    if (iframeRef.current) {
      const html = generateHTML();
      iframeRef.current.srcdoc = html;
      setOutput('Preview updated!');
      setTimeout(() => setOutput(''), 2000);
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-[#333] bg-[#2d2d30] flex items-center justify-between">
        <h2 className="text-sm font-semibold text-[#cccccc]">PREVIEW</h2>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onLivePreviewToggle(!livePreview)}
            className={`px-3 py-1 text-xs rounded font-medium transition ${
              livePreview
                ? 'bg-[#0ea5e9] text-white'
                : 'bg-[#3e3e42] text-[#cccccc] hover:bg-[#454549]'
            }`}
          >
            Live
          </button>
          <button
            onClick={handleRun}
            className="px-3 py-1 text-xs rounded font-medium bg-[#0ea5e9] text-white hover:bg-[#06b6d4] transition"
          >
            Run
          </button>
        </div>
      </div>

      {/* Status Message */}
      {output && (
        <div className="px-4 py-2 text-xs text-[#4ec9b0] bg-[#1e3a2a]">
          {output}
        </div>
      )}

      {/* Preview Area */}
      <div className="flex-1 overflow-hidden bg-white">
        <iframe
          ref={iframeRef}
          className="w-full h-full border-none"
          title="Preview"
          sandbox="allow-scripts allow-same-origin allow-forms"
        />
      </div>
    </div>
  );
}
