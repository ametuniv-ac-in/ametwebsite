import React from 'react';
import Layout from '@/components/Layout';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Shield, FileText, AlertCircle, IndianRupee } from 'lucide-react';

const FCRADisclosure = () => {
  const fcraData = [
    {
      no: 1,
      year: 2024,
      date: '14/10/2024',
      donorName: 'THE A.P.MOLLER RELIEF FOUNDATION, DENMARK',
      type: 'Institutional',
      purpose: 'Educational',
      amount: '62,314,099.65',
      accountNumber: '42888824549'
    }
  ];

  return (
    <Layout title="FCRA Disclosure | AMET University">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-aemet-blue via-purple-600 to-aemet-navy text-white py-24 mt-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              FCRA Disclosure
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Foreign Contribution (Regulation) Act Compliance
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-300 to-purple-300 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        {/* FCRA Compliance Overview */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-aemet-blue to-purple-600 rounded-full">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-aemet-navy">FCRA Compliance</h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-lg leading-relaxed">
                AMET University is committed to maintaining full transparency regarding foreign contributions 
                as per the Foreign Contribution (Regulation) Act (FCRA), 2010. This disclosure provides 
                complete information about all foreign contributions received by the university.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-aemet-blue">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-6 w-6 text-aemet-blue mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-aemet-navy mb-2">Legal Compliance</p>
                    <p className="text-gray-700">
                      All foreign contributions are received and utilized in accordance with FCRA guidelines 
                      and regulations. Regular returns are filed with the Ministry of Home Affairs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Foreign Contributions Table */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-gradient-to-r from-aemet-blue to-purple-600 rounded-full">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-aemet-navy">Foreign Contributions Received</h2>
            </div>
            
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-center">No</TableHead>
                    <TableHead className="text-center">Year</TableHead>
                    <TableHead className="text-center">Date</TableHead>
                    <TableHead>Name of the Donor</TableHead>
                    <TableHead className="text-center">Institutional / Individual</TableHead>
                    <TableHead className="text-center">Purpose</TableHead>
                    <TableHead className="text-right">Amount in INR</TableHead>
                    <TableHead className="text-center">FCRA Account Number</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {fcraData.map((entry) => (
                    <TableRow key={entry.no}>
                      <TableCell className="text-center font-medium">{entry.no}</TableCell>
                      <TableCell className="text-center">{entry.year}</TableCell>
                      <TableCell className="text-center">{entry.date}</TableCell>
                      <TableCell className="font-medium text-aemet-navy">{entry.donorName}</TableCell>
                      <TableCell className="text-center">{entry.type}</TableCell>
                      <TableCell className="text-center">{entry.purpose}</TableCell>
                      <TableCell className="text-right font-semibold">₹ {entry.amount}</TableCell>
                      <TableCell className="text-center">{entry.accountNumber}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Summary */}
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <IndianRupee className="h-6 w-6 text-aemet-blue" />
                <h3 className="text-xl font-semibold text-aemet-navy">Contribution Summary</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-sm text-gray-600">Total Contributions</p>
                  <p className="text-2xl font-bold text-aemet-navy">1</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">Total Amount</p>
                  <p className="text-2xl font-bold text-aemet-navy">₹ 6.23 Crores</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">Latest Contribution</p>
                  <p className="text-2xl font-bold text-aemet-navy">2024</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Purpose and Utilization */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-aemet-navy mb-8">Purpose and Utilization</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-aemet-navy mb-4">Contribution Purpose</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-aemet-blue rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Educational development and infrastructure enhancement</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-aemet-blue rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Research and development activities</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-aemet-blue rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Student welfare and scholarship programs</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-aemet-blue rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Faculty development and training programs</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-aemet-navy mb-4">Donor Information</h3>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="text-sm text-gray-600 mb-2">Primary Donor</p>
                  <p className="font-semibold text-aemet-navy mb-4">The A.P. Moller Relief Foundation, Denmark</p>
                  
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><strong>Type:</strong> Institutional Donor</p>
                    <p><strong>Country:</strong> Denmark</p>
                    <p><strong>Focus Area:</strong> Educational Development</p>
                    <p><strong>Contribution Date:</strong> October 14, 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Regulatory Compliance */}
        <section className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-aemet-blue/10 to-purple-600/10 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-aemet-navy mb-6 text-center">Regulatory Compliance</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-aemet-navy mb-4">FCRA Registration Details</h4>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Registration Status:</strong> Active</p>
                  <p><strong>Registration Category:</strong> Educational Institution</p>
                  <p><strong>Designated Bank:</strong> FCRA Compliant Account</p>
                  <p><strong>Last Return Filed:</strong> As per schedule</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-aemet-navy mb-4">Compliance Assurance</h4>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Annual Returns:</strong> Filed regularly</p>
                  <p><strong>Audit Compliance:</strong> Certified by CA</p>
                  <p><strong>Utilization Certificates:</strong> Submitted</p>
                  <p><strong>MHA Reporting:</strong> Up to date</p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-aemet-navy font-medium">
                For detailed FCRA compliance documents and annual returns, please contact the 
                university administration or refer to the official MHA FCRA portal.
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default FCRADisclosure;