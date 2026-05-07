import React from 'react';
import { Sparkles, CheckCircle2, Star, Briefcase, GraduationCap, Globe, Users, Award } from 'lucide-react';

interface HighlightsTabProps {
  program: {
    highlights?: string;
    programHighlights?: string[];
    [key: string]: any;
  };
}

const highlightIcons = [Briefcase, GraduationCap, Star, Globe, Users, Award, Sparkles, CheckCircle2];

const HighlightsTab: React.FC<HighlightsTabProps> = ({ program }) => {
  // Handle both programHighlights array and highlights string
  let highlightLines: string[] = [];
  
  if (program.programHighlights && Array.isArray(program.programHighlights)) {
    // Use programHighlights if available (array format)
    highlightLines = program.programHighlights;
  } else if (program.highlights) {
    // Fall back to highlights string format
    highlightLines = program.highlights
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0)
      .map(line => line.replace(/^[•\-]\s*/, '')); // Remove bullet points
  }
  
  if (highlightLines.length === 0) {
    return (
      <div className="text-gray-500 italic">
        Highlights information not available for this program.
      </div>
    );
  }

  // Helper function to render text with bold markdown
  const renderTextWithBold = (text: string) => {
    const parts = text.split(/\*\*(.*?)\*\*/g);
    return parts.map((part, index) => {
      if (index % 2 === 1) {
        return <strong key={index} className="text-aemet-navy">{part}</strong>;
      }
      return <span key={index}>{part}</span>;
    });
  };

  // Extract title if present (text before first colon in bold)
  const parseHighlight = (text: string) => {
    const boldMatch = text.match(/^\*\*(.+?):\*\*\s*(.*)/s);
    if (boldMatch) {
      return { title: boldMatch[1], content: boldMatch[2] };
    }
    const boldOnlyMatch = text.match(/^\*\*(.+?)\*\*\s*(.*)/s);
    if (boldOnlyMatch) {
      return { title: boldOnlyMatch[1], content: boldOnlyMatch[2] };
    }
    return { title: null, content: text };
  };

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-aemet-navy mb-6 flex items-center">
        <Sparkles className="text-aemet-blue mr-2 h-6 w-6" />
        Programme Highlights
      </h2>
      
      <div className="space-y-4">
        {highlightLines.map((item, index) => {
          const { title, content } = parseHighlight(item);
          const IconComponent = highlightIcons[index % highlightIcons.length];
          
          return (
            <div 
              key={index} 
              className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="bg-aemet-blue/10 rounded-lg p-2 flex-shrink-0">
                  <IconComponent className="text-aemet-blue h-5 w-5" />
                </div>
                <div className="flex-1">
                  {title && (
                    <h3 className="font-bold text-aemet-navy mb-2">{title}</h3>
                  )}
                  <p className="text-gray-700 leading-relaxed">
                    {title ? content : renderTextWithBold(item)}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HighlightsTab;
