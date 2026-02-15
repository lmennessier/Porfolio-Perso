import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineHome, AiOutlineUser, AiFillGithub, AiOutlineContacts, AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { CgFileDocument } from 'react-icons/cg';

export default function Navbar() {
  const [navColour, setNavColour] = useState(false);
  // 1. AJOUT DE L'ÉTAT POUR LE MENU MOBILE
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation(); 

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY >= 20) {
        setNavColour(true);
      } else {
        setNavColour(false);
      }
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  // Fonction pour fermer le menu quand on clique sur un lien mobile
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        navColour ? "backdrop-blur-md bg-bg/90 shadow-[0_0_20px_rgba(0,0,0,0.5)] border-b border-white/5" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center relative">
        
        <Link to="/" className="hover:opacity-80 transition-opacity" onClick={closeMobileMenu}>
          <img 
            src="/images/cute-batman.png" 
            alt="Logo" 
            className="h-10 w-auto object-contain" 
          />
        </Link>

        {/* --- MENU DESKTOP --- */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          <NavItem to="/" icon={<AiOutlineHome />} text="Home" currentPath={location.pathname} />
          <NavItem to="/about" icon={<AiOutlineUser />} text="About" currentPath={location.pathname} />
          <NavItem to="/resume" icon={<CgFileDocument />} text="Resume" currentPath={location.pathname} />
          <NavItem to="/contact" icon={<AiOutlineContacts />} text="Contact" currentPath={location.pathname} />
          <NavItem to="https://github.com/lmennessier" icon={<AiFillGithub />} text="GitHub" isExternal />
        </ul>

        {/* --- BOUTON TOGGLE MOBILE --- */}
        {/* 2. AJOUT DU ONCLICK ET DE L'ICÔNE DYNAMIQUE */}
        <div 
          className="md:hidden text-accent text-2xl cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
      </div>

      {/* --- MENU MOBILE DÉROULANT --- */}
      {/* 3. STRUCTURE HTML POUR LE MOBILE */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-bg border-b border-border transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 text-lg font-medium">
          {/* On passe closeMobileMenu via la prop onClick */}
          <NavItem to="/" icon={<AiOutlineHome />} text="Home" currentPath={location.pathname} onClick={closeMobileMenu} />
          <NavItem to="/about" icon={<AiOutlineUser />} text="About" currentPath={location.pathname} onClick={closeMobileMenu} />
          <NavItem to="/resume" icon={<CgFileDocument />} text="Resume" currentPath={location.pathname} onClick={closeMobileMenu} />
          <NavItem to="/contact" icon={<AiOutlineContacts />} text="Contact" currentPath={location.pathname} onClick={closeMobileMenu} />
          <NavItem to="https://github.com/lmennessier" icon={<AiFillGithub />} text="GitHub" isExternal onClick={closeMobileMenu} />
        </ul>
      </div>
    </nav>
  );
}

// 4. MISE À JOUR DU COMPOSANT NAVITEM POUR GÉRER LE CLIC
function NavItem({ to, icon, text, isExternal, currentPath, onClick }) {
  const isActive = currentPath === to;

  return (
    <li onClick={onClick}>
      {isExternal ? (
        <a 
          href={to} 
          target="_blank" 
          rel="noreferrer" 
          className="flex items-center gap-2 text-text hover:text-accent transition-colors relative group py-2"
        >
          <span className="text-xl">{icon}</span> 
          {text}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
        </a>
      ) : (
        <Link 
          to={to} 
          className={`flex items-center gap-2 transition-colors relative group py-2 ${
            isActive ? "text-accent font-bold" : "text-text hover:text-accent"
          }`}
        >
          <span className="text-xl">{icon}</span> 
          {text}
          <span className={`absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-300 ${
            isActive ? "w-full shadow-[0_0_10px_var(--accent-color)]" : "w-0 group-hover:w-full"
          }`}></span>
        </Link>
      )}
    </li>
  );
}