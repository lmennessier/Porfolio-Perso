import TechBadge from '../line/TechBadge';

const SKILLS = [
  { name: "JavaScript" },
  { name: "React" },
  { name: "Tailwind" },
  { name: "Node.JS" },
  { name: "Csharp", label: "C#" },
  { name: "C" },
  { name: "Java" },
  { name: "Python" },
  { name: "Git" },
  { name: "Azure" },
  { name: "Claude Code" }
];

export default function Skills() {
  return (
    <section className="py-16 md:py-24 px-6" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-[-0.03em]">Compétences</h2>

        {/* Légende des correspondances, comme au bas d'un plan de ligne */}
        <ul className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 justify-items-start gap-3 border-t border-rule pt-8">
          {SKILLS.map((skill) => (
            <li key={skill.name}>
              <TechBadge name={skill.name} label={skill.label} size="lg" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
