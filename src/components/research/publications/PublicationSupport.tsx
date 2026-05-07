
import React from 'react';

const PublicationSupport = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-aemet-navy mb-4">Publication Support</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
          <h3 className="text-lg font-medium text-aemet-navy mb-2">Publication Incentives</h3>
          <p className="text-gray-700">
            AMET University provides incentives for faculty and researchers who publish in high-impact journals. The incentive amount varies based on the journal's ranking and impact factor.
          </p>
        </div>
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
          <h3 className="text-lg font-medium text-aemet-navy mb-2">Research Publication Cell</h3>
          <p className="text-gray-700">
            Our Research Publication Cell assists researchers with manuscript preparation, journal selection, and submission processes to enhance the quality and visibility of research publications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PublicationSupport;
