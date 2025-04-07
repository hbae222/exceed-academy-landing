
import React from 'react';
import { Card } from "@/components/ui/card";

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "1️⃣",
      title: "Submit an Essay",
      description: "Upload a school assignment, draft, or personal writing piece."
    },
    {
      number: "2️⃣",
      title: "We Review & Respond",
      description: "A professional editor provides line-by-line comments, revision strategies, and personalized feedback — within 48–72 hours."
    },
    {
      number: "3️⃣",
      title: "Build Confidence",
      description: "Your student uses our suggestions to revise and grow — and we track progress over time."
    }
  ];

  return (
    <section id="how-it-works" className="bg-white py-16">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-exceed-navy mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our simple process makes getting writing help easy and effective.
          </p>
        </div>
        
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-8 bottom-8 w-1 bg-exceed-blue/20 -translate-x-1/2 hidden md:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <Card key={index} className="p-6 bg-white hover:shadow-lg transition-shadow duration-300 relative z-10">
                <div className="flex flex-col items-center text-center">
                  <div className="text-3xl mb-4 bg-exceed-light w-12 h-12 rounded-full flex items-center justify-center">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-exceed-navy mb-3">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="mt-12 flex justify-center">
          <div className="inline-block p-5 rounded-lg bg-exceed-blue/10 max-w-lg">
            <div className="flex items-start gap-4">
              <svg className="flex-shrink-0 h-6 w-6 text-exceed-blue mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-gray-700">
                <span className="font-semibold">Quick turnaround:</span> We understand that deadlines matter. Our editors work efficiently to provide feedback in time for revisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
