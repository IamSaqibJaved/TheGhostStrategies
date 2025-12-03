'use client';

import React from 'react';

export default function ContactUs() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Enhanced Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-60 h-60 sm:w-80 sm:h-80 bg-black/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 sm:w-80 sm:h-80 bg-black/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-black/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="mb-6">
            <span className="text-black text-lg font-bold tracking-wider uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Contact Us
            </span>
            <div className="w-16 h-0.5 bg-black mt-2 mx-auto"></div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            We&apos;d Love To Hear From You
          </h2>
          <p className="text-base text-gray-600 leading-relaxed max-w-4xl mx-auto text-justify" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Get in touch with us. Our team will get back to you promptly with next steps and tailored guidance.
          </p>
        </div>

        {/* Contact Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-22">
          {/* Phone Number */}
          <div className="flex flex-col items-center text-center group">
            <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-black/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 mb-6">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Phone Number
            </h4>
            <p className="text-gray-600 leading-relaxed font-medium text-base sm:text-lg">+44 7413 467197</p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center text-center group">
            <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-black/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 mb-6">
              <svg className="w-9 h-8 sm:w-10 sm:h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Email Address
            </h4>
            <p className="text-gray-600 leading-relaxed font-medium text-base sm:text-lg whitespace-nowrap">Support@theghoststrategies.store</p>
          </div>

          {/* Address */}
          <div className="flex flex-col items-center text-center group">
            <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-black/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 mb-6">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Office Address
            </h4>
            <div className="space-y-1 text-gray-600">
              <p className="leading-relaxed text-base sm:text-lg">312 W 2nd St Casper</p>
              <p className="leading-relaxed text-base sm:text-lg">Wyoming</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

