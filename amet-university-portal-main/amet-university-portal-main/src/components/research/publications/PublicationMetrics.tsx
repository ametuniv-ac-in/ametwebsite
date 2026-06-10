
import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { BarChart, FileText, Award, FileCheck } from 'lucide-react';

const PublicationMetrics = () => {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold text-aemet-navy mb-6">Publication Metrics</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* Citations Card */}
        <Card className="bg-gradient-to-br from-white to-blue-50 shadow-md">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-aemet-navy">Citations</h3>
              <FileText className="h-6 w-6 text-aemet-blue" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-blue-100">
                <p className="text-sm text-gray-600">Scopus</p>
                <p className="text-2xl font-bold text-aemet-navy">13,157</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-blue-100">
                <p className="text-sm text-gray-600">Web of Science</p>
                <p className="text-2xl font-bold text-aemet-navy">7,026</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* H-index & I10 Card */}
        <Card className="bg-gradient-to-br from-white to-blue-50 shadow-md">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-aemet-navy">Impact Indices</h3>
              <Award className="h-6 w-6 text-aemet-blue" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-blue-100">
                <p className="text-sm text-gray-600">H-index (Scopus)</p>
                <p className="text-2xl font-bold text-aemet-navy">43</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-blue-100">
                <p className="text-sm text-gray-600">H-index (WoS)</p>
                <p className="text-2xl font-bold text-aemet-navy">35</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-blue-100">
                <p className="text-sm text-gray-600">I10 index</p>
                <p className="text-2xl font-bold text-aemet-navy">250</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Impact Factor Card */}
        <Card className="bg-gradient-to-br from-white to-blue-50 shadow-md">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-aemet-navy">Impact Factors</h3>
              <BarChart className="h-6 w-6 text-aemet-blue" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-blue-100">
                <p className="text-sm text-gray-600">Cumulative IF</p>
                <p className="text-2xl font-bold text-aemet-navy">1,428.12</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-blue-100">
                <p className="text-sm text-gray-600">Highest IF</p>
                <p className="text-2xl font-bold text-aemet-navy">12.7</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Additional Publications Card */}
        <Card className="bg-gradient-to-br from-white to-blue-50 shadow-md">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-aemet-navy">Additional Research</h3>
              <FileCheck className="h-6 w-6 text-aemet-blue" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-blue-100">
                <p className="text-sm text-gray-600">Other Indexed Articles</p>
                <p className="text-2xl font-bold text-aemet-navy">64</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-blue-100">
                <p className="text-sm text-gray-600">Patents Filed & Published</p>
                <p className="text-2xl font-bold text-aemet-navy">106</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PublicationMetrics;
