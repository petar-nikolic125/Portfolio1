import { skills } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";

export default function Skills() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif font-bold text-4xl text-gray-100 mb-12">Skills</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <Badge
              key={skill}
              variant="secondary"
              className="px-4 py-2 bg-gray-800 text-gray-300 rounded border border-gray-700 text-sm font-medium hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gray-900/20 transition-all duration-300 cursor-default"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
