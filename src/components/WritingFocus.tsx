
import React from 'react';
import { Card } from "@/components/ui/card";

const WritingFocus: React.FC = () => {
  const focusAreas = [
    {
      icon: "📝",
      title: "Academic Writing Support",
      description: "Help with essays, research papers, and school assignments."
    },
    {
      icon: "📚",
      title: "Creative Writing Coaching",
      description: "For aspiring authors and imaginative storytellers."
    },
    {
      icon: "🎓",
      title: "College Prep Writing",
      description: "Craft the perfect personal statement and scholarship essays."
    }
  ];

  return (
    <section className="bg-exceed-light py-16">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-exceed-navy mb-4">
            What type of writing do you focus on?
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We support students with various writing needs, from academic to creative.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {focusAreas.map((area, index) => (
            <Card key={index} className="p-6 bg-white hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">{area.icon}</div>
              <h3 className="text-xl font-semibold text-exceed-navy mb-3">{area.title}</h3>
              <p className="text-gray-700">{area.description}</p>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-block p-4 rounded-lg bg-white shadow-md">
            <p className="text-gray-700 italic">
              "We help students find their voice and develop confidence in their writing abilities."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WritingFocus;
