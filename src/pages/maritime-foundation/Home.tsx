import React from 'react';
import MaritimeFoundationLayout from '@/components/maritime-foundation/MaritimeFoundationLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Home: React.FC = () => {
  return (
    <MaritimeFoundationLayout title="Home">
      <div className="space-y-8 text-gray-700 leading-relaxed">
        <section>
          <h3 className="text-xl font-semibold text-aemet-navy mb-3">Welcome Message</h3>
          <p className="mb-4">
            Welcome to the Dr. J. Ramachandran Maritime Foundation, Chennai, India.
          </p>
          <p className="mb-4">
            The Foundation has been established to honour the visionary legacy of Dr. Naesey J. Ramachandran,
            Founder-Chancellor of AMET University and one of the pioneers of maritime education in India.
            The Foundation serves as a global platform to promote maritime excellence, innovation,
            sustainability, leadership and international collaboration.
          </p>
          <p>
            Through its flagship initiatives — the AMET Global Maritime Summit (AGMS) and AMET Global
            Maritime Awards (AGMA) — the Foundation brings together maritime leaders, academicians,
            policymakers, researchers, seafarers and industry professionals from across the world.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-aemet-navy mb-3">About the Foundation</h3>
          <p className="mb-4">
            The Dr. J. Ramachandran Maritime Foundation, established by AMET during 2024 is committed to
            advancing maritime education, research, innovation and sustainable maritime development. The
            Foundation recognizes outstanding contributions made by individuals, institutions and
            innovators in the maritime domain.
          </p>
          <p>
            The Foundation functions in association with AMET University, Chennai, India — India&rsquo;s
            first maritime university and a globally recognized centre for maritime education and training.
            AMET University, established in 1993, holds the distinction of being India&rsquo;s first maritime
            university. With more than 27,000 graduates contributing to the global maritime sector and
            sustained recognition from regulatory and accreditation bodies, AMET continues to play a pivotal
            role in shaping maritime professionals and advancing ocean-based knowledge systems.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-aemet-navy mb-4">Flagship Initiatives</h3>
          <div className="grid md:grid-cols-2 gap-5">
            <Card>
              <CardHeader>
                <CardTitle className="text-aemet-blue">AMET Global Maritime Awards (AGMA)</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700">
                Instituted to honour the legacy and vision of the Founder-Chancellor, AGMA recognises
                outstanding contributions across maritime leadership, institutional excellence, and innovation,
                through a rigorous and transparent international jury process.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-aemet-blue">AMET Global Maritime Summit (AGMS)</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700">
                AGMS addresses contemporary themes such as sustainability, digital transformation, maritime
                education, and ocean governance. AGMS 2025 witnessed 1200+ delegates from 15+ countries.
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </MaritimeFoundationLayout>
  );
};

export default Home;