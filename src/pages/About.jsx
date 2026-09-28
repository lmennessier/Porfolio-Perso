const DOMAINES = [
  'Développement Web (React, Node.JS, Blazor)',
  'Développement Logiciel (C#, Java)',
  'Bases de données & Déploiement (SQL, Azure)',
  'Modélisation UML',
];

export default function About() {
  return (
    <section className="pt-36 md:pt-44 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[minmax(0,1fr)_minmax(0,20rem)] gap-x-16 gap-y-12">
        <div>
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold tracking-[-0.035em] leading-[0.95]">
            À propos
          </h1>

          <div className="mt-10 max-w-[65ch] text-lg text-muted leading-relaxed space-y-6">
            <p>
              Je suis Développeur Full Stack en alternance chez OCAPIAT, à Paris, en parallèle de mon Master MIAGE.
              Diplômé d'une Licence en Informatique à Sorbonne Université, j'approfondis mes compétences en architecture logicielle et en gestion de projet.
            </p>
            <p>
              Grâce à ma formation et à mes expériences, je suis capable d'intervenir sur différentes couches d'un projet, avec une approche axée sur la rigueur technique et la résolution de problèmes.
            </p>
            <p>
              Dans mon temps libre, je pratique assidûment la musculation. C'est une discipline qui forge la rigueur, la constance et le dépassement de soi, des qualités que j'applique directement dans mes développements.
            </p>
          </div>
        </div>

        <aside className="md:pt-4">
          <h2 className="text-xl font-extrabold tracking-tight">Domaines</h2>
          <ul className="mt-4 border-t border-rule">
            {DOMAINES.map((domaine) => (
              <li key={domaine} className="border-b border-rule py-3 font-semibold">{domaine}</li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
