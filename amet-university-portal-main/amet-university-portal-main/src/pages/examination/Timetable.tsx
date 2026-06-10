
import React from 'react';
import ExaminationLayout from '@/components/examination/ExaminationLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Download, Eye } from 'lucide-react';

const Timetable = () => {
  return (
    <ExaminationLayout title="Examination Timetable">
      <div>
        <h1 className="text-3xl font-bold text-aemet-navy mb-6">Examination Timetable</h1>
        
        <div className="prose max-w-none">
          <p className="text-gray-700 mb-6">
            The Office of the Controller of Examinations publishes all examination timetables 
            on this page. Students are advised to regularly check this page for the latest 
            examination schedules and related instructions.
          </p>

          <div className="grid gap-6 my-8">
            <Card className="border-l-4 border-l-green-500 shadow-sm">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-50 p-3 rounded-full">
                    <Calendar className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="space-y-3 flex-1">
                    <h3 className="font-bold text-lg text-aemet-navy">
                      End Semester (Arrear) Examinations – May 2026
                    </h3>
                    <p className="text-gray-600">
                      For all UG and PG Programs (Overall)
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button variant="outline" className="gap-2" onClick={() => window.open('/documents/ESE_ARREAR_TIME_TABLE_MAY_2026_OVERALL.pdf', '_blank')}>
                        <Eye className="h-4 w-4" />
                        View PDF
                      </Button>
                      <Button variant="outline" className="gap-2" onClick={() => {
                        const link = document.createElement('a');
                        link.href = '/documents/ESE_ARREAR_TIME_TABLE_MAY_2026_OVERALL.pdf';
                        link.download = 'ESE_ARREAR_TIME_TABLE_MAY_2026_OVERALL.pdf';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}>
                        <Download className="h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500 shadow-sm">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-50 p-3 rounded-full">
                    <Calendar className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="space-y-3 flex-1">
                    <h3 className="font-bold text-lg text-aemet-navy">
                      Model Examinations – April 2026
                    </h3>
                    <p className="text-gray-600">
                      For all UG and PG Programs
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button variant="outline" className="gap-2" onClick={() => window.open('/documents/MODEL_EXAM_TIME_TABLE_APRIL_2026_MAIN_CAMPUS.pdf', '_blank')}>
                        <Eye className="h-4 w-4" />
                        View PDF
                      </Button>
                      <Button variant="outline" className="gap-2" onClick={() => {
                        const link = document.createElement('a');
                        link.href = '/documents/MODEL_EXAM_TIME_TABLE_APRIL_2026_MAIN_CAMPUS.pdf';
                        link.download = 'MODEL_EXAM_TIME_TABLE_APRIL_2026_MAIN_CAMPUS.pdf';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}>
                        <Download className="h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500 shadow-sm">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-50 p-3 rounded-full">
                    <Calendar className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="space-y-3 flex-1">
                    <h3 className="font-bold text-lg text-aemet-navy">
                      End Semester Examinations – May 2026
                    </h3>
                    <p className="text-gray-600">
                      For all UG and PG Programs
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button variant="outline" className="gap-2" onClick={() => window.open('/documents/ESE_EXAM_TIME_TABLE_MAY_2026_MAIN_CAMPUS.pdf', '_blank')}>
                        <Eye className="h-4 w-4" />
                        View PDF
                      </Button>
                      <Button variant="outline" className="gap-2" onClick={() => {
                        const link = document.createElement('a');
                        link.href = '/documents/ESE_EXAM_TIME_TABLE_MAY_2026_MAIN_CAMPUS.pdf';
                        link.download = 'ESE_EXAM_TIME_TABLE_MAY_2026_MAIN_CAMPUS.pdf';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}>
                        <Download className="h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
            <h2 className="text-xl font-semibold text-aemet-navy mb-4">Important Notes for Students</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Students must check their Hall Tickets for exact date, session and venue details.</li>
              <li>Report to the examination hall at least 30 minutes before the examination.</li>
              <li>Bring your University ID card, Hall Ticket, and required stationery to the examination.</li>
              <li>Mobile phones and electronic devices are strictly prohibited in the examination hall.</li>
              <li>For any queries regarding the timetable, contact the Office of Controller of Examinations.</li>
            </ul>
          </div>
        </div>
      </div>
    </ExaminationLayout>
  );
};

export default Timetable;
