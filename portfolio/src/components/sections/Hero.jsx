import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { useEffect, useState } from 'react';
import './Hero.css';

const roles = [
  'Frontend Developer',
  'Mobile Developer',
  'Backend Developer',
  'AI/ML Enthusiast',
  'Full Stack Developer',
  'UI/UX Designer',
];

const Hero = () => {
  const { theme } = useTheme();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className={`hero ${theme}`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hero-content"
      >
        <h1>Hi, I'm <span>Sathira Pramudith</span></h1>
        <motion.h2
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {roles[index]}
        </motion.h2>
        <p>I build exceptional digital experiences</p>
        <button className="cta-button">View My Work</button>
      </motion.div>
    </section>
  );
};

export default Hero;
