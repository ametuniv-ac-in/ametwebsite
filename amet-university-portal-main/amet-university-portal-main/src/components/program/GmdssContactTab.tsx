import React from 'react';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import { ProgramDetails } from './ProgramTypeDefinitions';

interface GmdssContactTabProps {
  program: ProgramDetails;
}

const GmdssContactTab: React.FC<GmdssContactTabProps> = ({ program }) => {
  return (
    <div>
      <h3 className="text-xl font-bold text-aemet-navy mb-6">
        Contact Information - AMET University
      </h3>
      
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <h4 className="text-lg font-semibold text-aemet-navy mb-4">
          For Enquiry and Booking GMDSS Seat:
        </h4>
        
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="bg-aemet-blue/10 p-2 rounded-lg">
              <Phone className="h-5 w-5 text-aemet-blue" />
            </div>
            <div>
              <p className="text-gray-700">
                Call Direct Line - <span className="font-semibold">9344007360</span> (0900 - 1600 HRS) on working days only
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="bg-aemet-blue/10 p-2 rounded-lg">
              <Mail className="h-5 w-5 text-aemet-blue" />
            </div>
            <div>
              <p className="text-gray-700">
                Send Email to GMDSS DEPARTMENT: <a href="mailto:gmdss.amet@gmail.com" className="font-semibold text-aemet-blue hover:underline">gmdss.amet@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GmdssContactTab;
