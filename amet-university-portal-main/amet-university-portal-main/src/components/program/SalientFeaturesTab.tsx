import React from 'react';
import { Sparkles } from 'lucide-react';
import { ProgramDetails } from './ProgramTypeDefinitions';

interface SalientFeaturesTabProps {
  program: ProgramDetails;
}

const SalientFeaturesTab: React.FC<SalientFeaturesTabProps> = ({ program }) => {
  if (!program.salientFeatures || program.salientFeatures.length === 0) {
    return (
      <div className="animate-fade-in">
        <h2 className="text-2xl font-bold text-aemet-navy mb-6 flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-aemet-blue" />
          Salient Features
        </h2>
        <div className="text-gray-500 italic">
          Salient features information will be available soon.
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-aemet-navy mb-6 flex items-center gap-2">
        <Sparkles className="h-6 w-6 text-aemet-blue" />
        Salient Features
      </h2>
      <div className="grid gap-4">
        {program.salientFeatures.map((feature, index) => (
          <div key={index} className="flex gap-3 items-start p-4 bg-gradient-to-r from-aemet-blue/5 to-transparent rounded-lg border-l-4 border-aemet-blue">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-aemet-blue flex items-center justify-center mt-0.5">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <p className="text-gray-700 flex-1 pt-1">{feature}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalientFeaturesTab;
