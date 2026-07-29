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
                I am an IT undergraduate with expertise in MERN stack development, mobile app development, 
                and a strong foundation in UI/UX design using Figma. With experience in Java, HTML, CSS, and web development, 
                I am passionate about building scalable, user-friendly applications that seamlessly blend
                 functionality with exceptional design.
            </p>
            <p>
              Driven by a desire to solve real-world problems through technology,
               I thrive in collaborative environments where I can contribute to impactful projects. Whether it’s designing intuitive interfaces or developing robust backend solutions,
               I am committed to creating applications that leave a positive impression.
            </p>
            <div className="about-details">
              <div>
                <h3>Name:</h3>
                <p>K.G Sathira Pramudith</p>
              </div>
              <div>
                <h3>Email:</h3>
                <p>sathirapramudith1@gmail.com</p>
              </div>
              <div>
                <h3>From:</h3>
                <p>Colombo, Sri Lanka</p>
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