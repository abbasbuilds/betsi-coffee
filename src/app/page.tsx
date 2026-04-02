import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { HoursStrip } from "@/components/HoursStrip";
import { Marquee } from "@/components/Marquee";
import { Story } from "@/components/Story";
import { Menu } from "@/components/Menu";
import { Reviews } from "@/components/Reviews";
import { VisitUs } from "@/components/VisitUs";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-brand-espresso">
      <Navbar />
      <Hero />
      <HoursStrip />
      <Marquee />
      <Story />
      <Menu />
      <Reviews />
      <VisitUs />
      <FinalCTA />
      <Footer />
    </main>
  );
}
