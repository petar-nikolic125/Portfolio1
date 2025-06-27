import HeroEnhanced from "@/components/HeroEnhanced";
import Timeline from "@/components/Timeline";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function Home() {

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Progress indicator */}
      <div className="fixed right-0 top-0 w-1 h-full bg-muted z-50">
        <div 
          className="w-full bg-gradient-to-b from-accent to-primary transition-transform duration-300 origin-top"
          style={{
            transform: 'scaleY(var(--scroll-progress, 0))',
          }}
        />
      </div>
      
      <HeroEnhanced />
      <Timeline />
      <ProjectsShowcase />
      <Skills />
      <Footer />
    </div>
  );
}
