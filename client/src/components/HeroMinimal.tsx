import { MapPin } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/portfolio";

export default function HeroMinimal() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl w-full text-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground">
          {personalInfo.name}
        </h1>
        
        <div className="space-y-2">
          <p className="text-xl md:text-2xl text-foreground">
            {personalInfo.title}
          </p>
          <p className="text-lg text-muted-foreground">
            {personalInfo.subtitle}
          </p>
        </div>
        
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <MapPin className="w-4 h-4" />
          <span>{personalInfo.location}</span>
        </div>
        
        <div className="flex items-center justify-center gap-4 pt-4">
          <Button
            variant="outline"
            size="sm"
            className="gap-2"
            onClick={() => window.open('https://drive.google.com/file/d/1gH0O-Nyx4_wjHYNKLdW9QBvq42AKQ38r/view', '_blank')}
          >
            Resume
          </Button>
          
          <a
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          
          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <FaGithub className="w-5 h-5" />
          </a>
        </div>
        
        <Button
          variant="outline"
          size="sm"
          className="mt-8"
          onClick={() => {
            const element = document.getElementById('work-education');
            element?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Get to the fun side
        </Button>
      </div>
    </section>
  );
}