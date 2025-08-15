import Image from 'next/image';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Towing on Rochester Road | 24/7 Roadside Help in Troy, MI',
  description:
    'Need a tow on Rochester Road? We provide fast, reliable roadside assistance and emergency towing near Troy, Big Beaver Road, and I-75. Call now for immediate help.',
};

export default function RochesterRoadPage() {
  return (
    <div>
      <div className="relative min-h-screen">
        {/* Background image */}
        <Image
          src="/towTruckPulling.jpg"
          alt="Tow truck on Rochester Road in Troy Michigan"
          fill
          priority
          className="object-cover z-0"
        />

        {/* Overlayed content */}
        <div className="relative z-10 bg-black/30 backdrop-blur-sm min-h-screen flex items-center justify-center px-4 py-20">
          <main className="max-w-3xl bg-black/80 text-white p-8 rounded-xl shadow-lg">
            <h1 className="text-4xl font-bold mb-6">
              Tow Truck Service on Rochester Road
            </h1>

            <p className="mb-4 text-lg">
              If your vehicle breaks down near Big Beaver Road, Maple Road, or anywhere along Rochester Road in Troy, MI, we’ve got you covered. Our drivers respond quickly, day or night.
            </p>

            <p className="mb-4 text-lg">
              We know Rochester Road from I-75 to downtown Rochester Hills and can dispatch a tow truck to your location within minutes — no waiting, no hassle.
            </p>

            <ul className="list-disc pl-6 mb-4 text-lg">
              <li>Emergency towing along Rochester Road and nearby streets</li>
              <li>Lockout assistance, jump starts, and flat tire service</li>
              <li>Flatbed towing for breakdowns and accident recovery</li>
              <li>Fast response near Troy Motor Mall, Somerset Collection, and I-75</li>
            </ul>

            <p className="mb-4 text-lg">
              Whether you’re near shopping centers, local neighborhoods, or major intersections, our team is nearby and ready to help with professional roadside service.
            </p>

            <p className="text-lg mb-8">
              For towing help right now, call{' '}
              <a href="tel:+18665307414" className="text-blue-400 font-semibold">
                (866) 530-7414
              </a>{' '}
              — we’re available 24/7 to get you moving again.
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
