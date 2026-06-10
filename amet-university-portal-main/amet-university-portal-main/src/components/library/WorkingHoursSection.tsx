
import React from 'react';
import { Clock, Calendar, BookOpen, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const WorkingHoursSection = () => {
  return (
    <Card className="shadow-md border-0 overflow-hidden">
      <div className="bg-gradient-to-r from-aemet-lightBlue to-blue-100 h-2" />
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center text-2xl text-aemet-navy">
          <Clock className="h-5 w-5 mr-2 text-aemet-blue" />
          Working Hours
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-lg font-medium text-aemet-navy mb-3">Functions of circulation section</p>
        
        <div className="space-y-3">
          <div className="flex items-start p-3 bg-slate-50 rounded-lg">
            <Calendar className="h-5 w-5 text-aemet-blue mr-3 mt-1 flex-shrink-0" />
            <div>
              <p className="font-medium text-aemet-navy">On Working Days:</p>
              <p className="text-gray-700">8.30 A.M. to 9.00 P.M.</p>
            </div>
          </div>
          
          <div className="flex items-start p-3 bg-slate-50 rounded-lg">
            <BookOpen className="h-5 w-5 text-aemet-blue mr-3 mt-1 flex-shrink-0" />
            <div>
              <p className="font-medium text-aemet-navy">On Holiday and Vacation:</p>
              <p className="text-gray-700">9.00 A.M to 4.30 P.M.</p>
            </div>
          </div>
          
          <div className="flex items-start p-3 bg-slate-50 rounded-lg">
            <Clock className="h-5 w-5 text-aemet-blue mr-3 mt-1 flex-shrink-0" />
            <div>
              <p className="font-medium text-aemet-navy">During Examination:</p>
              <p className="text-gray-700">8.30 A.M. to 10.00 P.M.</p>
            </div>
          </div>
          
          <div className="flex items-start p-3 bg-slate-50 rounded-lg border-l-4 border-aemet-blue">
            <AlertCircle className="h-5 w-5 text-aemet-blue mr-3 mt-1 flex-shrink-0" />
            <div>
              <p className="font-medium text-aemet-blue">Note:</p>
              <p className="text-gray-700">Library is open on Sundays</p>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-lg font-medium text-aemet-navy mb-3">Late Hour Library Facility</p>
          <div className="flex items-start p-3 bg-slate-50 rounded-lg">
            <Clock className="h-5 w-5 text-aemet-blue mr-3 mt-1 flex-shrink-0" />
            <div>
              <p className="font-medium text-aemet-navy">After Hours: 4:30 PM to 9:00 PM</p>
              <p className="text-gray-700 text-sm mt-1">
                The Dr. V. B. S. Rajan Library remains open from 4:30 PM to 9:00 PM to provide extended study hours for students and research scholars. This facility is maintained in accordance with AICTE and DGS norms, ensuring a conducive learning environment for academic and maritime studies during late hours.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WorkingHoursSection;
