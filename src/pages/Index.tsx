
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhyWriting from '@/components/WhyWriting';
import WhyWeWork from '@/components/WhyWeWork';
import OurTeachers from '@/components/OurTeachers';
import WritingFocus from '@/components/WritingFocus';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
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
      <div className="bg-white/90 rounded-t-3xl mt-8">
        <WhyWriting />
        <WhyWeWork />
        <OurTeachers />
        <WritingFocus />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <Blog />
        <FAQ />
        <CTA />
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
