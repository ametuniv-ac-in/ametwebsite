import React from 'react';
import { FileText, Download } from 'lucide-react';

interface CurriculumTabProps {
  program: {
    curriculum?: string;
    [key: string]: any;
  };
}

const CurriculumTab: React.FC<CurriculumTabProps> = ({ program }) => {
  if (!program.curriculum) {
    return (
      <div className="text-gray-500 italic">
        Curriculum information not available for this program.
      </div>
    );
  }

  // Check if curriculum is a file path (for download)
  const isFilePath = program.curriculum.startsWith('/');

  if (isFilePath) {
    return (
      <div className="animate-fade-in">
        <h2 className="text-2xl font-bold text-aemet-navy mb-4">Curriculum</h2>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <FileText className="text-aemet-blue h-8 w-8" />
            <div>
              <h3 className="text-lg font-semibold text-aemet-navy">Course Curriculum</h3>
              <p className="text-gray-600 text-sm">Download the complete curriculum document</p>
            </div>
          </div>
          
          <a
            href={program.curriculum}
            download
            className="inline-flex items-center gap-2 bg-aemet-blue text-white px-6 py-3 rounded-lg hover:bg-aemet-navy transition-colors font-medium"
          >
            <Download className="h-5 w-5" />
            Download Curriculum (PDF)
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-aemet-navy mb-4">Curriculum</h2>
      
      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
        <h3 className="text-lg font-semibold text-aemet-navy mb-3 flex items-center">
          <FileText className="text-aemet-blue mr-2 h-5 w-5" />
          Curriculum
        </h3>
        <div className="text-gray-700 whitespace-pre-line">
          {program.curriculum}
        </div>
      </div>
    </div>
  );
};

export default CurriculumTab;
