import Image from 'next/image';

export const metadata = {
  title: 'What To Do When Your Car Breaks Down in Troy, MI',
  description:
    'Step-by-step guide for handling car breakdowns in Troy, Michigan. Learn how to stay safe and get quick roadside assistance.',
};

export default function CarBreakdownTroyPage() {
  return (
    <div className="relative min-h-screen">
      <Image
        src="/car-breakdown-troy.jpg"
        alt="Broken down car on Troy road"
        fill
        priority
        className="object-cover z-0"
      />

      <div className="relative z-10 bg-black/30 backdrop-blur-sm min-h-screen flex items-center justify-center px-4 py-20">
        <main className="max-w-3xl bg-black/80 text-white p-8 rounded-xl shadow-lg">
          <h1 className="text-4xl font-bold mb-6">Car Breakdowns in Troy? Stay Calm & Act Fast</h1>

          <p className="mb-4 text-lg">
            Breakdowns can happen anywhere, from M-59 to Big Beaver Road. The first step is always safety: pull over to the shoulder, turn on hazard lights, and stay inside your vehicle if possible.
          </p>

          <p className="mb-4 text-lg">
            Next, assess the situation:
          </p>

          <ul className="list-disc pl-6 mb-4 text-lg">
            <li>Check for obvious issues like flat tires or dead battery</li>
            <li>Call a trusted local towing or roadside assistance service</li>
            <li>Avoid attempting unsafe repairs on busy roads</li>
            <li>Stay visible to other drivers and keep your passengers safe</li>
          </ul>

          <p className="mb-4 text-lg">
            Our Troy towing team is available 24/7 to provide emergency towing, jump starts, lockout service, and more — fast, safe, and professional.
          </p>

          <p className="text-lg mb-8">
            Call now for immediate help in Troy, MI:{' '}
            <a href="tel:+18665307414" className="text-blue-400 font-semibold">
              (866) 530-7414
            </a>
          </p>
        </main>
      </div>
    </div>
  );
}
