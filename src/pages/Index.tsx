
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
import Blog from '@/components/Blog';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <WhyWriting />
      <WhyWeWork />
      <OurTeachers />
      <WritingFocus />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <Blog />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
