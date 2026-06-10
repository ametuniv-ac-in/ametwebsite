import React from 'react';
import Layout from '@/components/Layout';
import { Briefcase, Mail, MapPin, FileText, Download, Calendar, AlertTriangle, ArrowLeft } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PDF_HREF = '/documents/AMET-VC_Application_format.pdf';
const DOCX_HREF = '/documents/AMET-VC_Application_format.docx';

const ViceChancellorRecruitment = () => {
  return (
    <Layout title="Recruitment for the Post of Vice Chancellor | AMET University">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto pt-28 md:pt-32">
          {/* Back link */}
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
                <h1 className="text-2xl md:text-4xl font-bold text-aemet-navy">Vice Chancellor</h1>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              The <strong>Search cum Selection Committee</strong> invites applications from eligible candidates, as per UGC norms,
              for the post of <strong>Vice Chancellor, AMET Deemed to be University</strong>.
            </p>
          </div>

          {/* Official Advertisement */}
          <Card className="border-aemet-blue/20 mb-8">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-xl font-semibold text-aemet-navy">Official Advertisement</h2>
              <div className="flex justify-center">
                <a
                  href="/images/vc-recruitment-advertisement.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block max-w-2xl w-full"
                >
                  <img
                    src="/images/vc-recruitment-advertisement.png"
                    alt="AMET University Vice Chancellor Recruitment Advertisement"
                    className="w-full h-auto rounded-md border border-gray-200 shadow-md hover:shadow-lg transition-shadow"
                  />
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Eligibility & How to Apply */}
          <Card className="border-aemet-blue/20 mb-8">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-xl font-semibold text-aemet-navy">How to Apply</h2>
              <p className="text-gray-700 leading-relaxed">
                Interested and eligible candidates shall apply with detailed bio-data including documents in support of accomplishments.
                The self-attested scanned version of the application along with the details shall be sent to the email address below, or a hard copy may be sent by post to the address provided.
              </p>

              <div className="grid md:grid-cols-2 gap-4 pt-2">
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Mail className="h-5 w-5 text-aemet-blue" />
                    <h3 className="font-semibold text-aemet-navy">Email Submission</h3>
                  </div>
                  <a href="mailto:vcsearchcommittee@ametuniv.ac.in" className="text-aemet-blue hover:underline font-medium break-all">
                    vcsearchcommittee@ametuniv.ac.in
                  </a>
                </div>

                <div className="bg-blue-50 border border-blue-100 rounded-lg p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-aemet-blue" />
                    <h3 className="font-semibold text-aemet-navy">Postal Address</h3>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    The Chairman, Search cum Selection Committee,<br />
                    C/o. The Registrar (Nodal Officer),<br />
                    AMET Deemed to be University,<br />
                    135, East Coast Road, Kanathur,<br />
                    Chennai – 603112
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
                <Calendar className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-700">
                  <span className="font-semibold text-aemet-navy">Deadline:</span> Applications must be received <strong>within 15 days</strong> from the date of this advertisement.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Application Format Downloads */}
          <Card className="border-aemet-blue/20 mb-8">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-xl font-semibold text-aemet-navy">Prescribed Application Format</h2>

              <div className="flex items-start gap-3 bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
                <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-700">
                  <span className="font-semibold text-aemet-navy">Note: </span>
                  Candidates are requested to use only the prescribed application format available on the website while submitting their applications.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button asChild className="bg-aemet-blue hover:bg-aemet-navy transition-colors">
                  <a href={PDF_HREF} target="_blank" rel="noopener noreferrer">
                    <FileText className="h-4 w-4 mr-2" />
                    View Application Format
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href={PDF_HREF} download>
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href={DOCX_HREF} download="AMET-VC_Application_format.docx">
                    <Download className="h-4 w-4 mr-2" />
                    Download Word Format
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <p className="text-right text-aemet-navy font-semibold">— Registrar i/c</p>
        </div>
      </div>
    </Layout>
  );
};

export default ViceChancellorRecruitment;