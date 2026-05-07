
import React from 'react';
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, BriefcaseBusiness, GraduationCap, MousePointerClick } from "lucide-react";
import { Link } from 'react-router-dom';

const FacePrepCampus = () => {
  return (
    <Layout title="Face Prep Campus | AMET University">
      <div className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-100 p-6 md:p-8 rounded-lg mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-aemet-navy mb-2">
                Face Prep Campus
              </h1>
              <p className="text-gray-600">Association of AMET & Focus 4D Career Education Pvt Ltd</p>
            </div>
            
            <Card className="p-6 md:p-8 shadow-md bg-white mb-8">
              <div className="prose max-w-none">
                <h2 className="text-xl md:text-2xl font-semibold text-aemet-navy mb-4">
                  About Focus 4D Career Education Pvt Ltd
                </h2>
                
                <div className="bg-aemet-lightGray rounded-lg p-4 mb-6 border-l-4 border-aemet-blue">
                  <p className="text-gray-700 leading-relaxed">
                    Focus 4D Career Education Pvt Ltd, operating under the brand name (FACE PREP CAMPUS), India's largest job oriented skill development organization with a legacy of 16+ years, with a aim to foster a dynamic, hands-on learning environment that is grounded in industry relevance and high-impact outcomes offering value added training and certificate training with assured internship and placement for students upon graduation of the below programs.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 gap-6 mt-8">
                  <h3 className="text-lg font-semibold text-aemet-navy">Programs Offered</h3>
                  
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="p-5 border-b border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="bg-blue-50 p-2 rounded-full">
                          <GraduationCap className="h-5 w-5 text-aemet-blue" />
                        </div>
                        <h4 className="font-semibold text-aemet-navy">B.Sc Artificial Intelligence and Machine Learning</h4>
                      </div>
                    </div>
                    <div className="px-5 py-3 bg-gray-50">
                      <Link to="/programs-offered" className="text-sm text-aemet-blue hover:text-aemet-navy flex items-center">
                        View details <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="p-5 border-b border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="bg-blue-50 p-2 rounded-full">
                          <GraduationCap className="h-5 w-5 text-aemet-blue" />
                        </div>
                        <h4 className="font-semibold text-aemet-navy">B.Sc Artificial Intelligence and Data Science</h4>
                      </div>
                    </div>
                    <div className="px-5 py-3 bg-gray-50">
                      <Link to="/programs-offered" className="text-sm text-aemet-blue hover:text-aemet-navy flex items-center">
                        View details <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="p-5 border-b border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="bg-blue-50 p-2 rounded-full">
                          <BriefcaseBusiness className="h-5 w-5 text-aemet-blue" />
                        </div>
                        <h4 className="font-semibold text-aemet-navy">B.B.A eCommerce and Digital Business</h4>
                      </div>
                    </div>
                    <div className="px-5 py-3 bg-gray-50">
                      <Link to="/programs-offered" className="text-sm text-aemet-blue hover:text-aemet-navy flex items-center">
                        View details <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="p-5 border-b border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="bg-blue-50 p-2 rounded-full">
                          <BookOpen className="h-5 w-5 text-aemet-blue" />
                        </div>
                        <h4 className="font-semibold text-aemet-navy">B.Com Fintech with AI</h4>
                      </div>
                    </div>
                    <div className="px-5 py-3 bg-gray-50">
                      <Link to="/programs-offered" className="text-sm text-aemet-blue hover:text-aemet-navy flex items-center">
                        View details <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <div className="bg-gradient-to-r from-aemet-navy to-aemet-blue rounded-lg shadow-lg p-6 md:p-8 text-white">
                    <div className="flex flex-col items-center text-center">
                      <h2 className="text-2xl font-bold mb-3">Interested in These Programs?</h2>
                      <p className="opacity-90 max-w-2xl mb-5">
                        Learn more about our collaboration with Focus 4D Career Education and discover how these programs can boost your career with assured internship and placement opportunities.
                      </p>
                      <Link to="/application-forms">
                        <Button 
                          className="bg-white text-aemet-navy hover:bg-gray-100 px-6"
                          size="lg"
                        >
                          Apply Now <MousePointerClick className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FacePrepCampus;
