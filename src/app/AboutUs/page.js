
export const metadata = {
  title: 'About Us | The Ghost Strategies - Digital Service Agency',
  description: 'Learn about The Ghost Strategies, a digital service agency with 8+ years of experience providing professional digital solutions including Web Development, Graphic Designing, Social Media Marketing, and e-commerce support.',
  keywords: [
    'about the ghost strategies', 'digital service agency', 'web development company', 'graphic design services',
    'social media marketing', 'e-commerce solutions', 'eBay store management', 'Amazon store management',
    'Shopify development', 'digital agency', 'professional services'
  ],
  openGraph: {
    title: 'About Us | The Ghost Strategies - Digital Service Agency',
    description: 'Learn about The Ghost Strategies, a digital service agency with 8+ years of experience providing professional digital solutions.',
    url: 'https://theghoststrategies.com/aboutus',
    images: [
      {
        url: '/AboutUs.png',
        width: 1200,
        height: 630,
        alt: 'The Ghost Strategies Team - About Us',
      },
    ],
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | The Ghost Strategies - Digital Service Agency',
    description: 'Learn about The Ghost Strategies and our commitment to excellence in digital services.',
    images: ['/AboutUs.png'],
  },
  alternates: {
    canonical: 'https://theghoststrategies.com/aboutus',
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'application/ld+json': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About Us | The Ghost Strategies",
      "description": "Learn about The Ghost Strategies' mission, values, and commitment to providing innovative digital solutions for businesses.",
      "url": "https://theghoststrategies.com/aboutus",
      "mainEntity": {
        "@type": "Organization",
        "name": "The Ghost Strategies",
        "description": "A digital service agency providing Web Development, Graphic Designing, Social Media Marketing, and e-commerce support for platforms like eBay, Amazon, and Shopify."
      }
    })
  }
};

import AboutUsPage from '../../components/AboutUsPage';

export default function AboutUs() {
  return <AboutUsPage />;
}
