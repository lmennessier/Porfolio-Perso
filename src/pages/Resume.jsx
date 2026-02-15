import { motion } from 'framer-motion';
import { AiOutlineDownload } from 'react-icons/ai';

const pdfLink = "/cv.pdf"; 

export default function Resume() {
  return (
    <div className="min-h-screen pt-32 px-6 flex flex-col items-center">
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full max-w-4xl flex flex-col items-center"
      >
        <h1 className="text-4xl font-bold text-text mb-8">Curriculum Vitae</h1>

        <a 
          href={pdfLink}
          target="_blank"
          className="bg-accent text-bg font-medium py-3 px-8 rounded flex items-center gap-3 mb-12 hover:opacity-90 transition-opacity"
        >
          <AiOutlineDownload size={24} />
          Télécharger le CV (PDF)
        </a>

        <div className="w-full min-h-[600px] border border-border bg-card rounded p-10 flex items-center justify-center text-muted">
          <p>Aperçu du CV à intégrer ici</p>
        </div>
      </motion.div>

    </div>
  );
}