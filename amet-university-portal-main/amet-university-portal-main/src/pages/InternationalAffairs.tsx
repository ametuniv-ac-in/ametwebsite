import React, { useState } from 'react';
import Layout from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import IntroSection from '@/components/international/IntroSection';
import OutwardMobilitySection from '@/components/international/OutwardMobilitySection';
import InwardMobilitySection from '@/components/international/InwardMobilitySection';
import JointDegreeSection from '@/components/international/JointDegreeSection';
import FacultyExchangeSection from '@/components/international/FacultyExchangeSection';
import GlobalProgramsSection from '@/components/international/GlobalProgramsSection';
import PartnersSection from '@/components/international/PartnersSection';
import MOUSection from '@/components/international/MOUSection';
import ContactSection from '@/components/international/ContactSection';

const InternationalAffairs = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <Layout title="International Affairs | AMET University">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-5xl mx-auto pt-28 md:pt-32">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">International Affairs</h1>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full flex flex-wrap h-auto mb-8">
              <TabsTrigger value="overview" className="flex-1 min-w-[120px]">Overview</TabsTrigger>
              <TabsTrigger value="mobility" className="flex-1 min-w-[120px]">Mobility Programs</TabsTrigger>
              <TabsTrigger value="programs" className="flex-1 min-w-[120px]">Programs</TabsTrigger>
              <TabsTrigger value="partnerships" className="flex-1 min-w-[120px]">Partnerships</TabsTrigger>
              <TabsTrigger value="contact" className="flex-1 min-w-[120px]">Contact</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <IntroSection />
            </TabsContent>

            <TabsContent value="mobility">
              <OutwardMobilitySection />
              <InwardMobilitySection />
            </TabsContent>

            <TabsContent value="programs">
              <JointDegreeSection />
              <FacultyExchangeSection />
              <GlobalProgramsSection />
            </TabsContent>

            <TabsContent value="partnerships">
              <PartnersSection />
              <MOUSection />
            </TabsContent>

            <TabsContent value="contact">
              <ContactSection />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default InternationalAffairs;
