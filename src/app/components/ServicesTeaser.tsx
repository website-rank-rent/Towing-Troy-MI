export default function ServicesTeaser() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900">
          24/7 Emergency Towing & Roadside Assistance in Metro Atlanta
        </h2>

        <p className="mt-4 text-lg text-gray-700">
          Need a <strong>tow truck near you</strong>? We provide
          <strong> fast, affordable, and professional towing services</strong> across{" "}
          <strong>Metro Atlanta</strong> — including Dunwoody, Sandy Springs, Brookhaven,
          Buckhead, Decatur, Roswell, Alpharetta, and surrounding areas. Whether you’re
          stranded on I-285, GA-400, or in your own driveway, our licensed and insured
          team is ready to help <strong>24/7</strong>.
        </p>

        <p className="mt-2 text-lg text-gray-700">
          From <strong>emergency towing</strong> to <strong>scheduled vehicle transport</strong>,
          we handle it all — flatbed towing, jump starts, tire changes, lockouts, fuel
          delivery, winch outs, and more. Our drivers know the fastest routes across
          Atlanta’s highways and neighborhoods, so you’re never left waiting.
        </p>

        {/* Service Links */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Flatbed Towing Near Me
            </h3>
            <p className="mt-1 text-gray-700 text-base">
              Safe transport for all-wheel drive, luxury, and specialty vehicles in
              Metro Atlanta.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Roadside Assistance
            </h3>
            <p className="mt-1 text-gray-700 text-base">
              Jump starts, tire changes, lockouts, and fuel delivery — available 24/7.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Long-Distance Towing
            </h3>
            <p className="mt-1 text-gray-700 text-base">
              Affordable vehicle transport anywhere in Georgia or beyond.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Accident Recovery
            </h3>
            <p className="mt-1 text-gray-700 text-base">
              Fast, safe removal of vehicles after collisions with minimal damage.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Winch Out Service
            </h3>
            <p className="mt-1 text-gray-700 text-base">
              Recover vehicles stuck in mud, snow, or off-road terrain.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Private Property Towing
            </h3>
            <p className="mt-1 text-gray-700 text-base">
              Remove unauthorized vehicles from business or residential lots.
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
        <meta itemProp="areaServed" content="Atlanta, GA" />
        <meta itemProp="areaServed" content="Dunwoody, GA" />
        <meta itemProp="areaServed" content="Sandy Springs, GA" />
        <meta itemProp="areaServed" content="Brookhaven, GA" />
        <meta itemProp="areaServed" content="Buckhead, Atlanta, GA" />
        <meta itemProp="areaServed" content="Decatur, GA" />
        <meta itemProp="areaServed" content="Roswell, GA" />
        <meta itemProp="areaServed" content="Alpharetta, GA" />
      </div>
    </section>
  );
}
