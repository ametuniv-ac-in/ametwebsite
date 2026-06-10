import React from 'react';
import { Info, Download, FileDown, BookOpen, Target, Star } from 'lucide-react';
interface ObjectivesTabProps {
  program: {
    peos?: string[];
    psos?: string[];
    curriculumLink?: string;
    [key: string]: any;
  };
}
const ObjectivesTab: React.FC<ObjectivesTabProps> = ({
  program
}) => {
  return <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-aemet-navy mb-4">Program Objectives</h2>
      
      <div className="space-y-6">
        <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-aemet-navy mb-3 flex items-center">
            <Target className="text-aemet-blue mr-2 h-5 w-5" />
            Programme Educational Objectives (PEO)
          </h3>
          <p className="text-gray-700 mb-3">
            Program Educational Objectives (PEOs) are established by means of a consultation process. PEOs are specific statements outlining the career and educational milestones that the students will accomplish within three to five years of the graduation year.
          </p>
          <p className="text-gray-700 mb-3 font-medium">
            The Electrical and Electronics Engineering - Marine Program graduates will:
          </p>
          <div className="space-y-3">
            {program.peos && program.peos.length > 0 ? program.peos.map((peo, index) => <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-6 min-w-[24px] bg-aemet-blue text-white rounded-full flex items-center justify-center mr-3 mt-0.5 text-sm font-medium">
                    {index + 1}
                  </div>
                  <p className="text-gray-700"><span className="font-medium">PEO{index + 1}:</span> {peo}</p>
                </div>) : <div className="text-gray-500 italic">
                Program Educational Objectives will be updated soon.
              </div>}
          </div>
        </div>
        
        
        
        

        
      </div>
    </div>;
};
export default ObjectivesTab;