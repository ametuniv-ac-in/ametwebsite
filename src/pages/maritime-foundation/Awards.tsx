import React from 'react';
import MaritimeFoundationLayout from '@/components/maritime-foundation/MaritimeFoundationLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import adamWeintrit from '@/assets/maritime-foundation/adam-weintrit.jpg';
import gabrielRaicu from '@/assets/maritime-foundation/gabriel-raicu.png';
import boyanMednikarov from '@/assets/maritime-foundation/boyan-mednikarov.png';
import eduardoSantos from '@/assets/maritime-foundation/eduardo-santos.jpg';
import maapLogo from '@/assets/maritime-foundation/maap-logo.png';
import nynneScheuer from '@/assets/maritime-foundation/nynne-scheuer.jpg';
import custEuromedLogo from '@/assets/maritime-foundation/cust-euromed-logo.png';

const Awards: React.FC = () => {
  return (
    <MaritimeFoundationLayout title="AMET Global Maritime Awards (AGMA)">
      <div className="space-y-8 text-gray-700 leading-relaxed">
        <section>
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
          <h3 className="text-xl font-semibold text-aemet-navy mb-4">Chairperson of Jury Panel</h3>
          <div className="grid md:grid-cols-2 gap-5">
            <Card>
              <CardHeader>
                <CardTitle className="text-aemet-blue text-base">AGMA 2024</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <div className="bg-gray-50 mb-3 flex items-center justify-center rounded">
                  <img
                    src={adamWeintrit}
                    alt="Prof. Adam Weintrit"
                    className="object-contain h-44"
                  />
                </div>
                <p className="font-semibold text-aemet-navy">
                  Prof. Adam Weintrit, DSc (Eng), FRIN, FNI, MM
                </p>
                <p>Gdynia Maritime Academy, Poland</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-aemet-blue text-base">AGMA 2025</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <div className="bg-gray-50 mb-3 flex items-center justify-center rounded">
                  <img
                    src={gabrielRaicu}
                    alt="Prof. Dr. Gabriel Raicu"
                    className="object-contain h-44"
                  />
                </div>
                <p className="font-semibold text-aemet-navy">Prof. Dr. Gabriel Raicu</p>
                <p>Constanta Maritime University, Romania</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-aemet-navy mb-4">Highlights of Recent Awardees</h3>

          <div className="mb-6">
            <h4 className="font-semibold text-aemet-navy mb-2">AGMA 2025 Awardees</h4>
            <div className="grid md:grid-cols-2 gap-5">
              <Card>
                <CardContent className="text-sm pt-6">
                  <div className="bg-gray-700 mb-3 flex items-center justify-center rounded">
                    <img
                      src={custEuromedLogo}
                      alt="CUST Euromed, University of Messina"
                      className="object-contain h-44"
                    />
                  </div>
                  <p className="font-semibold text-aemet-navy">
                    CUST Euromed, University of Messina, Italy
                  </p>
                  <p className="mt-2 text-aemet-blue">
                    AGMA Maritime Institutional Excellence Award 2025
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="text-sm pt-6">
                  <div className="bg-gray-50 mb-3 flex items-center justify-center rounded">
                    <img
                      src={boyanMednikarov}
                      alt="Dr. Boyan Kirilov Mednikarov"
                      className="object-contain h-44"
                    />
                  </div>
                  <p className="font-semibold text-aemet-navy">Dr. Boyan Kirilov Mednikarov</p>
                  <p>
                    Former Commandant and Rector, Nikola Vaptsarov Naval Academy, Bulgaria
                  </p>
                  <p className="mt-2 text-aemet-blue">AGMA Maritime Leadership Award 2025</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-aemet-navy mb-2">AGMA 2024 Awardees</h4>
            <div className="grid md:grid-cols-3 gap-5">
              <Card>
                <CardContent className="text-sm pt-6">
                  <div className="bg-gray-50 mb-3 flex items-center justify-center rounded">
                    <img
                      src={eduardoSantos}
                      alt="Vice Admiral Eduardo Ma R Santos (Retd.)"
                      className="object-contain h-44"
                    />
                  </div>
                  <p className="font-semibold text-aemet-navy">
                    Vice Admiral Eduardo Ma R Santos (Retd.)
                  </p>
                  <p>President, Maritime Academy of Asia and the Pacific (MAAP), Philippines</p>
                  <p className="mt-2 text-aemet-blue">
                    AMET Global Maritime Leadership Award 2024 <em>(Maritime Leadership Category)</em>
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="text-sm pt-6">
                  <div className="bg-gray-50 mb-3 flex items-center justify-center rounded">
                    <img
                      src={maapLogo}
                      alt="Maritime Academy of Asia and the Pacific (MAAP)"
                      className="object-contain h-44"
                    />
                  </div>
                  <p className="font-semibold text-aemet-navy">
                    Maritime Academy of Asia and the Pacific (MAAP), Philippines
                  </p>
                  <p className="mt-2 text-aemet-blue">
                    AMET Global Maritime Excellence Award 2024{' '}
                    <em>(Maritime Excellence – Institution Category)</em>
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="text-sm pt-6">
                  <div className="bg-gray-50 mb-3 flex items-center justify-center rounded">
                    <img
                      src={nynneScheuer}
                      alt="Ms. Nynne Norman Scheuer"
                      className="object-contain h-44"
                    />
                  </div>
                  <p className="font-semibold text-aemet-navy">Ms. Nynne Norman Scheuer</p>
                  <p>
                    Senior Director, Head of Marine People &amp; Culture, A.P. Moller-Maersk, Denmark
                  </p>
                  <p className="mt-2 text-aemet-blue">AGMA Maritime Leadership Award 2024</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </MaritimeFoundationLayout>
  );
};

export default Awards;