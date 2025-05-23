// src/app/page.tsx
import Header from "./components/Header";
import Hero from "./components/Hero";
import ServicesTeaser from "./components/ServicesTeaser";

export default function Home() {
  return (
    <>
      {/* 1. Nav overlaid on the hero */}
      <Header />

      {/* 2. Full‑screen hero */}
      <Hero />

      {/* 3. Teaser section below */}
      <ServicesTeaser />
    </>
  );
}
