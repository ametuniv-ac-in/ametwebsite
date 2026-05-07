
import React from 'react';
import DSWLayout from '@/components/dsw/DSWLayout';
import { Users, Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const StudentCouncil = () => {
  return (
    <DSWLayout title="Student Executive Council">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-aemet-navy/10 to-aemet-blue/10 rounded-lg p-8 mb-12 shadow-md">
        <h1 className="text-3xl md:text-4xl font-bold text-aemet-navy mb-4">Student Executive Council</h1>
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="md:w-2/3">
            <p className="text-gray-700 leading-relaxed">
              The Student Executive Council at AMET University serves as the voice of the student community, facilitating communication between students and administration while organizing various student activities and initiatives.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <div className="bg-white p-5 rounded-full shadow-lg">
              <Users className="h-20 w-20 text-aemet-blue" />
            </div>
          </div>
        </div>
      </div>

      {/* Download Section */}
      <div className="mb-12">
        <Card className="border-aemet-blue/20 hover:shadow-lg transition-all duration-300">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="bg-red-100 p-4 rounded-lg">
                  <FileText className="h-12 w-12 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-aemet-navy mb-1">Students Executive Council 2022-23</h3>
                  <p className="text-gray-600">Download the complete details of the Student Executive Council members</p>
                </div>
              </div>
              <a href="/documents/students-executive-council-2022-23.pdf" download="Students-Executive-Council-2022-23.pdf">
                <Button className="bg-aemet-blue hover:bg-aemet-navy text-white flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  Download PDF
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </DSWLayout>
  );
};

export default StudentCouncil;
