import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Globe } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-blue-950/95 backdrop-blur-md border-b border-amber-600/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Increased height to 28 for more vertical presence */}
        <div className="flex justify-between items-center h-28">
          
          {/* Logo Container - Added padding and flex-shrink-0 to prevent compression */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center group focus:outline-none p-2 -ml-2 rounded-lg hover:bg-blue-900/30 transition-colors"
            aria-label="Accurate Consultancy Home"
          >
            <img 
              src={logo} 
              alt="Accurate Consultancy" 
              className="h-20 sm:h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12 text-gray-200 font-semibold text-sm tracking-wide">
            <button onClick={() => scrollToSection('services')} className="hover:text-amber-400 transition-colors">Services</button>
            <button onClick={() => scrollToSection('destinations')} className="hover:text-amber-400 transition-colors">Destinations</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-amber-400 transition-colors">About</button>
            <button onClick={() => scrollToSection('consultation')} className="hover:text-amber-400 transition-colors">Contact</button>
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-white p-2">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;