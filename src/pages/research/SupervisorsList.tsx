import React from 'react';
import ResearchLayout from '@/components/research/ResearchLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileText, UserCheck } from 'lucide-react';

const SupervisorsList = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/documents/SUPERVISORS_Annexure_1.pdf';
    link.download = 'SUPERVISORS_Annexure_1.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    window.open('/documents/SUPERVISORS_Annexure_1.pdf', '_blank');
  };

  return (
    <ResearchLayout title="PhD Supervisors List">
      <div className="py-6">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader className="bg-aemet-blue/5">
              <CardTitle className="flex items-center gap-2 text-aemet-navy">
                <UserCheck className="h-6 w-6 text-aemet-blue" />
                Supervisors - Annexure 1
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center justify-center py-8">
                <div className="bg-slate-50 p-8 rounded-lg border-2 border-dashed border-slate-300">
                  <FileText className="h-20 w-20 text-aemet-blue mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-aemet-navy text-center mb-2">
                    Supervisors - Annexure 1
                  </h3>
                  <p className="text-sm text-muted-foreground text-center mb-6">
                    Official document containing details of PhD supervisors at AMET University
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button 
                      onClick={handleView}
                      variant="default"
                      className="gap-2"
                    >
                      <FileText className="h-4 w-4" />
                      View PDF
                    </Button>
                    <Button 
                      onClick={handleDownload}
                      variant="outline"
                      className="gap-2"
                    >
                      <Download className="h-4 w-4" />
                      Download PDF
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </ResearchLayout>
  );
};

export default SupervisorsList;
