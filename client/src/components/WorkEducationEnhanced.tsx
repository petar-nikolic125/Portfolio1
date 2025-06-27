import { useState, useEffect, useRef } from "react";
import { Briefcase, GraduationCap, ExternalLink, Download } from "lucide-react";
import { countUp, createAnimationObserver } from "@/lib/animations";

function CountUpNumber({ 
  value, 
  duration = 1000,
  onComplete 
}: { 
  value: string; 
  duration?: number;
  onComplete?: () => void;
}) {
  const elementRef = useRef<HTMLSpanElement>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (!elementRef.current) return;
    
    const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
    const suffix = value.replace(/[0-9]/g, '');
    
    cleanupRef.current = countUp(elementRef.current, 0, numericValue, duration, suffix);
    
    if (onComplete) {
      setTimeout(onComplete, duration);
    }
    
    return () => {
      if (cleanupRef.current) {
        cleanupRef.current();
      }
    };
  }, [value, duration, onComplete]);

  return <span ref={elementRef} data-count-up={value}>0{value.replace(/[0-9]/g, '')}</span>;
}

export default function WorkEducationEnhanced() {
  const [activeTab, setActiveTab] = useState<"work" | "education">("work");
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize intersection observers
    const workObserver = createAnimationObserver('.work-list', 'animate-fade-slide-in');
    const eduObserver = createAnimationObserver('.education-list', 'animate-slide-up-fade');
    
    return () => {
      workObserver.disconnect();
      eduObserver.disconnect();
    };
  }, []);

  const handleTabSwitch = (tab: "work" | "education") => {
    if (tab === activeTab || isAnimating) return;
    
    setIsAnimating(true);
    setActiveTab(tab);
    
    // Reset animation state after transition
    setTimeout(() => setIsAnimating(false), 600);
  };

  // Enhanced work data with specific details from the brief
  const enhancedWorkExperience = [
    {
      title: "Website Display",
      description: "Full-stack interactive website showcase with 3D elements",
      link: "https://pixel-component-craft.vercel.app/",
      badge: "Live Site",
      metrics: ["98 Lighthouse", "60fps animations", "PWA ready"],
      technologies: ["React", "Three.js", "Tailwind", "TypeScript"]
    },
    {
      title: "Slick Shopify App",
      description: "Progressive Web App with exceptional user ratings",
      metrics: ["4.9★ rating", "$120K MRR", "15K active users"],
      technologies: ["Shopify API", "React Native", "GraphQL", "Redis"]
    },
    {
      title: "Ultra-Responsive E-Tail",
      description: "Mobile-first e-commerce platform with outstanding performance",
      metrics: ["98 mobile score", "+25% CSAT", "2s load time"],
      technologies: ["Next.js", "Stripe", "Vercel", "Prisma"]
    },
    {
      title: "On-Demand Booking",
      description: "Real-time booking system with WebSocket integration",
      metrics: ["WebSocket feed", "15K DAU", "<100ms latency"],
      technologies: ["Socket.io", "Node.js", "PostgreSQL", "Docker"]
    },
    {
      title: "Custom CMS Dashboard",
      description: "Enterprise content management with advanced analytics",
      metrics: ["d3.js charts", "1M rps", "99.9% uptime"],
      technologies: ["D3.js", "Express", "MongoDB", "Kubernetes"]
    }
  ];

  // Enhanced education data from the brief
  const enhancedEducation = [
    {
      title: "OOP App Suite",
      description: "JavaFX & Swing modules with comprehensive testing",
      details: "95% test coverage, MVC architecture, design patterns",
      link: null
    },
    {
      title: "Kernel Extensions",
      description: "xv6 shared memory implementation with syscalls",
      details: "+18% throughput improvement, custom memory allocator",
      link: null
    },
    {
      title: "AI in Medicine",
      description: "Multifractal analysis research in medical imaging",
      details: "Robotics + nanotech applications, published research",
      link: "/whitepaper.pdf",
      linkText: "View PDF"
    },
    {
      title: "Design Patterns Framework",
      description: "Interactive UML diagram generator and validator",
      details: "Live demos, dynamic class diagrams, pattern detection",
      link: null
    },
    {
      title: "Psychotherapy Scheduler",
      description: "Full-stack healthcare appointment system",
      details: "JavaFX UI, MySQL/JDBC backend, ACID compliance, HIPAA ready",
      link: null
    }
  ];

  return (
    <section className="py-[var(--section-padding)] px-4 md:px-8 lg:px-16 max-w-6xl mx-auto">
      {/* Animated Pill Toggle */}
      <div className="flex justify-center mb-12">
        <div 
          className="relative bg-navy-900/50 backdrop-blur-sm rounded-full p-1 inline-flex shadow-[inset_0_1px_2px_rgba(0,0,0,0.5),0_1px_0_rgba(255,255,255,0.1)]"
        >
          {/* Animated background pill with gradient */}
          <div 
            className={`toggle-knob absolute inset-y-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full shadow-[0_2px_8px_rgba(99,102,241,0.4),0_0_20px_rgba(99,102,241,0.2)] ${
              activeTab === "education" ? 'toggle-active' : ''
            }`}
            style={{
              width: 'calc(50% - 4px)',
              left: '2px',
            }}
          />
          
          {/* Toggle buttons with enhanced interaction */}
          <button
            onClick={() => handleTabSwitch("work")}
            className={`relative z-10 px-8 py-3 rounded-full font-medium transition-all duration-300 ${
              activeTab === "work" 
                ? "text-white scale-105" 
                : "text-gray-400 hover:text-gray-200 hover:scale-102"
            }`}
          >
            <div className="flex items-center gap-2">
              <Briefcase size={18} className={activeTab === "work" ? "animate-bounce-twist" : ""} />
              <span>Work</span>
            </div>
          </button>
          
          <button
            onClick={() => handleTabSwitch("education")}
            className={`relative z-10 px-8 py-3 rounded-full font-medium transition-all duration-300 ${
              activeTab === "education" 
                ? "text-white scale-105" 
                : "text-gray-400 hover:text-gray-200 hover:scale-102"
            }`}
          >
            <div className="flex items-center gap-2">
              <GraduationCap size={18} className={activeTab === "education" ? "animate-bounce-twist" : ""} />
              <span>Education</span>
            </div>
          </button>
        </div>
      </div>

      {/* Content with smooth transitions */}
      <div ref={containerRef} className="relative min-h-[600px]">
        {/* Work Experience - Interactive Bullets */}
        <div 
          className={`transition-all duration-500 ${
            activeTab === "work" 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-8 pointer-events-none absolute inset-0"
          }`}
        >
          <ul className="work-list space-y-4">
            {enhancedWorkExperience.map((work, index) => (
              <li 
                key={index}
                className="group relative bg-gradient-to-r from-neutral-900/50 to-neutral-900/30 rounded-lg border border-neutral-800 hover:border-[var(--accent)] transition-all duration-300"
                data-stagger="100"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-[var(--accent)] transition-colors">
                      {work.title}
                    </h3>
                    {work.link && (
                      <a 
                        href={work.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] hover:bg-[var(--accent)]/20 transition-all animate-badge-pulse"
                      >
                        <span className="text-sm font-medium">{work.badge}</span>
                        <ExternalLink size={14} className="animate-wiggle-arrow" />
                      </a>
                    )}
                  </div>
                  
                  <p className="text-gray-300 mb-4">{work.description}</p>
                  
                  <div className="flex flex-wrap gap-3 mb-4">
                    {work.metrics.map((metric, i) => (
                      <div 
                        key={i} 
                        className="bg-indigo-500/10 px-3 py-1 rounded-full text-sm text-indigo-300"
                      >
                        <CountUpNumber value={metric} duration={1500 + (i * 200)} />
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {work.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="text-xs px-2 py-1 rounded bg-neutral-800/50 text-gray-400 group-hover:text-gray-300 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Hover effect gradient */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[var(--accent)]/0 to-[var(--accent)]/0 group-hover:from-[var(--accent)]/5 group-hover:to-[var(--accent)]/10 transition-all duration-300 pointer-events-none" />
              </li>
            ))}
          </ul>
        </div>

        {/* Education - Deep-dive Bullets */}
        <div 
          className={`transition-all duration-500 ${
            activeTab === "education" 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-8 pointer-events-none absolute inset-0"
          }`}
        >
          <ul className="education-list space-y-4">
            {enhancedEducation.map((edu, index) => (
              <li 
                key={index}
                className="group relative bg-gradient-to-r from-neutral-900/50 to-neutral-900/30 rounded-lg border border-neutral-800 hover:border-purple-500 transition-all duration-300"
                style={{
                  animationDelay: `${150 * index}ms`
                }}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {edu.title}
                    </h3>
                    {edu.link && (
                      <a 
                        href={edu.link}
                        className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        <Download size={16} />
                        <span className="text-sm">{edu.linkText}</span>
                      </a>
                    )}
                  </div>
                  
                  <p className="text-gray-300 mb-3">{edu.description}</p>
                  <p className="text-sm text-gray-400">{edu.details}</p>
                </div>
                
                {/* Animated border effect on hover */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 rounded-lg animate-border-cycle" 
                       style={{ 
                         borderLeft: '4px solid transparent',
                         borderImage: 'linear-gradient(180deg, var(--accent), var(--border-accent)) 1'
                       }} 
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}