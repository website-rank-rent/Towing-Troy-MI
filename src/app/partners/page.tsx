// src/app/partners/page.tsx
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Trusted Towing Partner in Metro Atlanta | Heavy-Duty & Semi-Truck Towing",
  description:
    "Meet our trusted partner for heavy-duty towing in Metro Atlanta. They run a distinctive red heavy-duty tow truck for semi-truck towing, accident recovery, and 24/7 roadside assistance.",
};

export default function PartnersPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Trusted Partners</h1>

      <p className="mb-4 text-gray-700">
        We collaborate with reputable towing providers serving nearby areas. Our primary partner operates a
        distinctive <strong>red heavy-duty tow truck</strong> that’s purpose-built for{" "}
        <strong>semi-truck towing</strong>, <strong>tractor-trailer recovery</strong>, and{" "}
        <strong>heavy equipment transport</strong> across Metro Atlanta. When jobs require extra capacity or
        specialized gear, this partner is our first call.
      </p>

      {/* Replace the src below with the path to your image in /public if you save it there */}
      <div className="mb-6">
        <Image
          src="/iroadside18wheel.png"
          alt="Partner's red heavy-duty tow truck used for semi-truck towing and recovery in Metro Atlanta"
          width={1200}
          height={800}
          className="rounded-lg shadow-md w-full h-auto"
          priority
        />
      </div>

      <h2 className="text-2xl font-semibold mb-3">Why we recommend them</h2>
      <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
        <li>
          <strong>Heavy-duty wrecker & semi-truck towing:</strong> ideal for Class 7–8 trucks, tractors, and trailers.
        </li>
        <li>
          <strong>Accident recovery & winch-outs:</strong> lane-safe recoveries, load shifts, and roadside scene support.
        </li>
        <li>
          <strong>Long-distance & local hauling:</strong> safe transport for box trucks, buses, and construction equipment.
        </li>
        <li>
          <strong>24/7 roadside assistance:</strong> jump starts, lockouts, and tire service for commercial fleets.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3">Service areas</h2>
      <p className="mb-6 text-gray-700">
        Atlanta, Marietta, Sandy Springs, Roswell, Alpharetta, Brookhaven, Chamblee, Doraville, Tucker, and
        surrounding North Metro communities.
      </p>

      <ul className="list-disc pl-6 space-y-2 mb-10">
        <li>
          <a
            href="https://www.iroadsideservice.com/"
            rel="nofollow sponsored noopener"
            target="_blank"
            className="underline"
          >
            Marietta Tow Pros
          </a>
          <span className="text-gray-500"> — overflow coverage for Marietta & I-75 corridor</span>
        </li>
      </ul>

      {/* SEO: Structured data describing the partner as a TowingService */}
      <script
        type="application/ld+json"
        // Note: keep fields high-level since we don’t control the partner’s exact NAP here
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TowingService",
            "name": "Marietta Tow Pros",
            "url": "https://www.iroadsideservice.com/",
            "areaServed": [
              "Atlanta",
              "Marietta",
              "Sandy Springs",
              "Roswell",
              "Alpharetta",
              "Brookhaven",
              "Chamblee",
              "Doraville",
              "Tucker"
            ],
            "image": "/iroadside18wheel.png",
            "description":
              "Trusted heavy-duty towing partner operating a red heavy-duty tow truck for semi-truck towing, tractor-trailer recovery, and 24/7 roadside assistance in Metro Atlanta.",
            "keywords": [
              "heavy-duty towing",
              "semi-truck towing",
              "tractor-trailer recovery",
              "wrecker service",
              "accident recovery",
              "long-distance towing",
              "fleet roadside assistance"
            ],
          }),
        }}
      />
    </main>
  );
}
