/* ──────────────────────────────────────────────────────────────────
   WorkEducationEnhanced.tsx · polished dual timeline 2025-06-28
   • Pure React + Tailwind – no zustand / redux
   • 440 lines inc. helpers & comments
   • <WorkEducationEnhanced /> drops straight into pages/Home
   ───────────────────────────────────────────────────────────────── */

import { useState, useEffect, Fragment, useRef } from "react";
import {
  Briefcase,
  GraduationCap,
  ExternalLink,
  Download,
} from "lucide-react";

import { createAnimationObserver, countUp } from "@/lib/animations";

/* ════════════════════════ 1 · DATA ══════════════════════════════ */

/* ---------- shared base ---------- */
interface ItemBase {
  id: string;
  emoji?: string;       // ⛑  Fallback glyph if no logo
  logo?: string;        // /public/logos/filename.(png|svg)
  period: string;       // “2022 – Present”
  heading: string;      // primary bold line
  subHeading: string;   // lighter second line
  subText?: string;     // tertiary extra text
  ribbon?: "LIVE" | "HOT" | "NEW";
}

/* ---------- work ---------- */
export interface WorkItem extends ItemBase {
  type: "work";
  metrics?: string[];   // chips (“11 clients”, “98 LH” …)
  tech?: string[];
  liveUrl?: string;
}
const work: WorkItem[] = [
  {
    id: "w-indie",
    type: "work",
    emoji: "🚀",
    period: "2022 – Present",
    heading: "Independent Full-Stack Consultant",
    subHeading: "11 enterprise clients • 99 % CSAT",
    subText: "Distributed systems • Real-time data • UI performance",
    metrics: ["11 clients", "99 %", "100 K LoC"],
    tech: ["React", "Node", "Postgres", "AWS"],
    ribbon: "HOT",
  },
  {
    id: "w-forge",
    type: "work",
    emoji: "🧩",
    period: "2024",
    heading: "Component Forge",
    subHeading: "Live React-HTML component builder",
    subText: "Drag & drop • CSS tokens • one-click Figma import",
    metrics: ["98 LH", "60 fps", "PWA"],
    tech: ["React", "Three.js", "Tailwind", "TypeScript"],
    liveUrl: "https://pixel-component-craft.vercel.app/",
    ribbon: "LIVE",
  },
  {
    id: "w-config",
    type: "work",
    emoji: "🔧",
    period: "2023",
    heading: "3-D Product Configurator",
    subHeading: "+35 % conversions • 50 K configs / mo",
    metrics: ["35 %", "≈50 K", "<100 ms"],
    tech: ["WebGL", "Spline", "Redis", "GraphQL"],
  },
  {
    id: "w-viz",
    type: "work",
    emoji: "📊",
    period: "2023",
    heading: "Data-Visualisation Engine",
    subHeading: "Streams 1 M pts < 50 ms",
    tech: ["D3.js", "WebGL", "Socket.io"],
  },
  {
    id: "w-showcase",
    type: "work",
    emoji: "🎨",
    period: "2023",
    heading: "Interactive Portfolio Explainer",
    subHeading: "280 % engagement lift",
    tech: ["Spline", "React", "TypeScript"],
  },
  {
    id: "w-scheduler",
    type: "work",
    emoji: "📆",
    period: "2022",
    heading: "On-Demand Booking Platform",
    subHeading: "Real-time slots • <100 ms latency",
    tech: ["Socket.io", "PostgreSQL", "Docker"],
  },
  {
    id: "w-etl",
    type: "work",
    emoji: "🛠️",
    period: "2022",
    heading: "Serverless ETL Pipelines",
    subHeading: "5 TB / day gzip-to-Parquet → Redshift < 10 min",
    tech: ["AWS Step Fn", "Lambda", "Athena"],
  },
];

/* ---------- education ---------- */
export interface EduItem extends ItemBase {
  type: "edu";
  docUrl?: string;
  metrics?: string[];   // (e.g. GPA, finals, credits…)
}
const education: EduItem[] = [
  {
    id: "e-raf",
    type: "edu",
    emoji: "🎓",
    period: "2023 – Present",
    heading: "Računarski Fakultet – RAF",
    subHeading: "B.Sc. Computer Science",
    subText: "Dean’s list • ACM-ICPC regionals (3× finals)",
    metrics: ["3 finals", "120 ECTS"],
    ribbon: "NEW",
  },
  {
    id: "e-oop",
    type: "edu",
    emoji: "🧑‍💻",
    period: "2023",
    heading: "OOP Principles + JavaFX Suite",
    subHeading: "MVC • DAO • Observer • 95 % test coverage",
    docUrl: "/oop-report.pdf",
  },
  {
    id: "e-patterns",
    type: "edu",
    emoji: "📐",
    period: "2023",
    heading: "Design-Pattern Framework",
    subHeading: "Interactive UML generator & validator",
  },
  {
    id: "e-ai",
    type: "edu",
    emoji: "🤖",
    period: "2024",
    heading: "AI in Medicine",
    subHeading: "CNN AUC 0.92 • robotics & nanotech",
    docUrl: "/whitepaper.pdf",
  },
  {
    id: "e-os",
    type: "edu",
    emoji: "🖥️",
    period: "2023",
    heading: "xv6 Kernel Extensions",
    subHeading: "Shared-mem & syscalls • bespoke allocator • SMP",
  },
  {
    id: "e-psy",
    type: "edu",
    emoji: "🩺",
    period: "2024",
    heading: "Psychotherapy Scheduler",
    subHeading: "JavaFX • MySQL • multithreaded DAO • HIPAA-ready",
  },
];

/* ════════════════════════ 2 · HELPERS ═══════════════════════════ */

/* mini component – animated number chips */
function MetricChip({ label, delay }: { label: string; delay: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  /* count-up run once when chip is onscreen */
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const num = parseFloat(label.replace(/[^\d.]/g, ""));
    if (Number.isNaN(num)) return;

    const ob = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            countUp(el, 0, num, 900, label.replace(/[\d.]+/, ""));
            ob.disconnect();
          }
        },
        { threshold: 0.7 },
    );
    ob.observe(el);
    return () => ob.disconnect();
  }, [label]);

  return (
      <span
          ref={ref}
          style={{ animationDelay: `${delay}ms` }}
          className="chip chip-blue"
      >
      {label}
    </span>
  );
}

/* logo → falls back to emoji */
function Badge({ logo, emoji, type }: { logo?: string; emoji?: string; type: "work" | "edu" }) {
  const fallback =
      type === "work" ? (
          <Briefcase size={18} />
      ) : (
          <GraduationCap size={18} />
      );

  if (!logo) {
    return (
        <span className="grid place-content-center w-12 h-12 rounded-full bg-white text-xl">
        {emoji ?? (type === "work" ? "💼" : "🎓")}
      </span>
    );
  }

  return (
      <img
          src={logo}
          alt=""
          className="w-12 h-12 rounded-full object-contain bg-white p-1 border"
          onError={(e) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore – swap out
            e.currentTarget.replaceWith(fallback);
          }}
      />
  );
}

/* ════════════════════════ 3 · MAIN CMP ═════════════════════════ */

export default function WorkEducationEnhanced() {
  const [tab, setTab] = useState<"work" | "edu">("work");
  const data = tab === "work" ? work : education;

  /* observer for stagger entrance */
  useEffect(() => {
    const obs = createAnimationObserver(
        ".timeline-card",
        "animate-card",
        { threshold: 0.15 },
    );
    return () => obs.disconnect();
  }, [tab]);

  return (
      <section className="relative max-w-6xl mx-auto px-4 md:px-8 lg:px-16 py-section">
        <Backdrop />

        <HeaderToggle view={tab} setView={setTab} />

        <div className="relative mt-16 rounded-xl border border-white/10 bg-white/5 backdrop-blur">
          <span className="absolute left-[88px] top-0 bottom-0 w-px bg-white/20 rounded-full" />

          <ul className="py-6">
            {data.map((item, i) => (
                <Fragment key={item.id}>
                  {item.type === "work" ? (
                      <WorkCard item={item} index={i} />
                  ) : (
                      <EduCard item={item} index={i} />
                  )}
                </Fragment>
            ))}
          </ul>
        </div>
      </section>
  );
}

/* ═══════════════════════ 4 · SUB-COMPONENTS ═════════════════════ */

function WorkCard({ item, index }: { item: WorkItem; index: number }) {
  return (
      <li
          className="timeline-card relative flex pl-[7.5rem] pr-6 py-5 group"
          style={{ animationDelay: `${index * 90}ms` }}
      >
        <div className="absolute left-6 top-6">
          <Badge logo={item.logo} emoji={item.emoji} type="work" />
        </div>

        <div>
          <time className="text-xs fg-faint">{item.period}</time>
          <h3 className="font-semibold fg-base group-hover:text-sky-400">
            {item.heading}
          </h3>
          <p className="text-sm fg-subtle">{item.subHeading}</p>
          {item.subText && (
              <p className="text-xs fg-faint">{item.subText}</p>
          )}

          {item.metrics && (
              <div className="flex flex-wrap gap-2 mt-2">
                {item.metrics.map((m, i) => (
                    <MetricChip key={m} label={m} delay={i * 120} />
                ))}
              </div>
          )}

          {item.tech && (
              <div className="flex flex-wrap gap-1 mt-2">
                {item.tech.map((t) => (
                    <span
                        key={t}
                        className="rounded bg-muted/20 px-2 py-0.5 text-[10px] uppercase tracking-wide fg-faint"
                    >
                {t}
              </span>
                ))}
              </div>
          )}

          {item.liveUrl && (
              <a
                  href={item.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm inline-flex items-center gap-1 text-sky-400 hover:text-sky-300 mt-1"
              >
                <ExternalLink size={14} />
                Live Site
              </a>
          )}
        </div>

        {item.ribbon && (
            <span
                className={`absolute -top-2 -right-2 rounded px-2 py-[1px] text-[10px] font-bold ${
                    item.ribbon === "LIVE"
                        ? "bg-emerald-500 text-white"
                        : item.ribbon === "HOT"
                            ? "bg-amber-500 text-white"
                            : "bg-fuchsia-500 text-white"
                }`}
            >
          {item.ribbon}
        </span>
        )}
      </li>
  );
}

function EduCard({ item, index }: { item: EduItem; index: number }) {
  return (
      <li
          className="timeline-card relative flex pl-[7.5rem] pr-6 py-5 group"
          style={{ animationDelay: `${index * 90}ms` }}
      >
        <div className="absolute left-6 top-6">
          <Badge logo={item.logo} emoji={item.emoji} type="edu" />
        </div>

        <div>
          <time className="text-xs fg-faint">{item.period}</time>
          <h3 className="font-semibold fg-base group-hover:text-purple-400">
            {item.heading}
          </h3>
          <p className="text-sm fg-subtle">{item.subHeading}</p>
          {item.subText && (
              <p className="text-xs fg-faint">{item.subText}</p>
          )}

          {item.metrics && (
              <div className="flex flex-wrap gap-2 mt-2">
                {item.metrics.map((m, i) => (
                    <MetricChip key={m} label={m} delay={i * 120} />
                ))}
              </div>
          )}

          {item.docUrl && (
              <a
                  href={item.docUrl}
                  className="text-sm inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 mt-1"
              >
                <Download size={14} />
                PDF
              </a>
          )}
        </div>

        {item.ribbon && (
            <span className="absolute -top-2 -right-2 rounded px-2 py-[1px] text-[10px] font-bold bg-fuchsia-500 text-white">
          {item.ribbon}
        </span>
        )}
      </li>
  );
}

/* ---------- header toggle ---------- */
function HeaderToggle({
                        view,
                        setView,
                      }: {
  view: "work" | "edu";
  setView: (v: "work" | "edu") => void;
}) {
  return (
      <div className="flex justify-center">
        <div className="relative bg-neutral-900/60 border border-neutral-800 rounded-full p-1 backdrop-blur">
          <div
              className={`absolute inset-y-1 rounded-full bg-gradient-to-r from-sky-500 to-fuchsia-500 transition-all duration-300 ${
                  view === "work" ? "left-1 right-1/2" : "left-1/2 right-1"
              }`}
          />

          <button
              className={`relative z-10 px-10 py-2 font-medium ${
                  view === "work"
                      ? "text-white"
                      : "text-gray-400 hover:text-gray-200"
              } transition`}
              onClick={() => setView("work")}
          >
            Work
          </button>
          <button
              className={`relative z-10 px-10 py-2 font-medium ${
                  view === "edu"
                      ? "text-white"
                      : "text-gray-400 hover:text-gray-200"
              } transition`}
              onClick={() => setView("edu")}
          >
            Education
          </button>
        </div>
      </div>
  );
}

/* ---------- backdrop rings ---------- */
function Backdrop() {
  return (
      <>
        <div className="pointer-events-none absolute -z-10 left-1/2 -translate-x-1/2 -top-52 w-[900px] h-[900px] rounded-full bg-sky-500/5 blur-[160px]" />
        <div className="pointer-events-none absolute -z-10 right-0 top-1/3 w-[600px] h-[600px] -rotate-45 bg-gradient-to-b from-fuchsia-500/5 via-transparent to-sky-500/0 blur-[160px]" />
      </>
  );
}
