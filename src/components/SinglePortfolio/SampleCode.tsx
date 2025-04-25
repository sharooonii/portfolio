// components/SampleCode.tsx

import React, { useState } from 'react';
import { FiCopy, FiEye, FiCode } from 'react-icons/fi';

interface CodeSnippet {
  title: string;
  code: string;
  language?: string;
}

interface SampleCodeProps {
  snippets: CodeSnippet[];
  previewComponent?: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
}

export const SampleCode: React.FC<SampleCodeProps> = ({
  snippets,
  previewComponent,
  title = "Easy to integrate",
  description,
  className = ""
}) => {
  const [activeSnippet, setActiveSnippet] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'code' | 'preview'>('code');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopyCode = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className={`py-16 px-4 ${className}`}>
      <div className="container mx-auto text-center mb-8">
        {title && <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>}
        {description && (
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        )}
      </div>

      <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-xl bg-black">
        <div className="grid grid-cols-1 md:grid-cols-3 h-full">
          {/* Left panel with snippet list */}
          <div className="bg-black text-white p-6 border-r border-gray-800">
            <div className="space-y-6">
              {snippets.map((snippet, index) => (
                <div 
                  key={index} 
                  className={`flex items-center py-4 px-2 border-b border-gray-800 cursor-pointer hover:bg-gray-900 transition-colors ${
                    activeSnippet === index ? 'text-orange-500' : ''
                  }`}
                  onClick={() => setActiveSnippet(index)}
                >
                  <div className="mr-4">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 5L15 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="font-medium">{snippet.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right panel with code or preview */}
          <div className="col-span-2 bg-gray-900 text-white">
            {/* Tab controls */}
            <div className="flex border-b border-gray-800">
              <button
                className={`px-6 py-3 font-medium text-sm flex items-center ${
                  activeTab === 'code' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-400'
                }`}
                onClick={() => setActiveTab('code')}
              >
                <FiCode className="mr-2" />
                Code
              </button>
              <button
                className={`px-6 py-3 font-medium text-sm flex items-center ${
                  activeTab === 'preview' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-400'
                }`}
                onClick={() => setActiveTab('preview')}
              >
                <FiEye className="mr-2" />
                Preview
              </button>

              {/* Language badges */}
              <div className="ml-auto flex items-center p-2 space-x-2 overflow-x-auto">
                {snippets[activeSnippet].language && (
                  <span className="bg-orange-500 text-black text-xs px-3 py-1 rounded-full font-medium">
                    {snippets[activeSnippet].language}
                  </span>
                )}
              </div>
            </div>

            {/* Content area */}
            <div className="relative">
              {/* Code view */}
              {activeTab === 'code' && (
                <div className="relative">
                  <div className="absolute top-4 right-4 z-10">
                    <button
                      onClick={() => handleCopyCode(snippets[activeSnippet].code, activeSnippet)}
                      className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-md transition-colors"
                      title="Copy code"
                    >
                      {copiedIndex === activeSnippet ? 'Copied!' : <FiCopy />}
                    </button>
                  </div>
                  <pre className="p-6 pt-12 overflow-x-auto text-sm">
                    <code className="language-typescript">{snippets[activeSnippet].code}</code>
                  </pre>
                </div>
              )}

              {/* Preview */}
              {activeTab === 'preview' && (
                <div className="bg-white text-black p-8 h-full min-h-[400px] flex items-center justify-center">
                  {previewComponent || (
                    <div className="text-center text-gray-500">
                      <p>No preview available for this component</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};