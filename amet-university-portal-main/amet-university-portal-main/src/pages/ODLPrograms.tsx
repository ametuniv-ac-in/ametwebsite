
import React from 'react';
import Layout from '@/components/Layout';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Check, BookOpen, Calendar, Info, Users, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';



const ODLPrograms = () => {
  return (
    <Layout>
      <div className="container mx-auto py-12 px-4 md:px-6 mt-20 md:mt-24 pt-14">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-aemet-navy mb-4">Online & Distance Learning Programs</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              AMET University is proud to offer UGC-approved online degree programs to help you achieve your educational goals with flexibility.
            </p>
            <Separator className="my-6" />
          </div>


          {/* Public Notice Alert */}
          <Alert className="bg-blue-50 border-blue-200 mb-8">
            <Info className="h-5 w-5 text-blue-600" />
            <AlertTitle className="text-blue-800 text-lg font-semibold">Public Notice by UGC-DEB</AlertTitle>
            <AlertDescription>
              <Button className="mt-2 bg-blue-700 hover:bg-blue-800 text-white" asChild>
                <a href="/pdfs/public-notice-ugc-deb.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                  <FileText className="h-4 w-4 text-white" />
                  <span>View Public Notice</span>
                </a>
              </Button>
            </AlertDescription>
          </Alert>

          {/* Programs Overview */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-aemet-navy mb-6">Eligible Online Programs</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-l-4 border-l-amber-500 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">MBA</CardTitle>
                  <CardDescription>Shipping & Logistics Management</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Postgraduate program designed for professionals seeking career advancement in maritime logistics.</p>
                  <Button variant="outline" className="mt-4 w-full" asChild>
                    <a href="https://auol.in/" target="_blank" rel="noopener noreferrer">Learn More</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">BBA</CardTitle>
                  <CardDescription>Bachelor of Business Administration</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Undergraduate program focusing on business management fundamentals and leadership skills.</p>
                  <Button variant="outline" className="mt-4 w-full" asChild>
                    <a href="https://auol.in/" target="_blank" rel="noopener noreferrer">Learn More</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">B.Com</CardTitle>
                  <CardDescription>Bachelor of Commerce</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Undergraduate program with comprehensive coverage of accounting, finance, and business operations.</p>
                  <Button variant="outline" className="mt-4 w-full" asChild>
                    <a href="https://auol.in/" target="_blank" rel="noopener noreferrer">Learn More</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Important Information */}
          <div className="mb-12 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-aemet-navy mb-4">Key Program Benefits</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <p>The degree offered through online mode is fully valid on par with regular mode degrees.</p>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <p>Robust Learning Management System (LMS) with e-contents & video lectures for flexible learning.</p>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <p>Students can pursue another degree simultaneously (post-graduation or under-graduation).</p>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <p>UGC and AICTE approved programs ensure quality education and recognition.</p>
              </div>
            </div>
          </div>

          {/* Program Uniqueness */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-aemet-navy mb-6">Uniqueness of Online Programs</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { icon: <BookOpen className="h-5 w-5" />, text: "Learn Anywhere, Anytime" },
                { icon: <Info className="h-5 w-5" />, text: "Low Fee Structure" },
                { icon: <Calendar className="h-5 w-5" />, text: "Life-Long Learning" },
                { icon: <Users className="h-5 w-5" />, text: "World Class Study Materials" },
                { icon: <BookOpen className="h-5 w-5" />, text: "Robust LMS" },
                { icon: <Info className="h-5 w-5" />, text: "Synchronous Learning" },
                { icon: <Calendar className="h-5 w-5" />, text: "Online Examination" },
                { icon: <Users className="h-5 w-5" />, text: "Pursue Two Degrees" },
                { icon: <BookOpen className="h-5 w-5" />, text: "UGC/AICTE Approved" },
                { icon: <Info className="h-5 w-5" />, text: "Quick Enrollment" },
                { icon: <Calendar className="h-5 w-5" />, text: "Installment Payment Option" }
              ].map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm border flex flex-col items-center text-center hover:shadow-md transition-shadow">
                  <div className="text-aemet-blue mb-2">
                    {item.icon}
                  </div>
                  <p className="text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Eligibility Information */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-aemet-navy mb-6">Eligibility Criteria</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader className="bg-aemet-blue/10">
                  <CardTitle className="text-xl">MBA in Shipping & Logistics</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="font-semibold text-aemet-blue">•</span>
                      <span>10th + 12th + 3-year UG degree</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="font-semibold text-aemet-blue">•</span>
                      <span>10th + 12th + 4-year UG degree</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="font-semibold text-aemet-blue">•</span>
                      <span>Certificate of Competency (COC) of Seafarers</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="font-semibold text-aemet-blue">•</span>
                      <span>Any degree recognized by the University</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="bg-aemet-blue/10">
                  <CardTitle className="text-xl">BBA or B.Com</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="font-semibold text-aemet-blue">•</span>
                      <span>10th + 12th Standard</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="font-semibold text-aemet-blue">•</span>
                      <span>10th + Diploma</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="font-semibold text-aemet-blue">•</span>
                      <span>Equivalent to 10+2</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Fee Concession */}
          <div className="mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100">
            <h2 className="text-2xl font-bold text-aemet-navy mb-4">Fee Concession</h2>
            <p className="mb-4">10% Fee concession will be given to the following applicants, by submitting the relevant documents:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "AMET Alumni",
                "Disabled Students", 
                "Single Parent Students", 
                "First Generation Learners"
              ].map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm border text-center">
                  <p className="font-medium text-aemet-blue">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Approval Section */}
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-aemet-navy mb-4">Official Approvals</h2>
            <div className="flex flex-wrap justify-center gap-6 mt-6">
              <Button className="bg-aemet-blue" asChild>
                <a href="/pdfs/approval-copy.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                  <span>View Approval Copy</span>
                </a>
              </Button>
              <Button className="bg-aemet-blue" asChild>
                <a href="/pdfs/ugc-odl-equivalence-certificate.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                  <span>UGC ODL/OL Equivalence Certificate</span>
                </a>
              </Button>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12 bg-aemet-navy p-8 rounded-lg text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to Advance Your Career?</h2>
            <p className="mb-6">Enroll in our online programs today and take the next step towards academic excellence.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-lg">
              <a href="tel:8015435901" className="hover:underline">📞 80154 35901</a>
              <a href="tel:8056362340" className="hover:underline">📞 80563 62340</a>
              <a href="mailto:director@aucode.in" className="hover:underline">✉️ director@aucode.in</a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ODLPrograms;
