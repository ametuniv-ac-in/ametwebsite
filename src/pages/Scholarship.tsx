import React from 'react';
import AdmissionsLayout from '@/components/admissions/AdmissionsLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Users, GraduationCap, Heart, Users2, Anchor, ExternalLink, Building2 } from 'lucide-react';

const Scholarship = () => {
  return (
    <AdmissionsLayout title="Scholarship Programs">
      <div>
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-aemet-navy mb-4">Scholarship Provided by AMET</h1>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Academy of Maritime Education and Training (AMET) is initiating many steps for the welfare of the students and one of its kind assisting for scholarships for the deserving students.
          </p>
        </div>

        <div className="grid gap-6 mb-8">
          {/* PM-Vidyalaxmi */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Building2 className="h-6 w-6 text-aemet-blue" />
                PM-Vidyalaxmi
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                PM-Vidyalaxmi is a Unified Portal for the students to apply for education loan provided by scheduled commercial banks, co-operative banks, RRBs & private banks and submit applications for Educational Loan & Interest Subvention.
              </p>
              <a 
                href="#" 
                className="inline-flex items-center text-aemet-blue hover:text-aemet-navy font-medium"
              >
                Click Here <ExternalLink className="ml-1 h-4 w-4" />
              </a>
            </CardContent>
          </Card>

          {/* DG Shipping Scholarship */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Anchor className="h-6 w-6 text-aemet-blue" />
                Directorate General of Shipping (DG) Scholarship
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h4 className="font-semibold text-aemet-navy mb-3">Maritime Training Trust Scholarship for Female Cadets</h4>
              <p className="text-gray-700">
                Maritime Training Trust (MTT) of Directorate General of Shipping, (Ministry of Shipping, Govt. of India) has announced the Financial support of Rs.1,00,000/- per annum scholarship to all Indian Woman Seafarers who are undergoing pre-sea courses in the DGS approved Maritime Training Institutes (MTIs).
              </p>
            </CardContent>
          </Card>

          {/* Shree Janakiraman Scholarship */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Heart className="h-6 w-6 text-aemet-blue" />
                Shree Janakiraman Scholarship
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-3">
                AMET University is offering fees concessions to the Students from economically backward family who are not affordable to pay the fees regularly. Whenever the request for concession received from the Student and the same, submitted to Vice Chancellor for consideration. After a review of the application case by case, the application may place before the committee for approval and sanction the eligible amount.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Eligibility:</strong> Candidate family annual income should not exceed Rs.2.00 lakhs. The Students who deserved to get financial help from the management may awarded this scholarship in the name of Shree Janakiraman.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Meritorious Student Scholarship */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Award className="h-6 w-6 text-aemet-blue" />
                Meritorious Student Scholarship
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-3">
                The University is awarding Meritorious Student Scholarship to the outstanding students who have secured more than 90% of marks in their Higher Secondary Examination. The eligible students will get 15% of Tuition fees as fees concession of course. The same may verified and submitted to Vice Chancellor.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Eligibility:</strong> Candidate family annual income should not exceed Rs.2.00 lakhs. All applications may placed before the committee for recommendation and sanction.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* First Graduate Fees Concession */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-aemet-blue" />
                First Graduate Fees Concession
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-3">
                As per the Government order Ms:No:85/Higher Education (J2) Department dt:16.04.10, First graduate fees concession are offered to the eligible candidates at the time of admission. The candidate can submit the joint declaration of parents and candidate along with the "No graduate Certificate" issued by the Revenue authority to avail the fees concession in the first year.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Eligibility:</strong> Candidate family annual income should not exceed Rs.2.00 lakhs. The University is offering 15% of Tuition fees as fees concession to the first graduate eligible candidate at the first year.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Single Parent Scholarship */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Heart className="h-6 w-6 text-aemet-blue" />
                Single Parent Scholarship
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-3">
                Single Parents Scholarship is entitled to the students who are deserted by parents either by death or divorce and they are economically poor to offer the course fees. The eligible Students can submit the application along with death certificate, Legal heir certificate or court proceedings of the parents which ever admissible.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Eligibility:</strong> Candidate family annual income should not exceed Rs.2.00 lakhs. The applications are verified and sanctioned 15% of tuition fees as concession through this scholarship.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Girl Cadet Scholarship */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Users2 className="h-6 w-6 text-aemet-blue" />
                Girl Cadet Scholarship
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-3">
                In Order to encourage the girl students to pursue Marine education, the University is offering Fees concession to the female cadets/students @ 15% of Tuition fees.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Eligibility:</strong> Candidate family annual income should not exceed Rs.2.00 lakhs. This fee concession allowed at the time of admission based on the request of the parent and the economic status of the family and the educational performance of the students.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Ex Servicemen Scholarship */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Users className="h-6 w-6 text-aemet-blue" />
                Ex Servicemen Scholarship
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-3">
                The ward of Ex-servicemen, undergoing any courses in this University can apply for the Ex-servicemen Scholarship. The application for this scholarship must be accompanied with the relevant proof of document for Ex-servicemen issued by central government. Only authorized student can apply for this scholarship.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Eligibility:</strong> Candidate family annual income should not exceed Rs.2.00 lakhs. 15% of the tuition is allowed to the eligible student at the time of admission.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Fishermen Scholarship */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Anchor className="h-6 w-6 text-aemet-blue" />
                Fishermen Scholarship
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Candidate belongs to Fishermen community. Candidate family annual income should not exceed Rs.2.00 lakhs. 15% of the tuition is allowed to the eligible student at the time of admission.
              </p>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-aemet-navy mb-2">Additional Resources:</h4>
                  <div className="space-y-2">
                    <a 
                      href="#" 
                      className="inline-flex items-center text-aemet-blue hover:text-aemet-navy font-medium"
                    >
                      Fishermen Scholarship provided by State Govt. of Tamil Nadu <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* NGO Scholarship */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Users className="h-6 w-6 text-aemet-blue" />
                NGO Scholarship
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-3">
                New Era Association of Educated Self Employed Youth (NAESEY)
              </p>
              <a 
                href="#" 
                className="inline-flex items-center text-aemet-blue hover:text-aemet-navy font-medium"
              >
                Click Here <ExternalLink className="ml-1 h-4 w-4" />
              </a>
            </CardContent>
          </Card>

          {/* Government Scholarship */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Building2 className="h-6 w-6 text-aemet-blue" />
                Government Scholarship
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Post matric Scholarships for all students provided by Central Government
              </p>
              <a 
                href="#" 
                className="inline-flex items-center text-aemet-blue hover:text-aemet-navy font-medium mb-6"
              >
                Click here to apply <ExternalLink className="ml-1 h-4 w-4" />
              </a>

              <div className="space-y-6 mt-6">
                <div className="border-t pt-6">
                  <h4 className="font-semibold text-aemet-navy mb-3">Eligibility criteria for Post Matric Scholarship for SC/ST/Converted Christians from SC:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                    <li>Candidates belong to SC/ST/Converted Christians from SC</li>
                    <li>Father's annual income should not exceed Rs.2.00 lakhs</li>
                    <li>Candidate's father's annual income should not exceed Rs.2.5 lakhs for those who are working in the Government Departments</li>
                  </ul>
                  
                  <h5 className="font-semibold text-aemet-navy mb-2">How to apply:</h5>
                  <p className="text-gray-700 mb-2">
                    The candidates are informed to collect the application forms from the Administration office and submit the filled in application form along with the following testimonials:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Community Certificate</li>
                    <li>Income Certificate</li>
                    <li>Candidates bank details: Account No., IFS code number, MICR code number</li>
                  </ul>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-semibold text-aemet-navy mb-3">Eligibility criteria for students belong to Minority Community:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                    <li>Candidate belongs to Minority community</li>
                    <li>Candidate's father's annual income should not exceed Rs.2.00 lakhs</li>
                    <li>Candidate's father's annual income should not exceed Rs.2.5 lakh for those who are working in the Government Departments</li>
                  </ul>
                  
                  <h5 className="font-semibold text-aemet-navy mb-2">How to apply:</h5>
                  <p className="text-gray-700 mb-2">
                    The candidates are informed to collect the application forms from the Administration Office and submit the filled in application form along with the following testimonials:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                    <li>Community Certificate</li>
                    <li>Income Certificate</li>
                    <li>Candidates bank details: Account No., IFS code number, MICR code number</li>
                  </ul>
                  <p className="text-gray-700">
                    After scrutiny of the filled application forms received from the candidates, the same will be submitted on line to the Director of Minority, Government of Tamil Nadu. The Department will sanction the amount and credit into the candidate bank accounts.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdmissionsLayout>
  );
};

export default Scholarship;