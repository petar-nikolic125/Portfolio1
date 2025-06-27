import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import WorkEducation from "@/components/WorkEducation";
import Skills from "@/components/Skills";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Hero />
      <FeaturedWork />
      <WorkEducation />
      <Skills />
      <ProjectsShowcase />
      <Footer />
    </div>
  );
}
