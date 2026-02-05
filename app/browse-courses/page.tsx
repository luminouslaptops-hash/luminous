'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/AuthContext';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';

interface Course {
  id: string;
  classId: string; // ID to match with enrolledClasses
  title: string;
  description: string;
  image: string;
  category: string;
  instructor: string;
  students: number;
  rating: number;
  price: string;
}

export default function BrowseCoursesPage() {
  const { isAuthenticated, isLoading, enrollCourse, isEnrolled } = useAuth();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [enrollmentSuccess, setEnrollmentSuccess] = useState('');

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isLoading, isAuthenticated, router]);

  // Mock course data with mapping to enrolledClasses
  const courses: Course[] = [
    {
      id: '1',
      classId: 'class-1',
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
      classId: 'class-2',
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
      classId: 'class-3',
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
      classId: 'class-4',
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
      classId: 'class-5',
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
      classId: 'class-6',
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
      classId: 'class-7',
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
      classId: 'class-8',
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

  const categories = ['All', ...Array.from(new Set(courses.map((c) => c.category)))];

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedCourses = filteredCourses.slice(startIndex, startIndex + itemsPerPage);

  const handleEnroll = (courseId: string, classId: string, courseTitle: string) => {
    console.log('Enrolling in course:', { courseId, classId, courseTitle });
    enrollCourse(classId);
    console.log('Course enrolled successfully');
    setEnrollmentSuccess(courseTitle);
    setTimeout(() => setEnrollmentSuccess(''), 5000);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">Redirecting to login...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col">
      <Navbar />

      <main className="flex-grow pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">সকল কোর্স ব্রাউজ করুন</h1>
            <p className="text-lg text-gray-600">আপনার পছন্দের কোর্সে যোগদান করুন এবং শিখতে শুরু করুন</p>
          </div>

          {/* Success Message */}
          {enrollmentSuccess && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-center">
              <div className="mb-2">✓ আপনি সফলভাবে "{enrollmentSuccess}" কোর্সে যোগদান করেছেন</div>
              <Link 
                href="/my-classes"
                className="inline-block mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition text-sm font-semibold"
              >
                আমার কোর্স দেখুন →
              </Link>
            </div>
          )}

          {/* Search Bar */}
          <div className="mb-8">
            <input
              type="text"
              placeholder="কোর্স খুঁজুন..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>

          {/* Category Filter */}
          <div className="mb-8 flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(1);
                }}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  selectedCategory === category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-indigo-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {displayedCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
              >
                {/* Image */}
                <div className="relative w-full h-48 bg-gradient-to-br from-indigo-500 to-purple-600 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover opacity-70"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">{course.description}</p>

                  {/* Rating */}
                  <div className="flex items-center mb-3">
                    <span className="text-yellow-500">★</span>
                    <span className="ml-1 font-semibold text-gray-700">{course.rating}</span>
                    <span className="text-gray-500 text-sm ml-2">({course.students} শিক্ষার্থী)</span>
                  </div>

                  {/* Instructor */}
                  <p className="text-sm text-gray-600 mb-4">👨‍🏫 {course.instructor}</p>

                  {/* Price and Enroll */}
                  <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                    <span className="font-bold text-indigo-600">{course.price}</span>
                    {isEnrolled(course.classId) ? (
                      <Link
                        href="/my-classes"
                        className="px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
                      >
                        চলছে ✓
                      </Link>
                    ) : (
                      <button
                        onClick={() => handleEnroll(course.id, course.classId, course.title)}
                        className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
                      >
                        যোগদান করুন
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-8">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 border border-gray-300 rounded disabled:opacity-50"
            >
              পূর্ববর্তী
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 rounded ${
                  currentPage === i + 1
                    ? 'bg-indigo-600 text-white'
                    : 'border border-gray-300 hover:border-indigo-600'
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border border-gray-300 rounded disabled:opacity-50"
            >
              পরবর্তী
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-6 text-center">
        © 2026 Luminous Skill Center
      </footer>
    </div>
  );
}
