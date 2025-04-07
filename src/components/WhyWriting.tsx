
import React from 'react';
import { Card } from "@/components/ui/card";

const WhyWriting: React.FC = () => {
  return (
    <section id="why-writing" className="bg-white py-16">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <div className="bg-exceed-light aspect-w-4 aspect-h-3 flex items-center justify-center">
              <div className="p-8 text-center">
                <svg className="mx-auto h-24 w-24 text-exceed-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <p className="mt-4 text-exceed-navy font-semibold">Writing as a superpower</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-exceed-navy">
              Why Writing in the world of AI?
            </h2>
            <p className="text-lg text-gray-700">
              In a world where AI can write, strong writing still sets students apart.
            </p>
            <div className="space-y-4 text-gray-700">
              <p>
                Critical thinking, original voice, and persuasive structure can't be faked — 
                and colleges, scholarships, and future employers know it.
              </p>
              <p>
                At Exceed Academy, we help students develop writing as a superpower, not a shortcut.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWriting;
