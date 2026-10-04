import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { BuildsSection } from "@/components/sections/BuildsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { MomentsSection } from "@/components/sections/MomentsSection";
import { EcosystemSection } from "@/components/sections/EcosystemSection";
import { ToolboxSection } from "@/components/sections/ToolboxSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <BuildsSection />
        <ExperienceSection />
        <MomentsSection />
        <EcosystemSection />
        <ToolboxSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
