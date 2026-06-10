
import React from 'react';
import { Mail, Phone, MapPin } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ContactSection = () => {
  return (
    <div className="mb-16 animate-fade-in">
      <h2 className="text-2xl font-semibold text-aemet-navy mb-6 flex items-center gap-3">
        <Mail className="h-6 w-6 text-aemet-blue" />
        <span>Contact International Affairs Office</span>
      </h2>
      
      <div className="bg-white rounded-lg shadow-md border border-aemet-blue/20 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Contact Person Image */}
          <div className="p-6 flex flex-col items-center justify-center border-r border-aemet-blue/10">
            <Avatar className="h-32 w-32 mb-4 border-2 border-aemet-blue/20">
              <AvatarImage src="/lovable-uploads/2d4a083f-1bdd-45c5-b378-a241d22e87b6.png" alt="Dr. T. Sasilatha" />
              <AvatarFallback className="bg-aemet-blue/10 text-aemet-navy">TS</AvatarFallback>
            </Avatar>
            <h3 className="text-lg font-semibold text-aemet-navy text-center">Dr. T. Sasilatha</h3>
            <p className="text-aemet-blue text-center">Dean - Office of the International Affairs</p>
          </div>
          
          {/* Contact Details */}
          <div className="p-6 md:col-span-2">
            <h3 className="text-lg font-semibold text-aemet-navy mb-4">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-aemet-blue shrink-0 mt-1" />
                <div>
                  <p className="text-gray-700">AMET Deemed to be University</p>
                  <p className="text-gray-700">135, ECR, Kanathur, Chennai - 603 112</p>
                  <p className="text-gray-700">Tamil Nadu, India</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-aemet-blue shrink-0" />
                <p className="text-gray-700">044 - 2744 4625 / 627 / 628</p>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-aemet-blue shrink-0" />
                <a href="mailto:internationaloffice@ametuniv.ac.in" className="text-aemet-blue hover:underline">
                  internationaloffice@ametuniv.ac.in
                </a>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-aemet-blue/10">
              <p className="text-gray-700">
                For any queries related to international programs, partnerships, or mobility 
                opportunities, please contact the Office of International Affairs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
