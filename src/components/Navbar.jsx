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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-blue-950/95 backdrop-blur-md border-b border-amber-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* Logo Container - Only ONE img tag allowed */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center group focus:outline-none"
            aria-label="Accurate Consultancy Home"
          >
            <img 
              src={logo} 
              alt="Accurate Consultancy" 
              className="h-16 w-auto object-contain"
            />
          </button>

          {/* Desktop Navigation - Simplified for brevity */}
          <div className="hidden lg:flex items-center space-x-10 text-gray-200 font-semibold text-sm">
            <button onClick={() => scrollToSection('services')} className="hover:text-amber-400">Services</button>
            <button onClick={() => scrollToSection('destinations')} className="hover:text-amber-400">Destinations</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-amber-400">About</button>
            <button onClick={() => scrollToSection('consultation')} className="hover:text-amber-400">Contact</button>
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-white">
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;