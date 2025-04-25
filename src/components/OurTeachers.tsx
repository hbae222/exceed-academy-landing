import React from 'react';
import { Card } from "@/components/ui/card";

const OurTeachers: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1370&q=80" 
              alt="Our teachers" 
              className="w-full h-[400px] object-cover"
            />
          </div>
          
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-exceed-navy leading-tight">
              Who are Our Teachers?
            </h2>
            <p className="text-xl text-gray-700">
              Our editors and tutors are top-tier graduates and professional educators from leading universities.
            </p>
            <p className="text-lg text-gray-700">
              They're trained not only in writing, but in mentorship, feedback, and engaging with teens in a way that builds trust and results.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              {["Harvard", "Stanford", "UC Berkeley", "NYU", "Columbia", "Yale"].map((school) => (
                <Card key={school} className="p-4 text-center bg-exceed-light/50 border border-exceed-blue/10 rounded-lg shadow-sm hover:shadow-md transition-all">
                  <p className="font-medium text-exceed-navy">{school}</p>
                </Card>
              ))}
            </div>
            
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 pt-4">
              <img src="/lovable-uploads/a45248c8-ac8c-4170-9881-4b8453e6ac09.png" alt="Harvard" className="h-12 object-contain" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Stanford_Cardinal_logo.svg/1424px-Stanford_Cardinal_logo.svg.png" alt="Stanford" className="h-12 object-contain" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Seal_of_University_of_California%2C_Berkeley.svg/1200px-Seal_of_University_of_California%2C_Berkeley.svg.png" alt="UC Berkeley" className="h-12 object-contain" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/New_York_University_Seal.svg/1200px-New_York_University_Seal.svg.png" alt="NYU" className="h-12 object-contain" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Columbia_University_shield.svg/1200px-Columbia_University_shield.svg.png" alt="Columbia" className="h-12 object-contain" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Yale_University_Shield_1.svg/1200px-Yale_University_Shield_1.svg.png" alt="Yale" className="h-12 object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeachers;
