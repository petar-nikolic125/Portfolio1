import { useState } from "react";
import { workExperience, education } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export default function WorkEducationTabs() {
  const [activeTab, setActiveTab] = useState<"work" | "education">("work");

  return (
    <section id="work-education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Work & Education</h2>
        
        {/* Tab Switcher */}
        <div className="relative mb-12">
          <div className="flex rounded-full bg-muted p-1 max-w-md mx-auto">
            <button
              onClick={() => setActiveTab("work")}
              className={cn(
                "flex-1 py-3 px-6 rounded-full transition-all duration-300 text-sm font-medium",
                activeTab === "work"
                  ? "bg-[hsl(217,91%,60%)] text-white shadow-lg"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Work
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={cn(
                "flex-1 py-3 px-6 rounded-full transition-all duration-300 text-sm font-medium",
                activeTab === "education"
                  ? "bg-[hsl(250,100%,75%)] text-white shadow-lg"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Education
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {activeTab === "work" ? (
            <>
              {workExperience.map((job, index) => (
                <div
                  key={index}
                  className="relative pl-8 pb-8 border-l-2 border-border last:border-l-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-background border-2 border-[hsl(217,91%,60%)] rounded-full" />
                  
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {job.position}
                        </h3>
                        <p className="text-muted-foreground">{job.company}</p>
                      </div>
                      <span className="text-sm text-muted-foreground whitespace-nowrap">
                        {job.startDate} - {job.endDate}
                      </span>
                    </div>
                    
                    {job.description && (
                      <p className="text-muted-foreground">{job.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </>
          ) : (
            <>
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="relative pl-8 pb-8 border-l-2 border-border last:border-l-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-background border-2 border-[hsl(250,100%,75%)] rounded-full" />
                  
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {edu.institution}
                        </h3>
                        <p className="text-muted-foreground">{edu.degree}</p>
                      </div>
                      <span className="text-sm text-muted-foreground whitespace-nowrap">
                        {edu.startDate} - {edu.endDate}
                      </span>
                    </div>
                    
                    {edu.description && (
                      <p className="text-muted-foreground">{edu.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
}