import { useState, useEffect } from "react";
import { ExternalLink, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FeaturedWork() {
  const [is3DLoaded, setIs3DLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Lazy load 3D content on desktop or after user interaction on mobile
    if (!isMobile) {
      setIs3DLoaded(true);
    }
    
    return () => window.removeEventListener('resize', checkMobile);
  }, [isMobile]);

  const handleOpenDemo = () => {
    window.open('https://pixel-component-craft.vercel.app/', '_blank');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleOpenDemo();
    }
  };

  const load3D = () => {
    setIs3DLoaded(true);
  };

  const scrollToNext = () => {
    const nextSection = document.querySelector('[data-section="work-education"]');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gray-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="font-serif font-bold text-4xl text-gray-100 text-center mb-8">
          Featured Work
        </h2>
        
        {/* Responsive Project Card */}
        <div 
          className={`relative bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl border border-gray-800 overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-navy/30 ${
            isMobile ? 'h-[35vh] min-h-[280px]' : 'h-[60vh] max-h-[500px]'
          }`}
          onClick={handleOpenDemo}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="button"
          aria-label="View interactive 3D experience"
        >
          {/* Reduced Gradient Overlay - Only 20% of card height */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-950/60" style={{ background: 'linear-gradient(to bottom, transparent 80%, rgba(3, 7, 18, 0.6) 100%)' }}>
            {!is3DLoaded ? (
              // Placeholder/Loading State with tighter spacing
              <div className="h-full flex flex-col items-center justify-center px-4">
                <div className="relative">
                  {/* Static preview */}
                  <div className="w-48 h-48 bg-gradient-to-br from-navy/20 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-3">
                      <h3 className="font-serif text-2xl sm:text-3xl text-gray-100">
                        Interactive 3D Experience
                      </h3>
                      <p className="text-gray-400 text-sm">Real-time component assembly</p>
                      {isMobile && !is3DLoaded && (
                        <Button 
                          onClick={(e) => {
                            e.stopPropagation();
                            load3D();
                          }}
                          className="bg-navy text-gray-100 hover:bg-navy/90 mt-4"
                        >
                          Load Experience
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // 3D Scene with tighter content spacing
              <div className="h-full w-full relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center z-10 space-y-2">
                    <h3 className="font-serif text-2xl sm:text-3xl text-gray-100 animate-fade-in">
                      Interactive 3D Experience
                    </h3>
                    <p className="text-gray-300 text-sm">Real-time component assembly</p>
                    <p className="text-xs text-gray-400">Click anywhere to explore</p>
                  </div>
                </div>
                
                {/* Animated elements placeholder */}
                <div className="absolute inset-0">
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-navy/30 to-transparent rounded-lg transform rotate-45 animate-float"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-transparent rounded-lg transform -rotate-12 animate-float delay-1000"></div>
                  <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-gradient-to-br from-blue-500/25 to-transparent rounded-lg transform rotate-90 animate-float delay-2000"></div>
                </div>
              </div>
            )}
          </div>
          
          {/* CTA positioned in visible area */}
          <div className="absolute bottom-4 left-0 right-0 px-6">
            <div className="text-center">
              <Button 
                className="group bg-navy text-gray-100 hover:bg-navy/90 hover:scale-105 transition-all duration-300 px-6 py-2"
                onClick={(e) => {
                  e.stopPropagation();
                  handleOpenDemo();
                }}
              >
                <span className="mr-2">View live demo</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          
          {/* Accessibility Caption */}
          <figcaption className="sr-only">
            Interactive 3D experience showcasing real-time component assembly. 
            Press Enter or click to view the live demo.
          </figcaption>
        </div>

        {/* Scroll hint arrow */}
        <div className="flex justify-center mt-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToNext}
            className="text-gray-500 hover:text-gray-300 transition-colors duration-300 flex items-center space-x-2"
            aria-label="Scroll to next section"
          >
            <span className="text-xs uppercase tracking-wider">Continue</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </Button>
        </div>
      </div>
    </section>
  );
}