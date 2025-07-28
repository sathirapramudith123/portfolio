import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import './About.css';

const About = forwardRef((props, ref) => {
  const { theme } = useTheme();

  return (
    <section id="about" className={`about ${theme}`} ref={ref}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p>
              I'm a passionate frontend developer with expertise in React.js and modern JavaScript.
              I love creating beautiful, responsive, and user-friendly web applications.
            </p>
            <p>
              With 3+ years of experience, I've worked on various projects ranging from small
              business websites to complex web applications.
            </p>
            <div className="about-details">
              <div>
                <h3>Name:</h3>
                <p>Your Name</p>
              </div>
              <div>
                <h3>Email:</h3>
                <p>your.email@example.com</p>
              </div>
              <div>
                <h3>From:</h3>
                <p>Your City, Country</p>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src="/assets/images/profile.jpg" alt="Profile" />
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default About;