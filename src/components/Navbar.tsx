
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-bold text-exceed-navy">
              ExceedAcademy<span className="text-exceed-blue">.org</span>
            </h1>
          </div>
          
          <div className="hidden md:block">
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
              <Button className="ml-4 bg-exceed-blue hover:bg-exceed-indigo">
                Get Started
              </Button>
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
            <a href="#why-writing" className="block px-3 py-2 text-gray-700 hover:text-exceed-blue font-medium">
              Why Writing
            </a>
            <a href="#how-it-works" className="block px-3 py-2 text-gray-700 hover:text-exceed-blue font-medium">
              How It Works
            </a>
            <a href="#pricing" className="block px-3 py-2 text-gray-700 hover:text-exceed-blue font-medium">
              Pricing
            </a>
            <a href="#testimonials" className="block px-3 py-2 text-gray-700 hover:text-exceed-blue font-medium">
              Testimonials
            </a>
            <a href="#faq" className="block px-3 py-2 text-gray-700 hover:text-exceed-blue font-medium">
              FAQ
            </a>
            <div className="pt-2">
              <Button className="w-full bg-exceed-blue hover:bg-exceed-indigo">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
