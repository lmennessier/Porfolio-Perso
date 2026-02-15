import Hero from '../components/sections/Hero';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Hero />
      <Projects />
      <Skills />
    </div>
  );
}