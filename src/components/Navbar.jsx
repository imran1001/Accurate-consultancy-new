import React, { useState } from 'react';
// Ensure this path matches exactly where your new logo is stored!
import logo from '../assets/logo.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Container */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="focus:outline-none">
              <img 
                src={logo} 
                alt="Company Logo" 
                className="h-12 sm:h-14 w-auto object-contain transition-transform duration-300 hover:scale-105"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Services</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</a>
            <a href="#book" className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 font-medium transition-colors">
              Book Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">Services</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">About</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;