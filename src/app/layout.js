import Navbar from '@/components/Navbar';
import './globals.css';
import { Montserrat } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
});

export const metadata = {
  title: 'The Ghost Strategies | Digital Service Agency - Web Development, Graphic Design, Social Media Marketing',
  description: 'The Ghost Strategies is a digital service agency with 8+ years of experience providing professional digital solutions including Web Development, Graphic Designing, Social Media Marketing, and e-commerce support for platforms like eBay, Amazon, and Shopify.',
  icons: {
    icon: [
      { url: '/The Ghost Strategies.png?v=6', type: 'image/png', sizes: 'any' },
      { url: '/The Ghost Strategies.png?v=6', type: 'image/png', sizes: '192x192' },
      { url: '/The Ghost Strategies.png?v=6', type: 'image/png', sizes: '512x512' },
      { url: '/The Ghost Strategies.png?v=6', type: 'image/png', sizes: '32x32' },
      { url: '/The Ghost Strategies.png?v=6', type: 'image/png', sizes: '16x16' }
    ],
    shortcut: '/The Ghost Strategies.png?v=6',
    apple: [
      { url: '/The Ghost Strategies.png?v=6', sizes: '180x180' }
    ],
  },
  keywords: [
    'the ghost strategies', 'digital service agency', 'web development', 'graphic design', 'social media marketing',
    'eBay store management', 'Amazon store management', 'Shopify development', 'e-commerce solutions',
    'digital agency', 'professional web development', 'brand design', 'content creation', 'PPC advertising',
    'store optimization', 'online store setup', 'digital marketing', 'web design', 'logo design'
  ],
  authors: [{ name: 'The Ghost Strategies Team' }],
  creator: 'The Ghost Strategies',
  publisher: 'The Ghost Strategies',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://theghoststrategies.com'),
  openGraph: {
    title: 'The Ghost Strategies | Digital Service Agency',
    description: 'The Ghost Strategies is a digital service agency with 8+ years of experience providing professional digital solutions including Web Development, Graphic Designing, Social Media Marketing, and e-commerce support.',
    url: 'https://theghoststrategies.com/',
    siteName: 'The Ghost Strategies',
    images: [
      {
        url: '/The Ghost Strategies.png',
        width: 512,
        height: 512,
        alt: 'The Ghost Strategies - Digital Service Agency',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Ghost Strategies | Digital Service Agency',
    description: 'The Ghost Strategies is a digital service agency providing Web Development, Graphic Designing, Social Media Marketing, and e-commerce support for platforms like eBay, Amazon, and Shopify.',
    site: '@GhostStrategies',
    creator: '@GhostStrategies',
    images: ['/The Ghost Strategies.png'],
  },
  alternates: {
    canonical: 'https://theghoststrategies.com/',
    languages: {
      'en-US': 'https://theghoststrategies.com/',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      maxSnippet: -1,
      maxImagePreview: 'large',
      maxVideoPreview: -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'Technology',
  // Organization structured data (JSON-LD)
  other: {
    'application/ld+json': JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "The Ghost Strategies",
        "alternateName": ["Ghost Strategies", "TGS"],
        "url": "https://theghoststrategies.com/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://theghoststrategies.com/The Ghost Strategies.png",
          "width": 512,
          "height": 512
        },
        "description": "A digital service agency with 8+ years of experience providing professional digital solutions including Web Development, Graphic Designing, Social Media Marketing, and e-commerce support for platforms like eBay, Amazon, and Shopify.",
        "foundingDate": "2016",
        "sameAs": [
          "https://facebook.com/theghoststrategies"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "email": "Support@theghoststrategies.store",
          "telephone": "+447413467197",
          "availableLanguage": "English"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "75a Manchester Road",
          "addressLocality": "Denton",
          "addressRegion": "Manchester",
          "postalCode": "M34 2AF",
          "addressCountry": "GB"
        },
        "serviceArea": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": 53.4568,
            "longitude": -2.1183
          },
          "geoRadius": "10000000"
        },
        "offers": [
          {
            "@type": "Offer",
            "name": "Web Development Services",
            "description": "Custom websites, responsive design, frontend and backend development, maintenance and support"
          },
          {
            "@type": "Offer", 
            "name": "Graphic Designing Services",
            "description": "Logo design, branding kits, social media posts, banners, flyers, and posters"
          },
          {
            "@type": "Offer",
            "name": "Social Media Marketing",
            "description": "Facebook, Instagram, TikTok, LinkedIn marketing, content creation, scheduling, and paid ads"
          },
          {
            "@type": "Offer",
            "name": "E-commerce Store Management",
            "description": "eBay store management, Amazon FBA management, Shopify store development, and optimization"
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "The Ghost Strategies - Digital Service Agency",
        "url": "https://theghoststrategies.com/",
        "description": "A digital service agency with 8+ years of experience providing professional digital solutions including Web Development, Graphic Designing, Social Media Marketing, and e-commerce support.",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://theghoststrategies.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Web Development Services",
        "description": "Custom websites, responsive design, frontend and backend development, maintenance and support",
        "provider": {
          "@type": "Organization",
          "name": "The Ghost Strategies"
        },
        "serviceType": "Web Development",
        "areaServed": "Worldwide",
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://theghoststrategies.com/",
          "servicePhone": "+447413467197"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "E-commerce Store Management",
        "description": "eBay store management, Amazon FBA management, Shopify store development, and optimization",
        "provider": {
          "@type": "Organization",
          "name": "The Ghost Strategies"
        },
        "serviceType": "E-commerce Support",
        "areaServed": "Worldwide"
      }
    ])
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/The Ghost Strategies.png?v=6" />
        <link rel="icon" href="/The Ghost Strategies.png?v=6" sizes="32x32" />
        <link rel="icon" href="/The Ghost Strategies.png?v=6" type="image/png" sizes="16x16" />
        <link rel="shortcut icon" href="/The Ghost Strategies.png?v=6" />
        <link rel="apple-touch-icon" href="/The Ghost Strategies.png?v=6" sizes="180x180" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="The Ghost Strategies" />
        <link rel="apple-touch-icon" href="/The Ghost Strategies.png?v=6" />
        {/* Additional logo meta tags for Google */}
        <meta property="og:image" content="https://theghoststrategies.com/The Ghost Strategies.png" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:image:alt" content="The Ghost Strategies - Digital Service Agency" />
        <meta name="twitter:image" content="https://theghoststrategies.com/The Ghost Strategies.png" />
        <meta name="twitter:image:alt" content="The Ghost Strategies - Digital Service Agency" />
        {/* SEO meta tags are handled by Next.js metadata above */}
      </head>
      <body className={`min-h-screen bg-white text-black ${montserrat.variable} font-sans`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
        <Navbar />
        {/* Add padding-top to account for fixed navbar */}
        <main>
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}