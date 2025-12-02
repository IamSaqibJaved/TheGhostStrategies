'use client';

import React, { useState, useEffect } from 'react';

/**
 * Professional Hero component for The Ghost Strategies
 * Modern design with black and white theme
 */
export default function Hero({
  titleTop = 'The Ghost',
  titleBottom = 'Strategies',
  subtitle = "Digital solutions that bring your business to life.",
  ctaLabel = "Contact Us",
  ctaHref = "#contact",
}) {
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    // Set initial height
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <section className="relative w-full overflow-hidden overflow-x-hidden bg-black" style={{ height: '100vh', paddingTop: '80px' }}>
      {/* Enhanced Background with Geometric Patterns */}
      <div className="absolute inset-0">
        {/* Primary Background */}
        <div className="absolute inset-0 bg-black"></div>
        
        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='10' height='10' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 10 0 L 0 0 0 10' fill='none' stroke='%23ffffff' stroke-width='0.5' opacity='0.2'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grid)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>

        {/* Floating Geometric Shapes - Black and White */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-48 h-48 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-24 h-24 bg-white/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Hexagonal Pattern */}
        <div className="absolute top-1/4 right-1/4 w-16 h-16 border border-white/20 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-12 h-12 border border-white/20 rotate-12 animate-pulse"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 flex items-center h-full">
        <div className="grid grid-cols-1 desktop:grid-cols-2 gap-12 items-center w-full">
          
          {/* Left Content - Enhanced Typography and Layout */}
          <div className="text-center desktop:text-left space-y-6 flex flex-col">
            {/* Company Badge */}
            {windowHeight > 600 && (
              <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg order-2 desktop:order-1 self-center desktop:self-start">
                <span className="text-white text-sm font-semibold tracking-wide" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  ⚡ Digital Service Agency
                </span>
              </div>
            )}
            
            {/* Main Heading with Enhanced Styling */}
            <div className="space-y-4 order-1 desktop:order-2">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[0.9] tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                <span className="block text-white drop-shadow-2xl">
                  {titleTop}
                </span>
                <span className="block text-white drop-shadow-2xl">
                  {titleBottom}
                </span>
          </h1>
              
              {/* Decorative Line */}
              <div className="flex items-center space-x-4 justify-center desktop:justify-start">
                <div className="w-16 h-1 bg-white rounded-full"></div>
                <div className="w-8 h-1 bg-white/80 rounded-full"></div>
                <div className="w-4 h-1 bg-white/60 rounded-full"></div>
              </div>
            </div>
            
            {/* Enhanced Subtitle */}
            <p className="order-3 desktop:order-3 text-white/80 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto desktop:mx-0 font-light" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {subtitle}
          </p>

            {/* Enhanced CTA Buttons */}
            <div className="order-4 desktop:order-4 flex flex-col sm:flex-row gap-4 justify-center desktop:justify-start pt-4">
              <a
                href={ctaHref}
                onClick={e => {
                  if (ctaHref.startsWith('#')) {
                    e.preventDefault();
                    const targetId = ctaHref.replace('#', '');
                    const element = document.getElementById(targetId);
                    if (element) {
                      const offsetTop = element.offsetTop - 100;
                      window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                      });
                    }
                  }
                }}
                className="group relative inline-flex items-center justify-center text-center px-8 py-3 overflow-hidden text-base font-semibold text-black bg-white rounded-xl shadow-xl hover:shadow-white/30 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                <span className="absolute inset-0 w-full h-full bg-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center justify-center space-x-2">
                  <span>{ctaLabel}</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
              
              <a
                href="#services"
                onClick={e => {
                  e.preventDefault();
                  const element = document.getElementById('services');
                  if (element) {
                    const offsetTop = element.offsetTop - 100;
                    window.scrollTo({
                      top: offsetTop,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="group inline-flex items-center justify-center text-center px-8 py-3 text-base font-semibold text-white border-2 border-white/60 rounded-xl hover:bg-white/10 hover:border-white transition-all duration-300 hover:scale-105 hover:-translate-y-1 backdrop-blur-sm"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                <span className="mr-2">View Services</span>
                <svg className="w-4 h-4 transform group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="order-5 desktop:order-5 flex flex-wrap items-center justify-center desktop:justify-start gap-6 pt-6 text-white/80">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-sm font-medium" style={{ fontFamily: 'Montserrat, sans-serif' }}>24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <span className="text-sm font-medium" style={{ fontFamily: 'Montserrat, sans-serif' }}>8+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                <span className="text-sm font-medium" style={{ fontFamily: 'Montserrat, sans-serif' }}>Professional Team</span>
              </div>
            </div>
          </div>

          {/* Right Content - Professional Dashboard Preview */}
          <div className="relative hidden desktop:block">
            <div className="relative">
              {/* Main Dashboard Card */}
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                          The Ghost Strategies
                        </h3>
                        {windowHeight > 600 && (
                          <p className="text-white/70 text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            Digital Service Agency
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-white/60 rounded-full"></div>
                      <div className="w-3 h-3 bg-white/40 rounded-full"></div>
                      <div className="w-3 h-3 bg-white/20 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <div className="text-2xl font-bold text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>8+</div>
                      <div className="text-white/70 text-xs" style={{ fontFamily: 'Montserrat, sans-serif' }}>Years Experience</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <div className="text-2xl font-bold text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>24/7</div>
                      <div className="text-white/70 text-xs" style={{ fontFamily: 'Montserrat, sans-serif' }}>Support</div>
                    </div>
                  </div>

                  {/* Progress Bars */}
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm text-white/70 mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        <span>Client Satisfaction</span>
                        <span>100%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-white h-2 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm text-white/70 mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        <span>Project Success</span>
                        <span>98%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-white h-2 rounded-full" style={{ width: '98%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Action Cards */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-2xl animate-bounce">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <div className="absolute -bottom-12 -left-12 w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center shadow-2xl">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>

              {/* Background Glow Effects */}
              <div className="absolute -inset-4 bg-white/5 rounded-3xl blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


