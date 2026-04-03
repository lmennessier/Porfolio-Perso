import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="min-h-screen pt-32 px-6 flex justify-center items-center">
      <div className="max-w-4xl w-full">
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="space-y-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            À propos
          </h1>
          
          <div className="text-lg text-muted leading-relaxed space-y-6">
            <p>
              Je suis un Développeur d'Applications, récemment diplômé d'une Licence en Informatique à Sorbonne Université. 
              Je recherche actuellement une alternance pour mon Master afin d'approfondir mes compétences en architecture logicielle et en gestion de projet.
            </p>
            <p>
              Grâce à ma formation et à mes expériences, je suis capable d'intervenir sur différentes couches d'un projet, avec une approche axée sur la rigueur technique et la résolution de problèmes.
            </p>
            
            <ul className="list-disc list-inside space-y-2 text-text">
              <li>Développement Web (React, Node.JS, Blazor)</li>
              <li>Développement Logiciel (C#, Java)</li>
              <li>Bases de données & Déploiement (SQL, Azure)</li>
              <li>Modélisation UML</li>
            </ul>

            <p>
              Dans mon temps libre, je pratique assidûment la musculation. C'est une discipline qui forge la rigueur, la constance et le dépassement de soi, des qualités que j'applique directement dans mes développements.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}