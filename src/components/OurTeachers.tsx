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
              <img src="/lovable-uploads/74c97f13-dfd8-4fb2-b02d-d5b6278993b0.png" alt="Harvard" className="h-12 object-contain" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Stanford_Cardinal_logo.svg/1424px-Stanford_Cardinal_logo.svg.png" alt="Stanford" className="h-12 object-contain" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Seal_of_University_of_California%2C_Berkeley.svg/1200px-Seal_of_University_of_California%2C_Berkeley.svg.png" alt="UC Berkeley" className="h-12 object-contain" />
              <img src="/lovable-uploads/4bf03c40-5617-4c73-a064-95eb62dfc3c4.png" alt="NYU" className="h-12 object-contain" />
              <img src="/lovable-uploads/3ffbf218-10df-4038-a368-2d87d72aa610.png" alt="Columbia" className="h-12 object-contain" />
              <img src="/lovable-uploads/29240d9b-000c-4d7c-b95a-9f6ba8111af9.png" alt="Yale" className="h-12 object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeachers;
