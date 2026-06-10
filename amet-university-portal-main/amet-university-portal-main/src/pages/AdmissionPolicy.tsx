import React from 'react';
import AdmissionsLayout from '@/components/admissions/AdmissionsLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, CheckCircle, Info } from 'lucide-react';

const AdmissionPolicy = () => {
  return (
    <AdmissionsLayout title="Admission Policy">
      <div>
        <h1 className="text-3xl font-bold text-aemet-navy mb-6">Admission Policy</h1>
        <p className="text-gray-700 mb-6">
          AMET University follows a transparent, merit-based, and inclusive admission process aligning with
          regulatory norms. This policy outlines eligibility, evaluation, reservations, and general guidelines.
        </p>

        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 text-aemet-blue mr-2" />
              <h2 className="text-xl font-semibold text-aemet-navy">Eligibility and Selection</h2>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start"><CheckCircle className="h-5 w-5 text-aemet-blue mr-2 mt-0.5" />
                Eligibility is program-specific and follows statutory guidelines (UGC/DGS/AICTE, as applicable).
              </li>
              <li className="flex items-start"><CheckCircle className="h-5 w-5 text-aemet-blue mr-2 mt-0.5" />
                Selection is based on academic merit, entrance tests/interviews (where applicable), and seat availability.
              </li>
              <li className="flex items-start"><CheckCircle className="h-5 w-5 text-aemet-blue mr-2 mt-0.5" />
                Medical fitness, age criteria, and vision standards apply for specific maritime programs as per DGS norms.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 text-aemet-blue mr-2" />
              <h2 className="text-xl font-semibold text-aemet-navy">Reservation and Scholarships</h2>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start"><CheckCircle className="h-5 w-5 text-aemet-blue mr-2 mt-0.5" />
                Applicable reservations are followed as per Government norms.
              </li>
              <li className="flex items-start"><CheckCircle className="h-5 w-5 text-aemet-blue mr-2 mt-0.5" />
                Scholarships and fee concessions are available as per the university's Scholarship Policy.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Info className="h-6 w-6 text-aemet-blue mr-2" />
              <h2 className="text-xl font-semibold text-aemet-navy">General Guidelines</h2>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start"><CheckCircle className="h-5 w-5 text-aemet-blue mr-2 mt-0.5" />
                All admissions are subject to document verification and authenticity.
              </li>
              <li className="flex items-start"><CheckCircle className="h-5 w-5 text-aemet-blue mr-2 mt-0.5" />
                The University reserves the right to revise policies in line with regulatory updates.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </AdmissionsLayout>
  );
};

export default AdmissionPolicy;