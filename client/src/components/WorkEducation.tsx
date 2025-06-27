import { useState, useEffect, useRef } from "react";
import { workExperience, education } from "@/data/portfolio";
import { Button } from "@/components/ui/button";

function CountUpNumber({ value, duration = 1000 }: { value: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const increment = numericValue / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= numericValue) {
              setCount(numericValue);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, [numericValue, duration]);
  
  return <span ref={ref}>{count}{value.replace(/[0-9]/g, '')}</span>;
}

export default function WorkEducation() {
  const [activeTab, setActiveTab] = useState<'work' | 'education'>('work');

  return (
    <section className="section-padding px-4 sm:px-6 lg:px-8 snap-section" data-section="work-education">
      <div className="max-w-4xl mx-auto">
        {/* Toggle Switch */}
        <div className="flex justify-center mb-12">
          <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-full p-1 border border-gray-700/50 shadow-lg">
            {/* Animated Background Pill with Spring */}
            <div 
              className={`absolute top-1 w-[calc(50%-4px)] h-[calc(100%-8px)] bg-gradient-to-r from-navy to-navy/80 rounded-full shadow-md transition-all duration-500 ${
                activeTab === 'work' ? 'left-1' : 'left-[calc(50%+2px)]'
              }`}
              style={{ transition: 'left 500ms var(--ease-spring)' }}
            />
            <Button
              onClick={() => setActiveTab('work')}
              variant="ghost"
              className={`relative z-10 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === 'work' 
                  ? 'text-gray-100 hover:bg-transparent' 
                  : 'text-gray-400 hover:text-gray-300 hover:bg-gray-700/30'
              }`}
            >
              Work
            </Button>
            <Button
              onClick={() => setActiveTab('education')}
              variant="ghost"
              className={`relative z-10 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === 'education' 
                  ? 'text-gray-100 hover:bg-transparent' 
                  : 'text-gray-400 hover:text-gray-300 hover:bg-gray-700/30'
              }`}
            >
              Education
            </Button>
          </div>
        </div>
        
        {/* Content Container */}
        <div className="relative">
          {/* Work Content */}
          {activeTab === 'work' && (
            <div className="animate-fade-in">
              <div className="max-w-2xl mx-auto">
                <div className="relative pl-8 border-l border-gray-700">
                  {workExperience.map((work, index) => (
                    <div key={work.id} className="relative">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-navy rounded-full border-4 border-gray-950"></div>
                      <div className="pb-8">
                        <div className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                          {work.startDate} – {work.endDate}
                        </div>
                        <h3 className="font-serif font-bold text-xl text-gray-100 mb-1">
                          {work.position}
                        </h3>
                        <p className="text-gray-400 text-sm mb-4">{work.description}</p>
                        {work.bullets && (
                          <div className="flex flex-wrap gap-4">
                            {work.bullets.map((bullet, idx) => (
                              <div key={idx} className="flex items-baseline gap-1 animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                                <span className="text-2xl font-bold text-navy">
                                  <CountUpNumber value={bullet.metric} duration={1500} />
                                </span>
                                <span className="text-xs text-gray-500 uppercase tracking-wider">{bullet.label}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {/* Education Content */}
          {activeTab === 'education' && (
            <div className="animate-fade-in">
              <div className="max-w-2xl mx-auto">
                <div className="relative pl-8 border-l border-gray-700">
                  {education.map((edu, index) => (
                    <div key={edu.id} className="relative">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-navy rounded-full border-4 border-gray-950"></div>
                      <div className="pb-8">
                        <div className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                          {edu.startDate} – {edu.endDate}
                        </div>
                        <h3 className="font-serif font-bold text-xl text-gray-100 mb-1">
                          {edu.degree}
                        </h3>
                        <p className="text-gray-400 text-sm mb-1">{edu.institution}</p>
                        <p className="text-gray-400 text-sm mb-4">{edu.description}</p>
                        {edu.bullets && (
                          <div className="flex flex-wrap gap-4">
                            {edu.bullets.map((bullet, idx) => (
                              <div key={idx} className="flex items-baseline gap-1 animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                                <span className="text-2xl font-bold text-navy">
                                  <CountUpNumber value={bullet.metric} duration={1500} />
                                </span>
                                <span className="text-xs text-gray-500 uppercase tracking-wider">{bullet.label}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}