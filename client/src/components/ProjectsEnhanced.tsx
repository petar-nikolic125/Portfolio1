import { useState, useEffect, useRef, useMemo } from "react";
import { Search, Filter, ChevronDown, ExternalLink } from "lucide-react";
import { projects, technologies, categoryOptions, typeOptions } from "@/data/portfolio";
import { createAnimationObserver } from "@/lib/animations";

interface ProjectFilters {
  search: string;
  technology: string[];
  category: string[];
  type: string[];
}

export default function ProjectsEnhanced() {
  const [filters, setFilters] = useState<ProjectFilters>({
    search: "",
    technology: [],
    category: [],
    type: []
  });
  
  const [expandedFilters, setExpandedFilters] = useState({
    technology: false,
    category: false,
    type: false
  });
  
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Initialize animation observer for project cards
    const observer = createAnimationObserver('.project-card', 'project-card-entered', {
      threshold: 0.05,
      rootMargin: '50px'
    });
    
    return () => observer.disconnect();
  }, []);

  // Filter projects based on current filters
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      // Search filter
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        const matchesSearch = 
          project.name.toLowerCase().includes(searchLower) ||
          project.description.toLowerCase().includes(searchLower) ||
          project.technologies.some(tech => tech.toLowerCase().includes(searchLower));
        
        if (!matchesSearch) return false;
      }
      
      // Technology filter
      if (filters.technology.length > 0) {
        const hasMatchingTech = filters.technology.some(tech =>
          project.technologies.includes(tech)
        );
        if (!hasMatchingTech) return false;
      }
      
      // Category filter
      if (filters.category.length > 0 && project.category) {
        if (!filters.category.includes(project.category)) return false;
      }
      
      // Type filter
      if (filters.type.length > 0) {
        if (!filters.type.includes(project.type)) return false;
      }
      
      return true;
    });
  }, [filters]);

  const handleFilterToggle = (filterType: keyof typeof expandedFilters) => {
    setExpandedFilters(prev => ({
      ...prev,
      [filterType]: !prev[filterType]
    }));
  };

  const handleFilterChange = (filterType: keyof Omit<ProjectFilters, 'search'>, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter(v => v !== value)
        : [...prev[filterType], value]
    }));
  };

  const clearFilters = () => {
    setFilters({
      search: "",
      technology: [],
      category: [],
      type: []
    });
    if (searchInputRef.current) {
      searchInputRef.current.value = "";
    }
  };

  const activeFilterCount = 
    filters.technology.length + 
    filters.category.length + 
    filters.type.length +
    (filters.search ? 1 : 0);

  return (
    <section className="py-[var(--section-padding)] px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-slide-in">
          Projects
        </h2>
        <p className="text-xl text-gray-400 animate-slide-up-fade stagger-1">
          Explore my work across different domains
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        {/* Search Input */}
        <div className="relative animate-pop-in stagger-2">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search projects, technologies..."
            className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:shadow-[inset_0_0_10px_rgba(99,102,241,0.2)] transition-all duration-300"
            onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
          />
        </div>

        {/* Filter Panels */}
        <div className="space-y-2">
          {/* Technology Filter */}
          <div className="border border-gray-700 rounded-lg overflow-hidden animate-fade-slide-in stagger-3">
            <button
              onClick={() => handleFilterToggle('technology')}
              className="w-full flex items-center justify-between p-4 bg-gray-900/30 hover:bg-gray-900/50 transition-colors"
            >
              <div className="flex items-center gap-2">
                <Filter size={18} className="text-gray-400" />
                <span className="text-white font-medium">Technologies</span>
                {filters.technology.length > 0 && (
                  <span className="px-2 py-0.5 bg-indigo-500/20 text-indigo-300 text-xs rounded-full">
                    {filters.technology.length}
                  </span>
                )}
              </div>
              <ChevronDown 
                size={18} 
                className={`text-gray-400 transition-transform duration-300 ${
                  expandedFilters.technology ? 'rotate-180' : ''
                }`}
              />
            </button>
            
            <div className={`overflow-hidden transition-all duration-300 ${
              expandedFilters.technology ? 'max-h-64' : 'max-h-0'
            }`}>
              <div className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {technologies.map((tech) => (
                  <label
                    key={tech}
                    className="flex items-center gap-2 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      checked={filters.technology.includes(tech)}
                      onChange={() => handleFilterChange('technology', tech)}
                      className="w-4 h-4 bg-gray-800 border-gray-600 text-indigo-500 rounded focus:ring-indigo-500"
                    />
                    <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                      {tech}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="border border-gray-700 rounded-lg overflow-hidden animate-fade-slide-in stagger-4">
            <button
              onClick={() => handleFilterToggle('category')}
              className="w-full flex items-center justify-between p-4 bg-gray-900/30 hover:bg-gray-900/50 transition-colors"
            >
              <div className="flex items-center gap-2">
                <Filter size={18} className="text-gray-400" />
                <span className="text-white font-medium">Categories</span>
                {filters.category.length > 0 && (
                  <span className="px-2 py-0.5 bg-purple-500/20 text-purple-300 text-xs rounded-full">
                    {filters.category.length}
                  </span>
                )}
              </div>
              <ChevronDown 
                size={18} 
                className={`text-gray-400 transition-transform duration-300 ${
                  expandedFilters.category ? 'rotate-180' : ''
                }`}
              />
            </button>
            
            <div className={`overflow-hidden transition-all duration-300 ${
              expandedFilters.category ? 'max-h-32' : 'max-h-0'
            }`}>
              <div className="p-4 grid grid-cols-2 md:grid-cols-3 gap-2">
                {categoryOptions.map((category) => (
                  <label
                    key={category}
                    className="flex items-center gap-2 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      checked={filters.category.includes(category)}
                      onChange={() => handleFilterChange('category', category)}
                      className="w-4 h-4 bg-gray-800 border-gray-600 text-purple-500 rounded focus:ring-purple-500"
                    />
                    <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                      {category}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Active Filters Summary */}
        {activeFilterCount > 0 && (
          <div className="flex items-center justify-between animate-fade-slide-in">
            <p className="text-sm text-gray-400">
              {filteredProjects.length} of {projects.length} projects shown
            </p>
            <button
              onClick={clearFilters}
              className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className="project-card project-card-enter group relative bg-gray-900/50 rounded-lg border border-gray-700 overflow-hidden hover:border-[var(--accent)] transition-all duration-300"
            style={{
              animationDelay: `${index * 50}ms`
            }}
          >
            <div className="p-6">
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-[var(--accent)] transition-colors">
                  {project.name}
                </h3>
                <div className="flex gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-indigo-400 transition-colors"
                      title="View Live"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              {/* Category Badge */}
              {project.category === "Website Display" && (
                <span className="inline-block px-3 py-1 mb-3 bg-indigo-500/10 text-indigo-300 text-xs rounded-full animate-badge-pulse">
                  {project.category}
                </span>
              )}

              {/* Description */}
              <p className="text-gray-300 mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 4).map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-gray-800/50 text-gray-400 rounded group-hover:bg-gray-800 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="text-xs px-2 py-1 text-gray-500">
                    +{project.technologies.length - 4} more
                  </span>
                )}
              </div>
            </div>

            {/* Hover Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-transparent to-purple-500/0 group-hover:from-indigo-500/5 group-hover:to-purple-500/5 transition-all duration-300 pointer-events-none" />
          </div>
        ))}
      </div>

      {/* No Results Message */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12 animate-fade-slide-in">
          <p className="text-gray-400 text-lg mb-2">No projects match your filters</p>
          <button
            onClick={clearFilters}
            className="text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            Clear filters to see all projects
          </button>
        </div>
      )}
    </section>
  );
}