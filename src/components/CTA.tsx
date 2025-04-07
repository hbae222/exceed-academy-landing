
import React from 'react';
import { Button } from "@/components/ui/button";

const CTA: React.FC = () => {
  return (
    <section className="bg-exceed-navy py-16 text-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Help Your Student Excel Today. 🎯
          </h2>
          <p className="text-lg mb-8 text-blue-100">
            Give your child the writing skills they need to succeed in school and beyond.
          </p>
          <Button className="bg-white text-exceed-navy hover:bg-blue-100 text-lg py-6 px-8">
            Start Their Writing Journey
          </Button>
          <p className="mt-6 text-sm text-blue-200">
            No commitment required. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
