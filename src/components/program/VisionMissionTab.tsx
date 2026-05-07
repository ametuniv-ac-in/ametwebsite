import React from 'react';
import { Eye, Target } from 'lucide-react';

interface VisionMissionTabProps {
  program: {
    visionMission?: string;
    [key: string]: any;
  };
}

const VisionMissionTab: React.FC<VisionMissionTabProps> = ({ program }) => {
  if (!program.visionMission) {
    return (
      <div className="text-gray-500 italic">
        Vision and Mission information not available for this program.
      </div>
    );
  }

  // Parse the vision and mission from the content
  const parseContent = (content: string) => {
    const visionMatch = content.match(/\*\*Vision\*\*\s*([\s\S]*?)(?=\*\*Mission\*\*|$)/);
    const missionMatch = content.match(/\*\*Mission\*\*\s*([\s\S]*?)$/);
    
    const vision = visionMatch ? visionMatch[1].trim() : '';
    const missionText = missionMatch ? missionMatch[1].trim() : '';
    
    // Parse mission points (lines starting with -)
    const missionPoints = missionText
      .split('\n')
      .filter(line => line.trim().startsWith('-'))
      .map(line => line.trim().replace(/^-\s*/, ''));
    
    return { vision, missionPoints };
  };

  const { vision, missionPoints } = parseContent(program.visionMission);

  return (
    <div className="animate-fade-in space-y-6">
      <h2 className="text-2xl font-bold text-aemet-navy mb-4">Vision and Mission</h2>
      
      {/* Vision Section */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-aemet-navy mb-3 flex items-center">
          <Eye className="text-aemet-blue mr-2 h-5 w-5" />
          Vision
        </h3>
        <p className="text-gray-700 leading-relaxed">
          {vision}
        </p>
      </div>

      {/* Mission Section */}
      {missionPoints.length > 0 && (
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-aemet-navy mb-3 flex items-center">
            <Target className="text-aemet-blue mr-2 h-5 w-5" />
            Mission
          </h3>
          <ul className="space-y-3">
            {missionPoints.map((point, index) => (
              <li key={index} className="flex items-start">
                <span className="text-aemet-blue mr-2 mt-1">•</span>
                <span className="text-gray-700">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default VisionMissionTab;
