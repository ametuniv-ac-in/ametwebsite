
import React from 'react';
import Layout from '@/components/Layout';
import { GraduationCap, FileText, Landmark } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const NEP2020 = () => {
  return (
    <Layout title="NEP 2020 | AMET University">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="max-w-5xl mx-auto pt-28 md:pt-32">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-aemet-navy/10 to-aemet-blue/10 rounded-lg p-8 mb-12 shadow-md">
            <h1 className="text-3xl md:text-4xl font-bold text-aemet-navy mb-4">National Education Policy 2020</h1>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="md:w-2/3">
                <p className="text-gray-700 leading-relaxed">
                  The National Education Policy 2020 (NEP 2020) outlines the vision of India's new education system. 
                  AMET University is committed to implementing NEP 2020 to transform higher education and prepare students 
                  for the challenges of the 21st century.
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="bg-white p-5 rounded-full shadow-lg">
                  <GraduationCap className="h-20 w-20 text-aemet-blue" />
                </div>
              </div>
            </div>
          </div>

          {/* Key Features Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-aemet-navy mb-6 flex items-center gap-2">
              <FileText className="h-6 w-6 text-aemet-blue" />
              <span>Key Features of NEP 2020</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Flexibility in Learning",
                  description: "Multiple entry/exit options, credit bank system, and academic flexibility to allow students to pursue education according to their preferences."
                },
                {
                  title: "Holistic & Multidisciplinary Education",
                  description: "Integration of arts and sciences with focus on developing both creative and analytical thinking."
                },
                {
                  title: "Research & Innovation",
                  description: "Emphasis on research, practical knowledge, and innovation to prepare students for real-world challenges."
                },
                {
                  title: "Digital Education",
                  description: "Leveraging technology for enhanced learning experiences and expanded access to education."
                },
              ].map((feature, idx) => (
                <Card key={idx} className="border-aemet-blue/20 hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-aemet-navy mb-2">{feature.title}</h3>
                    <p className="text-gray-700">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Implementation Strategy Section */}
          <div>
            <h2 className="text-2xl font-semibold text-aemet-navy mb-6 flex items-center gap-2">
              <Landmark className="h-6 w-6 text-aemet-blue" />
              <span>Implementation at AMET University</span>
            </h2>
            
            <Card className="border-aemet-blue/20">
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">
                  AMET University is implementing NEP 2020 through a phased approach, focusing on:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Curriculum redesign to incorporate multidisciplinary approaches</li>
                  <li>Introduction of credit-based flexible learning programs</li>
                  <li>Development of industry-relevant skill courses</li>
                  <li>Integration of experiential learning opportunities</li>
                  <li>Strengthening research infrastructure and capabilities</li>
                  <li>Faculty development programs aligned with NEP 2020 objectives</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NEP2020;
