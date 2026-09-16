import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import OpenSource from "@/components/OpenSource";
import Currently from "@/components/Currently";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="max-w-[1100px] mx-auto px-5 md:px-8">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Work />
      <OpenSource />
      <Currently />
      <Contact />
    </main>
  );
}
