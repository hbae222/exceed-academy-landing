
import React from 'react';
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const WhyWeWork: React.FC = () => {
  const features = [
    {
      title: "Personalized Instruction",
      description: "Each student gets a customized writing plan based on their needs and goals."
    },
    {
      title: "Experienced Tutors",
      description: "Our educators are certified, background-checked, and writing specialists."
    },
    {
      title: "Flexible Scheduling",
      description: "Sessions available evenings and weekends — whenever your student is free."
    },
    {
      title: "Measurable Progress",
      description: "See clear improvements in grammar, clarity, and confidence."
    }
  ];

  return (
    <section className="bg-exceed-light py-16">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-exceed-navy">
              Why We Work
            </h2>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <Card key={index} className="p-4 border-l-4 border-exceed-blue">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="h-8 w-8 rounded-full bg-exceed-blue/10 flex items-center justify-center">
                        <Check className="h-5 w-5 text-exceed-blue" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-exceed-navy">{feature.title}</h3>
                      <p className="text-gray-700 mt-1">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg order-1 lg:order-2">
            <div className="bg-white aspect-w-4 aspect-h-3 flex items-center justify-center">
              <div className="p-8 text-center">
                <svg className="mx-auto h-24 w-24 text-exceed-teal" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="mt-4 text-exceed-navy font-semibold">Our proven approach</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWeWork;
