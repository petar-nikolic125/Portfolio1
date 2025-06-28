import { skillsByCategory } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { useEffect, useRef, useState } from "react";

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="section-pad px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="w-full">
        <h2 className="font-serif font-bold text-4xl fg-base text-center mb-16 fade-in-up">
          <span className="shimmer-text">Skills</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skillsByCategory).map(([category, skills], categoryIdx) => (
            <div key={category} className={`text-center fade-in-up delay-${categoryIdx * 75}`}>
              <h3 className="font-sans font-semibold text-lg fg-base mb-4 tracking-wide group-hover:text-[hsl(var(--accent-from))] transition-colors duration-300">
                {category}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {skills.map((skill, skillIdx) => {
                  const totalIdx = categoryIdx * skills.length + skillIdx;
                  const angle = (totalIdx / Object.values(skillsByCategory).flat().length) * 360;
                  const delay = totalIdx * 20;
                  
                  // Rotate through chip colors
                  const chipColors = ['chip-blue', 'chip-lime', 'chip-amber', 'chip-fuchsia', 'chip-cyan'];
                  const colorClass = chipColors[totalIdx % chipColors.length];
                  
                  return (
                    <span
                      key={skill}
                      className={`chip ${colorClass} hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[hsl(var(--black-900)/.55)] transition-all cursor-default ${
                        isVisible ? 'animate-radial-burst' : 'opacity-0'
                      }`}
                      style={{
                        animationDelay: `${delay}ms`,
                        '--burst-angle': `${angle}deg`,
                      } as React.CSSProperties}
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
