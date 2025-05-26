
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="mb-8">
          <Button variant="ghost" className="mb-4" asChild>
            <Link to="/" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <h1 className="text-3xl md:text-4xl font-bold text-exceed-navy">Terms of Service</h1>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <p>Last Updated: April 7, 2025</p>
          
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using ExceedAcademy.org ("the Service"), you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the Service.
          </p>
          
          <h2>2. Description of Service</h2>
          <p>
            ExceedAcademy.org provides writing feedback, coaching, and educational services for students in grades 6-12. Our services include but are not limited to essay review, writing instruction, and academic support.
          </p>
          
          <h2>3. User Accounts</h2>
          <p>
            When you create an account with us, you must provide accurate, complete, and current information at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
          </p>
          
          <h2>4. Subscription and Payments</h2>
          <p>
            Our service operates on a subscription basis. Payments are charged on a recurring monthly basis according to your selected plan. You can cancel your subscription at any time, but no refunds will be provided for partial months.
          </p>
          
          <h2>5. Academic Integrity</h2>
          <p>
            Our services are designed to help students improve their writing skills. We do not write essays or complete assignments for students. All feedback is intended to guide students in developing their own work and skills.
          </p>
          
          <h2>6. Content Ownership</h2>
          <p>
            Students retain all rights to their submitted work. However, by submitting content to our service, you grant us a non-exclusive license to use, store, and process that content for the purpose of providing our services.
          </p>
          
          <h2>7. Termination</h2>
          <p>
            We may terminate or suspend your account immediately, without prior notice or liability, for any reason, including without limitation if you breach the Terms.
          </p>
          
          <h2>8. Limitation of Liability</h2>
          <p>
            In no event shall ExceedAcademy.org, its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
          </p>
          
          <h2>9. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. It is your responsibility to review these Terms periodically for changes.
          </p>
          
          <h2>10. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at support@exceedacademy.org.
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;
