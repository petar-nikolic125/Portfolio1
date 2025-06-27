import { skillsByCategory } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";

export default function Skills() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif font-bold text-4xl text-gray-100 text-center mb-16">Skills</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skillsByCategory).map(([category, skills]) => (
            <div key={category} className="text-center">
              <h3 className="font-sans font-semibold text-lg text-gray-200 mb-4 tracking-wide">
                {category}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-3 py-1.5 bg-gray-800 text-gray-300 rounded border border-gray-700 text-xs font-medium hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gray-900/20 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
