import Image from 'next/image';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Towing Near Perimeter Center | Fast Tow Truck in Dunwoody',
  description:
    'Need towing at Perimeter Center? We provide fast, reliable service near Perimeter Mall, Ravinia, and the Dunwoody MARTA station. Call now for 24/7 help.',
};

export default function PerimeterCenterPage() {
  return (
    <div>
    <div className="relative min-h-screen">
      {/* Background image */}
      <Image
        src="/towtruckpullingtruck.png"
        alt="Towing service near Perimeter Center"
        fill
        priority
        className="object-cover z-0"
      />

      {/* Overlayed content */}
      <div className="relative z-10 bg-black/30 backdrop-blur-sm min-h-screen flex items-center justify-center px-4 py-20">
        <main className="max-w-3xl bg-black/80 text-white p-8 rounded-xl shadow-lg">
          <h1 className="text-4xl font-bold mb-6">
            Emergency Towing in Perimeter Center – Dunwoody, GA
          </h1>

          <p className="mb-4 text-lg">
            If you're stuck near Perimeter Mall, Ravinia, or one of the many office towers in Perimeter Center, we’ve got a truck close by and ready to assist — day or night.
          </p>

          <p className="mb-4 text-lg">
            This area is one of the busiest in Dunwoody, especially during rush hour. Whether your battery died in a parking deck or you’re stuck at a traffic light, we respond fast.
          </p>

          <ul className="list-disc pl-6 mb-4 text-lg">
            <li>24/7 towing near Perimeter Mall and Hammond Exchange</li>
            <li>Jump starts, tire service, lockout help, and fuel delivery</li>
            <li>Flatbed towing for breakdowns and accident response</li>
            <li>Fast arrival to MARTA, Crowne Plaza, and surrounding hotels</li>
          </ul>

          <p className="mb-4 text-lg">
            Perimeter Center is a dense, high-traffic zone — our drivers are based nearby so you’re never waiting long for a tow or roadside solution.
          </p>

          <p className="text-lg mb-8">
            Need help right now? Call our local dispatch at{" "}
            <a href="tel:+18665307414" className="text-blue-400 font-semibold">
              (866) 530-7414
            </a>{" "}
            for immediate assistance.
          </p>

          <div className="text-center">
            <a
              href="tel:+18665307414"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-8 py-4 rounded-md"
            >
              CALL NOW
            </a>
          </div>
        </main>
      </div>

     
    </div>
    <Footer />
    </div>
  );
}
