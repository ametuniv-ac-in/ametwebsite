import React from 'react';
import AdmissionsLayout from '@/components/admissions/AdmissionsLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Receipt, Info } from 'lucide-react';

const FeeStructure = () => {
  return (
    <AdmissionsLayout title="Fee Structure 2026-27">
      <div>
        <h1 className="text-3xl font-bold text-aemet-navy mb-6">Fee Structure 2026-27</h1>
        <p className="text-gray-700 mb-6">
          Find detailed information on tuition fees, examination fees, and other applicable charges for various programs at AMET University for the academic year 2026-27.
        </p>

        <Card className="mb-8">
          <CardContent className="p-6 flex items-center justify-between">
            <div className="flex items-start gap-3">
              <Receipt className="h-6 w-6 text-aemet-blue mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-aemet-navy">Official Fee Structure (PDF)</h2>
                <p className="text-gray-600">Download the latest approved fee structure document.</p>
              </div>
            </div>
            {/* TODO: Replace href with the actual PDF URL */}
            <Button asChild>
              <a href="#" onClick={(e) => e.preventDefault()} aria-disabled>
                <Download className="h-4 w-4 mr-2" /> Download PDF
              </a>
            </Button>
          </CardContent>
        </Card>

        <div className="bg-blue-50 border border-blue-100 rounded-lg p-5 flex items-start gap-3">
          <Info className="h-5 w-5 text-aemet-blue mt-0.5" />
          <p className="text-gray-700">
            For fee-related queries and payment options, please contact the Admissions Office at
            <span className="text-aemet-blue font-medium"> admissions@ametuniv.ac.in</span> or call
            <span className="text-aemet-blue font-medium"> 1800 108 3030</span>.
          </p>
        </div>
      </div>
    </AdmissionsLayout>
  );
};

export default FeeStructure;
