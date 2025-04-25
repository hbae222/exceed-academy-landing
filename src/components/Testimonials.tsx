
import React from 'react';
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
  isStudent?: boolean;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "We were struggling to get our 7th grader to care about writing. After just two months with Exceed, he's turning in polished work and actually proud of it.",
      author: "Karen M.",
      role: "Parent of Middle Schooler",
      image: "https://randomuser.me/api/portraits/women/52.jpg" // Older parent
    },
    {
      quote: "The feedback is detailed, actionable, and encouraging. Our daughter went from B's to consistent A's in English.",
      author: "James T.",
      role: "Parent of 10th Grader",
      image: "https://randomuser.me/api/portraits/men/45.jpg" // Older parent
    },
    {
      quote: "Exceed helped my son unlock his voice for his college essays. He got accepted into three of his top choices.",
      author: "Wei L.",
      role: "Parent of High School Senior",
      image: "https://randomuser.me/api/portraits/women/79.jpg" // Asian parent
    },
    {
      quote: "I loved the comments I got - they made me think about what I was really trying to say. I rewrote my whole intro and it felt way stronger.",
      author: "Mei Chen",
      role: "9th Grade Student",
      image: "https://randomuser.me/api/portraits/women/22.jpg", // Young Asian student
      isStudent: true
    },
    {
      quote: "We homeschool and have tried multiple writing programs. Nothing clicked until we found Exceed. Their editors really 'get' how to teach through feedback.",
      author: "Sarah K.",
      role: "Homeschooling Parent",
      image: "https://randomuser.me/api/portraits/women/48.jpg" // Older parent
    },
    {
      quote: "The turn-around is quick, and the advice is gold. I actually learned more from one round of feedback than I do in some of my English classes.",
      author: "Jin Park",
      role: "11th Grade Student",
      image: "https://randomuser.me/api/portraits/men/23.jpg", // Young Asian student
      isStudent: true
    },
    {
      quote: "As a working parent, I love that we can submit essays on our schedule and get meaningful help - no scheduling stress.",
      author: "Michael C.",
      role: "Parent of 8th Grader",
      image: "https://randomuser.me/api/portraits/men/53.jpg" // Older parent
    },
    {
      quote: "My child has special learning needs, and I was nervous about online tutoring. But their team was thoughtful and matched us with a tutor who's made a big difference.",
      author: "Hiroshi T.",
      role: "Parent of 6th Grader",
      image: "https://randomuser.me/api/portraits/men/75.jpg" // Asian parent
    },
    {
      quote: "Writing used to feel like a punishment. Now it feels like something I can be good at. I actually kind of enjoy it now.",
      author: "Lisa W.",
      role: "7th Grade Student",
      image: "https://randomuser.me/api/portraits/women/24.jpg", // Young student
      isStudent: true
    }
  ];

  return (
    <section id="testimonials" className="bg-white py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-exceed-navy mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Real stories from students and parents who have experienced the Exceed Academy difference.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 testimonial-card flex flex-col h-full">
              <div className="flex flex-col h-full">
                <p className="text-gray-700 italic flex-grow mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center mt-auto">
                  <Avatar className="h-12 w-12 mr-4 border-2 border-exceed-light">
                    <AvatarImage src={testimonial.image} alt={testimonial.author} />
                    <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-exceed-navy">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
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
