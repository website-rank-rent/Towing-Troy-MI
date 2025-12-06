import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Battery Jump Start Troy MI | Dead Battery? Call (248) 453-2195',
  description:
    'Fast battery jump start service in Troy, Michigan. Dead battery assistance 24/7. Get back on the road quickly. Emergency jump starts available now!',
  alternates: {
    canonical: 'https://troytowingservice.com/services/battery-jump-start',
  },
};

export default function BatteryJumpStartPage() {
  return (
    <div>
      <div className="relative min-h-screen">
        {/* Background Image */}
        <Image
          src="/winter-car-tow.jpg"
          alt="Battery jump start service in Troy Michigan"
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
              Battery Jump Start Service in Troy, MI
            </h1>

            <p className="text-lg mb-4 leading-relaxed">
              Dead battery? Don&apos;t panic. <strong>Troy Towing & Roadside</strong> provides fast, reliable battery jump start service
              throughout <strong>Troy, MI</strong> and surrounding areas. Whether you left your lights on overnight, your battery is old
              and weak, or you&apos;re dealing with extreme Michigan weather, our technicians will get your vehicle started and back on the road.
            </p>

            <p className="text-lg mb-6 leading-relaxed">
              We respond 24/7 to jump start requests across Troy, including parking lots, driveways, workplaces, shopping centers, and
              roadside locations. Most jump starts take just 10-15 minutes, and we arrive prepared with professional-grade jumper cables
              and battery testing equipment.
            </p>

            <h2 className="text-3xl font-bold mb-4 mt-8">How Our Jump Start Service Works</h2>

            <ol className="list-decimal pl-6 mb-6 text-lg space-y-2">
              <li><strong>Call Us:</strong> Dial (248) 453-2195 and tell us your location in Troy, MI</li>
              <li><strong>Fast Dispatch:</strong> We send the nearest available technician to your location</li>
              <li><strong>Quick Arrival:</strong> Most jump start calls see arrival within 20-30 minutes</li>
              <li><strong>Battery Assessment:</strong> Our technician checks your battery terminals and connections</li>
              <li><strong>Professional Jump Start:</strong> We safely jump-start your vehicle using commercial-grade equipment</li>
              <li><strong>Testing & Advice:</strong> We test the battery and alternator, then advise if replacement is needed</li>
              <li><strong>Get Back on the Road:</strong> You&apos;re ready to drive to a repair shop or continue your day</li>
            </ol>

            <h2 className="text-3xl font-bold mb-4 mt-8">Common Causes of Dead Batteries</h2>

            <p className="text-lg mb-4 leading-relaxed">
              Understanding why your battery died can help prevent future issues:
            </p>

            <ul className="list-disc pl-6 mb-6 text-lg space-y-2">
              <li><strong>Lights Left On:</strong> Interior lights, headlights, or accessories draining the battery overnight</li>
              <li><strong>Old Battery:</strong> Most car batteries last 3-5 years before needing replacement</li>
              <li><strong>Extreme Cold:</strong> Michigan winters reduce battery capacity by 30-50%</li>
              <li><strong>Corroded Terminals:</strong> Buildup on battery posts prevents proper electrical connection</li>
              <li><strong>Parasitic Drain:</strong> Faulty electronics slowly draining power when the car is off</li>
              <li><strong>Short Trips:</strong> Not driving long enough for the alternator to recharge the battery</li>
              <li><strong>Faulty Alternator:</strong> The charging system isn&apos;t replenishing the battery while driving</li>
              <li><strong>Extreme Heat:</strong> Summer heat can evaporate battery fluid and damage internal components</li>
            </ul>

            <h2 className="text-3xl font-bold mb-4 mt-8">Why Choose Our Jump Start Service?</h2>

            <ul className="list-disc pl-6 mb-6 text-lg space-y-2">
              <li><strong>24/7 Availability:</strong> Dead batteries don&apos;t wait for business hours—neither do we</li>
              <li><strong>Rapid Response:</strong> Most Troy locations serviced within 30 minutes</li>
              <li><strong>Professional Equipment:</strong> Commercial-grade jumper cables and portable battery packs</li>
              <li><strong>Experienced Technicians:</strong> Trained to safely jump-start all vehicle types</li>
              <li><strong>Battery Testing:</strong> We can test your battery and alternator on the spot</li>
              <li><strong>Affordable Rates:</strong> Competitive pricing with transparent, upfront quotes</li>
              <li><strong>No Damage Risk:</strong> Proper jump-start procedures protect your vehicle&apos;s electrical system</li>
            </ul>

            <h2 className="text-3xl font-bold mb-4 mt-8">When a Jump Start Isn&apos;t Enough</h2>

            <p className="text-lg mb-4 leading-relaxed">
              Sometimes a dead battery is a symptom of a bigger problem. If any of these apply, you may need a tow to a repair shop:
            </p>

            <ul className="list-disc pl-6 mb-6 text-lg space-y-2">
              <li>Battery won&apos;t hold a charge after jump start</li>
              <li>Vehicle dies again shortly after being jump-started</li>
              <li>Battery is visibly swollen, cracked, or leaking</li>
              <li>Alternator isn&apos;t charging the battery while driving</li>
              <li>Electrical system shows warning lights or malfunctions</li>
              <li>Battery terminals are severely corroded and can&apos;t make proper contact</li>
            </ul>

            <p className="text-lg mb-6 leading-relaxed">
              In these cases, our team can tow your vehicle to a trusted mechanic or auto parts store in <strong>Troy, MI</strong> for
              battery replacement or electrical system diagnosis.
            </p>

            <h2 className="text-3xl font-bold mb-4 mt-8">Service Areas in Troy, MI</h2>

            <p className="text-lg mb-4 leading-relaxed">
              We provide battery jump start service throughout Troy and nearby communities:
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

            <h2 className="text-3xl font-bold mb-4 mt-8">Frequently Asked Questions</h2>

            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">How much does a battery jump start cost in Troy, MI?</h3>
                <p className="text-lg leading-relaxed">
                  Jump start service typically costs $50-$100 depending on your location and time of day. Call (248) 453-2195 for an exact
                  quote before we dispatch.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">How long does it take to jump-start a car?</h3>
                <p className="text-lg leading-relaxed">
                  The actual jump start process takes about 5-10 minutes once we arrive. Total service time including arrival is usually
                  30-45 minutes from your initial call.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Can you jump-start my car in the cold Michigan winter?</h3>
                <p className="text-lg leading-relaxed">
                  Absolutely! We operate year-round in all weather conditions. Cold weather is one of the most common causes of dead batteries,
                  and we&apos;re equipped to handle winter jump starts.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Will a jump start damage my car&apos;s electronics?</h3>
                <p className="text-lg leading-relaxed">
                  Not when done properly by professionals. Our technicians use correct procedures to prevent electrical system damage, including
                  proper cable placement and voltage verification.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">What should I do after getting a jump start?</h3>
                <p className="text-lg leading-relaxed">
                  Drive your vehicle for at least 20-30 minutes to allow the alternator to recharge the battery. If possible, drive to an
                  auto parts store or mechanic to have the battery and charging system tested.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Do you provide battery replacement service?</h3>
                <p className="text-lg leading-relaxed">
                  We focus on jump starts and towing. If your battery needs replacement, we can tow you to a nearby auto parts store, mechanic,
                  or dealership where you can purchase and install a new battery.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Can you jump-start a hybrid or electric vehicle?</h3>
                <p className="text-lg leading-relaxed">
                  Hybrid vehicles can usually be jump-started using their 12V auxiliary battery. Fully electric vehicles may require specialized
                  service. Call us to discuss your specific vehicle make and model.
                </p>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mt-8">
              <h2 className="text-2xl font-bold mb-3">Need a Jump Start Right Now?</h2>
              <p className="text-lg mb-4">
                Don&apos;t wait with a dead battery. Call Troy&apos;s fastest jump start service and get back on the road!
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
