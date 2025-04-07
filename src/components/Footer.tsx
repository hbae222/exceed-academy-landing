
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">ExceedAcademy.org</h3>
            <p className="text-sm">
              Helping students discover their writing potential since 2020.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Academic Writing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Creative Writing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">College Prep</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Writing Feedback</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">About</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Our Teachers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} ExceedAcademy.org. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
