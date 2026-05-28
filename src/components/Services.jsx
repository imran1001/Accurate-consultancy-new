import React from 'react';

const services = [
  {
    title: "Visit & Tourist Visa",
    desc: "Streamlined application processing for global tourism, leisure, and short-term family visits with high success parameters.",
    icon: "✈️"
  },
  {
    title: "Work & Skilled Visa",
    desc: "Comprehensive pathways for professional employment, skills assessment verification, and corporate legal sponsorship placement.",
    icon: "💼"
  },
  {
    title: "Study Abroad Programs",
    desc: "End-to-end international student enrollment guidance, document structuring, institutional alignment, and visa acquisition.",
    icon: "🎓"
  },
  {
    title: "Business Immigration",
    desc: "Tailored investment pathways, corporate legal setup structures, and entrepreneur program setups for high-net-worth global citizens.",
    icon: "🏢"
  },
  {
    title: "Permanent Residency (PR)",
    desc: "Strategic guidance through point-based global scoring metrics, absolute immigration profiling, and family sponsorship tracks.",
    icon: "🌍"
  },
  {
    title: "Citizenship by Investment",
    desc: "Accelerated legal second passport options, global asset integration pathways, and premium residency management modules.",
    icon: "👑"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <span className="text-[#D4AF37] font-bold tracking-wider text-xs uppercase">What We Offer</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A192F] mt-2 mb-4">
          Core Immigration Services
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-sm md:text-base">
          Comprehensive international mobility solutions meticulously customized to ensure absolute legal precision and visa tracking.
        </p>

        {/* 6 Grid Wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {services.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-md border-b-4 border-transparent hover:border-[#D4AF37] hover:shadow-xl transition-all group duration-300"
            >
              <div className="text-3xl mb-4 bg-gray-100 w-12 h-12 flex items-center justify-center rounded-lg group-hover:bg-[#0A192F] transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0A192F] mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.desc}</p>
              <a href="#contact" className="text-[#D4AF37] font-semibold text-sm inline-flex items-center group-hover:underline">
                Learn More <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}