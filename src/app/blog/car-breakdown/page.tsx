// src/app/blog/car-breakdown/page.tsx

export const metadata = {
    title: "What To Do When Your Car Breaks Down | Dunwoody Towing",
    description:
      "If your car breaks down in Dunwoody, here's what to do next. Learn how to stay safe and get help fast with our simple roadside guide.",
  };
  
  export default function CarBreakdownPost() {
    return (
      <main className="px-6 py-12 max-w-3xl mx-auto text-gray-800">
        <h1 className="text-4xl font-bold mb-2">
          What To Do When Your Car Breaks Down
        </h1>
  
        {/* ✅ Static published date — safe for hydration */}
        <p className="text-sm text-gray-500 mb-6">Published on 2025-06-30</p>
  
        <p className="mb-4">
          Your car just died — maybe on the highway, in a neighborhood, or right at a red light. Don’t panic. Breakdowns happen, and what you do in the next few minutes can keep you safe and save you time.
        </p>
  
        <h2 className="text-2xl font-semibold mt-8 mb-2">
          1. Get to Safety If You Can
        </h2>
        <p className="mb-4">
          If the car is still rolling, try to coast onto the shoulder or into a nearby parking lot. Use your signals and steer gently to avoid blocking traffic. If the engine dies in place, turn on your hazard lights immediately.
        </p>
  
        <h2 className="text-2xl font-semibold mt-8 mb-2">2. Stay Visible</h2>
        <p className="mb-4">
          Hazard lights are a must. If it’s nighttime or raining, keep your lights on. If you have road flares or a reflective triangle, set them up behind the car to alert oncoming drivers.
        </p>
  
        <h2 className="text-2xl font-semibold mt-8 mb-2">
          3. Stay Inside If You’re in a Dangerous Area
        </h2>
        <p className="mb-4">
          If you're on a busy road or highway, it’s safer to stay inside the vehicle with your seatbelt on. Getting out near traffic can be extremely dangerous unless you’re in a low-traffic or safe spot.
        </p>
  
        <h2 className="text-2xl font-semibold mt-8 mb-2">4. Call for Help</h2>
        <p className="mb-4">
          Whether it’s a flat tire, engine trouble, or something unknown, calling a towing service is usually the safest bet.{" "}
          <strong>Dunwoody Towing</strong> offers 24/7 roadside assistance and will get you off the road quickly.
        </p>
  
        <p className="mb-4">
          <strong>Need help now?</strong>{" "}
          <a href="tel:+18665307414" className="text-blue-600 font-semibold">
            (866) 530-7414
          </a>
        </p>
  
        <h2 className="text-2xl font-semibold mt-8 mb-2">
          5. Don’t Accept Rides from Strangers
        </h2>
        <p className="mb-4">
          It’s better to wait for a trusted towing company or someone you know. Unfortunately, scammers and unsafe situations can arise when accepting rides from strangers.
        </p>
  
        <h2 className="text-2xl font-semibold mt-8 mb-2">
          6. Have a Plan for Next Time
        </h2>
        <p className="mb-4">
          Keep a roadside emergency kit in your trunk. Include water, jumper cables, a phone charger, flashlight, and basic tools. And most importantly — save our number in your phone before you need it.
        </p>
  
        <p className="mt-8 text-gray-600 italic">
          Dunwoody Towing — fast, friendly, and right around the corner when your day doesn't go as planned.
        </p>
      </main>
    );
  }
  