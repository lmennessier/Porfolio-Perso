import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen pt-32 px-6 flex justify-center items-center">
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
              Je suis un développeur Front-End spécialisé dans l'écosystème React. 
              Mon objectif est de concevoir des interfaces rapides, accessibles et scalables.
            </p>
            <p>
              J'accorde une importance particulière à l'architecture du code et à l'expérience utilisateur.
            </p>
            
            <ul className="list-disc list-inside space-y-2 text-text">
              <li>Développement de SPA & SSR (Next.js)</li>
              <li>Intégration pixel-perfect</li>
              <li>Optimisation des performances web</li>
            </ul>
          </div>
        </motion.div>

      </div>
    </div>
  );
}