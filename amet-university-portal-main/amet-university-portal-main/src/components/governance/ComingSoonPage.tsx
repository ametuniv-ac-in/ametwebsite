
import React from 'react';

interface ComingSoonPageProps {
  title: string;
}

const ComingSoonPage: React.FC<ComingSoonPageProps> = ({ title }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <h1 className="text-3xl font-bold text-aemet-navy mb-4">{title}</h1>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        This page is currently under development. Check back soon for more information.
      </p>
      <div className="w-16 h-1 bg-aemet-blue rounded mb-8"></div>
      <div className="bg-gray-100 p-8 rounded-lg border border-gray-200 w-full max-w-lg text-center">
        <p className="text-gray-500 italic">
          Content for this section will be available soon. Please visit other sections in the meantime.
        </p>
      </div>
    </div>
  );
};

export default ComingSoonPage;
