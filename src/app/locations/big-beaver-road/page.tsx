import Image from 'next/image';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Tow Truck on Big Beaver Road | 24/7 Roadside Help in Troy Michigan',
  description:
    'Need towing on Big Beaver Road? We provide fast, dependable service near Somerset Collection, I-75, and downtown Troy. Call now for roadside assistance.',
  alternates: {
      canonical: 'https://troytowingservice.com/locations/big-beaver-road',
    },
  };

export default function BigBeaverRoadPage() {
  return (
    <div>
      <div className="relative min-h-screen">
        {/* Background image */}
        <Image
          src="/towTruckPulling.jpg"
          alt="Tow truck near Big Beaver Road in Troy Michigan"
          fill
          priority
          className="object-cover z-0"
        />

        {/* Overlayed content */}
        <div className="relative z-10 bg-black/30 backdrop-blur-sm min-h-screen flex items-center justify-center px-4 py-20">
          <main className="max-w-3xl bg-black/80 text-white p-8 rounded-xl shadow-lg">
            <h1 className="text-4xl font-bold mb-6">
              Reliable Towing on Big Beaver Road
            </h1>

            <p className="mb-4 text-lg">
              Whether you&rsquo;re stuck near Somerset Collection, waiting outside the Troy Marriott, or dealing with car trouble close to I-75, our tow truck team is already in the area and ready to respond quickly.
            </p>

            <p className="mb-4 text-lg">
              We&rsquo;re proud to provide trusted, prompt towing services along Big Beaver Road — day or night, rain or shine.
            </p>

            <ul className="list-disc pl-6 mb-4 text-lg">
              <li>Rapid-response towing from Coolidge Highway to John R Road</li>
              <li>Jump starts, tire replacements, and vehicle unlocks</li>
              <li>Flatbed towing for breakdowns and accident recovery</li>
              <li>Service available near Troy Community Center & Somerset Mall</li>
            </ul>

            <p className="mb-4 text-lg">
              With heavy traffic from office parks, retail centers, and I-75 commuters, Big Beaver Road can be a challenging place to break down — but we can get to you fast and get you moving again.
            </p>

            <p className="text-lg mb-8">
              Call us now for towing or roadside help on Big Beaver Road:{' '}
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
