import { projects } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Github, FileText } from "lucide-react";
import { useLocation } from "wouter";

export default function ProjectsMinimal() {
  const [, setLocation] = useLocation();
  
  // Display first 4 projects + "More Projects" card
  const displayProjects = projects.slice(0, 4);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayProjects.map((project) => (
            <div
              key={project.id}
              className="bg-card rounded-lg overflow-hidden border border-border hover:border-muted-foreground transition-colors"
            >
              {/* Project Image */}
              <div className="aspect-video bg-muted flex items-center justify-center">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-4xl text-muted-foreground">
                    {project.name[0]}
                  </span>
                )}
              </div>
              
              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                </div>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 5 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.technologies.length - 5}
                    </Badge>
                  )}
                </div>
                
                {/* Actions */}
                <div className="flex items-center gap-3">
                  {project.liveUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="w-3 h-3" />
                      Website
                    </Button>
                  )}
                  {project.sourceUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2"
                      onClick={() => window.open(project.sourceUrl, '_blank')}
                    >
                      <Github className="w-3 h-3" />
                      Source
                    </Button>
                  )}
                  {project.docsUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2"
                      onClick={() => window.open(project.docsUrl, '_blank')}
                    >
                      <FileText className="w-3 h-3" />
                      Docs
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
          
          {/* More Projects Card */}
          <div
            className="bg-card rounded-lg overflow-hidden border border-border hover:border-muted-foreground transition-colors cursor-pointer group"
            onClick={() => setLocation('/projects')}
          >
            <div className="h-full flex flex-col items-center justify-center p-12 text-center">
              <h3 className="text-2xl font-semibold mb-4">More Projects</h3>
              <ArrowRight className="w-8 h-8 text-muted-foreground group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}