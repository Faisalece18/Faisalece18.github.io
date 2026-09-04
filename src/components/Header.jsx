import React, { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom'; 
import '../styles/header.css'; 
import resume from '../assets/Faisal_Hossain_CV.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const Header = ({ isNightMode, onToggleNightMode }) => {
 const [scrolling, setScrolling] = useState(false);
 const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

 const toggleMobileMenu = () => {
   setIsMobileMenuOpen(!isMobileMenuOpen);
 };

 useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
 }, []);

 const handleScrollToSection = (sectionId) => (e) => {
    e.preventDefault();
  
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = section.getBoundingClientRect().top;
      const headerHeight = document.querySelector('.header').offsetHeight;
      const totalOffset = offset - headerHeight;
  
      window.scrollBy({
        top: totalOffset,
        behavior: 'smooth',
      });
    }
    setIsMobileMenuOpen(false);
 };

 const handleScrollToTopClick = () => {
    if (window.scrollY > 0) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
 };

 return (   
    <header id='header' className={`header ${scrolling ? 'scrolled' : ''}`}>
      <Link 
        to='/' 
        className={`header-link ${scrolling ? 'scrolled-text' : ''}`}
        onClick={handleScrollToTopClick}>
        <h2>Faisal Hossain Raquib</h2>
      </Link>
      <nav className="nav">
        <a href="#about" className={`a ${scrolling ? 'scrolled-a' : ''}`} onClick={handleScrollToSection('about')}>
          About
        </a>
        <a href="#skills" className={`a ${scrolling ? 'scrolled-a' : ''}`} onClick={handleScrollToSection('skills')}>
          Skills
        </a>
        <a href="#projects" className={`a ${scrolling ? 'scrolled-a' : ''}`} onClick={handleScrollToSection('projects')}>
          Research
        </a>
        <a href="#timeline" className={`a ${scrolling ? 'scrolled-a' : ''}`} onClick={handleScrollToSection('timeline')}>
          Projects
        </a>
        <a href="#awards" className={`a ${scrolling ? 'scrolled-a' : ''}`} onClick={handleScrollToSection('awards')}>
          Leadership
        </a>
        <a href="#contact" className={`a ${scrolling ? 'scrolled-a' : ''}`} onClick={handleScrollToSection('contact')}>
          Contact
        </a>
        <a href={resume} target="_blank" rel="noopener noreferrer" className={`header-button ${scrolling ? 'header-button-scrolled' : ''}`}>
          CV
        </a>
        <button
          type="button"
          className={`night-mode-toggle ${scrolling ? 'night-mode-toggle-scrolled' : ''}`}
          onClick={onToggleNightMode}
          aria-label={isNightMode ? 'Switch to day mode' : 'Switch to night mode'}
          title={isNightMode ? 'Switch to day mode' : 'Switch to night mode'}
        >
          <FontAwesomeIcon icon={isNightMode ? faSun : faMoon} />
        </button>
      </nav>

      <button className={`mobile-menu-button ${scrolling ? 'scrolled-mobile-menu-button' : ''} 
        ${isMobileMenuOpen ? 'menu-button-open' : ''}`} onClick={toggleMobileMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <button className={`mobile-menu-close-button ${scrolling ? 'scrolled-mobile-menu-close-button' : ''} 
        ${isMobileMenuOpen ? 'close-button-open' : ''}`} onClick={toggleMobileMenu}>
        <FontAwesomeIcon icon={faClose} />
      </button>
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav className='mobile-menu-nav'>
            <a href="#about" className="scrolled-a" onClick={handleScrollToSection('about')}>
              About
            </a>
            <a href="#skills" className="scrolled-a" onClick={handleScrollToSection('skills')}>
              Skills
            </a>
            <a href="#projects" className="scrolled-a" onClick={handleScrollToSection('projects')}>
              Research
            </a>
            <a href="#timeline" className="scrolled-a" onClick={handleScrollToSection('timeline')}>
              Projects
            </a>
            <a href="#awards" className="scrolled-a" onClick={handleScrollToSection('awards')}>
              Leadership
            </a>
            <a href="#contact" className="scrolled-a" onClick={handleScrollToSection('contact')}>
              Contact
            </a>
            <br />
            <a href={resume} target="_blank" rel="noopener noreferrer" className="header-button-scrolled">
              CV
            </a>
            <button
              type="button"
              className="night-mode-toggle mobile-night-mode-toggle"
              onClick={onToggleNightMode}
              aria-label={isNightMode ? 'Switch to day mode' : 'Switch to night mode'}
              title={isNightMode ? 'Switch to day mode' : 'Switch to night mode'}
            >
              <FontAwesomeIcon icon={isNightMode ? faSun : faMoon} />
            </button>
            <br />
        </nav>
      </div>
      

    </header>
 );
};

export default Header;