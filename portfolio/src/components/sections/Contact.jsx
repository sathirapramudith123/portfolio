import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import useContactForm from '../../hooks/useContactForm';
import './Contact.css';

const Contact = forwardRef((props, ref) => {
  const { theme } = useTheme();
  const { formData, handleChange, handleSubmit, status } = useContactForm();

  return (
    <section id="contact" className={`contact ${theme}`} ref={ref}>
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-container">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3>Contact Information</h3>
            <p>Feel free to reach out to me for any questions or opportunities!</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <i className="icon">📧</i>
                <div>
                  <h4>Email</h4>
                  <p>sathirapramudith1@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="icon">📱</i>
                <div>
                  <h4>Phone</h4>
                  <p>+94 71 4552 133</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="icon">📍</i>
                <div>
                  <h4>Location</h4>
                  <p>Colombo, Sri Lanka</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name" 
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email" 
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="text" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject" 
                  required 
                />
              </div>
              <div className="form-group">
                <textarea 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message" 
                  rows="5" 
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'success' && <p className="success-message">Message sent successfully!</p>}
              {status === 'error' && <p className="error-message">Failed to send message. Please try again.</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default Contact;