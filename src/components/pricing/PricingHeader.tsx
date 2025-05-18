
import React from 'react';
import { Button } from "@/components/ui/button";

interface PricingHeaderProps {
  userSubscription: any;
  errorMessage: string | null;
  formatDate: (date: string) => string;
  handleManageSubscription: () => void;
}

const PricingHeader: React.FC<PricingHeaderProps> = ({
  userSubscription,
  errorMessage,
  formatDate,
  handleManageSubscription
}) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-exceed-navy mb-4">
        Pick a Plan That Works For You
      </h2>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto">
        Choose the perfect writing instruction plan to help you achieve your goals.
      </p>
      
      {userSubscription && (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-md max-w-lg mx-auto">
          <h3 className="text-lg font-semibold text-green-800">
            Current Subscription: {userSubscription.plan.name}
          </h3>
          <p className="text-sm text-green-700">
            {userSubscription.cancel_at_period_end 
              ? `Your subscription will end on ${formatDate(userSubscription.current_period_end)}`
              : `Next billing date: ${formatDate(userSubscription.current_period_end)}`
            }
          </p>
          <Button 
            onClick={handleManageSubscription}
            className="mt-2 bg-green-600 hover:bg-green-700"
          >
            Manage Subscription
          </Button>
        </div>
      )}
      
      {/* Display error message if there is one */}
      {errorMessage && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md max-w-lg mx-auto text-left">
          <h3 className="font-medium text-red-800 mb-1">Checkout Error</h3>
          <p className="text-sm text-red-700">{errorMessage}</p>
          <p className="text-xs mt-2 text-red-600">
            Please check if your Stripe price IDs in the database match those in your Stripe account.
          </p>
        </div>
      )}
    </div>
  );
};

export default PricingHeader;
