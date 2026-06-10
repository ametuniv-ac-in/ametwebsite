
import React from 'react';
import { Mail, MapPin } from 'lucide-react';

const LibraryContactSection = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 h-full">
      <h2 className="text-2xl font-semibold text-aemet-navy mb-6 flex items-center">
        <Mail className="h-6 w-6 mr-2 text-aemet-blue" />
        Contact Us
      </h2>
      
      <div className="space-y-6">
        <div className="bg-slate-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-aemet-navy mb-3">Librarian</h3>
          <div className="space-y-3 text-gray-700">
            <p className="font-medium">Dr. V.B.S. Rajan Library</p>
            <div className="flex items-start space-x-2">
              <MapPin className="h-5 w-5 text-aemet-blue flex-shrink-0 mt-1" />
              <div>
                <p>AMET University</p>
                <p>ECR, Kanathur</p>
                <p>Chennai - 603 112</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-aemet-blue flex-shrink-0" />
              <a 
                href="mailto:vbsrajanlibrary@ametuniv.ac.in" 
                className="text-aemet-blue hover:underline"
              >
                vbsrajanlibrary@ametuniv.ac.in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryContactSection;
