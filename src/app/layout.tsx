import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Troy Towing | 24/7 Emergency Tow Service",
  description:
    "Fast, reliable 24/7 towing in Troy, MI. Emergency roadside assistance, flatbed towing, lockouts and more. Call now for immediate help!",
  alternates: {
    canonical: "https://troytowingservice.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://troytowingservice.com/#business",
    "name": "Troy Towing & Roadside",
    "image": "https://troytowingservice.com/troyTowTruck.jpg",
    "description": "Fast, reliable 24/7 towing in Troy, MI. Emergency roadside assistance, flatbed towing, lockouts and more. Licensed, bonded and insured.",
    "telephone": "+12484532195",
    "priceRange": "$$",
    "url": "https://troytowingservice.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Troy",
      "addressRegion": "MI",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "42.6064",
      "longitude": "-83.1498"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Troy",
        "address": { "@type": "PostalAddress", "addressRegion": "MI", "addressCountry": "US" }
      },
      {
        "@type": "City",
        "name": "Sterling Heights",
        "address": { "@type": "PostalAddress", "addressRegion": "MI", "addressCountry": "US" }
      },
      {
        "@type": "City",
        "name": "Royal Oak",
        "address": { "@type": "PostalAddress", "addressRegion": "MI", "addressCountry": "US" }
      },
      {
        "@type": "City",
        "name": "Rochester Hills",
        "address": { "@type": "PostalAddress", "addressRegion": "MI", "addressCountry": "US" }
      },
      {
        "@type": "City",
        "name": "Auburn Hills",
        "address": { "@type": "PostalAddress", "addressRegion": "MI", "addressCountry": "US" }
      },
      {
        "@type": "City",
        "name": "Madison Heights",
        "address": { "@type": "PostalAddress", "addressRegion": "MI", "addressCountry": "US" }
      },
      {
        "@type": "City",
        "name": "Birmingham",
        "address": { "@type": "PostalAddress", "addressRegion": "MI", "addressCountry": "US" }
      },
      {
        "@type": "City",
        "name": "Bloomfield Hills",
        "address": { "@type": "PostalAddress", "addressRegion": "MI", "addressCountry": "US" }
      }
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Towing and Roadside Assistance Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Flatbed Towing",
            "description": "Safe flatbed towing for luxury vehicles, AWD cars, motorcycles and damaged vehicles in Troy, MI",
            "url": "https://troytowingservice.com/services/flatbed-towing",
            "areaServed": "Troy, MI"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Local Towing",
            "description": "Fast, affordable local towing service throughout Troy, Michigan and Metro Detroit",
            "url": "https://troytowingservice.com/services/local-towing",
            "areaServed": "Troy, MI"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Long-Distance Towing",
            "description": "Interstate and long-distance vehicle transport from Troy, MI to neighboring states",
            "url": "https://troytowingservice.com/services/long-distance-towing",
            "areaServed": "Troy, MI"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "24/7 Roadside Assistance",
            "description": "Emergency roadside assistance including jump starts, tire changes, lockouts and fuel delivery",
            "url": "https://troytowingservice.com/services/roadside-assistance",
            "areaServed": "Troy, MI"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Battery Jump Start",
            "description": "Fast battery jump start service to get your dead battery running again in Troy, MI",
            "url": "https://troytowingservice.com/services/battery-jump-start",
            "areaServed": "Troy, MI"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Car Lockout Service",
            "description": "Professional car lockout service to help you regain access to your locked vehicle",
            "url": "https://troytowingservice.com/services/lockout-service",
            "areaServed": "Troy, MI"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Flat Tire Change",
            "description": "Roadside flat tire change service available 24/7 throughout Troy, Michigan",
            "url": "https://troytowingservice.com/services/tire-change",
            "areaServed": "Troy, MI"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Accident Recovery",
            "description": "Professional accident recovery and collision towing service in Troy, MI",
            "url": "https://troytowingservice.com/services/accident-recovery",
            "areaServed": "Troy, MI"
          }
        }
      ]
    }
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="bg-white text-gray-900">
        <Header />
        {children}
      </body>
    </html>
  );
}
