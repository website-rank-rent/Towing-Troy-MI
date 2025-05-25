export const metadata = {
  title: "Towing Services in [City Name] | Roadside Assistance & More",
  description: "Explore our full range of towing and roadside services available in [City]. Emergency towing, flatbed, lockouts, jumpstarts and more — available 24/7.",
};

export default function ServicesPage() {
  return (
    <main
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white px-6 py-16"
      style={{ backgroundImage: "url('/about-bg.jpg')" }}
    >
      <div className="max-w-3xl mx-auto bg-black/60 backdrop-blur-md p-8 rounded-lg">
        <h1 className="text-4xl font-bold mb-6">Our Towing & Roadside Services in [City Name]</h1>

        <p className="mb-4 text-lg">
          Looking for <strong>tow truck services near me</strong> in <strong>[City Name]</strong>? You're in the right place. We provide 24/7 emergency and scheduled towing solutions to keep you moving.
        </p>

        <p className="mb-4 text-lg">Here’s what we offer:</p>

        <ul className="list-disc pl-6 mb-4 text-lg">
          <li><strong>24/7 Emergency Towing</strong> — Immediate dispatch for breakdowns and accidents</li>
          <li><strong>Flatbed Towing</strong> — Secure transport for low-clearance, exotic, or disabled vehicles</li>
          <li><strong>Roadside Assistance</strong> — Tire changes, fuel delivery, jumpstarts, and minor repairs</li>
          <li><strong>Battery Jumpstart Service</strong> — Fast starts when your car won’t turn over</li>
          <li><strong>Lockout Service</strong> — Get back in your car quickly without damage</li>
          <li><strong>Accident Recovery</strong> — We handle cleanup and towing from any scene</li>
          <li><strong>Long-Distance Towing</strong> — Need to tow a vehicle across counties or out of town? We can help.</li>
        </ul>

        <p className="mb-4 text-lg">
          Whether you're stuck on the side of the road or need scheduled vehicle transport, our licensed and insured team is here to help — fast.
        </p>

        <p className="text-lg mb-8">
          For immediate help or a free quote, call <a href="tel:+18665307414" className="text-blue-400 font-semibold">(866) 530‑7414</a>. Your trusted <strong>[City Name]</strong> towing company.
        </p>

        <div className="text-center">
          <a
            href="tel:+18665307414"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-8 py-4 rounded-md"
          >
            CALL NOW
          </a>
        </div>
      </div>
    </main>
  );
}
