import React from 'react';
import { TrendingUp, Briefcase, Ship, Building2, GraduationCap, Anchor, Globe, Award } from 'lucide-react';
import { ProgramDetails } from './ProgramTypeDefinitions';

interface CareerPathTabProps {
  program: ProgramDetails;
}

const CareerPathTab: React.FC<CareerPathTabProps> = ({ program }) => {
  const careerSectors = [
    { icon: Ship, title: "Ship Ownership and Management" },
    { icon: Building2, title: "Directorate General of Shipping" },
    { icon: GraduationCap, title: "Maritime Training Institutes" },
    { icon: Anchor, title: "Marine Survey and Auditing Firms" },
    { icon: Globe, title: "Vessel Operations and Management" },
    { icon: Briefcase, title: "Shipping and Logistics Companies" },
    { icon: TrendingUp, title: "Chartering, Broking, and Post-Fixture Operations" }
  ];

  return (
    <div>
      <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
        <TrendingUp className="h-5 w-5 mr-2 text-aemet-blue" />
        Career Path
      </h3>
      
      {/* Introduction */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200 mb-8">
        <p className="text-gray-700 leading-relaxed">
          After completing the B.Sc. Nautical Science program, graduates begin their maritime careers as Trainee Cadets, undergoing a one-year onboard training period. Upon successful completion, they appear for a series of examinations conducted by the Mercantile Marine Department (MMD) under the Directorate General of Shipping (DG Shipping). These examinations qualify them for progressive officer ranks, including Second Mate, Chief Mate, and ultimately Master (Captain) of a ship.
        </p>
      </div>

      {/* Career Progression */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm mb-8">
        <h4 className="text-lg font-bold text-aemet-navy mb-6 flex items-center gap-2">
          <Award className="h-5 w-5 text-amber-600" />
          Career Progression Path
        </h4>
        <div className="flex flex-wrap justify-center items-center gap-4">
          {['Trainee Cadet', 'Second Mate', 'Chief Mate', 'Master (Captain)'].map((rank, index) => (
            <React.Fragment key={rank}>
              <div className="bg-gradient-to-br from-aemet-blue to-aemet-navy text-white px-6 py-3 rounded-lg font-medium text-center min-w-[140px]">
                {rank}
              </div>
              {index < 3 && (
                <div className="text-aemet-blue font-bold text-xl">→</div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Career Sectors */}
      <div className="mb-8">
        <h4 className="text-lg font-bold text-aemet-navy mb-4">
          Qualified officers can build rewarding careers in:
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {careerSectors.map((sector, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-5 border border-gray-200 hover:shadow-lg transition-all hover:border-aemet-blue/50 group"
            >
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-aemet-blue/10 to-aemet-navy/10 p-3 rounded-lg group-hover:from-aemet-blue group-hover:to-aemet-navy transition-all">
                  <sector.icon className="h-6 w-6 text-aemet-blue group-hover:text-white transition-colors" />
                </div>
                <h5 className="font-medium text-gray-800">{sector.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-gradient-to-r from-aemet-navy to-aemet-blue rounded-xl p-6 text-white">
        <div className="flex items-start gap-4">
          <Globe className="h-8 w-8 flex-shrink-0 mt-1" />
          <p className="leading-relaxed">
            This career pathway offers global exposure, rapid professional growth, and the prestigious opportunity to lead, navigate, and manage ships across international waters.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareerPathTab;
