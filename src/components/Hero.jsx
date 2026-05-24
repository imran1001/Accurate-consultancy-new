import React from 'react';
import { MessageCircle, ChevronRight, Globe, Award, CheckCircle, Users } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const trustBadges = [
    { icon: Award, label: '15+ Years', sublabel: 'Experience' },
    { icon: CheckCircle, label: '98%', sublabel: 'Success Rate' },
    { icon: Users, label: '5,000+', sublabel: 'Happy Clients' },
    { icon: Globe, label: '50+', sublabel: 'Countries' }
  ];

  return (
    <section 
      id="hero" 
      className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDQyYzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnoiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIuNSIgb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-blue-900/50 backdrop-blur-sm px-5 py-2.5 rounded-full border border-amber-600/30 mb-8 hover:border-amber-400/50 transition-all duration-300">
            <Globe className="text-amber-400" size={20} />
            <span className="text-amber-400 font-semibold text-sm tracking-wide">YOUR GLOBAL MOBILITY PARTNER</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Navigate Your Journey to
            <span className="block mt-2 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent animate-gradient">
              Global Success
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
            Premium visa and immigration consultancy delivering seamless pathways to your dream destination — with expert guidance every step of the way.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={() => scrollToSection('consultation')}
              className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-amber-500/60 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <MessageCircle size={22} />
              <span>Start Your Journey</span>
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 hover:border-white/50 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Explore Services</span>
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-amber-400/50 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 group"
              >
                <badge.icon className="text-amber-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" size={36} />
                <div className="text-3xl font-bold text-white mb-1">{badge.label}</div>
                <div className="text-sm text-gray-300">{badge.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;