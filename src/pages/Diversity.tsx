import React from 'react';
import AdmissionsLayout from '@/components/admissions/AdmissionsLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Users, HeartHandshake, Globe2, Shield } from 'lucide-react';

const Diversity = () => {
  return (
    <AdmissionsLayout title="Diversity & Inclusion">
      <div>
        <h1 className="text-3xl font-bold text-aemet-navy mb-6">Diversity & Inclusion</h1>
        <p className="text-gray-700 mb-6">
          AMET University is committed to fostering a diverse, inclusive, and equitable environment where all
          students, faculty, and staff feel valued and empowered to succeed—irrespective of background,
          culture, gender, religion, or ability.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-3 mb-3">
                <Users className="h-6 w-6 text-aemet-blue mt-1" />
                <h2 className="text-xl font-semibold text-aemet-navy">Equal Opportunity</h2>
              </div>
              <p className="text-gray-700">
                We ensure a fair and transparent admissions and recruitment process, offering equal opportunities
                to all candidates following statutory norms and university policies.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-3 mb-3">
                <HeartHandshake className="h-6 w-6 text-aemet-blue mt-1" />
                <h2 className="text-xl font-semibold text-aemet-navy">Inclusive Campus</h2>
              </div>
              <p className="text-gray-700">
                Our campus culture celebrates diversity and promotes inclusive practices across academics,
                student life, and co-curricular activities.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-3 mb-3">
                <Globe2 className="h-6 w-6 text-aemet-blue mt-1" />
                <h2 className="text-xl font-semibold text-aemet-navy">International Community</h2>
              </div>
              <p className="text-gray-700">
                We welcome students from across India and around the world, encouraging cross-cultural learning
                and global perspectives.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-3 mb-3">
                <Shield className="h-6 w-6 text-aemet-blue mt-1" />
                <h2 className="text-xl font-semibold text-aemet-navy">Anti-Discrimination Policy</h2>
              </div>
              <p className="text-gray-700">
                AMET maintains a zero-tolerance stance toward discrimination, bullying, or harassment. Dedicated
                committees ensure prompt redressal and a safe learning environment.
              </p>
            </CardContent>
          </Card>
        </div>

        <p className="text-gray-700">
          For queries related to diversity and inclusion initiatives, please contact the Admissions Office at
          <span className="text-aemet-blue font-medium"> admissions@ametuniv.ac.in</span>.
        </p>
      </div>
    </AdmissionsLayout>
  );
};

export default Diversity;
