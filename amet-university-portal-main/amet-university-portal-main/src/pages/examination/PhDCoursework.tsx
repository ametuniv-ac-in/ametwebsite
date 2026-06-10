
import React from 'react';
import ExaminationLayout from '@/components/examination/ExaminationLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Download, Calendar, GraduationCap, CheckCircle } from 'lucide-react';
import PhDProcessWorkflow from '@/components/research/academic/PhDProcessWorkflow';
import AdmissionProcess from '@/components/research/academic/AdmissionProcess';

const PhDCoursework = () => {
  return (
    <ExaminationLayout title="Ph.D. Course Work">
      <div>
        <h1 className="text-3xl font-bold text-aemet-navy mb-6">Ph.D. Course Work</h1>
        
        <div className="grid gap-8">
          {/* Course Work Information Section */}
          <Card className="border-l-4 border-l-aemet-navy">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-full">
                    <GraduationCap className="h-6 w-6 text-aemet-navy" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-aemet-navy mb-3">Ph.D. Course Work Requirements</h2>
                    <div className="prose max-w-none text-gray-700">
                      <p>
                        A Ph.D. scholar shall be required to undertake coursework for a minimum period of one semester, 
                        a compulsory prerequisite for both full-time and part-time candidates. The coursework will have 
                        a minimum of 8 to 12 credits.
                      </p>
                      <p>
                        The coursework is a prerequisite for the Ph.D. program, and all admitted candidates must 
                        complete the prescribed coursework within the first year of the Ph.D. program. Research Supervisor, 
                        along with the Doctoral Committee members, shall prescribe the courses.
                      </p>
                      <p>
                        Qualifying Examinations on the prescribed coursework will be conducted by the Office of the 
                        Controller of Examinations, AMET based on the supervisor's request.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Course Work Structure */}
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold text-aemet-navy mb-4 flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-aemet-blue" />
                Course Work Structure
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="border border-gray-200 p-3 text-left">Course Code</th>
                      <th className="border border-gray-200 p-3 text-left">Course Title</th>
                      <th className="border border-gray-200 p-3 text-center">Credits</th>
                      <th className="border border-gray-200 p-3 text-center">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 p-3">CR-101</td>
                      <td className="border border-gray-200 p-3">Research Methodology</td>
                      <td className="border border-gray-200 p-3 text-center">4</td>
                      <td className="border border-gray-200 p-3 text-center">Compulsory</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-gray-200 p-3">CR-102</td>
                      <td className="border border-gray-200 p-3">Research and Publication Ethics</td>
                      <td className="border border-gray-200 p-3 text-center">2</td>
                      <td className="border border-gray-200 p-3 text-center">Compulsory</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 p-3">CR-103</td>
                      <td className="border border-gray-200 p-3">Advanced Subject Paper</td>
                      <td className="border border-gray-200 p-3 text-center">2-4</td>
                      <td className="border border-gray-200 p-3 text-center">As prescribed by DC</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-gray-200 p-3">CR-104</td>
                      <td className="border border-gray-200 p-3">Department-specific Elective</td>
                      <td className="border border-gray-200 p-3 text-center">2</td>
                      <td className="border border-gray-200 p-3 text-center">As prescribed by DC</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Key Points */}
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold text-aemet-navy mb-4 flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                Key Points About Ph.D. Course Work
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>The minimum qualifying marks for the course work shall be 55%.</li>
                <li>Candidates who fail to qualify in the course work shall be given one more attempt to reappear for examination.</li>
                <li>Course work should be completed within a period of first two semesters.</li>
                <li>Course work examinations will be conducted once every quarter of the academic year.</li>
                <li>The syllabus for the research methodology course shall include quantitative methods and computer applications.</li>
                <li>The Ph.D. Coursework completion certificate will be issued after successfully passing all the prescribed courses.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Latest Timetable Section */}
          <Card className="border-l-4 border-l-green-500 shadow-sm">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-50 p-3 rounded-full">
                  <Calendar className="h-6 w-6 text-green-600" />
                </div>
                <div className="space-y-3 flex-1">
                  <h3 className="font-bold text-lg text-aemet-navy">
                    Time Table of Ph.D. Coursework Examinations - July 2023
                  </h3>
                  <p className="text-gray-600">
                    The following timetable lists the upcoming Ph.D. coursework examinations for all research scholars.
                  </p>
                  <Button variant="outline" className="gap-2">
                    <Download className="h-4 w-4" />
                    Download Timetable
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Admission Process and Workflow */}
          <AdmissionProcess />
          <PhDProcessWorkflow />
        </div>
      </div>
    </ExaminationLayout>
  );
};

export default PhDCoursework;
