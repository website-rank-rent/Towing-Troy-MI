import Image from 'next/image';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Towing on Maple Road | Fast 24/7 Roadside Help Near Troy, MI',
  description:
    'Stranded on Maple Road? Get fast, reliable towing near Somerset Mall, Crooks Rd, and I-75 in Troy, Michigan. Call now for 24/7 emergency roadside service.',
};

export default function MapleRoadPage() {
  return (
    <div>
      <div className="relative min-h-screen">
        {/* Background Image */}
        <Image
          src="/towtruckpullingtruck.png"
          alt="Tow truck on Maple Road in Troy, MI"
          fill
          priority
          className="object-cover z-0"
        />

        {/* Overlay Content */}
        <div className="relative z-10 bg-black/30 backdrop-blur-sm min-h-screen flex items-center justify-center px-4 py-20">
          <main className="max-w-3xl bg-black/80 text-white p-8 rounded-xl shadow-lg">
            <h1 className="text-4xl font-bold mb-6">
              Towing Service on Maple Road – Troy, MI
            </h1>

            <p className="mb-4 text-lg">
              Broken down on <strong>Maple Road</strong> near Somerset Mall or Crooks Road? We&rsquo;re a locally operated towing company based in Troy and can respond quickly — usually within 15–30 minutes.
            </p>

            <p className="mb-4 text-lg">Our roadside experts provide:</p>

            <ul className="list-disc pl-6 mb-4 text-lg">
              <li>24/7 emergency towing on Maple Road</li>
              <li>Flat tires, jump starts, lockouts, and battery service</li>
              <li>Flatbed towing and accident recovery</li>
              <li>Quick response to I-75, Big Beaver Road, and nearby neighborhoods</li>
            </ul>

            <p className="mb-4 text-lg">
              Whether you&rsquo;re commuting through Troy or traveling toward Birmingham, our team knows this road and its traffic patterns well — and we&rsquo;ll get you safely off the shoulder or out of a jam.
            </p>

            <p className="text-lg mb-8">
              Call now for fast towing on Maple Road:{' '}
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
