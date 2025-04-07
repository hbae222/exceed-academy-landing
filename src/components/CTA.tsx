
import React from 'react';
import { Button } from "@/components/ui/button";

const CTA: React.FC = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" 
          alt="Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-exceed-navy/90"></div>
      </div>
      
      <div className="relative z-10 py-20 text-white">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Help Your Student Excel Today. 🎯
            </h2>
            <p className="text-xl mb-10 text-blue-100">
              Give your child the writing skills they need to succeed in school and beyond.
            </p>
            <Button className="bg-white text-exceed-navy hover:bg-blue-100 text-lg py-7 px-10 rounded-xl shadow-lg hover:shadow-xl transition-all">
              Start Their Writing Journey
            </Button>
            <p className="mt-8 text-blue-200">
              No commitment required. Cancel anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
