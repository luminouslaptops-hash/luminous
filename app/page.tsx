'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from './components/Navbar';

export default function HomePage() {
  return (
    <div className="bg-[#1e1e1e] text-white">
      <Navbar />
      {/* Banner Section */}
      <section id="home" className="bg-linear-to-br from-[#667eea] via-[#764ba2] to-[#f093fb] py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated background blobs */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        {/* Banner content */}
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            লুমিনাস স্কিল সেন্টারে স্বাগতম
          </h1>
          <p className="text-lg sm:text-xl text-white opacity-95 max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            লুমিনাস স্কিল সেন্টার ওয়েব ডিজাইন, ডিজিটাল মার্কেটিং এবং ক্রিয়েটিভ দক্ষতায় আধুনিক ও প্র্যাকটিক্যাল প্রশিক্ষণ প্রদান করে।
          </p>
          <Link
            href="/login"
            className="inline-block px-8 py-3 bg-white text-[#0ea5e9] font-bold rounded-lg hover:bg-opacity-90 transform hover:-translate-y-1 active:scale-95 transition-all duration-200 shadow-xl hover:shadow-2xl animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            এখনই শুরু করুন
          </Link>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-[#f5f7fa] to-[#e9ecef]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-[#667eea] mb-4 animate-fade-in relative pb-6">
            আমাদের কোর্সসমূহ
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-linear-to-r from-[#667eea] to-[#764ba2] rounded-full"></span>
          </h2>
          <p className="text-center text-[#555] mb-16 animate-fade-in text-lg" style={{ animationDelay: '0.1s' }}>
            আমাদের সাবধানে ডিজাইন করা কোর্সগুলো থেকে পছন্দ করুন
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Course 1: Digital Marketing */}
            <Link
              href="/login"
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group animate-fade-in"
            >
              <div className="relative w-full h-56 overflow-hidden">
                <Image 
                  src="https://kritagyata.in/wp-content/uploads/2024/01/graphic-design-1500-x-900-picture-lpuf40e9jm621ews.jpg"
                  alt="Digital Marketing"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="inline-block bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  মার্কেটিং
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                  Digital Marketing
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  Strategic digital marketing solutions to grow brand visibility and connect customers with innovative software experiences.
                </p>
                <div className="border-t border-gray-200 pt-4 mb-4">
                  <p className="text-sm text-gray-600 mb-2">
                    <span className="font-semibold text-gray-800">অনুপ্রেরক:</span> আমাদের দল
                  </p>
                </div>
                <button className="w-full px-4 py-2 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors duration-200">
                  শুরু করুন
                </button>
              </div>
            </Link>

            {/* Course 2: Web Design */}
            <Link
              href="/login"
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group animate-fade-in"
              style={{ animationDelay: '0.1s' }}
            >
              <div className="relative w-full h-56 overflow-hidden">
                <Image 
                  src="https://kritagyata.in/wp-content/uploads/2024/01/graphic-design-1500-x-900-picture-lpuf40e9jm621ews.jpg"
                  alt="Web Design"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="inline-block bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  ডেভেলপমেন্ট
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                  Web Design & Development
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  Professional web solutions that ensure performance, security, and modern design standards.
                </p>
                <div className="border-t border-gray-200 pt-4 mb-4">
                  <p className="text-sm text-gray-600 mb-2">
                    <span className="font-semibold text-gray-800">অনুপ্রেরক:</span> আমাদের দল
                  </p>
                </div>
                <button className="w-full px-4 py-2 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors duration-200">
                  শুরু করুন
                </button>
              </div>
            </Link>

            {/* Course 3: Graphic Design */}
            <Link
              href="/login"
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group animate-fade-in"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src="https://kritagyata.in/wp-content/uploads/2024/01/graphic-design-1500-x-900-picture-lpuf40e9jm621ews.jpg"
                  alt="Graphic Design"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="inline-block bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  ডিজাইন
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                  Graphic Design
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  Creative visual designs that represent innovation, quality, and premium branding.
                </p>
                <div className="border-t border-gray-200 pt-4 mb-4">
                  <p className="text-sm text-gray-600 mb-2">
                    <span className="font-semibold text-gray-800">অনুপ্রেরক:</span> আমাদের দল
                  </p>
                </div>
                <button className="w-full px-4 py-2 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors duration-200">
                  শুরু করুন
                </button>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#667eea] mb-4 animate-fade-in relative pb-6 inline-block w-full">
            About Luminous Skill Center
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-linear-to-r from-[#667eea] to-[#764ba2] rounded-full"></span>
          </h2>
          <p className="text-[#555] text-lg max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in mt-8" style={{ animationDelay: '0.1s' }}>
            Luminous Skill Center is a leading software education firm known for innovation, engineering excellence, and premium learning experience. We focus on performance, security, and student satisfaction.
          </p>

          <h3 className="text-3xl font-bold text-[#333] mb-8 mt-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Our Mission & Vision
          </h3>
          <p className="text-[#555] text-lg max-w-3xl mx-auto mb-16 leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Our mission is to deliver high-performance education while maintaining quality and efficiency. We aim to lead the future of learning through innovation, trust, and advanced learning solutions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-linear-to-br from-[#667eea] to-[#764ba2] text-white p-7 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Advanced software engineering
            </div>
            <div className="bg-linear-to-br from-[#667eea] to-[#764ba2] text-white p-7 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              Student-focused innovation
            </div>
            <div className="bg-linear-to-br from-[#667eea] to-[#764ba2] text-white p-7 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              Global quality standards
            </div>
            <div className="bg-linear-to-br from-[#667eea] to-[#764ba2] text-white p-7 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.7s' }}>
              Sustainable solutions
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-[#667eea] to-[#764ba2]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-center animate-fade-in">
            Contact Us
          </h2>
          <p className="text-center text-white opacity-95 text-lg mb-16 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            We&apos;d love to hear from you. Reach out anytime.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <div className="text-white animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold mb-8">Contact Details</h3>
              <div className="space-y-6">
                <p className="text-lg opacity-90 leading-relaxed">
                  <strong className="block mb-2">📧 Email:</strong>
                  <a href="mailto:info@luminousskillcenter.com" className="hover:opacity-100 transition">
                    info@luminousskillcenter.com
                  </a>
                </p>
                <p className="text-lg opacity-90 leading-relaxed">
                  <strong className="block mb-2">📞 Phone:</strong>
                  <a href="tel:+1234567890" className="hover:opacity-100 transition">
                    +1 (234) 567-890
                  </a>
                </p>
                <p className="text-lg opacity-90 leading-relaxed">
                  <strong className="block mb-2">📍 Location:</strong>
                  <span>123 Learning Street<br />Education City, EC 12345</span>
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <form className="bg-[#1a1a2e] rounded-2xl p-8 shadow-2xl animate-fade-in border border-[#667eea]/30" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-2xl font-bold text-white mb-8">Send Message</h3>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 mb-4 bg-[#16213e] border-2 border-[#667eea]/50 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:border-[#667eea] focus:shadow-lg transition-all duration-300"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 mb-4 bg-[#16213e] border-2 border-[#667eea]/50 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:border-[#667eea] focus:shadow-lg transition-all duration-300"
                required
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full p-4 mb-6 bg-[#16213e] border-2 border-[#667eea]/50 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:border-[#667eea] focus:shadow-lg transition-all duration-300 resize-none"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 bg-linear-to-r from-[#667eea] to-[#764ba2] text-white font-bold rounded-lg hover:shadow-lg transform hover:-translate-y-1 active:scale-95 transition-all duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-linear-to-br from-[#1a1a1a] to-[#0f0f0f] text-white py-12 px-4 sm:px-6 lg:px-8 border-t-4 border-[#0ea5e9]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-8">© 2026 Luminous Skill Center. All Rights Reserved.</p>
          <div className="flex justify-center gap-6">
            <a
              href="https://facebook.com"
              className="px-6 py-2 border-2 border-white text-white rounded-lg font-bold hover:bg-white hover:text-[#0ea5e9] transform hover:-translate-y-1 transition-all duration-300"
            >
              Facebook
            </a>
            <a
              href="https://github.com"
              className="px-6 py-2 border-2 border-white text-white rounded-lg font-bold hover:bg-white hover:text-[#0ea5e9] transform hover:-translate-y-1 transition-all duration-300"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              className="px-6 py-2 border-2 border-white text-white rounded-lg font-bold hover:bg-white hover:text-[#0ea5e9] transform hover:-translate-y-1 transition-all duration-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
