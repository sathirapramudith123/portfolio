import { motion } from 'framer-motion';
import { experiences } from '../../data/experience';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              className="timeline-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="timeline-content">
                <div className="timeline-date">{exp.date}</div>
                <h3>{exp.position}</h3>
                <h4>{exp.company}</h4>
                <h4 className="timeline-duration">{exp.duration}</h4>
                <p>{exp.description}</p>
                <div className="timeline-skills">
                  {exp.skills.map(skill => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;