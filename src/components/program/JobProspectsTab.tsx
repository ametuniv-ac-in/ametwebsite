import React from 'react';
import { Briefcase } from 'lucide-react';
import { ProgramDetails } from './ProgramTypeDefinitions';

interface JobProspectsTabProps {
  program: ProgramDetails;
}

const JobProspectsTab: React.FC<JobProspectsTabProps> = ({ program }) => {
  if (!program.jobProspects || program.jobProspects.length === 0) {
    return (
      <div className="animate-fade-in">
        <h2 className="text-2xl font-bold text-aemet-navy mb-6 flex items-center gap-2">
          <Briefcase className="h-6 w-6 text-aemet-blue" />
          Job Prospects
        </h2>
        <div className="text-gray-500 italic">
          Job prospects information will be available soon.
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-aemet-navy mb-6 flex items-center gap-2">
        <Briefcase className="h-6 w-6 text-aemet-blue" />
        Job Prospects
      </h2>
      <div className="space-y-4">
        {program.jobProspects.map((prospect, index) => (
          <div key={index} className="flex gap-3 items-start">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-aemet-blue/10 flex items-center justify-center mt-0.5">
              <span className="text-sm font-semibold text-aemet-blue">{index + 1}</span>
            </div>
            <p className="text-gray-700 flex-1">{prospect}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobProspectsTab;
