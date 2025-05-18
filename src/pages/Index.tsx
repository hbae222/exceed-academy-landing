
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhyWriting from '@/components/WhyWriting';
import WhyWeWork from '@/components/WhyWeWork';
import OurTeachers from '@/components/OurTeachers';
import WritingFocus from '@/components/WritingFocus';
import HowItWorks from '@/components/HowItWorks';
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
      <div className="section-wrapper bg-exceed-light">
        <OurTeachers />
      </div>
      <div className="section-wrapper bg-white">
        <WritingFocus />
      </div>
      <div className="section-wrapper bg-exceed-light">
        <HowItWorks />
      </div>
      <div className="section-wrapper bg-white">
        <Testimonials />
      </div>
      <div className="section-wrapper bg-exceed-blue">
        <Blog />
      </div>
      <div className="section-wrapper bg-white">
        <FAQ />
      </div>
      <div className="section-wrapper">
        <CTA />
      </div>
      <div className="section-wrapper bg-exceed-light">
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
