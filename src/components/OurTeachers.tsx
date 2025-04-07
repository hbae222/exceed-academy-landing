
import React from 'react';
import { Card } from "@/components/ui/card";

const OurTeachers: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <div className="bg-exceed-light aspect-w-4 aspect-h-3 flex items-center justify-center">
              <div className="p-8 text-center">
                <svg className="mx-auto h-24 w-24 text-exceed-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <p className="mt-4 text-exceed-navy font-semibold">Expert educators</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-exceed-navy">
              Who are Our Teachers?
            </h2>
            <p className="text-lg text-gray-700">
              Our editors and tutors are top-tier graduates and professional educators from leading universities.
            </p>
            <p className="text-gray-700">
              They're trained not only in writing, but in mentorship, feedback, and engaging with teens in a way that builds trust and results.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              {["Harvard", "Stanford", "UC Berkeley", "NYU", "Columbia", "Yale"].map((school) => (
                <Card key={school} className="p-3 text-center bg-exceed-light/50">
                  <p className="font-medium text-exceed-navy">{school}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeachers;
