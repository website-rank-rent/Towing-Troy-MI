import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Flatbed Towing Troy MI | Safe Vehicle Transport | 24/7 Service',
  description:
    'Professional flatbed towing in Troy, MI for luxury cars, motorcycles, and damaged vehicles. Safe, secure transport 24/7. Call (248) 453-2195 for immediate flatbed service.',
  alternates: {
    canonical: 'https://troytowingservice.com/services/flatbed-towing',
  },
};

export default function FlatbedTowingPage() {
  return (
    <div>
      <div className="relative min-h-screen">
        {/* Background Image */}
        <Image
          src="/winter-car-tow.jpg"
          alt="Flatbed tow truck in Troy Michigan"
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
              Flatbed Towing Services in Troy, MI
            </h1>

            <p className="text-lg mb-4 leading-relaxed">
              When you need the safest, most secure method to transport your vehicle in <strong>Troy, MI</strong>, flatbed towing is the gold standard.
              Unlike traditional wheel-lift towing, flatbed towing keeps all four wheels off the ground, eliminating the risk of transmission damage,
              tire wear, or undercarriage scraping during transport.
            </p>

            <p className="text-lg mb-6 leading-relaxed">
              At <strong>Troy Towing & Roadside</strong>, we specialize in professional flatbed towing services throughout Troy, Michigan and
              surrounding communities including Rochester Hills, Sterling Heights, Royal Oak, and Auburn Hills. Our state-of-the-art flatbed
              trucks can safely transport vehicles of all types—from luxury sedans and sports cars to motorcycles, vintage classics, and
              accident-damaged vehicles.
            </p>

            <h2 className="text-3xl font-bold mb-4 mt-8">Why Choose Flatbed Towing?</h2>

            <p className="text-lg mb-4 leading-relaxed">
              Flatbed towing offers unmatched protection for your vehicle. Here's why drivers in Troy, MI trust our flatbed service:
            </p>

            <ul className="list-disc pl-6 mb-6 text-lg space-y-2">
              <li><strong>Zero Ground Contact:</strong> Your vehicle rides completely on the flatbed, protecting the drivetrain and suspension</li>
              <li><strong>Ideal for Luxury Vehicles:</strong> BMWs, Mercedes, Audis, and other high-end cars deserve flatbed-only transport</li>
              <li><strong>Perfect for All-Wheel Drive (AWD):</strong> AWD and 4WD vehicles require flatbed towing to prevent drivetrain damage</li>
              <li><strong>Motorcycle & Classic Car Safe:</strong> Low-profile vehicles and motorcycles transport securely without risk</li>
              <li><strong>Accident Recovery:</strong> Damaged vehicles with missing wheels or severe frame damage need flatbed towing</li>
              <li><strong>Long-Distance Transport:</strong> Interstate or cross-state moves are safer and smoother on a flatbed</li>
            </ul>

            <h2 className="text-3xl font-bold mb-4 mt-8">Our Flatbed Towing Process</h2>

            <p className="text-lg mb-4 leading-relaxed">
              When you call <strong>Troy Towing & Roadside</strong> for flatbed service, here's what to expect:
            </p>

            <ol className="list-decimal pl-6 mb-6 text-lg space-y-2">
              <li><strong>Rapid Response:</strong> We dispatch a flatbed truck to your location in Troy or nearby areas within minutes</li>
              <li><strong>Professional Assessment:</strong> Our certified drivers evaluate your vehicle and the best loading approach</li>
              <li><strong>Secure Loading:</strong> Using hydraulic tilt beds and winches, we carefully load your vehicle onto the flatbed</li>
              <li><strong>Safe Transport:</strong> Your vehicle is secured with heavy-duty straps and chains to prevent any movement</li>
              <li><strong>Careful Delivery:</strong> We transport your vehicle to your preferred destination—home, repair shop, or storage</li>
            </ol>

            <h2 className="text-3xl font-bold mb-4 mt-8">When You Need Flatbed Towing in Troy, MI</h2>

            <p className="text-lg mb-4 leading-relaxed">
              Flatbed towing isn't just for luxury cars. Here are common situations where Troy residents call us for flatbed service:
            </p>

            <ul className="list-disc pl-6 mb-6 text-lg space-y-2">
              <li>Vehicle won't start and needs transport to a mechanic</li>
              <li>Accident or collision with severe damage</li>
              <li>Purchasing a classic or vintage car and need safe delivery</li>
              <li>Moving a vehicle from Troy to another city or state</li>
              <li>Repossession or impound lot retrieval</li>
              <li>Transporting an electric vehicle (EV) with specific towing requirements</li>
              <li>Low-clearance sports cars that can't be towed with a wheel-lift</li>
            </ul>

            <h2 className="text-3xl font-bold mb-4 mt-8">24/7 Emergency Flatbed Towing</h2>

            <p className="text-lg mb-6 leading-relaxed">
              Breakdowns and accidents don't follow a schedule—that's why we offer <strong>24/7 emergency flatbed towing</strong> in Troy, Michigan.
              Whether it's 3 AM on a Sunday or during rush hour on Big Beaver Road, our team is ready to respond. We serve all major roads
              and highways including I-75, M-59, Rochester Road, Crooks Road, and Maple Road.
            </p>

            <h2 className="text-3xl font-bold mb-4 mt-8">Frequently Asked Questions</h2>

            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">How much does flatbed towing cost in Troy, MI?</h3>
                <p className="text-lg leading-relaxed">
                  Flatbed towing costs vary based on distance, vehicle type, and time of day. We offer transparent, upfront pricing with
                  no hidden fees. Call us at (248) 453-2195 for a free quote.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Is flatbed towing safer than wheel-lift towing?</h3>
                <p className="text-lg leading-relaxed">
                  Yes. Flatbed towing is the safest method because your vehicle is completely off the ground, eliminating risks of
                  transmission damage, alignment issues, or additional wear during transport.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Can you tow AWD vehicles on a flatbed?</h3>
                <p className="text-lg leading-relaxed">
                  Absolutely. In fact, flatbed towing is the ONLY safe way to tow all-wheel drive (AWD) and four-wheel drive (4WD) vehicles
                  without risking drivetrain damage.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">How long does it take for flatbed towing service to arrive?</h3>
                <p className="text-lg leading-relaxed">
                  We typically arrive within 30 minutes for emergency calls in Troy and surrounding areas. Response times may vary based
                  on traffic and weather conditions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Do you provide flatbed towing for motorcycles?</h3>
                <p className="text-lg leading-relaxed">
                  Yes! Our flatbed trucks are equipped to safely transport motorcycles, scooters, and ATVs. We use specialized tie-downs
                  to keep your bike secure during transport.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Can you tow my car from Troy to another state?</h3>
                <p className="text-lg leading-relaxed">
                  Yes, we offer long-distance flatbed towing services to neighboring states and beyond. Contact us to discuss your
                  specific route and get a custom quote.
                </p>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mt-8">
              <h2 className="text-2xl font-bold mb-3">Need Flatbed Towing in Troy Right Now?</h2>
              <p className="text-lg mb-4">
                Don't risk further damage to your vehicle. Call Troy's most trusted flatbed towing service now!
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
