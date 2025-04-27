
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
            <div className="pt-4 space-y-6">
              <Button className="cta-button text-lg px-8 py-6 rounded-xl">
                Start Your Writing Journey
              </Button>
              
              <div className="flex items-center justify-start mt-6">
                <div className="relative flex -space-x-2 mr-4">
                  <Avatar className="border-2 border-white h-10 w-10">
                    <AvatarImage src="https://randomuser.me/api/portraits/women/63.jpg" />
                    <AvatarFallback>ST</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-white h-10 w-10">
                    <AvatarImage src="https://randomuser.me/api/portraits/men/77.jpg" />
                    <AvatarFallback>ST</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-white h-10 w-10">
                    <AvatarImage src="https://randomuser.me/api/portraits/women/79.jpg" />
                    <AvatarFallback>ST</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-white h-10 w-10">
                    <AvatarImage src="https://randomuser.me/api/portraits/men/52.jpg" />
                    <AvatarFallback>ST</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-white h-10 w-10">
                    <AvatarImage src="https://randomuser.me/api/portraits/women/31.jpg" />
                    <AvatarFallback>ST</AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex items-center">
                  <div className="flex mr-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-700 font-medium">1,000+ students helped</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-2xl animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
              alt="Students collaborating" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-gray-700 mb-8">
            Our editors come from top institutions
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {[
              { 
                name: "Harvard", 
                logo: "https://1000logos.net/wp-content/uploads/2017/02/Harvard-Logo.png", 
                className: "bg-white p-2 rounded-lg"
              },
              { 
                name: "Stanford", 
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Stanford_Cardinal_logo.svg/1200px-Stanford_Cardinal_logo.svg.png" 
              },
              { 
                name: "UC Berkeley", 
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Seal_of_University_of_California%2C_Berkeley.svg/1200px-Seal_of_University_of_California%2C_Berkeley.svg.png" 
              },
              { 
                name: "NYU", 
                logo: "https://logos-world.net/wp-content/uploads/2021/09/NYU-Logo.png",
                className: "bg-white p-2 rounded-lg" 
              },
              { 
                name: "Columbia", 
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Columbia_University_shield.svg/1200px-Columbia_University_shield.svg.png",
                className: "bg-white p-2 rounded-lg" 
              }
            ].map((school) => (
              <div key={school.name} className="flex flex-col items-center">
                <div className={`h-16 w-24 flex items-center justify-center ${school.className || ""}`}>
                  <img src={school.logo} alt={school.name} className="h-auto w-auto max-h-full" />
                </div>
                <div className="text-exceed-navy font-playfair text-sm font-semibold mt-2">
                  {school.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
