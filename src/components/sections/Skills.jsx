import { motion } from 'framer-motion';

const SKILLS = [
  { name: "JavaScript" },
  { name: "React" },
  { name: "Tailwind" },
  { name: "Node.JS" },
  { name: "Csharp" },
  { name: "C" },
  { name: "Java" },
  { name: "Python" },
  { name: "Git" },
  { name: "Azure" }
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
              className="bg-card border border-border rounded p-6 flex flex-col items-center gap-4 hover:bg-neutral-900 transition-colors cursor-default group"
            >
              <img 
                src={`/TechIcons/${encodeURIComponent(skill.name)}.svg`} 
                alt={skill.name} 
                className="w-10 h-10 object-contain transition-transform group-hover:scale-110"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              
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