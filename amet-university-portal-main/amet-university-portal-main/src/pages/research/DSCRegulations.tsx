import React from 'react';
import ResearchLayout from '@/components/research/ResearchLayout';
import { FileText, Download } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const DSCRegulations = () => {
  return (
    <ResearchLayout title="DSC Regulations">
      <div className="py-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-aemet-navy mb-4">D.Sc. Regulations</h1>
          <p className="max-w-3xl mx-auto text-gray-600">
            Doctor of Science regulations and guidelines for AMET University
          </p>
          <Separator className="max-w-md mx-auto my-6 bg-aemet-blue/30" />
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-2 border-aemet-blue/20 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-8 pb-8">
              <div className="flex flex-col items-center text-center">
                <div className="h-20 w-20 rounded-full bg-aemet-blue/10 flex items-center justify-center mb-6">
                  <FileText className="h-10 w-10 text-aemet-blue" />
                </div>
                
                <h2 className="text-xl font-semibold text-aemet-navy mb-2">
                  D.Sc. Regulations - Annexure 1
                </h2>
                
                <p className="text-gray-600 mb-6">
                  Download the official D.Sc. Regulations document
                </p>
                
                <Button 
                  asChild
                  size="lg"
                  className="bg-aemet-blue hover:bg-aemet-navy"
                >
                  <a 
                    href="/documents/DSC_Regulations_Annexure_1.pdf" 
                    download="DSC_Regulations_Annexure_1.pdf"
                    className="flex items-center gap-2"
                  >
                    <Download className="h-5 w-5" />
                    Download PDF
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </ResearchLayout>
  );
};

export default DSCRegulations;
