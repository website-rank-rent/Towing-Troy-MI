// src/app/blog/winter-roadside-tips-troy/page.tsx
import Image from 'next/image';

export const metadata = {
  title: 'Winter Roadside Safety Tips for Troy, MI Drivers',
  description:
    'Stay safe this winter in Troy, Michigan with essential roadside tips. Learn how to handle icy roads, car breakdowns, and emergency towing during winter weather.',
};

export default function WinterRoadsideTipsTroyPage() {
  return (
    <div className="relative min-h-screen">
      <Image
        src="/winter-towing-troy.jpg"
        alt="Winter roadside assistance in Troy, Michigan"
        fill
        priority
        className="object-cover z-0"
      />

      <div className="relative z-10 bg-black/30 backdrop-blur-sm min-h-screen flex items-center justify-center px-4 py-20">
        <main className="max-w-3xl bg-black/80 text-white p-8 rounded-xl shadow-lg">
          <h1 className="text-4xl font-bold mb-6">Winter Roadside Safety Tips for Troy Drivers</h1>

          <p className="mb-4 text-lg">
            Winter in Troy, MI can be unpredictable. Snow, ice, and freezing temperatures can make driving on M-59, Rochester Road, and Big Beaver Road more hazardous. Being prepared is essential for your safety and the safety of your passengers.
          </p>

          <p className="mb-4 text-lg">
            Here are some practical tips to stay safe during winter driving:
          </p>

          <ul className="list-disc pl-6 mb-4 text-lg">
            <li>Keep an emergency kit in your vehicle with blankets, water, snacks, and a flashlight.</li>
            <li>Check tire pressure and tread before heading out, especially in icy conditions.</li>
            <li>Allow extra time for your commute; drive slowly and maintain a safe distance from other vehicles.</li>
            <li>Keep your phone charged and have a trusted local towing number handy.</li>
            <li>If you get stuck or stranded, stay in your vehicle and call a local Troy towing service immediately.</li>
            <li>Carry sand or kitty litter to help gain traction if your vehicle slides on ice.</li>
          </ul>

          <p className="mb-4 text-lg">
            Our Troy towing experts provide 24/7 emergency roadside assistance during winter storms, including jump starts, tire changes, lockouts, and towing. We know the area and can reach you quickly — whether you’re near Somerset Collection, Troy Civic Center, or along the M-59 corridor.
          </p>

          <p className="text-lg mb-8">
            Stay safe this winter. Call now for emergency roadside help in Troy, MI:{' '}
            <a href="tel:+18665307414" className="text-blue-400 font-semibold">
              (866) 530-7414
            </a>
          </p>
        </main>
      </div>
    </div>
  );
}
