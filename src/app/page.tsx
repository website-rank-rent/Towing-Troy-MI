// src/app/page.tsx
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import ServicesTeaser from "./components/ServicesTeaser";
import TestimonialSection from "./components/TestimonialSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <Hero />

      {/* Intro & Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Professional Towing Services in Troy, MI
            </h2>

            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              When your vehicle breaks down or you need emergency roadside assistance in <strong>Troy, Michigan</strong>,
              you need a towing company you can trust. Troy Towing & Roadside provides fast, reliable, and affordable 24/7
              towing and roadside services throughout Troy and the greater Metro Detroit area. Whether you're stuck on
              I-75, stranded in a parking lot on Big Beaver Road, or dealing with a breakdown on Rochester Road, our
              experienced team is ready to help.
            </p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We specialize in emergency towing, flatbed transport, roadside assistance, accident recovery, and more.
              Our locally-based drivers know Troy's roads inside and out, ensuring the fastest possible response times
              when you need help most. From simple battery jump starts to complex accident recovery, we handle every
              situation with professionalism and care.
            </p>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Choose Troy Towing & Roadside?
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold text-blue-600 mb-2">✓ 24/7 Availability</h4>
                  <p className="text-gray-700">
                    Breakdowns don't follow a schedule. We're available around the clock, every day of the year,
                    including holidays and weekends.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-blue-600 mb-2">✓ Fast Response Times</h4>
                  <p className="text-gray-700">
                    Most calls in Troy, MI see arrival within 30 minutes or less. We prioritize emergency situations
                    and get to you quickly.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-blue-600 mb-2">✓ Licensed & Insured</h4>
                  <p className="text-gray-700">
                    Full commercial insurance and proper licensing protect you and your vehicle. We maintain the
                    highest professional standards.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-blue-600 mb-2">✓ Transparent Pricing</h4>
                  <p className="text-gray-700">
                    No hidden fees or surprise charges. We provide upfront quotes and honest pricing for all our
                    towing and roadside services.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-blue-600 mb-2">✓ Modern Equipment</h4>
                  <p className="text-gray-700">
                    Our fleet includes flatbed trucks, wheel-lift tow trucks, and professional roadside assistance
                    equipment to handle any situation.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-blue-600 mb-2">✓ Local Expertise</h4>
                  <p className="text-gray-700">
                    We know Troy's roads, traffic patterns, and best routes. Our local knowledge means faster service
                    and better outcomes.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="tel:+12484532195"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold text-xl px-10 py-5 rounded-lg shadow-lg transition transform hover:scale-105"
              >
                CALL NOW: (248) 453-2195
              </a>
            </div>
          </div>
        </div>
      </section>

      <ServicesTeaser />
      <TestimonialSection />
      <Contact />
      <Footer />
    </>
  );
}
