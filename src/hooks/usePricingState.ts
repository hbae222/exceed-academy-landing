import { useState, useEffect } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

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

export const usePricingState = () => {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);
  const [processingPlan, setProcessingPlan] = useState<string | null>(null);
  const [userSubscription, setUserSubscription] = useState<any>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [checkoutDialogOpen, setCheckoutDialogOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
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
            price: "$70",
            period: "per month",
            description: "Monthly subscription for regular essay feedback",
            features: [
              "One essay per month",
              "Premium editing",
              "Detailed feedback notes"
            ],
            highlight: false,
            stripe_price_id: "price_basic_monthly"
          },
          {
            id: 2,
            name: "Standard",
            price: "$120",
            period: "per month",
            description: "Monthly subscription for multiple essays",
            features: [
              "Two essays per month",
              "Premium editing",
              "Detailed feedback notes",
              "Increase writing speed"
            ],
            highlight: true,
            stripe_price_id: "price_standard_monthly"
          },
          {
            id: 3,
            name: "Premium",
            price: "$400",
            period: "per month",
            description: "Comprehensive coverage for multiple essays",
            features: [
              "Four essays per month",
              "Premium editing",
              "Detailed feedback notes",
              "A+ writer"
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

  const handlePlanSelect = (plan: Plan) => {
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

  const startCheckout = async (plan: Plan, email?: string) => {
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

  return {
    plans,
    loading,
    processingPlan,
    userSubscription,
    isAuthenticated,
    checkoutDialogOpen,
    setCheckoutDialogOpen,
    selectedPlan,
    checkoutEmail,
    setCheckoutEmail,
    createAccount,
    setCreateAccount,
    errorMessage,
    handlePlanSelect,
    handleCheckoutSubmit,
    handleManageSubscription,
    formatDate,
    isCurrentPlan
  };
};
