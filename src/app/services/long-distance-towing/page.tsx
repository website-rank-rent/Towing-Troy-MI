import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Long Distance Towing Troy MI | Interstate Vehicle Transport',
  description:
    'Affordable long-distance towing from Troy, MI to anywhere in Michigan or neighboring states. Safe interstate vehicle transport. Call (248) 453-2195 for a quote.',
  alternates: {
    canonical: 'https://troytowingservice.com/services/long-distance-towing',
  },
};

export default function LongDistanceTowingPage() {
  return (
    <div>
      <div className="relative min-h-screen">
        {/* Background Image */}
        <Image
          src="/winter-car-tow.jpg"
          alt="Long distance towing service from Troy Michigan"
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
                CALL FOR QUOTE: (248) 453-2195
              </a>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Long-Distance Towing from Troy, MI
            </h1>

            <p className="text-lg mb-4 leading-relaxed">
              Need to transport your vehicle from <strong>Troy, MI</strong> to another city or state? Whether you&apos;re relocating, buying a
              car out of state, or need to move a vehicle for repairs, <strong>Troy Towing & Roadside</strong> provides reliable,
              affordable long-distance towing services across Michigan and to neighboring states.
            </p>

            <p className="text-lg mb-6 leading-relaxed">
              Unlike short local tows, long-distance vehicle transport requires specialized equipment, careful planning, and experienced
              drivers who understand interstate regulations. Our flatbed trucks and professional team ensure your vehicle arrives safely,
              on time, and without damage—whether you&apos;re going 100 miles or 1,000 miles from Troy, Michigan.
            </p>

            <h2 className="text-3xl font-bold mb-4 mt-8">Why Choose Our Long-Distance Towing Service?</h2>

            <ul className="list-disc pl-6 mb-6 text-lg space-y-2">
              <li><strong>Flatbed Transport:</strong> All four wheels off the ground for maximum protection during long trips</li>
              <li><strong>Experienced Drivers:</strong> Licensed professionals familiar with interstate towing regulations</li>
              <li><strong>Transparent Pricing:</strong> Upfront quotes based on distance and vehicle type—no surprise fees</li>
              <li><strong>Fully Insured:</strong> Comprehensive coverage protects your vehicle throughout the journey</li>
              <li><strong>Door-to-Door Service:</strong> We pick up from Troy and deliver to your exact destination</li>
              <li><strong>Secure Loading:</strong> Professional tie-downs and straps keep your vehicle stable for hundreds of miles</li>
            </ul>

            <h2 className="text-3xl font-bold mb-4 mt-8">Where We Tow From Troy, MI</h2>

            <p className="text-lg mb-4 leading-relaxed">
              We provide long-distance towing from <strong>Troy, Michigan</strong> to destinations across the Midwest and beyond:
            </p>

            <ul className="list-disc pl-6 mb-6 text-lg space-y-2">
              <li><strong>Within Michigan:</strong> Detroit, Grand Rapids, Ann Arbor, Lansing, Flint, Kalamazoo, Traverse City</li>
              <li><strong>Ohio:</strong> Toledo, Cleveland, Columbus, Cincinnati, Akron</li>
              <li><strong>Indiana:</strong> Fort Wayne, Indianapolis, South Bend</li>
              <li><strong>Illinois:</strong> Chicago, Rockford, Peoria, Springfield</li>
              <li><strong>Wisconsin:</strong> Milwaukee, Madison, Green Bay</li>
              <li><strong>Kentucky:</strong> Louisville, Lexington</li>
              <li><strong>Pennsylvania:</strong> Pittsburgh, Erie</li>
              <li><strong>Other States:</strong> Contact us for custom routes and pricing</li>
            </ul>

            <h2 className="text-3xl font-bold mb-4 mt-8">Common Long-Distance Towing Scenarios</h2>

            <p className="text-lg mb-4 leading-relaxed">
              Troy residents and businesses use our long-distance towing for many reasons:
            </p>

            <ul className="list-disc pl-6 mb-6 text-lg space-y-2">
              <li><strong>Relocation:</strong> Moving to a new state and need your vehicle transported</li>
              <li><strong>Vehicle Purchase:</strong> Bought a car out of state and need it delivered to Troy</li>
              <li><strong>College Students:</strong> Transporting vehicles to/from universities in other states</li>
              <li><strong>Snowbird Travel:</strong> Moving vehicles between Michigan and warmer winter destinations</li>
              <li><strong>Military Deployment:</strong> Safe transport for service members relocating</li>
              <li><strong>Specialty Repairs:</strong> Taking a vehicle to a specific mechanic or dealership in another city</li>
              <li><strong>Classic Car Transport:</strong> Safe delivery of vintage, collector, or show cars</li>
              <li><strong>Breakdown on Road Trip:</strong> Vehicle broke down hours from Troy and needs to come home</li>
            </ul>

            <h2 className="text-3xl font-bold mb-4 mt-8">Our Long-Distance Towing Process</h2>

            <ol className="list-decimal pl-6 mb-6 text-lg space-y-2">
              <li><strong>Request a Quote:</strong> Call (248) 453-2195 with your pickup/delivery locations and vehicle details</li>
              <li><strong>Get Upfront Pricing:</strong> We provide a clear, itemized quote with no hidden fees</li>
              <li><strong>Schedule Pickup:</strong> Choose a convenient date and time for pickup in Troy</li>
              <li><strong>Vehicle Inspection:</strong> We document your vehicle&apos;s condition before loading</li>
              <li><strong>Secure Transport:</strong> Your vehicle is safely loaded onto our flatbed truck</li>
              <li><strong>Safe Journey:</strong> Professional drivers transport your vehicle using major highways and safe routes</li>
              <li><strong>Delivery & Sign-Off:</strong> We deliver to your destination and you inspect upon arrival</li>
            </ol>

            <h2 className="text-3xl font-bold mb-4 mt-8">What Affects Long-Distance Towing Costs?</h2>

            <p className="text-lg mb-4 leading-relaxed">
              Long-distance towing pricing depends on several factors:
            </p>

            <ul className="list-disc pl-6 mb-6 text-lg space-y-2">
              <li><strong>Distance:</strong> Total mileage from Troy to your destination</li>
              <li><strong>Vehicle Type:</strong> Size, weight, and special requirements (AWD, lowered, oversized)</li>
              <li><strong>Route Complexity:</strong> Highway vs. rural roads, tolls, and permits</li>
              <li><strong>Timeline:</strong> Standard vs. expedited delivery</li>
              <li><strong>Fuel Prices:</strong> Current diesel costs along the route</li>
              <li><strong>Seasonality:</strong> Winter weather may require additional precautions</li>
            </ul>

            <p className="text-lg mb-6 leading-relaxed">
              We provide transparent, competitive pricing with every quote. There are never surprise charges or hidden fees.
            </p>

            <h2 className="text-3xl font-bold mb-4 mt-8">Frequently Asked Questions</h2>

            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">How much does long-distance towing cost from Troy, MI?</h3>
                <p className="text-lg leading-relaxed">
                  Pricing varies based on distance and vehicle type. As a general guide, expect $2-$4 per mile for distances over 100 miles.
                  Call us for an exact quote: (248) 453-2195.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">How long does long-distance towing take?</h3>
                <p className="text-lg leading-relaxed">
                  Transit time depends on distance. A 500-mile trip typically takes 1-2 days including rest stops and fuel. Longer trips
                  may take 3-5 days. We provide estimated delivery times with every booking.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Can you tow my car to another state?</h3>
                <p className="text-lg leading-relaxed">
                  Yes! We provide interstate towing from Troy, MI to neighboring states and beyond. Our drivers are licensed for interstate
                  transport and familiar with state regulations.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Is my vehicle insured during long-distance transport?</h3>
                <p className="text-lg leading-relaxed">
                  Yes. We carry comprehensive commercial insurance covering your vehicle during transport. Your personal auto insurance may
                  also provide coverage—check with your provider.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Do I need to be present for pickup and delivery?</h3>
                <p className="text-lg leading-relaxed">
                  Yes, or you can designate an authorized representative. We require a signature at both pickup and delivery to document
                  the vehicle&apos;s condition.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">What if my vehicle breaks down on a road trip far from Troy?</h3>
                <p className="text-lg leading-relaxed">
                  We can arrange pickup from anywhere in the Midwest and tow your vehicle back to Troy or to a repair facility of your
                  choice. Call us 24/7 for emergency long-distance recovery.
                </p>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mt-8">
              <h2 className="text-2xl font-bold mb-3">Ready to Transport Your Vehicle?</h2>
              <p className="text-lg mb-4">
                Get a free, no-obligation quote for long-distance towing from Troy, MI today!
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
