import React from 'react';
import { Check, Info, ChevronRight, Briefcase, Award, TrendingUp, Users, Building, Heart, Stethoscope, GraduationCap, Globe, Lightbulb } from 'lucide-react';
interface OverviewTabProps {
  program: {
    description: string;
    duration: string;
    note?: string;
  };
}

const highlightIcons = [
  Heart, Users, TrendingUp, Users, Lightbulb, Building, GraduationCap, Award, Globe, Users
];

const OverviewTab: React.FC<OverviewTabProps> = ({
  program
}) => {
  // Helper to render bold text
  const renderTextWithBold = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  // Parse the description into sections
  const parseDescription = (desc: string) => {
    const lines = desc.split('\n');
    const sections: Array<{ type: string; content: string[] }> = [];
    let currentSection: { type: string; content: string[] } | null = null;

    lines.forEach(line => {
      const trimmedLine = line.trim();
      if (!trimmedLine) return;

      if (trimmedLine.startsWith('**') && trimmedLine.endsWith('**')) {
        // It's a header
        if (currentSection) sections.push(currentSection);
        currentSection = { type: 'header', content: [trimmedLine] };
      } else if (trimmedLine.startsWith('- ')) {
        // It's a bullet point
        if (!currentSection || currentSection.type !== 'bullets') {
          if (currentSection) sections.push(currentSection);
          currentSection = { type: 'bullets', content: [] };
        }
        currentSection.content.push(trimmedLine.substring(2));
      } else {
        // It's regular text
        if (!currentSection || currentSection.type !== 'text') {
          if (currentSection) sections.push(currentSection);
          currentSection = { type: 'text', content: [] };
        }
        currentSection.content.push(trimmedLine);
      }
    });

    if (currentSection) sections.push(currentSection);
    return sections;
  };

  const sections = parseDescription(program.description);

  return <div className="space-y-6 animate-fade-in">
      {sections.map((section, sectionIndex) => {
        if (section.type === 'header') {
          const headerText = section.content[0];
          const cleanHeader = headerText.replace(/\*\*/g, '');
          
          // Main header gets special treatment
          if (sectionIndex === 0) {
            return (
              <div key={sectionIndex} className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-8 border border-blue-100 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-aemet-blue to-indigo-600 p-3 rounded-xl shadow-md">
                    <Info className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-aemet-navy">{cleanHeader}</h2>
                  </div>
                </div>
              </div>
            );
          }
          
          return (
            <h3 key={sectionIndex} className="text-2xl font-bold text-aemet-navy mt-8 mb-4">
              {cleanHeader}
            </h3>
          );
        }

        if (section.type === 'text') {
          return (
            <div key={sectionIndex} className="space-y-3">
              {section.content.map((text, textIndex) => (
                <p key={textIndex} className="text-gray-700 leading-relaxed text-lg">
                  {renderTextWithBold(text)}
                </p>
              ))}
            </div>
          );
        }

        if (section.type === 'bullets') {
          return (
            <div key={sectionIndex} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {section.content.map((bullet, bulletIndex) => {
                const IconComponent = highlightIcons[bulletIndex] || Award;
                const [boldPart, ...restParts] = bullet.split(/:(.*)/);
                
                return (
                  <div 
                    key={bulletIndex}
                    className="group bg-white hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50 rounded-xl p-5 border border-gray-200 hover:border-aemet-blue transition-all duration-300 shadow-sm hover:shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-aemet-blue/10 to-indigo-100 group-hover:from-aemet-blue group-hover:to-indigo-600 p-3 rounded-lg transition-all duration-300 flex-shrink-0">
                        <IconComponent className="h-5 w-5 text-aemet-blue group-hover:text-white transition-colors" />
                      </div>
                      <div className="flex-1 pt-2">
                        {restParts.length > 0 ? (
                          <>
                            <strong className="text-aemet-navy">{renderTextWithBold(boldPart)}:</strong>
                            <span className="text-gray-700"> {renderTextWithBold(restParts.join(':'))}</span>
                          </>
                        ) : (
                          <span className="text-gray-700">{renderTextWithBold(bullet)}</span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        }

        return null;
      })}

      {/* Program Info Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
          <GraduationCap className="h-10 w-10 mb-4 opacity-90" />
          <h4 className="text-lg font-semibold mb-2">Duration</h4>
          <p className="text-white/90">{program.duration}</p>
        </div>
      </div>
    </div>;
};

export default OverviewTab;