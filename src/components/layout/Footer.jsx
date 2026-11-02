import { Link } from 'react-router-dom';
import SocialLinks from './SocialLinks';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-rule px-6">
      <div className="max-w-6xl mx-auto py-8 flex flex-col-reverse md:flex-row justify-between items-center gap-4 text-sm text-muted">
        <div className="flex flex-col md:flex-row items-center gap-x-6 gap-y-2">
          <p>© {year} Loïc Mennessier</p>
          <nav aria-label="Informations légales" className="flex gap-5">
            <Link to="/mentions-legales" className="hover:text-ink underline decoration-transparent hover:decoration-current transition-colors">Mentions légales</Link>
            <Link to="/confidentialite" className="hover:text-ink underline decoration-transparent hover:decoration-current transition-colors">Confidentialité</Link>
          </nav>
        </div>
        <SocialLinks size={20} />
      </div>
    </footer>
  );
}
