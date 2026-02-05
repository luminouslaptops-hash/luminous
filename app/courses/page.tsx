'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';

interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  instructor: string;
  students: number;
  rating: number;
  price: string;
}

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Mock course data
  const courses: Course[] = [
    {
      id: '1',
      title: 'ওয়েব ডেভেলপমেন্ট মাস্টারক্লাস',
      description: 'HTML, CSS, JavaScript এবং React শিখুন এবং আধুনিক ওয়েব অ্যাপ্লিকেশন তৈরি করুন।',
      image: 'https://kritagyata.in/wp-content/uploads/2024/01/graphic-design-1500-x-900-picture-lpuf40e9jm621ews.jpg',
      category: 'Web Development',
      instructor: 'রহিম আহমেদ',
      students: 256,
      rating: 4.8,
      price: '৳ ৫,৯৯৯',
    },
    {
      id: '2',
      title: 'ডিজিটাল মার্কেটিং কোর্স',
      description: 'SEO, সোশ্যাল মিডিয়া এবং কন্টেন্ট মার্কেটিং এর সব কিছু শিখুন।',
      image: 'https://kritagyata.in/wp-content/uploads/2024/01/graphic-design-1500-x-900-picture-lpuf40e9jm621ews.jpg',
      category: 'Digital Marketing',
      instructor: 'সুমাইয়া খান',
      students: 184,
      rating: 4.6,
      price: '৳ ৩,৯৯৯',
    },
    {
      id: '3',
      title: 'গ্রাফিক ডিজাইন ফাউন্ডেশন',
      description: 'Adobe Creative Suite ব্যবহার করে পেশাদার ডিজাইন তৈরি করুন।',
      image: 'https://kritagyata.in/wp-content/uploads/2024/01/graphic-design-1500-x-900-picture-lpuf40e9jm621ews.jpg',
      category: 'Graphic Design',
      instructor: 'ফারহান হাসান',
      students: 142,
      rating: 4.7,
      price: '৳ ৪,৯৯৯',
    },
    {
      id: '4',
      title: 'Java প্রোগ্রামিং মাস্টারি',
      description: 'জাভা থেকে শুরু করে এন্টারপ্রাইজ অ্যাপ্লিকেশন ডেভেলপমেন্ট পর্যন্ত।',
      image: 'https://kritagyata.in/wp-content/uploads/2024/01/graphic-design-1500-x-900-picture-lpuf40e9jm621ews.jpg',
      category: 'Web Development',
      instructor: 'করিম হোসেন',
      students: 198,
      rating: 4.9,
      price: '৳ ৬,৯৯৯',
    },
    {
      id: '5',
      title: 'UI/UX ডিজাইন পেশাদার কোর্স',
      description: 'ব্যবহারকারী অভিজ্ঞতা এবং ইন্টারফেস ডিজাইনের সম্পূর্ণ গাইড।',
      image: 'https://kritagyata.in/wp-content/uploads/2024/01/graphic-design-1500-x-900-picture-lpuf40e9jm621ews.jpg',
      category: 'Graphic Design',
      instructor: 'নাজমা বেগম',
      students: 167,
      rating: 4.8,
      price: '৳ ৫,৪৯৯',
    },
    {
      id: '6',
      title: 'কন্টেন্ট মার্কেটিং স্ট্র্যাটেজি',
      description: 'সঠিক কন্টেন্ট স্ট্র্যাটেজি দিয়ে আপনার ব্র্যান্ডকে এগিয়ে নিয়ে যান।',
      image: 'https://kritagyata.in/wp-content/uploads/2024/01/graphic-design-1500-x-900-picture-lpuf40e9jm621ews.jpg',
      category: 'Digital Marketing',
      instructor: 'সারা আলী',
      students: 126,
      rating: 4.5,
      price: '৳ ৩,৪৯৯',
    },
    {
      id: '7',
      title: 'পাইথন ফর ডেটা সায়েন্স',
      description: 'ডেটা এনালিটিক্স এবং মেশিন লার্নিং এর ফাউন্ডেশন শিখুন।',
      image: 'https://kritagyata.in/wp-content/uploads/2024/01/graphic-design-1500-x-900-picture-lpuf40e9jm621ews.jpg',
      category: 'Web Development',
      instructor: 'ইমরান খান',
      students: 213,
      rating: 4.7,
      price: '৳ ৭,৯৯৯',
    },
    {
      id: '8',
      title: 'ব্র্যান্ডিং এবং লোগো ডিজাইন',
      description: 'একটি শক্তিশালী ব্র্যান্ড আইডেন্টিটি তৈরি করুন।',
      image: 'https://kritagyata.in/wp-content/uploads/2024/01/graphic-design-1500-x-900-picture-lpuf40e9jm621ews.jpg',
      category: 'Graphic Design',
      instructor: 'আশিক রায়',
      students: 95,
      rating: 4.6,
      price: '৳ ৪,৪৯৯',
    },
  ];

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(courses.map((c) => c.category)))];

  // Filter and search courses
  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Pagination
  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedCourses = filteredCourses.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow pt-20">
        <div className="bg-gray-50 min-h-screen">
          <div className="container mx-auto px-6 py-12">
            {/* Header */}
            <header className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
                আমাদের সকল কোর্স
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                আপনার পছন্দের স্কিলটি খুঁজে নিন এবং আজই আপনার শেখার যাত্রা শুরু করুন।
              </p>
            </header>

            {/* Search and Filter Section */}
            <div className="mb-12">
              {/* Search Bar */}
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-6">
                <div className="relative w-full md:w-1/2 lg:w-1/3">
                  <input
                    type="text"
                    placeholder="কোর্সের নাম দিয়ে খুঁজুন..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <div className="absolute left-3 top-1/2 -translate-y-1/2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Filter Buttons */}
              <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setCurrentPage(1);
                    }}
                    className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-indigo-600 text-white shadow-md'
                        : 'bg-white text-gray-700 border border-gray-300 hover:border-indigo-600 hover:text-indigo-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Courses Grid or Empty State */}
              {displayedCourses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {displayedCourses.map((course) => (
                    <div
                      key={course.id}
                      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                    >
                      {/* Course Image */}
                      <div className="relative w-full h-56 overflow-hidden bg-gray-200">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>

                      {/* Course Content */}
                      <div className="p-6">
                        {/* Category Badge */}
                        <div className="inline-block bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                          {course.category}
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                          {course.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {course.description}
                        </p>

                        {/* Instructor and Stats */}
                        <div className="border-t border-gray-200 pt-4 mb-4">
                          <p className="text-sm text-gray-600 mb-2">
                            <span className="font-semibold text-gray-800">অনুপ্রেরক:</span> {course.instructor}
                          </p>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">
                              👥 {course.students} শিক্ষার্থী
                            </span>
                            <span className="text-yellow-500 font-semibold">
                              ⭐ {course.rating}
                            </span>
                          </div>
                        </div>

                        {/* Price and Button */}
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-indigo-600">
                            {course.price}
                          </span>
                          <Link
                            href="/login"
                            className="px-4 py-2 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors duration-200"
                          >
                            নিবন্ধন করুন
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <h3 className="text-2xl font-semibold text-gray-700">
                    দুঃখিত, কোনো কোর্স পাওয়া যায়নি।
                  </h3>
                  <p className="text-gray-500 mt-2">
                    আপনার সার্চ বা ফিল্টার পরিবর্তন করে আবার চেষ্টা করুন।
                  </p>
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-16 flex justify-center">
                  <nav className="flex items-center space-x-2">
                    <button
                      onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                      className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-200 ${
                        currentPage === 1
                          ? 'bg-gray-200 text-gray-600 cursor-not-allowed'
                          : 'bg-gray-200 text-gray-700 hover:bg-indigo-600 hover:text-white'
                      }`}
                    >
                      Previous
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-200 ${
                          currentPage === page
                            ? 'bg-indigo-600 text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-indigo-600 hover:text-white'
                        }`}
                      >
                        {page}
                      </button>
                    ))}

                    <button
                      onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                      disabled={currentPage === totalPages}
                      className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-200 ${
                        currentPage === totalPages
                          ? 'bg-gray-200 text-gray-600 cursor-not-allowed'
                          : 'bg-gray-200 text-gray-700 hover:bg-indigo-600 hover:text-white'
                      }`}
                    >
                      Next
                    </button>
                  </nav>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 mt-20">
        <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left text-sm">
            © 2026 EduCenter. All rights reserved.
          </div>
          <div className="flex space-x-6 mb-6 md:mb-0">
            <Link href="/" className="hover:text-indigo-400 transition text-sm">
              Home
            </Link>
            <Link href="/about" className="hover:text-indigo-400 transition text-sm">
              About
            </Link>
            <Link href="/courses" className="hover:text-indigo-400 transition text-sm">
              Courses
            </Link>
            <Link href="/blog" className="hover:text-indigo-400 transition text-sm">
              Blog
            </Link>
            <Link href="/contact" className="hover:text-indigo-400 transition text-sm">
              Contact
            </Link>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://www.facebook.com/luminouscentree"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-indigo-400 transition"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-7H7.9v-2.88h2.54v-2.2c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.86h2.78l-.44 2.88h-2.34v7C18.34 21.13 22 17 22 12z" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-indigo-400 transition">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14.86 4.48 4.48 0 001.98-2.48 9.11 9.11 0 01-2.88 1.1 4.52 4.52 0 00-7.7 4.13 12.83 12.83 0 01-9.32-4.73 4.52 4.52 0 001.4 6.04 4.44 4.44 0 01-2.05-.57v.06a4.52 4.52 0 003.63 4.43 4.52 4.52 0 01-2.04.08 4.52 4.52 0 004.22 3.14A9.06 9.06 0 012 19.54 12.79 12.79 0 008.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.53A8.18 8.18 0 0023 3z" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-indigo-400 transition">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v6h-4v-6a2 2 0 00-4 0v6h-4v-6a6 6 0 016-6zM2 9h4v12H2zM4 3a2 2 0 110 4 2 2 0 010-4z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
