import React from 'react';
import { FileText, Download, Calendar, Info, Siren } from 'lucide-react';

interface SARSectionProps {
  departmentId?: string;
}

const SARSection: React.FC<SARSectionProps> = ({ departmentId }) => {
  
  // Naval Architecture specific SAR
  if (departmentId === 'naval-architecture') {
    return (
      <div>
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <Siren className="h-5 w-5 mr-2 text-aemet-blue" />
          Self Assessment Report (SAR)
        </h3>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex items-start space-x-3">
            <Info className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <h4 className="font-medium text-blue-900 mb-1">About SAR</h4>
              <p className="text-blue-800 text-sm">
                The Self Assessment Report provides a comprehensive evaluation of the Naval Architecture Department's 
                academic performance, research activities, infrastructure, faculty achievements, and overall quality 
                metrics as per NAAC guidelines.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-8 text-center">
          <div className="w-20 h-20 bg-aemet-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="h-10 w-10 text-aemet-blue" />
          </div>
          <h4 className="text-xl font-semibold text-aemet-navy mb-2">
            Department of Naval Architecture & Ocean Engineering
          </h4>
          <p className="text-gray-600 mb-6">
            Self Assessment Report - Comprehensive Documentation
          </p>
          <a 
            href="/documents/naval-architecture/SAR.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-aemet-blue text-white rounded-lg hover:bg-aemet-navy transition-colors"
          >
            <Download className="h-5 w-5 mr-2" />
            Download SAR Document
          </a>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-r from-aemet-navy to-aemet-blue text-white p-4 rounded-lg text-center">
            <div className="text-lg font-semibold mb-1">NAAC Accredited</div>
            <div className="text-2xl font-bold">A+</div>
          </div>
          <div className="bg-gradient-to-r from-aemet-blue to-green-600 text-white p-4 rounded-lg text-center">
            <div className="text-lg font-semibold mb-1">Department Status</div>
            <div className="text-sm">Autonomous</div>
          </div>
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-4 rounded-lg text-center">
            <div className="text-lg font-semibold mb-1">Academic Excellence</div>
            <div className="text-2xl font-bold">★★★★</div>
          </div>
        </div>
      </div>
    );
  }
  
  // Marine Engineering specific SAR
  if (departmentId === 'marine-engineering') {
    return (
      <div>
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <Siren className="h-5 w-5 mr-2 text-aemet-blue" />
          Self Assessment Report (SAR)
        </h3>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex items-start space-x-3">
            <Info className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <h4 className="font-medium text-blue-900 mb-1">About SAR</h4>
              <p className="text-blue-800 text-sm">
                The Self Assessment Report provides a comprehensive evaluation of the Marine Engineering Department's 
                academic performance, research activities, infrastructure, faculty achievements, and overall quality 
                metrics as per NAAC guidelines.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-8 text-center">
          <div className="w-20 h-20 bg-aemet-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="h-10 w-10 text-aemet-blue" />
          </div>
          <h4 className="text-xl font-semibold text-aemet-navy mb-2">
            Department of Marine Engineering
          </h4>
          <p className="text-gray-600 mb-6">
            Self Assessment Report - Comprehensive Documentation
          </p>
          <a 
            href="/documents/marine-engineering-sar.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-aemet-blue text-white rounded-lg hover:bg-aemet-navy transition-colors"
          >
            <Download className="h-5 w-5 mr-2" />
            Download SAR Document
          </a>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-r from-aemet-navy to-aemet-blue text-white p-4 rounded-lg text-center">
            <div className="text-lg font-semibold mb-1">NAAC Accredited</div>
            <div className="text-2xl font-bold">A+</div>
          </div>
          <div className="bg-gradient-to-r from-aemet-blue to-green-600 text-white p-4 rounded-lg text-center">
            <div className="text-lg font-semibold mb-1">Department Status</div>
            <div className="text-sm">Autonomous</div>
          </div>
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-4 rounded-lg text-center">
            <div className="text-lg font-semibold mb-1">Academic Excellence</div>
            <div className="text-2xl font-bold">★★★★</div>
          </div>
        </div>
      </div>
    );
  }
  
  // Default SAR content for other departments
  const sarReports = [
    {
      year: "2023-24",
      title: "Self Assessment Report 2023-24",
      status: "Latest",
      size: "2.5 MB"
    },
    {
      year: "2022-23",
      title: "Self Assessment Report 2022-23",
      status: "Completed",
      size: "2.3 MB"
    },
    {
      year: "2021-22",
      title: "Self Assessment Report 2021-22",
      status: "Completed",
      size: "2.1 MB"
    }
  ];

  return (
    <div>
      <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
        <FileText className="h-5 w-5 mr-2 text-aemet-blue" />
        Self Assessment Reports (SAR)
      </h3>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <div className="flex items-start space-x-3">
          <Info className="h-5 w-5 text-blue-600 mt-0.5" />
          <div>
            <h4 className="font-medium text-blue-900 mb-1">About SAR</h4>
            <p className="text-blue-800 text-sm">
              Self Assessment Reports provide comprehensive evaluation of department's academic performance, 
              research activities, infrastructure, and overall quality metrics as per NAAC guidelines.
            </p>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        {sarReports.map((report, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all duration-300">
            <div className="flex items-center justify-between">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-aemet-blue rounded-lg flex items-center justify-center">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="font-semibold text-aemet-navy text-lg">{report.title}</h4>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      report.status === 'Latest' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {report.status}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm space-x-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Academic Year: {report.year}</span>
                    </div>
                    <div className="flex items-center">
                      <span>Size: {report.size}</span>
                    </div>
                  </div>
                </div>
              </div>
              <button className="flex items-center space-x-2 bg-aemet-blue text-white px-4 py-2 rounded-lg hover:bg-aemet-navy transition-colors">
                <Download className="h-4 w-4" />
                <span>Download</span>
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-r from-aemet-navy to-aemet-blue text-white p-4 rounded-lg text-center">
          <div className="text-lg font-semibold mb-1">NAAC Grade</div>
          <div className="text-2xl font-bold">A+</div>
        </div>
        <div className="bg-gradient-to-r from-aemet-blue to-green-600 text-white p-4 rounded-lg text-center">
          <div className="text-lg font-semibold mb-1">Accreditation</div>
          <div className="text-sm">Valid till 2027</div>
        </div>
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-4 rounded-lg text-center">
          <div className="text-lg font-semibold mb-1">Quality Score</div>
          <div className="text-2xl font-bold">3.8/4</div>
        </div>
      </div>
    </div>
  );
};

export default SARSection;