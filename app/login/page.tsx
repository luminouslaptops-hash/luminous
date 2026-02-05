"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/AuthContext";
import Navbar from "@/app/components/Navbar";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const router = useRouter();

  function handleLoginSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!name.trim() || !email.trim()) {
      setError("Name and email are required");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email");
      return;
    }
    login(email, name);
    router.push("/browse-courses");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
      <Navbar />

      <div className="flex-1 flex items-center justify-center px-4 pt-20">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-indigo-600 mb-2">✨ Luminous</h1>
              <p className="text-gray-600">আপনার শেখার যাত্রা শুরু করুন</p>
            </div>

            <form onSubmit={handleLoginSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">পূর্ণ নাম</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="আপনার নাম লিখুন"
                  className="w-full px-4 py-3 bg-white text-gray-900 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">ইমেল ঠিকানা</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="আপনার ইমেল লিখুন"
                  className="w-full px-4 py-3 bg-white text-gray-900 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600"
                />
              </div>

              {error && <div className="p-4 bg-red-50 border-2 border-red-200 rounded-lg text-red-700">{error}</div>}

              <button type="submit" className="w-full px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-lg">
                সাইন আপ করুন
              </button>
            </form>

            <div className="my-6 flex items-center gap-4">
              <div className="flex-1 h-px bg-gray-200"></div>
              <span className="text-sm text-gray-500">অথবা</span>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            <div className="p-4 bg-blue-50 border-2 border-blue-200 rounded-lg mb-6">
              <p className="text-sm text-gray-700 mb-3">
                <strong className="text-blue-700">ডেমো অ্যাকাউন্ট:</strong>
              </p>
              <p className="text-xs text-gray-600">ইমেল: <code className="bg-white px-2 py-1 rounded text-blue-600 font-mono">demo@test.com</code></p>
              <p className="text-xs text-gray-600">নাম: <code className="bg-white px-2 py-1 rounded text-blue-600 font-mono">Demo User</code></p>
            </div>

            <div className="text-center text-sm text-gray-200 mt-6">
              <Link href="/register" className="text-white font-semibold hover:underline">নতুন ব্যবহারকারী? নিবন্ধন করুন</Link>
            </div>
          </div>
        </div>
      </div>

      <footer className="py-6 text-center text-white">© 2026 Luminous Skill Center</footer>
    </div>
  );
}
