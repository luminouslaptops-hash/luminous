'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/AuthContext';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.trim() || !name.trim()) {
      setError('Email and name are required');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email');
      return;
    }

    // Login the user
    login(email, name);

    // Redirect to home
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-[#1e1e1e] flex items-center justify-center px-4">
      <div className="bg-[#252526] border border-[#333] rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-[#0ea5e9] mb-2 text-center">
          ✨ Luminous Skill Center
        </h1>
        <p className="text-[#858585] text-center mb-8">Sign up to get started</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <div>
            <label className="block text-sm font-medium text-[#cccccc] mb-2">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full px-4 py-2 bg-[#3e3e42] border border-[#555] rounded text-[#cccccc] placeholder-[#858585] focus:outline-none focus:border-[#0ea5e9] transition"
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-[#cccccc] mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-[#3e3e42] border border-[#555] rounded text-[#cccccc] placeholder-[#858585] focus:outline-none focus:border-[#0ea5e9] transition"
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="p-3 bg-[#5a2a2a] border border-[#ef4444] rounded text-[#ff6b6b] text-sm">
              {error}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 bg-[#0ea5e9] text-white font-medium rounded hover:bg-[#06b6d4] transition mt-6"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-[#858585] text-sm mt-6">
          Already have an account?{' '}
          <Link href="/" className="text-[#0ea5e9] hover:text-[#06b6d4] transition">
            Back to Home
          </Link>
        </p>
      </div>
    </div>
  );
}
