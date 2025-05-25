// src/app/components/ServicesTeaser.tsx

//currently this file is not in use because i moved it to the hero section. I'm scared to fully delete this file while we finalize the template. 
export default function ServicesTeaser() {
    return (
      <section id="services" className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            24/7 EMERGENCY SERVICE
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            We provide fast and affordable towing services and roadside assistance
            throughout the area.
          </p>
          <a
            href="tel:+18665307414"
            className="mt-6 inline-block text-3xl font-bold text-blue-600"
          >
            (866) 530‑7414 
          </a>
        </div>
      </section>
    );
  }
  