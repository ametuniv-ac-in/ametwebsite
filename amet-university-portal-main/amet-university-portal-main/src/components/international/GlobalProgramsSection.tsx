
import React from 'react';
import { Plane, Globe, School, BookOpen } from "lucide-react";

const GlobalProgramsSection = () => {
  return (
    <>
      {/* Global Immersion Programme */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-aemet-navy mb-6 flex items-center gap-3">
          <Plane className="h-6 w-6 text-aemet-blue" />
          <span>Global Immersion Programme</span>
        </h2>
        
        <div className="bg-gradient-to-r from-aemet-blue/10 to-aemet-lightBlue/30 p-6 rounded-lg mb-8 shadow-sm border border-aemet-blue/20 animate-fade-in">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="shrink-0">
              <Globe className="h-10 w-10 text-aemet-blue" />
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed">
                AMET's Global Immersion Program provides a unique opportunity for individuals to immerse 
                themselves in a new cultural environment. By participating in a range of activities, 
                participants are able to build a deeper understanding of the host culture through shared 
                experiences.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                The goal of this program is to promote cross-cultural understanding and ultimately 
                contribute to a better world.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Study at AMET */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-aemet-navy mb-6 flex items-center gap-3">
          <School className="h-6 w-6 text-aemet-blue" />
          <span>Study at AMET</span>
        </h2>
        
        <div className="bg-gradient-to-r from-aemet-navy/10 to-aemet-blue/10 p-6 rounded-lg mb-8 shadow-sm border border-aemet-blue/20 animate-fade-in">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="shrink-0">
              <BookOpen className="h-10 w-10 text-aemet-blue" />
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed">
                AMET offers a comprehensive and in-depth study of the maritime industry and its various 
                aspects, including Naval Architecture and Offshore Engineering, Marine engineering, 
                Nautical Science, Shipping and Logistics, Engineering and other related domains.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Curriculum is designed to provide to hands-on experience, practical training, and a strong 
                theoretical foundation through a blend of lectures, projects, and case studies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GlobalProgramsSection;
