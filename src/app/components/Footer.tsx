// src/app/components/Footer.tsx

export default function Footer() {
    return (
      <footer className="mt-16 border-t border-gray-700 text-white text-center py-8 bg-black/80">
        <div className="mb-4 font-semibold">We also service nearby areas:</div>
        <ul className="flex flex-wrap justify-center gap-4 text-blue-400 underline text-sm mb-6">
          <li><a href="/hammond-drive-road">Hammond Drive</a></li>
          <li><a href="/ashford-dunwoody-road">Ashford Dunwoody Rd</a></li>
          <li><a href="/chamblee-dunwoody-road">Chamblee Dunwoody Rd</a></li>
          <li><a href="/roswell-road">Roswell Road</a></li>
          <li><a href="/perimeter-center">Perimeter Center</a></li>
          <li><a href="/mount-vernon-road">Mount Vernon Road</a></li>
        </ul>
        <p className="text-gray-400 text-xs">&copy; {new Date().getFullYear()} Your Towing Company. All rights reserved.</p>
      </footer>
    );
  }
  