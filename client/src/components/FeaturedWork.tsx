import { useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";
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

  return (
    <section className="relative bg-gray-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="font-serif font-bold text-4xl text-gray-100 text-center mb-16">
          Featured Work
        </h2>
        
        {/* Oversized Project Card */}
        <div 
          className={`relative bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl border border-gray-800 overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-navy/30 ${
            isMobile ? 'h-[60vh]' : 'h-screen max-h-[90vh]'
          }`}
          onClick={handleOpenDemo}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="button"
          aria-label="View Pixel Component Craft live demo"
        >
          {/* 3D Scene Container */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/20 to-gray-950/60">
            {!is3DLoaded ? (
              // Placeholder/Loading State
              <div className="h-full flex flex-col items-center justify-center">
                <div className="relative">
                  {/* Static preview or loading animation */}
                  <div className="w-64 h-64 bg-gradient-to-br from-navy/20 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="font-serif text-3xl text-gray-100 mb-4">
                        Pixel Component Craft
                      </h3>
                      <p className="text-gray-400 mb-8">Interactive 3D Factory Experience</p>
                      {isMobile && !is3DLoaded && (
                        <Button 
                          onClick={(e) => {
                            e.stopPropagation();
                            load3D();
                          }}
                          className="bg-navy text-gray-100 hover:bg-navy/90"
                        >
                          Load 3D Experience
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // 3D Spline Embed
              <div className="h-full w-full relative">
                {/* Spline or Three.js scene would go here */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center z-10">
                    <h3 className="font-serif text-4xl text-gray-100 mb-4 animate-fade-in">
                      Pixel Component Craft Factory
                    </h3>
                    <p className="text-gray-300 mb-2">Interactive 3D Experience</p>
                    <p className="text-sm text-gray-400">Click anywhere to explore</p>
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
          
          {/* CTA Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-gray-950 via-gray-950/90 to-transparent">
            <div className="text-center">
              <Button 
                className="group bg-navy text-gray-100 hover:bg-navy/90 hover:scale-105 transition-all duration-300 px-8 py-3"
                onClick={(e) => {
                  e.stopPropagation();
                  handleOpenDemo();
                }}
              >
                <span className="mr-2">View the live factory</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          
          {/* Accessibility Caption */}
          <figcaption className="sr-only">
            Animated factory assembling UI components into Petar Nikolić monogram. 
            Press Enter or click to view the live demo.
          </figcaption>
        </div>
      </div>
    </section>
  );
}