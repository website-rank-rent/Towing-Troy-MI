import Image from 'next/image';

export const metadata = {
  title: 'Towing Services in [City Name] | Emergency Roadside & Flatbed Towing',
  description:
    'Explore all towing services in [City Name]: emergency towing, roadside assistance, flatbed towing, lockouts, and accident recovery. Call now for 24/7 local help.',
};

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <Image
        src="/towtruckpullingtruck.png"
        alt="Tow truck assisting broken down vehicle"
        fill
        priority
        className="object-cover z-0"
      />

      {/* Overlay */}
      <div className="relative z-10 bg-black/30 backdrop-blur-sm min-h-screen flex items-center justify-center px-4 py-20">
        <main className="max-w-3xl bg-black/80 text-white p-8 rounded-xl shadow-lg">
          <h1 className="text-4xl font-bold mb-6">Our Towing Services in [City Name]</h1>

          <p className="mb-4 text-lg">
            At [City Name] Towing, we&apos;re proud to offer 24/7 towing and roadside services designed to get you back on the road fast. If you searched for
            <strong> tow truck near me</strong> or <strong>emergency towing in [City]</strong>, you&apos;re in the right place.
          </p>

          <p className="mb-4 text-lg">Our most popular services include:</p>

          <ul className="list-disc pl-6 mb-4 text-lg">
            <li><strong>24/7 Emergency Towing</strong> – Immediate dispatch for breakdowns and accidents</li>
            <li><strong>Roadside Assistance</strong> – Jump starts, tire changes, lockouts, and fuel delivery</li>
            <li><strong>Flatbed Towing</strong> – Safe transport for luxury, electric, or damaged vehicles</li>
            <li><strong>Accident Recovery</strong> – Secure recovery after collisions or mechanical failure</li>
            <li><strong>Local & Long-Distance Towing</strong> – Affordable options for near and far transport</li>
          </ul>

          <p className="text-lg mb-8">
            Whether it&apos;s day or night, we&apos;re ready to help drivers throughout <strong>[City Name]</strong>, <strong>[Suburb 1]</strong>, <strong>[Suburb 2]</strong>, and the surrounding area. 
            We&apos;re your trusted option when searching for <strong>&quot;tow truck companies near me&quot;</strong>.
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
  );
}
