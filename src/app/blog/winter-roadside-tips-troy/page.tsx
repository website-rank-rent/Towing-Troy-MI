// src/app/blog/winter-roadside-tips-troy/page.tsx

export const metadata = {
  title: 'Winter Roadside Safety Tips for Troy, MI Drivers',
  description:
    'Stay safe during winter in Troy, Michigan. Learn essential tips for icy roads, vehicle breakdowns, and emergency towing with our local Troy roadside guide.',
};

export default function WinterRoadsideTipsTroyPage() {
  return (
    <main className="px-6 py-12 max-w-3xl mx-auto text-gray-800 bg-white min-h-screen">
      <h1 className="text-4xl font-bold mb-6">Winter Roadside Safety Tips for Troy Drivers</h1>

      <p className="mb-4 text-lg">
        Winter in Troy, MI brings snow, ice, and freezing temperatures that can make driving on Big Beaver Road, M-59, and Rochester Road more dangerous. Preparing your vehicle and knowing what to do in an emergency can keep you and your passengers safe.
      </p>

      <p className="mb-4 text-lg">
        Follow these practical tips for safe winter driving:
      </p>

      <ul className="list-disc pl-6 mb-4 text-lg">
        <li>Keep a winter emergency kit in your car: blankets, water, snacks, flashlight, and extra gloves.</li>
        <li>Check tire tread depth and pressure before every winter drive.</li>
        <li>Drive slower than usual and maintain extra distance from other vehicles on snow or ice.</li>
        <li>Keep your phone charged and have a local Troy towing number saved for emergencies.</li>
        <li>If stranded, stay inside your vehicle and call for help immediately.</li>
        <li>Carry sand, kitty litter, or traction mats to help if your car slips on ice.</li>
      </ul>

      <p className="mb-4 text-lg">
        Our Troy towing team is available 24/7 for winter emergencies, including jump starts, tire changes, lockouts, and towing services. We know Troy’s roads and can respond quickly — whether you’re near Somerset Collection, Troy Civic Center, or along the M-59 corridor.
      </p>

      <p className="text-lg mb-8">
        Stay prepared this winter. Call our local Troy roadside assistance now:{" "}
        <a href="tel:+18665307414" className="text-blue-600 font-semibold">
          (866) 530-7414
        </a>
      </p>
    </main>
  );
}
