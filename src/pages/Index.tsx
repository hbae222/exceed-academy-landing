
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhyWriting from '@/components/WhyWriting';
import WhyWeWork from '@/components/WhyWeWork';
import OurTeachers from '@/components/OurTeachers';
import WritingFocus from '@/components/WritingFocus';
import HowItWorks from '@/components/HowItWorks';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import PricingCalculator from '@/components/PricingCalculator';
import Blog from '@/components/Blog';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import ContactUs from '@/components/ContactUs';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="animate-fade-in">
        <Navbar />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
        <Hero />
      </div>
      <div className="section-wrapper bg-white animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <WhyWriting />
      </div>
      <div className="section-wrapper bg-exceed-light animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <WhyWeWork />
      </div>
      <div className="section-wrapper bg-white animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <PricingCalculator />
      </div>
      <div id="our-teachers" className="section-wrapper bg-exceed-light animate-fade-in" style={{ animationDelay: '0.5s' }}>
        <OurTeachers />
      </div>
      <div className="section-wrapper bg-white animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <WritingFocus />
      </div>
      <div className="section-wrapper bg-exceed-light animate-fade-in" style={{ animationDelay: '0.7s' }}>
        <HowItWorks />
      </div>
      <div id="pricing" className="section-wrapper bg-white animate-fade-in" style={{ animationDelay: '0.8s' }}>
        <Pricing />
      </div>
      <div id="testimonials" className="section-wrapper bg-[#E8F4FF] animate-fade-in" style={{ animationDelay: '0.9s' }}>
        <Testimonials />
      </div>
      <div className="section-wrapper bg-white animate-fade-in" style={{ animationDelay: '1.0s' }}>
        <Blog />
      </div>
      <div id="faq" className="section-wrapper bg-[#E8F4FF] animate-fade-in" style={{ animationDelay: '1.1s' }}>
        <FAQ />
      </div>
      <div className="section-wrapper animate-fade-in" style={{ animationDelay: '1.2s' }}>
        <CTA />
      </div>
      <div id="contact" className="section-wrapper bg-exceed-light animate-fade-in" style={{ animationDelay: '1.3s' }}>
        <ContactUs />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '1.4s' }}>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
