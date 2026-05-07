import React from 'react';
import ResearchLayout from '@/components/research/ResearchLayout';
import { FileText, Download, BookOpen } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const PhDRegulations = () => {
  return (
    <ResearchLayout title="PhD Regulations">
      <div className="py-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-aemet-navy mb-3 flex items-center">
              <BookOpen className="h-8 w-8 mr-3 text-aemet-blue" />
              PhD Regulations 2023
            </h1>
            <p className="text-gray-600">
              Download the comprehensive PhD regulations document for AMET University. 
              This document outlines all the rules, requirements, and procedures for doctoral programs.
            </p>
          </div>

          <Card className="border-l-4 border-l-aemet-blue shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center text-aemet-navy">
                <FileText className="h-6 w-6 mr-2 text-aemet-blue" />
                AMET PhD Regulations 2023
              </CardTitle>
              <CardDescription>
                Official regulations and guidelines for PhD programmes at AMET University
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 rounded-lg p-6 mb-4">
                <div className="flex items-start gap-4">
                  <div className="h-16 w-16 rounded-lg bg-aemet-blue/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="h-8 w-8 text-aemet-blue" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-aemet-navy mb-2">
                      PhD Regulations Document
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Complete regulations covering admission requirements, coursework, research guidelines, 
                      thesis submission, evaluation procedures, and degree requirements.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button 
                        asChild
                        className="bg-aemet-blue hover:bg-aemet-navy"
                      >
                        <a 
                          href="/documents/amet-phd-regulations-2023.pdf" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Download className="h-4 w-4" />
                          Download PDF
                        </a>
                      </Button>
                      <Button 
                        asChild
                        variant="outline"
                      >
                        <a 
                          href="/documents/amet-phd-regulations-2023.pdf" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <FileText className="h-4 w-4" />
                          View Online
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-aemet-navy mb-2">Document Contents Include:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-aemet-blue/10 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                        <span className="text-xs font-medium text-aemet-blue">✓</span>
                      </span>
                      <span>PhD Programme admission criteria and eligibility requirements</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-aemet-blue/10 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                        <span className="text-xs font-medium text-aemet-blue">✓</span>
                      </span>
                      <span>Coursework requirements and evaluation procedures</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-aemet-blue/10 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                        <span className="text-xs font-medium text-aemet-blue">✓</span>
                      </span>
                      <span>Research methodology and thesis guidelines</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-aemet-blue/10 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                        <span className="text-xs font-medium text-aemet-blue">✓</span>
                      </span>
                      <span>Supervisor allocation and research progress monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-aemet-blue/10 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                        <span className="text-xs font-medium text-aemet-blue">✓</span>
                      </span>
                      <span>Thesis submission and examination procedures</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-aemet-blue/10 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                        <span className="text-xs font-medium text-aemet-blue">✓</span>
                      </span>
                      <span>Publication requirements and degree conferment</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 bg-blue-50 rounded-lg p-4 border border-blue-100">
            <p className="text-sm text-gray-700">
              <strong className="text-aemet-navy">Note:</strong> For any queries regarding PhD regulations, 
              please contact the Research Department at <a href="mailto:research@ametuniv.ac.in" className="text-aemet-blue hover:underline">research@ametuniv.ac.in</a>
            </p>
          </div>
        </div>
      </div>
    </ResearchLayout>
  );
};

export default PhDRegulations;
