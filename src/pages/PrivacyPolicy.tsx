
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold text-exceed-navy">Privacy Policy</h1>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <p>Last Updated: April 7, 2025</p>
          
          <h2>1. Introduction</h2>
          <p>
            At ExceedAcademy.org, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service.
          </p>
          
          <h2>2. Information We Collect</h2>
          <p>
            We collect information that you provide directly to us, including:
          </p>
          <ul>
            <li>Account information (name, email address, password)</li>
            <li>Student information (grade level, academic interests)</li>
            <li>Payment information (processed through secure third-party payment processors)</li>
            <li>Content submissions (essays, writing samples)</li>
            <li>Communications with us</li>
          </ul>
          
          <h2>3. How We Use Your Information</h2>
          <p>
            We use the information we collect to:
          </p>
          <ul>
            <li>Provide, maintain, and improve our services</li>
            <li>Process transactions and send related information</li>
            <li>Send administrative messages, updates, and promotional materials</li>
            <li>Respond to comments, questions, and requests</li>
            <li>Monitor and analyze trends, usage, and activities</li>
            <li>Personalize and improve the user experience</li>
          </ul>
          
          <h2>4. Information Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to outside parties except in the following circumstances:
          </p>
          <ul>
            <li>With service providers, consultants, and other third-party vendors who need access to such information to carry out work on our behalf</li>
            <li>In response to a request for information if we believe disclosure is in accordance with any applicable law, regulation, or legal process</li>
            <li>If we believe your actions are inconsistent with our user agreements or policies, or to protect the rights, property, and safety of ourselves or others</li>
          </ul>
          
          <h2>5. Data Security</h2>
          <p>
            We implement reasonable security measures to help protect your personal information from unauthorized access, use, or disclosure. However, no method of electronic transmission or storage is 100% secure.
          </p>
          
          <h2>6. Children's Privacy</h2>
          <p>
            Our service is directed to students in grades 6-12 and their parents or guardians. For students under 13, we require parental consent in accordance with the Children's Online Privacy Protection Act (COPPA).
          </p>
          
          <h2>7. Your Rights</h2>
          <p>
            Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete your data. To exercise these rights, please contact us.
          </p>
          
          <h2>8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
          </p>
          
          <h2>9. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at privacy@exceedacademy.org.
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
