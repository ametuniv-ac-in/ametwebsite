import React from 'react';
import Layout from '@/components/Layout';
import { Separator } from "@/components/ui/separator";
import { Building2, Users } from "lucide-react";

const IIIC = () => {
  return (
    <Layout title="IIIC | AMET University">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-5xl mx-auto pt-28 md:pt-32">
          {/* Hero Section */}
          <div className="flex items-center gap-3 mb-2">
            <Building2 className="h-8 w-8 text-aemet-blue" />
            <h1 className="text-3xl md:text-4xl font-bold text-aemet-navy">Industry, Institute Interaction Cell (IIIC)</h1>
          </div>
          
          <Separator className="my-6" />
          
          <div className="bg-gradient-to-r from-aemet-navy/10 to-aemet-blue/10 p-6 rounded-lg mb-10 shadow-sm border border-aemet-blue/20 animate-fade-in">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="shrink-0">
                <Building2 className="h-12 w-12 text-aemet-navy" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-aemet-navy mb-4">Industry-Institute Partnership</h2>
                <p className="text-gray-700 leading-relaxed">
                  The Industry, Institute Interaction Cell (IIIC) serves as a vital bridge between AMET University and 
                  the industry, fostering collaborative relationships that enhance academic excellence and student employability. 
                  The cell facilitates meaningful partnerships, internships, and knowledge exchange programs 
                  to ensure our students are industry-ready and well-prepared for their professional careers.
                </p>
              </div>
            </div>
          </div>

          {/* Members Section */}
          <section className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-6 w-6 text-aemet-blue" />
              <h2 className="text-xl font-semibold text-aemet-navy">IIIC Committee Members</h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 rounded-lg">
                <thead className="bg-aemet-navy text-white">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium">S.No.</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Member Name</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Designation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm">1</td>
                    <td className="px-4 py-3 text-sm font-medium">Dr.N.Sivasubramanian</td>
                    <td className="px-4 py-3 text-sm">Director</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm">2</td>
                    <td className="px-4 py-3 text-sm font-medium">Dr.N.Mukilarasan</td>
                    <td className="px-4 py-3 text-sm">Member</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm">3</td>
                    <td className="px-4 py-3 text-sm font-medium">Dr.V.Sridevi</td>
                    <td className="px-4 py-3 text-sm">Member</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm">4</td>
                    <td className="px-4 py-3 text-sm font-medium">Mrs.R.K.Padmashini</td>
                    <td className="px-4 py-3 text-sm">Member</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm">5</td>
                    <td className="px-4 py-3 text-sm font-medium">Mr.S.Muthuvel</td>
                    <td className="px-4 py-3 text-sm">Member</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm">6</td>
                    <td className="px-4 py-3 text-sm font-medium">Mr.D.P.Prasanna</td>
                    <td className="px-4 py-3 text-sm">Member</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default IIIC;