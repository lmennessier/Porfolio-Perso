import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { AiFillGithub } from 'react-icons/ai';

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
                "Recherche Alternance Master"
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

        {/* --- NOUVEAU : Bloc Icônes Sociaux --- */}
        <motion.div
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex gap-6 items-center pt-4"
        >
          <a 
            href="https://github.com/lmennessier" 
            target="_blank" 
            rel="noreferrer" 
            className="text-muted hover:text-white transition-colors"
          >
            <AiFillGithub size={30} />
          </a>
          
          <a 
            href="https://www.linkedin.com/in/loic-mennessier" 
            target="_blank" 
            rel="noreferrer" 
            className="opacity-70 hover:opacity-100 transition-opacity flex items-center justify-center"
          >
            <img 
              src="/TechIcons/linkedin.svg" 
              alt="LinkedIn" 
              className="w-[26px] h-[26px] object-contain"
              onError={(e) => e.target.style.display = 'none'}
            />
          </a>
          <a 
            href="https://www.instagram.com/loic.menn/" 
            target="_blank" 
            rel="noreferrer" 
            className="opacity-70 hover:opacity-100 transition-opacity flex items-center justify-center"
          >
            <img 
              src="/TechIcons/instagram.svg" 
              alt="Instagram" 
              className="w-[26px] h-[26px] object-contain"
              onError={(e) => e.target.style.display = 'none'}
            />
          </a>
        </motion.div>
        
      </div>
    </section>
  );
}