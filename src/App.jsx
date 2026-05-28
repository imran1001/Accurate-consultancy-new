import React, { useState } from 'react';

export default function FloatingWhatsApp() {
  const [active, setActive] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3 font-sans">
      
      {/* Popout numbers array when clicked */}
      {active && (
        <div className="bg-white rounded-lg shadow-2xl p-4 border border-gray-100 flex flex-col space-y-2 mb-1 animate-fade-in-up w-64">
          <div className="bg-[#0A192F] text-white p-2.5 rounded-md text-xs font-semibold mb-1">
            💬 Connect with Accurate Consultancy
          </div>
          
          {/* Number 1 Link */}
          <a 
            href="https://wa.me/923001234567?text=Hi%20Accurate%20Consultancy,%20I%20am%20interested%20in%20your%20services." 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50 border border-gray-100 text-sm font-medium text-gray-700 transition-colors"
          >
            <span className="bg-[#25D366] text-white p-1 rounded-full text-xs">✓</span>
            <div className="flex flex-col">
              <span className="text-[11px] text-gray-400 font-normal">Primary Channel</span>
              <span>+92 300 1234567</span>
            </div>
          </a>

          {/* Number 2 Link */}
          <a 
            href="https://wa.me/923211234567?text=Hi%20Accurate%20Consultancy,%20I%20am%20interested%20in%20your%20services." 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50 border border-gray-100 text-sm font-medium text-gray-700 transition-colors"
          >
            <span className="bg-[#25D366] text-white p-1 rounded-full text-xs">✓</span>
            <div className="flex flex-col">
              <span className="text-[11px] text-gray-400 font-normal">Alternate Channel</span>
              <span>+92 321 1234567</span>
            </div>
          </a>
        </div>
      )}

      {/* Main Pulse Action Floating Button */}
      <button 
        onClick={() => setActive(!active)}
        className="bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-2xl flex items-center justify-center focus:outline-none transition-transform hover:scale-115 relative group"
        aria-label="Contact Channels"
      >
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-30 pointer-events-none"></span>
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 11.966 0c3.184.001 6.177 1.242 8.426 3.496 2.248 2.254 3.487 5.252 3.486 8.44-.003 6.616-5.339 11.964-11.91 11.964-2.003-.001-3.973-.507-5.728-1.472L0 24zm6.59-4.846c1.666.988 3.311 1.485 5.315 1.486 5.43 0 9.848-4.388 9.851-9.782.002-2.614-1.011-5.071-2.855-6.918C17.07 2.092 14.62 1.077 12.004 1.077c-5.433 0-9.851 4.389-9.854 9.785-.001 2.016.521 3.657 1.545 5.257L2.73 21.23l5.13-1.346z"/>
        </svg>
      </button>
    </div>
  );
}