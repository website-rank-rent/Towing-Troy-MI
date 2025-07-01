import Image from 'next/image';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Towing on Mount Vernon Road | Fast & Reliable Tow Truck Near You',
  description:
    'Need a tow truck on Mount Vernon Road in Dunwoody? We offer 24/7 towing and roadside assistance near Dunwoody Village and surrounding areas.',
};

export default function MountVernonRoadPage() {
  return (
    <div>
      <div className="relative min-h-screen">
        {/* Background Image */}
        <Image
          src="/towtruckpullingtruck.png"
          alt="Tow truck in action"
          fill
          priority
          className="object-cover z-0"
        />

        {/* Overlay */}
        <div className="relative z-10 bg-black/30 backdrop-blur-sm min-h-screen flex items-center justify-center px-4 py-20">
          <main className="max-w-3xl bg-black/80 text-white p-8 rounded-xl shadow-lg">
            <h1 className="text-4xl font-bold mb-6">
              Towing Service on Mount Vernon Road, Dunwoody
            </h1>

            <p className="mb-4 text-lg">
              If you&apos;re stuck on <strong>Mount Vernon Road</strong> near Dunwoody Village, Vernon Oaks, or close to the Sandy Springs border — we can help.
              Our tow truck drivers are in the area 24/7 and can reach you fast.
            </p>

            <p className="mb-4 text-lg">
              We specialize in:
            </p>

            <ul className="list-disc pl-6 mb-4 text-lg">
              <li>Emergency towing on Mount Vernon Road and surrounding areas</li>
              <li>Lockouts, jump starts, flat tires, and battery service</li>
              <li>Flatbed and local towing services near Dunwoody</li>
              <li>Accident recovery and light-duty roadside help</li>
            </ul>

            <p className="mb-4 text-lg">
              Our team is based near Dunwoody and familiar with traffic patterns, side streets, and all key landmarks along Mount Vernon Road.
              Whether you&rsquo;re near the Dunwoody Library, Georgia State Route 9, or Dunwoody Village Parkway — we&rsquo;ll get there fast.
            </p>

            <p className="text-lg mb-8">
              Call now for immediate towing on Mount Vernon Road:{' '}
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
