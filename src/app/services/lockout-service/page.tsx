import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Car Lockout Service Troy MI | Locked Keys in Car | 24/7 Help',
  description:
    'Locked out of your car in Troy, Michigan? Fast, affordable lockout service 24/7. Get back in your vehicle quickly. Call (248) 453-2195 now!',
  alternates: {
    canonical: 'https://troytowingservice.com/services/lockout-service',
  },
};

export default function LockoutServicePage() {
  return (
    <div>
      <div className="relative min-h-screen">
        {/* Background Image */}
        <Image
          src="/winter-car-tow.jpg"
          alt="Car lockout service in Troy Michigan"
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
              Car Lockout Service in Troy, MI
            </h1>

            <p className="text-lg mb-4 leading-relaxed">
              Locked your keys in the car? It happens to everyone. Whether you're at home, work, the mall, or stranded in a parking lot in
              <strong> Troy, MI</strong>, <strong>Troy Towing & Roadside</strong> provides fast, professional car lockout service to get you
              back in your vehicle quickly and safely.
            </p>

            <p className="text-lg mb-6 leading-relaxed">
              Our trained technicians use specialized tools to unlock your car door without damaging the paint, locks, or windows. We serve
              Troy, Michigan and all surrounding areas 24 hours a day, 7 days a week—because lockouts don't wait for convenient times.
            </p>

            <h2 className="text-3xl font-bold mb-4 mt-8">How Our Lockout Service Works</h2>

            <ol className="list-decimal pl-6 mb-6 text-lg space-y-2">
              <li><strong>Call Us Immediately:</strong> Contact (248) 453-2195 and tell us your location in Troy</li>
              <li><strong>Stay Safe:</strong> Wait in a secure location—inside a building if possible, especially at night</li>
              <li><strong>Fast Response:</strong> We dispatch a technician to your location right away</li>
              <li><strong>Quick Arrival:</strong> Most lockout calls in Troy see arrival within 20-30 minutes</li>
              <li><strong>Safe Entry:</strong> Our technician uses professional lockout tools to unlock your door</li>
              <li><strong>No Damage:</strong> We access your vehicle without breaking windows or damaging locks</li>
              <li><strong>You're Back In:</strong> Retrieve your keys and get back on with your day</li>
            </ol>

            <h2 className="text-3xl font-bold mb-4 mt-8">Common Lockout Situations We Handle</h2>

            <p className="text-lg mb-4 leading-relaxed">
              Troy residents call us for help with all types of car lockout situations:
            </p>

            <ul className="list-disc pl-6 mb-6 text-lg space-y-2">
              <li><strong>Keys Locked in Car:</strong> Left keys inside and doors locked automatically</li>
              <li><strong>Keys Locked in Trunk:</strong> Trunk closed with keys inside and no spare available</li>
              <li><strong>Broken Key in Lock:</strong> Key snapped off inside the door lock or ignition</li>
              <li><strong>Dead Key Fob Battery:</strong> Electronic key fob died and manual lock isn't working</li>
              <li><strong>Child or Pet Locked Inside:</strong> Emergency situations requiring immediate access</li>
              <li><strong>Frozen Locks:</strong> Michigan winter weather causing locks to freeze shut</li>
              <li><strong>Lost Keys:</strong> Need entry to retrieve spare key or call a locksmith</li>
              <li><strong>Malfunctioning Door Locks:</strong> Electronic or mechanical lock failure</li>
            </ul>

            <h2 className="text-3xl font-bold mb-4 mt-8">Why Choose Our Lockout Service in Troy?</h2>

            <ul className="list-disc pl-6 mb-6 text-lg space-y-2">
              <li><strong>24/7 Emergency Service:</strong> Available day or night, weekends and holidays</li>
              <li><strong>Fast Response Times:</strong> Most Troy locations serviced within 30 minutes</li>
              <li><strong>Damage-Free Entry:</strong> Professional tools prevent paint, window, and lock damage</li>
              <li><strong>Experienced Technicians:</strong> Trained in modern and classic vehicle lockout techniques</li>
              <li><strong>All Vehicle Types:</strong> We handle cars, trucks, SUVs, and vans of all makes</li>
              <li><strong>Affordable Pricing:</strong> Competitive rates with transparent, upfront quotes</li>
              <li><strong>Fully Licensed & Insured:</strong> Professional service you can trust</li>
              <li><strong>No Membership Required:</strong> Anyone can call—no AAA membership needed</li>
            </ul>

            <h2 className="text-3xl font-bold mb-4 mt-8">Emergency Lockout: Child or Pet Inside Vehicle</h2>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg mb-6">
              <h3 className="text-2xl font-bold mb-3 text-red-900">URGENT: Child or Pet Locked Inside?</h3>
              <p className="text-lg mb-3 leading-relaxed">
                If a child or pet is locked inside your vehicle, this is a life-threatening emergency—especially in hot or cold weather.
              </p>
              <p className="text-lg mb-3 font-bold">
                CALL 911 FIRST if the child or pet shows signs of distress, heat exhaustion, or hypothermia.
              </p>
              <p className="text-lg leading-relaxed">
                Then call us at (248) 453-2195 immediately. We treat these calls as our highest priority and will arrive as fast as possible.
                In extreme emergencies, breaking a window may be necessary to save a life—we can help assess the situation and take appropriate
                action.
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-4 mt-8">Prevention Tips: Avoid Future Lockouts</h2>

            <p className="text-lg mb-4 leading-relaxed">
              While we're always here to help, here are tips to prevent future lockouts in <strong>Troy, MI</strong>:
            </p>

            <ul className="list-disc pl-6 mb-6 text-lg space-y-2">
              <li><strong>Keep a Spare Key:</strong> Hide a spare in a magnetic key box under your vehicle</li>
              <li><strong>Give a Spare to Family:</strong> Leave a spare key with a trusted friend or family member</li>
              <li><strong>Replace Weak Key Fob Batteries:</strong> Change batteries annually before they die</li>
              <li><strong>Use a Keychain Reminder:</strong> Attach keys to something you always take (phone, wallet)</li>
              <li><strong>Develop a Habit:</strong> Always check for keys before closing the door</li>
              <li><strong>Consider Smart Locks:</strong> Modern keyless entry systems reduce lockout risk</li>
            </ul>

            <h2 className="text-3xl font-bold mb-4 mt-8">Service Coverage Area</h2>

            <p className="text-lg mb-4 leading-relaxed">
              We provide 24/7 lockout service throughout Troy and nearby communities:
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
                <h3 className="text-xl font-semibold mb-2">How much does car lockout service cost in Troy, MI?</h3>
                <p className="text-lg leading-relaxed">
                  Lockout service typically costs $75-$150 depending on vehicle type, time of day, and complexity. Call (248) 453-2195 for
                  an upfront quote before we dispatch.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">How long does it take to unlock my car?</h3>
                <p className="text-lg leading-relaxed">
                  Most vehicles can be unlocked within 5-15 minutes after arrival. Total service time including arrival is usually 30-45
                  minutes from your call.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Will you damage my car getting in?</h3>
                <p className="text-lg leading-relaxed">
                  No. Our technicians use professional lockout tools (slim jims, wedges, and long-reach tools) designed to access vehicles
                  without damaging paint, weather seals, windows, or locks.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Can you unlock newer cars with electronic locks?</h3>
                <p className="text-lg leading-relaxed">
                  Yes. We have experience with both traditional mechanical locks and modern electronic locking systems. The method varies
                  by vehicle, but we can access most makes and models.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">What if I lost my keys completely?</h3>
                <p className="text-lg leading-relaxed">
                  If you've lost your keys, we can unlock your car so you can check for a spare. If no spare exists, you'll need a locksmith
                  or dealership to create a new key. We can tow your vehicle there if needed.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Do you provide locksmith services?</h3>
                <p className="text-lg leading-relaxed">
                  We specialize in vehicle entry (unlocking doors), not key duplication or lock replacement. For new keys or lock repairs,
                  we can refer you to trusted locksmiths in Troy, MI.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Can you unlock my trunk if keys are inside?</h3>
                <p className="text-lg leading-relaxed">
                  Yes! Many vehicles have a trunk release inside the cabin. We can unlock the doors first, then access the trunk release
                  button to retrieve your keys.
                </p>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mt-8">
              <h2 className="text-2xl font-bold mb-3">Locked Out? We'll Get You Back In Fast!</h2>
              <p className="text-lg mb-4">
                Don't stress about being locked out. Call Troy's trusted lockout service now!
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
