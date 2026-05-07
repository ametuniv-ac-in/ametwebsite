
import React from 'react';
import { Users } from 'lucide-react';

const FacultyPublications = () => {
  return (
    <div className="flex items-center justify-center h-48 bg-slate-50 rounded-lg border border-dashed border-gray-300">
      <div className="text-center">
        <Users className="mx-auto h-10 w-10 text-aemet-blue/50" />
        <p className="mt-2 text-gray-500">Faculty-wise publication data will be updated soon.</p>
      </div>
    </div>
  );
};

export default FacultyPublications;
