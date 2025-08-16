import Image from 'next/image';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Crooks Road Towing Service | 24/7 Emergency Tow Truck Near Troy, MI',
  description:
    'Stranded on Crooks Road in Troy, Michigan? We provide fast, reliable towing and roadside assistance near Big Beaver Road, Maple Road, and local shopping centers. Call now for help.',
};

export default function CrooksRoadPage() {
  return (
    <div>
      <div className="relative min-h-screen">
        {/* Background image */}
        <Image
          src="/towTruckPulling.jpg"
          alt="Tow truck assisting on Crooks Road in Troy"
          fill
          priority
          className="object-cover z-0"
        />

        {/* Overlayed content */}
        <div className="relative z-10 bg-black/30 backdrop-blur-sm min-h-screen flex items-center justify-center px-4 py-20">
          <main className="max-w-3xl bg-black/80 text-white p-8 rounded-xl shadow-lg">
            <h1 className="text-4xl font-bold mb-6">
              24/7 Towing on Crooks Road, Troy, MI
            </h1>

            <p className="mb-4 text-lg">
              Stuck on <strong>Crooks Road</strong> near Big Beaver Road, Maple Road, or Somerset Mall? Our tow truck team is available around the clock to get you moving safely and quickly.
            </p>

            <p className="mb-4 text-lg">
              Whether you’re near local businesses, residential areas, or major intersections, we know the area well and can dispatch a tow truck immediately.
            </p>

            <ul className="list-disc pl-6 mb-4 text-lg">
              <li>Fast towing service along Crooks Road and nearby streets</li>
              <li>Jump starts, tire changes, lockouts, and battery service</li>
              <li>Flatbed towing for all vehicles, including luxury and low-clearance cars</li>
              <li>Emergency response for accidents and breakdowns in Troy, MI</li>
            </ul>

            <p className="mb-4 text-lg">
              Crooks Road can be busy during rush hour, so having a local team ready to respond ensures minimal wait times and safe vehicle removal.
            </p>

            <p className="text-lg mb-8">
              Call now for immediate towing on Crooks Road:{' '}
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
