
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Loader2, CheckCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const SubscriptionSuccess: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [subscriptionDetails, setSubscriptionDetails] = useState<any>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const refreshSubscription = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase.functions.invoke('check-subscription');
        
        if (error) throw error;
        
        setSubscriptionDetails(data);
        
        toast({
          title: "Subscription activated!",
          description: "Your subscription was successfully activated. Welcome aboard!",
        });
      } catch (error) {
        console.error("Error refreshing subscription status:", error);
        toast({
          title: "Verification error",
          description: "Unable to verify your subscription status. Please contact support.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };
    
    refreshSubscription();
  }, [toast]);

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-lg w-full p-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          {loading ? (
            <div className="py-12 flex flex-col items-center">
              <Loader2 className="h-12 w-12 text-exceed-blue animate-spin" />
              <p className="mt-4 text-lg text-gray-600">Verifying your subscription...</p>
            </div>
          ) : (
            <>
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
              <h1 className="mt-4 text-2xl font-bold text-gray-900">Subscription Successful!</h1>
              <p className="mt-2 text-gray-600">
                Thank you for subscribing to our service.
              </p>
              
              {subscriptionDetails && subscriptionDetails.subscription_tier && (
                <div className="mt-6 p-4 bg-green-50 border border-green-100 rounded-md">
                  <p className="font-medium text-green-800">
                    You now have access to our {subscriptionDetails.subscription_tier} plan!
                  </p>
                  {subscriptionDetails.subscription_end && (
                    <p className="mt-1 text-sm text-green-700">
                      Next billing date: {new Date(subscriptionDetails.subscription_end).toLocaleDateString()}
                    </p>
                  )}
                </div>
              )}
              
              <div className="mt-8">
                <Button onClick={handleGoHome} className="bg-exceed-blue hover:bg-exceed-indigo">
                  Return to Home
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionSuccess;
