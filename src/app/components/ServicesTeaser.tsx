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
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Flatbed Towing Near Me
            </h3>
            <p className="mt-1 text-gray-700 text-base">
              Secure transport for AWD, luxury, and classic cars in Troy and beyond.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Roadside Assistance
            </h3>
            <p className="mt-1 text-gray-700 text-base">
              Battery boosts, tire replacements, lockout help, and gas delivery — available 24/7.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Long-Distance Vehicle Transport
            </h3>
            <p className="mt-1 text-gray-700 text-base">
              Affordable transport anywhere in Michigan or to neighboring states.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Accident Recovery
            </h3>
            <p className="mt-1 text-gray-700 text-base">
              Quick, safe removal of vehicles after crashes with minimal risk of damage.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Winch & Recovery Service
            </h3>
            <p className="mt-1 text-gray-700 text-base">
              Retrieve vehicles stuck in snowbanks, mud, or off-road conditions.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Private Property Towing
            </h3>
            <p className="mt-1 text-gray-700 text-base">
              Remove illegally parked vehicles from commercial or residential spaces.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <a
          href="tel:+18665307414"
          className="mt-8 inline-block text-3xl font-bold text-blue-600"
        >
          (866) 530-7414
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
