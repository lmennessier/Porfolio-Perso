import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AiFillGithub, AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const STOPS = [
  { to: '/', label: 'Accueil' },
  { to: '/about', label: 'À propos' },
  { to: '/resume', label: 'CV' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Ferme le menu mobile à chaque changement de page
  useEffect(() => setIsMobileMenuOpen(false), [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-ground transition-[border-color] duration-300 border-b ${
        scrolled || isMobileMenuOpen ? 'border-rule' : 'border-transparent'
      }`}
    >
      <div className="px-6">
      <nav aria-label="Navigation principale" className="max-w-6xl mx-auto h-20 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3 shrink-0 group">
          <img src="/images/cute-batman.png" alt="" className="h-11 w-11 object-contain transition-transform duration-300 group-hover:-rotate-6" />
          <span className="font-extrabold text-lg tracking-tight leading-none pt-1">Loïc Mennessier</span>
        </Link>

        {/* Plan de ligne : chaque page est une station */}
        <div className="hidden md:flex items-center gap-8">
          <ol className="flex">
            {STOPS.map((stop, i) => (
              <li key={stop.to} className="relative w-24">
                {/* segment de ligne entre les stations */}
                <span
                  aria-hidden="true"
                  className={`absolute top-[5px] h-[3px] bg-line ${i === 0 ? 'left-1/2 right-0' : i === STOPS.length - 1 ? 'left-0 right-1/2' : 'inset-x-0'}`}
                />
                <NavLink to={stop.to} end className="group relative flex flex-col items-center gap-2 pb-0.5">
                  {({ isActive }) => (
                    <>
                      <span
                        aria-hidden="true"
                        className={`h-[13px] w-[13px] rounded-full border-[3px] border-line transition-colors ${
                          isActive ? 'bg-line' : 'bg-station group-hover:bg-line'
                        }`}
                      />
                      <span className={`text-sm leading-none ${isActive ? 'font-bold text-ink' : 'font-medium text-muted group-hover:text-ink'}`}>
                        {stop.label}
                      </span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ol>

          <a
            href="https://github.com/lmennessier"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm font-semibold text-ink hover:text-line transition-colors"
          >
            <AiFillGithub size={22} aria-hidden="true" />
            GitHub
          </a>
        </div>

        <button
          type="button"
          className="md:hidden -mr-2 p-2 text-ink text-2xl"
          aria-expanded={isMobileMenuOpen}
          aria-controls="menu-mobile"
          aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setIsMobileMenuOpen((open) => !open)}
        >
          {isMobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </nav>
      </div>

      {/* Menu mobile : la même ligne, à la verticale */}
      <div
        id="menu-mobile"
        hidden={!isMobileMenuOpen}
        className="md:hidden border-t border-rule bg-ground px-6 pt-6 pb-8"
      >
        <ol className="line-list line-list--sm">
          {STOPS.map((stop) => (
            <li key={stop.to} className={`station station--interactive ${location.pathname === stop.to ? 'station--passed' : ''}`}>
              <NavLink
                to={stop.to}
                end
                className={({ isActive }) => `block text-lg leading-6 ${isActive ? 'font-bold text-ink' : 'font-medium text-muted'}`}
              >
                {stop.label}
              </NavLink>
            </li>
          ))}
        </ol>
        <a
          href="https://github.com/lmennessier"
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 font-semibold text-ink"
        >
          <AiFillGithub size={22} aria-hidden="true" />
          GitHub
        </a>
      </div>
    </header>
  );
}
