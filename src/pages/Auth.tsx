
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const Auth: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  
  // Set default tab to signup if signup=true in query param
  const [activeTab, setActiveTab] = useState(searchParams.get('signup') === 'true' ? 'signup' : 'login');
  
  // Check if user is already logged in
  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        navigate('/');
      }
    };
    
    checkAuth();
  }, [navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      
      if (error) throw error;
      
      toast({
        title: "Login successful",
        description: "You have been logged in successfully",
      });
      
      navigate('/');
    } catch (error: any) {
      console.error("Error logging in:", error);
      toast({
        title: "Login failed",
        description: error.message || "Check your email and password",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };
  
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth-callback`,
        }
      });
      
      if (error) throw error;
      
      if (data.session) {
        toast({
          title: "Account created",
          description: "Your account has been created and you are now logged in",
        });
        navigate('/');
      } else {
        toast({
          title: "Verification email sent",
          description: "Please check your email for a verification link",
        });
      }
    } catch (error: any) {
      console.error("Error signing up:", error);
      toast({
        title: "Sign up failed",
        description: error.message || "Could not create account",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md">
        <Link to="/" className="text-2xl font-bold text-exceed-navy flex justify-center mb-6">
          ExceedAcademy<span className="text-exceed-blue">.org</span>
        </Link>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="login">Log In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>Log In</CardTitle>
                <CardDescription>
                  Enter your email and password to log in to your account
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleLogin}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <Link 
                        to="/reset-password" 
                        className="text-xs text-exceed-blue hover:underline"
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <Input 
                      id="password" 
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    type="submit" 
                    className="w-full bg-exceed-blue hover:bg-exceed-indigo"
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="flex items-center">
                        <span className="animate-spin h-4 w-4 mr-2 border-b-2 border-white rounded-full"></span>
                        Logging in...
                      </span>
                    ) : (
                      'Log In'
                    )}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
          
          <TabsContent value="signup">
            <Card>
              <CardHeader>
                <CardTitle>Create an Account</CardTitle>
                <CardDescription>
                  Enter your details to create a new account
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleSignup}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <Input 
                      id="signup-email" 
                      type="email" 
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <Input 
                      id="signup-password" 
                      type="password"
                      placeholder="Create a password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <p className="text-xs text-gray-500">
                      Password must be at least 6 characters long
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="flex-col space-y-4">
                  <Button 
                    type="submit" 
                    className="w-full bg-exceed-blue hover:bg-exceed-indigo"
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="flex items-center">
                        <span className="animate-spin h-4 w-4 mr-2 border-b-2 border-white rounded-full"></span>
                        Creating account...
                      </span>
                    ) : (
                      'Create Account'
                    )}
                  </Button>
                  <p className="text-xs text-center text-gray-500">
                    By creating an account, you agree to our 
                    <Link to="/terms-of-service" className="text-exceed-blue hover:underline mx-1">
                      Terms of Service
                    </Link>
                    and
                    <Link to="/privacy-policy" className="text-exceed-blue hover:underline ml-1">
                      Privacy Policy
                    </Link>
                  </p>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Auth;
