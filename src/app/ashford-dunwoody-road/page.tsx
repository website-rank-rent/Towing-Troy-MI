import Image from 'next/image';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Tow Truck on Ashford Dunwoody Road | 24/7 Roadside Help Near Perimeter',
  description:
    'Need towing on Ashford Dunwoody Road? We provide fast, reliable service near Perimeter Mall, I-285, and the Dunwoody MARTA station. Call now for assistance.',
};

export default function AshfordDunwoodyPage() {
  return (
    <div>
    <div className="relative min-h-screen">
      {/* Background image */}
      <Image
        src="/towtruckpullingtruck.png"
        alt="Tow truck near Ashford Dunwoody"
        fill
        priority
        className="object-cover z-0"
      />

      {/* Overlayed content */}
      <div className="relative z-10 bg-black/30 backdrop-blur-sm min-h-screen flex items-center justify-center px-4 py-20">
        <main className="max-w-3xl bg-black/80 text-white p-8 rounded-xl shadow-lg">
          <h1 className="text-4xl font-bold mb-6">
            Reliable Towing on Ashford Dunwoody Road
          </h1>

          <p className="mb-4 text-lg">
            Whether you’re stalled near Perimeter Mall, the Crowne Plaza, or stuck in traffic close to I-285, our tow truck drivers are already in the Dunwoody area and ready to respond.
          </p>

          <p className="mb-4 text-lg">
            We’re proud to offer trusted, fast towing services along Ashford Dunwoody Road — no matter the time of day or traffic conditions.
          </p>

          <ul className="list-disc pl-6 mb-4 text-lg">
            <li>Quick-response towing from Hammond to Mount Vernon</li>
            <li>Jump starts, tire changes, and car lockout help</li>
            <li>Flatbed towing for breakdowns and accident recovery</li>
            <li>Service available near Perimeter Place, Marta Station & Ravinia</li>
          </ul>

          <p className="mb-4 text-lg">
            With heavy office park traffic and constant congestion, Ashford Dunwoody Road can be tough to navigate — but we’re right around the corner and can get you off the shoulder fast.
          </p>

          <p className="text-lg mb-8">
            Reach out now for towing or roadside help on Ashford Dunwoody Road:{" "}
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
