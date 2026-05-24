import { useState } from 'react';
import { Menu, X, Globe, ChevronRight } from 'lucide-react';
import { useScrollEffect } from '@hooks/useScrollEffect';
import logo from '../assets/Accurate Logo 2.png'; // Updated path

const NAV_LINKS = ['Services', 'Destinations', 'About', 'Contact'];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useScrollEffect(40);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || mobileOpen
          ? 'bg-blue-950 shadow-xl border-b border-amber-600/20'
          : 'bg-blue-950/90 backdrop-blur-md border-b border-amber-600/10'
      }`}
    >
      <nav aria-label="Main navigation" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* ── Updated AC Shield Logo ─────────────────── */}
          <div className="flex-shrink-0 z-50 py-1">
            <a href="/" className="flex items-center" aria-label="Accurate Consultancy Home">
              <img 
                src={logo} 
                alt="Accurate Consultancy Logo" 
                className="h-14 sm:h-16 w-auto object-contain transition-transform duration-300 hover:scale-105" 
              />
            </a>
          </div>

          {/* ── Desktop Links ─────────────────────────── */}
          <ul role="list" className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-amber-400 text-sm font-medium transition-colors duration-300">
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <a href="#consultation" className="btn-primary text-sm flex items-center gap-2">
              <Globe size={15} /> Book Consultation <ChevronRight size={15} />
            </a>
          </div>

          {/* ── Mobile Menu Toggle ─────────────────────── */}
          <button onClick={() => setMobileOpen((v) => !v)} className="lg:hidden text-white p-2">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;