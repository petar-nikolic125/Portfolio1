/* ------------------------------------------------------------------
   ProjectsEnhanced.tsx  – image banners + full filter UI
------------------------------------------------------------------- */
import { useState, useEffect, useRef, useMemo } from "react";
import { Search, Filter, ChevronDown, ExternalLink } from "lucide-react";
import {
  projects,                // make sure each project has .image (string) now
  technologies,
  categoryOptions,
  typeOptions,
} from "@/data/portfolio";
import { createAnimationObserver } from "@/lib/animations";

interface ProjectFilters {
  search: string;
  technology: string[];
  category: string[];
  type: string[];
}

export default function ProjectsEnhanced() {
  /* ───────────────────────────── state & refs ────────────────────────────── */
  const [filters, setFilters] = useState<ProjectFilters>({
    search: "",
    technology: [],
    category: [],
    type: [],
  });
  const [expanded, setExpanded] = useState({
    technology: false,
    category: false,
    type: false,
  });
  const searchRef = useRef<HTMLInputElement>(null);

  /* ───────────────────────────── animations init ─────────────────────────── */
  useEffect(() => {
    const obs = createAnimationObserver(
        ".project-card",
        "project-card-entered",
        { threshold: 0.05, rootMargin: "50px" }
    );
    return () => obs.disconnect();
  }, []);

  /* ───────────────────────────── filtering logic ─────────────────────────── */
  const filtered = useMemo(() => {
    return projects.filter((p) => {
      /* search text */
      if (filters.search) {
        const q = filters.search.toLowerCase();
        const hit =
            p.name.toLowerCase().includes(q) ||
            p.description.toLowerCase().includes(q) ||
            p.technologies.some((t) => t.toLowerCase().includes(q));
        if (!hit) return false;
      }
      /* tech chips */
      if (
          filters.technology.length &&
          !filters.technology.some((t) => p.technologies.includes(t))
      )
        return false;
      /* category */
      if (filters.category.length && !filters.category.includes(p.category))
        return false;
      /* type */
      if (filters.type.length && !filters.type.includes(p.type)) return false;

      return true;
    });
  }, [filters]);

  /* ───────────────────────────── tiny helpers ────────────────────────────── */
  const flip = (k: keyof typeof expanded) =>
      setExpanded((s) => ({ ...s, [k]: !s[k] }));
  const toggle = (k: keyof Omit<ProjectFilters, "search">, v: string) =>
      setFilters((f) => ({
        ...f,
        [k]: f[k].includes(v) ? f[k].filter((x) => x !== v) : [...f[k], v],
      }));
  const clear = () => {
    setFilters({ search: "", technology: [], category: [], type: [] });
    searchRef.current && (searchRef.current.value = "");
  };

  const activeCount =
      filters.technology.length +
      filters.category.length +
      filters.type.length +
      (filters.search ? 1 : 0);

  /* ───────────────────────────── ui starts here ──────────────────────────── */
  return (
      <section className="py-[var(--section-padding)] px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        {/* heading */}
        <header className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-slide-in">
            Projects
          </h2>
          <p className="text-xl text-gray-400 animate-slide-up-fade">
            Explore my work across different domains
          </p>
        </header>

        {/* search + filter */}
        <div className="mb-10 space-y-4">
          {/* search bar */}
          <div className="relative animate-pop-in">
            <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
            />
            <input
                ref={searchRef}
                type="text"
                placeholder="Search projects, technologies…"
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-900/60 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
                onChange={(e) =>
                    setFilters((f) => ({ ...f, search: e.target.value }))
                }
            />
          </div>

          {/* collapsible filter panels */}
          <FilterPanel
              label="Technologies"
              color="indigo"
              count={filters.technology.length}
              open={expanded.technology}
              onToggle={() => flip("technology")}
          >
            <CheckboxGrid
                options={technologies}
                checked={filters.technology}
                onChange={(v) => toggle("technology", v)}
            />
          </FilterPanel>

          <FilterPanel
              label="Categories"
              color="purple"
              count={filters.category.length}
              open={expanded.category}
              onToggle={() => flip("category")}
          >
            <CheckboxGrid
                options={categoryOptions}
                checked={filters.category}
                onChange={(v) => toggle("category", v)}
            />
          </FilterPanel>
        </div>

        {/* active-filter summary */}
        {activeCount > 0 && (
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-gray-400">
                {filtered.length} / {projects.length} shown
              </p>
              <button
                  onClick={clear}
                  className="text-sm text-indigo-400 hover:text-indigo-300 transition"
              >
                Clear all
              </button>
            </div>
        )}

        {/* project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((p, i) => (
              <article
                  key={p.id}
                  className="project-card group relative rounded-lg border border-gray-700 bg-gray-900/50 overflow-hidden transition hover:border-[var(--accent)]"
                  style={{ animationDelay: `${i * 60}ms` }}
              >
                {/* image banner */}
                {p.image ? (
                    <img
                        src={p.image}
                        alt={p.name}
                        loading="lazy"
                        className="w-full aspect-[16/9] object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
                    />
                ) : (
                    <div className="w-full aspect-[16/9] bg-gradient-to-br from-slate-800 to-slate-700/60" />
                )}

                {/* content */}
                <div className="p-6 space-y-4">
                  <header className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-white group-hover:text-[var(--accent)] transition">
                      {p.name}
                    </h3>
                    {p.liveUrl && (
                        <a
                            href={p.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-indigo-400 transition"
                            title="View live"
                        >
                          <ExternalLink size={18} />
                        </a>
                    )}
                  </header>

                  {p.category && (
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-xs bg-indigo-500/15 text-indigo-300">
                  {p.category}
                </span>
                  )}

                  <p className="text-gray-300 line-clamp-3">{p.description}</p>

                  {/* tech pills */}
                  <div className="flex flex-wrap gap-2">
                    {p.technologies.slice(0, 4).map((t) => (
                        <span
                            key={t}
                            className="text-[11px] px-2 py-1 rounded bg-gray-800/60 text-gray-400 group-hover:bg-gray-800/80 transition"
                        >
                    {t}
                  </span>
                    ))}
                    {p.technologies.length > 4 && (
                        <span className="text-[11px] px-2 py-1 text-gray-500">
                    +{p.technologies.length - 4}
                  </span>
                    )}
                  </div>
                </div>

                {/* subtle overlay on hover */}
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-transparent to-purple-600/0 group-hover:from-indigo-500/10 group-hover:to-purple-600/10 transition opacity-0 group-hover:opacity-100" />
              </article>
          ))}
        </div>

        {/* empty-state */}
        {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 mb-4">No projects match your filters.</p>
              <button
                  onClick={clear}
                  className="text-indigo-400 hover:text-indigo-300 transition"
              >
                Reset filters
              </button>
            </div>
        )}
      </section>
  );
}

/* ————————————————————— tiny composables ——————————————————————— */
function FilterPanel({
                       children,
                       label,
                       color,
                       count,
                       open,
                       onToggle,
                     }: {
  children: React.ReactNode;
  label: string;
  color: "indigo" | "purple";
  count: number;
  open: boolean;
  onToggle: () => void;
}) {
  const colorBG = color === "indigo" ? "bg-indigo-500/20" : "bg-purple-500/20";
  const colorText =
      color === "indigo" ? "text-indigo-300" : "text-purple-300";
  return (
      <div className="border border-gray-700 rounded-lg overflow-hidden">
        <button
            onClick={onToggle}
            className="w-full flex items-center justify-between p-4 bg-gray-900/40 hover:bg-gray-900/60 transition"
        >
        <span className="flex items-center gap-2 text-white font-medium">
          <Filter size={18} className="text-gray-400" />
          {label}
          {count > 0 && (
              <span
                  className={`px-2 py-0.5 rounded-full text-xs ${colorBG} ${colorText}`}
              >
              {count}
            </span>
          )}
        </span>
          <ChevronDown
              size={18}
              className={`text-gray-400 transition-transform ${
                  open ? "rotate-180" : ""
              }`}
          />
        </button>
        <div
            className={`transition-all duration-300 ${
                open ? "max-h-80" : "max-h-0"
            } overflow-hidden`}
        >
          {children}
        </div>
      </div>
  );
}

function CheckboxGrid({
                        options,
                        checked,
                        onChange,
                      }: {
  options: string[];
  checked: string[];
  onChange: (val: string) => void;
}) {
  return (
      <div className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {options.map((opt) => (
            <label key={opt} className="flex items-center gap-2 cursor-pointer">
              <input
                  type="checkbox"
                  checked={checked.includes(opt)}
                  onChange={() => onChange(opt)}
                  className="w-4 h-4 bg-gray-800 border-gray-600 text-indigo-500 rounded focus:ring-indigo-500"
              />
              <span className="text-sm text-gray-400">{opt}</span>
            </label>
        ))}
      </div>
  );
}
