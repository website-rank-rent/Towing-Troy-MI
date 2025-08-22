import Image from 'next/image';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Towing on Stephenson Highway | Fast & Reliable Tow Truck Near Troy, MI',
  description:
    'Need a tow truck on Stephenson Highway in Troy, Michigan? We provide 24/7 towing and roadside assistance near Big Beaver Road, Somerset Mall, and nearby neighborhoods.',
  alternates: {
      canonical: 'https://troytowingservice.com/locations/stephenson-highway',
    },
  };

export default function StephensonHighwayPage() {
  return (
    <div>
      <div className="relative min-h-screen">
        {/* Background Image */}
        <Image
          src="/towTruckPulling.jpg"
          alt="Tow truck on Stephenson Highway in Troy Michigan"
          fill
          priority
          className="object-cover z-0"
        />

        {/* Overlay */}
        <div className="relative z-10 bg-black/30 backdrop-blur-sm min-h-screen flex items-center justify-center px-4 py-20">
          <main className="max-w-3xl bg-black/80 text-white p-8 rounded-xl shadow-lg">
            <h1 className="text-4xl font-bold mb-6">
              Towing Service on Stephenson Highway, Troy, MI
            </h1>

            <p className="mb-4 text-lg">
              If you’re stuck on <strong>Stephenson Highway</strong> near Big Beaver Road, Maple Road, or close to Somerset Mall — we can help. Our tow truck drivers operate 24/7 and can reach your location quickly.
            </p>

            <p className="mb-4 text-lg">
              We specialize in:
            </p>

            <ul className="list-disc pl-6 mb-4 text-lg">
              <li>Emergency towing along Stephenson Highway and nearby streets</li>
              <li>Lockouts, jump starts, flat tires, and battery service</li>
              <li>Flatbed and local towing for breakdowns and accident recovery</li>
              <li>Fast roadside assistance in Troy, including commercial and residential areas</li>
            </ul>

            <p className="mb-4 text-lg">
              Our team knows Stephenson Highway well, including traffic patterns, intersections, and key landmarks like Somerset Collection, Troy Motor Mall, and surrounding neighborhoods. We get you moving safely and quickly.
            </p>

            <p className="text-lg mb-8">
              Call now for immediate towing on Stephenson Highway:{' '}
              <a href="tel:+12484532195" className="text-blue-400 font-semibold">
                (248) 453-2195
              </a>
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
