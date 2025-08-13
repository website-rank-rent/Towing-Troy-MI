import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full">
      {/* Background image */}
      <Image
        src="/iroadsidewhitetruck.avif"
        alt="Dunwoody tow truck responding to emergency roadside assistance call 24/7"
        fill
        priority
        className="object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Headline + CTA in middle of top third */}
      <div className="absolute w-full left-0 px-6" style={{ top: "20.5%" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-white text-5xl md:text-6xl font-extrabold">
            TOW TRUCK SERVICE IN DUNWOODY
          </h1>
          <p className="mt-4 text-white text-lg md:text-xl">
            Reliable Towing & Roadside Assistance in Dunwoody, GA
          </p>
          <a
            href="tel:+18665307414"
            className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-md"
          >
            CALL NOW
          </a>
        </div>
      </div>

      {/* 24/7 Emergency Service in top of bottom third */}
      <div className="absolute w-full left-0 px-6" style={{ top: "66%" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white text-2xl md:text-3xl font-semibold">
            24/7 EMERGENCY TOWING SERVICE Near you!
          </h2>
          <p className="mt-2 text-white text-lg">
            Fast, affordable towing and roadside assistance in Dunwoody and the greater Atlanta metro area.
          </p>
          <a
            href="tel:+18665307414"
            className="mt-4 inline-block text-2xl font-bold text-blue-400 hover:text-blue-200"
          >
            (866) 530‑7414
          </a>
        </div>
      </div>
    </section>
  );
}
