
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", { apiVersion: "2023-10-16" });
  
  try {
    // Create Supabase admin client
    const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Get user from auth header
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      throw new Error("Authorization header is required");
    }

    const token = authHeader.replace("Bearer ", "");
    const { data: { user }, error: userError } = await supabase.auth.getUser(token);

    if (userError || !user) {
      throw new Error("Invalid user token");
    }

    console.log("Checking subscription for user:", user.email);

    // Check for existing subscription in database
    const { data: subscriptionData } = await supabase
      .from("subscriptions")
      .select(`
        id, 
        stripe_subscription_id, 
        stripe_customer_id, 
        status, 
        current_period_end,
        plans(id, name, stripe_price_id)
      `)
      .eq("user_id", user.id)
      .eq("status", "active")
      .order("created_at", { ascending: false })
      .limit(1)
      .single();

    if (subscriptionData) {
      console.log("Found active subscription in database:", subscriptionData.stripe_subscription_id);
      
      // Verify subscription with Stripe
      const subscription = await stripe.subscriptions.retrieve(subscriptionData.stripe_subscription_id);
      
      if (subscription.status === "active" || subscription.status === "trialing") {
        // Update subscription if needed
        if (subscription.status !== subscriptionData.status || 
            new Date(subscription.current_period_end * 1000).toISOString() !== subscriptionData.current_period_end) {
          
          await supabase
            .from("subscriptions")
            .update({
              status: subscription.status,
              current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
              current_period_start: new Date(subscription.current_period_start * 1000).toISOString(),
              cancel_at_period_end: subscription.cancel_at_period_end,
              updated_at: new Date().toISOString()
            })
            .eq("id", subscriptionData.id);
            
          console.log("Updated subscription in database");
        }
        
        return new Response(JSON.stringify({
          subscribed: true,
          subscription: {
            id: subscriptionData.id,
            plan: subscriptionData.plans,
            current_period_end: subscriptionData.current_period_end,
            status: subscription.status,
            cancel_at_period_end: subscription.cancel_at_period_end
          }
        }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 200,
        });
      }
    }
    
    console.log("No active subscription found for user");
    return new Response(JSON.stringify({ subscribed: false }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error in check-subscription function:", error);
    return new Response(JSON.stringify({ error: error.message, subscribed: false }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
