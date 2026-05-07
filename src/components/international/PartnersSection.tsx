
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Map } from "lucide-react";

// Sample partner universities by region
const partnerCards = [
  {
    name: "Europe",
    universities: [
      "Maritime University of Szczecin, Poland",
      "University of Plymouth, UK",
      "Norwegian University of Science and Technology",
      "Chalmers University of Technology, Sweden"
    ]
  },
  {
    name: "Asia Pacific",
    universities: [
      "Australian Maritime College",
      "Malaysia Maritime Academy",
      "Dalian Maritime University, China",
      "Korea Maritime University"
    ]
  },
  {
    name: "Americas",
    universities: [
      "Texas A&M Maritime Academy, USA",
      "California State University Maritime Academy",
      "Maritime Academy of Toledo, USA",
      "University of São Paulo, Brazil"
    ]
  }
];

const PartnersSection = () => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold text-aemet-navy mb-6 flex items-center gap-3">
        <Briefcase className="h-6 w-6 text-aemet-blue" />
        <span>International Partners</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {partnerCards.map((region, index) => (
          <Card key={index} className="border-aemet-blue/20 hover:shadow-md transition-all duration-300">
            <CardContent className="p-4">
              <div className="flex flex-col items-center text-center">
                <Map className="h-10 w-10 text-aemet-blue mb-3" />
                <h3 className="text-lg font-medium text-aemet-navy mb-2">{region.name}</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  {region.universities.map((uni, idx) => (
                    <li key={idx}>{uni}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PartnersSection;
