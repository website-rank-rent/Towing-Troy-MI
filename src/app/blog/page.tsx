// src/app/blog/page.tsx
import Image from 'next/image';

export const metadata = {
  title: 'Dunwoody Towing Blog | Roadside Safety Tips & Local Advice',
  description: 'Browse helpful articles on car lockouts, towing tips, breakdown safety, and more from your local Dunwoody towing experts.',
};

export default function BlogPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <Image
        src="/towtruckpullingtruck.png"
        alt="Tow truck background"
        fill
        priority
        className="object-cover z-0"
      />

      {/* Overlay */}
      <div className="relative z-10 bg-black/30 backdrop-blur-sm min-h-screen flex items-center justify-center px-4 py-20">
        <main className="max-w-3xl bg-black/80 text-white p-8 rounded-xl shadow-lg">
          <h1 className="text-4xl font-bold mb-6">Towing &amp; Roadside Tips</h1>

          <p className="mb-6 text-lg">
            Welcome to the Dunwoody Towing blog. Whether you&apos;re dealing with a roadside emergency or just want to be prepared, our articles are here to help.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-blue-400 text-lg">
            <li>
              <a href="/blog/car-lockout" className="hover:underline">
                Locked Out of Your Car in Dunwoody? Here&apos;s What To Do
              </a>
            </li>
            <li>
              <a href="/blog/towing-tips" className="hover:underline">
                5 Towing Tips Every Driver Should Know
              </a>
            </li>
            <li>
              <a href="/blog/car-breakdown" className="hover:underline">
                What To Do When Your Car Breaks Down
              </a>
            </li>
          </ul>

          <p className="mt-8 text-lg">
            Have a question or need immediate help? Call us now at{' '}
            <a href="tel:+18665307414" className="text-blue-400 font-semibold">
              (866) 530-7414
            </a>
            .
          </p>
        </main>
      </div>
    </div>
  );
}
