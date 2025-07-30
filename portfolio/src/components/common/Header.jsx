import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import './Header.css';

const Header = () => {
  const { theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`header ${theme}`}>
      <div className="container">
        <Link to="/" className="logo">
          Sathira Pramudith
        </Link>

        <div className="menu-toggle" onClick={toggleMenu}>
          &#9776;
        </div>

        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link to="/skills" onClick={() => setIsMenuOpen(false)}>Skills</Link></li>
            <li><Link to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link></li>
            <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          </ul>
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
