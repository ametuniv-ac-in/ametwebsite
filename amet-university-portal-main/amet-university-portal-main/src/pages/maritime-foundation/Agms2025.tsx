import React from 'react';
import MaritimeFoundationLayout from '@/components/maritime-foundation/MaritimeFoundationLayout';

const Agms2025: React.FC = () => {
  return (
    <MaritimeFoundationLayout title="AMET Global Maritime Summit (AGMS)">
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          Organized annually by the Dr. J. Ramachandran Maritime Foundation in association with AMET
          University, this summit serves as an international platform for maritime leaders, industry experts,
          academicians, policymakers, and researchers to deliberate on emerging trends, innovations,
          sustainability, and the future of the global maritime sector.
        </p>

        <div className="bg-slate-50 border-l-4 border-aemet-blue p-4 rounded">
          <h4 className="font-semibold text-aemet-navy">AGMS 2024</h4>
          <p className="mt-1">Theme: <em>“Charting the Future of Maritime Excellence”</em></p>
        </div>

        <div className="bg-slate-50 border-l-4 border-aemet-blue p-4 rounded">
          <h4 className="font-semibold text-aemet-navy">AGMS 2025</h4>
          <p className="mt-1">Theme: <em>“Sailing Towards Sustainability – Navigating the Future of the Maritime Industry”</em></p>
        </div>

        <div className="bg-slate-50 border-l-4 border-aemet-navy p-4 rounded">
          <h4 className="font-semibold text-aemet-navy">AGMS 2026</h4>
          <p className="mt-1">Theme: <em>“Maritime Sustainability 2050: Artificial Intelligence, Green Ship Building and Autonomous Ocean Transport”</em></p>
        </div>

        <p>
          In continuation of the successful conduct of AGMS 2024 and AGMS 2025, AGMS 2026 is being organized
          with a forward-looking focus on artificial intelligence, sustainable shipbuilding technologies,
          autonomous shipping systems, and green maritime practices that will shape the future of global
          ocean transport.
        </p>
      </div>
    </MaritimeFoundationLayout>
  );
};

export default Agms2025;