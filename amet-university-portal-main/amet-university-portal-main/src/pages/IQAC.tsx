import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Separator } from "@/components/ui/separator";
import { Award } from "lucide-react";
import IQACTabs from '@/components/iqac/IQACTabs';

const IQAC = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <Layout title="IQAC | AMET University">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-7xl mx-auto pt-28 md:pt-32">
          {/* Hero Section */}
          <div className="flex items-center gap-3 mb-2">
            <Award className="h-8 w-8 text-aemet-blue" />
            <h1 className="text-3xl md:text-4xl font-bold text-aemet-navy">Internal Quality Assurance Cell (IQAC)</h1>
          </div>
          
          <Separator className="my-6" />
          
          <div className="bg-gradient-to-r from-aemet-navy/10 to-aemet-blue/10 p-6 rounded-lg mb-8 shadow-sm border border-aemet-blue/20 animate-fade-in">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="shrink-0">
                <Award className="h-12 w-12 text-aemet-navy" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-aemet-navy mb-4">Quality Assurance at AMET</h2>
                <p className="text-gray-700 leading-relaxed">
                  The Internal Quality Assurance Cell (IQAC) at AMET University is dedicated to maintaining 
                  and enhancing academic standards. The cell guides our institution's quality initiatives 
                  and ensures continuous improvement in academic and administrative processes.
                </p>
              </div>
            </div>
          </div>

          {/* IQAC Tabs */}
          <IQACTabs activeTab={activeTab} onTabChange={setActiveTab} />
        </div>
      </div>
    </Layout>
  );
};

export default IQAC;