import React from 'react';
import PortfolioPage from '../../components/PortfolioPage';

export const metadata = {
  title: 'Portfolio | The Ghost Strategies - Our Digital Solutions & Projects',
  description: 'Explore The Ghost Strategies portfolio of successful digital projects including web development, e-commerce stores, graphic designs, and social media marketing campaigns.',
  keywords: [
    'the ghost strategies portfolio', 'web development projects', 'e-commerce projects', 'graphic design portfolio',
    'shopify stores', 'eBay stores', 'Amazon stores', 'social media campaigns', 'digital solutions',
    'client success stories', 'project showcase', 'digital agency portfolio'
  ],
  openGraph: {
    title: 'Portfolio | The Ghost Strategies - Our Digital Solutions',
    description: 'See our portfolio of digital projects including web development, e-commerce stores, and creative designs.',
    url: 'https://theghoststrategies.com/portfolio',
    images: [
      {
        url: '/Project1.jpg',
        width: 1200,
        height: 630,
        alt: 'The Ghost Strategies Portfolio - Project Showcase',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | The Ghost Strategies - Our Digital Solutions',
    description: 'See our portfolio of digital projects including web development, e-commerce stores, and creative designs.',
    images: ['/Project1.jpg'],
  },
  alternates: {
    canonical: 'https://theghoststrategies.com/portfolio',
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'application/ld+json': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Portfolio | The Ghost Strategies",
      "description": "Explore The Ghost Strategies portfolio of successful digital projects including web development, e-commerce stores, and creative designs.",
      "url": "https://theghoststrategies.com/portfolio",
      "mainEntity": {
        "@type": "ItemList",
        "name": "The Ghost Strategies Projects",
        "description": "Collection of successful digital projects and solutions"
      }
    })
  }
};

export default function PortfolioRoute() {
  return <PortfolioPage />;
}
