import React from 'react';
import MaritimeFoundationLayout from '@/components/maritime-foundation/MaritimeFoundationLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Awards: React.FC = () => {
  return (
    <MaritimeFoundationLayout title="Awards and Recognitions">
      <div className="space-y-8 text-gray-700 leading-relaxed">
        <section>
          <h3 className="text-xl font-semibold text-aemet-navy mb-3">AMET Global Maritime Awards (AGMA)</h3>
          <p>
            The AMET Global Maritime Awards recognize outstanding contributions and achievements in the
            maritime sector globally. The awards honour excellence in leadership, innovation, institutional
            development and maritime advancement.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-aemet-navy mb-4">Award Categories</h3>
          <div className="grid md:grid-cols-2 gap-5">
            <Card>
              <CardHeader>
                <CardTitle className="text-aemet-blue text-base">
                  AGMA Maritime Institutional Excellence Award
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                Presented to institutions demonstrating excellence in maritime education, training, research
                and global engagement.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-aemet-blue text-base">AGMA Maritime Leadership Award</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                Recognizing distinguished maritime leaders for exceptional contributions to maritime
                education, industry leadership, safety and sustainability.
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-aemet-navy mb-4">Highlights of Recent Awardees</h3>

          <div className="mb-6">
            <h4 className="font-semibold text-aemet-navy mb-2">AGMA 2025 Awardees</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium">CUST Euromed, University of Messina, Italy</span> &mdash; AGMA
                Maritime Institutional Excellence Award 2025
              </li>
              <li>
                <span className="font-medium">Dr. Boyan Kirilov Mednikarov</span>, Former Commandant and
                Rector, Nikola Vaptsarov Naval Academy, Bulgaria &mdash; AGMA Maritime Leadership Award 2025
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-aemet-navy mb-2">AGMA 2024 Awardees</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium">Vice Admiral Eduardo Ma R Santos (Retd.)</span>, President,
                Maritime Academy of Asia and the Pacific (MAAP), Philippines &mdash; AMET Global Maritime
                Leadership Award 2024 <em>(Maritime Leadership Category)</em>
              </li>
              <li>
                <span className="font-medium">
                  Maritime Academy of Asia and the Pacific (MAAP), Philippines
                </span>{' '}
                &mdash; AMET Global Maritime Excellence Award 2024{' '}
                <em>(Maritime Excellence – Institution Category)</em>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </MaritimeFoundationLayout>
  );
};

export default Awards;