import React from 'react';
import MaritimeFoundationLayout from '@/components/maritime-foundation/MaritimeFoundationLayout';

const Agms2025: React.FC = () => {
  const themes = [
    'Maritime sustainability',
    'Digital transformation',
    'Maritime education and training',
    'Green shipping',
    'Ocean governance',
    'Maritime innovation',
    'Seafarer wellbeing',
    'Future maritime technologies',
  ];

  return (
    <MaritimeFoundationLayout title="AMET Global Maritime Summit 2025">
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          The AMET Global Maritime Summit (AGMS) is an annual international maritime summit organized by the
          Dr. J. Ramachandran Maritime Foundation and AMET University.
        </p>
        <p>
          AGMS 2025 witnessed participation from more than <strong>1,200 delegates</strong> representing over{' '}
          <strong>15 countries</strong>, along with extensive technical sessions, panel discussions, and
          scholarly contributions, reinforcing its position as a premier international maritime forum.
        </p>
        <section>
          <h3 className="text-xl font-semibold text-aemet-navy mb-3">Themes Covered</h3>
          <ul className="grid sm:grid-cols-2 gap-2 list-disc pl-6">
            {themes.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </section>
      </div>
    </MaritimeFoundationLayout>
  );
};

export default Agms2025;