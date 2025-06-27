import HeroMinimal from "@/components/HeroMinimal";
import WorkEducationTabs from "@/components/WorkEducationTabs";
import ProjectsMinimal from "@/components/ProjectsMinimal";
import SkillsMinimal from "@/components/SkillsMinimal";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroMinimal />
      <WorkEducationTabs />
      <ProjectsMinimal />
      <SkillsMinimal />
    </div>
  );
}
