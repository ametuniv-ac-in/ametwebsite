
import React from 'react';
import DSWLayout from '@/components/dsw/DSWLayout';
import { Globe, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Ametunispo = () => {
  return (
    <DSWLayout title="AMETUNISPO">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-aemet-navy/10 to-aemet-blue/10 rounded-lg p-8 mb-12 shadow-md">
        <h1 className="text-3xl md:text-4xl font-bold text-aemet-navy mb-4">AMETUNISPO</h1>
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="md:w-2/3">
            <p className="text-gray-700 leading-relaxed">
              AMETUNISPO is AMET University's dedicated portal for student sports and physical education activities, promoting athletic excellence and healthy competition among students.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <div className="bg-white p-5 rounded-full shadow-lg">
              <Globe className="h-20 w-20 text-aemet-blue" />
            </div>
          </div>
        </div>
      </div>

      {/* External Link Section */}
      <div className="mb-12">
        <Card className="border-aemet-blue/20 hover:shadow-lg transition-all duration-300">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-4 rounded-lg">
                  <Globe className="h-12 w-12 text-aemet-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-aemet-navy mb-1">AMETUNISPO Official Website</h3>
                  <p className="text-gray-600">Visit the official AMETUNISPO portal for sports activities, events, and updates</p>
                </div>
              </div>
              <a 
                href="https://ametuniv.ac.in/ametunispo/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="bg-aemet-blue hover:bg-aemet-navy text-white flex items-center gap-2">
                  <ExternalLink className="h-5 w-5" />
                  Visit Website
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </DSWLayout>
  );
};

export default Ametunispo;
