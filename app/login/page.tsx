"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [step, setStep] = useState<"login" | "class-selection">("login");
  const { login, isAuthenticated, logout } = useAuth();
  const router = useRouter();

  const availableCourses = [
    { id: "1", title: "ওয়েব ডেভেলপমেন্ট", emoji: "💻" },
    { id: "2", title: "ডিজিটাল মার্কেটিং", emoji: "📱" },
    { id: "3", title: "গ্রাফিক ডিজাইন", emoji: "🎨" },
    { id: "4", title: "জাভা প্রোগ্রামিং", emoji: "☕" },
  ];

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
    setStep("class-selection");
  }

  function handleSelectCourse() {
    router.push("/my-classes");
  }

  if (step === "class-selection") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 flex flex-col">
        <nav className="w-full">
          <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
            <Link href="/" className="text-white text-xl font-bold">
              ✨ Luminous Skill Center
            </Link>
            <div className="hidden md:flex space-x-4">
              {!isAuthenticated ? (
                <Link href="/login" className="text-white">
                  Login
                </Link>
              ) : (
                <button
                  onClick={() => {
                    logout();
                    router.push("/");
                  }}
                  className="text-white"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        </nav>

        <div className="flex-1 flex items-center justify-center px-4 py-8">
          <div className="w-full max-w-4xl">
            <div className="text-center mb-12 text-white">
              <h1 className="text-5xl font-bold mb-4">স্বাগতম!</h1>
              <p className="text-xl opacity-95">আপনি যে কোর্সটি শিখতে চান তা বেছে নিন</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {availableCourses.map((c) => (
                <button
                  key={c.id}
                  onClick={handleSelectCourse}
                  className="bg-white/10 rounded-2xl p-8 text-white hover:scale-105 transition"
                >
                  <div className="text-6xl mb-4">{c.emoji}</div>
                  <h2 className="text-2xl font-bold mb-2">{c.title}</h2>
                  <p className="opacity-90 mb-4">শুরু করতে ক্লিক করুন</p>
                </button>
              ))}
            </div>

            <div className="text-center">
              <button onClick={() => setStep("login")} className="text-white underline">
                ← ফিরে যান
              </button>
            </div>
          </div>
        </div>

        <footer className="py-6 text-center text-white">© 2026 Luminous Skill Center</footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col">
      <nav className="w-full">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/" className="text-white text-xl font-bold">
            ✨ Luminous Skill Center
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="text-white">
              Home
            </Link>
            <Link href="/courses" className="text-white">
              Courses
            </Link>
          </div>
        </div>
      </nav>

      <div className="flex-1 flex items-center justify-center px-4">
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
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">ইমেল ঠিকানা</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="আপনার ইমেল লিখুন"
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg"
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
