import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-8 mt-20 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted">
        
        <p>© {year} Ton Nom. Tous droits réservés.</p>
        
        <ul className="flex gap-6 items-center">
          <li><a href="#" className="hover:opacity-80 transition-opacity"><AiFillGithub size={20} color="#ffffff" /></a></li>
          <li><a href="#" className="hover:opacity-80 transition-opacity"><AiFillInstagram size={20} color="#E1306C" /></a></li>
          <li><a href="#" className="hover:opacity-80 transition-opacity"><AiFillLinkedin size={20} color="#0A66C2" /></a></li>
        </ul>

      </div>
    </footer>
  );
}