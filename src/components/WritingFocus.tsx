
import React from 'react';
import { Card } from "@/components/ui/card";

const WritingFocus: React.FC = () => {
  const focusAreas = [
    {
      icon: "📝",
      title: "Academic Writing Support",
      description: "Help with essays, research papers, and school assignments.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      icon: "📚",
      title: "Creative Writing Coaching",
      description: "For aspiring authors and imaginative storytellers.",
      image: "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      icon: "🎓",
      title: "College Prep Writing",
      description: "Craft the perfect personal statement and scholarship essays.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    }
  ];

  return (
    <section className="bg-exceed-light py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-exceed-navy mb-6">
            What type of writing do you focus on?
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We support students with various writing needs, from academic to creative.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {focusAreas.map((area, index) => (
            <Card key={index} className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={area.image} 
                  alt={area.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-exceed-navy/30 flex items-center justify-center">
                  <div className="text-5xl">{area.icon}</div>
                </div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-exceed-navy mb-3">{area.title}</h3>
                <p className="text-gray-700">{area.description}</p>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block p-6 rounded-xl bg-white shadow-md border border-gray-100">
            <p className="text-gray-700 italic text-lg">
              "We help students find their voice and develop confidence in their writing abilities."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WritingFocus;
