import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser, AiFillGithub, AiOutlineContacts } from 'react-icons/ai';
import { CgFileDocument } from 'react-icons/cg';

export default function Navbar() {
  const [navColour, setNavColour] = useState(false);
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

  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        navColour ? "backdrop-blur-md bg-bg/80 shadow-[0_0_20px_rgba(0,0,0,0.5)] border-b border-white/5" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* Remplacement du texte par l'image */}
        <Link to="/" className="hover:opacity-80 transition-opacity">
          <img 
            src="/images/cute-batman.png" 
            alt="Logo" 
            className="h-10 w-auto object-contain" 
          />
        </Link>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          <NavItem to="/" icon={<AiOutlineHome />} text="Home" currentPath={location.pathname} />
          <NavItem to="/about" icon={<AiOutlineUser />} text="About" currentPath={location.pathname} />
          <NavItem to="/resume" icon={<CgFileDocument />} text="Resume" currentPath={location.pathname} />
          <NavItem to="/contact" icon={<AiOutlineContacts />} text="Contact" currentPath={location.pathname} />
          
          <NavItem 
            to="https://github.com/ton-github" 
            icon={<AiFillGithub />} 
            text="GitHub" 
            isExternal 
          />
        </ul>

        {/* Menu Mobile */}
        <div className="md:hidden text-accent text-2xl cursor-pointer">
          ☰
        </div>
      </div>
    </nav>
  );
}

function NavItem({ to, icon, text, isExternal, currentPath }) {
  const isActive = currentPath === to;

  return (
    <li>
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