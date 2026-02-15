import { motion } from 'framer-motion';
import { DiJavascript1, DiReact, DiNodejs } from 'react-icons/di';
import { SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si';

// On ajoute une propriété 'color' avec le vrai code HEX de la marque
const SKILLS = [
  { name: "JavaScript", icon: DiJavascript1, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: DiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" }, // Next est souvent blanc sur fond sombre
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", icon: DiNodejs, color: "#339933" },
];

export default function Skills() {
  return (
    <section className="py-24 px-6 relative" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Compétences</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              // On retire le hover:border-accent et le text-muted sur le parent
              className="bg-card border border-border rounded p-6 flex flex-col items-center gap-4 hover:bg-neutral-900 transition-colors cursor-default group"
            >
              {/* On applique la couleur directement sur le composant Icône via le style inline */}
              <skill.icon size={32} style={{ color: skill.color }} className="transition-transform group-hover:scale-110" />
              
              <span className="text-sm font-medium text-muted group-hover:text-white transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}