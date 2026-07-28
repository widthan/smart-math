import Header from "@/components/layout/Header";
import Hero from "@/components/landing/Hero";
import About from "@/components/sections/About";
import Benefits from "@/components/sections/Benefits";
import Results from "@/components/sections/Results";
import Program from "@/components/sections/Program";
import Reviews from "@/components/sections/Reviews";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Benefits />
        <Results />
        <Program />
        <Reviews />
        <Contact />
      </main>
    </>
  );
}