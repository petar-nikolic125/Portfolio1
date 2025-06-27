import { useState, useEffect } from "react";
import { workExperience, education } from "@/data/portfolio";
import { Button } from "@/components/ui/button";

export default function WorkEducation() {
  const [activeTab, setActiveTab] = useState<'work' | 'education'>('work');

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Toggle Switch */}
        <div className="flex justify-center mb-12">
          <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-full p-1 border border-gray-700/50 shadow-lg">
            {/* Animated Background Pill */}
            <div 
              className={`absolute top-1 w-[calc(50%-4px)] h-[calc(100%-8px)] bg-gradient-to-r from-navy to-navy/80 rounded-full transition-all duration-500 ease-out shadow-md ${
                activeTab === 'work' ? 'left-1' : 'left-[calc(50%+2px)]'
              }`}
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
                        <p className="text-gray-400 text-sm">{work.description}</p>
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
                        <p className="text-gray-400 text-sm">{edu.institution}</p>
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
