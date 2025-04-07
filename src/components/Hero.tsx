
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-b from-exceed-light to-white">
      <div className="section-container pt-16 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-exceed-navy leading-tight">
              Transform Your Student's Writing Skills
            </h1>
            <p className="text-xl text-gray-700">
              Professional editing, personalized feedback, and effective coaching for students in grades 6-12.
            </p>
            <div className="pt-4">
              <Button className="cta-button text-lg px-8 py-6 rounded-xl">
                Start Your Writing Journey
              </Button>
            </div>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-2xl animate-fade-in">
            <div className="aspect-w-16 aspect-h-9 bg-black">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="Students collaborating" 
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-exceed-navy/30 backdrop-blur-sm p-8 flex items-center">
                <div className="bg-white/95 p-8 rounded-xl shadow-lg w-full max-w-lg mx-auto">
                  <h3 className="text-2xl font-semibold text-exceed-navy mb-6">Student Review Highlights</h3>
                  
                  <div className="space-y-4">
                    {[
                      {
                        quote: "The feedback is detailed, actionable, and encouraging. Our daughter went from B's to consistent A's in English.",
                        author: "James T.",
                        image: "https://randomuser.me/api/portraits/men/2.jpg"
                      },
                      {
                        quote: "I loved the comments I got — they made me think about what I was really trying to say.",
                        author: "Sofia D.",
                        image: "https://randomuser.me/api/portraits/women/4.jpg"
                      },
                      {
                        quote: "Writing used to feel like a punishment. Now it feels like something I can be good at.",
                        author: "Ariana M.",
                        image: "https://randomuser.me/api/portraits/women/9.jpg"
                      }
                    ].map((review, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <Avatar className="h-10 w-10 border-2 border-exceed-light flex-shrink-0">
                          <AvatarImage src={review.image} alt={review.author} />
                          <AvatarFallback>{review.author.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="text-left">
                          <p className="text-gray-700 italic text-sm">
                            "{review.quote}"
                          </p>
                          <p className="text-sm font-medium text-exceed-navy mt-1">{review.author}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-gray-700 mb-8">
            Our editors come from top institutions
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
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
