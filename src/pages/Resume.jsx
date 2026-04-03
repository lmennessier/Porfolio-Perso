import { motion } from 'framer-motion';
import { AiOutlineDownload } from 'react-icons/ai';

const pdfLink1 = "/resume/CV_ALTERNACE_MIAGE.pdf"; 
const pdfLink2 = "/resume/CV_ALTERNANCE_GL.pdf"; 

export default function Resume() {
  return (
    <div className="min-h-screen pt-32 px-6 flex flex-col items-center">
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full max-w-4xl flex flex-col items-center pb-20"
      >
        <h1 className="text-4xl font-bold text-text mb-8">Curriculum Vitae</h1>

        <a 
          href={pdfLink1}
          target="_blank"
          rel="noreferrer"
          className="bg-text text-bg font-medium py-3 px-8 rounded flex items-center gap-3 mb-12 hover:opacity-90 transition-opacity"
        >
          <AiOutlineDownload size={24} />
          Télécharger le CV MIAGE(PDF)
        </a>

        <a 
          href={pdfLink2}
          target="_blank"
          rel="noreferrer"
          className="bg-text text-bg font-medium py-3 px-8 rounded flex items-center gap-3 mb-12 hover:opacity-90 transition-opacity"
        >
          <AiOutlineDownload size={24} />
          Télécharger le CV GL(PDF)
        </a>

        {/* Aperçu HTML du CV */}
        <div className="w-full border border-border bg-card rounded-lg p-8 md:p-12 text-left shadow-lg">
          
          {/* En-tête CV */}
          <div className="border-b border-border pb-6 mb-8">
            <h2 className="text-3xl font-bold text-text tracking-tight">Loïc Mennessier</h2>
            <p className="text-lg text-muted mt-2 font-medium">Développeur d'Applications/ Gestion de Projet IT / Recherche d'Alternance Master</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            
            {/* Colonne Gauche (Expérience & Formation) */}
            <div className="md:col-span-2 space-y-10">
              
              <section>
                <h3 className="text-sm font-bold text-text mb-6 uppercase tracking-widest border-l-2 border-text pl-3">Expérience</h3>
                
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="text-lg font-bold text-text">Développeur Web & .NET (Stage)</h4>
                      <span className="text-sm text-muted">2025</span>
                    </div>
                    <p className="text-muted text-sm mb-3">AFNOR Groupe</p>
                    <ul className="list-disc list-inside text-muted text-sm space-y-2 leading-relaxed">
                      <li>Migration d'un backoffice MVC C# vers la technologie Microsoft Blazor.</li>
                      <li>Optimisation du temps de chargement du site web.</li>
                      <li>Conception de l'interface utilisateur en Blazor.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-sm font-bold text-text mb-6 uppercase tracking-widest border-l-2 border-text pl-3">Formation</h3>
                
                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-lg font-bold text-text">Licence en Informatique</h4>
                    <span className="text-sm text-muted">2023 - 2026</span>
                  </div>
                  <p className="text-muted text-sm mb-2">Sorbonne Université - Paris</p>
                  <ul className="list-disc list-inside text-muted text-sm space-y-1">
                    <li>Programmation orientée objet</li>
                    <li>Développement Web</li>
                    <li>Génie Logiciel</li>
                    <li>Intelligence Artificielle et Jeux</li>
                  </ul>
                </div>
              </section>

            </div>

            {/* Colonne Droite (Compétences & Infos) */}
            <div className="space-y-10">
              
              <section>
                <h3 className="text-sm font-bold text-text mb-6 uppercase tracking-widest border-l-2 border-text pl-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs border border-border px-2 py-1 rounded text-muted bg-bg">C#</span>
                  <span className="text-xs border border-border px-2 py-1 rounded text-muted bg-bg">Java</span>
                  <span className="text-xs border border-border px-2 py-1 rounded text-muted bg-bg">React</span>
                  <span className="text-xs border border-border px-2 py-1 rounded text-muted bg-bg">Node.js</span>
                  <span className="text-xs border border-border px-2 py-1 rounded text-muted bg-bg">JavaScript</span>
                  <span className="text-xs border border-border px-2 py-1 rounded text-muted bg-bg">Blazor</span>
                  <span className="text-xs border border-border px-2 py-1 rounded text-muted bg-bg">SQL</span>
                  <span className="text-xs border border-border px-2 py-1 rounded text-muted bg-bg">Git</span>
                  <span className="text-xs border border-border px-2 py-1 rounded text-muted bg-bg">Azure</span>
                </div>
              </section>

              <section>
                <h3 className="text-sm font-bold text-text mb-6 uppercase tracking-widest border-l-2 border-text pl-3">Langues</h3>
                <ul className="text-sm text-muted space-y-2">
                  <li>Français (Maternel)</li>
                  <li>Anglais (B2)</li>
                </ul>
              </section>

            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}