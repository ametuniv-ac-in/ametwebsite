
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowDownToLine, Users, Share, BookOpen } from "lucide-react";

const InwardMobilitySection = () => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold text-aemet-navy mb-6 flex items-center gap-3">
        <ArrowDownToLine className="h-6 w-6 text-aemet-blue" />
        <span>Inward Mobility</span>
      </h2>
      
      <div className="bg-gradient-to-r from-aemet-blue/10 to-aemet-lightBlue/30 p-6 rounded-lg mb-8 shadow-sm border border-aemet-blue/20 animate-fade-in">
        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="shrink-0">
            <BookOpen className="h-10 w-10 text-aemet-blue" />
          </div>
          <div>
            <p className="text-gray-700 leading-relaxed">
              AMET welcomes students from overseas to participate in our study abroad program. This program 
              provides an exceptional opportunity for international students to immerse themselves in our 
              academic environment and to gain hands-on exposure in the relevant domains.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              The program is offered for one or two semesters, with options to enrol in either the 
              Fall term (July to December) or the Spring term (January to May).
            </p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="border-aemet-blue/20 hover:shadow-md transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <Users className="h-8 w-8 text-aemet-blue shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-aemet-navy mb-2">Eligibility Requirements</h3>
                <p className="text-gray-700 text-sm">
                  Students from overseas must have a minimum C average in their previous studies. 
                  During their stay at AMET, international students will have the chance to take a 
                  maximum of 25 credits per semester.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-aemet-blue/20 hover:shadow-md transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <Share className="h-8 w-8 text-aemet-blue shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-aemet-navy mb-2">Assessment & Certification</h3>
                <p className="text-gray-700 text-sm">
                  International students will be evaluated based on the same standards applied to our 
                  full-time students. Upon completion, a transcript highlighting the credits obtained 
                  and grades earned will be issued to each student.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InwardMobilitySection;
