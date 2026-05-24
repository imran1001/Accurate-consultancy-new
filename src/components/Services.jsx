import React from 'react';
import { Plane, Briefcase, GraduationCap, Users, Building2, ChevronRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Plane,
      title: 'Visit Visa',
      description: 'Tourism, family visits, and short-term travel visas with streamlined processing and expert guidance for hassle-free approval.',
      gradient: 'from-blue-900 to-blue-800'
    },
    {
      icon: Briefcase,
      title: 'Work Visa',
      description: 'Employment-based visas, corporate transfers, and skilled worker programs for global career opportunities.',
      gradient: 'from-amber-700 to-amber-600'
    },
    {
      icon: GraduationCap,
      title: 'Study Abroad',
      description: 'Student visas, university placements, and educational pathway consulting for top global institutions.',
      gradient: 'from-blue-800 to-blue-700'
    },
    {
      icon: Users,
      title: 'Skilled Immigration',
      description: 'Express Entry, points-based pathways, and permanent residency programs for qualified professionals worldwide.',
      gradient: 'from-amber-600 to-yellow-600'
    },
    {
      icon: Building2,
      title: 'Business Immigration',
      description: 'Investor visas, entrepreneur programs, and business expansion immigration solutions for global ventures.',
      gradient: 'from-blue-900 to-indigo-900'
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-amber-600 font-bold text-sm tracking-[0.2em] uppercase">WHAT WE OFFER</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">
            Core Immigration Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive visa solutions tailored to your unique goals and circumstances
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-amber-400 transform hover:-translate-y-2 cursor-pointer"
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                <service.icon className="text-white" size={32} />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-blue-950 mb-4 group-hover:text-amber-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Learn More Link */}
              <div className="flex items-center text-amber-600 font-semibold group-hover:gap-2 transition-all duration-300">
                <span>Learn More</span>
                <ChevronRight size={20} className="transform group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;