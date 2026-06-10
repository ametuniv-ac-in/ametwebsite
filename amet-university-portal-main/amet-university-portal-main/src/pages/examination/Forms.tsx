
import React from 'react';
import ExaminationLayout from '@/components/examination/ExaminationLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download, FileCheck, File } from 'lucide-react';

const Forms = () => {
  return (
    <ExaminationLayout title="Download Forms">
      <div>
        <h1 className="text-3xl font-bold text-aemet-navy mb-6">Download Forms</h1>
        
        <div className="prose max-w-none">
          <p className="text-gray-700 mb-6">
            The students/alumni are to apply and get their transcript/ duplicate certificate 
            and grade sheets/ Examination revaluation using the following forms. 
            Students/alumni are requested to read and follow the instructions given in the 
            application forms before proceeding to apply.
          </p>

          <div className="grid gap-6 my-8">
            <Card className="border-l-4 border-l-blue-500 shadow-sm">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-full">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="space-y-3 flex-1">
                    <h3 className="font-bold text-lg text-aemet-navy">
                      Application for Revaluation
                    </h3>
                    <p className="text-gray-600">
                      For students who wish to apply for revaluation of their answer scripts
                    </p>
                    <Button variant="outline" className="gap-2">
                      <Download className="h-4 w-4" />
                      Download Form
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500 shadow-sm">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-full">
                    <File className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="space-y-3 flex-1">
                    <h3 className="font-bold text-lg text-aemet-navy">
                      Application for Photocopy
                    </h3>
                    <p className="text-gray-600">
                      For students who wish to apply for photocopy of their answer scripts
                    </p>
                    <Button variant="outline" className="gap-2">
                      <Download className="h-4 w-4" />
                      Download Form
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500 shadow-sm">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-full">
                    <FileCheck className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="space-y-3 flex-1">
                    <h3 className="font-bold text-lg text-aemet-navy">
                      Application for Issue of the Transcripts
                    </h3>
                    <p className="text-gray-600">
                      For students/alumni who need official transcripts for higher education or employment
                    </p>
                    <Button variant="outline" className="gap-2">
                      <Download className="h-4 w-4" />
                      Download Form
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500 shadow-sm">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-full">
                    <FileCheck className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="space-y-3 flex-1">
                    <h3 className="font-bold text-lg text-aemet-navy">
                      Application for Duplicate Certificate
                    </h3>
                    <p className="text-gray-600">
                      For alumni who need duplicate copies of their degree certificates
                    </p>
                    <Button variant="outline" className="gap-2">
                      <Download className="h-4 w-4" />
                      Download Form
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
            <h2 className="text-xl font-semibold text-aemet-navy mb-4">Important Instructions</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>All forms should be filled completely with required details.</li>
              <li>Attach the necessary supporting documents as mentioned in the forms.</li>
              <li>Submit the completed form with the prescribed fee to the Office of Controller of Examinations.</li>
              <li>Processing time varies depending on the type of application.</li>
              <li>For any queries regarding the application forms, contact the Office of Controller of Examinations.</li>
            </ul>
          </div>
        </div>
      </div>
    </ExaminationLayout>
  );
};

export default Forms;
