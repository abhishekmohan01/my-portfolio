import { ParticleBackground } from "@/components/ParticleBackground";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { AISkills } from "@/components/AISkills";
import { Projects } from "@/components/Projects";
import { Certificates } from "@/components/Certificates";
import { SocialFootprints } from "@/components/SocialFootprints";
import { Vision } from "@/components/Vision";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      {/* Animated Background */}
      <ParticleBackground />

      {/* Main Layout */}
      <div className="relative z-10">
        <Navigation />
        
        <main>
          <Hero />
          <About />
          <AISkills />
          <Experience />
          <Education />
          <Projects />
          <Certificates />
          <SocialFootprints />
          <Vision />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}
