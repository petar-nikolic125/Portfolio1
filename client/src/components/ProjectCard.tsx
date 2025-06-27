import { ExternalLink, FileText } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface ProjectCardProps {
  project: {
    id: number;
    name: string;
    description: string;
    image: string;
    technologies: string[];
    liveUrl?: string;
    sourceUrl?: string;
    docsUrl?: string;
    type: string;
    category?: string;
    featured?: boolean;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group bg-card rounded-lg overflow-hidden border border-border hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/30 transition-all duration-300 relative">
      {project.category === "Website Display" && (
        <div className="absolute top-4 right-4 z-10">
          <Badge className="bg-muted text-foreground hover:bg-accent hover:text-accent-foreground px-3 py-1 text-xs font-semibold shadow-lg">
            Website Display
          </Badge>
        </div>
      )}
      {project.featured && project.category !== "Website Display" && (
        <div className="absolute top-4 right-4 z-10">
          <Badge className="bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold shadow-lg">
            Featured Project
          </Badge>
        </div>
      )}
      <div className="relative aspect-[4/2] overflow-hidden group">
        <img 
          src={project.image} 
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        {/* 10% dark overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>
      <CardContent className="p-6">
        <h3 className="font-serif font-bold text-xl text-foreground mb-2">
          {project.name}
        </h3>
        <p className="text-muted-foreground text-sm mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="px-2 py-1 bg-muted text-foreground hover:bg-accent hover:text-accent-foreground text-xs rounded border border-border"
            >
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              className="text-muted-foreground hover:text-accent hover:underline text-sm transition-colors duration-300 flex items-center"
            >
              <ExternalLink className="w-3 h-3 mr-1" />
              Live Site
            </a>
          )}
          {project.sourceUrl && (
            <a 
              href={project.sourceUrl} 
              className="text-muted-foreground hover:text-accent hover:underline text-sm transition-colors duration-300 flex items-center"
            >
              <SiGithub className="w-3 h-3 mr-1" />
              Source Code
            </a>
          )}
          {project.docsUrl && (
            <a 
              href={project.docsUrl} 
              className="text-muted-foreground hover:text-accent hover:underline text-sm transition-colors duration-300 flex items-center"
            >
              <FileText className="w-3 h-3 mr-1" />
              Docs
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
