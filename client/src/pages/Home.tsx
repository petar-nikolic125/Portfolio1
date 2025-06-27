import Hero from "@/components/Hero";
import WorkEducation from "@/components/WorkEducation";
import Skills from "@/components/Skills";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Add scroll snap to body
    document.documentElement.style.scrollSnapType = 'y mandatory';
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Scroll progress tracking
    const updateScrollProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = window.scrollY / scrollHeight;
      document.documentElement.style.setProperty('--scroll-progress', scrollProgress.toString());
    };
    
    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress();
    
    return () => {
      document.documentElement.style.scrollSnapType = '';
      document.documentElement.style.scrollBehavior = '';
      window.removeEventListener('scroll', updateScrollProgress);
    };
  }, []);

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
      
      <Hero />
      <WorkEducation />
      <Skills />
      <ProjectsShowcase />
      <Footer />
    </div>
  );
}
