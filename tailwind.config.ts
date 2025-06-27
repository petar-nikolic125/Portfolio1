/* ------------------------------------------------------------------
   tailwind.config.ts — 2025-06-28
   ▶  Font:      Space Grotesk / General Sans
   ▶  Palette:   Slate /  Electric-Blue
   ▶  Extras:    smoother keyframes + healthy TS types
------------------------------------------------------------------- */
import type { Config } from "tailwindcss";
import plugin          from "tailwindcss/plugin";
import { fontFamily }  from "tailwindcss/defaultTheme";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      /* radius ---------------------------------------------------- */
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      /* palette --------------------------------------------------- */
      colors: {
        /* core surfaces (override these CSS vars in :root) */
        background:  "var(--background)",       // #030712  →  dark-slate
        foreground:  "var(--foreground)",       // #e2e8f0  →  slate-100
        accent:      {                          // electric-blue
          DEFAULT:    "var(--accent)",          // #0284c7
          foreground: "var(--accent-foreground)"// #e0f2fe
        },
        primary:     { DEFAULT: "#0284c7", foreground: "#e0f2fe" }, // alias
        border:      "#1e293b",  /* slate-800 */
        ring:        "#0ea5e9",  /* sky-500  */
        muted:       { DEFAULT: "#0f172a", foreground: "#64748b" },

        /* brand  &  status chips */
        success: { DEFAULT: "#22c55e", fg: "#f0fdf4" },
        info:    { DEFAULT: "#0ea5e9", fg: "#e0f2fe" },
        warn:    { DEFAULT: "#eab308", fg: "#fefce8" },
        danger:  { DEFAULT: "#ef4444", fg: "#fef2f2" },
      },

      /* fonts ----------------------------------------------------- */
      fontFamily: {
        display: ["'Space Grotesk'", ...fontFamily.sans],
        sans:    ["'General Sans'",  ...fontFamily.sans],
        mono:    ["'Fira Code'",     ...fontFamily.mono],
      },

      /* fluid type helpers --------------------------------------- */
      fontSize: {
        "fluid-6": "clamp(3.5rem,10vw,9rem)",   /* hero name      */
        "fluid-5": "clamp(2.2rem,6vw,4.2rem)",  /* big subheadings*/
        "fluid-4": "clamp(1.75rem,4vw,3rem)",   /* section titles */
      },

      /* keyframes ------------------------------------------------- */
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to:   { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to:   { height: "0" },
        },
        glow:   {
          "0%,100%": { textShadow: "0 0 0 rgba(0,0,0,0)" },
          "50%":     { textShadow: "0 0 24px rgba(2,132,199,.45)" },
        },
        flicker: {
          "0%, 100%": { opacity: "0.99" },
          "50%":      { opacity: "0.35" },
        },
      },

      animation: {
        "accordion-down": "accordion-down .25s ease-out",
        "accordion-up":   "accordion-up   .25s ease-out",
        glow:             "glow 4s infinite ease-in-out",
        flicker:          "flicker 3s infinite linear",
      },
    },
  },

  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),

    /* prose-dark code colour tweak, typed  */
    plugin(({ addBase }) => {
      addBase({ ".prose-invert code": { color: "var(--accent)" } });
    }),
  ],
} satisfies Config;
