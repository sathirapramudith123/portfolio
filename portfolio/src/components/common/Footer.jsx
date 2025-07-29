import { useTheme } from '../../context/ThemeContext';
import './Footer.css';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className={`footer ${theme}`}>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/sathirapramudith123" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/sathira-pramudith-805284318/?trk=opento_sprofile_pfeditor" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://twitter.com/sathirapramudith" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.instagram.com/sathirapramudith/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;