import { Link } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />

      {/* Terminus : la fin du trajet mène au contact */}
      <section className="px-6 pt-8">
        <div className="max-w-6xl mx-auto bg-ink text-white rounded-lg px-8 py-12 md:px-14 md:py-16 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="flex items-start gap-5">
            <span aria-hidden="true" className="mt-2 h-6 w-6 shrink-0 rounded-full border-[5px] border-white" />
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-[-0.03em] max-w-xl">
              En Master MIAGE, développeur Full Stack en alternance chez OCAPIAT.
            </h2>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <Link to="/contact" className="btn btn-line">Me contacter</Link>
            <Link to="/resume" className="btn border-2 border-white text-white hover:bg-white hover:text-ink">
              Voir le CV
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
