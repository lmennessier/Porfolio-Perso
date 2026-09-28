import { AiOutlineDownload } from 'react-icons/ai';

const pdfLink1 = "/resume/CV_ALTERNACE_MIAGE.pdf";
const pdfLink2 = "/resume/CV_ALTERNANCE_GL.pdf";

const STACK = ['C#', 'Java', 'React', 'Node.js', 'JavaScript', 'Blazor', 'SQL', 'Git', 'Azure', 'Claude Code'];

export default function Resume() {
  return (
    <section className="pt-36 md:pt-44 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold tracking-[-0.035em] leading-[0.95]">
            Curriculum Vitae
          </h1>

          <div className="flex flex-wrap gap-3">
            <a href={pdfLink1} target="_blank" rel="noreferrer" className="btn btn-line">
              <AiOutlineDownload size={20} aria-hidden="true" />
              Télécharger le CV MIAGE (PDF)
            </a>
            <a href={pdfLink2} target="_blank" rel="noreferrer" className="btn btn-ghost">
              <AiOutlineDownload size={20} aria-hidden="true" />
              Télécharger le CV GL (PDF)
            </a>
          </div>
        </div>

        {/* Aperçu HTML du CV */}
        <article className="mt-14 bg-station border border-rule rounded-lg p-8 md:p-12">
          <header className="border-b border-rule pb-8 mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-[-0.03em]">Loïc Mennessier</h2>
            <p className="text-lg text-muted mt-2 font-medium">Développeur Full Stack / Gestion de Projet IT / Master MIAGE en alternance</p>
          </header>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-12">
              <section>
                <h3 className="text-2xl font-extrabold tracking-tight mb-5">Expérience</h3>
                <CvEntry
                  title="Développeur Full Stack (Alternance)"
                  when="Depuis 2026"
                  where="OCAPIAT - Paris"
                />
                <CvEntry
                  title="Développeur Web & .NET (Stage)"
                  when="2025"
                  where="AFNOR Groupe"
                  items={[
                    "Migration d'un backoffice MVC C# vers la technologie Microsoft Blazor.",
                    "Optimisation du temps de chargement du site web.",
                    "Conception de l'interface utilisateur en Blazor.",
                  ]}
                />
              </section>

              <section>
                <h3 className="text-2xl font-extrabold tracking-tight mb-5">Formation</h3>
                <CvEntry
                  title="Master MIAGE (Alternance)"
                  when="Depuis 2026"
                />
                <CvEntry
                  title="Licence en Informatique"
                  when="2023 – 2026"
                  where="Sorbonne Université - Paris"
                  items={[
                    'Programmation orientée objet',
                    'Développement Web',
                    'Génie Logiciel',
                    'Intelligence Artificielle et Jeux',
                  ]}
                />
              </section>
            </div>

            <div className="space-y-12">
              <section>
                <h3 className="text-2xl font-extrabold tracking-tight mb-5">Tech Stack</h3>
                <ul className="flex flex-wrap gap-2">
                  {STACK.map((tech) => (
                    <li key={tech} className="correspondence pl-3">{tech}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="text-2xl font-extrabold tracking-tight mb-5">Langues</h3>
                <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2">
                  <dt className="font-bold">Français</dt><dd className="text-muted">Maternel</dd>
                  <dt className="font-bold">Anglais</dt><dd className="text-muted">B2</dd>
                </dl>
              </section>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

function CvEntry({ title, when, where, items = [] }) {
  return (
    <div className="[&+&]:mt-8">
      <div className="flex flex-wrap justify-between items-baseline gap-x-4">
        <h4 className="text-xl font-bold leading-8">{title}</h4>
        <span className="text-sm font-semibold text-muted tabular-nums">{when}</span>
      </div>
      {where && <p className="text-muted font-medium">{where}</p>}
      {items.length > 0 && <ul className="mt-4 space-y-2 text-muted leading-relaxed">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span aria-hidden="true" className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
            <span>{item}</span>
          </li>
        ))}
      </ul>}
    </div>
  );
}
