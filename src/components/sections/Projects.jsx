import { AiFillGithub } from 'react-icons/ai';
import { BiLinkExternal } from 'react-icons/bi';
import TechBadge from '../line/TechBadge';

const PROJECTS = [
  { title: "Portfolio V1", description: "Architecture React propre et minimaliste.", tech: ["React", "Tailwind", "JavaScript"], github: "https://github.com/lmennessier/mon-portfolio", live: "#" },
  { title: "Automate", description: "Projet Universitaire sur des Automates", tech: ["Python","Jupyter"], github: "https://github.com/lmennessier/Automate" },
  { title: "Ecosys-Simu", description: "Simulation d'un écosystème", tech: ["C"], github: "https://github.com/lmennessier/Ecocsys-Project"}
];

// Un lien "#" ne mène nulle part : on ne l'affiche pas
const hasLink = (url) => Boolean(url) && url !== '#';

export default function Projects() {
  return (
    <section className="pt-16 md:pt-12 pb-16 md:pb-24 px-6" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-[-0.03em]">Projets sélectionnés</h2>

        <ol className="line-list mt-10 md:mt-8">
          {PROJECTS.map((project) => (
            <li key={project.title} className="station station--interactive pb-12 md:pb-14">
              {/* Anatomie fixe : nom, description, stack, lien */}
              <article>
                <h3 className="text-2xl md:text-[1.75rem] font-extrabold leading-8 tracking-tight">{project.title}</h3>
                <p className="mt-2 text-lg text-muted max-w-prose">{project.description}</p>

                <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <ul className="flex flex-wrap gap-2" aria-label="Technologies">
                    {project.tech.map((tech) => (
                      <li key={tech}><TechBadge name={tech} /></li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    {hasLink(project.github) && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-bold text-line hover:text-line-deep underline decoration-2 decoration-transparent hover:decoration-current transition-colors"
                      >
                        <AiFillGithub size={20} aria-hidden="true" />
                        Code source
                        <span className="sr-only"> de {project.title}</span>
                      </a>
                    )}
                    {hasLink(project.live) && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-bold text-line hover:text-line-deep underline decoration-2 decoration-transparent hover:decoration-current transition-colors"
                      >
                        <BiLinkExternal size={20} aria-hidden="true" />
                        Voir en ligne
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
