/* HomePage.tsx  ── one-scroll portfolio landing */
import HeroEnhanced          from "@/components/HeroEnhanced";
import WorkEducationEnhanced from "@/components/WorkEducationEnhanced";
import Skills                from "@/components/Skills";
import ProjectsEnhanced      from "@/components/ProjectsEnhanced";
import Footer                from "@/components/Footer";

export default function HomePage() {
    return (
        <>
            <HeroEnhanced />

            {/* ------------- EXPERIENCE / EDUCATION ------------- */}
            <WorkEducationEnhanced />

            {/* ------------- SKILLS TAG-CLOUD -------------------- */}
            <Skills />

            {/* ------------- INLINE PROJECT GRID ---------------- */}
            {/* If you prefer the grid to live on its own page,
         just delete this line – the /projects route
         created in step 2 stays intact.                    */}
            <ProjectsEnhanced />

            <Footer />
        </>
    );
}
