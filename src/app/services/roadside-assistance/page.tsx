import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../components/Footer';

export const metadata = {
  title: '24/7 Roadside Assistance Troy MI | Jump Start, Lockout, Fuel',
  description:
    'Emergency roadside assistance in Troy, Michigan. Battery jump starts, tire changes, lockout service, fuel delivery & more. Available 24/7. Call (248) 453-2195 now!',
  alternates: {
    canonical: 'https://troytowingservice.com/services/roadside-assistance',
  },
};

export default function RoadsideAssistancePage() {
  return (
    <div>
      <div className="relative min-h-screen">
        {/* Background Image */}
        <Image
          src="/winter-car-tow.jpg"
          alt="Roadside assistance service in Troy Michigan"
          fill
          priority
          className="object-cover z-0"
        />

        {/* Overlay */}
        <div className="relative z-10 bg-black/40 backdrop-blur-sm min-h-screen flex items-center justify-center px-4 py-20">
          <main className="max-w-4xl bg-white/95 text-gray-900 p-8 md:p-12 rounded-xl shadow-2xl">

            {/* Call Now Button - Top */}
            <div className="text-center mb-8">
              <a
                href="tel:+12484532195"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold text-xl px-10 py-5 rounded-lg shadow-lg transition transform hover:scale-105"
              >
                CALL NOW: (248) 453-2195
              </a>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              24/7 Roadside Assistance in Troy, MI
            </h1>

            <p className="text-lg mb-4 leading-relaxed">
              Car trouble doesn&apos;t follow a schedule—and neither does <strong>Troy Towing & Roadside</strong>. Whether you&apos;re stranded in a
              parking lot in <strong>Troy, MI</strong>, stuck on I-75, or dealing with a dead battery on Big Beaver Road, our 24/7 roadside
              assistance service gets you back on the road quickly and affordably.
            </p>

            <p className="text-lg mb-6 leading-relaxed">
              From battery jump starts and tire changes to lockout service and fuel delivery, we handle the most common roadside emergencies
              throughout Troy, Michigan and surrounding areas. Our technicians arrive fast, work efficiently, and get you moving again—often
              without needing a tow truck at all.
            </p>

            <h2 className="text-3xl font-bold mb-4 mt-8">Complete Roadside Assistance Services</h2>

            <p className="text-lg mb-4 leading-relaxed">
              We offer a full range of roadside assistance services to Troy drivers:
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                <h3 className="text-xl font-bold mb-2">Battery Jump Start</h3>
                <p className="text-lg">
                  Dead battery? We&apos;ll jump-start your vehicle on the spot so you can get to a repair shop or auto parts store for a
                  replacement. Available 24/7 across Troy, MI.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                <h3 className="text-xl font-bold mb-2">Flat Tire Change</h3>
                <p className="text-lg">
                  Ran over a nail or hit a pothole? Our technicians will replace your flat tire with your spare so you can continue your
                  journey safely. If the spare is also flat, we&apos;ll tow you to a tire shop.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                <h3 className="text-xl font-bold mb-2">Lockout Service</h3>
                <p className="text-lg">
                  Locked your keys in the car? We can help you safely regain entry without damaging your vehicle. Fast response throughout
                  Troy and nearby cities.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                <h3 className="text-xl font-bold mb-2">Fuel Delivery</h3>
                <p className="text-lg">
                  Ran out of gas on the highway or in a Troy neighborhood? We&apos;ll bring enough fuel to get you to the nearest gas station.
                  No need to walk in dangerous traffic.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                <h3 className="text-xl font-bold mb-2">Winch-Out Service</h3>
                <p className="text-lg">
                  Stuck in mud, snow, or a ditch? Our winch-out service safely extracts your vehicle from difficult situations without
                  causing further damage.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                <h3 className="text-xl font-bold mb-2">Minor Mechanical Assistance</h3>
                <p className="text-lg">
                  Some issues can be fixed on the spot—loose battery cables, blown fuses, or minor adjustments. Our experienced team can
                  often solve simple problems without a tow.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-4 mt-8">Why Choose Our Roadside Assistance in Troy?</h2>

            <ul className="list-disc pl-6 mb-6 text-lg space-y-2">
              <li><strong>24/7 Availability:</strong> Day or night, weekends and holidays—we&apos;re always ready</li>
              <li><strong>Fast Response:</strong> Most roadside calls in Troy see arrival within 30 minutes</li>
              <li><strong>Professional Technicians:</strong> Trained, licensed, and equipped to handle any roadside emergency</li>
              <li><strong>Affordable Rates:</strong> Competitive pricing with no hidden fees or surprise charges</li>
              <li><strong>No Membership Required:</strong> Anyone can call—you don&apos;t need AAA or a roadside plan (though we work with them too!)</li>
              <li><strong>Fully Insured:</strong> Licensed and insured for your protection and peace of mind</li>
            </ul>

            <h2 className="text-3xl font-bold mb-4 mt-8">Common Roadside Emergencies We Handle</h2>

            <p className="text-lg mb-4 leading-relaxed">
              Troy drivers call us for help with these common situations:
            </p>

            <ul className="list-disc pl-6 mb-6 text-lg space-y-2">
              <li>Dead battery after leaving lights on overnight</li>
              <li>Flat tire from potholes on Michigan roads</li>
              <li>Locked keys inside the car at the mall or workplace</li>
              <li>Ran out of gas on the highway or in traffic</li>
              <li>Stuck in snow during Michigan winters</li>
              <li>Engine overheating and need coolant or water</li>
              <li>Minor electrical issues preventing car from starting</li>
              <li>Vehicle stuck in a ditch after sliding on ice</li>
            </ul>

            <h2 className="text-3xl font-bold mb-4 mt-8">Areas We Serve</h2>

            <p className="text-lg mb-4 leading-relaxed">
              Our roadside assistance service covers <strong>Troy, MI</strong> and all surrounding communities:
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
              <div className="bg-gray-50 p-3 rounded text-center">Troy</div>
              <div className="bg-gray-50 p-3 rounded text-center">Sterling Heights</div>
              <div className="bg-gray-50 p-3 rounded text-center">Royal Oak</div>
              <div className="bg-gray-50 p-3 rounded text-center">Rochester Hills</div>
              <div className="bg-gray-50 p-3 rounded text-center">Auburn Hills</div>
              <div className="bg-gray-50 p-3 rounded text-center">Madison Heights</div>
              <div className="bg-gray-50 p-3 rounded text-center">Birmingham</div>
              <div className="bg-gray-50 p-3 rounded text-center">Bloomfield Hills</div>
              <div className="bg-gray-50 p-3 rounded text-center">Clawson</div>
            </div>

            <p className="text-lg mb-6 leading-relaxed">
              We also respond to calls on all major roads: I-75, M-59, Big Beaver Road, Rochester Road, Crooks Road, Maple Road, and
              Stephenson Highway.
            </p>

            <h2 className="text-3xl font-bold mb-4 mt-8">Frequently Asked Questions</h2>

            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">How much does roadside assistance cost in Troy, MI?</h3>
                <p className="text-lg leading-relaxed">
                  Pricing varies by service. Jump starts and tire changes typically range from $50-$100. Lockout service may be slightly
                  higher. Call (248) 453-2195 for exact pricing.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">How fast can you get to me?</h3>
                <p className="text-lg leading-relaxed">
                  Most roadside assistance calls in Troy see arrival within 20-30 minutes. During severe weather or peak traffic, times may
                  vary, but we always prioritize emergency situations.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Do I need a roadside membership to call you?</h3>
                <p className="text-lg leading-relaxed">
                  No! Anyone can call us for roadside help. We also work with AAA, insurance roadside programs, and motor clubs—just let us
                  know if you have coverage.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">What if you can&apos;t fix my problem on-site?</h3>
                <p className="text-lg leading-relaxed">
                  If we can&apos;t resolve the issue roadside, we&apos;ll tow your vehicle to a repair shop, dealership, or your home. Our trucks are
                  equipped for both roadside service and towing.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Can you help if I&apos;m stuck in snow or mud?</h3>
                <p className="text-lg leading-relaxed">
                  Yes! Our winch-out service can safely extract vehicles stuck in snow, mud, ditches, or off-road situations. We have the
                  equipment and experience to handle Michigan winters.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Do you provide roadside assistance for motorcycles?</h3>
                <p className="text-lg leading-relaxed">
                  Yes, we assist motorcycles with jump starts, fuel delivery, and towing if needed. Our flatbed trucks can safely transport
                  motorcycles to your destination.
                </p>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mt-8">
              <h2 className="text-2xl font-bold mb-3">Stuck on the Road? We&apos;re On Our Way!</h2>
              <p className="text-lg mb-4">
                Don&apos;t wait in an unsafe location. Call Troy&apos;s fastest roadside assistance service now!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <a
                  href="tel:+12484532195"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-8 py-4 rounded-lg transition"
                >
                  CALL (248) 453-2195
                </a>
                <Link
                  href="/services"
                  className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold px-8 py-4 rounded-lg transition"
                >
                  View All Services
                </Link>
              </div>
            </div>

          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
