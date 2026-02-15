import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-8 mt-20 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted">
        
        <p>© {year} L Mennessier. Tous droits réservés.</p>
        
        <ul className="flex gap-6 items-center">
          <li>
            <a href="https://github.com/lmennessier" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity">
              <AiFillGithub size={20} color="#ffffff" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/loic.menn/" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity flex items-center justify-center">
              <img 
                src="/TechIcons/instagram.svg" 
                alt="Instagram" 
                className="w-5 h-5 object-contain"
                onError={(e) => e.target.style.display = 'none'}
              />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/loic-mennessier" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity flex items-center justify-center">
              <img 
                src="/TechIcons/linkedin.svg" 
                alt="LinkedIn" 
                className="w-5 h-5 object-contain"
                onError={(e) => e.target.style.display = 'none'}
              />
            </a>
          </li>
        </ul>

      </div>
    </footer>
  );
}