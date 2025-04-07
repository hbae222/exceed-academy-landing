
import React from 'react';
import { Card } from "@/components/ui/card";

const WhyWriting: React.FC = () => {
  return (
    <section id="why-writing" className="bg-white py-20">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" 
              alt="Student writing" 
              className="w-full h-[400px] object-cover"
            />
          </div>
          
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-exceed-navy leading-tight">
              Why Writing in the world of AI?
            </h2>
            <p className="text-xl text-gray-700">
              In a world where AI can write, strong writing still sets students apart.
            </p>
            <div className="space-y-6 text-gray-700 text-lg">
              <p>
                Critical thinking, original voice, and persuasive structure can't be faked - 
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
