import React from 'react';
import { User, GraduationCap, BookOpen, Award } from 'lucide-react';

interface HodProfileTabProps {
  program: {
    hodProfile?: string;
  };
}

const HodProfileTab: React.FC<HodProfileTabProps> = ({ program }) => {
  if (!program.hodProfile) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        <User className="h-12 w-12 mx-auto mb-4 opacity-50" />
        <p>HOD Profile information is not available for this program.</p>
      </div>
    );
  }

  // Parse the markdown-like content
  const parseContent = (text: string) => {
    const lines = text.split('\n');
    const elements: JSX.Element[] = [];
    
    lines.forEach((line, index) => {
      const trimmedLine = line.trim();
      
      if (!trimmedLine) {
        elements.push(<div key={index} className="h-4" />);
      } else if (trimmedLine.startsWith('**') && trimmedLine.endsWith('**')) {
        // Bold heading
        const content = trimmedLine.slice(2, -2);
        elements.push(
          <h3 key={index} className="text-xl font-bold text-primary mt-6 mb-3 flex items-center gap-2">
            <GraduationCap className="h-5 w-5" />
            {content}
          </h3>
        );
      } else {
        // Regular paragraph with inline bold parsing
        const parsedLine = trimmedLine.split(/(\*\*[^*]+\*\*)/).map((part, i) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={i} className="text-foreground font-semibold">{part.slice(2, -2)}</strong>;
          }
          return part;
        });
        
        elements.push(
          <p key={index} className="text-muted-foreground leading-relaxed mb-4">
            {parsedLine}
          </p>
        );
      }
    });
    
    return elements;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-primary/10 rounded-full">
          <User className="h-8 w-8 text-primary" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground">Head of the Department</h2>
          <p className="text-muted-foreground">Profile</p>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-primary/5 to-transparent p-6 rounded-lg border border-primary/10">
        {parseContent(program.hodProfile)}
      </div>
    </div>
  );
};

export default HodProfileTab;
