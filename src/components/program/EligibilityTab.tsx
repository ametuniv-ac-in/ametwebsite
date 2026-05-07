
import React from 'react';
import { Check, Calendar, User, ChevronRight, Info, GraduationCap, ClipboardCheck, Users } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface EligibilityTabProps {
  program: {
    eligibility?: string;
    ageLimit?: string;
    medicalStandard?: string;
    lateralEntry?: string;
    note?: string;
    [key: string]: any;
  };
}

const EligibilityTab: React.FC<EligibilityTabProps> = ({ program }) => {
  const renderTextWithMarkdown = (text: string) => {
    const lines = text.split('\n');
    
    return lines.map((line, lineIndex) => {
      // Skip empty lines
      if (!line.trim()) {
        return <div key={lineIndex} className="h-2" />;
      }

      // Check if line is a bullet point
      const isBullet = line.trim().startsWith('-');
      const lineContent = isBullet ? line.trim().substring(1).trim() : line;

      // Parse markdown bold (**text**) and links
      const parseInlineFormatting = (text: string) => {
        const urlPattern = /(https?:\/\/[^\s]+)/g;
        const boldPattern = /\*\*([^*]+)\*\*/g;
        
        const parts: React.ReactNode[] = [];
        let lastIndex = 0;
        let partKey = 0;

        // Combined pattern to match both bold and URLs
        const combinedPattern = /(\*\*[^*]+\*\*)|(https?:\/\/[^\s]+)/g;
        let match;

        while ((match = combinedPattern.exec(text)) !== null) {
          // Add text before match
          if (match.index > lastIndex) {
            parts.push(
              <span key={`text-${lineIndex}-${partKey++}`}>
                {text.substring(lastIndex, match.index)}
              </span>
            );
          }

          if (match[1]) {
            // Bold text
            const boldText = match[1].replace(/\*\*/g, '');
            parts.push(
              <strong key={`bold-${lineIndex}-${partKey++}`} className="font-semibold text-aemet-navy">
                {boldText}
              </strong>
            );
          } else if (match[2]) {
            // URL
            parts.push(
              <a
                key={`link-${lineIndex}-${partKey++}`}
                href={match[2]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-aemet-blue hover:underline break-all"
              >
                {match[2]}
              </a>
            );
          }

          lastIndex = match.index + match[0].length;
        }

        // Add remaining text
        if (lastIndex < text.length) {
          parts.push(
            <span key={`text-${lineIndex}-${partKey++}`}>
              {text.substring(lastIndex)}
            </span>
          );
        }

        return parts.length > 0 ? parts : text;
      };

      const content = parseInlineFormatting(lineContent);

      if (isBullet) {
        return (
          <div key={lineIndex} className="flex items-start gap-2 ml-4">
            <span className="text-aemet-blue mt-1.5">•</span>
            <span className="flex-1">{content}</span>
          </div>
        );
      }

      return (
        <div key={lineIndex} className="leading-relaxed">
          {content}
        </div>
      );
    });
  };

  const hasAnyContent = program.eligibility || program.ageLimit || program.medicalStandard || program.lateralEntry || program.note;

  if (!hasAnyContent) {
    return (
      <div className="animate-fade-in">
        <h2 className="text-2xl font-bold text-aemet-navy mb-4">Eligibility & Requirements</h2>
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <Info className="h-12 w-12 text-gray-400 mx-auto mb-3" />
          <p className="text-gray-600">Information will be updated soon. Please contact admissions for current requirements.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in space-y-6">
      <div className="flex items-center gap-3 mb-8">
        <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-aemet-blue to-aemet-navy flex items-center justify-center">
          <GraduationCap className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-aemet-navy">Eligibility & Requirements</h2>
          <p className="text-muted-foreground">Review the admission criteria below</p>
        </div>
      </div>
      
      <div className="grid gap-6">
        {program.eligibility && (
          <div className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-white to-blue-50/30 p-6 shadow-sm transition-all hover:shadow-md">
            <div className="absolute top-0 right-0 h-32 w-32 bg-gradient-to-br from-aemet-blue/5 to-transparent rounded-full -mr-16 -mt-16" />
            <div className="relative">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-10 w-10 rounded-lg bg-aemet-blue/10 flex items-center justify-center shrink-0">
                  <ClipboardCheck className="h-5 w-5 text-aemet-blue" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-aemet-navy mb-3">Eligibility Criteria</h3>
                  <div className="text-foreground/80 leading-relaxed space-y-3">
                    {renderTextWithMarkdown(program.eligibility)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          {program.ageLimit && (
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-white to-purple-50/30 p-6 shadow-sm transition-all hover:shadow-md">
              <div className="absolute top-0 right-0 h-24 w-24 bg-gradient-to-br from-purple-500/5 to-transparent rounded-full -mr-12 -mt-12" />
              <div className="relative">
                <div className="flex items-start gap-3 mb-3">
                  <div className="h-9 w-9 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0">
                    <Calendar className="h-4 w-4 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-aemet-navy">Age Limit</h3>
                </div>
                <div className="text-foreground/80 leading-relaxed ml-12">
                  {renderTextWithMarkdown(program.ageLimit)}
                </div>
              </div>
            </div>
          )}

          {program.medicalStandard && (
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-white to-green-50/30 p-6 shadow-sm transition-all hover:shadow-md">
              <div className="absolute top-0 right-0 h-24 w-24 bg-gradient-to-br from-green-500/5 to-transparent rounded-full -mr-12 -mt-12" />
              <div className="relative">
                <div className="flex items-start gap-3 mb-3">
                  <div className="h-9 w-9 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-aemet-navy">Medical Standard</h3>
                </div>
                <div className="text-foreground/80 leading-relaxed ml-12">
                  {renderTextWithMarkdown(program.medicalStandard)}
                </div>
              </div>
            </div>
          )}
        </div>

        {program.lateralEntry && (
          <div className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-white to-amber-50/30 p-6 shadow-sm transition-all hover:shadow-md">
            <div className="absolute top-0 right-0 h-32 w-32 bg-gradient-to-br from-amber-500/5 to-transparent rounded-full -mr-16 -mt-16" />
            <div className="relative">
              <div className="flex items-start gap-4 mb-3">
                <div className="h-10 w-10 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0">
                  <Users className="h-5 w-5 text-amber-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-aemet-navy mb-3">Lateral Entry</h3>
                  <div className="text-foreground/80 leading-relaxed">
                    {renderTextWithMarkdown(program.lateralEntry)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {program.note && (
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-aemet-blue/10 via-blue-50/50 to-aemet-blue/5 p-6 border-l-4 border-aemet-blue shadow-sm">
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 rounded-lg bg-aemet-blue/20 flex items-center justify-center shrink-0">
              <Info className="h-5 w-5 text-aemet-blue" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-aemet-navy mb-2">Important Note</h3>
              <p className="text-foreground/80 leading-relaxed">{program.note}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EligibilityTab;
