import Image from 'next/image';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Towing Services in Dunwoody | Emergency Roadside & Flatbed Towing',
  description:
    'Explore all towing services in Dunwoody, GA: emergency towing, roadside assistance, flatbed towing, lockouts, and accident recovery. Call now for 24/7 local help.',
};

export default function ServicesPage() {
  return (
    <div>
    <div className="relative min-h-screen">
      {/* Background Image */}
      <Image
        src="/iroadsidebmw.avif"
        alt="Tow truck assisting broken down vehicle"
        fill
        priority
        className="object-cover z-0"
      />

      {/* Overlay */}
      <div className="relative z-10 bg-black/30 backdrop-blur-sm min-h-screen flex items-center justify-center px-4 py-20">
        <main className="max-w-3xl bg-black/80 text-white p-8 rounded-xl shadow-lg">
          <h1 className="text-4xl font-bold mb-6">Towing Services in Dunwoody</h1>

          <p className="mb-4 text-lg">
            At Dunwoody Towing, we offer 24/7 towing and roadside services that are fast, affordable, and always local. If you searched for
            <strong> tow truck near me</strong> or <strong>emergency towing in Dunwoody</strong>, you&apos;re exactly where you need to be.
          </p>

          <p className="mb-4 text-lg">Our most requested services include:</p>

          <ul className="list-disc pl-6 mb-4 text-lg">
            <li><strong>24/7 Emergency Towing</strong> – Fast response when your vehicle won&apos;t move</li>
            <li><strong>Roadside Assistance</strong> – Jump starts, tire changes, lockouts, and fuel delivery</li>
            <li><strong>Flatbed Towing</strong> – Ideal for luxury cars, EVs, and accident-damaged vehicles</li>
            <li><strong>Accident Recovery</strong> – Safe and secure clean-up after a crash or breakdown</li>
            <li><strong>Local &amp; Long-Distance Towing</strong> – Affordable rates for both short and extended trips</li>
          </ul>

          <p className="text-lg mb-8">
            We proudly serve Dunwoody and surrounding areas like Sandy Springs, Brookhaven, Chamblee, and Doraville. If you&apos;ve typed in
            <strong> &quot;tow truck companies near me&quot;</strong>, we&apos;re already on our way.
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
