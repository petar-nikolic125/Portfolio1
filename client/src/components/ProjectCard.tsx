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
    <Card className="group bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-gray-900/30 transition-all duration-300 relative">
      {project.featured && (
        <div className="absolute top-4 right-4 z-10">
          <Badge className="bg-blue-600 text-white px-3 py-1 text-xs font-semibold shadow-lg">
            Featured Project
          </Badge>
        </div>
      )}
      <img 
        src={project.image} 
        alt={project.name}
        className="w-full h-48 object-cover brightness-90" 
      />
      <CardContent className="p-6">
        <h3 className="font-serif font-bold text-xl text-gray-100 mb-2">
          {project.name}
        </h3>
        <p className="text-gray-400 text-sm mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded border border-gray-700"
            >
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              className="text-gray-400 hover:text-gray-100 hover:underline text-sm transition-colors duration-300 flex items-center"
            >
              <ExternalLink className="w-3 h-3 mr-1" />
              Live Site
            </a>
          )}
          {project.sourceUrl && (
            <a 
              href={project.sourceUrl} 
              className="text-gray-400 hover:text-gray-100 hover:underline text-sm transition-colors duration-300 flex items-center"
            >
              <SiGithub className="w-3 h-3 mr-1" />
              Source Code
            </a>
          )}
          {project.docsUrl && (
            <a 
              href={project.docsUrl} 
              className="text-gray-400 hover:text-gray-100 hover:underline text-sm transition-colors duration-300 flex items-center"
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
