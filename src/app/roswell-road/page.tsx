import Image from 'next/image';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Roswell Road Towing Service | 24/7 Emergency Tow Truck Near You',
  description:
    'Stranded on Roswell Road? We offer fast, affordable towing and roadside assistance near Sandy Springs, Dunwoody, and I-285. Call now for help.',
};

export default function RoswellRoadPage() {
  return (
    <div>
    <div className="relative min-h-screen">
      {/* Background image */}
      <Image
        src="/towtruckpullingtruck.png"
        alt="Tow truck assisting on Roswell Road"
        fill
        priority
        className="object-cover z-0"
      />

      {/* Overlayed content */}
      <div className="relative z-10 bg-black/30 backdrop-blur-sm min-h-screen flex items-center justify-center px-4 py-20">
        <main className="max-w-3xl bg-black/80 text-white p-8 rounded-xl shadow-lg">
          <h1 className="text-4xl font-bold mb-6">
            24/7 Towing on Roswell Road in Sandy Springs & Dunwoody
          </h1>

          <p className="mb-4 text-lg">
            Dealing with a breakdown near City Walk, Abernathy Greenway, or driving toward I-285? We’re your go-to towing service along Roswell Road — no matter where you’re stuck.
          </p>

          <p className="mb-4 text-lg">
            Our drivers are already in the area and can assist quickly, whether you're near a gas station, apartment complex, or shopping plaza. Just give us a call.
          </p>

          <ul className="list-disc pl-6 mb-4 text-lg">
            <li>Fast towing near Sandy Springs and Dunwoody borders</li>
            <li>Flat tire help, dead battery jump starts, lockouts</li>
            <li>Flatbed towing available for luxury or low-clearance vehicles</li>
            <li>Emergency response for traffic accidents on Roswell Road</li>
          </ul>

          <p className="mb-4 text-lg">
            Roswell Road is busy and unpredictable — we understand the urgency. That’s why our team is always nearby and ready to respond within 20–30 minutes in most cases.
          </p>

          <p className="text-lg mb-8">
            Call now for reliable towing on Roswell Road:{" "}
            <a href="tel:+18665307414" className="text-blue-400 font-semibold">
              (866) 530-7414
            </a>
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
