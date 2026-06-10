
import React from 'react';
import { Users } from 'lucide-react';

const LibraryAtGlanceSection = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-10">
      <h2 className="text-2xl font-semibold text-aemet-navy mb-6 flex items-center">
        <Users className="h-6 w-6 mr-2 text-aemet-blue" />
        Library at a Glance
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-slate-50 rounded-lg p-4 text-center">
          <div className="text-3xl font-bold text-aemet-blue mb-2">500</div>
          <div className="text-gray-700">Total Seating Capacity</div>
        </div>
        <div className="bg-slate-50 rounded-lg p-4 text-center">
          <div className="text-3xl font-bold text-aemet-blue mb-2">2342</div>
          <div className="text-gray-700">Square Meters Area</div>
        </div>
        <div className="bg-slate-50 rounded-lg p-4 text-center">
          <div className="text-3xl font-bold text-aemet-blue mb-2">2</div>
          <div className="text-gray-700">Floors</div>
        </div>
      </div>
    </div>
  );
};

export default LibraryAtGlanceSection;
