import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AiOutlineArrowDown } from 'react-icons/ai';
import SocialLinks from '../layout/SocialLinks';

const PARCOURS = [
  { when: '2023', place: 'Sorbonne Université', what: 'Licence Informatique' },
  { when: '2025', place: 'AFNOR Groupe', what: 'Stage Développeur Web & .NET' },
  { when: "Aujourd'hui", place: 'OCAPIAT, Paris', what: 'Développeur Full Stack en alternance, Master MIAGE', terminus: true },
];

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1];
const LINE_DURATION = 1.1;

// Alignement de chaque station sur la ligne : départ à gauche, milieu centré, terminus à droite
const ALIGN = ['items-start text-left', 'items-center text-center', 'items-end text-right'];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="pt-32 md:pt-28 pb-6 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-[clamp(2.75rem,7vw,5.75rem)] font-extrabold tracking-[-0.035em] leading-[0.95]">
            Loïc Mennessier
          </h1>

          {/* Plaque de direction : une seule enseigne, en capitales */}
          <p className="sign mt-7 uppercase">
            <span className="text-sm sm:text-base font-medium text-white/75">Direction</span>
            <span className="text-sm sm:text-lg font-extrabold leading-tight flex flex-col sm:flex-row sm:items-center sm:gap-2.5">
              <span>Master MIAGE</span>
              <span aria-hidden="true" className="hidden sm:block h-1.5 w-1.5 rounded-full bg-white/75 -mt-0.5" />
              <span className="sr-only">, </span>
              <span>Alternance</span>
            </span>
          </p>

          <p className="mt-7 text-xl md:text-2xl font-semibold">Développeur Web Full-Stack</p>
          <p className="mt-2 max-w-xl text-lg text-muted leading-relaxed">
            Je construis des expériences web rapides, accessibles et visuellement minimalistes.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-5">
            <a href="#projects" className="btn btn-line">
              Voir les projets
              <AiOutlineArrowDown aria-hidden="true" />
            </a>
            <Link to="/resume" className="btn btn-ghost">Mon CV</Link>
            <SocialLinks className="ml-1" />
          </div>
        </div>

        {/* Le parcours : une ligne qui se trace une fois, stations allumées au passage */}
        <div className="mt-12" aria-label="Parcours">
          {/* Desktop : ligne horizontale sur toute la largeur */}
          <div className="relative hidden md:block">
            <motion.span
              aria-hidden="true"
              className="absolute left-[10px] right-[10px] top-[7px] h-[6px] bg-line origin-left"
              initial={reduceMotion ? false : { scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: LINE_DURATION, ease: EASE_OUT_EXPO, delay: 0.2 }}
            />
            <ol className="relative grid grid-cols-3 gap-8">
              {PARCOURS.map((stop, i) => (
                <li key={stop.place} className={`flex flex-col ${ALIGN[i]}`}>
                  <StationDot stop={stop} index={i} reduceMotion={reduceMotion} />
                  <StationLabel stop={stop} className="mt-5" />
                </li>
              ))}
            </ol>
          </div>

          {/* Mobile : la même ligne, à la verticale */}
          <ol className="line-list md:hidden">
            {PARCOURS.map((stop) => (
              <li key={stop.place} className={`station ${stop.terminus ? 'station--terminus' : 'station--passed'}`}>
                <StationLabel stop={stop} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function StationDot({ stop, index, reduceMotion }) {
  if (stop.terminus) {
    return <span aria-hidden="true" className="block h-6 w-6 -mt-0.5 rounded-full border-[5px] border-ink bg-station" />;
  }
  // La station s'allume quand la ligne l'atteint
  const reach = 0.2 + index * 0.2;
  return (
    <motion.span
      aria-hidden="true"
      className="block h-5 w-5 rounded-full border-4 border-line"
      initial={reduceMotion ? false : { backgroundColor: '#ffffff' }}
      animate={{ backgroundColor: '#5b3fd9' }}
      transition={{ duration: 0.3, delay: reach }}
    />
  );
}

function StationLabel({ stop, className = '' }) {
  return (
    <div className={className}>
      <p className="text-sm tabular-nums text-muted font-semibold">{stop.when}</p>
      <p className="mt-1 text-xl font-bold leading-tight">{stop.place}</p>
      <p className="mt-1 text-muted">{stop.what}</p>
    </div>
  );
}
