import { useState } from "react";
import { projects, technologies, typeOptions, categoryOptions } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronDown, ChevronUp, ExternalLink, Github, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

interface Filters {
  search: string;
  technology: string[];
  availability: string[];
  type: string[];
}

export default function ProjectsMinimal() {
  const [filters, setFilters] = useState<Filters>({
    search: "",
    technology: [],
    availability: [],
    type: []
  });

  const [expandedSections, setExpandedSections] = useState({
    technology: true,
    availability: true,
    type: true
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleFilterChange = (category: keyof Filters, value: string) => {
    if (category === "search") {
      setFilters(prev => ({ ...prev, search: value }));
    } else {
      setFilters(prev => ({
        ...prev,
        [category]: prev[category].includes(value)
          ? prev[category].filter(item => item !== value)
          : [...prev[category], value]
      }));
    }
  };

  const filteredProjects = projects.filter(project => {
    const matchesSearch = !filters.search || 
      project.name.toLowerCase().includes(filters.search.toLowerCase()) ||
      project.description.toLowerCase().includes(filters.search.toLowerCase());
    
    const matchesTechnology = filters.technology.length === 0 ||
      filters.technology.some(tech => project.technologies.includes(tech));
    
    const matchesType = filters.type.length === 0 ||
      filters.type.includes(project.type);
    
    return matchesSearch && matchesTechnology && matchesType;
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-12">Petar's Projects</h1>
        
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <aside className="w-64 space-y-6">
            <div>
              <h2 className="text-lg font-semibold mb-4">Filters</h2>
              <Input
                placeholder="Search projects by name"
                value={filters.search}
                onChange={(e) => handleFilterChange("search", e.target.value)}
                className="mb-6"
              />
            </div>

            {/* Technology Filter */}
            <div>
              <button
                onClick={() => toggleSection("technology")}
                className="flex items-center justify-between w-full text-left font-semibold mb-3"
              >
                Technology
                {expandedSections.technology ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {expandedSections.technology && (
                <div className="space-y-2">
                  {technologies.map(tech => (
                    <label key={tech} className="flex items-center gap-2 cursor-pointer">
                      <Checkbox
                        checked={filters.technology.includes(tech)}
                        onCheckedChange={() => handleFilterChange("technology", tech)}
                      />
                      <span className="text-sm text-muted-foreground">{tech}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Type Filter */}
            <div>
              <button
                onClick={() => toggleSection("type")}
                className="flex items-center justify-between w-full text-left font-semibold mb-3"
              >
                Type
                {expandedSections.type ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {expandedSections.type && (
                <div className="space-y-2">
                  {typeOptions.map(type => (
                    <label key={type} className="flex items-center gap-2 cursor-pointer">
                      <Checkbox
                        checked={filters.type.includes(type)}
                        onCheckedChange={() => handleFilterChange("type", type)}
                      />
                      <span className="text-sm text-muted-foreground">{type}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            <Button
              variant="outline"
              className="w-full"
              onClick={() => setFilters({ search: "", technology: [], availability: [], type: [] })}
            >
              Clear Filter
            </Button>
          </aside>

          {/* Projects Table */}
          <main className="flex-1">
            <div className="bg-card rounded-lg border border-border overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 font-semibold">PROJECT NAME</th>
                    <th className="text-left p-4 font-semibold">TECHNOLOGIES</th>
                    <th className="text-left p-4 font-semibold">LINKS</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProjects.map((project, index) => (
                    <tr key={project.id} className={cn(
                      "border-b border-border hover:bg-muted/50 transition-colors",
                      index === filteredProjects.length - 1 && "border-b-0"
                    )}>
                      <td className="p-4">
                        <div className="font-medium">{project.name}</div>
                      </td>
                      <td className="p-4">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map(tech => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-sm text-primary hover:underline"
                            >
                              <ExternalLink className="w-3 h-3" />
                              Live Site
                            </a>
                          )}
                          {project.sourceUrl && (
                            <a
                              href={project.sourceUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-sm text-primary hover:underline"
                            >
                              <Github className="w-3 h-3" />
                              Source Code
                            </a>
                          )}
                          {project.docsUrl && (
                            <a
                              href={project.docsUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-sm text-primary hover:underline"
                            >
                              <FileText className="w-3 h-3" />
                              Docs
                            </a>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}