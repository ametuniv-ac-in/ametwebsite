
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const TrainingPrograms = () => {
  const trainingPrograms = [
    "Creating awareness about Career Planning and Career Mapping among the students",
    "Communication Skills Training",
    "Personality Development Program",
    "Technical Skills Training",
    "Quantitative Aptitude, Programmes to train students in Logical Reasoning and Analytical Skills",
    "Group Discussion Practice Sessions",
    "Mock Interview Sessions",
    "Industry Internship Programs",
    "Industry Institute Convergence Expert Interaction Sessions conducted by reputed external training organization and in-house trainer"
  ];

  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold text-aemet-navy mb-4">List of Training / Programs</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          {trainingPrograms.map((program, index) => (
            <li key={index}>{program}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default TrainingPrograms;
