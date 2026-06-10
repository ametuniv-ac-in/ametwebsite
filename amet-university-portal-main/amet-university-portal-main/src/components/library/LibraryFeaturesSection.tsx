
import React from 'react';
import { BookOpen, Bookmark } from 'lucide-react';

const LibraryFeaturesSection = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-10">
      <h2 className="text-2xl font-semibold text-aemet-navy mb-6 flex items-center">
        <BookOpen className="h-6 w-6 mr-2 text-aemet-blue" />
        Library Features
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-start">
          <Bookmark className="h-5 w-5 text-aemet-blue mt-1 mr-2 flex-shrink-0" />
          <p className="text-gray-700">Fully automated through AUTOLIB-ILMS</p>
        </div>
        <div className="flex items-start">
          <Bookmark className="h-5 w-5 text-aemet-blue mt-1 mr-2 flex-shrink-0" />
          <p className="text-gray-700">Web-OPAC, RFID, and Barcode systems</p>
        </div>
        <div className="flex items-start">
          <Bookmark className="h-5 w-5 text-aemet-blue mt-1 mr-2 flex-shrink-0" />
          <p className="text-gray-700">INFED Remote Access</p>
        </div>
        <div className="flex items-start">
          <Bookmark className="h-5 w-5 text-aemet-blue mt-1 mr-2 flex-shrink-0" />
          <p className="text-gray-700">2342 sq.m area in two floors</p>
        </div>
        <div className="flex items-start">
          <Bookmark className="h-5 w-5 text-aemet-blue mt-1 mr-2 flex-shrink-0" />
          <p className="text-gray-700">Wi-Fi enabled throughout</p>
        </div>
        <div className="flex items-start">
          <Bookmark className="h-5 w-5 text-aemet-blue mt-1 mr-2 flex-shrink-0" />
          <p className="text-gray-700">Seating capacity of 500 users</p>
        </div>
        <div className="flex items-start">
          <Bookmark className="h-5 w-5 text-aemet-blue mt-1 mr-2 flex-shrink-0" />
          <p className="text-gray-700">Air conditioned reading halls</p>
        </div>
        <div className="flex items-start">
          <Bookmark className="h-5 w-5 text-aemet-blue mt-1 mr-2 flex-shrink-0" />
          <p className="text-gray-700">Lift facilities for easy access</p>
        </div>
      </div>
    </div>
  );
};

export default LibraryFeaturesSection;
