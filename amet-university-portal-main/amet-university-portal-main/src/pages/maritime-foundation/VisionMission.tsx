import React from 'react';
import MaritimeFoundationLayout from '@/components/maritime-foundation/MaritimeFoundationLayout';

const VisionMission: React.FC = () => {
  const mission = [
    'Recognizing excellence in maritime education and industry',
    'Encouraging innovation and emerging technologies',
    'Promoting sustainability and responsible maritime practices',
    'Facilitating global collaboration and knowledge exchange',
    'Addressing future maritime challenges through research and dialogue',
    'Inspiring future maritime leaders',
  ];

  return (
    <MaritimeFoundationLayout title="Vision & Mission">
      <div className="space-y-8 text-gray-700 leading-relaxed">
        <section className="bg-gradient-to-br from-aemet-navy/5 to-aemet-blue/5 p-6 rounded-lg border-l-4 border-aemet-navy">
          <h3 className="text-xl font-semibold text-aemet-navy mb-3">Vision</h3>
          <p>
            To be a global leader in promoting excellence and innovation in the maritime industry and
            maritime education, addressing futuristic challenges and fostering sustainable development.
          </p>
        </section>

        <section className="bg-gradient-to-br from-aemet-blue/5 to-aemet-lightBlue/10 p-6 rounded-lg border-l-4 border-aemet-blue">
          <h3 className="text-xl font-semibold text-aemet-navy mb-3">Mission</h3>
          <ul className="list-disc pl-6 space-y-2">
            {mission.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </section>
      </div>
    </MaritimeFoundationLayout>
  );
};

export default VisionMission;