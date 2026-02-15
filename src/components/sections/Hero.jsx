import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center px-6">
      <div className="max-w-6xl mx-auto w-full space-y-6">
        
        <motion.h1 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-text"
        >
          Loïc M.
        </motion.h1>

        <motion.div 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-2xl md:text-4xl text-muted font-medium h-[50px]"
        >
          <Typewriter
            options={{
              strings: [
                "Développeur Web Full-Stack",
                "Architecte React",
                "Créateur d'interfaces",
                "Futur Project Manager"
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
            }}
          />
        </motion.div>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-xl text-muted text-lg leading-relaxed"
        >
          Je construis des expériences web rapides, accessibles et visuellement minimalistes.
        </motion.p>
        
      </div>
    </section>
  );
}