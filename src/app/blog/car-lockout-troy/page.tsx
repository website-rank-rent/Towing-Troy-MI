import Image from 'next/image';

export const metadata = {
  title: 'Locked Out in Troy, MI? Quick Tips to Regain Vehicle Access',
  description:
    'Tips for safely handling car lockouts in Troy, Michigan. Learn how to stay calm, secure your vehicle, and get fast roadside help.',
};

export default function CarLockoutTroyPage() {
  return (
    <div className="relative min-h-screen">
      <Image
        src="/car-lockout-troy.jpg"
        alt="Car lockout assistance in Troy"
        fill
        priority
        className="object-cover z-0"
      />

      <div className="relative z-10 bg-black/30 backdrop-blur-sm min-h-screen flex items-center justify-center px-4 py-20">
        <main className="max-w-3xl bg-black/80 text-white p-8 rounded-xl shadow-lg">
          <h1 className="text-4xl font-bold mb-6">Locked Out in Troy? Stay Safe & Get Help Fast</h1>

          <p className="mb-4 text-lg">
            Car lockouts happen to everyone. Whether you left your keys inside a restaurant parking lot on Big Beaver Road or locked them in your vehicle near Troy City Center, staying calm is the first step.
          </p>

          <p className="mb-4 text-lg">
            Avoid trying to force entry, as this may damage your car. Instead:
          </p>

          <ul className="list-disc pl-6 mb-4 text-lg">
            <li>Check for unlocked doors or trunk access</li>
            <li>Call a local towing or roadside assistance service in Troy</li>
            <li>Use a spare key or keyless entry app if available</li>
            <li>Stay in a safe, well-lit area until help arrives</li>
          </ul>

          <p className="mb-4 text-lg">
            Our Troy towing experts provide fast, reliable lockout service 24/7. Don’t let a small mishap ruin your day — help is only a call away.
          </p>

          <p className="text-lg mb-8">
            Call us now for immediate lockout assistance in Troy, MI:{' '}
            <a href="tel:+18665307414" className="text-blue-400 font-semibold">
              (866) 530-7414
            </a>
          </p>
        </main>
      </div>
    </div>
  );
}
