
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
    // Get request body
    const { priceId, email, createAccount, return_url } = await req.json();
    
    if (!priceId) {
      throw new Error("Price ID is required");
    }

    // Create Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    let user = null;
    let customerId = null;
    const origin = return_url || req.headers.get("origin") || "";
    
    // Handle authenticated users
    try {
      const authHeader = req.headers.get("Authorization");
      if (authHeader) {
        const token = authHeader.replace("Bearer ", "");
        const { data: { user: authUser }, error: userError } = await supabase.auth.getUser(token);
        
        if (authUser && !userError) {
          user = authUser;
          console.log("User authenticated:", user.email);
          
          // Get user profile
          const { data: profile } = await supabase
            .from("profiles")
            .select("*")
            .eq("id", user.id)
            .single();

          // Check for existing Stripe customer
          const { data: subscriptions } = await supabase
            .from("subscriptions")
            .select("stripe_customer_id")
            .eq("user_id", user.id);
            
          if (subscriptions && subscriptions.length > 0 && subscriptions[0].stripe_customer_id) {
            customerId = subscriptions[0].stripe_customer_id;
            console.log("Using existing Stripe customer:", customerId);
          } else {
            // Create new Stripe customer for authenticated user
            const customer = await stripe.customers.create({
              email: user.email,
              name: profile ? `${profile.first_name || ""} ${profile.last_name || ""}`.trim() : user.email,
              metadata: {
                userId: user.id
              }
            });
            customerId = customer.id;
            console.log("Created new Stripe customer for authenticated user:", customerId);
          }
        }
      }
    } catch (authError) {
      console.warn("Authentication check failed, proceeding as guest:", authError);
    }
    
    // Handle guest checkout with optional account creation
    if (!user && email) {
      // Check if email already exists as a Stripe customer
      const customers = await stripe.customers.list({ email, limit: 1 });
      
      if (customers.data.length > 0) {
        customerId = customers.data[0].id;
        console.log("Using existing Stripe customer for guest checkout:", customerId);
      } else {
        // Create new Stripe customer for guest checkout
        const customer = await stripe.customers.create({
          email
        });
        customerId = customer.id;
        console.log("Created new Stripe customer for guest checkout:", customerId);
      }
      
      // If account creation was requested, create a Supabase auth user
      if (createAccount) {
        try {
          // Generate a random password for the user (they can reset it later)
          const tempPassword = Array(16)
            .fill(0)
            .map(() => Math.random().toString(36).charAt(2))
            .join('');
            
          // Create the user account with temporary password
          const { data: newUser, error: signUpError } = await supabase.auth.admin.createUser({
            email,
            password: tempPassword,
            email_confirm: true, // Auto-confirm email for smooth checkout experience
          });
          
          if (signUpError) {
            console.error("Failed to create user account during checkout:", signUpError);
            // Continue with checkout even if account creation fails
          } else if (newUser?.user) {
            console.log("Created new user account during checkout:", newUser.user.id);
            
            // Store Stripe customer ID
            await supabase.from("subscriptions").insert({
              user_id: newUser.user.id,
              stripe_customer_id: customerId,
            });
            
            // Store metadata in Stripe customer
            await stripe.customers.update(customerId, {
              metadata: {
                userId: newUser.user.id
              }
            });
          }
        } catch (accountError) {
          console.error("Error creating user account:", accountError);
          // Continue with checkout even if account creation fails
        }
      }
    }

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      customer_email: !customerId ? email : undefined,
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: `${origin}/subscription-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/pricing`,
      subscription_data: {
        metadata: {
          userId: user?.id || "guest",
        },
      },
      allow_promotion_codes: true,
    });

    console.log("Checkout session created:", session.id);
    
    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error in create-checkout function:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
