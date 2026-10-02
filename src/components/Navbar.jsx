import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  // Handle scroll to make navbar more solid and update active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Simple scroll spy (can be improved based on section offsets)
      const sections = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Education', 'Certifications', 'Contact'];
      for (const section of sections) {
        const element = document.getElementById(section.toLowerCase());
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Education', 'Certifications', 'Contact'];

  const resumeLink = personalInfo.resumeUrl || '#';

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-[var(--color-luxury-bg)]/80 backdrop-blur-md border-[var(--color-luxury-border)] py-4'
          : 'bg-transparent border-transparent py-6'
      } ${isOpen && !isScrolled ? 'bg-[var(--color-luxury-bg-alt)]' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Left Side: Logo/Name */}
        <div className="flex items-center">
          <a href="#" className="text-[var(--color-luxury-text-primary)] text-xl font-bold tracking-tight whitespace-nowrap">
            {personalInfo.brandName}<span className="text-[var(--color-luxury-gold)]">.</span>
          </a>
        </div>

        {/* Center: Desktop Menu Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link;
            return (
              <a 
                key={link} 
                href={link === 'Home' ? '#' : `#${link.toLowerCase()}`}
                className={`text-sm font-medium relative transition-all duration-300 transform hover:-translate-y-0.5 active:scale-90 active:opacity-70 ${
                  isActive ? 'text-[var(--color-luxury-text-primary)]' : 'text-[var(--color-luxury-text-muted)] hover:text-[var(--color-luxury-text-primary)]'
                }`}
              >
                {link}
                {/* Active/Hover Indicator */}
                <span className={`absolute -bottom-1.5 left-1/2 w-1 h-1 rounded-full bg-[var(--color-luxury-gold)] transition-all duration-300 -translate-x-1/2 ${
                  isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                }`}></span>
              </a>
            );
          })}
        </div>

        {/* Right Side: Resume Button */}
        <div className="hidden md:block">
          <a 
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-sm bg-[var(--color-luxury-bg)] border border-[var(--color-luxury-gold-dark)] text-[var(--color-luxury-text-primary)] text-sm font-medium hover:bg-[var(--color-luxury-gold)]/10 transition-colors duration-300"
          >
            Resume
          </a>
        </div>

        {/* Mobile Hamburger Menu Icon */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-[var(--color-luxury-text-primary)] focus:outline-none p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Slide-Down Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 py-4 opacity-100 bg-[var(--color-luxury-surface-elevated)] border-b border-[var(--color-luxury-border)] shadow-2xl' : 'max-h-0 opacity-0 bg-transparent border-transparent'
        }`}
      >
        <div className="flex flex-col px-6 space-y-4">
          {navLinks.map((link) => {
            const isActive = activeSection === link;
            return (
              <a 
                key={link} 
                href={link === 'Home' ? '#' : `#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-medium border-b border-[var(--color-luxury-border)] pb-2 transition-all duration-300 active:scale-95 active:opacity-70 ${
                  isActive ? 'text-[var(--color-luxury-gold)]' : 'text-[var(--color-luxury-text-secondary)] hover:text-[var(--color-luxury-text-primary)]'
                }`}
              >
                {link}
              </a>
            );
          })}
          <div className="pt-4 pb-2">
             <a 
               href={resumeLink}
               target="_blank"
               rel="noopener noreferrer"
               onClick={() => setIsOpen(false)} 
               className="inline-block px-6 py-3 rounded-sm bg-transparent border border-[var(--color-luxury-gold)] text-[var(--color-luxury-text-primary)] font-medium hover:bg-[var(--color-luxury-gold)]/10 transition-colors w-full text-center"
             >
               Resume
             </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
