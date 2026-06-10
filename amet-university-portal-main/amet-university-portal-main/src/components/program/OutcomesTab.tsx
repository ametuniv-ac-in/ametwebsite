import React from 'react';
import { Info, ExternalLink, BookOpen, Target } from 'lucide-react';
interface OutcomesTabProps {
  program: {
    pos?: string[];
    careerPath: string;
    [key: string]: any;
  };
}
const OutcomesTab: React.FC<OutcomesTabProps> = ({
  program
}) => {
  return <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-aemet-navy mb-4">Program Outcomes</h2>
      
      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm mb-6">
        <h3 className="text-lg font-semibold text-aemet-navy mb-3 flex items-center">
          <Target className="text-aemet-blue mr-2 h-5 w-5" />
          Program Outcomes (PO)
        </h3>
        <p className="text-gray-700 mb-4">
          Upon successful completion of this program, graduates will be able to:
        </p>
        <div className="space-y-3">
          {program.pos && program.pos.length > 0 ? program.pos.map((po, index) => <div key={index} className="flex items-start">
                <div className="flex-shrink-0 h-6 min-w-[24px] bg-aemet-blue text-white rounded-full flex items-center justify-center mr-3 mt-0.5 text-sm font-medium">
                  {index + 1}
                </div>
                <p className="text-gray-700">
                  <span className="font-medium">PO {index + 1}:</span> {po}
                </p>
              </div>) : <div className="text-gray-500 italic">
              Program Outcomes will be updated soon.
            </div>}
        </div>
      </div>
      
      
      
      <div className="mt-8">
        
      </div>
    </div>;
};
export default OutcomesTab;