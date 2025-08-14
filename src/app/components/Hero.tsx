import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-[80vh] md:min-h-screen overflow-hidden"
      role="banner"
      aria-label="Metro Atlanta towing and roadside assistance"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      {/* Background image */}
      <Image
        src="/iroadsidefedex.avif"
        alt="Tow truck in Metro Atlanta providing 24/7 roadside assistance"
        fill
        priority
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 100vw"
      />

      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-16 md:py-24 gap-6 min-h-[80vh] md:min-h-screen">
        <div className="max-w-3xl">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight">
            Tow Truck <span className="whitespace-nowrap">Near Me</span> in Metro Atlanta
          </h1>

          <p className="mt-4 text-white/90 text-lg md:text-xl">
            24/7 towing & roadside assistance across Metro Atlanta — Dunwoody, Sandy Springs,
            Brookhaven, Buckhead, Decatur, Roswell, Alpharetta and more.
          </p>

          {/* Trust bullets */}
          <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/90 text-base">
            <li>✔︎ 24/7 Emergency Dispatch</li>
            <li>✔︎ Licensed & Insured</li>
            <li>✔︎ Flatbed • Jumpstarts • Lockouts • Tire Change</li>
          </ul>

          {/* Primary CTA */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+18665307414"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-md transition"
              aria-label="Call Metro Atlanta Tow Truck now at 866-530-7414"
              itemProp="telephone"
            >
              CALL 24/7 • (866) 530-7414
            </a>

            <a
              href="#contact"
              className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-4 rounded-md backdrop-blur transition"
            >
              Request a Quote
            </a>
          </div>

          {/* Local service-area hook */}
          <p className="mt-6 text-white/80 text-sm md:text-base">
            Serving I-285 & GA-400 corridors: Perimeter Center, Ashford-Dunwoody, Peachtree Rd, Lenox/Phipps,
            Northside Hospital, and surrounding neighborhoods.
            <meta itemProp="areaServed" content="Atlanta, GA" />
            <meta itemProp="areaServed" content="Dunwoody, GA" />
            <meta itemProp="areaServed" content="Sandy Springs, GA" />
            <meta itemProp="areaServed" content="Brookhaven, GA" />
            <meta itemProp="areaServed" content="Buckhead, Atlanta, GA" />
            <meta itemProp="areaServed" content="Decatur, GA" />
            <meta itemProp="areaServed" content="Roswell, GA" />
            <meta itemProp="areaServed" content="Alpharetta, GA" />
          </p>
        </div>
      </div>
    </section>
  );
}
