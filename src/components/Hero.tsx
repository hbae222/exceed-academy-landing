
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-b from-exceed-light to-white">
      <div className="section-container pt-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-exceed-navy leading-tight">
              Transform Your Student's Writing Skills
            </h1>
            <p className="text-lg text-gray-700">
              Professional editing, personalized feedback, and effective coaching for students in grades 6-12.
            </p>
            <div className="pt-4">
              <Button className="cta-button text-lg">
                Start Your Writing Journey
              </Button>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-xl animate-fade-in">
            <div className="aspect-w-16 aspect-h-9 bg-black">
              <div className="flex items-center justify-center h-full bg-exceed-navy/10 p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-exceed-navy mb-6">Student Review Highlights</h3>
                  
                  <div className="grid grid-cols-1 gap-4">
                    {[1, 2, 3].map((num) => (
                      <Card key={num} className="p-4 bg-white/90 backdrop-blur">
                        <div className="flex items-start gap-4">
                          <div className="h-12 w-12 rounded-full bg-exceed-blue/20 flex items-center justify-center text-exceed-blue font-semibold">
                            S{num}
                          </div>
                          <div className="text-left">
                            <p className="text-gray-700 italic">
                              {num === 1 && "The feedback is detailed, actionable, and encouraging. Our daughter went from B's to consistent A's in English."}
                              {num === 2 && "I loved the comments I got — they made me think about what I was really trying to say."}
                              {num === 3 && "Writing used to feel like a punishment. Now it feels like something I can be good at."}
                            </p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-gray-700 mb-6">
            Our editors come from top institutions
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {["Harvard", "Stanford", "UC Berkeley", "NYU", "Columbia"].map((school) => (
              <div key={school} className="text-exceed-navy font-playfair text-lg md:text-xl font-semibold">
                {school}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
