
import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const SubscriptionSuccess = () => {
  const [loading, setLoading] = useState(true);
  const [subscription, setSubscription] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const checkSubscription = async () => {
      try {
        // Give Stripe webhook a moment to process
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        const { data, error } = await supabase.functions.invoke('check-subscription');
        
        if (error) throw new Error(error.message);
        
        if (data.subscribed) {
          setSubscription(data.subscription);
        } else {
          // If no subscription found after a few retries, show an error
          setError("Subscription is being processed. It may take a few minutes to activate.");
        }
      } catch (err) {
        console.error("Error checking subscription:", err);
        setError("There was an error verifying your subscription. Please contact support.");
      } finally {
        setLoading(false);
      }
    };

    checkSubscription();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="p-8 shadow-lg border-green-200">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-exceed-blue mb-4"></div>
                <p className="text-gray-600">Verifying your subscription...</p>
              </div>
            ) : error ? (
              <div className="text-center py-8">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Subscription Processing</h1>
                <p className="text-red-600 mb-6">{error}</p>
                <Button asChild>
                  <Link to="/pricing">Back to Pricing</Link>
                </Button>
              </div>
            ) : (
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-exceed-navy mb-4">
                  Thank You for Subscribing!
                </h1>
                
                <div className="mb-8">
                  <p className="text-lg text-gray-700 mb-2">
                    Your {subscription?.plan?.name} plan is now active.
                  </p>
                  <p className="text-gray-600">
                    You now have access to all the features included in your subscription.
                  </p>
                </div>
                
                <div className="grid gap-4 md:grid-cols-2 max-w-lg mx-auto">
                  <Button asChild>
                    <Link to="/">Go to Homepage</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/account">Manage Account</Link>
                  </Button>
                </div>
              </div>
            )}
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SubscriptionSuccess;
