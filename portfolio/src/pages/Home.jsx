import { useRef } from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Experience from '../components/sections/Experience';
import Contact from '../components/sections/Contact';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Home.css';

const Home = () => {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useScrollAnimation();

  return (
    <div className="home">
      <Hero />
      <About ref={aboutRef} />
      <Skills ref={skillsRef} />
      <Projects ref={projectsRef} />
      <Experience />
      <Contact ref={contactRef} />
    </div>
  );
};

export default Home;