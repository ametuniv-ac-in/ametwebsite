
import React from 'react';
import { Separator } from "@/components/ui/separator";

const ConvocationInfo: React.FC = () => {
  return (
    <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
      <h2 className="text-xl font-semibold text-aemet-navy mb-4">Convocation Information</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-medium text-gray-700 mb-2">For Students</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            <li>Ensure all academic requirements are met before the convocation date</li>
            <li>Complete the registration process for attending the convocation</li>
            <li>Collect your graduation gown and accessories as per the schedule</li>
            <li>Arrive at the venue at least 2 hours before the ceremony</li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-medium text-gray-700 mb-2">For Parents & Guests</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            <li>Entry to the venue is by invitation only</li>
            <li>Parking facilities will be available at designated areas</li>
            <li>Photography is permitted in designated areas only</li>
            <li>Please be seated 30 minutes before the ceremony begins</li>
          </ul>
        </div>
      </div>
      
      <Separator className="my-6" />
      
      <div className="text-center">
        <p className="text-gray-700 mb-4">For more information regarding the upcoming convocation, please contact:</p>
        <p className="font-medium">
          Office of the Controller of Examinations<br />
          Email: convocation@ametuniv.ac.in<br />
          Phone: 044 - 2747 2155 / 157 Extn: 136
        </p>
      </div>
    </div>
  );
};

export default ConvocationInfo;
