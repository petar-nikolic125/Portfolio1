import { useEffect, useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import { workExperience, education } from "@/data/portfolio";

interface TimelineEntry {
  id: string;
  type: "work" | "education";
  period: string;
  title: string;
  subtitle?: string;
  bullets: string[];
  icon: typeof Briefcase | typeof GraduationCap;
  side: "left" | "right";
}

export default function Timeline() {
  const timelineRef = useRef<HTMLDivElement>(null);

  // Combine and sort entries chronologically
  const entries: TimelineEntry[] = [
    {
      id: "work-1",
      type: "work",
      period: "2022 – PRESENT",
      title: "Software Engineer – Freelance",
      subtitle: "Full-stack, distributed systems, real-time data",
      bullets: [
        "Built high-volume trading dashboard for Zurich fintech; handled 120k tx/s cut latency 40%",
        "Led three-month rescue of failing React/Go monolith for e-commerce client; turned 600k daily users from 2x TTL to 400ms",
        "Designed and shipped interactive 3D experience showcasing real-time WebGL performance"
      ],
      icon: Briefcase,
      side: "left"
    },
    {
      id: "edu-1", 
      type: "education",
      period: "2024",
      title: "AI in Medicine",
      subtitle: "Python PyTorch FastAPI",
      bullets: [
        "Melanoma Detection CNN - 92% AUC on ISIC 2018",
        "Radiograph Classifier - 96.8% sensitivity",
        "Clinical Triage Bot - Reduced wait times by 35%"
      ],
      icon: GraduationCap,
      side: "right"
    },
    {
      id: "work-2",
      type: "work", 
      period: "2023 – 2024",
      title: "Slick Shopify App",
      bullets: [
        "Architected multi-tenant SaaS with Stripe subscriptions",
        "Reduced checkout abandonment by 32%",
        "Scaled to 50k+ active stores"
      ],
      icon: Briefcase,
      side: "left"
    },
    {
      id: "edu-2",
      type: "education",
      period: "2024",
      title: "Psychotherapy Scheduler",
      subtitle: "JavaFX + MySQL",
      bullets: [
        "Built appointment management system",
        "Integrated automated reminders",
        "Reduced no-shows by 40%"
      ],
      icon: GraduationCap,
      side: "right"
    },
    {
      id: "work-3",
      type: "work",
      period: "2022 – 2023", 
      title: "Ultra-Responsive E-Tail",
      bullets: [
        "Migrated legacy PHP to Next.js",
        "Improved Core Web Vitals by 65%",
        "Increased mobile conversions by 48%"
      ],
      icon: Briefcase,
      side: "left"
    },
    {
      id: "edu-3",
      type: "education",
      period: "2023",
      title: "Kernel Extensions",
      subtitle: "xv6 shared memory & syscalls",
      bullets: [
        "Implemented System V encryption/decryption",
        "Altered inode structures for custom metadata",
        "Achieved 18% throughput gain"
      ],
      icon: GraduationCap,
      side: "right"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("timeline-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = timelineRef.current?.querySelectorAll(".timeline-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto" ref={timelineRef}>
        <h2 className="font-serif font-bold text-4xl text-foreground text-center mb-16">
          Work & Education
        </h2>

        {/* Timeline container */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border transform -translate-x-1/2 hidden md:block" />

          {/* Timeline entries */}
          <div className="space-y-16 md:space-y-20">
            {entries.map((entry, index) => (
              <div 
                key={entry.id}
                className={`timeline-card relative flex items-center ${
                  entry.side === "left" ? "md:justify-end" : "md:justify-start"
                } opacity-0 transform transition-all duration-700`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Icon badge on timeline */}
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex">
                  <div className="w-12 h-12 rounded-full bg-muted border-2 border-foreground flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                    <entry.icon className="w-5 h-5 text-foreground" />
                  </div>
                </div>

                {/* Card */}
                <div className={`group relative w-full md:w-5/12 ${
                  entry.side === "left" ? "md:mr-auto md:text-right" : "md:ml-auto"
                }`}>
                  {/* Period label */}
                  <div className={`mb-2 ${entry.side === "left" ? "md:text-right" : ""}`}>
                    <span className="text-sm font-semibold tracking-wider text-muted-foreground group-hover:text-foreground transition-colors duration-300" style={{ letterSpacing: "2px" }}>
                      {entry.period}
                    </span>
                  </div>

                  {/* Card content */}
                  <div className="bg-card border border-border rounded-lg p-6 hover:shadow-xl hover:transform hover:-translate-y-1 transition-all duration-300 group">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-1">
                      {entry.title}
                    </h3>
                    {entry.subtitle && (
                      <p className="text-sm text-muted-foreground mb-3">{entry.subtitle}</p>
                    )}
                    <ul className={`space-y-2 ${entry.side === "left" ? "md:text-left" : ""}`}>
                      {entry.bullets.map((bullet, i) => (
                        <li 
                          key={i}
                          className="text-muted-foreground text-sm opacity-0 transform translate-x-4 animate-slide-in"
                          style={{ animationDelay: `${(index * 150) + (i * 50) + 300}ms` }}
                        >
                          <span className="inline-block w-1 h-1 bg-accent rounded-full mr-2" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Mobile icon (shown inline) */}
                <div className="md:hidden absolute left-0 top-8">
                  <div className="w-10 h-10 rounded-full bg-muted border-2 border-foreground flex items-center justify-center">
                    <entry.icon className="w-4 h-4 text-foreground" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


    </section>
  );
}