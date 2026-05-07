import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
interface ProgramHeaderProps {
  facultyId: string;
  departmentId: string;
  departmentName: string;
  program: {
    name: string;
    category: 'UG' | 'PG' | 'Research';
    description: string;
  };
  DeptIcon: React.ElementType;
}
const ProgramHeader: React.FC<ProgramHeaderProps> = ({
  facultyId,
  departmentId,
  departmentName,
  program,
  DeptIcon
}) => {
  const navigate = useNavigate();
  return <div className="bg-gradient-to-r from-aemet-navy to-aemet-blue text-white py-12 pt-32">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-2">
          <button onClick={() => navigate(`/faculty/${facultyId}/department/${departmentId}`)} className="text-white/80 hover:text-white mr-2 transition-colors text-sm flex items-center">
            <ChevronRight className="h-4 w-4 rotate-180 mr-1" /> Back to {departmentName}
          </button>
        </div>
        <div className="flex items-center mb-2">
          {!program.name.includes('GMDSS') && (
            <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-medium mr-3">
              {program.category}
            </span>
          )}
          <DeptIcon className="h-6 w-6 mr-3" />
          <h1 className="text-2xl md:text-3xl font-bold">{program.name}</h1>
        </div>
        
      </div>
    </div>;
};
export default ProgramHeader;