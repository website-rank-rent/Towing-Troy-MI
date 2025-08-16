// src/app/about/page.tsx
import Image from 'next/image';
import Footer from '../components/Footer';

export const metadata = {
  title: 'About Our Towing Company in Troy, Michigan | 24/7 Local & Long-Distance Tow Truck Service',
  description:
    'Discover our trusted towing company serving Troy, Michigan and nearby communities. We offer around-the-clock roadside assistance, vehicle recovery, and reliable towing services.',
};

export default function AboutPage() {
  return (
    <div>
      <div className="relative min-h-screen">
        {/* Background Image */}
        <Image
          src="/red-truck-tow.jpg"
          alt="Tow truck in Troy, Michigan"
          fill
          priority
          className="object-cover z-0"
        />

        {/* Overlay for readability */}
        <div className="relative z-10 bg-black/30 backdrop-blur-sm min-h-screen flex items-center justify-center px-4 py-20">
          <main className="max-w-3xl bg-black/80 text-white p-8 rounded-xl shadow-lg">
            <h1 className="text-4xl font-bold mb-6">
              About Our Towing Service in Troy, Michigan
            </h1>

            <p className="mb-4 text-lg">
              Looking for a <strong>tow truck in Troy</strong> or{" "}
              <strong>emergency towing near Oakland County</strong>? You’ve found
              the local team residents trust for fast, dependable service —
              available 24 hours a day, 7 days a week.
            </p>

            <p className="mb-4 text-lg">We handle a wide range of needs, including:</p>

            <ul className="list-disc pl-6 mb-4 text-lg">
              <li>Emergency towing throughout Troy, Rochester Hills, and Royal Oak</li>
              <li>Lockout assistance, dead battery jumps, and fuel delivery</li>
              <li>Flatbed towing for cars, SUVs, and light trucks</li>
              <li>Accident recovery and long-distance vehicle transport</li>
            </ul>

            <p className="mb-4 text-lg">
              Our experienced drivers assist customers all over{" "}
              <strong>Troy, Birmingham, Clawson, Sterling Heights, Madison Heights, Auburn Hills, Warren, Bloomfield Hills</strong>, 
              and nearby towns. If you’ve searched{" "}
              <strong>&quot;best towing company near me&quot;</strong>, we’re ready to help.
            </p>

            <p className="text-lg mb-8">
              Need help right now? Call{" "}
              <a
                href="tel:+12484532195"
                className="text-blue-400 font-semibold"
              >
                (248) 453-2195
              </a>{" "}
              — we’re always open and ready to respond.
            </p>

            <div className="text-center">
              <a
                href="tel:+12484532195"
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
