import React from 'react';
import Navbar from '@components/Navbar';
import Hero from '@components/Hero';
import Services from '@components/Services';
import Destinations from '@components/Destinations';
import WhyChooseUs from '@components/WhyChooseUs';
import ConsultationForm from '@components/ConsultationForm';
import Footer from '@components/Footer';

// Safely importing your new floating WhatsApp widget using your project's path style
import FloatingWhatsApp from '@components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white overflow-x-hidden">
      {/* 1. Your updated premium navigation bar */}
      <Navbar />
      
      <main>
        {/* 2. Your original marketing layout */}
        <Hero />
        
        {/* 3. Your updated 6-services grid layout */}
        <Services />
        
        <Destinations />
        <WhyChooseUs />
        <ConsultationForm />
      </main>
      
      {/* 4. Your standard footer */}
      <Footer />

      {/* 5. The new dual-number floating WhatsApp component */}
      <FloatingWhatsApp />
    </div>
  );
}