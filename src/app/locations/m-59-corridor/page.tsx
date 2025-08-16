import Image from 'next/image';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Towing on M-59 Corridor | 24/7 Roadside Assistance in Troy, MI',
  description:
    'Need towing along the M-59 corridor in Troy, Michigan? We provide fast, reliable service near Big Beaver Road, Crooks Road, and Maple Road. Call now for 24/7 emergency help.',
};

export default function M59CorridorPage() {
  return (
    <div>
      <div className="relative min-h-screen">
        {/* Background image */}
        <Image
          src="/towTruckPulling.jpg"
          alt="Towing service along M-59 Corridor in Troy"
          fill
          priority
          className="object-cover z-0"
        />

        {/* Overlayed content */}
        <div className="relative z-10 bg-black/30 backdrop-blur-sm min-h-screen flex items-center justify-center px-4 py-20">
          <main className="max-w-3xl bg-black/80 text-white p-8 rounded-xl shadow-lg">
            <h1 className="text-4xl font-bold mb-6">
              Emergency Towing on the M-59 Corridor, Troy, MI
            </h1>

            <p className="mb-4 text-lg">
              Stuck along <strong>M-59</strong> near Big Beaver Road, Crooks Road, or Maple Road? Our tow trucks are strategically located and ready to assist day or night, ensuring fast response times throughout the corridor.
            </p>

            <p className="mb-4 text-lg">
              This stretch sees heavy commuter traffic and shopping center congestion. Whether your vehicle breaks down near Somerset Collection, Troy Historic Village, or a busy intersection, we’re nearby and can reach you quickly.
            </p>

            <ul className="list-disc pl-6 mb-4 text-lg">
              <li>24/7 towing along the M-59 corridor in Troy</li>
              <li>Jump starts, tire changes, lockout assistance, and fuel delivery</li>
              <li>Flatbed towing for luxury, low-clearance, or accident vehicles</li>
              <li>Rapid response near shopping centers, office parks, and residential areas</li>
            </ul>

            <p className="mb-4 text-lg">
              Our local drivers know the traffic patterns, side streets, and high-traffic intersections along M-59, so you’re never left waiting on the roadside.
            </p>

            <p className="text-lg mb-8">
              Call now for immediate towing along the M-59 corridor:{' '}
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
