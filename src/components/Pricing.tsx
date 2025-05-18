
import React, { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Json } from "@/integrations/supabase/types";

interface Plan {
  id: number;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  highlight: boolean;
  stripe_price_id: string;
}

interface DisplayPlan extends Omit<Plan, 'price'> {
  price: string; // Display price is a string for UI purposes
}

const Pricing: React.FC = () => {
  const [plans, setPlans] = useState<DisplayPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [processingPlan, setProcessingPlan] = useState<string | null>(null);
  const [userSubscription, setUserSubscription] = useState<any>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check authentication status
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsAuthenticated(!!session);
    };
    
    checkAuth();

    // Set up subscription to auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setIsAuthenticated(!!session);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const { data, error } = await supabase
          .from('plans')
          .select('*')
          .eq('active', true)
          .order('price', { ascending: true });
        
        if (error) throw error;
        
        // Transform database plans to component format with proper type handling
        const formattedPlans = data.map(plan => ({
          id: plan.id,
          name: plan.name,
          price: `$${plan.price}`,
          period: "per month",
          description: plan.description,
          // Convert JSON features to strings, ensuring they're all strings
          features: Array.isArray(plan.features) 
            ? plan.features.map(feature => String(feature))
            : [],
          highlight: plan.name === "Standard", // Highlight the middle plan
          stripe_price_id: plan.stripe_price_id
        }));
        
        setPlans(formattedPlans);
      } catch (error) {
        console.error("Error fetching plans:", error);
        toast({
          title: "Error",
          description: "Could not load pricing plans. Please try again later.",
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    };

    const checkSubscription = async () => {
      if (!isAuthenticated) {
        setUserSubscription(null);
        return;
      }

      try {
        const { data, error } = await supabase.functions.invoke('check-subscription');
        
        if (error) throw error;
        
        if (data.subscribed) {
          setUserSubscription(data.subscription);
        } else {
          setUserSubscription(null);
        }
      } catch (error) {
        console.error("Error checking subscription:", error);
      }
    };
    
    fetchPlans();
    checkSubscription();
  }, [isAuthenticated, toast]);

  const handlePlanSelect = async (plan: DisplayPlan) => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication Required",
        description: "Please log in to subscribe to a plan.",
        variant: "destructive"
      });
      return;
    }
    
    try {
      setProcessingPlan(plan.stripe_price_id);
      
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: { priceId: plan.stripe_price_id }
      });
      
      if (error) throw error;
      
      // Redirect to Stripe checkout
      window.location.href = data.url;
    } catch (error) {
      console.error("Error creating checkout session:", error);
      toast({
        title: "Checkout Error",
        description: "Could not initiate checkout. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setProcessingPlan(null);
    }
  };

  const isCurrentPlan = (planId: number) => {
    return userSubscription && userSubscription.plan && userSubscription.plan.id === planId;
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }).format(date);
  };

  const handleManageSubscription = async () => {
    if (!userSubscription) return;
    
    try {
      const { data, error } = await supabase.functions.invoke('customer-portal');
      
      if (error) throw error;
      
      // Redirect to customer portal
      window.location.href = data.url;
    } catch (error) {
      console.error("Error opening customer portal:", error);
      toast({
        title: "Error",
        description: "Could not open subscription management. Please try again later.",
        variant: "destructive"
      });
    }
  };

  return (
    <section id="pricing" className="bg-white py-16">
      <div className="section-container">
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
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-exceed-blue"></div>
          </div>
        ) : (
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
                  
                  {!isAuthenticated && (
                    <div className="mt-3 text-center text-sm text-gray-500 flex items-center justify-center">
                      <Lock className="h-3 w-3 mr-1" />
                      Login required
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        )}
        
        <div className="mt-12 text-center text-gray-700">
          <p>All plans include our detailed feedback system. Cancel anytime.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
