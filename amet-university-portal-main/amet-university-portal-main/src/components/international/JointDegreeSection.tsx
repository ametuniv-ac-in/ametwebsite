
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, University, Briefcase } from "lucide-react";

const JointDegreeSection = () => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold text-aemet-navy mb-6 flex items-center gap-3">
        <GraduationCap className="h-6 w-6 text-aemet-blue" />
        <span>Joint Degree</span>
      </h2>
      
      <div className="bg-gradient-to-r from-aemet-navy/10 to-aemet-blue/10 p-6 rounded-lg mb-8 shadow-sm border border-aemet-blue/20 animate-fade-in">
        <p className="text-gray-700 leading-relaxed">
          AMET's Joint Degree programs are designed to complement the existing curricula, providing 
          students with the skills and knowledge necessary to succeed in the 21st century global marketplace. 
          AMET associates closely with top universities across the globe to offer affordable, 
          internationally recognized joint degree programs.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          These programs allow students to earn two degrees simultaneously, potentially from AMET and 
          institutions from other countries.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-aemet-blue/20 hover:shadow-md transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <University className="h-8 w-8 text-aemet-blue shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-aemet-navy mb-2">Benefits</h3>
                <ul className="text-gray-700 text-sm space-y-2 list-disc pl-4">
                  <li>Earn two internationally recognized degrees</li>
                  <li>Gain global exposure and cross-cultural competencies</li>
                  <li>Enhanced career opportunities worldwide</li>
                  <li>Access to global alumni networks</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-aemet-blue/20 hover:shadow-md transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <Briefcase className="h-8 w-8 text-aemet-blue shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-aemet-navy mb-2">Industry Relevance</h3>
                <p className="text-gray-700 text-sm">
                  Our joint degree programs are developed in consultation with industry experts and 
                  international academic leaders to ensure relevance to the global job market, 
                  particularly in Maritime, Engineering, and Management sectors.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default JointDegreeSection;
