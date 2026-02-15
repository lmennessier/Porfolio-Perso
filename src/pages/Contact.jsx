import { motion } from 'framer-motion';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { FaLocationArrow } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="min-h-screen pt-32 px-6 flex flex-col items-center justify-center">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12">
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-text">Contact</h1>
          <p className="text-muted">Disponible pour de nouvelles opportunités.</p>
          
          <div className="space-y-6 pt-4">
            <div className="flex items-center gap-4 text-muted hover:text-text transition-colors">
              <AiOutlinePhone size={24} />
              <span>+33 6 37 29 32 15</span>
            </div>
            <div className="flex items-center gap-4 text-muted hover:text-text transition-colors">
              <AiOutlineMail size={24} />
              <span>lmennessier99@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 text-muted hover:text-text transition-colors">
              <FaLocationArrow size={24} />
              <span>Paris, France</span>
            </div>
          </div>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
         
          action="https://formspree.io/f/xwvnoygn"
          method="POST"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input 
              type="text" 
              name="nom" // OBLIGATOIRE
              placeholder="Nom" 
              required // OBLIGATOIRE
              className="w-full bg-card border border-border p-4 rounded text-text placeholder-muted focus:border-accent focus:outline-none transition-colors"
            />
            <input 
              type="email" 
              name="email" // OBLIGATOIRE
              placeholder="Email" 
              required // OBLIGATOIRE
              className="w-full bg-card border border-border p-4 rounded text-text placeholder-muted focus:border-accent focus:outline-none transition-colors"
            />
          </div>
          
          <input 
            type="text" 
            name="sujet" // OBLIGATOIRE
            placeholder="Sujet" 
            required
            className="w-full bg-card border border-border p-4 rounded text-text placeholder-muted focus:border-accent focus:outline-none transition-colors"
          />
          
          <textarea 
            name="message" // OBLIGATOIRE
            placeholder="Message" 
            rows="5"
            required // OBLIGATOIRE
            className="w-full bg-card border border-border p-4 rounded text-text placeholder-muted focus:border-accent focus:outline-none transition-colors resize-none"
          ></textarea>

          <button 
            type="submit" 
            className="px-8 py-3 bg-accent text-bg font-medium rounded hover:opacity-90 transition-opacity w-full md:w-auto"
          >
            Envoyer
          </button>
        </motion.form>

      </div>
    </div>
  );
}