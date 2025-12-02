'use client';

import React from 'react';
import Image from 'next/image';
import HammadImage from '../assets/people1.jpg';
import JawadImage from '../assets/people2.jpg';
import AsfandImage from '../assets/people3.jpg';
import EmanImage from '../assets/people4.jpg';

const TEAM_MEMBERS = [
  {
    id: 1,
    name: 'Khawaja Hammad',
    position: 'Chief Executive Officer (CEO)',
    description: 'Leads the company\'s vision, strategy, and overall growth.',
    initials: 'KH',
    image: HammadImage,
  },
  {
    id: 2,
    name: 'Khawaja Jawad',
    position: 'Head of Web & App Development',
    description: 'Leads the development of responsive, high-performing websites and apps.',
    initials: 'KJ',
    image: JawadImage,
  },
  {
    id: 3,
    name: 'Asfand Shahid',
    position: 'Head of E-Commerce Operations',
    description: 'Manages online store operations, product optimization, and performance management.',
    initials: 'AS',
    image: AsfandImage,
  },
  {
    id: 4,
    name: 'Eman Javaid',
    position: 'Head UI/UX Designer (Figma)',
    description: 'Designs user interfaces and experiences for websites, apps, and digital platforms.',
    initials: 'EJ',
    image: EmanImage,
  }
];

export default function OurTeam() {
  return (
    <section id="team" className="bg-white py-20 sm:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-black/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-black/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-black/5 rounded-full blur-2xl" />
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-grid-gray-400/20 bg-[size:50px_50px]"></div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Content Section */}
          <div className="lg:col-span-5">
            {/* Section Header */}
            <div className="space-y-8">
              <div className="mb-6">
                <span className="text-black text-lg font-bold tracking-wider uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Our People
                </span>
                <div className="w-16 h-0.5 bg-black mt-2"></div>
              </div>
              
              <h2 
                className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Meet Our
                <span className="block text-black">
                  Expert Team
                </span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed text-justify" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Our team of experienced professionals brings together diverse expertise in digital services, web development, e-commerce, and design. We are united by a passion for innovation and excellence in delivering outstanding results for our clients.
              </p>
            </div>
          </div>

          {/* Right: Team Images - Grid Layout */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {TEAM_MEMBERS.map((member) => {
                return (
                  <div
                    key={member.id}
                    className="relative group transition-all duration-300"
                  >
                    <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-black/10">
                      {/* Member Image Container */}
                      <div className="relative h-64 sm:h-72 overflow-hidden bg-gray-50">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-contain"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        
                        {/* Overlay with Member Info */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 flex flex-col justify-end">
                          <div className="p-5 text-white">
                            <h4 className="font-bold text-lg mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                              {member.name}
                            </h4>
                            <p className="text-white/90 font-semibold text-sm mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                              {member.position}
                            </p>
                            <p className="text-white/80 text-xs leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                              {member.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-grid-gray-400 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(0 0 0 / 0.1)'%3e%3cpath d='m0 .5h32m-16 32v-32'/%3e%3c/svg%3e");
        }
      `}</style>
    </section>
  );
}
