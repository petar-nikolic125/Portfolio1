import { personalInfo } from "@/data/portfolio";
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        {/* Personal Monogram */}
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full border border-gray-700 shadow-inner">
            <span className="font-serif font-bold text-xl text-gray-100">PN</span>
          </div>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-6">
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
        
        {/* Copyright */}
        <p className="text-xs text-gray-500 uppercase tracking-widest font-medium">
          © 2024 Petar Nikolić. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
