
import React from 'react';
import ExaminationLayout from '@/components/examination/ExaminationLayout';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent } from '@/components/ui/card';
import { InfoIcon } from 'lucide-react';

const Fees = () => {
  return (
    <ExaminationLayout title="Examination Fee Details">
      <div>
        <h1 className="text-3xl font-bold text-aemet-navy mb-6">Examination Fee Details</h1>
        
        <div className="prose max-w-none">
          <p className="text-gray-700 mb-6">
            The Office of the Controller of Examinations has established the following fee structure for various
            examination-related services. Students are advised to refer to this page before making any payments.
          </p>

          <div className="space-y-8">
            {/* Basic Fees */}
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold text-aemet-navy mb-4">Basic Fees</h2>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12">S.No</TableHead>
                      <TableHead>Particulars</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>1</TableCell>
                      <TableCell>Examination Application form</TableCell>
                      <TableCell className="text-right">Rs. 100</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2</TableCell>
                      <TableCell>Mark/Grade Statement</TableCell>
                      <TableCell className="text-right">Rs. 200</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Exam Fees */}
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold text-aemet-navy mb-4">Exam Fees</h2>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-12" rowSpan={2}>S.No</TableHead>
                        <TableHead rowSpan={2}>Program</TableHead>
                        <TableHead colSpan={2} className="text-center">Theory</TableHead>
                        <TableHead colSpan={2} className="text-center">Practical</TableHead>
                      </TableRow>
                      <TableRow>
                        <TableHead>Regular</TableHead>
                        <TableHead>Arrear</TableHead>
                        <TableHead>Regular</TableHead>
                        <TableHead>Arrear</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>3</TableCell>
                        <TableCell>Under Graduate (B.E, B.Com, B.B.A, B.Sc)</TableCell>
                        <TableCell>Rs. 300/-</TableCell>
                        <TableCell>Rs. 400/-</TableCell>
                        <TableCell>Rs. 400/-</TableCell>
                        <TableCell>Rs. 400/-</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>4</TableCell>
                        <TableCell>Post Graduate (MBA, M.E, M.Sc)</TableCell>
                        <TableCell>Rs. 400/-</TableCell>
                        <TableCell>Rs. 400/-</TableCell>
                        <TableCell>Rs. 500/-</TableCell>
                        <TableCell>Rs. 400/-</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            {/* Final Semester Only */}
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold text-aemet-navy mb-4">Final Semester Only</h2>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12">S.No</TableHead>
                      <TableHead>Particulars</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>1</TableCell>
                      <TableCell>Consolidated Mark Sheet</TableCell>
                      <TableCell className="text-right">Rs. 1,000/-</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2</TableCell>
                      <TableCell>Programme Completion Certificate</TableCell>
                      <TableCell className="text-right">Rs. 250/-</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>3</TableCell>
                      <TableCell>Provisional Certificate</TableCell>
                      <TableCell className="text-right">Rs. 250/-</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>4</TableCell>
                      <TableCell>Degree Certificate</TableCell>
                      <TableCell className="text-right">Rs. 500/-</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Passed Out Students */}
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold text-aemet-navy mb-4">Passed Out Students</h2>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12">S.No</TableHead>
                      <TableHead>Particulars</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>1</TableCell>
                      <TableCell>Re-Registration</TableCell>
                      <TableCell className="text-right">Rs. 2,500/-</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2</TableCell>
                      <TableCell>Examination Fee</TableCell>
                      <TableCell className="text-right">Rs. 1,000/- per paper</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Photocopy / Revaluation */}
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold text-aemet-navy mb-4">Photocopy / Revaluation</h2>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12">S.No</TableHead>
                      <TableHead>Particulars</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>1</TableCell>
                      <TableCell>Photocopy</TableCell>
                      <TableCell className="text-right">Rs. 300/- per paper</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2</TableCell>
                      <TableCell>Revaluation</TableCell>
                      <TableCell className="text-right">Rs. 400/- per paper</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Ph.D */}
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold text-aemet-navy mb-4">Ph.D</h2>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12">S.No</TableHead>
                      <TableHead>Particulars</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>1</TableCell>
                      <TableCell>Provisional Certificate</TableCell>
                      <TableCell className="text-right">Rs. 500/-</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2</TableCell>
                      <TableCell>Degree Certificate</TableCell>
                      <TableCell className="text-right">Rs. 1,000/-</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Issue of Duplicates */}
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold text-aemet-navy mb-4">Issue of Duplicates</h2>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12">S.No</TableHead>
                      <TableHead>Particulars</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>1</TableCell>
                      <TableCell>Duplicate Hall - Ticket</TableCell>
                      <TableCell className="text-right">Rs. 100/-</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2</TableCell>
                      <TableCell>Duplicate Grade Report</TableCell>
                      <TableCell className="text-right">Rs. 500/- per grade report</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>3</TableCell>
                      <TableCell>Duplicate Consolidated Mark Sheet</TableCell>
                      <TableCell className="text-right">Rs. 500/-</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>4</TableCell>
                      <TableCell>Duplicate Degree Certificate</TableCell>
                      <TableCell className="text-right">Rs. 2,000/-</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>5</TableCell>
                      <TableCell>Duplicate Provisional Certificate</TableCell>
                      <TableCell className="text-right">Rs. 500/-</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Issue of Transcripts */}
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold text-aemet-navy mb-4">Issue of Transcripts</h2>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12">S.No</TableHead>
                      <TableHead>Particulars</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>1</TableCell>
                      <TableCell>Mark Statement / Consolidated and Provisional Certificate</TableCell>
                      <TableCell className="text-right">Rs. 3,000/-</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Important note */}
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
              <div className="flex items-start gap-3">
                <InfoIcon className="h-6 w-6 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-aemet-navy mb-2">Important Notes</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>All fees are subject to change without prior notice.</li>
                    <li>Fees must be paid through the prescribed mode of payment only.</li>
                    <li>Cash payments are not accepted.</li>
                    <li>For any queries regarding fees, contact the Office of Controller of Examinations.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ExaminationLayout>
  );
};

export default Fees;
