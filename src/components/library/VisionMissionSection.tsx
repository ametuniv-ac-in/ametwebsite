
import React from 'react';
import { Lightbulb, ScrollText, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const VisionMissionSection = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-aemet-navy mb-4">Our Purpose</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-0 shadow-md">
          <div className="bg-[#EBF5FF] h-2" />
          <div className="p-2">
            <div className="bg-[#EBF5FF] rounded-full w-12 h-12 flex items-center justify-center mb-4 mt-2">
              <Lightbulb className="h-6 w-6 text-aemet-blue" />
            </div>
          </div>
          <CardContent>
            <h2 className="text-xl font-semibold text-aemet-navy mb-3">Vision</h2>
            <p className="text-gray-700">
              To enrich the library as Knowledge Resource Centre to experience an effective and innovative Maritime Education.
            </p>
          </CardContent>
        </Card>
        
        <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-0 shadow-md">
          <div className="bg-[#F0FDF4] h-2" />
          <div className="p-2">
            <div className="bg-[#F0FDF4] rounded-full w-12 h-12 flex items-center justify-center mb-4 mt-2">
              <ScrollText className="h-6 w-6 text-aemet-green" />
            </div>
          </div>
          <CardContent>
            <h2 className="text-xl font-semibold text-aemet-navy mb-3">Mission</h2>
            <p className="text-gray-700">
              To inspire learning and discovery of Maritime Information Resources through knowledge networking.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VisionMissionSection;
