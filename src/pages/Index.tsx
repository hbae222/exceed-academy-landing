
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
      <Navbar />
      <Hero />
      <div className="section-wrapper bg-white">
        <WhyWriting />
      </div>
      <div className="section-wrapper bg-exceed-light">
        <WhyWeWork />
      </div>
      <div className="section-wrapper bg-white">
        <PricingCalculator />
      </div>
      <div id="our-teachers" className="section-wrapper bg-exceed-light">
        <OurTeachers />
      </div>
      <div className="section-wrapper bg-white">
        <WritingFocus />
      </div>
      <div className="section-wrapper bg-exceed-light">
        <HowItWorks />
      </div>
      <div id="pricing" className="section-wrapper bg-white">
        <Pricing />
      </div>
      <div id="testimonials" className="section-wrapper bg-[#E8F4FF]">
        <Testimonials />
      </div>
      <div className="section-wrapper bg-white">
        <Blog />
      </div>
      <div id="faq" className="section-wrapper bg-[#E8F4FF]">
        <FAQ />
      </div>
      <div className="section-wrapper">
        <CTA />
      </div>
      <div id="contact" className="section-wrapper bg-exceed-light">
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
