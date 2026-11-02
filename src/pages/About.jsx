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
              Je suis développeur Full Stack en alternance chez OCAPIAT, à Paris, en parallèle de mon Master MIAGE.
              Avant ça, j'ai fait ma licence d'informatique à Sorbonne Université, de 2023 à 2026.
            </p>
            <p>
              En 2025, j'ai fait mon stage chez AFNOR Groupe. Le sujet : un backoffice écrit en C# MVC, à migrer vers Blazor.
              J'ai repris le code existant, conçu la nouvelle interface en Blazor et travaillé sur le temps de chargement du site.
            </p>
            <p>
              À la fac, j'ai codé une simulation d'écosystème en C et travaillé sur les automates en Python.
              Le Master me sert à compléter avec ce qui se joue autour du code : l'architecture logicielle et la gestion de projet.
            </p>
            <p>
              Le reste du temps, je suis à la salle de musculation.
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
