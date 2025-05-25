export const metadata = {
  title: "About Our Towing Company in [City Name] | 24/7 Tow Truck Service",
  description: "Learn more about our local towing company in [City]. We provide emergency roadside assistance and reliable towing services near you.",
};

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-gray-900">
      <h1 className="text-4xl font-bold mb-6">About Our Towing Service in [City Name]</h1>

      <p className="mb-4 text-lg">
        If you're searching for a <strong>tow truck near me</strong> or <strong>towing company in [City Name]</strong>, you're in the right place. Our locally owned and operated service provides fast, professional roadside assistance 24/7.
      </p>

      <p className="mb-4 text-lg">
        We specialize in:
      </p>

      <ul className="list-disc pl-6 mb-4 text-lg">
        <li>Emergency towing throughout the [Metro Area]</li>
        <li>Roadside assistance, lockouts, battery jumps</li>
        <li>Flatbed and local towing services</li>
        <li>Accident recovery and long-distance hauling</li>
      </ul>

      <p className="mb-4 text-lg">
        Our team is trusted by residents across <strong>[City Name]</strong> and nearby areas like <strong>[Suburb 1], [Suburb 2]</strong>. We're proud to be the go-to solution for anyone who types in <strong>"tow truck companies near me"</strong>.
      </p>

      <p className="text-lg mb-8">
        Need help right now? Call us at <a href="tel:+18665307414" className="text-blue-600 font-semibold">(866) 530‑7414</a> — we're available 24 hours a day, 7 days a week.
      </p>

      {/* Call Now Button */}
      <div className="text-center">
        <a
          href="tel:+18665307414"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-8 py-4 rounded-md"
        >
          CALL NOW
        </a>
      </div>
    </main>
  );
}
