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
        <h2 className="font-serif font-bold text-4xl text-gray-100 text-center mb-16">Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {/* More Projects Link */}
        <div className="text-center">
          <Link href="/projects">
            <a className="inline-flex items-center text-gray-400 hover:text-gray-100 transition-colors duration-300">
              <span className="mr-2">More projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
