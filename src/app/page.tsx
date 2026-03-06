import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      {/* Temp spacing for scroll layout testing */}
      <div className="h-[50vh]"></div>
    </main>
  );
}
