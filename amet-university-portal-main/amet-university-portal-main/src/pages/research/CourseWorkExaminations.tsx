import React from 'react';
import ResearchLayout from '@/components/research/ResearchLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, CheckCircle, FileText, AlertCircle } from 'lucide-react';

const CourseWorkExaminations = () => {
  return (
    <ResearchLayout title="Course Work Examinations">
      <div className="py-6 space-y-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-aemet-navy mb-6">
            Procedure for Conducting Course Work Examinations
          </h1>

          {/* Overview */}
          <Card className="mb-6">
            <CardHeader className="bg-aemet-blue/5">
              <CardTitle className="flex items-center gap-2 text-aemet-navy">
                <BookOpen className="h-6 w-6 text-aemet-blue" />
                Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-muted-foreground mb-4">
                Course Work Examinations are compulsory for every PhD scholar registered in the University irrespective of the year and category of registration where Research Methodology is a compulsory and common course for all disciplines. A course work comprising of a minimum of 3 papers for one semester (for full time)/two semesters (for part time) is essential for all the PhD courses.
              </p>
            </CardContent>
          </Card>

          {/* Common Framework */}
          <Card className="mb-6">
            <CardHeader className="bg-aemet-blue/5">
              <CardTitle className="flex items-center gap-2 text-aemet-navy">
                <FileText className="h-6 w-6 text-aemet-blue" />
                Common Framework
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="border-l-4 border-aemet-blue pl-4">
                <h3 className="font-semibold text-aemet-navy mb-2">Paper I: Research Methodology</h3>
                <p className="text-sm text-muted-foreground">
                  Common and compulsory paper for all disciplines. The Syllabus is to be framed by the Department Research Committee (DRC) and to be approved by the Doctoral Committee (DC).
                </p>
              </div>

              <div className="border-l-4 border-aemet-blue pl-4">
                <h3 className="font-semibold text-aemet-navy mb-2">Paper II: Subject Specialization</h3>
                <p className="text-sm text-muted-foreground">
                  A paper on Subject Specialization with focus on technical aspects of the course. The Syllabus is to be framed by the DRC and approved by Doctoral Committee. 
                  <br />
                  <span className="italic">Example: Advances in Marine Biotechnology</span>
                </p>
              </div>

              <div className="border-l-4 border-aemet-blue pl-4">
                <h3 className="font-semibold text-aemet-navy mb-2">Paper III: Research Specialization</h3>
                <p className="text-sm text-muted-foreground">
                  A paper on Research Specialization with intense focus on the area of research in which the candidate is desired to work. Syllabus to be framed by the Supervisor/Guide and approved by Doctoral Committee.
                  <br />
                  <span className="italic">Example: Bioprospecting of Marine Actinomycetes</span>
                </p>
              </div>

              <div className="bg-amber-50 border border-amber-200 p-4 rounded-md mt-4">
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-amber-900">
                    <strong>Exemption:</strong> Candidates with M.Phil. or MS (By Research) qualifications are exempted for the compulsory course Research Methodology. However, if the DC recommends, the candidate's need to undertake course works.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Examination Conduct */}
          <Card className="mb-6">
            <CardHeader className="bg-aemet-blue/5">
              <CardTitle className="flex items-center gap-2 text-aemet-navy">
                <CheckCircle className="h-6 w-6 text-aemet-blue" />
                Examination Conduct
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-3">
              <p className="text-sm text-muted-foreground">
                The Controller of Examinations (COE) shall conduct the course work examinations centrally at every quarter of the year. COE shall engage the DC members to value the papers and declare the results recommended by the DC.
              </p>
              <p className="text-sm text-muted-foreground">
                Course work completion Certificate shall be issued by the COE on recommendation by the Dy Director Research (PhD programme) with the approval from the Vice Chancellor.
              </p>
            </CardContent>
          </Card>

          {/* Process for Course Work Examinations */}
          <Card className="mb-6">
            <CardHeader className="bg-aemet-blue/5">
              <CardTitle className="text-aemet-navy">
                Process for Course Work Examinations
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-aemet-blue text-white rounded-full flex items-center justify-center font-semibold text-sm">
                    1
                  </div>
                  <p className="text-sm text-muted-foreground pt-1">
                    During the 1st DC meeting, the DC shall define the number of course works a candidate has to undergo and names of the courses with appropriate subject codes. The complete syllabus recommended and signed by all the DC members shall also be enclosed along with the minutes of the first DC meeting.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-aemet-blue text-white rounded-full flex items-center justify-center font-semibold text-sm">
                    2
                  </div>
                  <p className="text-sm text-muted-foreground pt-1">
                    Soon after the first DC meeting, the candidates shall register themselves for the course work examinations as suggested by the DC by paying Rs 3000 as DD in favour of Academy of Maritime Education and Training through the Office of the Dy. Director Research (PhD Programme).
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-aemet-blue text-white rounded-full flex items-center justify-center font-semibold text-sm">
                    3
                  </div>
                  <p className="text-sm text-muted-foreground pt-1">
                    The Office of the Dy Director Research will inform the Office of the Controller of Examinations the list of candidates registered for the course works in every quarter of the year.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-aemet-blue text-white rounded-full flex items-center justify-center font-semibold text-sm">
                    4
                  </div>
                  <p className="text-sm text-muted-foreground pt-1">
                    The paper setting for the Specialized Course Works (Papers 2 and 3) will be the responsibility of the research guide. For common courses (Research Methodology) or courses already offered at the University, University Examination Question Papers will be used.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-aemet-blue text-white rounded-full flex items-center justify-center font-semibold text-sm">
                    5
                  </div>
                  <p className="text-sm text-muted-foreground pt-1">
                    The Question Paper shall be of descriptive type with 10 questions in part A which carries each 5 marks. From each unit two questions shall be asked without any choices. In part B, there will be 5 questions with internal choices which carries each 10 marks. Hence a course work examination paper comprises a total of 100 marks.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-aemet-blue text-white rounded-full flex items-center justify-center font-semibold text-sm">
                    6
                  </div>
                  <p className="text-sm text-muted-foreground pt-1">
                    The COE conducts Course work examinations at every quarter of the year in a centralized manner.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-aemet-blue text-white rounded-full flex items-center justify-center font-semibold text-sm">
                    7
                  </div>
                  <p className="text-sm text-muted-foreground pt-1">
                    The COE forwards the results of the course work examinations for the recommendation of the DC in the 2nd DC meeting of the respective candidates.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-aemet-blue text-white rounded-full flex items-center justify-center font-semibold text-sm">
                    8
                  </div>
                  <p className="text-sm text-muted-foreground pt-1">
                    The answer scripts are valued in the Second DC meetings and results are recommended by the Members of the DC.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-aemet-blue text-white rounded-full flex items-center justify-center font-semibold text-sm">
                    9
                  </div>
                  <p className="text-sm text-muted-foreground pt-1">
                    Based on the recommendations of the DC, the Dy.Director Research (PhD programme) gets the approval of Vice Chancellor and sends the list of eligible candidates for getting Course Work Completion Certificate in every quarter of the year.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-aemet-blue text-white rounded-full flex items-center justify-center font-semibold text-sm">
                    10
                  </div>
                  <p className="text-sm text-muted-foreground pt-1">
                    Results will be published and Grade Reports/Course Work Completion Certificate will also be issued to the candidates by the Controller of Examinations. Valued answer scripts are updated in the respective candidate files.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Important Notes */}
          <Card className="mb-6">
            <CardHeader className="bg-aemet-blue/5">
              <CardTitle className="text-aemet-navy">
                Important Notes
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                {[
                  'Full time candidates have to complete the course work in six months and part time candidates by 12 months from the date of registration. Another six months extension period may be sanctioned based on the recommendations of the DC.',
                  'Normally, the Courses completed after the date of registration at the University will only be counted towards the requirements of course completion.',
                  'However, with appropriate approvals, the Doctoral Committee may consider the courses already undergone by a Research Scholar in the University or other institutions as part of his / her research programme subject to the condition that he / she has successfully completed the courses.',
                  'PhD scholars are permitted to write the examinations through self-study and periodical discussions with the faculty member/Supervisor concerned offering the course.'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-aemet-blue flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </ResearchLayout>
  );
};

export default CourseWorkExaminations;
