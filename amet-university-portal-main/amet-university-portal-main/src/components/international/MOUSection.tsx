
import React from 'react';
import { HandshakeIcon } from "lucide-react";

const MOUSection = () => {
  return (
    <div className="mb-12 animate-fade-in">
      <h2 className="text-2xl font-semibold text-aemet-navy mb-6 flex items-center gap-3">
        <HandshakeIcon className="h-6 w-6 text-aemet-blue" />
        <span>MOU Signed</span>
      </h2>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-aemet-blue/20">
        <p className="text-gray-700 mb-6">
          AMET University has signed Memoranda of Understanding (MOUs) with several prestigious 
          international institutions to foster academic collaboration, research partnerships, 
          and student exchange programs:
        </p>
        
        <div className="mb-8">
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>University of Strathclyde, Scotland</li>
            <li>Edge Hill University, UK</li>
            <li>Business College of Athens, Greece</li>
            <li>Greek Institute of Maritime Education, Greece</li>
            <li>INTI International University, Malaysia</li>
            <li>James Cook University (Singapore Campus)</li>
            <li>City of Glasgow College, UK</li>
            <li>University of Plymouth, UK</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MOUSection;
