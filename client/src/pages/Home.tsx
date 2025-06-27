import HeroEnhanced from "@/components/HeroEnhanced";
import WorkEducationEnhanced from "@/components/WorkEducationEnhanced";
import Skills from "@/components/Skills";
import ProjectsEnhanced from "@/components/ProjectsEnhanced";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function Home() {

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 relative">
      {/* Progress indicator */}
      <div className="fixed right-0 top-0 w-1 h-full bg-gray-900 z-50">
        <div 
          className="w-full bg-gradient-to-b from-navy to-blue-600 transition-transform duration-300 origin-top"
          style={{
            transform: 'scaleY(var(--scroll-progress, 0))',
          }}
        />
      </div>
      
      <HeroEnhanced />
      <WorkEducationEnhanced />
      <Skills />
      <ProjectsEnhanced />
      <Footer />
    </div>
  );
}
