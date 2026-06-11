import React from 'react';
import Layout from '@/components/Layout';
import { Briefcase, Mail, ArrowLeft } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const DirectorResearch = () => {
  return (
    <Layout title="Director (Research) – AMET–MSRC | AMET University">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto pt-28 md:pt-32">
          <Link to="/career" className="inline-flex items-center gap-2 text-aemet-blue hover:text-aemet-navy mb-6 text-sm font-medium">
            <ArrowLeft className="h-4 w-4" /> Back to Careers
          </Link>

          {/* Hero */}
          <div className="bg-gradient-to-r from-aemet-navy/10 to-aemet-blue/10 rounded-lg p-8 mb-8 shadow-md">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-aemet-blue/10 p-3 rounded-full">
                <Briefcase className="h-8 w-8 text-aemet-blue" />
              </div>
              <div>
                <p className="text-sm text-aemet-blue font-medium mb-1">Recruitment for the Post of</p>
                <h1 className="text-2xl md:text-4xl font-bold text-aemet-navy">Director (Research)</h1>
                <p className="text-sm text-aemet-blue font-medium mt-1">
                  AMET Maritime and Shipping Research Centre (AMET–MSRC)
                </p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mb-3">
              AMET University invites applications from visionary, research-focused leaders (ideally 50–55 years) with a proven track record in applied research, product development, and patent creation to head the newly established AMET–MSRC. The Centre bridges advanced maritime R&amp;D directly with elite student employment and global research collaborations heading toward Vision 2047.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Applications are globally invited, with a special invitation to Indian researchers and tech leaders living abroad who wish to return and drive India's maritime technology roadmap.
            </p>
          </div>

          {/* Qualifications */}
          <Card className="border-aemet-blue/20 mb-8">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-xl font-semibold text-aemet-navy">Qualifications &amp; Experience</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-aemet-blue mt-1">•</span>
                  <span>
                    Master's Degree (M.E. / M.Tech / M.S.) in a relevant engineering/scientific discipline, or Senior Maritime Professional Certifications (e.g., Extra Master / Class 1 Engineer). Ph.D. is <strong>NOT mandatory</strong> for individuals with a strong, demonstrable focus on industrial technology deployment, product development, or active patent filings.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-aemet-blue mt-1">•</span>
                  <span>15–20 years of cumulative experience anchored in technical operations, industrial research, or technological product innovation.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Salary */}
          <Card className="border-aemet-blue/20 mb-8">
            <CardContent className="p-6 space-y-2">
              <h2 className="text-xl font-semibold text-aemet-navy">Salary</h2>
              <p className="text-gray-700">
                Highly competitive and negotiable based on research track record, patented technologies, and corporate product-launch experience.
              </p>
            </CardContent>
          </Card>

          {/* How to Apply */}
          <Card className="border-aemet-blue/20 mb-8">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-xl font-semibold text-aemet-navy">How to Apply</h2>
              <p className="text-gray-700">
                Submit a comprehensive CV and a 2-page research/product vision statement for AMET–MSRC 2047 to the Registrar at{' '}
                <a href="mailto:registrar@ametuniv.ac.in" className="text-aemet-blue hover:underline font-medium">
                  registrar@ametuniv.ac.in
                </a>.
              </p>
              <Button asChild className="bg-aemet-blue hover:bg-aemet-navy transition-colors">
                <a href="mailto:registrar@ametuniv.ac.in">
                  <Mail className="h-4 w-4 mr-2" />
                  Send Application
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default DirectorResearch;