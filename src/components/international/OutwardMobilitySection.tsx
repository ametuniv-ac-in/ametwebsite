
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Navigation, Share, Users, Globe, University, Briefcase, CheckCircle2, Paperclip } from "lucide-react";
import { Button } from "@/components/ui/button";

const programCards = [
  {
    icon: Share,
    title: "Semester Abroad Program",
    description: "Study for a semester at one of our partner universities across the globe, earning credits while experiencing a different academic and cultural environment."
  },
  {
    icon: Users,
    title: "Dual Degree Program",
    description: "Earn two degrees simultaneously - one from AMET and another from our partner institution, providing a competitive advantage in the global job market."
  },
  {
    icon: Globe,
    title: "Joint Degree Program",
    description: "Collaborative programs jointly developed and delivered by AMET and international partner institutions, offering a truly global perspective."
  },
  {
    icon: University,
    title: "Twinning Program",
    description: "Complete part of your degree at AMET and the remaining at our partner institution abroad, combining the best of both educational systems."
  }
];

const OutwardMobilitySection = () => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold text-aemet-navy mb-6 flex items-center gap-3">
        <Navigation className="h-6 w-6 text-aemet-blue" />
        <span>Outward Mobility</span>
      </h2>
      
      <p className="text-gray-700 leading-relaxed mb-6">
        AMET believes that students and faculty deserve to have an exceptional global exposure. 
        With this goal in mind, we have dedicated significant resources and efforts to provide 
        them with unique national and global opportunities. Our objective is to bring the world 
        to our campus and create a truly international learning environment.
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-8">
        Our Office of the International Affairs offers various programs to allow our students 
        to interact, collaborate, and work with their peers from around the world. This reflects 
        the interconnected and interdependent nature of our rapidly globalizing world and 
        demonstrates our commitment to providing a pioneering education at AMET.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {programCards.map((card, index) => (
          <Card key={index} className="border-aemet-blue/20 hover:shadow-md transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <card.icon className="h-8 w-8 text-aemet-blue shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-aemet-navy mb-2">{card.title}</h3>
                  <p className="text-gray-700 text-sm">{card.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Eligibility Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-aemet-blue/20 mb-8">
        <h3 className="text-xl font-semibold text-aemet-navy mb-4 flex items-center gap-2">
          <CheckCircle2 className="h-5 w-5 text-aemet-blue" />
          Who can apply?
        </h3>
        
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>Undergraduate students enrolled in any program at AMET</li>
          <li>Students who have maintained a minimum of 6.0 CGPA</li>
          <li>Students who have no disciplinary or academic violations during their time at AMET</li>
          <li>Students who have a valid passport and meet the visa requirements for studying abroad</li>
          <li>English Proficiency</li>
        </ul>
      </div>
      
      {/* Application Process Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-aemet-blue/20">
        <h3 className="text-xl font-semibold text-aemet-navy mb-4 flex items-center gap-2">
          <Paperclip className="h-5 w-5 text-aemet-blue" />
          Application Process
        </h3>
        
        <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-6">
          <li>Research and select the international program that best fits your academic and career goals. Visit <a href="https://www.ametuniv.ac.in" className="text-aemet-blue hover:underline">www.ametuniv.ac.in</a></li>
          <li>Make sure that you meet the eligibility requirements for the program you wish to apply</li>
          <li>Obtain the necessary application forms from the Office of International Affairs at AMET</li>
          <li>Submit the application along with the supporting documents
            <ul className="list-disc list-inside pl-6 mt-2 text-gray-600">
              <li>Copy of Passport, Transcripts, Test scores and Letters of recommendation</li>
            </ul>
          </li>
          <li>Interview will be conducted after reviewing the application</li>
          <li>Enrolment process including paying tuition fee and obtaining visas after being selected</li>
        </ol>
        
        <Button className="mt-2 bg-aemet-blue hover:bg-aemet-navy">
          Download Application Form
        </Button>
      </div>
    </div>
  );
};

export default OutwardMobilitySection;
