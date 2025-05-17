
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

const ContactUs: React.FC = () => {
  return (
    <section id="contact" className="py-16">
      <div className="section-container">
        <div className="text-center mb-12">
          <p className="text-exceed-blue font-medium mb-2">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-exceed-navy mb-4">
            Get in touch, with real people
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We answer your questions quickly and personally from 9:00 to 23:00 EST
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex -space-x-4 mb-8">
            <Avatar className="h-16 w-16 border-4 border-white">
              <AvatarImage src="https://randomuser.me/api/portraits/women/65.jpg" alt="Support Team Member" />
              <AvatarFallback>ST</AvatarFallback>
            </Avatar>
            <Avatar className="h-16 w-16 border-4 border-white">
              <AvatarImage src="https://randomuser.me/api/portraits/men/32.jpg" alt="Support Team Member" />
              <AvatarFallback>ST</AvatarFallback>
            </Avatar>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Mail className="h-6 w-6 text-exceed-blue" />
              <a href="mailto:help@collegeessayexcel.com" className="text-exceed-blue hover:text-exceed-indigo transition-colors">
                help@collegeessayexcel.com
              </a>
            </div>
            
            <form className="space-y-4">
              <div>
                <Input type="text" placeholder="Your Name" className="w-full" />
              </div>
              <div>
                <Input type="email" placeholder="Your Email" className="w-full" />
              </div>
              <div>
                <textarea 
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 min-h-[100px]" 
                  placeholder="Your Message"
                ></textarea>
              </div>
              <Button className="w-full bg-exceed-blue hover:bg-exceed-indigo">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
