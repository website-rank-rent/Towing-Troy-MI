import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Accident Recovery Towing Troy MI | Crash Vehicle Removal 24/7',
  description:
    'Professional accident recovery and crash towing in Troy, Michigan. Safe vehicle removal after collisions. 24/7 emergency service. Call (248) 453-2195 now!',
  alternates: {
    canonical: 'https://troytowingservice.com/services/accident-recovery',
  },
};

export default function AccidentRecoveryPage() {
  return (
    <div>
      <div className="relative min-h-screen">
        {/* Background Image */}
        <Image
          src="/winter-car-tow.jpg"
          alt="Accident recovery towing service in Troy Michigan"
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
              Accident Recovery & Towing in Troy, MI
            </h1>

            <p className="text-lg mb-4 leading-relaxed">
              Been in a car accident in <strong>Troy, MI</strong>? The moments after a collision are stressful and overwhelming.
              <strong> Troy Towing & Roadside</strong> provides professional accident recovery and towing services 24/7 to safely remove
              your damaged vehicle from the scene and transport it to your preferred location.
            </p>

            <p className="text-lg mb-6 leading-relaxed">
              Our experienced team responds quickly to accident scenes throughout Troy, Michigan and surrounding areas. We work closely
              with police, insurance companies, and repair shops to ensure your vehicle is handled with care and professionalism during
              this difficult time.
            </p>

            <h2 className="text-3xl font-bold mb-4 mt-8">Our Accident Recovery Services</h2>

            <div className="space-y-4 mb-6">
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                <h3 className="text-xl font-bold mb-2">Emergency Accident Towing</h3>
                <p className="text-lg">
                  Immediate response to collision scenes in Troy, MI. We safely remove damaged vehicles from roads, highways, and parking
                  lots to clear the scene and restore traffic flow.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                <h3 className="text-xl font-bold mb-2">Flatbed Transport for Damaged Vehicles</h3>
                <p className="text-lg">
                  Severely damaged vehicles require flatbed towing to prevent additional damage. We use flatbeds for cars with missing wheels,
                  frame damage, or extensive collision damage.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                <h3 className="text-xl font-bold mb-2">Debris & Fluid Cleanup</h3>
                <p className="text-lg">
                  We assist with clearing broken glass, plastic pieces, and automotive fluids from the accident scene to make the area safe
                  for other drivers.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                <h3 className="text-xl font-bold mb-2">Insurance Coordination</h3>
                <p className="text-lg">
                  We provide necessary documentation and work directly with insurance companies to streamline the claims process. Photos,
                  receipts, and incident reports are provided upon request.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                <h3 className="text-xl font-bold mb-2">Multi-Vehicle Accident Recovery</h3>
                <p className="text-lg">
                  Involved in a multi-car pileup? We can dispatch multiple trucks to handle complex accident scenes efficiently and safely.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                <h3 className="text-xl font-bold mb-2">Secure Vehicle Storage</h3>
                <p className="text-lg">
                  If your vehicle can't go directly to a repair shop, we offer secure storage options while you work with your insurance
                  company and arrange repairs.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-4 mt-8">What to Do After an Accident in Troy, MI</h2>

            <p className="text-lg mb-4 leading-relaxed">
              If you've been in a collision, follow these important steps:
            </p>

            <ol className="list-decimal pl-6 mb-6 text-lg space-y-2">
              <li><strong>Check for Injuries:</strong> Ensure everyone is safe. Call 911 if anyone needs medical attention</li>
              <li><strong>Move to Safety:</strong> If possible, move vehicles out of traffic to prevent additional collisions</li>
              <li><strong>Call Police:</strong> Report the accident and wait for officers to arrive and file a report</li>
              <li><strong>Document the Scene:</strong> Take photos of all vehicles, damage, license plates, and road conditions</li>
              <li><strong>Exchange Information:</strong> Get names, phone numbers, insurance info, and driver's license numbers</li>
              <li><strong>Call Your Insurance:</strong> Report the accident to your insurance company as soon as possible</li>
              <li><strong>Arrange Towing:</strong> Call Troy Towing at (248) 453-2195 for professional accident recovery</li>
            </ol>

            <h2 className="text-3xl font-bold mb-4 mt-8">Why Choose Our Accident Recovery Service?</h2>

            <ul className="list-disc pl-6 mb-6 text-lg space-y-2">
              <li><strong>24/7 Emergency Response:</strong> Accidents happen any time—we're always available</li>
              <li><strong>Fast Arrival:</strong> Quick response to minimize road blockage and safety hazards</li>
              <li><strong>Experienced Team:</strong> Trained in safe accident vehicle recovery and damage prevention</li>
              <li><strong>All Collision Types:</strong> Minor fender benders to major multi-vehicle accidents</li>
              <li><strong>Flatbed & Wheel-Lift Trucks:</strong> Appropriate equipment for any damage level</li>
              <li><strong>Insurance Friendly:</strong> We work with all major insurance companies and provide documentation</li>
              <li><strong>Respectful & Professional:</strong> We understand you're dealing with a stressful situation</li>
              <li><strong>Fully Licensed & Insured:</strong> Proper coverage protects you and your vehicle</li>
            </ul>

            <h2 className="text-3xl font-bold mb-4 mt-8">Common Accident Scenarios We Handle</h2>

            <ul className="list-disc pl-6 mb-6 text-lg space-y-2">
              <li><strong>Rear-End Collisions:</strong> Common on Troy's busy roads like Big Beaver and I-75</li>
              <li><strong>T-Bone Accidents:</strong> Intersection collisions causing side-impact damage</li>
              <li><strong>Head-On Collisions:</strong> Serious frontal impacts requiring immediate towing</li>
              <li><strong>Single-Vehicle Accidents:</strong> Hitting poles, trees, or guardrails</li>
              <li><strong>Winter Weather Crashes:</strong> Slide-offs and ice-related accidents during Michigan winters</li>
              <li><strong>Highway Accidents:</strong> High-speed collisions on I-75 and M-59</li>
              <li><strong>Parking Lot Accidents:</strong> Low-speed collisions at shopping centers and businesses</li>
              <li><strong>Hit-and-Run Recovery:</strong> Towing after another driver fled the scene</li>
            </ul>

            <h2 className="text-3xl font-bold mb-4 mt-8">Where We Tow Accident Vehicles</h2>

            <p className="text-lg mb-4 leading-relaxed">
              After an accident in <strong>Troy, Michigan</strong>, we can tow your vehicle to:
            </p>

            <ul className="list-disc pl-6 mb-6 text-lg space-y-2">
              <li><strong>Your Preferred Repair Shop:</strong> You have the right to choose your own mechanic or body shop</li>
              <li><strong>Insurance-Approved Facility:</strong> Shops designated by your insurance company</li>
              <li><strong>Dealership Service Center:</strong> For newer vehicles under warranty</li>
              <li><strong>Your Home or Driveway:</strong> If you want to assess damage before choosing repairs</li>
              <li><strong>Secure Storage Facility:</strong> Temporary storage while you work with insurance</li>
              <li><strong>Salvage Yard:</strong> If the vehicle is totaled and won't be repaired</li>
            </ul>

            <h2 className="text-3xl font-bold mb-4 mt-8">Working with Insurance Companies</h2>

            <p className="text-lg mb-4 leading-relaxed">
              We make the insurance claims process easier:
            </p>

            <ul className="list-disc pl-6 mb-6 text-lg space-y-2">
              <li><strong>Direct Billing:</strong> We can bill your insurance company directly for towing services</li>
              <li><strong>Detailed Receipts:</strong> Itemized invoices for insurance claim submission</li>
              <li><strong>Photo Documentation:</strong> Pictures of vehicle damage and loading procedures</li>
              <li><strong>Incident Reports:</strong> Professional documentation of the towing service</li>
              <li><strong>Storage Coordination:</strong> Work with adjusters on vehicle inspection timelines</li>
            </ul>

            <h2 className="text-3xl font-bold mb-4 mt-8">Service Coverage Area</h2>

            <p className="text-lg mb-4 leading-relaxed">
              We provide 24/7 accident recovery throughout Troy, MI and surrounding areas:
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
                <h3 className="text-xl font-semibold mb-2">How much does accident towing cost in Troy, MI?</h3>
                <p className="text-lg leading-relaxed">
                  Accident towing costs vary based on damage severity, distance, and vehicle type. Most insurance policies cover accident
                  towing. Call (248) 453-2195 for pricing and insurance billing options.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Do I have to use the tow company the police call?</h3>
                <p className="text-lg leading-relaxed">
                  No. You have the legal right to choose your own towing company. If police call a rotation tow company and you prefer us,
                  let the officer know you've already arranged your own service.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Will my insurance cover accident towing?</h3>
                <p className="text-lg leading-relaxed">
                  Most auto insurance policies include accident towing coverage, either through collision coverage or roadside assistance
                  add-ons. Check your policy or call your insurance company to verify coverage.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Can I choose which repair shop you tow my car to?</h3>
                <p className="text-lg leading-relaxed">
                  Absolutely. Michigan law gives you the right to choose your own repair facility. We'll tow your vehicle wherever you direct
                  us—your preferred shop, a dealership, or even your home.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">How fast can you respond to an accident scene?</h3>
                <p className="text-lg leading-relaxed">
                  We prioritize accident calls and typically arrive within 20-30 minutes in Troy and nearby areas. Response times may vary
                  based on traffic and accident location.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">What if my car can't be driven at all?</h3>
                <p className="text-lg leading-relaxed">
                  That's what we're here for. Our flatbed trucks can safely transport vehicles with any level of damage—missing wheels, frame
                  damage, or complete immobilization.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Do you work with police at accident scenes?</h3>
                <p className="text-lg leading-relaxed">
                  Yes. We work professionally with Troy Police, Oakland County Sheriff, and Michigan State Police to clear accident scenes
                  safely and efficiently.
                </p>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mt-8">
              <h2 className="text-2xl font-bold mb-3">Need Accident Recovery in Troy Now?</h2>
              <p className="text-lg mb-4">
                We're here to help during this stressful time. Call for fast, professional accident towing service!
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
