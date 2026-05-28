import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0A192F] text-white sticky top-0 z-50 shadow-md border-b border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <img 
              src="/logo.png" 
              alt="Accurate Consultancy" 
              className="h-12 w-auto object-contain" 
            />
          </div>

          {/* Desktop Contact Numbers & Navigation */}
          <div className="hidden lg:flex items-center space-x-8 text-sm font-medium">
            <a href="#home" className="hover:text-[#D4AF37] transition-colors">Home</a>
            <a href="#services" className="hover:text-[#D4AF37] transition-colors">Services</a>
            <a href="#destinations" className="hover:text-[#D4AF37] transition-colors">Destinations</a>
            
            {/* Phone Numbers Display */}
            <div className="flex flex-col text-xs border-l border-gray-600 pl-4 space-y-1">
              <span className="text-gray-400">Call / WhatsApp:</span>
              <a href="https://wa.me/923001234567" target="_blank" rel="noreferrer" className="hover:text-[#D4AF37] flex items-center gap-1 font-semibold text-white">
                📞 +92 300 1234567
              </a>
              <a href="https://wa.me/923211234567" target="_blank" rel="noreferrer" className="hover:text-[#D4AF37] flex items-center gap-1 font-semibold text-white">
                📞 +92 321 1234567
              </a>
            </div>
          </div>

          {/* Main CTA Button */}
          <div className="hidden lg:block">
            <a 
              href="#contact" 
              className="bg-[#D4AF37] text-[#0A192F] px-5 py-2.5 rounded-md font-bold hover:bg-[#C5A028] transition-all shadow-lg"
            >
              Book Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white hover:text-[#D4AF37] focus:outline-none"
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

      {/* Mobile Dropdown Panel */}
      {isOpen && (
        <div className="lg:hidden bg-[#0F223F] px-4 pt-2 pb-4 space-y-3 border-t border-gray-800">
          <a href="#home" className="block text-white hover:text-[#D4AF37]">Home</a>
          <a href="#services" className="block text-white hover:text-[#D4AF37]">Services</a>
          <a href="#destinations" className="block text-white hover:text-[#D4AF37]">Destinations</a>
          <div className="pt-2 border-t border-gray-700 text-sm space-y-2">
            <p className="text-gray-400 text-xs">Our Contact Numbers:</p>
            <a href="https://wa.me/923001234567" className="block text-[#D4AF37]">WhatsApp 1: +92 300 1234567</a>
            <a href="https://wa.me/923211234567" className="block text-[#D4AF37]">WhatsApp 2: +92 321 1234567</a>
          </div>
        </div>
      )}
    </nav>
  );
}