import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import MentionsLegales from './pages/MentionsLegales';
import Confidentialite from './pages/Confidentialite';
import Footer from './components/layout/Footer';

// Titre d'onglet par page
const TITLES = {
  '/': 'Loïc Mennessier, développeur Full Stack',
  '/about': 'À propos · Loïc Mennessier',
  '/resume': 'CV · Loïc Mennessier',
  '/contact': 'Contact · Loïc Mennessier',
  '/mentions-legales': 'Mentions légales · Loïc Mennessier',
  '/confidentialite': 'Confidentialité · Loïc Mennessier',
};

function RouteEffects() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  useEffect(() => {
    document.title = TITLES[pathname] ?? 'Page introuvable · Loïc Mennessier';
  }, [pathname]);
  return null;
}

function NotFound() {
  return (
    <section className="pt-36 md:pt-44 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold tracking-[-0.035em] leading-[0.95]">Station inconnue</h1>
        <p className="mt-6 text-lg text-muted">Cette page n'existe pas ou a été déplacée.</p>
        <Link to="/" className="btn btn-line mt-8">Retour à l'accueil</Link>
      </div>
    </section>
  );
}

function AppContent() {
  return (
    <div className="w-full relative min-h-screen flex flex-col bg-ground text-ink">
      <RouteEffects />
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/confidentialite" element={<Confidentialite />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
