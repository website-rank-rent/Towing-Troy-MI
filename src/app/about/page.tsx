// src/app/about/page.tsx
import Image from 'next/image';
import Footer from '../components/Footer';

export const metadata = {
  title: 'About Our Towing Company in Dunwoody and Metro Atlanta | 24/7 Tow Truck Service',
  description: 'Learn more about our local towing company in Dunwoody and the greater Atlanta area.. We provide emergency roadside assistance and reliable towing services near you.',
};

export default function AboutPage() {
  return (
    <div>
    <div className="relative min-h-screen">
      {/* Background Image */}
      <Image
        src="/yellowTowTruck.jpg"
        alt="Background tow truck"
        fill
        priority
        className="object-cover z-0"
      />

      {/* Overlay for readability */}
      <div className="relative z-10 bg-black/30 backdrop-blur-sm min-h-screen flex items-center justify-center px-4 py-20">
        <main className="max-w-3xl bg-black/80 text-white p-8 rounded-xl shadow-lg">
          <h1 className="text-4xl font-bold mb-6">About Our Towing Service in Dunwoody</h1>

          <p className="mb-4 text-lg">
            If you&apos;re searching for a <strong>tow truck near me</strong> or <strong>towing company in Dunwoody</strong>, you&apos;re in the right place.
            Our locally owned and operated service provides fast, professional roadside assistance 24/7.
          </p>

          <p className="mb-4 text-lg">We specialize in:</p>

          <ul className="list-disc pl-6 mb-4 text-lg">
            <li>Emergency towing throughout Dunwoody, Roswell, Chamblee, Alpharetta</li>
            <li>Roadside assistance, lockouts, battery jumps</li>
            <li>Flatbed and local towing services</li>
            <li>Accident recovery and long-distance hauling</li>
          </ul>

          <p className="mb-4 text-lg">
            Our team is trusted by residents across <strong>Dundwoody and the greater atlanta area</strong> and nearby areas like <strong>Sandy Springs, Brookhaven Chamblee, Doraville, Peachtree Corners, Norcross, Johns Creek, Alpharetta, Roswell, Milton,
Tucker</strong>.
            We&apos;re proud to be the go-to solution for anyone who types in <strong>&quot;tow truck companies near me&quot;</strong>.
          </p>

          <p className="text-lg mb-8">
            Need help right now? Call us at{' '}
            <a href="tel:+18665307414" className="text-blue-400 font-semibold">
              (866) 530-7414
            </a>{' '}
            — we&apos;re available 24 hours a day, 7 days a week.
          </p>

          <div className="text-center">
            <a
              href="tel:+18665307414"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-8 py-4 rounded-md"
            >
              CALL NOW
            </a>
          </div>
        </main>
      </div>
    </div>
    <Footer />
    </div>
  );
}
