
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface Plan {
  id: number;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlight: boolean;
  stripe_price_id: string;
}

interface PricingPlansProps {
  plans: Plan[];
  isCurrentPlan: (planId: number) => boolean;
  processingPlan: string | null;
  handlePlanSelect: (plan: Plan) => void;
}

const PricingPlans: React.FC<PricingPlansProps> = ({
  plans,
  isCurrentPlan,
  processingPlan,
  handlePlanSelect
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {plans.map((plan) => (
        <Card 
          key={plan.id} 
          className={`p-6 ${plan.highlight ? 'border-exceed-blue border-2 shadow-lg' : 'bg-white'} ${
            isCurrentPlan(plan.id) ? 'ring-2 ring-green-500' : ''
          } hover:shadow-xl transition-shadow duration-300`}
        >
          <div className="flex flex-col h-full">
            <div className="mb-6">
              {isCurrentPlan(plan.id) && (
                <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded mb-2">
                  Your Plan
                </span>
              )}
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
            
            <Button 
              className={`w-full ${plan.highlight ? 'bg-exceed-blue hover:bg-exceed-indigo' : 'bg-exceed-navy hover:bg-exceed-indigo'}`}
              onClick={() => handlePlanSelect(plan)}
              disabled={
                processingPlan === plan.stripe_price_id || 
                isCurrentPlan(plan.id)
              }
            >
              {processingPlan === plan.stripe_price_id ? (
                <span className="flex items-center">
                  <span className="animate-spin h-4 w-4 mr-2 border-b-2 border-white rounded-full"></span>
                  Processing...
                </span>
              ) : isCurrentPlan(plan.id) ? (
                'Current Plan'
              ) : (
                'Choose Plan'
              )}
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default PricingPlans;
