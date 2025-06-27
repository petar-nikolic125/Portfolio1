import { useEffect, useRef, useState } from "react";
import { Mail, Github, ChevronDown } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { initializeAnimations } from "@/lib/animations";

export default function HeroEnhanced() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize all animations
    initializeAnimations();
    
    // Trigger hero animation after a small delay
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    // Handle keyboard shortcuts
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.ctrlKey || event.metaKey) return;
      
      switch(event.key.toLowerCase()) {
        case 'r':
          // Open resume
          window.open('/resume.pdf', '_blank');
          break;
        case 'g':
          // Open GitHub
          window.open(personalInfo.social.github, '_blank');
          break;
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    
    // Hide scroll hint on scroll
    const handleScroll = () => {
      if (window.scrollY > 50 && scrollHintRef.current) {
        scrollHintRef.current.style.opacity = '0';
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 overflow-hidden"
    >
      {/* Subtle neutral grain background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="parallax-layer-1 absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-muted/5" />
        <div className="parallax-layer-2 absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/3 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/3 rounded-full blur-3xl" />
        </div>
      </div>
      
      {/* Content */}
      <div className={`relative z-10 text-center max-w-4xl mx-auto transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        {/* Greeting with animation */}
        <p className="text-muted-foreground text-lg mb-4 animate-fade-slide-in">
          Hello, I'm
        </p>
        
        {/* Name with gradient and glow effect */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 relative">
          <span className="relative inline-block">
            <span className="text-foreground animate-text-stroke-glow">
              {personalInfo.name}
            </span>
            {/* Animated underline */}
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500 transform origin-left scale-x-0 animate-[mask-reveal_1s_ease-out_0.5s_forwards]" />
          </span>
        </h1>
        
        {/* Title with typing effect */}
        <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 animate-slide-up-fade stagger-1">
          {personalInfo.title}
        </h2>
        
        {/* Subtitle */}
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-slide-up-fade stagger-2">
          {personalInfo.subtitle}
        </p>
        
        {/* CTA Buttons with spring animations */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 animate-pop-in stagger-3">
          <a
            href={`mailto:${personalInfo.social.email}`}
            className="group relative px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-black/25"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Mail size={20} />
              Get in Touch
            </span>
            {/* Hover effect */}
            <div className="absolute inset-0 bg-accent transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          
          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-border text-muted-foreground rounded-lg font-medium transition-all duration-300 hover:border-accent hover:text-accent hover:scale-105 hover:shadow-lg hover:shadow-black/10"
          >
            <span className="flex items-center gap-2">
              <Github size={20} />
              View GitHub
            </span>
          </a>
        </div>
        
        {/* Keyboard shortcuts hint */}
        <div className="text-sm text-gray-500 animate-fade-slide-in stagger-4">
          Press <kbd className="px-2 py-1 bg-gray-800 rounded text-gray-400">R</kbd> for resume 
          or <kbd className="px-2 py-1 bg-gray-800 rounded text-gray-400 ml-2">G</kbd> for GitHub
        </div>
      </div>
      
      {/* Scroll hint arrow */}
      <div 
        ref={scrollHintRef}
        className="scroll-hint absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 transition-opacity duration-500"
      >
        <ChevronDown size={32} className="animate-pulse-hint" />
      </div>
      
      {/* Gradient mesh overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-50" />
      </div>
    </section>
  );
}