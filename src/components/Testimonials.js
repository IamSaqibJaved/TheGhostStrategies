'use client';

import React, { useState, useEffect, useRef } from 'react';

function getInitials(name) {
  if (!name) return '';
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] || '';
  const last = parts.length > 1 ? parts[parts.length - 1][0] : '';
  return (first + last).toUpperCase();
}

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'E-commerce Business Owner',
    quote: "The Ghost Strategies transformed our online presence. They developed our Shopify store and handled our social media marketing. Our sales have tripled in just 6 months!"
  },
  {
    id: 2,
    name: 'David Chen',
    position: 'Amazon Seller',
    quote: "Their Amazon store management service is outstanding. They optimized our listings, managed our FBA inventory, and handled PPC campaigns. Our revenue increased by 80%."
  },
  {
    id: 3,
    name: 'Maria Rodriguez',
    position: 'Business Owner',
    quote: "The Ghost Strategies created our entire brand identity - logo, website, and marketing materials. Their graphic design work is exceptional and professional."
  },
  {
    id: 4,
    name: 'James Wilson',
    position: 'Entrepreneur',
    quote: "They built our custom website from scratch. The responsive design and modern functionality exceeded our expectations. Highly recommend their web development services."
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    position: 'eBay Store Owner',
    quote: "Their eBay store management service is comprehensive. They handle everything from product listings to optimization. My store is now profitable and growing steadily."
  },
  {
    id: 6,
    name: 'Alex Kumar',
    position: 'Marketing Director',
    quote: "The Ghost Strategies manages our social media marketing across all platforms. Their content creation and Meta ads campaigns have significantly boosted our brand visibility."
  }
];

export default function Testimonials() {
  const [position, setPosition] = useState(0);
  const [isAutoMoving, setIsAutoMoving] = useState(true);
  const timerRef = useRef(null);
  const containerRef = useRef(null);

  // Create continuous loop by duplicating testimonials
  const createContinuousTestimonials = () => {
    const continuousArray = [];
    for (let i = 0; i < 15; i++) {
      continuousArray.push(...TESTIMONIALS);
    }
    return continuousArray;
  };

  const continuousTestimonials = createContinuousTestimonials();

  useEffect(() => {
    if (isAutoMoving) {
      timerRef.current = setTimeout(() => {
        setPosition(prev => {
          // Calculate the height of one complete set of testimonials
          const testimonialHeight = 120; // Approximate height of one testimonial card + margin
          const oneSetHeight = TESTIMONIALS.length * testimonialHeight;
          
          // If we've moved past one complete set, reset to the beginning
          if (Math.abs(prev) >= oneSetHeight) {
            return 0;
          }
          
          return prev - 2; // Move up by 2px
        });
      }, 50); // Faster movement
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [position, isAutoMoving]);

  const handleMouseEnter = () => {
    setIsAutoMoving(false);
  };

  const handleMouseLeave = () => {
    setIsAutoMoving(true);
  };

  return (
    <section className="bg-white py-20 sm:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-black/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-black/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-black/5 rounded-full blur-2xl" />
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-grid-gray-400/20 bg-[size:50px_50px]"></div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Content Section */}
          <div className="lg:col-span-5">
            <div className="space-y-8">
              <div className="mb-6">
                <span className="text-black text-lg font-bold tracking-wider uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Testimonials
                </span>
                <div className="w-16 h-0.5 bg-black mt-2"></div>
              </div>
              
              <h2 
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                What Our Clients Say
              </h2>
              
              <p className="text-base text-gray-600 leading-relaxed text-justify" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                At The Ghost Strategies, we believe in building lasting relationships with our clients. Our commitment to excellence, innovation, and customer satisfaction has earned us the trust and praise of businesses across various industries.
              </p>
            </div>
          </div>

          {/* Right: Continuous Testimonials Loop */}
          <div className="lg:col-span-7">
            <div className="relative">
              <div 
              className="relative h-80 overflow-hidden"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              ref={containerRef}
            >
              {/* Testimonials Container */}
              <div 
                className="transition-transform duration-1000 ease-linear"
                style={{ transform: `translateY(${position}px)` }}
              >
                {continuousTestimonials.map((testimonial, index) => (
                  <div
                    key={`${testimonial.id}-${index}`}
                    className="relative bg-white rounded-xl shadow-md border-l-4 border-l-black border border-gray-200 p-4 mb-4"
                  >
                    {/* Quote Icon */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold bg-black text-white">
                      &ldquo;
                    </div>

                    {/* Testimonial Content */}
                    <div className="flex items-start space-x-3">
                      {/* Avatar with Initials */}
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full border-2 border-gray-200 bg-black text-white grid place-items-center">
                          <span className="font-bold text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>{getInitials(testimonial.name)}</span>
                        </div>
                      </div>

                      {/* Text Content */}
                      <div className="flex-1 min-w-0">
                        <p className="text-gray-700 leading-relaxed mb-2 text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                          &ldquo;{testimonial.quote}&rdquo;
                        </p>
                        
                        <div>
                          <h4 className="font-bold text-gray-900 text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            {testimonial.name}
                          </h4>
                          <p className="text-xs text-gray-700 font-medium" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            {testimonial.position}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Gradient Overlays for Smooth Transitions */}
              <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white to-transparent pointer-events-none z-20"></div>
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none z-20"></div>
            </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-grid-gray-400 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(156 163 175 / 0.1)'%3e%3cpath d='m0 .5h32m-16 32v-32'/%3e%3c/svg%3e");
        }
      `}</style>
    </section>
  );
}
