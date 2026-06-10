import React from 'react';
import AdmissionsLayout from '@/components/admissions/AdmissionsLayout';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, GraduationCap, ExternalLink, File, Phone, Mail, Calendar, IndianRupee } from "lucide-react";

const ApplicationForms = () => {
  return (
    <AdmissionsLayout title="Application Forms">
      <div>
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-aemet-navy mb-4">Application Forms - Academic Year 2026-27</h1>
          <p className="text-gray-700 max-w-3xl mx-auto">
            We are pleased to announce that our University is inviting applications for the Academic year 2026-27 for the prospective and eligible candidates.
            The application process is simple and straightforward, and we encourage you to take advantage of this opportunity to pursue your academic goals.
          </p>
        </div>

        {/* Application Process */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-amet-navy">Application Process</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { step: 1, label: "New User Registration" },
                { step: 2, label: "Sign in for Registered User" },
                { step: 3, label: "Filling Online Application" },
                { step: 4, label: "Photo and Signature upload" },
                { step: 5, label: "Online Payment" },
                { step: 6, label: "Download filled in Application" },
              ].map((item) => (
                <div key={item.step} className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-lg mb-2">
                    {item.step}
                  </div>
                  <p className="text-sm text-gray-700">{item.label}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Application Forms Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <File className="h-6 w-6 text-aemet-blue" />
              Application Form for Indian Students
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <a 
                href="https://admission.ametuniv.ac.in/application-form" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-aemet-blue hover:text-aemet-navy hover:underline transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                UG Application
              </a>
              <a 
                href="https://admission.ametuniv.ac.in/pg-application-form" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-aemet-blue hover:text-aemet-navy hover:underline transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                PG Application
              </a>
              <a 
                href="https://admission.ametuniv.ac.in/pre-sea-gp-rating-application-form-2025-2026" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-aemet-blue hover:text-aemet-navy hover:underline transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                GP Rating Application
              </a>
              <a 
                href="https://admission.ametuniv.ac.in/vships-center-of-excellence-application-form" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-aemet-blue hover:text-aemet-navy hover:underline transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                V.Ships Application
              </a>
              <a 
                href="https://admission.ametuniv.ac.in/certification-course-marine-welder-fitter-2025" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-aemet-blue hover:text-aemet-navy hover:underline transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                Marine Welder Fitter
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Photo & Signature Upload Procedures */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-amet-navy">Photo & Signature Uploading Procedures</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-amet-navy mb-2">Photograph Requirements</h4>
              <p className="text-gray-700">
                The recently taken Passport size Photograph to be uploaded preferably with white/off-white background. The file should be only in (.jpeg) format.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-amet-navy mb-2">Signature Requirements</h4>
              <ul className="text-gray-700 space-y-2">
                <li>• Please draw a rectangular box of size 6 cm (width) X 2 cm (height) on a A4 white paper.</li>
                <li>• Sign with blue or black pen within the box.</li>
                <li>• Scan the signature in (.jpeg) format using scanner and crop the image.</li>
                <li>• The scanned signature image size should be within 5 kB to 150 kB.</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Important Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <IndianRupee className="h-6 w-6 text-aemet-blue" />
                Application Fee
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Rs.1,250/- through Payment Gateway for UG, PG, DNS Programmes and GP rating Programme.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Calendar className="h-6 w-6 text-aemet-blue" />
                Application Deadlines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-gray-700 space-y-2">
                <li>• UG Application: 1st week of June'26</li>
                <li>• PG Application: 3rd week of June'26</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Important Notice */}
        <Card className="mb-8 border-red-200 bg-red-50">
          <CardContent className="p-6">
            <p className="text-red-800 font-medium text-center">
              ⚠️ Application Fee once paid shall not be refunded under any circumstances.
            </p>
          </CardContent>
        </Card>

        {/* Admission Helpline */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Phone className="h-6 w-6 text-aemet-blue" />
              Admission Helpline Numbers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <div className="bg-aemet-blue text-white p-4 rounded-lg text-center mb-4">
                <h3 className="font-semibold mb-2">Toll Free Number</h3>
                <p className="text-xl font-bold">1800 108 3030</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">Malayalam / English</span>
                  <span className="text-aemet-navy font-semibold">0 99620 80324</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">English / Tamil / Telugu</span>
                  <span className="text-aemet-navy font-semibold">0 93443 91418</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">Tamil / English</span>
                  <span className="text-aemet-navy font-semibold">0 99416 46119</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">English / Tamil / Kannada</span>
                  <span className="text-aemet-navy font-semibold">0 76677 99444</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">Hindi / English</span>
                  <span className="text-aemet-navy font-semibold">0 87545 99801</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-aemet-navy to-aemet-blue rounded-lg p-6 text-white text-center">
              <div className="flex items-center justify-center mb-3">
                <Mail className="h-6 w-6 mr-2" />
                <h3 className="text-lg font-semibold">For All Indian Admission Enquiry</h3>
              </div>
              <p className="text-xl font-semibold">admission@ametuniv.ac.in</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdmissionsLayout>
  );
};

export default ApplicationForms;