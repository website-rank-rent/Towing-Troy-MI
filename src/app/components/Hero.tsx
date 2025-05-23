// src/app/components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full">
      {/* 1) Full‑screen background image */}
      <Image
        src="/towtruckpullingtruck.png
        "
        alt="Tow truck pulling a damaged vehicle"
        fill
        priority
        className="object-cover"
      />

      {/* 2) Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/50" />

      {/* 3) Centered text + button */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-white text-5xl md:text-6xl font-extrabold">
          TOW TRUCK SERVICE
        </h1>
        <p className="mt-4 text-white text-lg md:text-xl">
          Reliable Towing & Roadside Assistance
        </p>
        <a
          href="tel:+15551234567"
          className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-md"
        >
          CALL NOW
        </a>
      </div>
    </section>
  );
}
