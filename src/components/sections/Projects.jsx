import { motion } from 'framer-motion';
import { AiOutlineGithub } from 'react-icons/ai';
import { BiLinkExternal } from 'react-icons/bi';

const getTechIcon = (techName) => {
  return (
    <img 
      src={`/TechIcons/${encodeURIComponent(techName)}.svg`} 
      alt={techName} 
      className="w-4 h-4 object-contain"
      onError={(e) => {
        e.target.style.display = 'none';
      }}
    />
  );
};

const PROJECTS = [
  { title: "Portfolio V1", description: "Architecture React propre et minimaliste.", tech: ["React", "Tailwind", "JavaScript"], github: "https://github.com/lmennessier/mon-portfolio", live: "#" },
  { title: "Automate", description: "Projet Universitaire sur des Automates", tech: ["Python","Jupyter"], github: "https://github.com/lmennessier/Automate" },
  { title: "Ecosys-Simu", description: "Simulation d'un écosystème", tech: ["C"], github: "https://github.com/lmennessier/Ecocsys-Project"}
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
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs border border-border px-2 py-1 rounded text-muted flex items-center gap-1.5">
                    {getTechIcon(tech)}
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors">
                    <AiOutlineGithub size={24} />
                  </a>
                )}
                
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors">
                    <BiLinkExternal size={24} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}