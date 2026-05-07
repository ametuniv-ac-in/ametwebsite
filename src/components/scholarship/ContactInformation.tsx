
import React from 'react';
import { Phone, BanknoteIcon } from 'lucide-react';

const ContactInformation = () => {
  return (
    <>
      <div className="bg-aemet-lightBlue/20 border border-aemet-blue/20 rounded-md p-5 flex items-start">
        <BanknoteIcon className="h-6 w-6 text-aemet-blue mr-3 mt-0.5" />
        <div>
          <h3 className="text-lg font-medium text-aemet-navy mb-2">Financial Assistance</h3>
          <p className="text-gray-700">
            AMET University is committed to helping deserving students achieve their educational goals. For more information about scholarship programs or financial assistance, please visit the Administration Office or contact the Admissions Department.
          </p>
        </div>
      </div>
      
      <div className="mt-8 bg-aemet-navy/5 border border-aemet-navy/20 rounded-md p-5 flex items-start">
        <Phone className="h-6 w-6 text-aemet-blue mr-3 mt-0.5" />
        <div>
          <h3 className="text-lg font-medium text-aemet-navy mb-2">Contact Information</h3>
          <p className="text-gray-700 flex items-center">
            <span className="font-medium">For more details contact Toll Free:</span>
            <span className="ml-2 text-aemet-blue font-bold text-lg">1800 108 3030</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactInformation;
