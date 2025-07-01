import Image from 'next/image';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Towing on Hammond Drive | Fast 24/7 Roadside Help Near Dunwoody',
  description:
    'Stranded on Hammond Drive? Get fast, reliable towing near Perimeter Mall, Roswell Rd, and Ashford Dunwoody. Call now for 24/7 emergency roadside service.',
};

export default function HammondDrivePage() {
  return (
    <div>
      <div className="relative min-h-screen">
        {/* Background Image */}
        <Image
          src="/towtruckpullingtruck.png"
          alt="Tow truck on Hammond Drive"
          fill
          priority
          className="object-cover z-0"
        />

        {/* Overlay Content */}
        <div className="relative z-10 bg-black/30 backdrop-blur-sm min-h-screen flex items-center justify-center px-4 py-20">
          <main className="max-w-3xl bg-black/80 text-white p-8 rounded-xl shadow-lg">
            <h1 className="text-4xl font-bold mb-6">
              Towing Service on Hammond Drive – Dunwoody, GA
            </h1>

            <p className="mb-4 text-lg">
              Broken down on <strong>Hammond Drive</strong> near Perimeter Mall or Roswell Road? We&rsquo;re a locally operated towing company based near Dunwoody and can respond quickly — usually within 15–30 minutes.
            </p>

            <p className="mb-4 text-lg">Our roadside experts provide:</p>

            <ul className="list-disc pl-6 mb-4 text-lg">
              <li>24/7 emergency towing on Hammond Drive</li>
              <li>Flat tires, jump starts, lockouts, and battery service</li>
              <li>Flatbed towing and accident recovery</li>
              <li>Quick response to Dunwoody MARTA, Target, and nearby office parks</li>
            </ul>

            <p className="mb-4 text-lg">
              Whether you&rsquo;re commuting from Sandy Springs or heading toward Ashford Dunwoody, our team knows this road and its traffic patterns well — and we&rsquo;ll get you safely off the shoulder or out of a jam.
            </p>

            <p className="text-lg mb-8">
              Call now for fast towing on Hammond Drive:{' '}
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
