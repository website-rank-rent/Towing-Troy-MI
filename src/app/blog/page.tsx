// src/app/blog/page.tsx
import Image from 'next/image';

export const metadata = {
  title: 'Troy Michigan Towing Blog | Roadside Safety & Vehicle Tips',
  description: 'Helpful articles on car lockouts, towing tips, breakdown safety, and roadside assistance from your local Troy, MI towing experts.',
};

export default function BlogPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <Image
        src="/towTruckPulling.jpg"
        alt="Tow truck assisting a vehicle"
        fill
        priority
        className="object-cover z-0"
      />

      {/* Overlay */}
      <div className="relative z-10 bg-black/30 backdrop-blur-sm min-h-screen flex items-center justify-center px-4 py-20">
        <main className="max-w-3xl bg-black/80 text-white p-8 rounded-xl shadow-lg">
          <h1 className="text-4xl font-bold mb-6">Troy Towing &amp; Roadside Tips</h1>

          <p className="mb-6 text-lg">
            Welcome to the Troy Towing blog. From highway breakdowns on M-59 to parking lot lockouts, our articles help you stay safe and prepared while on the road in Troy, Michigan.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-blue-400 text-lg">
            <li>
              <a href="/blog/car-lockout-troy" className="hover:underline">
                Locked Out in Troy? Quick Tips to Regain Access Safely
              </a>
            </li>
            <li>
              <a href="/blog/towing-tips-troy" className="hover:underline">
                5 Essential Towing Tips Every Troy Driver Should Know
              </a>
            </li>
            <li>
              <a href="/blog/car-breakdown-troy" className="hover:underline">
                How to Handle a Vehicle Breakdown on M-59 or Local Roads
              </a>
            </li>
            <li>
              <a href="/blog/winter-roadside-tips-troy" className="hover:underline">
                Winter Roadside Safety Tips for Troy Drivers
              </a>
            </li>
          </ul>

          <p className="mt-8 text-lg">
            Need immediate towing or roadside help in Troy, MI? Call us now at{' '}
            <a href="tel:+18665307414" className="text-blue-400 font-semibold">
              (866) 530-7414
            </a>
            .
          </p>
        </main>
      </div>
    </div>
  );
}
