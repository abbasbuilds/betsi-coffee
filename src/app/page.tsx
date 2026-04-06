import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { HoursStrip } from "@/components/HoursStrip";
import { Marquee } from "@/components/Marquee";
import { CoffeeFeature } from "@/components/CoffeeFeature";
import { Story } from "@/components/Story";
import { EthiopianBorder } from "@/components/EthiopianBorder";
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
      <CoffeeFeature />
      <Story />
      <EthiopianBorder id="tb-story-menu" />
      <Menu />
      <Reviews />
      <VisitUs />
      <FinalCTA />
      <Footer />
    </main>
  );
}
