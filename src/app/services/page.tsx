import Image from 'next/image';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Towing Services in Troy, MI | Emergency Roadside & Flatbed Towing',
  description:
    'Explore all towing services in Troy, Michigan: emergency towing, roadside assistance, flatbed towing, lockouts, and accident recovery. Call now for 24/7 local help.',
};

export default function ServicesPage() {
  return (
    <div>
      <div className="relative min-h-screen">
        {/* Background Image */}
        <Image
          src="/winter-car-tow.jpg"
          alt="Tow truck assisting broken down vehicle"
          fill
          priority
          className="object-cover z-0"
        />

        {/* Overlay */}
        <div className="relative z-10 bg-black/30 backdrop-blur-sm min-h-screen flex items-center justify-center px-4 py-20">
          <main className="max-w-3xl bg-black/80 text-white p-8 rounded-xl shadow-lg">
            <h1 className="text-4xl font-bold mb-6">Towing Services in Troy, MI</h1>

            <p className="mb-4 text-lg">
              At <strong>Troy Towing</strong>, we provide 24/7 towing and roadside services that are fast, affordable, and locally based. 
              If you searched for <strong>tow truck near me</strong> or <strong>emergency towing in Troy, MI</strong>, you’re in the right place.
            </p>

            <p className="mb-4 text-lg">Our most requested services include:</p>

            <ul className="list-disc pl-6 mb-4 text-lg">
              <li><strong>24/7 Emergency Towing</strong> – Rapid response when your vehicle breaks down</li>
              <li><strong>Roadside Assistance</strong> – Jump starts, tire changes, lockouts, and fuel delivery</li>
              <li><strong>Flatbed Towing</strong> – Perfect for luxury cars, EVs, and accident-damaged vehicles</li>
              <li><strong>Accident Recovery</strong> – Safe and secure cleanup after collisions or breakdowns</li>
              <li><strong>Local &amp; Long-Distance Towing</strong> – Affordable rates for both short and extended trips</li>
            </ul>

            <p className="text-lg mb-8">
              We proudly serve Troy and nearby areas including Big Beaver Road, Crooks Road, Maple Road, Stephenson Highway, and the M-59 corridor. 
              If you’ve typed in <strong>&quot;tow truck companies near me&quot;</strong>, help is already on the way.
            </p>

            <div className="text-center">
              <a
                href="tel:+11111111111"
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
