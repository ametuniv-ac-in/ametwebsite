
import React from 'react';
import LibraryLayout from '@/components/library/LibraryLayout';

const LibraryMembership = () => {
  return (
    <LibraryLayout title="Membership & Resource Sharing">
      <div className="space-y-8">
        <h1 className="text-3xl font-bold text-aemet-navy mb-6">Membership & Resource Sharing</h1>
        <p className="text-gray-700 mb-4">
          Information about library membership eligibility, registration procedures, and resource sharing programs with other institutions.
        </p>
        
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-aemet-navy mb-4">Membership Categories</h2>
          <p className="text-gray-700">Content will be added soon.</p>
        </div>

        <div className="mt-10 bg-white p-6 rounded-lg shadow-sm border border-slate-100">
          <h2 className="text-2xl font-semibold text-aemet-navy mb-6">AMET Library - Institutional Membership and Resources Sharing</h2>
          
          <p className="text-gray-700 mb-6">
            The Central Library collaborates with other libraries to explore Inter-library Loan (ILL) to provide articles, books, and other materials to faculty members, researchers, students, through Institutional Membership with the following institutions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
              <h3 className="text-lg font-medium text-aemet-navy mb-4">Institutional Memberships</h3>
              <ul className="space-y-3 list-disc list-inside text-gray-700">
                <li>MALIBNET</li>
                <li>American Council Library</li>
                <li>British Council Library</li>
                <li>DELNET</li>
                <li>National Digital Library of India (NDLI)</li>
              </ul>
            </div>
            
            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
              <h3 className="text-lg font-medium text-aemet-navy mb-4">Resource Sharing Networks</h3>
              <ul className="space-y-3 list-disc list-inside text-gray-700">
                <li>UGC-INFLIBNET</li>
                <li>UGC-Shodhganga</li>
                <li>E-ShodhSindhu Consortium for Higher Education</li>
                <li>INFLIBNET-INFED Remote Access Facilities</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
            <h3 className="text-lg font-medium text-aemet-navy mb-2">Benefits of Resource Sharing</h3>
            <p className="text-gray-700">
              Through these institutional memberships, AMET University Library extends its resources beyond its physical collection. 
              Users can access a wider range of academic and research materials, enhancing the scope and quality of research and academic work.
            </p>
          </div>
        </div>
      </div>
    </LibraryLayout>
  );
};

export default LibraryMembership;
