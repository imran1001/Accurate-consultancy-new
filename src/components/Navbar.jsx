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
      const offset = 90; // Balanced offset for the larger navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Services', id: 'services' },
    { name: 'Destinations', id: 'destinations' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'consultation' }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-blue-950/98 backdrop-blur-lg shadow-2xl border-b border-amber-400/10' 
          : 'bg-blue-950/95 backdrop-blur-md border-b border-amber-600/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Increased navbar desktop height to h-28 so a massive logo fits safely */}
        <div className="flex justify-between items-center h-24 lg:h-28 transition-all duration-300">
          
          {/* Logo Section */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-4 group focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-blue-950 rounded-lg px-2 py-1 -ml-2 transition-all"
            aria-label="Accurate Consultancy Home"
          >
            {/* Expanded container with no limits to allow the logo to expand safely */}
            <div className="relative flex items-center justify-center">
              <img 
                src={logo} 
                alt="Accurate Consultancy" 
                className="h-20 sm:h-24 lg:h-26 w-auto object-contain transform group-hover:scale-105 transition-transform duration-300 drop-shadow-xl"
                style={{ maxHeight: '100%' }}
              />
            </div>
            
            {/* Text hidden if your logo.png already has 'Accurate Consultancy' typed on it */}
            <div className="hidden md:block text-left border-l border-white/20 pl-4">
              <div className="text-2xl font-black text-white tracking-tight leading-tight group-hover:text-amber-400 transition-colors duration-300">
                ACCURATE
              </div>
              <div className="text-[11px] text-amber-400 tracking-[0.25em] uppercase font-bold">
                CONSULTANCY
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="group relative text-gray-200 hover:text-amber-400 transition-colors duration-300 font-semibold text-sm tracking-wide py-2"
              >
                <span>{item.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => scrollToSection('consultation')}
              className="group relative bg-gradient-to-r from-amber-500 to-amber-600 text-white px-7 py-3.5 rounded-full font-bold text-sm shadow-xl hover:shadow-amber-500/60 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Globe size={18} className="relative z-10" />
              <span className="relative z-10">Book Consultation</span>
              <ChevronRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2.5 hover:bg-blue-900 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X size={26} className="transition-transform duration-300" />
            ) : (
              <Menu size={26} className="transition-transform duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-blue-900/95 backdrop-blur-md border-t border-amber-600/20">
          <div className="px-4 py-6 space-y-3">
            {navLinks.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-gray-200 hover:text-amber-400 hover:bg-blue-800/50 transition-all duration-300 py-3 px-4 rounded-lg font-medium"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('consultation')}
              className="block w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3.5 rounded-full font-bold text-center shadow-lg hover:shadow-amber-500/50 transform hover:scale-105 transition-all duration-300 mt-4"
            >
              <span className="flex items-center justify-center space-x-2">
                <Globe size={18} />
                <span>Book Consultation</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;