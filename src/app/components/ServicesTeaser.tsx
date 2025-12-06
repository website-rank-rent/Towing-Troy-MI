export default function ServicesTeaser() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900">
          24/7 Emergency Towing & Roadside Help in Troy, Michigan
        </h2>

        <p className="mt-4 text-lg text-gray-700">
          Looking for a <strong>tow truck in Troy</strong>? Our team delivers
          <strong> prompt, dependable, and affordable towing services</strong> across{" "}
          <strong>Troy and the surrounding Metro Detroit area</strong> — including
          Sterling Heights, Royal Oak, Madison Heights, Birmingham, Rochester Hills, and Clawson. 
          Whether you’re stuck on I-75, M-59, or in your neighborhood driveway, our licensed and insured
          drivers are ready to assist <strong>day or night</strong>.
        </p>

        <p className="mt-2 text-lg text-gray-700">
          From <strong>emergency vehicle recovery</strong> to <strong>scheduled auto transport</strong>,
          we cover it all — flatbed towing, battery jump starts, tire changes, lockouts,
          fuel delivery, winch recovery, and more. Our drivers know the quickest routes
          through Troy’s roads and nearby cities so you’re never left waiting.
        </p>

        {/* Service Links */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          <a href="/services/flatbed-towing" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600">
              Flatbed Towing Near Me
            </h3>
            <p className="mt-1 text-gray-700 text-base">
              Secure transport for AWD, luxury, and classic cars in Troy and beyond.
            </p>
            <span className="text-blue-600 font-medium mt-2 inline-block">Learn More →</span>
          </a>
          <a href="/services/local-towing" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600">
              Local Towing Troy, MI
            </h3>
            <p className="mt-1 text-gray-700 text-base">
              Fast, affordable local towing throughout Troy and Metro Detroit area.
            </p>
            <span className="text-blue-600 font-medium mt-2 inline-block">Learn More →</span>
          </a>
          <a href="/services/roadside-assistance" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600">
              Roadside Assistance
            </h3>
            <p className="mt-1 text-gray-700 text-base">
              Battery boosts, tire replacements, lockout help, and gas delivery — available 24/7.
            </p>
            <span className="text-blue-600 font-medium mt-2 inline-block">Learn More →</span>
          </a>
          <a href="/services/battery-jump-start" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600">
              Battery Jump Start
            </h3>
            <p className="mt-1 text-gray-700 text-base">
              Fast jump start service to get your dead battery running again quickly.
            </p>
            <span className="text-blue-600 font-medium mt-2 inline-block">Learn More →</span>
          </a>
          <a href="/services/tire-change" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600">
              Flat Tire Change
            </h3>
            <p className="mt-1 text-gray-700 text-base">
              Professional roadside tire change service 24/7 throughout Troy, MI.
            </p>
            <span className="text-blue-600 font-medium mt-2 inline-block">Learn More →</span>
          </a>
          <a href="/services/lockout-service" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600">
              Car Lockout Service
            </h3>
            <p className="mt-1 text-gray-700 text-base">
              Locked your keys in the car? We&apos;ll get you back in quickly and safely.
            </p>
            <span className="text-blue-600 font-medium mt-2 inline-block">Learn More →</span>
          </a>
          <a href="/services/long-distance-towing" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600">
              Long-Distance Towing
            </h3>
            <p className="mt-1 text-gray-700 text-base">
              Affordable transport anywhere in Michigan or to neighboring states.
            </p>
            <span className="text-blue-600 font-medium mt-2 inline-block">Learn More →</span>
          </a>
          <a href="/services/accident-recovery" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600">
              Accident Recovery
            </h3>
            <p className="mt-1 text-gray-700 text-base">
              Quick, safe removal of vehicles after crashes with minimal risk of damage.
            </p>
            <span className="text-blue-600 font-medium mt-2 inline-block">Learn More →</span>
          </a>
        </div>

        {/* Call to Action */}
        <a
          href="tel:+12484532195"
          className="mt-8 inline-block text-3xl font-bold text-blue-600"
        >
          (248) 453-2195
        </a>

        {/* Local SEO microdata */}
        <meta itemProp="areaServed" content="Troy, MI" />
        <meta itemProp="areaServed" content="Sterling Heights, MI" />
        <meta itemProp="areaServed" content="Royal Oak, MI" />
        <meta itemProp="areaServed" content="Madison Heights, MI" />
        <meta itemProp="areaServed" content="Birmingham, MI" />
        <meta itemProp="areaServed" content="Rochester Hills, MI" />
        <meta itemProp="areaServed" content="Clawson, MI" />
      </div>
    </section>
  );
}
