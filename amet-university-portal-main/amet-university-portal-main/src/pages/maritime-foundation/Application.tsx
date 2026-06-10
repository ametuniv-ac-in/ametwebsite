import React from 'react';
import MaritimeFoundationLayout from '@/components/maritime-foundation/MaritimeFoundationLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileText, Mail } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const Application: React.FC = () => {
  return (
    <MaritimeFoundationLayout title="Application and Nomination Process">
      <div className="space-y-8 text-gray-700 leading-relaxed">
        <section>
          <h3 className="text-xl font-semibold text-aemet-navy mb-3">AGMA 2026 Nominations</h3>
          <p>
            Applications/Nominations are invited from maritime universities, institutions, organizations and
            industry professionals worldwide for AGMA 2026 in the following categories:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li>AGMA Maritime Leadership Award</li>
            <li>AGMA Maritime Institutional Excellence Award</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-aemet-navy mb-3">Eligibility</h3>
          <p className="mb-2">Applications/Nominations are open to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Maritime professionals</li>
            <li>Maritime Institutions and Universities</li>
            <li>Researchers and innovators</li>
            <li>Industry leaders and academicians</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-aemet-navy mb-4">Download Application Proforma</h3>
          <div className="grid md:grid-cols-2 gap-5">
            <Card>
              <CardHeader>
                <CardTitle className="text-aemet-blue text-base flex items-start gap-2">
                  <FileText className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  AGMA Maritime Leadership Award
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">Application Proforma — Individual Category 2026</p>
                <Button asChild className="bg-aemet-navy hover:bg-aemet-blue">
                  <a
                    href="/pdfs/AGMA-Maritime-Leadership-Award-Application.docx"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="h-4 w-4" /> Download (.docx)
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-aemet-blue text-base flex items-start gap-2">
                  <FileText className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  AGMA Maritime Institutional Excellence Award
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">Application Proforma — Institution Category 2026</p>
                <Button asChild className="bg-aemet-navy hover:bg-aemet-blue">
                  <a
                    href="/pdfs/AGMA-Maritime-Institutional-Excellence-Award-Application.docx"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="h-4 w-4" /> Download (.docx)
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-aemet-navy mb-3">How to Apply?</h3>
          <p>
            The duly filled-in application along with supporting documents in PDF format should be submitted
            through email to{' '}
            <a
              href="mailto:provost@ametuniv.ac.in"
              className="text-aemet-blue underline hover:text-aemet-navy inline-flex items-center gap-1"
            >
              <Mail className="h-4 w-4" /> provost@ametuniv.ac.in
            </a>{' '}
            on or before the last date for submission &mdash; <strong>30.05.2026</strong>.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-aemet-navy mb-3">Important Dates</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Event</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Last date for submission of Applications/Nominations</TableCell>
                <TableCell>30.05.2026</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Assessment of Applications by the Jury</TableCell>
                <TableCell>13.06.2026</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Notification of Awardees</TableCell>
                <TableCell>15.06.2026</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Award Ceremony</TableCell>
                <TableCell>02.07.2026</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <p className="text-sm text-gray-600 mt-3">
            The Awards will be distributed in the AMET Global Maritime Summit 2026 scheduled to be held on{' '}
            <strong>02.07.2026</strong> at Chennai, India.
          </p>
        </section>
      </div>
    </MaritimeFoundationLayout>
  );
};

export default Application;