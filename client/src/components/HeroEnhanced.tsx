/* ------------------------------------------------------------------
   HeroEnhanced.tsx  — centred, assertive hero (2025-06-28)
------------------------------------------------------------------- */
import { useEffect } from "react";
import { FileText, MessageCircle, MapPin } from "lucide-react";
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";

import { personalInfo } from "@/data/portfolio";
import { Button }       from "@/components/ui/button";

export default function HeroEnhanced() {
  /* — keyboard helpers — */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey) return;
      const k = e.key.toLowerCase();
      if (k === "r") window.open("/resume.pdf", "_blank");
      if (k === "g") window.open(personalInfo.social.github);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
      <section className="relative flex items-center justify-center min-h-screen bg-[hsl(var(--bg))]">
        {/* background blobs ―–––––––––––––––––––––––––––––––––––––– */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-0 w-[36rem] h-[36rem] -translate-x-1/2 bg-[hsl(var(--brand-sky)/.10)] blur-[160px]" />
          <div className="absolute right-0 bottom-0 w-[28rem] h-[28rem] bg-[hsl(var(--brand-fuchsia)/.10)] blur-[140px]" />
        </div>

        {/* content ―–––––––––––––––––––––––––––––––––––––––––––––– */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto text-center">
            {/* name */}
            <h1 className="font-serif font-extrabold fg-base leading-none tracking-tight
                         text-[clamp(3.25rem,9vw,6rem)] fade-in-up delay-75
                         hover:text-glow transition-all duration-700">
            {personalInfo.name}
          </h1>

          {/* title */}
          <h2 className="mt-6 fg-subtle font-light text-[clamp(1.75rem,3vw,2.5rem)]
                       fade-in-up delay-150 shimmer-text">
            {personalInfo.title}
          </h2>

          {/* tagline */}
          <p className="mt-4 mx-auto max-w-2xl fg-faint text-lg
                      fade-in-up delay-225">
            {personalInfo.subtitle}
          </p>

          {/* location line */}
          <p className="mt-8 flex items-center justify-center gap-2 text-sm uppercase tracking-wider fg-faint
                      fade-in-up delay-300">
            <MapPin className="w-3.5 h-3.5 animate-pulse" />
            {personalInfo.location}
          </p>

          {/* primary actions */}
          <div className="mt-12 flex flex-wrap justify-center gap-4 fade-in-up delay-375">
            <Button variant="outline" className="btn-outline flex items-center gap-2 px-6 hover-lift group relative overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[hsl(var(--accent-from)/.1)] to-transparent 
                           -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              <FileText className="w-4 h-4 group-hover:rotate-[360deg] transition-transform duration-700" />
              <span className="relative">Résumé</span>
            </Button>

            <Button className="btn-primary flex items-center gap-2 px-6 hover-lift group relative overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--accent-to))] to-[hsl(var(--accent-from))] 
                           opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              <span className="relative">Let&rsquo;s&nbsp;Talk</span>
            </Button>
          </div>

          {/* socials */}
          <div className="mt-12 flex justify-center gap-7 fg-faint text-[1.25rem] fade-in-up delay-450">
            <a href={personalInfo.social.github} aria-label="GitHub" className="social-link group relative hover-lift">
              <span className="absolute inset-0 bg-[hsl(var(--accent-from)/.15)] scale-0 group-hover:scale-100 rounded-full transition-transform duration-500"></span>
              <SiGithub className="relative group-hover:rotate-[360deg] transition-transform duration-700" />
            </a>
            <a href={personalInfo.social.linkedin} aria-label="LinkedIn" className="social-link group relative hover-lift">
              <span className="absolute inset-0 bg-[hsl(var(--accent-from)/.15)] scale-0 group-hover:scale-100 rounded-full transition-transform duration-500"></span>
              <SiLinkedin className="relative group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a href={personalInfo.social.instagram} aria-label="Instagram" className="social-link group relative hover-lift">
              <span className="absolute inset-0 bg-[hsl(var(--accent-from)/.15)] scale-0 group-hover:scale-100 rounded-full transition-transform duration-500"></span>
              <SiInstagram className="relative group-hover:rotate-[10deg] transition-transform duration-300" />
            </a>
            <a href={`mailto:${personalInfo.social.email}`} aria-label="Email" className="social-link">
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-[1.35rem] h-[1.35rem]">
                <path d="M2 4a2 2 0 012-2h12a2 2 0 012 2v.217l-10 5.555L2 4.217V4z" />
                <path d="M18 8.118l-8 4.445-8-4.445V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </a>
          </div>

          {/* shortcut hint */}
          <p className="mt-14 text-xs fg-faint">
            Press&nbsp;
            <kbd className="bg-[hsl(var(--bg-surface))] border border-[hsl(var(--border-color))] px-1.5 py-0.5 rounded">R</kbd>&nbsp;for résumé ·&nbsp;
            <kbd className="bg-[hsl(var(--bg-surface))] border border-[hsl(var(--border-color))] px-1.5 py-0.5 rounded">G</kbd>&nbsp;for GitHub
          </p>
          </div>
        </div>
      </section>
  );
}
