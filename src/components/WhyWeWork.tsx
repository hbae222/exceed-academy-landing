
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
    <section className="py-20">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <h2 className="text-3xl md:text-5xl font-bold text-exceed-navy leading-tight">
              Why We Work
            </h2>
            
            <div className="space-y-5">
              {features.map((feature, index) => (
                <Card key={index} className="p-5 border-l-4 border-exceed-blue rounded-lg shadow-md">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-exceed-blue/10 flex items-center justify-center">
                        <Check className="h-6 w-6 text-exceed-blue" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-exceed-navy text-lg">{feature.title}</h3>
                      <p className="text-gray-700 mt-1">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-xl order-1 lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" 
              alt="Students collaborating" 
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWeWork;
