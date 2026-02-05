'use client';

import React, { useRef, useEffect, useState } from 'react';
import Editor from '@monaco-editor/react';
// emmet-monaco-es provides Emmet support for Monaco
import { emmetHTML, emmetCSS, emmetJSX } from 'emmet-monaco-es';

interface CodeEditorProps {
  fileName: string;
  content: string;
  onChange: (content: string) => void;
}

export default function CodeEditor({
  fileName,
  content,
  onChange,
}: CodeEditorProps) {
  const editorRef = useRef(null);
  const [language, setLanguage] = useState('html');
  const emmetDisposersRef = useRef<Array<() => void>>([]);
  const emmetInitializedRef = useRef(false);

  // Detect language based on file extension
  useEffect(() => {
    if (fileName && fileName.endsWith('.js')) setLanguage('javascript');
    else if (fileName && fileName.endsWith('.css')) setLanguage('css');
    else if (fileName && fileName.endsWith('.html')) setLanguage('html');
    else if (fileName && fileName.endsWith('.ts')) setLanguage('typescript');
    else if (fileName && fileName.endsWith('.jsx')) setLanguage('javascript');
    else if (fileName && fileName.endsWith('.tsx')) setLanguage('typescript');
    else if (fileName && fileName.endsWith('.json')) setLanguage('json');
    else if (fileName) setLanguage('plaintext');
  }, [fileName]);

  const handleEditorChange = (value: string | undefined) => {
    if (value !== undefined) {
      onChange(value);
    }
  };

  const handleEditorMount = (editor: any, monaco?: any) => {
    editorRef.current = editor;
    
    // Dispose old providers
    emmetDisposersRef.current.forEach(disposer => {
      try {
        if (typeof disposer === 'function') disposer();
      } catch (e) {
        // Silently ignore
      }
    });
    emmetDisposersRef.current = [];
    emmetInitializedRef.current = false;

    // Initialize Emmet if Monaco instance is available
    try {
      if (monaco) {
        // Register emmet completion providers and store disposers for cleanup
        const disposers = [];
        disposers.push(emmetHTML(monaco, ['html', 'xml']));
        disposers.push(emmetCSS(monaco, ['css', 'scss', 'less']));
        disposers.push(emmetJSX(monaco, ['javascript', 'typescript', 'javascriptreact', 'typescriptreact']));
        
        emmetDisposersRef.current = disposers;
        emmetInitializedRef.current = true;
      }
    } catch (e) {
      // Fail silently if emmet setup not compatible
      console.warn('Emmet setup warning:', e);
    }
  };

  // Cleanup Emmet disposers when component unmounts
  useEffect(() => {
    return () => {
      emmetDisposersRef.current.forEach(disposer => {
        try {
          if (typeof disposer === 'function') {
            disposer();
          }
        } catch (e) {
          // Silently ignore disposal errors
        }
      });
    };
  }, []);

  if (!fileName) {
    return (
      <div className="flex items-center justify-center h-full text-[#858585]">
        <div className="text-center">
          <p className="mb-2">No file open</p>
          <p className="text-xs">Create a file from the Explorer to start coding.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      {/* Editor Header */}
      <div className="px-4 py-2 border-b border-[#333] bg-[#2d2d30] flex items-center">
        <span className="text-sm text-[#cccccc]">{fileName}</span>
      </div>

      {/* Editor */}
      <div className="flex-1 overflow-hidden">
        <Editor
          height="100%"
          language={language}
          value={content}
          onChange={handleEditorChange}
          theme="vs-dark"
          options={{
            fontSize: 14,
            fontFamily: "'Fira Code', 'Courier New', monospace",
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            wordWrap: 'on',
            tabSize: 2,
            automaticLayout: true,
            formatOnPaste: true,
            formatOnType: true,
            // Enable Monaco tab completion to allow Emmet to use Tab
            tabCompletion: 'on',
            quickSuggestions: { other: true, comments: false, strings: true },
            suggestOnTriggerCharacters: true,
            suggest: {
              showIcons: true,
              showSnippets: true,
            },
          }}
          onMount={(editor, monaco) => handleEditorMount(editor, monaco)}
        />
      </div>
    </div>
  );
}
