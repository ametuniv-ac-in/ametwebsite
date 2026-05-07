
import React from 'react';
import ExaminationLayout from '@/components/examination/ExaminationLayout';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Database, GraduationCap, Laptop, BarChart } from 'lucide-react';

const ReformsAndIT = () => {
  return (
    <ExaminationLayout title="Reforms and IT Integrations">
      <div>
        <h1 className="text-3xl font-bold text-aemet-navy mb-6">Reforms and IT Integration</h1>
        <div className="prose max-w-none">
          <p className="text-gray-700 mb-6">
            The Office of the COE reformed the Examination Automation with the implementation of AMET ERP portal 
            which is integrated with the already existing SMART ERP and SEET in the year 2019.
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-lg p-8 mb-8 border border-blue-100 shadow-sm">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-bold text-aemet-navy mb-4">Automation Process</h2>
                <ul className="space-y-3 list-disc pl-5">
                  <li className="text-gray-700">
                    The evaluated answer scripts with OMR home page and unique Bar Code are scanned to obtain the marks from the answer scripts.
                  </li>
                  <li className="text-gray-700">
                    The marks are stored in the foil excel sheets. Then these marks are transferred from foil excel sheet to ERP with complete automation process.
                  </li>
                  <li className="text-gray-700">
                    ERP combines both Internals and Externals into a total maximum of 100 marks and generates the result copy of all the courses department wise for the moderation process.
                  </li>
                  <li className="text-gray-700">
                    After the recommendation of moderation marks by the Board of Examinations and approval of the Vice Chancellor moderation process can be done in ERP portal.
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-bold text-aemet-navy mb-4">Result Publication</h2>
                <ul className="space-y-3 list-disc pl-5">
                  <li className="text-gray-700">
                    Once the moderation process is completed, ERP generates the final gallery of the results of all the programs.
                  </li>
                  <li className="text-gray-700">
                    Results can be viewed by students in the ERP portal.
                  </li>
                  <li className="text-gray-700">
                    The entire examination process from the generation of Hall Tickets to the generation of Certificates is carried out by 100% automation.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 my-8">
            <Card className="bg-blue-50 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Database className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-aemet-navy">ERP Integration</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Integrated with SMART ERP and SEET systems
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <BarChart className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-aemet-navy">OMR Processing</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Scanning and automated mark retrieval
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Laptop className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-aemet-navy">100% Automation</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      End-to-end automated examination process
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-aemet-navy">Digital Results</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Online result viewing through ERP portal
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-8">
            <h2 className="text-2xl font-semibold text-aemet-navy mb-4">PhD Examination Reforms</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <GraduationCap className="h-5 w-5 text-blue-600" />
                </div>
                <p className="text-gray-700">
                  MOOC Courses with suitable credits are accepted for PhD Course Work Examinations.
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <GraduationCap className="h-5 w-5 text-blue-600" />
                </div>
                <p className="text-gray-700">
                  PhD Thesis evaluation process is done through online platforms.
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <GraduationCap className="h-5 w-5 text-blue-600" />
                </div>
                <p className="text-gray-700">
                  PhD Viva Voce Examinations are also conducted online.
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <GraduationCap className="h-5 w-5 text-blue-600" />
                </div>
                <p className="text-gray-700">
                  Online Plagiarism Checking using URKUND from UGC-INFLIBNET.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ExaminationLayout>
  );
};

export default ReformsAndIT;
