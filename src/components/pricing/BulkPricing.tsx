
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const BulkPricing: React.FC = () => {
  const handleBulkPurchase = (quantity: number) => {
    // This would be connected to a checkout flow
    alert(`Starting checkout for ${quantity} essays at $${quantity * 70}`);
  };
  
  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold text-center text-exceed-navy mb-8">Buy in bulk?</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex flex-col h-full">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-exceed-navy mb-2">3 Essays</h3>
              <div className="flex items-baseline">
                <span className="text-3xl font-bold text-exceed-navy">$210</span>
                <span className="ml-1 text-gray-600">($70 per essay)</span>
              </div>
            </div>
            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-exceed-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">3 premium essay edits</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-exceed-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Use anytime within 6 months</span>
              </li>
            </ul>
            <Button 
              className="w-full bg-exceed-navy hover:bg-exceed-indigo"
              onClick={() => handleBulkPurchase(3)}
            >
              Buy Now
            </Button>
          </div>
        </Card>
        
        <Card className="p-6 border-exceed-blue border-2 shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex flex-col h-full">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-exceed-navy mb-2">5 Essays</h3>
              <div className="flex items-baseline">
                <span className="text-3xl font-bold text-exceed-navy">$350</span>
                <span className="ml-1 text-gray-600">($70 per essay)</span>
              </div>
            </div>
            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-exceed-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">5 premium essay edits</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-exceed-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Use anytime within 12 months</span>
              </li>
            </ul>
            <Button 
              className="w-full bg-exceed-blue hover:bg-exceed-indigo"
              onClick={() => handleBulkPurchase(5)}
            >
              Best Value
            </Button>
          </div>
        </Card>
        
        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex flex-col h-full">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-exceed-navy mb-2">10 Essays</h3>
              <div className="flex items-baseline">
                <span className="text-3xl font-bold text-exceed-navy">$700</span>
                <span className="ml-1 text-gray-600">($70 per essay)</span>
              </div>
            </div>
            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-exceed-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">10 premium essay edits</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-exceed-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Use anytime within 18 months</span>
              </li>
            </ul>
            <Button 
              className="w-full bg-exceed-navy hover:bg-exceed-indigo"
              onClick={() => handleBulkPurchase(10)}
            >
              Buy Now
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default BulkPricing;
