import Hero from "@/components/Hero";
import WorkEducation from "@/components/WorkEducation";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Hero />
      <WorkEducation />
      <ProjectsShowcase />
      <Skills />
      <Footer />
    </div>
  );
}
