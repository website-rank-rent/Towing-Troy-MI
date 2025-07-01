import Image from 'next/image';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Towing on Chamblee Dunwoody Road | Local 24/7 Roadside Help',
  description:
    'Need a tow on Chamblee Dunwoody Road? We provide fast, reliable roadside assistance and emergency towing near Dunwoody High School and Peachtree Blvd.',
};

export default function ChambleeDunwoodyPage() {
  return (
    <div>
    <div className="relative min-h-screen">
      {/* Background image */}
      <Image
        src="/towtruckpullingtruck.png"
        alt="Tow truck on Chamblee Dunwoody Road"
        fill
        priority
        className="object-cover z-0"
      />

      {/* Overlayed content */}
      <div className="relative z-10 bg-black/30 backdrop-blur-sm min-h-screen flex items-center justify-center px-4 py-20">
        <main className="max-w-3xl bg-black/80 text-white p-8 rounded-xl shadow-lg">
          <h1 className="text-4xl font-bold mb-6">
            Tow Truck Service on Chamblee Dunwoody Road
          </h1>

          <p className="mb-4 text-lg">
            If your vehicle breaks down near Dunwoody High School, Georgetown Shopping Center, or anywhere along Chamblee Dunwoody Road, we’ve got you covered. Our team responds quickly, day or night.
          </p>

          <p className="mb-4 text-lg">
            We’re familiar with every twist and turn of this road and can dispatch a truck to your location within minutes — no waiting, no stress.
          </p>

          <ul className="list-disc pl-6 mb-4 text-lg">
            <li>Emergency towing along Chamblee Dunwoody and beyond</li>
            <li>Lockout help, jump starts, and flat tire service</li>
            <li>Reliable flatbed towing and accident recovery</li>
            <li>Rapid response near Peachtree Industrial Blvd and I-285</li>
          </ul>

          <p className="mb-4 text-lg">
            Whether you're near apartment complexes, local parks, or neighborhood intersections, we're nearby and ready to assist with dependable roadside service.
          </p>

          <p className="text-lg mb-8">
            For towing help right now, call{" "}
            <a href="tel:+18665307414" className="text-blue-400 font-semibold">
              (866) 530-7414
            </a>{" "}
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
