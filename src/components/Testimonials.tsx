
import React from 'react';
import { Card } from "@/components/ui/card";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "We were struggling to get our 7th grader to care about writing. After just two months with Exceed, he's turning in polished work and actually proud of it.",
      author: "Karen M.",
      role: "Parent of Middle Schooler"
    },
    {
      quote: "The feedback is detailed, actionable, and encouraging. Our daughter went from B's to consistent A's in English.",
      author: "James T.",
      role: "Parent of 10th Grader"
    },
    {
      quote: "Exceed helped my son unlock his voice for his college essays. He got accepted into three of his top choices.",
      author: "Meghan F.",
      role: "Parent of High School Senior"
    },
    {
      quote: "I loved the comments I got — they made me think about what I was really trying to say. I rewrote my whole intro and it felt way stronger.",
      author: "Sofia D.",
      role: "9th Grade Student"
    },
    {
      quote: "We homeschool and have tried multiple writing programs. Nothing clicked until we found Exceed. Their editors really 'get' how to teach through feedback.",
      author: "Tanya W.",
      role: "Homeschooling Parent"
    },
    {
      quote: "The turn-around is quick, and the advice is gold. I actually learned more from one round of feedback than I do in some of my English classes.",
      author: "Jayden L.",
      role: "11th Grade Student"
    },
    {
      quote: "As a working parent, I love that we can submit essays on our schedule and get meaningful help — no scheduling stress.",
      author: "Rebecca C.",
      role: "Parent of 8th Grader"
    },
    {
      quote: "My child has special learning needs, and I was nervous about online tutoring. But their team was thoughtful and matched us with a tutor who's made a big difference.",
      author: "Steven R.",
      role: "Parent of 6th Grader"
    },
    {
      quote: "Writing used to feel like a punishment. Now it feels like something I can be good at. I actually kind of enjoy it now.",
      author: "Ariana M.",
      role: "7th Grade Student"
    }
  ];

  return (
    <section id="testimonials" className="bg-white py-16">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-exceed-navy mb-4">
            Testimonials
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Hear from our students and parents about their experience with Exceed Academy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 testimonial-card">
              <div className="flex flex-col h-full">
                <div className="text-2xl text-exceed-blue mb-4">"</div>
                <p className="text-gray-700 italic flex-grow mb-4">
                  {testimonial.quote}
                </p>
                <div>
                  <p className="font-semibold text-exceed-navy">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
