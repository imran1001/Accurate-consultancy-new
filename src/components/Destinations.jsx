import React, { useState } from 'react';
import { CheckCircle, ChevronRight } from 'lucide-react';

const Destinations = () => {
  const [activeDestination, setActiveDestination] = useState('usa');

  const destinations = {
    usa: {
      name: 'United States',
      flag: '🇺🇸',
      highlights: ['EB-5 Investor Program', 'H-1B Work Visa', 'F-1 Student Visa', 'B1/B2 Tourist Visa']
    },
    uk: {
      name: 'United Kingdom',
      flag: '🇬🇧',
      highlights: ['Skilled Worker Visa', 'Student Route', 'Innovator Founder', 'Global Talent Visa']
    },
    europe: {
      name: 'Europe',
      flag: '🇪🇺',
      highlights: ['Schengen Visa', 'Golden Visa Programs', 'Blue Card', 'Student Exchange']
    },
    uae: {
      name: 'United Arab Emirates',
      flag: '🇦🇪',
      highlights: ['Golden Visa', 'Business Setup', 'Employment Visa', 'Tourist Visa']
    },
    canada: {
      name: 'Canada',
      flag: '🇨🇦',
      highlights: ['Express Entry', 'Provincial Nominee', 'Study Permit', 'Startup Visa']
    },
    australia: {
      name: 'Australia',
      flag: '🇦🇺',
      highlights: ['Skilled Migration', 'Business Innovation', 'Student Visa', 'Working Holiday']
    },
    newzealand: {
      name: 'New Zealand',
      flag: '🇳🇿',
      highlights: ['Skilled Migrant', 'Investor Visa', 'Student Visa', 'Essential Skills']
    }
  };

  const scrollToConsultation = () => {
    const element = document.getElementById('consultation');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="destinations" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-amber-600 font-bold text-sm tracking-[0.2em] uppercase">WHERE WE WORK</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">
            Featured Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Expert guidance for your preferred immigration destination
          </p>
        </div>

        {/* Destination Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.entries(destinations).map(([key, dest]) => (
            <button
              key={key}
              onClick={() => setActiveDestination(key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                activeDestination === key
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-amber-300'
              }`}
            >
              <span className="text-2xl">{dest.flag}</span>
              <span>{dest.name}</span>
            </button>
          ))}
        </div>

        {/* Active Destination Card */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-amber-200">
          <div className="flex items-center space-x-4 mb-8">
            <div className="text-6xl animate-bounce">{destinations[activeDestination].flag}</div>
            <div>
              <h3 className="text-3xl font-bold text-blue-950">{destinations[activeDestination].name}</h3>
              <p className="text-gray-600 mt-1">Premium Immigration Pathways</p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {destinations[activeDestination].highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-gradient-to-r from-blue-50 to-amber-50 p-4 rounded-xl border border-amber-200/50 hover:border-amber-400 transition-all duration-300 group"
              >
                <CheckCircle className="text-amber-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={24} />
                <span className="font-semibold text-blue-900">{highlight}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex justify-center">
            <button
              onClick={scrollToConsultation}
              className="bg-gradient-to-r from-blue-900 to-blue-800 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-blue-900/50 transform hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>Get Expert Consultation</span>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;