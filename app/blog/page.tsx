'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function BlogPage() {

  const blogs = [
    {
      id: 1,
      title: 'কোডিং শিখার সেরা উপায়',
      category: 'শিক্ষা',
      date: 'ফেব্রুয়ারি ৫, ২০২৬',
      excerpt: 'আপনি যদি একজন নতুন প্রোগ্রামার হন, তাহলে এই গাইডটি আপনার জন্য নিখুঁত। আমরা কোডিং শিখার সবচেয়ে কার্যকর পদ্ধতি নিয়ে আলোচনা করব।',
      image: '💻',
    },
    {
      id: 2,
      title: 'ওয়েব ডেভেলপমেন্টের ভবিষ্যত',
      category: 'প্রযুক্তি',
      date: 'ফেব্রুয়ারি ৩, ২০২৬',
      excerpt: '২০২৬ সালে ওয়েব ডেভেলপমেন্টের ট্রেন্ড কী হবে? নতুন ফ্রেমওয়ার্ক এবং প্রযুক্তি সম্পর্কে জানুন।',
      image: '🌐',
    },
    {
      id: 3,
      title: 'সফলতার গল্প: শিক্ষার্থীদের অর্জন',
      category: 'অনুপ্রেরণা',
      date: 'ফেব্রুয়ারি ১, ২০২৬',
      excerpt: 'আমাদের শিক্ষার্থীরা কীভাবে তাদের স্বপ্ন পূরণ করেছে। তাদের অনুপ্রেরণামূলক যাত্রা জানুন।',
      image: '🏆',
    },
    {
      id: 4,
      title: 'জাভাস্ক্রিপ্ট মাস্টারি টিপস',
      category: 'প্রোগ্রামিং',
      date: 'জানুয়ারি ২৮, ২০২৬',
      excerpt: 'জাভাস্ক্রিপ্টে দক্ষ হয়ে উঠুন আমাদের বিশেষজ্ঞ পরামর্শ এবং সেরা অনুশীলনের মাধ্যমে।',
      image: '⚡',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow pt-20">
        <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          {/* Header */}
          <h1 className="text-5xl font-bold text-gray-900 mb-6 text-center">আমাদের ব্লগ</h1>
          <p className="text-xl text-gray-600 mb-12 text-center">শিক্ষা, প্রযুক্তি এবং শেখার নতুন উপায় সম্পর্কে নিয়মিত নিবন্ধ</p>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {blogs.map((blog) => (
              <article
                key={blog.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group cursor-pointer"
              >
                {/* Blog Image */}
                <div className="relative w-full h-48 overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <span className="text-7xl group-hover:scale-110 transition-transform duration-300">{blog.image}</span>
                </div>

                {/* Blog Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full font-semibold">
                      {blog.category}
                    </span>
                    <span className="text-xs text-gray-500">{blog.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{blog.excerpt}</p>
                  <Link
                    href={`/blog/${blog.id}`}
                    className="inline-block text-indigo-600 font-semibold hover:text-indigo-700 transition"
                  >
                    সম্পূর্ণ পড়ুন →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-lg p-8 text-white text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">নতুন নিবন্ধ পান সরাসরি আপনার ইনবক্সে</h2>
            <p className="text-lg mb-6 opacity-90">আমাদের সাপ্তাহিক নিউজলেটার সাবস্ক্রাইব করুন</p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="আপনার ইমেইল"
                className="flex-1 px-4 py-2 rounded text-gray-900"
              />
              <button className="px-6 py-2 bg-white text-indigo-600 font-bold rounded hover:bg-gray-100 transition">
                সাবস্ক্রাইব করুন
              </button>
            </div>
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
            <Link href="/blog" className="hover:text-indigo-400 transition text-sm">
              Blog
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
