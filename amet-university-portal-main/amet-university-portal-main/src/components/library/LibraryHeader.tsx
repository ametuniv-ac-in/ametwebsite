
import React from 'react';
import { BookOpen } from 'lucide-react';

const LibraryHeader = () => {
  return (
    <div className="text-center max-w-4xl mx-auto pt-16 md:pt-24">
      <div className="inline-flex items-center justify-center p-4 bg-aemet-lightBlue rounded-full mb-8">
        <BookOpen className="h-10 w-10 text-aemet-navy" />
      </div>
      <h1 className="text-3xl md:text-5xl font-bold text-aemet-navy mb-8">
        Dr. V. B. S. Rajan Library
      </h1>
      
      <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-16 mt-10 text-left">
        <p className="text-gray-700 mb-4 text-lg leading-relaxed text-justify">
          Dr. V. B. S. Rajan Library (formerly George T. R. Campbell Library) is a fully automated facility equipped with 
          AUTOLIB-ILMS, Web-OPAC, RFID, Barcode, and INFED Remote Access systems. The library occupies a separate block of 
          2,342 sq. m across two floors, is Wi-Fi enabled, and provides air-conditioned reading halls, lift facilities, and 
          a seating capacity of 500 users.
        </p>
        
        <p className="text-gray-700 text-lg leading-relaxed text-justify">
          The library houses a comprehensive and updated collection of books across various disciplines. Resources are 
          available in the fields of Engineering, Science and Technology, and Management, including Marine Engineering, 
          Nautical Science, Management Studies, Commerce, Marine Biotechnology, Naval Architecture and Offshore Engineering, 
          Petroleum Engineering, Electrical and Electronics Engineering, Mechanical Engineering, Food Processing and Technology, 
          and Mining Engineering, Artificial Intelligence and Machine Learning, Data Science Robotics, Aviation, Allied Health 
          Sciences as well as Mathematics, Physics, Chemistry, English, Career Information and Guidance, and General Studies.
        </p>
      </div>
    </div>
  );
};

export default LibraryHeader;
