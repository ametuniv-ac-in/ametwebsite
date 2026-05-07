import React from 'react';
import ResearchLayout from '@/components/research/ResearchLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, FileCheck, ClipboardList, Award, Users, BookOpen, GraduationCap, AlertCircle } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const DoctoralCommitteeProcedure = () => {
  return (
    <ResearchLayout title="Conducting Doctoral Committee Procedure">
      <div className="py-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-aemet-navy mb-4">
            PROCEDURE FOR CONDUCTING DOCTORAL COMMITTEE (DC) MEETING
          </h1>
          <Separator className="max-w-md mx-auto my-6 bg-aemet-blue/30" />
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Introduction */}
          <section className="bg-gradient-to-r from-aemet-navy/5 to-aemet-blue/5 rounded-xl p-6">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-aemet-blue mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">AMET notifies vacancies for Ph.D., admission in the website and national dailies</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-aemet-blue mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Admission is based on entrance examinations and interview for eligible candidates</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-aemet-blue mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Admission is made Four times in an year (every quarter)</span>
              </li>
            </ul>
          </section>

          <h2 className="text-2xl font-bold text-aemet-navy text-center">DC PROCEDURE</h2>

          {/* Course Work Examinations */}
          <Card className="border-l-4 border-l-aemet-navy">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-aemet-navy">
                <BookOpen className="h-6 w-6 text-aemet-blue" />
                Procedure for Conducting Course Work Examinations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                A Ph.D. scholar is required to undertake coursework for a minimum of one semester, which is a compulsory prerequisite for both full-time and part-time candidates. The coursework will carry a minimum of 12 credits, as specified in the UGC Regulations. It is mandatory for all admitted candidates to complete the prescribed coursework within the first year of the Ph.D. program. The Research Supervisor, in consultation with the Doctoral Committee members, shall prescribe the courses.
              </p>
              <p>
                The students along with the courses of area of specialization appear for Research Methodology and Research and Publication Ethics, which are mandatory.
              </p>
              <p>
                Qualifying examinations for the prescribed coursework will be conducted by the Office of the Controller of Examinations based on the supervisor's request.
              </p>
            </CardContent>
          </Card>

          {/* PhD Programme */}
          <Card className="border-l-4 border-l-aemet-blue">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-aemet-navy">
                <GraduationCap className="h-6 w-6 text-aemet-blue" />
                Ph.D. Programme
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-700">
                Two categories of Ph.D. programmes available are: Full-time and Part-time. Candidates who satisfy the eligibility criteria as given below are eligible to apply for Ph.D. Programme.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-aemet-navy mb-3">Full-time Ph.D. Programme</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Candidates with PG qualification in the appropriate disciplines with minimum of 55% of marks in the qualifying examinations are eligible.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Candidates under Full-time category shall do research work in AMET and shall be available during the working hours for curricular, co-curricular and related activities.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-aemet-navy mb-3">Part-time Ph.D. Programme</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Candidates with PG qualification in the appropriate disciplines with minimum of 55% of marks in the qualifying examinations are eligible. Full-time teachers of AMET University / Colleges affiliated to state universities/ Deemed Universities /Government aided/Self-financing Polytechnic Colleges, etc.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Candidates working in Industries / R&D organizations / National Laboratories / Government / Quasi Government/ Private establishments / organizations and duly forwarded by the respective employer.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <p className="text-sm text-gray-700">
                  Candidates admitted to the Ph.D. program with a UG qualification (a four-year, eight-semester Bachelor's degree) are required to complete additional coursework as part of their research training. Full-time research scholars must complete eight postgraduate-level courses (each carrying 3 or 4 credits) within two semesters, preferably during the first year of their program. Part-time research scholars are required to complete the same eight postgraduate-level courses over four semesters, ideally within the first two years of their Ph.D. duration. Additionally, part-time candidates admitted with a Bachelor's degree may be granted permission to complete all eight PG-level courses within one year (two semesters), subject to approval.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Mode of Selection */}
          <Card className="border-l-4 border-l-aemet-navy">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-aemet-navy">
                <Users className="h-6 w-6 text-aemet-blue" />
                Mode of Selection
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                The aspirants interested in registering for Ph.D. Programme shall apply in the prescribed application form downloaded from the University website, fill-in all the necessary details and submit through proper channel, before the due date as indicated in the notification issued from time to time. Normally the University shall issue notification for Ph.D. admission 4 times in a year (in the months of January, April, July, October).
              </p>
              <p>
                Incomplete applications in any respect shall be summarily rejected without any intimation to the candidate.
              </p>
              <p>
                The applications of the eligible candidates shall be processed by Departmental Research Committee (DRC) constituted by the Vice Chancellor.
              </p>
              <p>
                Based on the performance in the entrance test, interview and the recommendations of the DRC/RAC, the successful candidates shall be admitted for PhD programme.
              </p>
            </CardContent>
          </Card>

          {/* Admission */}
          <Card className="border-l-4 border-l-aemet-blue">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-aemet-navy">
                <ClipboardList className="h-6 w-6 text-aemet-blue" />
                Admission
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                The faculty of the candidate for the admission of Ph.D. programme shall normally be based on the PG qualification. The DRC/RAC shall approve and recommend the selected candidates for admission to the doctoral programme in the appropriate specialization, after giving due consideration to the interdisciplinary fields of research, if any, and the Faculty in which the candidate shall be registered.
              </p>
              <p>
                Selected candidates shall be provisionally admitted for Ph.D. programme in the appropriate quarterly session.
              </p>
              <p>
                The date of provisional admission shall be normally 1st January or 1st April or 1st July or 1st October of the year in which the candidate is admitted.
              </p>
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm font-medium text-amber-800">
                  The Scholar, Supervisor, Doctoral Committee members and Examiners shall not be blood relatives.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* First DC Meeting */}
          <Card className="border-t-4 border-t-aemet-navy">
            <CardHeader className="bg-aemet-blue/5">
              <CardTitle className="flex items-center gap-2 text-aemet-navy">
                <FileCheck className="h-6 w-6 text-aemet-blue" />
                a. For First DC Meeting
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="mb-4 text-gray-600 font-medium">
                First DC Meeting can be conducted only after receiving the Ph.D Provisional Admission Letter from the University
              </p>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-aemet-navy mb-3">
                  Checklist for Notification and Conduct of First DC Meeting
                </h3>
                <ul className="space-y-2">
                  {[
                    'Provisional admission letter from the University',
                    'Payment of provisional admission fee & Annual Research Fee',
                    'Official Letter from the Supervisor after obtaining the consent of the DC Members should reach Director – Academic Research',
                    'Approval from the Vice Chancellor for the DC meeting'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-aemet-blue flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-semibold text-aemet-navy mb-3">
                  1st DC Meeting Should Ensure the Following
                </h3>
                <ul className="space-y-2">
                  {[
                    'Candidate should submit enrolment form',
                    'At least 3 course works should be prescribed along with syllabus',
                    'One compulsory course work on Research Methodology should be prescribed.',
                    'Indicating further avenues for publications, conference participations etc',
                    'Recommend the candidate for the provisional registration of Ph.D (with effect from the date of admission) after reviewing the merits and suitability of research topic chosen.'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded-md mt-4">
                <p className="text-sm text-gray-600">
                  <strong>Note:</strong> Minutes of the Meeting signed by the Supervisor and DC Members with details of course works and milestones for research should be submitted to Director – Academic Research after the DC Meeting on the same day.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Confirmation DC Meeting */}
          <Card className="border-t-4 border-t-aemet-blue">
            <CardHeader className="bg-aemet-blue/5">
              <CardTitle className="flex items-center gap-2 text-aemet-navy">
                <ClipboardList className="h-6 w-6 text-aemet-blue" />
                b. For Confirmation DC Meeting
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="mb-4 text-gray-600 font-medium">
                Second DC Meeting can be conducted only after one year of PhD registration
              </p>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-aemet-navy mb-3">
                  Checklist for Notification and Conduct of Confirmation DC Meeting
                </h3>
                <ul className="space-y-2">
                  {[
                    'Payment of annual research fee',
                    'The candidate should have completed 3 course work examinations prescribed during 1st DC meeting (Comprehensive Examination)',
                    'The results should reach the University along with question papers and valued answer scripts',
                    'The candidate should have paid II year annual research fee and the copy of the receipt should be submitted.',
                    'Half yearly progress reports should have been submitted in time',
                    'One conference participation and one publication in SCOPUS indexed journals are essential.'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-aemet-blue flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-semibold text-aemet-navy mb-3">
                  Confirmation DC Meeting Should Ensure the Following
                </h3>
                <ul className="space-y-2">
                  {[
                    'Review of research progress and half yearly progress reports',
                    'Review of one SCOPUS level publication and conference participations',
                    'Indicating further avenues for publications',
                    'Recommendation of DC for Course work completion',
                    'Recommend the confirmation of PhD registration'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded-md mt-4 space-y-3">
                <p className="text-sm text-gray-600">
                  <strong>Note:</strong> Minutes of the Meeting signed by the Supervisor and DC Members with details of comprehensive examination/course work examinations, Half Yearly progress reports comments and details of publications should be submitted to Director – Academic Research after the DC Meeting on the same day.
                </p>
                <p className="text-sm text-gray-600">
                  The Comprehensive Examination shall be conducted along with the II DC meeting where the DC shall analyze the scholar's grasp of the chosen field of study as a whole, and the scholar's ability to communicate his or her understanding of it in English. The DC shall judge this examination in a formal way through oral presentations of the scholars.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Synopsis Meeting */}
          <Card className="border-t-4 border-t-aemet-navy">
            <CardHeader className="bg-aemet-blue/5">
              <CardTitle className="flex items-center gap-2 text-aemet-navy">
                <Award className="h-6 w-6 text-aemet-blue" />
                c. Synopsis Meeting
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="mb-4 text-gray-600 font-medium">
                Third DC Meeting can be conducted only after three / two years of PhD registration based on the type of registration
              </p>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-aemet-navy mb-3">
                  Checklist for Notification and Conduct of Third DC Meeting
                </h3>
                <ul className="space-y-2">
                  {[
                    'Confirmation of PhD registration from the University',
                    'Half yearly progress reports for the period between second DC meeting and third DC meeting (for second and third year- total four reports)',
                    'At least two publications in journals indexed in Web of Science/Thompson Reuters/prescribed by the University',
                    'Third year annual Research fee payments are to be made and the copy of the fee receipt is to be submitted.'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-aemet-blue flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-semibold text-aemet-navy mb-3">
                  DC Meeting Should Ensure the Following
                </h3>
                <ul className="space-y-2">
                  {[
                    'Review of research progress and half yearly progress reports',
                    'Review of publications and conference participations',
                    'Ensuring the completion of lab works/field works by the candidate',
                    'All the annual research fees are to be paid by the candidate',
                    'Recommendation by the DC for synopsis submission'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded-md mt-4">
                <p className="text-sm text-gray-600">
                  <strong>Note:</strong> Minutes of the Meeting signed by the Supervisor and DC Members with details of publications, Half Yearly progress reports comments and details of prescribed works completed by the candidate along with recommendation for synopsis submission should be submitted to Director – Academic Research after the DC Meeting on the same day.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </ResearchLayout>
  );
};

export default DoctoralCommitteeProcedure;
