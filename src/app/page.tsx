// src/app/page.tsx
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import ServicesTeaser from "./components/ServicesTeaser";
import TestimonialSection from "./components/TestimonialSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <Hero />
      <ServicesTeaser />
      <TestimonialSection />
      <Contact />

      {/* Partner backlink block */}
      <div className="mt-8 border-t pt-4 text-center text-sm text-gray-500">
        Partner:{" "}
        <a
          href="https://example.com/"
          rel="nofollow sponsored noopener"
          target="_blank"
          className="underline"
        >
          Example Service
        </a>
      </div>

      <Footer />
    </>
  );
}
