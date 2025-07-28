import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import './Hero.css';

const Hero = () => {
  const { theme } = useTheme();

  return (
    <section id="home" className={`hero ${theme}`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hero-content"
      >
        <h1>Hi, I'm <span>Your Name</span></h1>
        <h2>Frontend Developer</h2>
        <p>I build exceptional digital experiences</p>
        <button className="cta-button">View My Work</button>
      </motion.div>
    </section>
  );
};

export default Hero;