// src/app/page.tsx
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
//import ServicesTeaser from "./components/ServicesTeaser";
import TestimonialSection from "./components/TestimonialSection";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      {/* <ServicesTeaser /> */}
      <TestimonialSection />
      <Contact/>
      
    </>
  );
}
