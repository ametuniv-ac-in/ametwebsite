
import React from 'react';
import { GanttChart, BookText, Users, Share } from "lucide-react";

const FacultyExchangeSection = () => {
  return (
    <>
      {/* Visiting AMET Faculty */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-aemet-navy mb-6 flex items-center gap-3">
          <GanttChart className="h-6 w-6 text-aemet-blue" />
          <span>Visiting AMET Faculty</span>
        </h2>
        
        <div className="bg-gradient-to-r from-aemet-blue/10 to-aemet-lightBlue/30 p-6 rounded-lg mb-8 shadow-sm border border-aemet-blue/20 animate-fade-in">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="shrink-0">
              <Users className="h-10 w-10 text-aemet-blue" />
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed">
                AMET faculty visiting other institutions involves opportunities for professional development, 
                knowledge exchange, and collaboration with other experts in the field. This helps to enhance 
                the academic offerings of AMET, as well as to expand the network of institutions with which 
                AMET has partnerships.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                These visits can also provide valuable insights into new teaching methods, research and 
                best practices across globe.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Visiting Foreign Faculty */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-aemet-navy mb-6 flex items-center gap-3">
          <BookText className="h-6 w-6 text-aemet-blue" />
          <span>Visiting Foreign Faculty</span>
        </h2>
        
        <div className="bg-gradient-to-r from-aemet-navy/10 to-aemet-blue/10 p-6 rounded-lg mb-8 shadow-sm border border-aemet-blue/20 animate-fade-in">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="shrink-0">
              <Share className="h-10 w-10 text-aemet-blue" />
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed">
                AMET recognizes the value of fostering international academic collaborations and encourages 
                the exchange of knowledge and expertise between scholars from different countries and 
                institutions by welcoming the foreign faculty to engage in our academic programs and initiatives 
                like teaching courses, conducting research and others.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Faculty will have the opportunity to engage with AMET faculty and students, to share their 
                knowledge and experience, and to learn about the latest developments in their field.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FacultyExchangeSection;
