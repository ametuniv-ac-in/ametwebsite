
import React from 'react';
import GovernanceLayout from '@/components/governance/GovernanceLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileText } from 'lucide-react';

const Organogram = () => {
  return (
    <GovernanceLayout title="Organogram">
      <div className="space-y-8">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-aemet-navy/10 to-aemet-blue/10 rounded-lg p-6">
          <h1 className="text-3xl font-bold text-aemet-navy mb-3">Organogram of AMET</h1>
          <p className="text-gray-700 leading-relaxed">
            The organizational structure of AMET University showcases the hierarchy and functional relationships 
            within the institution, providing clarity on the administrative and academic framework.
          </p>
        </div>

        {/* Download Card */}
        <Card className="border-aemet-blue/20 hover:shadow-lg transition-all duration-300">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="bg-aemet-navy/5 p-4 rounded-full flex-shrink-0">
                <FileText className="h-10 w-10 text-aemet-blue" />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-aemet-navy mb-2">
                  AMET University Organization Chart
                </h3>
                <p className="text-gray-600 mb-4">
                  Download the complete organizational structure chart of AMET University to understand 
                  the administrative hierarchy and reporting relationships.
                </p>
                <Button 
                  asChild
                  className="bg-aemet-blue hover:bg-aemet-navy transition-colors"
                >
                  <a 
                    href="/documents/AMET-Organization-Chart-V2.pdf" 
                    download="AMET-Organization-Chart-V2.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Organization Chart
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Additional Information */}
        <Card className="bg-gradient-to-r from-aemet-navy/5 to-aemet-blue/5 border-none">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-aemet-navy mb-3">About the Organization Structure</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The organization chart illustrates the administrative structure of AMET University, detailing 
              the various departments, their functions, and the chain of command. This structure ensures 
              efficient governance and smooth coordination across all academic and administrative units.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-aemet-blue mt-1">•</span>
                <span>Clear hierarchical structure for effective decision-making</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-aemet-blue mt-1">•</span>
                <span>Well-defined roles and responsibilities</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-aemet-blue mt-1">•</span>
                <span>Streamlined communication channels</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-aemet-blue mt-1">•</span>
                <span>Coordinated approach to academic excellence</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </GovernanceLayout>
  );
};

export default Organogram;
