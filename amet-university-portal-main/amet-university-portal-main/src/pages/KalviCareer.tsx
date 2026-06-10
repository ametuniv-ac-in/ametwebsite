
import React from 'react';
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Cpu, Award, Globe, Building, GraduationCap, Wifi, Users, BookOpen, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const KalviCareer = () => {
  return (
    <Layout title="Kalvi Career Education | AMET University">
      <div className="py-16 md:py-20 lg:py-24 bg-gray-50"> 
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-100 p-6 md:p-8 rounded-lg mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-aemet-navy mb-2">
                Association of AMET & Kalvi Career Education Private Limited
              </h1>
            </div>
            
            <Card className="p-6 md:p-8 shadow-md bg-white mb-8">
              <h2 className="text-2xl font-semibold text-aemet-navy mb-4 flex items-center">
                <Building className="h-6 w-6 text-aemet-blue mr-3" />
                About Kalvi Career Education Private Limited
              </h2>
              <div className="prose max-w-none">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Kalvi Career Education Private Limited, is an approved training partner of National Skill Development Corporation (NSDC) and a company registered under the companies act 2013, offering value added training and certificate training with assured placement for students upon graduation of the below programs.
                </p>
              </div>
            </Card>
            
            <Card className="p-6 md:p-8 shadow-md bg-white mb-8">
              <h2 className="text-2xl font-semibold text-aemet-navy mb-4 flex items-center">
                <GraduationCap className="h-6 w-6 text-aemet-blue mr-3" />
                Programs Offered
              </h2>
              
              <div className="grid grid-cols-1 gap-4 mb-6">
                {[
                  "B.Tech Computer Science and Engineering",
                  "B.Tech Computer Science and Engineering (Artificial Intelligence and Machine Learning)",
                  "B.Tech Computer Science and Engineering (Cyber Security)",
                  "B.Tech Artificial Intelligence and Data Science (AI & DS)"
                ].map((program, index) => (
                  <div 
                    key={index}
                    className="flex items-start border-l-4 border-aemet-blue p-4 bg-aemet-blue/5 rounded-r-md"
                  >
                    <Cpu className="h-5 w-5 text-aemet-blue mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{program}</p>
                  </div>
                ))}
              </div>
            </Card>
            
            <Card className="p-6 md:p-8 shadow-md bg-white mb-8">
              <h2 className="text-2xl font-semibold text-aemet-navy mb-4 flex items-center">
                <Award className="h-6 w-6 text-aemet-blue mr-3" />
                Salient Features
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start p-3 bg-gray-50 rounded-md">
                  <Globe className="h-5 w-5 text-aemet-blue mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">International Internships for interested students in UK, Germany, Malaysia etc.</p>
                </div>
                
                <div className="flex items-start p-3 bg-gray-50 rounded-md">
                  <Building className="h-5 w-5 text-aemet-blue mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Industry support lab - IBM, Red hat Linux</p>
                </div>
                
                <div className="flex items-start p-3 bg-gray-50 rounded-md">
                  <BookOpen className="h-5 w-5 text-aemet-blue mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">State-of-the–Art-Laboratories</p>
                </div>
                
                <div className="flex items-start p-3 bg-gray-50 rounded-md">
                  <BookOpen className="h-5 w-5 text-aemet-blue mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Flexible Curriculum</p>
                </div>
                
                <div className="flex items-start p-3 bg-gray-50 rounded-md">
                  <Wifi className="h-5 w-5 text-aemet-blue mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Wi-Fi enabled Campus</p>
                </div>
                
                <div className="flex items-start p-3 bg-gray-50 rounded-md">
                  <Users className="h-5 w-5 text-aemet-blue mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Doctorate faculty with rich experience in handling AI, ML, Data Science and Cyber Security Subjects.</p>
                </div>
                
                <div className="flex items-start p-3 bg-gray-50 rounded-md md:col-span-2">
                  <Award className="h-5 w-5 text-aemet-blue mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Value Added and Skill Development Training Courses with Industry Experts.</p>
                </div>
              </div>
            </Card>
            
            <div className="bg-gradient-to-r from-aemet-navy to-aemet-blue rounded-lg shadow-lg p-6 md:p-8 text-white">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center mb-4 md:mb-0">
                  <Phone className="h-6 w-6 mr-3" />
                  <div>
                    <p className="font-semibold">For more details contact</p>
                    <p className="text-xl font-bold">Toll Free 1800 108 3030</p>
                  </div>
                </div>
                <Button 
                  className="bg-white text-aemet-navy hover:bg-gray-100 px-6"
                  size="lg"
                >
                  Enquire Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default KalviCareer;
