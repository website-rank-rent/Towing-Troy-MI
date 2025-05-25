export default function TestimonialSection() {
  return (
    <section id="testimonials" className="bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-10">
          What Our Customers Say
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-700 text-lg italic">
              "I broke down on I-285 and they were there in 15 minutes. Great service!"
            </p>
            <div className="mt-4 text-gray-900 font-semibold">– Marcus L., Dunwoody</div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-700 text-lg italic">
              "Fast, friendly, and affordable. Easily the best tow truck company near me."
            </p>
            <div className="mt-4 text-gray-900 font-semibold">– Jasmine R., Perimeter Mall Area</div>
          </div>
        </div>
      </div>
    </section>
  );
}
