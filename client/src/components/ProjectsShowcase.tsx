import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";

export default function ProjectsShowcase() {
  // Show only first 4 projects on home page
  const featuredProjects = projects.slice(0, 4);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif font-bold text-4xl text-foreground text-center mb-16">Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {/* Interactive 3D More Projects Tile */}
        <div className="text-center">
          <Link href="/projects" className="group relative inline-block">
            <div className="relative bg-gradient-to-br from-muted to-card border border-border rounded-lg p-6 transition-all duration-500 hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-2 hover:rotate-1 transform-gpu">
              {/* 3D Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex items-center justify-center space-x-3">
                <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 font-medium">
                  More projects
                </span>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all duration-300" />
              </div>
              
              {/* Subtle animation particles */}
              <div className="absolute top-2 right-2 w-1 h-1 bg-navy rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
              <div className="absolute bottom-2 left-2 w-1 h-1 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500"></div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
