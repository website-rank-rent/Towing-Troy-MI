import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Local Towing Troy MI | Fast Response Tow Truck | (248) 453-2195',
  description:
    'Fast, affordable local towing in Troy, Michigan. 24/7 emergency tow truck service near you. Serving Troy, Sterling Heights, Royal Oak & more. Call now!',
  alternates: {
    canonical: 'https://troytowingservice.com/services/local-towing',
  },
};

export default function LocalTowingPage() {
  return (
    <div>
      <div className="relative min-h-screen">
        {/* Background Image */}
        <Image
          src="/winter-car-tow.jpg"
          alt="Local tow truck service in Troy Michigan"
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
              Local Towing Services in Troy, MI
            </h1>

            <p className="text-lg mb-4 leading-relaxed">
              When your car breaks down in <strong>Troy, MI</strong>, you need a local towing company that knows the area, responds fast,
              and gets you back on the road quickly. That&apos;s exactly what <strong>Troy Towing & Roadside</strong> delivers—prompt, professional,
              and affordable local towing services throughout Troy and the greater Metro Detroit area.
            </p>

            <p className="text-lg mb-6 leading-relaxed">
              We&apos;re not a national call center directing you to the lowest bidder. We&apos;re a locally-focused towing service with deep knowledge
              of Troy&apos;s roads, neighborhoods, and traffic patterns. From Big Beaver Road to Rochester Road, Maple Road to I-75, we know
              the fastest routes to get to you and get you where you need to go—whether that&apos;s home, a trusted repair shop, or a safe location.
            </p>

            <h2 className="text-3xl font-bold mb-4 mt-8">Why Choose Local Towing in Troy?</h2>

            <p className="text-lg mb-4 leading-relaxed">
              Choosing a local towing provider in <strong>Troy, Michigan</strong> comes with significant advantages:
            </p>

            <ul className="list-disc pl-6 mb-6 text-lg space-y-2">
              <li><strong>Faster Response Times:</strong> We&apos;re already in Troy—no waiting for a truck to come from another city</li>
              <li><strong>Local Knowledge:</strong> We know shortcuts, traffic patterns, and the best repair shops in the area</li>
              <li><strong>Competitive Pricing:</strong> Local towing distances mean lower costs compared to long-haul services</li>
              <li><strong>Community Trust:</strong> We&apos;ve built our reputation serving Troy residents and businesses</li>
              <li><strong>24/7 Availability:</strong> Day or night, we&apos;re here when you need us most</li>
              <li><strong>Personalized Service:</strong> You&apos;ll talk to real people who care about getting you help fast</li>
            </ul>

            <h2 className="text-3xl font-bold mb-4 mt-8">Areas We Serve</h2>

            <p className="text-lg mb-4 leading-relaxed">
              Our local towing service covers Troy, MI and all surrounding communities, including:
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6 text-lg">
              <div className="bg-gray-50 p-3 rounded">Troy</div>
              <div className="bg-gray-50 p-3 rounded">Sterling Heights</div>
              <div className="bg-gray-50 p-3 rounded">Royal Oak</div>
              <div className="bg-gray-50 p-3 rounded">Rochester Hills</div>
              <div className="bg-gray-50 p-3 rounded">Auburn Hills</div>
              <div className="bg-gray-50 p-3 rounded">Madison Heights</div>
              <div className="bg-gray-50 p-3 rounded">Birmingham</div>
              <div className="bg-gray-50 p-3 rounded">Bloomfield Hills</div>
              <div className="bg-gray-50 p-3 rounded">Clawson</div>
            </div>

            <p className="text-lg mb-6 leading-relaxed">
              We also service all major roads and highways in the area: I-75, M-59, Big Beaver Road (16 Mile), Crooks Road, Rochester Road,
              Stephenson Highway, John R Road, and Maple Road.
            </p>

            <h2 className="text-3xl font-bold mb-4 mt-8">Common Local Towing Situations</h2>

            <p className="text-lg mb-4 leading-relaxed">
              Troy drivers call us for local towing help in many situations:
            </p>

            <ul className="list-disc pl-6 mb-6 text-lg space-y-2">
              <li><strong>Vehicle Breakdowns:</strong> Engine failure, transmission problems, or electrical issues</li>
              <li><strong>Dead Battery:</strong> When a jump start isn&apos;t enough, we tow you to a mechanic</li>
              <li><strong>Flat Tire:</strong> If you don&apos;t have a spare or the tire can&apos;t be changed on-site</li>
              <li><strong>Accident Towing:</strong> Safe removal after a collision on Troy roads</li>
              <li><strong>Locked Out:</strong> If you&apos;re locked out and need transport to get a new key made</li>
              <li><strong>Overheating Engine:</strong> Towing to a repair shop before further damage occurs</li>
              <li><strong>Check Engine Light:</strong> When it&apos;s unsafe to drive, we tow you to a diagnostic center</li>
              <li><strong>Parking Lot Breakdown:</strong> Stuck at the mall, office, or restaurant? We&apos;ll get you out</li>
            </ul>

            <h2 className="text-3xl font-bold mb-4 mt-8">Our Local Towing Process</h2>

            <ol className="list-decimal pl-6 mb-6 text-lg space-y-2">
              <li><strong>Call Us:</strong> Dial (248) 453-2195 and tell us your location and situation</li>
              <li><strong>Fast Dispatch:</strong> We send the nearest available tow truck to your location in Troy</li>
              <li><strong>Quick Arrival:</strong> Most local tows see our truck arrive within 30 minutes or less</li>
              <li><strong>Professional Service:</strong> Our licensed driver assesses your vehicle and loads it safely</li>
              <li><strong>Safe Transport:</strong> We tow you to your chosen destination—home, mechanic, or dealership</li>
              <li><strong>Transparent Billing:</strong> No surprise fees—just honest, upfront pricing</li>
            </ol>

            <h2 className="text-3xl font-bold mb-4 mt-8">What Makes Us Different</h2>

            <p className="text-lg mb-4 leading-relaxed">
              Not all towing companies in Troy, MI are created equal. Here&apos;s what sets <strong>Troy Towing & Roadside</strong> apart:
            </p>

            <ul className="list-disc pl-6 mb-6 text-lg space-y-2">
              <li><strong>Licensed & Insured:</strong> Full commercial insurance and proper licensing for your protection</li>
              <li><strong>Modern Equipment:</strong> Well-maintained trucks with flatbeds, wheel-lifts, and dollies</li>
              <li><strong>Trained Professionals:</strong> Certified drivers who treat your vehicle with care</li>
              <li><strong>Damage-Free Towing:</strong> We use the right equipment for your specific vehicle type</li>
              <li><strong>Customer-First Approach:</strong> Friendly, respectful service when you&apos;re already having a bad day</li>
            </ul>

            <h2 className="text-3xl font-bold mb-4 mt-8">Frequently Asked Questions</h2>

            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">How much does local towing cost in Troy, MI?</h3>
                <p className="text-lg leading-relaxed">
                  Local towing in Troy typically ranges from $75 to $150 depending on the distance and vehicle type. We provide upfront
                  quotes with no hidden fees. Call (248) 453-2195 for exact pricing.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">How fast can you get to me in Troy?</h3>
                <p className="text-lg leading-relaxed">
                  Most local towing calls in Troy see arrival within 20-30 minutes. During peak traffic or severe weather, times may vary,
                  but we always prioritize emergency calls.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Do you offer 24/7 local towing?</h3>
                <p className="text-lg leading-relaxed">
                  Yes! We provide 24/7 emergency towing services every day of the year, including holidays. Breakdowns don&apos;t follow a
                  schedule, and neither do we.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Can I choose which repair shop you tow my car to?</h3>
                <p className="text-lg leading-relaxed">
                  Absolutely. You have the right to choose your preferred repair facility. We&apos;ll tow your vehicle to any location you
                  specify in the Troy area.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">What payment methods do you accept?</h3>
                <p className="text-lg leading-relaxed">
                  We accept cash, credit cards, and debit cards for your convenience. Many insurance policies also cover towing—check with
                  your provider for reimbursement.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Will towing damage my car?</h3>
                <p className="text-lg leading-relaxed">
                  When done properly with professional equipment, towing will not damage your vehicle. We use the appropriate towing method
                  (flatbed, wheel-lift, or dolly) based on your vehicle&apos;s drivetrain to ensure safe transport.
                </p>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mt-8">
              <h2 className="text-2xl font-bold mb-3">Need Local Towing in Troy Right Now?</h2>
              <p className="text-lg mb-4">
                Don&apos;t wait on the side of the road. Call Troy&apos;s fastest local towing service now!
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
