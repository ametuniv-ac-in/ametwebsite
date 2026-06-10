import React from 'react';
import ResearchLayout from '@/components/research/ResearchLayout';
import { ClipboardList, GraduationCap, Users, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PhDAdmissionRequirements = () => {
  return (
    <ResearchLayout title="PhD Admission Requirements">
      <div className="py-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-aemet-navy mb-3 flex items-center">
              <ClipboardList className="h-8 w-8 mr-3 text-aemet-blue" />
              PhD Admission Requirements
            </h1>
            <p className="text-gray-600">
              Information about the admission process, eligibility criteria, and requirements for PhD programmes at AMET University.
            </p>
          </div>

          {/* Overview Section */}
          <Card className="mb-6 border-l-4 border-l-aemet-blue">
            <CardHeader>
              <CardTitle className="flex items-center text-aemet-navy">
                <CheckCircle className="h-6 w-6 mr-2 text-aemet-blue" />
                Admission Process Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-3">
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-aemet-blue text-white flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                    1
                  </span>
                  <span className="text-gray-700">
                    AMET notifies vacancies for Ph.D., admission in the website and national dailies
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-aemet-blue text-white flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                    2
                  </span>
                  <span className="text-gray-700">
                    Admission is based on entrance examinations and interview for eligible candidates
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-aemet-blue text-white flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                    3
                  </span>
                  <span className="text-gray-700">
                    Admission is made Four times in an year (every quarter)
                  </span>
                </li>
              </ol>
            </CardContent>
          </Card>

          {/* Ph.D. Programme Section */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center text-aemet-navy">
                <GraduationCap className="h-6 w-6 mr-2 text-aemet-blue" />
                Ph.D. Programme
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6">
                Two categories of Ph.D. programmes available are: <strong>Full-time</strong> and <strong>Part-time</strong>. 
                Candidates who satisfy the eligibility criteria as given below are eligible to apply for Ph.D. Programme.
              </p>

              {/* Full-time Programme */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-aemet-navy mb-3">Full-time Ph.D. Programme</h3>
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-100 space-y-3">
                  <div className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-aemet-blue/10 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <span className="text-xs font-medium text-aemet-blue">✓</span>
                    </span>
                    <p className="text-gray-700">
                      Candidates with PG qualification in the appropriate disciplines with minimum of 55% of marks in the qualifying examinations are eligible.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-aemet-blue/10 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <span className="text-xs font-medium text-aemet-blue">✓</span>
                    </span>
                    <p className="text-gray-700">
                      Candidates under Full-time category shall do research work in AMET and shall be available during the working hours for curricular, co-curricular and related activities.
                    </p>
                  </div>
                </div>
              </div>

              {/* Part-time Programme */}
              <div>
                <h3 className="text-lg font-semibold text-aemet-navy mb-3">Part-time Ph.D. Programme</h3>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 space-y-3">
                  <div className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-gray-400/20 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <span className="text-xs font-medium text-gray-600">✓</span>
                    </span>
                    <p className="text-gray-700">
                      Candidates with PG qualification in the appropriate disciplines with minimum of 55% of marks in the qualifying examinations are eligible.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-gray-400/20 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <span className="text-xs font-medium text-gray-600">✓</span>
                    </span>
                    <p className="text-gray-700">
                      Full-time teachers of AMET University / Colleges affiliated to state universities/ Deemed Universities /Government aided/Self-financing Polytechnic Colleges, etc.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-gray-400/20 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <span className="text-xs font-medium text-gray-600">✓</span>
                    </span>
                    <p className="text-gray-700">
                      Candidates working in Industries / R&D organizations / National Laboratories / Government / Quasi Government/ Private establishments / organizations and duly forwarded by the respective employer.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mode of Selection */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center text-aemet-navy">
                <Users className="h-6 w-6 mr-2 text-aemet-blue" />
                Mode of Selection
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-700">
              <p>
                The aspirants interested in registering for Ph.D. Programme shall apply in the prescribed application form downloaded from the University website, fill-in all the necessary details and submit through proper channel, before the due date as indicated in the notification issued from time to time. Normally the University shall issue notification for Ph.D. admission 4 times in a year (in the months of <strong>January, April, July, October</strong>).
              </p>
              <p>
                Incomplete applications in any respect shall be summarily rejected without any intimation to the candidate.
              </p>
              <p>
                The applications of the eligible candidates shall be processed by Departmental Research Committee (DRC)/Research Admission Committee (RAC) constituted by the Vice Chancellor.
              </p>
              <p>
                Based on the performance in the entrance test, interview and the recommendations of the DRC/RAC, the successful candidates shall be admitted for PhD programme.
              </p>
            </CardContent>
          </Card>

          {/* Admission Section */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center text-aemet-navy">
                <CheckCircle className="h-6 w-6 mr-2 text-aemet-blue" />
                Admission
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-700">
              <p>
                The Faculty of the candidate for the admission of Ph.D. programme shall normally be based on the PG qualification. The DRC/RAC shall approve and recommend the selected candidates for admission to the doctoral programme in the appropriate specialization, after giving due consideration to the interdisciplinary fields of research, if any, and the Faculty in which the candidate shall be registered.
              </p>
              <p>
                Selected candidates shall be provisionally admitted for Ph.D. programme in the appropriate quarterly session.
              </p>
              <p>
                The date of provisional admission shall normally be <strong>1st January</strong> or <strong>1st April</strong> or <strong>1st July</strong> or <strong>1st October</strong> of the year in which the candidate is admitted.
              </p>
              <div className="bg-amber-50 rounded-lg p-4 border border-amber-200 mt-4">
                <p className="text-sm">
                  <strong className="text-aemet-navy">Important:</strong> The Scholar, Supervisor, Doctoral Committee members and Examiners shall not be blood relatives.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 bg-blue-50 rounded-lg p-4 border border-blue-100">
            <p className="text-sm text-gray-700">
              <strong className="text-aemet-navy">For more information:</strong> Contact the Research Department at <a href="mailto:research@ametuniv.ac.in" className="text-aemet-blue hover:underline">research@ametuniv.ac.in</a>
            </p>
          </div>
        </div>
      </div>
    </ResearchLayout>
  );
};

export default PhDAdmissionRequirements;
