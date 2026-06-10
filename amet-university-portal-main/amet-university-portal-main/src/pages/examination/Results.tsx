
import React from 'react';
import ExaminationLayout from '@/components/examination/ExaminationLayout';
import { Card, CardContent } from '@/components/ui/card';
import { FileCheck, Calendar, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Results = () => {
  return (
    <ExaminationLayout title="Result Publication">
      <div>
        <h1 className="text-3xl font-bold text-aemet-navy mb-6">Result Publication</h1>
        
        <div className="prose max-w-none">
          <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200">
            <p className="text-gray-700 leading-relaxed mb-4">
              In the Controller of Examination office, Information and Communication Technology plays a vital role. 
              Until 2020, the University has used SEET (Software Enabled Evaluation Tool) developed by the Centre 
              for E-Governance, a server-based (secured) Examination Management System that provides a user-friendly interface.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              During 2020, the University adopted the Examination Management System fully automated through AMET ERP Portal. 
              University has published the result within the stipulated days from the last date of examination with an 
              automated system.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Students can view their results for the university examinations. The results published on the website are 
              for immediate information to the examinees. To view the examination results the below-mentioned URLs can be referred.
            </p>
          </div>

          <div className="mb-8">
            <Card className="border border-blue-100 hover:shadow-md transition-shadow max-w-md">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-50 p-3 rounded-full mr-4">
                    <FileCheck className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-aemet-navy mb-2">ESE Exam Result - Dec 2025</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      View your End Semester Examination results for December 2025
                    </p>
                    <Button 
                      variant="outline" 
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                      asChild
                    >
                      <a href="https://result.ametonline.com/" target="_blank" rel="noopener noreferrer">
                        View Results <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
            <h2 className="text-xl font-semibold text-aemet-navy mb-4">Important Notes</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>The marks displayed on the website are for immediate information only.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>Official grade cards will be available through the university ERP portal.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>For any discrepancies, contact the Office of Controller of Examinations within 7 days of result publication.</span>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-amber-200">
              <p className="text-gray-700">
                <strong>For result-related queries, contact:</strong><br />
                <strong>Email:</strong> results@ametuniv.ac.in<br />
                <strong>Phone:</strong> 044 - 2747 2155 / 157 Extn: 134
              </p>
            </div>
          </div>
        </div>
      </div>
    </ExaminationLayout>
  );
};

export default Results;
