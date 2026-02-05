'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface Submission {
  _id: string;
  studentId: string;
  studentName: string;
  assignmentId: string;
  assignmentTitle: string;
  files: Record<string, string>;
  score: number | null;
  feedback: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export default function SubmissionsPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);
  const [filterAssignment, setFilterAssignment] = useState('');
  const [filterStudent, setFilterStudent] = useState('');

  useEffect(() => {
    fetchSubmissions();
  }, [filterAssignment, filterStudent]);

  const fetchSubmissions = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (filterAssignment) params.append('assignmentId', filterAssignment);
      if (filterStudent) params.append('studentId', filterStudent);

      const response = await fetch(`/api/submissions?${params.toString()}`);
      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      setSubmissions(data);
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to load submissions');
    } finally {
      setLoading(false);
    }
  };

  const handleGrade = async (submissionId: string, score: number, feedback: string) => {
    try {
      const response = await fetch(`/api/submissions/${submissionId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ score, feedback, status: 'graded' }),
      });

      if (!response.ok) throw new Error('Failed to grade');
      alert('Submission graded successfully!');
      fetchSubmissions();
      setSelectedSubmission(null);
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to grade submission');
    }
  };

  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Student Submissions</h1>
          <p className="text-[#858585]">View and grade student code submissions</p>
          <Link
            href="/"
            className="mt-4 inline-block px-4 py-2 bg-[#0ea5e9] text-white rounded hover:bg-[#06b6d4]"
          >
            ← Back to Playground
          </Link>
        </div>

        {/* Filters */}
        <div className="mb-6 flex gap-4">
          <input
            type="text"
            placeholder="Filter by assignment ID..."
            value={filterAssignment}
            onChange={(e) => setFilterAssignment(e.target.value)}
            className="px-4 py-2 bg-[#2d2d30] border border-[#333] rounded text-white focus:outline-none focus:border-[#0ea5e9]"
          />
          <input
            type="text"
            placeholder="Filter by student ID..."
            value={filterStudent}
            onChange={(e) => setFilterStudent(e.target.value)}
            className="px-4 py-2 bg-[#2d2d30] border border-[#333] rounded text-white focus:outline-none focus:border-[#0ea5e9]"
          />
          <button
            onClick={() => {
              setFilterAssignment('');
              setFilterStudent('');
            }}
            className="px-4 py-2 bg-[#3e3e42] text-white rounded hover:bg-[#454549]"
          >
            Clear Filters
          </button>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p>Loading submissions...</p>
          </div>
        ) : submissions.length === 0 ? (
          <div className="text-center py-12 text-[#858585]">
            <p>No submissions found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Submissions List */}
            <div className="lg:col-span-2">
              <div className="space-y-3">
                {submissions.map((submission) => (
                  <div
                    key={submission._id}
                    onClick={() => setSelectedSubmission(submission)}
                    className={`p-4 rounded border cursor-pointer transition ${
                      selectedSubmission?._id === submission._id
                        ? 'bg-[#0ea5e9] border-[#0ea5e9]'
                        : 'bg-[#2d2d30] border-[#333] hover:border-[#0ea5e9]'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold">{submission.studentName}</h3>
                        <p className="text-sm text-[#858585]">{submission.assignmentTitle}</p>
                      </div>
                      <span
                        className={`px-3 py-1 text-xs rounded font-medium ${
                          submission.status === 'graded'
                            ? 'bg-[#4ec9b0] text-black'
                            : 'bg-[#ff9e00] text-black'
                        }`}
                      >
                        {submission.status}
                      </span>
                    </div>
                    <p className="text-xs text-[#858585]">
                      {new Date(submission.createdAt).toLocaleString()}
                    </p>
                    {submission.score !== null && (
                      <p className="text-sm mt-2">Score: <span className="font-bold">{submission.score}/100</span></p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Code Viewer & Grading */}
            {selectedSubmission && (
              <div className="bg-[#2d2d30] rounded border border-[#333] p-4 flex flex-col h-fit">
                <h2 className="text-lg font-bold mb-4">Submission Details</h2>

                {/* Files */}
                <div className="mb-4">
                  <h3 className="text-sm font-semibold mb-2">Files Submitted:</h3>
                  <div className="space-y-2">
                    {Object.keys(selectedSubmission.files).map((fileName) => (
                      <div
                        key={fileName}
                        className="p-2 bg-[#1e1e1e] rounded text-xs text-[#0ea5e9]"
                      >
                        📄 {fileName}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Code Preview */}
                <div className="mb-4">
                  <h3 className="text-sm font-semibold mb-2">Code Preview:</h3>
                  <div className="bg-[#1e1e1e] p-3 rounded max-h-48 overflow-y-auto text-xs font-mono">
                    <p className="text-[#858585]">{selectedSubmission.assignmentTitle}</p>
                    <p className="text-[#4ec9b0] mt-2">Files: {Object.keys(selectedSubmission.files).length}</p>
                  </div>
                </div>

                {/* View Full Code Button */}
                <button
                  onClick={() => {
                    const codeText = Object.entries(selectedSubmission.files)
                      .map(([name, code]) => `=== ${name} ===\n${code}`)
                      .join('\n\n');
                    const blob = new Blob([codeText], { type: 'text/plain' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = `${selectedSubmission.studentId}-${selectedSubmission.assignmentId}.txt`;
                    a.click();
                  }}
                  className="w-full px-3 py-2 bg-[#0ea5e9] text-white text-xs rounded hover:bg-[#06b6d4] mb-4"
                >
                  ⬇️ Download Code
                </button>

                {/* Grading Section */}
                {selectedSubmission.status !== 'graded' && (
                  <GradingForm
                    submission={selectedSubmission}
                    onGrade={handleGrade}
                  />
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function GradingForm({ submission, onGrade }: any) {
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState('');

  return (
    <div className="border-t border-[#333] pt-4">
      <h3 className="text-sm font-semibold mb-3">Grade Submission</h3>
      <div className="space-y-2">
        <input
          type="number"
          min="0"
          max="100"
          value={score}
          onChange={(e) => setScore(parseInt(e.target.value) || 0)}
          placeholder="Score (0-100)"
          className="w-full px-2 py-1 bg-[#1e1e1e] border border-[#333] rounded text-white text-sm focus:outline-none focus:border-[#0ea5e9]"
        />
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Feedback..."
          className="w-full px-2 py-1 bg-[#1e1e1e] border border-[#333] rounded text-white text-sm focus:outline-none focus:border-[#0ea5e9] resize-none h-20"
        />
        <button
          onClick={() => onGrade(submission._id, score, feedback)}
          className="w-full px-3 py-2 bg-[#4ec9b0] text-black font-medium rounded hover:bg-[#3a9f91] text-sm"
        >
          Submit Grade
        </button>
      </div>
    </div>
  );
}
