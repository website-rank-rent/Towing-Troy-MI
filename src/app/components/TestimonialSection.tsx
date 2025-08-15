export default function TestimonialSection() {
  return (
    <section id="testimonials" className="bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-10">
          Hear From Our Troy Customers
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-700 text-lg italic">
              &quot;My car stalled out on I-75 right outside Troy and they had a truck to me in less than 25 minutes. Couldn’t have asked for better help.&quot;
            </p>
            <div className="mt-4 text-gray-900 font-semibold">– Ryan T., Troy</div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-700 text-lg italic">
              &quot;Prompt, courteous, and reasonably priced. Definitely my go-to towing service in Oakland County.&quot;
            </p>
            <div className="mt-4 text-gray-900 font-semibold">– Danielle M., Rochester Hills</div>
          </div>
        </div>
      </div>
    </section>
  );
}

