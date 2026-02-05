'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function AboutPage() {

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow pt-20">
        <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          {/* Header */}
          <h1 className="text-5xl font-bold text-gray-900 mb-6 text-center">আমাদের সম্পর্কে</h1>
          <p className="text-xl text-gray-600 mb-12 text-center">Luminous Skill Center - আপনার শেখার ভবিষ্যত তৈরি করুন</p>

          {/* Mission Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-indigo-600 mb-4">আমাদের মিশন</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Luminous Skill Center এর লক্ষ্য হল সকল শিক্ষার্থীদের জন্য মানসম্পন্ন, অ্যাক্সেসযোগ্য এবং সাশ্রয়ী শিক্ষা প্রদান করা। 
              আমরা বিশ্বাস করি যে প্রযুক্তি এবং শিক্ষার সংমিশ্রণে অসাধারণ ফলাফল সৃষ্টি হতে পারে।
            </p>
          </div>

          {/* Vision Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-indigo-600 mb-4">আমাদের দৃষ্টিভঙ্গি</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              একটি এমন বিশ্ব তৈরি করা যেখানে প্রতিটি শিক্ষার্থী তাদের সম্পূর্ণ সম্ভাবনা উপলব্ধি করতে পারে। 
              আমাদের প্ল্যাটফর্ম শিক্ষার্থীদের দক্ষতা অর্জনে, সৃজনশীলতা বৃদ্ধিতে এবং ক্যারিয়ার গড়তে সাহায্য করে।
            </p>
          </div>

          {/* Features Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-indigo-600 mb-6">আমাদের বৈশিষ্ট্য</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="text-3xl">🎓</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">বিশেষজ্ঞ শিক্ষক</h3>
                  <p className="text-gray-600">শিল্পের অভিজ্ঞ পেশাদারদের দ্বারা পরিচালিত কোর্স</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl">💻</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">ব্যবহারিক প্রকল্প</h3>
                  <p className="text-gray-600">বাস্তব-বিশ্বের সমস্যা সমাধানে হাতে-কলমে অভিজ্ঞতা</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl">🏆</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">সার্টিফিকেশন</h3>
                  <p className="text-gray-600">শিল্প-স্বীকৃত শংসাপত্র পান</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl">👥</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">সম্প্রদায়</h3>
                  <p className="text-gray-600">বিশ্বব্যাপী শিক্ষার্থীদের একটি প্রাণবন্ত সম্প্রদায়</p>
                </div>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-indigo-600 mb-6">আমাদের দল</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              আমাদের দল প্রযুক্তি, শিক্ষা এবং ডিজাইনের বিশেষজ্ঞদের নিয়ে গঠিত যারা সর্বদা শিক্ষার্থীদের সেরা অভিজ্ঞতা প্রদানে প্রতিশ্রুতিবদ্ধ।
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: 'রহিম আহমেদ', role: 'প্রতিষ্ঠাতা ও সিইও', emoji: '👨‍💼' },
                { name: 'সারা খান', role: 'শিক্ষা পরিচালক', emoji: '👩‍🏫' },
                { name: 'করিম হোসেন', role: 'প্রযুক্তি প্রধান', emoji: '👨‍💻' },
              ].map((member, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-6xl mb-4">{member.emoji}</div>
                  <h3 className="font-bold text-gray-900">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-lg p-8 text-center text-white mb-8">
            <h2 className="text-3xl font-bold mb-4">আজই আমাদের সাথে যোগ দিন</h2>
            <p className="text-lg mb-6">হাজারো শিক্ষার্থী ইতিমধ্যে তাদের শেখার যাত্রা শুরু করেছেন</p>
            <Link
              href="/courses"
              className="inline-block px-8 py-3 bg-white text-indigo-600 font-bold rounded-lg hover:bg-gray-100 transition"
            >
              কোর্স অন্বেষণ করুন
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 mt-20">
        <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left text-sm">
            © 2026 Luminous Skill Center. All rights reserved.
          </div>
          <div className="flex space-x-6 mb-6 md:mb-0">
            <Link href="/" className="hover:text-indigo-400 transition text-sm">
              Home
            </Link>
            <Link href="/courses" className="hover:text-indigo-400 transition text-sm">
              Courses
            </Link>
            <Link href="/about" className="hover:text-indigo-400 transition text-sm">
              About
            </Link>
            <Link href="/contact" className="hover:text-indigo-400 transition text-sm">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
