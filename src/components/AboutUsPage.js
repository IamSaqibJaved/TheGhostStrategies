'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Footer from './Footer';
import Reveal from './utils/Reveal';

export default function AboutUs() {
  const stats = [
    { number: 8, suffix: '+', label: 'Years Experience' },
    { number: 100, suffix: '%', label: 'Client Satisfaction' },
    { number: 24, suffix: '/7', label: 'Support Available' },
    { number: 500, suffix: '+', label: 'Projects Delivered' },
  ];

  // Animated Counter Component
  function AnimatedCounter({ end, suffix, duration = 1200 }) {
    const [count, setCount] = useState(0);
    const ref = useRef();
    useEffect(() => {
      let start = 0;
      const increment = end / (duration / 16);
      let frame;
      function animate() {
        start += increment;
        if (start < end) {
          setCount(Math.floor(start));
          frame = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      }
      frame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(frame);
    }, [end, duration]);
    return (
      <span ref={ref}>{count}{suffix}</span>
    );
  }

  const whyChooseUs = [
    {
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Professional & Experienced Team',
      description: 'Our team brings years of expertise in digital services, ensuring quality results for every project.',
    },
    {
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: '8+ Years Experience',
      description: 'With over 8 years in the industry, we have the knowledge and expertise to deliver outstanding results.',
    },
    {
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Fast Delivery',
      description: 'We understand the importance of time. Our team ensures quick turnaround without compromising quality.',
    },
    {
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Affordable Packages',
      description: 'We offer competitive pricing and flexible packages to meet your budget while delivering exceptional value.',
    },
    {
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: '100% Client Satisfaction',
      description: 'Your satisfaction is our priority. We work closely with clients to exceed expectations and deliver results.',
    },
    {
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: '24/7 Support',
      description: 'Round-the-clock support ensures that we\'re always here when you need us, no matter the time zone.',
    },
  ];

  return (
    <>
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-black text-white py-12 sm:py-16 md:py-20" style={{ paddingTop: '100px' }}>
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black"></div>
          
          {/* Geometric Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='10' height='10' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 10 0 L 0 0 0 10' fill='none' stroke='%23ffffff' stroke-width='0.5' opacity='0.2'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grid)'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat'
            }}></div>
          </div>

          {/* Floating Shapes */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute top-40 right-32 w-48 h-48 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-32 left-1/3 w-24 h-24 bg-white/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mt-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black leading-[0.9] tracking-tight mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <span className="block text-white drop-shadow-2xl">
                About The Ghost Strategies
              </span>
            </h2>
            
            {/* Decorative Line */}
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-0.5 bg-white rounded-full"></div>
              <div className="w-6 h-0.5 bg-white/80 rounded-full"></div>
              <div className="w-3 h-0.5 bg-white/60 rounded-full"></div>
            </div>
            
            <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-3xl mx-auto font-light" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              A full-service digital agency providing innovative and high-quality solutions for businesses worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-6 sm:-mt-8 mb-8 sm:mb-10 md:mb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-black/10 p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <Reveal key={index} direction="up" delayMs={index * 150}>
                  <div className="text-center group">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-black text-black mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      <AnimatedCounter end={stat.number} suffix={stat.suffix} duration={1200 + index * 200} />
                    </div>
                    <div className="text-xs sm:text-sm text-gray-700 font-semibold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {stat.label}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Introduction Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
              <div className="h-px w-6 sm:w-8 bg-black"></div>
              <span className="text-xs font-bold text-black uppercase tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Who We Are
              </span>
              <div className="h-px w-6 sm:w-8 bg-black"></div>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-4 sm:mb-6 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Full-Service Digital Agency
            </h2>
            
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-justify" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              The Ghost Strategies is a full-service digital agency providing innovative and high-quality solutions for businesses worldwide. With over 8 years of experience in digital services, we help businesses grow through modern, creative, and result-driven digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
              <div className="h-px w-6 sm:w-8 bg-black"></div>
              <span className="text-xs font-bold text-black uppercase tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Our Experience
              </span>
              <div className="h-px w-6 sm:w-8 bg-black"></div>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-4 sm:mb-6 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              8 Years of Excellence
            </h2>
            
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-justify" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              We have 8 years of experience delivering results across web development, designing, marketing, and e-commerce. Our proven track record speaks for itself, with hundreds of successful projects and satisfied clients.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
            {/* Mission */}
            <div>
              <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
                <div className="h-px w-6 sm:w-8 bg-black"></div>
                <span className="text-xs font-bold text-black uppercase tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Our Mission
                </span>
                <div className="h-px w-6 sm:w-8 bg-black"></div>
              </div>
              
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-4 sm:mb-6 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Driving Business Growth
              </h3>
              
              <p className="text-base text-gray-700 leading-relaxed text-justify" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                To provide businesses with digital solutions that improve growth, visibility, and long-term success. We are committed to delivering innovative and effective strategies that help our clients achieve their goals.
              </p>
            </div>

            {/* Vision */}
            <div>
              <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
                <div className="h-px w-6 sm:w-8 bg-black"></div>
                <span className="text-xs font-bold text-black uppercase tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Our Vision
                </span>
                <div className="h-px w-6 sm:w-8 bg-black"></div>
              </div>
              
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-4 sm:mb-6 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Global Leadership
              </h3>
              
              <p className="text-base text-gray-700 leading-relaxed text-justify" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                To become a global leader in smart, creative, and reliable digital services. We envision a future where businesses worldwide trust us as their partner for digital transformation and success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, #000000 0%, transparent 50%), 
                             radial-gradient(circle at 80% 80%, #000000 0%, transparent 50%)`,
          }}></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
              <div className="h-px w-6 sm:w-8 bg-black"></div>
              <span className="text-xs font-bold text-black uppercase tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Why Choose Us
              </span>
              <div className="h-px w-6 sm:w-8 bg-black"></div>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-3 sm:mb-4 px-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              What Sets Us Apart
            </h2>
            
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              We combine expertise, innovation, and dedication to deliver exceptional results for every client
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {whyChooseUs.map((item, index) => (
              <Reveal key={index} direction="up" delayMs={index * 100}>
                <div 
                  className="group bg-white border border-black/10 rounded-xl p-6 sm:p-8 flex flex-col items-center justify-center hover:border-black hover:shadow-xl hover:scale-105 transition-all duration-500"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-black/5 rounded-xl flex items-center justify-center text-black mb-4 sm:mb-6 group-hover:bg-black group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-black text-gray-900 mb-2 sm:mb-3 group-hover:text-black transition-colors duration-300 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {item.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black"></div>
          
          {/* Floating Shapes */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute top-40 right-32 w-48 h-48 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 sm:mb-6 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Ready to Work Together?
          </h2>
          
          <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-10 font-light" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Let&apos;s discuss how we can help transform your business with our professional digital solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Link
              href="/#contact"
              className="group relative inline-flex items-center justify-center text-center px-6 py-3 overflow-hidden text-sm font-semibold text-black bg-white rounded-lg shadow-lg hover:shadow-white/30 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              <span className="absolute inset-0 w-full h-full bg-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center justify-center space-x-2">
                <span>Get In Touch</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
}
