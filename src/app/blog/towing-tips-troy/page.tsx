import Image from 'next/image';

export const metadata = {
  title: '5 Essential Towing Tips for Troy, Michigan Drivers',
  description:
    'Learn essential towing and roadside safety tips for Troy drivers. From flatbed towing to emergency procedures, stay prepared on the road.',
};

export default function TowingTipsTroyPage() {
  return (
    <div className="relative min-h-screen">
      <Image
        src="/towtruck-tips-troy.jpg"
        alt="Tow truck in Troy assisting a vehicle"
        fill
        priority
        className="object-cover z-0"
      />

      <div className="relative z-10 bg-black/30 backdrop-blur-sm min-h-screen flex items-center justify-center px-4 py-20">
        <main className="max-w-3xl bg-black/80 text-white p-8 rounded-xl shadow-lg">
          <h1 className="text-4xl font-bold mb-6">5 Towing Tips Every Troy Driver Should Know</h1>

          <p className="mb-4 text-lg">
            Whether you’re driving along Rochester Road or commuting on M-59, being prepared for a breakdown or towing situation is crucial.
          </p>

          <ul className="list-disc pl-6 mb-4 text-lg">
            <li>Always keep your insurance and roadside assistance info handy</li>
            <li>Use a reputable Troy towing service for safety and fast response</li>
            <li>Secure loose items in your vehicle before towing</li>
            <li>Communicate clearly with the tow operator about your car’s condition</li>
            <li>Stay inside a safe location, away from traffic, until help arrives</li>
          </ul>

          <p className="mb-4 text-lg">
            Following these tips ensures a smooth and safe towing experience, whether it’s a short tow across town or a longer trip along the Troy corridor.
          </p>

          <p className="text-lg mb-8">
            Call now for trusted towing in Troy, MI:{' '}
            <a href="tel:+18665307414" className="text-blue-400 font-semibold">
              (866) 530-7414
            </a>
          </p>
        </main>
      </div>
    </div>
  );
}
