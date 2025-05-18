
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, User } from "lucide-react";
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const checkAuth = async () => {
      setLoading(true);
      const { data: { session } } = await supabase.auth.getSession();
      setIsAuthenticated(!!session);
      setUserEmail(session?.user?.email || null);
      setLoading(false);
    };
    
    checkAuth();

    // Set up subscription to auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setIsAuthenticated(!!session);
        setUserEmail(session?.user?.email || null);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleSignOut = async () => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
      toast({
        title: "Signed out successfully",
        description: "You have been signed out of your account",
      });
      navigate('/');
    } catch (error) {
      console.error("Error signing out:", error);
      toast({
        title: "Sign out failed",
        description: "There was a problem signing you out. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-exceed-navy">
              ExceedAcademy<span className="text-exceed-blue">.org</span>
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#why-writing" className="text-gray-700 hover:text-exceed-blue px-3 py-2 text-sm font-medium transition-colors">
                Why Writing
              </a>
              <a href="#how-it-works" className="text-gray-700 hover:text-exceed-blue px-3 py-2 text-sm font-medium transition-colors">
                How It Works
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-exceed-blue px-3 py-2 text-sm font-medium transition-colors">
                Pricing
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-exceed-blue px-3 py-2 text-sm font-medium transition-colors">
                Testimonials
              </a>
              <a href="#faq" className="text-gray-700 hover:text-exceed-blue px-3 py-2 text-sm font-medium transition-colors">
                FAQ
              </a>
              
              {loading ? (
                <div className="h-10 w-10 animate-pulse bg-gray-200 rounded-full"></div>
              ) : isAuthenticated ? (
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="bg-exceed-blue text-white hover:bg-exceed-indigo">
                        <User className="h-4 w-4 mr-1" />
                        {userEmail ? userEmail.split('@')[0] : 'Account'}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="p-4 w-56">
                          {userEmail && (
                            <p className="text-sm text-gray-500 mb-3 truncate">{userEmail}</p>
                          )}
                          <Button 
                            className="w-full justify-start"
                            variant="outline"
                            onClick={() => navigate('/account')}
                          >
                            My Account
                          </Button>
                          <Button 
                            className="w-full justify-start mt-2"
                            variant="outline" 
                            onClick={handleSignOut}
                          >
                            Sign Out
                          </Button>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              ) : (
                <div className="flex items-center space-x-2">
                  <Link to="/auth">
                    <Button variant="outline">
                      Log In
                    </Button>
                  </Link>
                  <Link to="/auth?signup=true">
                    <Button className="bg-exceed-blue hover:bg-exceed-indigo">
                      Sign Up
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="text-gray-700 hover:text-gray-900"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#why-writing" 
              className="block px-3 py-2 text-gray-700 hover:text-exceed-blue font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Why Writing
            </a>
            <a 
              href="#how-it-works" 
              className="block px-3 py-2 text-gray-700 hover:text-exceed-blue font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#pricing" 
              className="block px-3 py-2 text-gray-700 hover:text-exceed-blue font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#testimonials" 
              className="block px-3 py-2 text-gray-700 hover:text-exceed-blue font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#faq" 
              className="block px-3 py-2 text-gray-700 hover:text-exceed-blue font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <div className="pt-4 pb-2 border-t border-gray-200">
              {loading ? (
                <div className="px-3 py-2">
                  <div className="h-10 w-full animate-pulse bg-gray-200 rounded-md"></div>
                </div>
              ) : isAuthenticated ? (
                <>
                  <div className="px-3 py-2 text-sm text-gray-500">
                    Signed in as <span className="font-medium">{userEmail}</span>
                  </div>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      navigate('/account');
                    }}
                    className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 font-medium"
                  >
                    My Account
                  </button>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      handleSignOut();
                    }}
                    className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 font-medium"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <div className="space-y-2 px-3">
                  <Link to="/auth" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="outline" className="w-full">Log In</Button>
                  </Link>
                  <Link to="/auth?signup=true" onClick={() => setMobileMenuOpen(false)}>
                    <Button className="w-full bg-exceed-blue hover:bg-exceed-indigo">Sign Up</Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
