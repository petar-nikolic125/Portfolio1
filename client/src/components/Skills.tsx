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
    <section ref={sectionRef} className="section-padding px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif font-bold text-4xl text-foreground text-center mb-16 animate-mask-reveal">Skills</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skillsByCategory).map(([category, skills], categoryIdx) => (
            <div key={category} className="text-center">
              <h3 className="font-sans font-semibold text-lg text-foreground mb-4 tracking-wide">
                {category}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {skills.map((skill, skillIdx) => {
                  const totalIdx = categoryIdx * skills.length + skillIdx;
                  const angle = (totalIdx / Object.values(skillsByCategory).flat().length) * 360;
                  const delay = totalIdx * 20;
                  
                  return (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className={`px-3 py-1.5 bg-gray-800 text-gray-300 rounded border border-gray-700 text-xs font-medium hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gray-900/20 transition-all duration-300 cursor-default ${
                        isVisible ? 'animate-radial-burst' : 'opacity-0'
                      }`}
                      style={{
                        animationDelay: `${delay}ms`,
                        '--burst-angle': `${angle}deg`,
                      } as React.CSSProperties}
                    >
                      {skill}
                    </Badge>
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
