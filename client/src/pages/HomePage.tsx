/* HomePage.tsx  ── one-scroll portfolio landing */
import HeroEnhanced          from "@/components/HeroEnhanced";
import WorkEducationEnhanced from "@/components/WorkEducationEnhanced";
import Skills                from "@/components/Skills";
import ProjectsEnhanced      from "@/components/ProjectsEnhanced";
import Footer                from "@/components/Footer";
import StickyNav             from "@/components/StickyNav";

export default function HomePage() {
    return (
        <>
            <StickyNav />
            
            {/* Hero section with id for navigation */}
            <section id="hero">
                <HeroEnhanced />
            </section>

            {/* Experience section - already has id="experience" */}
            <WorkEducationEnhanced />

            {/* Skills section with id for navigation */}
            <section id="skills">
                <Skills />
            </section>

            {/* Projects section with id for navigation */}
            <section id="projects">
                <ProjectsEnhanced />
            </section>

            {/* Contact/Footer section with id for navigation */}
            <section id="contact">
                <Footer />
            </section>
        </>
    );
}
