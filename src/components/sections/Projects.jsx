import { motion } from 'framer-motion';
import { AiOutlineGithub } from 'react-icons/ai';
import { BiLinkExternal } from 'react-icons/bi';
import { DiReact, DiNodejs, DiMongodb } from 'react-icons/di';
import { SiNextdotjs, SiTailwindcss, SiFramer, SiStripe } from 'react-icons/si'; // Correction ici

const getTechIcon = (techName) => {
  const iconSize = 16;
  
  switch (techName.toLowerCase().trim()) {
    case "react": return <DiReact size={iconSize} color="#61DAFB" />;
    case "tailwind": return <SiTailwindcss size={iconSize} color="#06B6D4" />;
    case "framer motion": return <SiFramer size={iconSize} color="#ffffff" />; // Correction ici
    case "next.js": return <SiNextdotjs size={iconSize} color="#ffffff" />;
    case "stripe": return <SiStripe size={iconSize} color="#635BFF" />;
    case "node.js": return <DiNodejs size={iconSize} color="#339933" />;
    case "mongodb": return <DiMongodb size={iconSize} color="#47A248" />;
    default: return null;
  }
};
const PROJECTS = [
  { title: "Portfolio V1", description: "Architecture React propre et minimaliste.", tech: ["React", "Tailwind", "Framer Motion"], github: "#", live: "#" },
  { title: "E-Commerce", description: "Plateforme complète.", tech: ["Next.js", "Stripe", "Tailwind"], github: "#", live: "#" },
  { title: "Dashboard", description: "Outil de gestion de données.", tech: ["React", "Node.js", "MongoDB"], github: "#", live: "#" }
];

export default function Projects() {
  return (
    <section className="py-24 px-6" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Projets Sélectionnés</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border p-6 rounded hover:border-neutral-500 transition-colors flex flex-col h-full"
            >
              <h3 className="text-xl font-bold mb-3 text-text">{project.title}</h3>
              <p className="text-muted mb-6 flex-grow">{project.description}</p>
              
              {/* Badges avec icônes colorées */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs border border-border px-2 py-1 rounded text-muted flex items-center gap-1.5">
                    {getTechIcon(tech)}
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a href="#" className="text-muted hover:text-white transition-colors"><AiOutlineGithub size={24} /></a>
                <a href="#" className="text-muted hover:text-white transition-colors"><BiLinkExternal size={24} /></a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}