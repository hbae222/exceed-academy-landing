
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Single Edit",
      price: "$49",
      period: "one-time",
      description: "Perfect for a single essay",
      features: [
        "Professional editing",
        "Detailed feedback",
        "Email support",
        "48-hour turnaround",
        "Special discount price"
      ],
      highlight: true
    },
    {
      name: "Basic",
      price: "$60",
      period: "per month",
      description: "1 essay per month",
      features: [
        "Professional editing",
        "Detailed feedback",
        "Email support",
        "Perfect for one-off projects"
      ],
      highlight: false
    },
    {
      name: "Standard",
      price: "$120",
      period: "per month",
      description: "2 essays per month",
      features: [
        "Professional editing",
        "Detailed feedback",
        "Email support",
        "Progress tracking",
        "Most popular choice"
      ],
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="bg-exceed-light py-16">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-exceed-navy mb-4">
            Buy One Edit at a Discounted Price
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Try our professional editing services with a special one-time discount, or choose a monthly plan for ongoing support.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`p-6 ${plan.highlight ? 'border-exceed-blue border-2 shadow-lg' : 'bg-white'} hover:shadow-xl transition-shadow duration-300`}
            >
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-exceed-navy mb-2">{plan.name}</h3>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-exceed-navy">{plan.price}</span>
                    <span className="ml-1 text-gray-600">{plan.period}</span>
                  </div>
                  <p className="text-gray-700 mt-2">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-exceed-blue flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className={`w-full ${plan.highlight ? 'bg-exceed-blue hover:bg-exceed-indigo' : 'bg-exceed-navy hover:bg-exceed-indigo'}`}>
                  Choose Plan
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center text-gray-700">
          <p>All plans include our detailed feedback system. No long-term contracts required.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
