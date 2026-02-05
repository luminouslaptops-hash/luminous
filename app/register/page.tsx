'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/AuthContext';
import Navbar from '../components/Navbar';

export default function RegisterPage() {
  const { login, isAuthenticated } = useAuth();
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!name.trim() || !email.trim()) {
      setError('Name and email are required');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email');
      return;
    }
    // For now, registration will directly login the user (mock)
    login(email, name);
    router.push('/my-classes');
  };

  if (isAuthenticated) {
    router.push('/my-classes');
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
      <Navbar />

      <main className="flex-grow pt-20 flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">নিবন্ধন করুন</h1>
          <p className="text-sm text-gray-600 mb-6">আপনার নতুন অ্যাকাউন্ট তৈরি করুন</p>

          {error && <div className="p-3 bg-red-50 text-red-700 rounded mb-4">{error}</div>}

          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="text-sm font-semibold text-gray-700 block mb-2">পূর্ণ নাম</label>
              <input value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-2 bg-white text-gray-900 border-2 border-gray-300 rounded focus:outline-none focus:border-indigo-600" />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700 block mb-2">ইমেইল</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 bg-white text-gray-900 border-2 border-gray-300 rounded focus:outline-none focus:border-indigo-600" />
            </div>

            <button type="submit" className="w-full py-3 bg-indigo-600 text-white rounded font-bold">নিবন্ধন</button>
          </form>

          <div className="mt-4 text-sm text-gray-600">
            Already have an account? <Link href="/login" className="text-indigo-600 font-semibold">Login</Link>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-gray-300 py-6 text-center">© 2026 Luminous Skill Center</footer>
    </div>
  );
}
