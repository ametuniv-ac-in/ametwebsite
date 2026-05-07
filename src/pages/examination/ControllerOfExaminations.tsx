
import React from 'react';
import ExaminationLayout from '@/components/examination/ExaminationLayout';
import { Card, CardContent } from '@/components/ui/card';
import { FileCheck, Calendar, Users, Shield, Phone, Mail } from 'lucide-react';

const ControllerOfExaminations = () => {
  return (
    <ExaminationLayout title="Controller of Examinations">
      <div>
        <h1 className="text-3xl font-bold text-aemet-navy mb-6">Controller of Examinations</h1>
        <div className="prose max-w-none">
          <p className="text-gray-700 mb-6">
            The Office of the Controller of Examinations conducts the End Semester Examinations and Continuous 
            Internal Assessment examinations for all the undergraduate and postgraduate programs offered by the 
            institution and timely publication of results. The Office of COE facilitates Photocopy and Revaluation 
            of answer scripts. The Office of the COE issues grade reports, consolidated grade reports, provisional 
            certificates, degree certificates, conversion certificates, attestation for certificates and transcripts. 
            The Office of the COE also verifies the genuineness of certificates through both online and offline mode 
            to various stakeholders. The convocation ceremony is conducted by the Office of the COE every year to award 
            degree certificates to eligible students. The Office of the COE is headed by the Controller of Examinations 
            and assisted by technical and administrative staffs.
          </p>

          <div className="bg-blue-50 rounded-lg p-6 mb-8 border border-blue-100">
            <div className="mb-4">
              <h2 className="text-xl font-bold text-aemet-navy mb-2">VISION</h2>
              <p className="text-gray-700">
                To develop and implement policies and procedures for the effective examination and evaluation.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-bold text-aemet-navy mb-2">MISSION</h2>
              <p className="text-gray-700">
                To develop an efficient examination system with complete automation for the conduct of examination, 
                evaluation and result publication by adhering to the values of quality, justice and confidentiality.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 my-8">
            <Card className="bg-blue-50">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FileCheck className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-aemet-navy">Examination Process</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Manages end-to-end examination processes from exams to result publication
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-50">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Calendar className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-aemet-navy">Certificates</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Issues grade reports, degree certificates and transcripts
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-50">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-aemet-navy">Verification</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Verifies genuineness of certificates through online and offline methods
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-50">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-aemet-navy">Convocation</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Conducts the annual convocation ceremony for graduating students
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
            <h2 className="text-xl font-semibold text-aemet-navy mb-4">Examination Team</h2>
            <p className="mb-4">The office is headed by the Controller of Examinations and supported by a team of:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Deputy Controller of Examinations</li>
              <li>Assistant Controllers of Examinations</li>
              <li>Section Officers</li>
              <li>Technical and Support Staff</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-8">
            <h2 className="text-2xl font-semibold text-aemet-navy mb-4">Contact Information</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <img 
                  src="/lovable-uploads/c0a1dca3-95f8-49cc-896b-69fa48e29464.png" 
                  alt="Dr. A. Rajesh Kanna" 
                  className="rounded-lg shadow-md w-full max-w-[250px] mx-auto md:mx-0 mb-4" 
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-bold text-aemet-navy mb-2">Dr. A. Rajesh Kanna</h3>
                <p className="text-aemet-blue font-medium mb-4">Controller of Examination i/c</p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-aemet-blue" />
                    <p className="text-gray-700">044 - 2744 4628 Extn: 132</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-aemet-blue" />
                    <p className="text-gray-700">coe@ametuniv.ac.in</p>
                  </div>
                  <p className="text-gray-700 pt-3">
                    <strong>Office Hours:</strong> Monday to Friday (9:00 AM to 5:00 PM)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ExaminationLayout>
  );
};

export default ControllerOfExaminations;
