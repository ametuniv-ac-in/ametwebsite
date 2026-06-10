
import React from 'react';
import DSWLayout from '@/components/dsw/DSWLayout';
import { FileText, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ServiceRequest = () => {
  return (
    <DSWLayout title="Students Service Request Form">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-aemet-navy/10 to-aemet-blue/10 rounded-lg p-8 mb-12 shadow-md">
        <h1 className="text-3xl md:text-4xl font-bold text-aemet-navy mb-4">Students Service Request Form</h1>
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="md:w-2/3">
            <p className="text-gray-700 leading-relaxed">
              Submit your service requests through our online form. The DSW team will review and respond to your requests in a timely manner.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <div className="bg-white p-5 rounded-full shadow-lg">
              <FileText className="h-20 w-20 text-aemet-blue" />
            </div>
          </div>
        </div>
      </div>

      {/* Link Section */}
      <div className="mb-12">
        <Card className="border-aemet-blue/20 hover:shadow-lg transition-all duration-300">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-4 rounded-lg">
                  <FileText className="h-12 w-12 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-aemet-navy mb-1">Service Request Form</h3>
                  <p className="text-gray-600">Click below to submit your service request online</p>
                </div>
              </div>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSebskNEcL-pNAe5b97JKnlO70PZP65gFj8Ec1oo_FY46UN6Dw/viewform" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="bg-aemet-blue hover:bg-aemet-navy text-white flex items-center gap-2">
                  <ExternalLink className="h-5 w-5" />
                  Open Form
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </DSWLayout>
  );
};

export default ServiceRequest;
