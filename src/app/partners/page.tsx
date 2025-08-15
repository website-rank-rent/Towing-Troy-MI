// src/app/partners/page.tsx
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Trusted Towing Service in Troy, MI | Heavy-Duty & Semi-Truck Towing",
  description:
    "Learn about our heavy-duty towing capabilities in Troy, Michigan. We handle semi-truck towing, accident recovery, and 24/7 roadside assistance along major corridors and commercial areas.",
};

export default function PartnersPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Heavy-Duty & Commercial Towing in Troy</h1>

      <p className="mb-4 text-gray-700">
        Our team in <strong>Troy, Michigan</strong> is equipped to handle heavy-duty towing, semi-truck recovery, and specialized roadside assistance. 
        We operate a purpose-built <strong>red heavy-duty tow truck</strong> capable of handling tractor-trailers, buses, and other large commercial vehicles.
      </p>

      <div className="mb-6">
        <Image
          src="/iroadside18wheel.jpg"
          alt="Heavy-duty tow truck used for semi-truck towing and recovery in Troy, MI"
          width={1200}
          height={800}
          className="rounded-lg shadow-md w-full h-auto"
          priority
        />
      </div>

      <h2 className="text-2xl font-semibold mb-3">Why choose our heavy-duty towing</h2>
      <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
        <li>
          <strong>Heavy-duty & semi-truck towing:</strong> capable of Class 7–8 trucks, trailers, and commercial vehicles.
        </li>
        <li>
          <strong>Accident recovery & winch-outs:</strong> safe recoveries on highways, commercial lots, and industrial areas.
        </li>
        <li>
          <strong>Long-distance & local transport:</strong> secure hauling for trucks, buses, and construction equipment.
        </li>
        <li>
          <strong>24/7 roadside assistance:</strong> jump starts, lockouts, and tire service for commercial and fleet vehicles.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3">Service areas</h2>
      <p className="mb-6 text-gray-700">
        Serving the entire Troy, Michigan area, including Big Beaver Road, Crooks Road, Maple Road, Stephenson Highway, and M-59 corridor, as well as surrounding commercial zones and industrial parks.
      </p>

      {/* SEO: Structured data describing the heavy-duty towing service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TowingService",
            "name": "Troy Heavy-Duty Towing",
            "areaServed": [
              "Troy, MI",
              "Big Beaver Road, Troy",
              "Crooks Road, Troy",
              "Maple Road, Troy",
              "Stephenson Highway, Troy",
              "M-59 Corridor, Troy"
            ],
            "image": "/iroadside18wheel.jpg",
            "description":
              "Professional heavy-duty towing in Troy, MI. Semi-truck towing, accident recovery, and 24/7 roadside assistance for commercial vehicles.",
            "keywords": [
              "heavy-duty towing",
              "semi-truck towing",
              "tractor-trailer recovery",
              "commercial towing",
              "accident recovery",
              "long-distance towing",
              "fleet roadside assistance"
            ]
          }),
        }}
      />
    </main>
  );
}
