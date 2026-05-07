
import React from 'react';
import { Separator } from "@/components/ui/separator";
import { Globe, University } from "lucide-react";

const IntroSection = () => {
  return (
    <>
      <div className="flex items-center gap-3 mb-2">
        <Globe className="h-8 w-8 text-aemet-blue" />
        <h1 className="text-3xl md:text-4xl font-bold text-aemet-navy">International Affairs</h1>
      </div>
      
      <Separator className="my-6" />
      
      <div className="bg-gradient-to-r from-aemet-navy/10 to-aemet-blue/10 p-6 rounded-lg mb-10 shadow-sm border border-aemet-blue/20 animate-fade-in">
        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="shrink-0">
            <University className="h-12 w-12 text-aemet-navy" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-aemet-navy mb-4">Office of International Relations</h2>
            <p className="text-gray-700 leading-relaxed">
              The Office of International Relations at the Academy of Maritime Education and Training (AMET) 
              is a dedicated directorate tasked with the goal of fostering global best practices and 
              exchange opportunities for the benefit of all Students and Faculty. AMET has established 
              a strong reputation in international academic circles, allowing students and faculty members 
              to engage in collaborative efforts with institutions across the world.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              International engagement is further highlighted by the emphasis on multidisciplinary 
              and transdisciplinary research, positioning AMET as a leader in the Maritime, Engineering, 
              Science, Management and Other domains.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroSection;
