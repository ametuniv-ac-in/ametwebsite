import React from 'react';
import { Download, FileText } from 'lucide-react';

interface DownloadCurriculumTabProps {
  program: {
    curriculumDownload?: string;
    curriculumLink?: string;
    [key: string]: any;
  };
}

const DownloadCurriculumTab: React.FC<DownloadCurriculumTabProps> = ({ program }) => {
  const downloadLink = program.curriculumDownload || program.curriculumLink;
  
  if (!downloadLink) {
    return (
      <div className="text-gray-500 italic">
        Curriculum download not available for this program.
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-aemet-navy mb-4">Download Curriculum</h2>
      
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg border border-blue-100">
        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-aemet-blue rounded-full flex items-center justify-center mb-4">
            <FileText className="h-10 w-10 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-aemet-navy mb-2">Curriculum Document</h3>
          <p className="text-gray-700 mb-6">
            Download the complete curriculum for this program
          </p>
          <a 
            href={downloadLink}
            download
            className="inline-flex items-center px-6 py-3 bg-aemet-blue text-white rounded-lg hover:bg-aemet-navy transition-colors text-lg font-medium"
          >
            <Download className="h-5 w-5 mr-2" />
            Download Curriculum
          </a>
        </div>
      </div>
    </div>
  );
};

export default DownloadCurriculumTab;
