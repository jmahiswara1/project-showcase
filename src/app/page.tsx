import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { HalftoneGrid } from "@/components/sections/halftone-grid";
import { About } from "@/components/sections/about";
import { ProjectsSection } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <HalftoneGrid />
      <About />
      <ProjectsSection />
      <Skills />
    </main>
  );
}
