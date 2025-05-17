import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What grades do you support?",
      answer: "We work with all grade levels 6 through 12. During onboarding, we assess your student's writing level and match them with the right mentor."
    },
    {
      question: "Can my student submit school essays?",
      answer: "Absolutely! School essays are ideal. We help students revise, improve, and understand what makes strong writing."
    },
    {
      question: "How fast is feedback returned?",
      answer: "Within 48–72 hours for each essay submission."
    },
    {
      question: "Is this live tutoring?",
      answer: "No — this is expert feedback-based editing with asynchronous support. Perfect for busy families and students who work best on their own time."
    },
    {
      question: "Can I cancel my subscription?",
      answer: "Yes, you can cancel your subscription at any time. There are no long-term contracts or commitments."
    },
    {
      question: "How do I know if my student is making progress?",
      answer: "We provide detailed progress reports that track improvements in various aspects of writing, from grammar and structure to creativity and critical thinking."
    }
  ];

  return (
    <section id="faq" className="py-16">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-exceed-navy mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Find answers to common questions about our writing program.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="bg-white rounded-lg shadow-md p-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-exceed-navy font-medium py-4 hover:no-underline hover:text-exceed-blue">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-700">
            Have more questions? <a href="#" className="text-exceed-blue hover:underline">Contact us</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
