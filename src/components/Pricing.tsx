
import React, { useState, useEffect, ChangeEvent } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Json } from "@/integrations/supabase/types";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

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
  const [checkoutDialogOpen, setCheckoutDialogOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<DisplayPlan | null>(null);
  const [checkoutEmail, setCheckoutEmail] = useState('');
  const [createAccount, setCreateAccount] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
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
        // For this demo, we'll hardcode the plans rather than fetching from the database
        // This would normally come from the Supabase database
        
        const hardcodedPlans = [
          {
            id: 1,
            name: "Basic",
            price: "$40",
            period: "one-time payment",
            description: "One-time professional edit for a single essay",
            features: [
              "Premium editing",
              "Grammar and style correction",
              "Structure suggestions",
              "One revision"
            ],
            highlight: false,
            stripe_price_id: "price_basic_onetime"
          },
          {
            id: 2,
            name: "Standard",
            price: "$70",
            period: "per month",
            description: "Monthly subscription for regular essay feedback",
            features: [
              "One essay per month",
              "Premium editing",
              "Detailed feedback notes",
              "Two revisions per essay",
              "24-hour turnaround"
            ],
            highlight: true,
            stripe_price_id: "price_standard_monthly"
          },
          {
            id: 3,
            name: "Premium",
            price: "$120",
            period: "per month",
            description: "Comprehensive coverage for multiple essays",
            features: [
              "Two essays per month",
              "Premium editing",
              "In-depth content analysis",
              "Unlimited revisions",
              "Priority 12-hour turnaround",
              "Direct access to editor"
            ],
            highlight: false,
            stripe_price_id: "price_premium_monthly"
          }
        ];
        
        setPlans(hardcodedPlans);
        setLoading(false);
      } catch (error) {
        console.error("Error setting up pricing plans:", error);
        toast({
          title: "Error",
          description: "Could not load pricing plans. Please try again later.",
          variant: "destructive"
        });
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

  const handlePlanSelect = (plan: DisplayPlan) => {
    // Clear any previous error messages
    setErrorMessage(null);
    
    if (isAuthenticated) {
      // For authenticated users, proceed directly to Stripe checkout
      startCheckout(plan);
    } else {
      // For non-authenticated users, show email collection dialog
      setSelectedPlan(plan);
      setCheckoutDialogOpen(true);
    }
  };

  const startCheckout = async (plan: DisplayPlan, email?: string) => {
    setProcessingPlan(plan.stripe_price_id);
    
    try {
      const checkoutData: any = {
        priceId: plan.stripe_price_id
      };

      // If email was provided (guest checkout)
      if (email) {
        checkoutData.email = email;
        checkoutData.createAccount = createAccount;
      }
      
      console.log("Starting checkout with data:", checkoutData);
      
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: checkoutData
      });
      
      if (error) {
        throw new Error(error.message);
      }
      
      if (data.error) {
        throw new Error(data.error);
      }
      
      if (!data.url) {
        throw new Error("No checkout URL returned from the server");
      }
      
      // Redirect to Stripe checkout
      window.location.href = data.url;
    } catch (error: any) {
      console.error("Error creating checkout session:", error);
      
      // Set the error message for display
      setErrorMessage(error.message);
      
      // Show toast with error
      toast({
        title: "Checkout Error",
        description: error.message || "Could not initiate checkout. Please try again later.",
        variant: "destructive"
      });
      
      setProcessingPlan(null);
    }
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedPlan) return;
    
    if (!checkoutEmail || !checkoutEmail.includes('@')) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }
    
    setCheckoutDialogOpen(false);
    startCheckout(selectedPlan, checkoutEmail);
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
                </div>
              </Card>
            ))}
          </div>
        )}
        
        <div className="mt-12 text-center text-gray-700">
          <p>All plans include our detailed feedback system. Cancel anytime.</p>
        </div>
        
        {/* Checkout Dialog for Non-authenticated Users */}
        <Dialog open={checkoutDialogOpen} onOpenChange={setCheckoutDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Subscribe to {selectedPlan?.name}</DialogTitle>
              <DialogDescription>
                Enter your email to continue with your subscription for {selectedPlan?.price}/{selectedPlan?.period}.
              </DialogDescription>
            </DialogHeader>
            
            <form onSubmit={handleCheckoutSubmit} className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="checkout-email">Email Address</Label>
                <Input 
                  id="checkout-email"
                  type="email"
                  placeholder="your@email.com"
                  value={checkoutEmail}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setCheckoutEmail(e.target.value)}
                  required
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="create-account"
                  checked={createAccount}
                  onCheckedChange={(checked: boolean) => setCreateAccount(checked)}
                />
                <Label htmlFor="create-account" className="text-sm">
                  Create an account with this email
                </Label>
              </div>
              
              <DialogFooter className="pt-4">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setCheckoutDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" className="bg-exceed-blue hover:bg-exceed-indigo">
                  Continue to Checkout
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Pricing;
