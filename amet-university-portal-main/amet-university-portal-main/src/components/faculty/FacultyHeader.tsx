import React from 'react';
interface FacultyHeaderProps {
  name: string;
  description: string;
}
const FacultyHeader: React.FC<FacultyHeaderProps> = ({
  name,
  description
}) => {
  return <div className="bg-gradient-to-r from-aemet-navy to-aemet-blue text-white py-12 pt-32">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{name}</h1>
        
      </div>
    </div>;
};
export default FacultyHeader;