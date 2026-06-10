
import React from 'react';
import LibraryLayout from '@/components/library/LibraryLayout';
import LibraryResourcesHeader from '@/components/library/LibraryResourcesHeader';
import PrintCollectionTable from '@/components/library/PrintCollectionTable';
import EDatabasesTable from '@/components/library/EDatabasesTable';
import { printCollections, nonPrintCollections, eDatabases } from '@/components/library/ResourcesData';

const LibraryResources = () => {
  return (
    <LibraryLayout title="Resources">
      <div>
        <LibraryResourcesHeader />
        
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-aemet-navy mb-6">
            Library Resource Collections (Print and e-Resources)
          </h2>

          <h3 className="text-xl font-semibold text-aemet-navy mb-4">PRINT COLLECTION</h3>
          <PrintCollectionTable collections={printCollections} title="Print Collection" />
          
          <h3 className="text-xl font-semibold text-aemet-navy mt-10 mb-4">NON-PRINT COLLECTION</h3>
          <PrintCollectionTable collections={nonPrintCollections} title="Non-Print Collection" />
          
          <h3 className="text-xl font-semibold text-aemet-navy mt-10 mb-4">E-DATABASES</h3>
          <EDatabasesTable databases={eDatabases} />
        </div>
      </div>
    </LibraryLayout>
  );
};

export default LibraryResources;
