'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow pt-20">
        <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          {/* Header */}
          <h1 className="text-5xl font-bold text-gray-900 mb-6 text-center">আমাদের সাথে যোগাযোগ করুন</h1>
          <p className="text-xl text-gray-600 mb-12 text-center">আমাদের টিম আপনার প্রশ্ন এবং পরামর্শ শুনতে প্রস্তুত</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Contact Info Cards */}
            {[
              {
                icon: '📧',
                title: 'ইমেইল',
                content: 'support@luminous.com',
                link: 'mailto:support@luminous.com',
              },
              {
                icon: '📞',
                title: 'ফোন',
                content: '+৮৮০ ১৭ XXXX XXXX',
                link: 'tel:+8801700000000',
              },
              {
                icon: '📍',
                title: 'ঠিকানা',
                content: 'ঢাকা, বাংলাদেশ',
                link: '#',
              },
            ].map((contact, idx) => (
              <a
                key={idx}
                href={contact.link}
                className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl mb-4">{contact.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{contact.title}</h3>
                <p className="text-gray-600">{contact.content}</p>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">আপনার বার্তা পাঠান</h2>
            {submitted && (
              <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
                ✓ ধন্যবাদ! আপনার বার্তা সফলভাবে পাঠানো হয়েছে। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-gray-900 font-semibold mb-2">আপনার নাম</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 transition"
                  placeholder="আপনার পূর্ণ নাম"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-gray-900 font-semibold mb-2">ইমেইল ঠিকানা</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 transition"
                  placeholder="your@email.com"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label className="block text-gray-900 font-semibold mb-2">বিষয়</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 transition"
                >
                  <option value="">একটি বিষয় নির্বাচন করুন</option>
                  <option value="course">কোর্স সম্পর্কিত</option>
                  <option value="technical">প্রযুক্তিগত সমস্যা</option>
                  <option value="billing">বিলিং</option>
                  <option value="feedback">অভিজ্ঞতা ভাগ করুন</option>
                  <option value="other">অন্যান্য</option>
                </select>
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-gray-900 font-semibold mb-2">আপনার বার্তা</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 transition resize-none"
                  placeholder="আপনার বার্তা এখানে লিখুন..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 active:scale-95"
              >
                বার্তা পাঠান ✓
              </button>
            </form>
          </div>

          {/* Map Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">আমাদের অফিস খুঁজুন</h2>
            <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <p className="text-gray-600">ঢাকা, বাংলাদেশে আমাদের অফিস</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">সাধারণ প্রশ্ন</h2>
            <div className="space-y-4">
              {[
                {
                  q: 'আপনারা কত সময়ে সাড়া দেন?',
                  a: 'আমরা সাধারণত ২৪ ঘণ্টার মধ্যে সব বার্তার উত্তর দেই।',
                },
                {
                  q: 'আপনাদের সাথে কীভাবে যোগাযোগ করতে পারি?',
                  a: 'আপনি ইমেইল, ফোন অথবা এই ফর্মের মাধ্যমে আমাদের সাথে যোগাযোগ করতে পারেন।',
                },
                {
                  q: 'আপনারা লাইভ চ্যাট সাপোর্ট প্রদান করেন?',
                  a: 'হ্যাঁ, সোমবার থেকে শুক্রবার সকাল ৯টা থেকে সন্ধ্যা ৬টা পর্যন্ত লাইভ চ্যাট উপলব্ধ।',
                },
              ].map((faq, idx) => (
                <details key={idx} className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:bg-gray-50">
                  <summary className="font-bold text-gray-900">{faq.q}</summary>
                  <p className="mt-3 text-gray-600">{faq.a}</p>
                </details>
              ))}
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
