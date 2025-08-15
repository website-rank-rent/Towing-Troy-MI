// src/app/components/Footer.tsx

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-700 text-white text-center py-8 bg-black/80">
      <div className="mb-4 font-semibold">Proudly serving Troy and surrounding communities:</div>
      <ul className="flex flex-wrap justify-center gap-4 text-yellow-400 underline text-sm mb-6">
        <li><a href="/locations/big-beaver-road">Big Beaver Road</a></li>
        <li><a href="/locations/rochester-road">Rochester Road</a></li>
        <li><a href="/locations/maple-road">Maple Road</a></li>
        <li><a href="/locations/stephenson-highway">Stephenson Highway</a></li>
        <li><a href="/locations/crooks-road">Crooks Road</a></li>
        <li><a href="/locations/m-59-corridor">M-59 Corridor</a></li>
        <li><a href="/partners" className="text-sm text-gray-500 hover:underline">Business Partners</a></li>
      </ul>
      <p className="text-gray-400 text-xs">
        &copy; {new Date().getFullYear()} Troy Towing & Roadside. All rights reserved.
      </p>
    </footer>
  );
}
