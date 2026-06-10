import React from 'react';
import Layout from '@/components/Layout';
import { Separator } from "@/components/ui/separator";
import { Shield, Phone, Mail, Globe, Users, AlertTriangle } from "lucide-react";

const AntiRagging = () => {
  return (
    <Layout title="National Ragging Prevention Programme | AMET University">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-5xl mx-auto pt-28 md:pt-32">
          {/* Hero Section */}
          <div className="flex items-center gap-3 mb-2">
            <Shield className="h-8 w-8 text-aemet-blue" />
            <h1 className="text-3xl md:text-4xl font-bold text-aemet-navy">National Ragging Prevention Programme</h1>
          </div>
          
          <Separator className="my-6" />
          
          <div className="bg-gradient-to-r from-aemet-navy/10 to-aemet-blue/10 p-6 rounded-lg mb-10 shadow-sm border border-aemet-blue/20 animate-fade-in">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="shrink-0">
                <Shield className="h-12 w-12 text-aemet-navy" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-aemet-navy mb-4">Zero Tolerance Against Ragging</h2>
                <p className="text-gray-700 leading-relaxed">
                  AMET University is committed to maintaining a ragging-free environment that promotes dignity, 
                  respect, and safety for all students. We have established comprehensive measures and support 
                  systems to prevent ragging and ensure the wellbeing of our academic community.
                </p>
              </div>
            </div>
          </div>

          {/* Emergency Alert */}
          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8 rounded-lg">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-red-500 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-red-800 mb-2">Important Notice</h3>
                <p className="text-red-700 leading-relaxed">
                  <strong>Ragging is A Criminal Offence and The Culprits Will Attract Punitive Action</strong> as mentioned in the UGC Regulations. 
                  <a href="#" className="underline ml-1 hover:text-red-900 transition-colors">(click here)</a>
                </p>
              </div>
            </div>
          </div>

          {/* Helpline Information */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* National Anti-Ragging Helpline */}
            <section className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <Phone className="h-6 w-6 text-aemet-blue" />
                <h2 className="text-xl font-semibold text-aemet-navy">National Anti-Ragging Helpline</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-aemet-navy text-white p-4 rounded-lg text-center">
                  <p className="text-sm font-medium mb-2">24x7 Toll Free</p>
                  <p className="text-2xl font-bold">1800 180 5522</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-aemet-blue" />
                    <a href="mailto:helpline@antiragging.in" className="text-aemet-blue hover:underline">
                      helpline@antiragging.in
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Globe className="h-4 w-4 text-aemet-blue" />
                    <a href="https://www.antiragging.in" target="_blank" rel="noopener noreferrer" className="text-aemet-blue hover:underline">
                      www.antiragging.in
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* UGC Monitoring Agency */}
            <section className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <Users className="h-6 w-6 text-aemet-blue" />
                <h2 className="text-xl font-semibold text-aemet-navy">UGC Monitoring Agency</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-aemet-navy mb-2">Centre for Youth (C4Y)</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-aemet-blue" />
                    <a href="mailto:antiragging@c4yindia.org" className="text-aemet-blue hover:underline">
                      antiragging@c4yindia.org
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Globe className="h-4 w-4 text-aemet-blue" />
                    <a href="https://www.c4yindia.org" target="_blank" rel="noopener noreferrer" className="text-aemet-blue hover:underline">
                      www.c4yindia.org
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Committee and Squad Details */}
          <section className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-6 w-6 text-aemet-blue" />
              <h2 className="text-xl font-semibold text-aemet-navy">Contact Details of the Anti-Ragging Committee and Squad</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Anti-Ragging Committee */}
              <div className="bg-gradient-to-br from-aemet-navy/5 to-aemet-blue/5 p-6 rounded-lg border border-aemet-blue/20">
                <h3 className="text-lg font-semibold text-aemet-navy mb-4">Anti-Ragging Committee (ARC)</h3>
                <div className="space-y-3">
                  <p className="text-gray-600 text-sm">
                    The Anti-Ragging Committee is responsible for monitoring and preventing ragging activities, 
                    investigating complaints, and ensuring the implementation of anti-ragging policies.
                  </p>
                  <a href="/anti-ragging-committee" className="inline-flex items-center gap-2 bg-[hsl(var(--primary))] text-white px-4 py-2 rounded-lg hover:bg-[hsl(var(--primary)/0.9)] transition-colors text-sm font-medium">
                    View Committee Members →
                  </a>
                </div>
              </div>

              {/* Anti-Ragging Squad */}
              <div className="bg-gradient-to-br from-aemet-blue/5 to-aemet-navy/5 p-6 rounded-lg border border-aemet-navy/20">
                <h3 className="text-lg font-semibold text-aemet-navy mb-4">Anti-Ragging Squad (ARS)</h3>
                <div className="space-y-3">
                  <p className="text-gray-600 text-sm">
                    The Anti-Ragging Squad conducts surprise raids in hostels and other areas, 
                    keeps vigil on ragging activities, and takes immediate action when required.
                  </p>
                  <a href="/anti-ragging-squad" className="inline-flex items-center gap-2 bg-[hsl(var(--primary))] text-white px-4 py-2 rounded-lg hover:bg-[hsl(var(--primary)/0.9)] transition-colors text-sm font-medium">
                    View Squad Members →
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Additional Information */}
          <section className="bg-gradient-to-r from-aemet-navy/5 to-aemet-blue/5 rounded-lg p-6 border border-aemet-blue/20">
            <h2 className="text-xl font-semibold text-aemet-navy mb-4">Our Commitment</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                AMET University maintains a strict zero-tolerance policy against ragging. We are committed to providing 
                a safe and conducive learning environment where every student can pursue their academic goals without 
                fear or harassment.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-aemet-navy mb-2">Prevention Measures:</h3>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li>Regular awareness programs and orientations</li>
                    <li>Strict monitoring of hostel and campus premises</li>
                    <li>Anonymous reporting mechanisms</li>
                    <li>Swift action against offenders</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-aemet-navy mb-2">Support Systems:</h3>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li>Counseling services for affected students</li>
                    <li>24/7 helpline numbers</li>
                    <li>Dedicated committee and squad</li>
                    <li>Regular follow-up and monitoring</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default AntiRagging;