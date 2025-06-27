import { useEffect } from "react";
import { MapPin, FileText, MessageCircle } from "lucide-react";
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";
import { personalInfo } from "@/data/portfolio";
import { Button } from "@/components/ui/button";

export default function Hero() {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'r' || event.key === 'R') {
        // Resume shortcut - could open resume modal or navigate to resume
        console.log('Resume shortcut activated');
      }
      if (event.key === 'g' || event.key === 'G') {
        // GitHub shortcut - could open GitHub in new tab
        console.log('GitHub shortcut activated');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <section className="min-h-screen bg-gray-950 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle 3D Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-navy/30 to-transparent rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-3/4 w-16 h-16 bg-gradient-to-br from-purple-500/15 to-transparent rounded-full blur-md animate-pulse delay-2000"></div>
      </div>
      
      <div className="max-w-4xl w-full relative z-10">
        <div className="max-w-2xl animate-fade-up">
          {/* Name and Title */}
          <h1 className="font-serif font-semibold text-5xl sm:text-6xl lg:text-7xl text-gray-100 tracking-wide mb-4">
            {personalInfo.name}
          </h1>
          <p className="font-sans font-light text-xl sm:text-2xl text-gray-300 mb-2">
            {personalInfo.title}
          </p>
          <p className="font-sans font-light text-lg text-gray-400 mb-6">
            {personalInfo.subtitle}
          </p>
          
          {/* Location */}
          <div className="flex items-center text-gray-400 text-sm uppercase tracking-widest mb-8">
            <MapPin className="w-3 h-3 mr-2" />
            <span>{personalInfo.location}</span>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <Button 
              variant="outline"
              className="group px-6 py-2 border-gray-600 text-gray-300 hover:bg-gray-100 hover:text-gray-900 hover:border-gray-100 transition-all duration-300 text-sm font-medium tracking-wide hover:shadow-lg hover:shadow-gray-900/20 hover:-translate-y-0.5"
            >
              <FileText className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
              RÉSUMÉ
            </Button>
            <Button 
              className="group px-6 py-2 bg-navy text-gray-100 hover:bg-navy/90 hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 text-sm font-medium tracking-wide hover:shadow-xl hover:shadow-navy/30"
            >
              <MessageCircle className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
              LET'S TALK
            </Button>
          </div>
          
          {/* Social Icons */}
          <div className="flex space-x-6">
            <a 
              href={personalInfo.social.github} 
              className="text-gray-500 hover:text-navy hover:-translate-y-0.5 transition-all duration-300"
              aria-label="GitHub"
            >
              <SiGithub className="w-5 h-5" />
            </a>
            <a 
              href={personalInfo.social.linkedin} 
              className="text-gray-500 hover:text-navy hover:-translate-y-0.5 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <SiLinkedin className="w-5 h-5" />
            </a>
            <a 
              href={personalInfo.social.instagram} 
              className="text-gray-500 hover:text-navy hover:-translate-y-0.5 transition-all duration-300"
              aria-label="Instagram"
            >
              <SiInstagram className="w-5 h-5" />
            </a>
            <a 
              href={`mailto:${personalInfo.social.email}`} 
              className="text-gray-500 hover:text-navy hover:-translate-y-0.5 transition-all duration-300"
              aria-label="Email"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
