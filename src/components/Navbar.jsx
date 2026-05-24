{/* ── Premium Horizontal Brand Layout ─────────────────── */}
<div className="flex-shrink-0 z-50">
  <a href="/" className="flex items-center gap-3 group" aria-label="Accurate Consultancy Home">
    {/* Your "A + Airplane" Gold Emblem */}
    <img 
      src={logo} 
      alt="Accurate Consultancy Emblem" 
      className="h-12 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
    />
    
    {/* High-Contrast White & Gold Text Branding */}
    <div className="flex flex-col justify-center border-l border-amber-500/30 pl-3">
      <span className="text-xl font-black text-white tracking-widest uppercase font-sans leading-none">
        Accurate
      </span>
      <span className="text-[10px] text-amber-400 tracking-[0.28em] uppercase font-bold mt-1.5 leading-none">
        Consultancy
      </span>
    </div>
  </a>
</div>