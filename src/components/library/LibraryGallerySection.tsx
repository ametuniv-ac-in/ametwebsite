
import React from 'react';
import { BookOpen, Bookmark } from 'lucide-react';

const LibraryGallerySection = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 h-full">
      <h2 className="text-2xl font-semibold text-aemet-navy mb-6 flex items-center">
        <BookOpen className="h-6 w-6 mr-2 text-aemet-blue" />
        Library Collections
      </h2>
      
      <div className="space-y-4">
        <p className="text-gray-700">
          Our library houses a diverse collection of resources across various disciplines to support 
          teaching, learning, and research at AMET University.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-slate-50 p-4 rounded-lg">
            <h3 className="font-medium text-aemet-navy mb-2">Academic Resources</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Bookmark className="h-4 w-4 text-aemet-blue mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-700">Engineering & Technology</span>
              </li>
              <li className="flex items-start">
                <Bookmark className="h-4 w-4 text-aemet-blue mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-700">Maritime Studies</span>
              </li>
              <li className="flex items-start">
                <Bookmark className="h-4 w-4 text-aemet-blue mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-700">Management Resources</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-slate-50 p-4 rounded-lg">
            <h3 className="font-medium text-aemet-navy mb-2">Special Collections</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Bookmark className="h-4 w-4 text-aemet-blue mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-700">Research Publications</span>
              </li>
              <li className="flex items-start">
                <Bookmark className="h-4 w-4 text-aemet-blue mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-700">Theses & Dissertations</span>
              </li>
              <li className="flex items-start">
                <Bookmark className="h-4 w-4 text-aemet-blue mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-700">Rare Book Collection</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-slate-50 p-4 rounded-lg">
            <h3 className="font-medium text-aemet-navy mb-2">Digital Resources</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Bookmark className="h-4 w-4 text-aemet-blue mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-700">E-journals & E-books</span>
              </li>
              <li className="flex items-start">
                <Bookmark className="h-4 w-4 text-aemet-blue mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-700">Digital Archives</span>
              </li>
              <li className="flex items-start">
                <Bookmark className="h-4 w-4 text-aemet-blue mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-700">Online Databases</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-slate-50 p-4 rounded-lg">
            <h3 className="font-medium text-aemet-navy mb-2">Multimedia Resources</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Bookmark className="h-4 w-4 text-aemet-blue mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-700">Educational Videos</span>
              </li>
              <li className="flex items-start">
                <Bookmark className="h-4 w-4 text-aemet-blue mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-700">Audio Learning Materials</span>
              </li>
              <li className="flex items-start">
                <Bookmark className="h-4 w-4 text-aemet-blue mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-700">Interactive Learning Tools</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryGallerySection;
