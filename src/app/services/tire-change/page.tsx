import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Flat Tire Change Troy MI | Roadside Tire Service | 24/7 Help',
  description:
    'Flat tire in Troy, Michigan? Fast roadside tire change service 24/7. We replace your flat with your spare quickly. Call (248) 453-2195 now!',
  alternates: {
    canonical: 'https://troytowingservice.com/services/tire-change',
  },
};

export default function TireChangePage() {
  return (
    <div>
      <div className="relative min-h-screen">
        {/* Background Image */}
        <Image
          src="/winter-car-tow.jpg"
          alt="Flat tire change service in Troy Michigan"
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
              Flat Tire Change Service in Troy, MI
            </h1>

            <p className="text-lg mb-4 leading-relaxed">
              Got a flat tire on the side of the road in <strong>Troy, MI</strong>? Don&apos;t risk changing it yourself in traffic or bad weather.
              <strong> Troy Towing & Roadside</strong> provides fast, professional flat tire change service 24/7 throughout Troy, Michigan and
              surrounding areas.
            </p>

            <p className="text-lg mb-6 leading-relaxed">
              Our trained technicians arrive quickly with the tools and expertise to safely replace your flat tire with your spare—whether
              you&apos;re on I-75, Big Beaver Road, or in a parking lot. We handle the dirty, dangerous work so you can get back on the road
              safely and quickly.
            </p>

            <h2 className="text-3xl font-bold mb-4 mt-8">How Our Tire Change Service Works</h2>

            <ol className="list-decimal pl-6 mb-6 text-lg space-y-2">
              <li><strong>Call Us:</strong> Contact (248) 453-2195 and tell us your location in Troy</li>
              <li><strong>Stay Safe:</strong> Pull over to a safe location away from traffic if possible</li>
              <li><strong>Fast Dispatch:</strong> We send a technician to your location right away</li>
              <li><strong>Quick Arrival:</strong> Most calls in Troy see arrival within 20-30 minutes</li>
              <li><strong>Professional Service:</strong> Our technician safely lifts your vehicle and removes the flat tire</li>
              <li><strong>Spare Installation:</strong> We mount and secure your spare tire properly</li>
              <li><strong>Pressure Check:</strong> We ensure your spare tire is inflated to safe levels</li>
              <li><strong>Back on the Road:</strong> You&apos;re ready to drive to a tire shop for a permanent fix</li>
            </ol>

            <h2 className="text-3xl font-bold mb-4 mt-8">Common Flat Tire Situations</h2>

            <p className="text-lg mb-4 leading-relaxed">
              Troy residents call us for flat tire help in many situations:
            </p>

            <ul className="list-disc pl-6 mb-6 text-lg space-y-2">
              <li><strong>Nail or Screw Puncture:</strong> Hit debris on Troy&apos;s roads causing a slow leak or blowout</li>
              <li><strong>Pothole Damage:</strong> Michigan potholes causing tire damage and rim bends</li>
              <li><strong>Sidewall Damage:</strong> Curb strikes or sharp objects cutting the tire sidewall</li>
              <li><strong>Tire Blowout:</strong> High-speed blowout requiring immediate roadside assistance</li>
              <li><strong>Slow Leak:</strong> Tire lost pressure overnight and is now completely flat</li>
              <li><strong>Weather-Related:</strong> Extreme temperature changes causing tire pressure loss</li>
              <li><strong>Age-Related Failure:</strong> Old, worn tires failing unexpectedly</li>
            </ul>

            <h2 className="text-3xl font-bold mb-4 mt-8">Why Choose Our Tire Change Service?</h2>

            <ul className="list-disc pl-6 mb-6 text-lg space-y-2">
              <li><strong>24/7 Emergency Service:</strong> Available any time, day or night, including holidays</li>
              <li><strong>Rapid Response:</strong> Most Troy locations serviced within 30 minutes</li>
              <li><strong>Safety First:</strong> We handle tire changes in traffic and dangerous conditions</li>
              <li><strong>Professional Tools:</strong> Hydraulic jacks, impact wrenches, and safety equipment</li>
              <li><strong>All Vehicle Types:</strong> Cars, trucks, SUVs, and vans—even larger vehicles</li>
              <li><strong>Spare Tire Inspection:</strong> We check your spare for proper inflation and condition</li>
              <li><strong>Affordable Pricing:</strong> Transparent rates with no hidden fees</li>
              <li><strong>Towing Available:</strong> If you have no spare or it&apos;s damaged, we&apos;ll tow to a tire shop</li>
            </ul>

            <h2 className="text-3xl font-bold mb-4 mt-8">When You Don&apos;t Have a Spare Tire</h2>

            <p className="text-lg mb-4 leading-relaxed">
              Many modern vehicles come without a spare tire—instead equipped with tire repair kits or run-flat tires. If you can&apos;t drive
              on your damaged tire, we offer these solutions:
            </p>

            <ul className="list-disc pl-6 mb-6 text-lg space-y-2">
              <li><strong>Towing to Tire Shop:</strong> We tow your vehicle to a nearby tire service center in Troy, MI</li>
              <li><strong>Tire Inflation Kit:</strong> If you have a repair kit, we can help use it (for minor punctures)</li>
              <li><strong>Run-Flat Assessment:</strong> We evaluate if your run-flat tire can safely reach a shop</li>
              <li><strong>Mobile Tire Service:</strong> We can coordinate with mobile tire services that come to you</li>
            </ul>

            <h2 className="text-3xl font-bold mb-4 mt-8">Safety Tips for Flat Tires</h2>

            <p className="text-lg mb-4 leading-relaxed">
              If you get a flat tire in <strong>Troy, Michigan</strong>, follow these safety guidelines while waiting for help:
            </p>

            <ul className="list-disc pl-6 mb-6 text-lg space-y-2">
              <li><strong>Pull Over Safely:</strong> Move as far right as possible, away from traffic lanes</li>
              <li><strong>Turn on Hazard Lights:</strong> Alert other drivers to your stopped vehicle</li>
              <li><strong>Stay Inside:</strong> In high-traffic areas, it&apos;s safer to wait inside your vehicle</li>
              <li><strong>Don&apos;t Stand Behind Car:</strong> Never stand directly behind or beside your vehicle in traffic</li>
              <li><strong>Exit from Passenger Side:</strong> If traffic is heavy, exit away from the road</li>
              <li><strong>Call for Help First:</strong> Don&apos;t attempt to change a tire yourself in dangerous conditions</li>
            </ul>

            <h2 className="text-3xl font-bold mb-4 mt-8">What to Do After a Tire Change</h2>

            <p className="text-lg mb-4 leading-relaxed">
              After we install your spare tire, follow these important steps:
            </p>

            <ol className="list-decimal pl-6 mb-6 text-lg space-y-2">
              <li><strong>Drive to a Tire Shop:</strong> Spare tires are temporary—get a permanent replacement ASAP</li>
              <li><strong>Check Speed Limits:</strong> Most spare tires (donuts) have a 50 MPH speed limit</li>
              <li><strong>Avoid Long Distances:</strong> Spare tires are rated for 50-70 miles maximum</li>
              <li><strong>Monitor Handling:</strong> Temporary spares affect vehicle handling—drive carefully</li>
              <li><strong>Get Tire Repaired or Replaced:</strong> Have the flat tire assessed for repair or replacement</li>
              <li><strong>Replace Your Spare:</strong> Once you get a new tire, buy a replacement spare for next time</li>
            </ol>

            <h2 className="text-3xl font-bold mb-4 mt-8">Service Areas in Troy, MI</h2>

            <p className="text-lg mb-4 leading-relaxed">
              We provide 24/7 flat tire change service throughout Troy and surrounding communities:
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
                <h3 className="text-xl font-semibold mb-2">How much does a roadside tire change cost in Troy, MI?</h3>
                <p className="text-lg leading-relaxed">
                  Flat tire change service typically costs $75-$125 depending on location and time of day. Call (248) 453-2195 for an exact
                  quote before we dispatch.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">How long does a tire change take?</h3>
                <p className="text-lg leading-relaxed">
                  Most tire changes take 15-20 minutes once we arrive. Total time including arrival is usually 30-45 minutes from your
                  initial call.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">What if I don&apos;t have a spare tire?</h3>
                <p className="text-lg leading-relaxed">
                  If your vehicle doesn&apos;t have a spare or it&apos;s damaged, we&apos;ll tow you to the nearest tire shop in Troy where you can purchase
                  a new tire and get back on the road.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Can you change a tire on the highway?</h3>
                <p className="text-lg leading-relaxed">
                  Yes, but safety is critical. We have emergency lights and safety equipment to change tires on highways and busy roads. We
                  assess each situation and may recommend towing if it&apos;s too dangerous.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Do you sell or provide spare tires?</h3>
                <p className="text-lg leading-relaxed">
                  We don&apos;t sell tires, but we can tow you to a nearby tire shop, dealership, or auto parts store where you can purchase a
                  replacement tire or spare.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Can I drive on a donut spare tire long distance?</h3>
                <p className="text-lg leading-relaxed">
                  No. Temporary &quot;donut&quot; spare tires are rated for 50-70 miles maximum and speeds up to 50 MPH. Drive directly to a tire shop
                  for a permanent replacement.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">What if my spare tire is also flat?</h3>
                <p className="text-lg leading-relaxed">
                  If your spare is flat or damaged, we can&apos;t install it safely. In this case, we&apos;ll tow your vehicle to a tire shop for repair
                  or replacement.
                </p>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mt-8">
              <h2 className="text-2xl font-bold mb-3">Got a Flat Tire? We&apos;ll Fix It Fast!</h2>
              <p className="text-lg mb-4">
                Don&apos;t struggle with a tire change yourself. Call Troy&apos;s fastest tire change service now!
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
