import React from 'react';
import { Radio } from 'lucide-react';

interface GmdssTabProps {
  program: {
    gmdssContent?: string;
    gmdssScopeContent?: string;
    gmdssScopeApplicationsContent?: string;
    gmdssRegulatoryFrameworkContent?: string;
    gmdssApplicabilityContent?: string;
    gmdssTypesContent?: string;
    gmdssAboutDepartmentContent?: string;
    [key: string]: any;
  };
}

const renderFormattedText = (text: string) => {
  // Split by bold (**text**) and italic (*text*) patterns
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('*') && part.endsWith('*') && !part.startsWith('**')) {
      return <em key={index}>{part.slice(1, -1)}</em>;
    }
    return part;
  });
};

const GmdssTab: React.FC<GmdssTabProps> = ({ program }) => {
  if (!program.gmdssContent) {
    return (
      <div className="text-gray-500 italic">
        GMDSS information will be added soon.
      </div>
    );
  }


  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-aemet-navy mb-6 flex items-center gap-2">
        <Radio className="h-6 w-6 text-aemet-blue" />
        GMDSS
      </h2>

      {program.gmdssAboutDepartmentContent && (
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm mb-6">
          <div className="prose max-w-none text-gray-700 space-y-4">
            {program.gmdssAboutDepartmentContent.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return (
                  <h3 key={index} className="text-xl font-bold text-aemet-navy mb-4">
                    {paragraph.slice(2, -2)}
                  </h3>
                );
              }
              return <p key={index}>{renderFormattedText(paragraph)}</p>;
            })}
          </div>
        </div>
      )}
      
      {program.gmdssContent && (
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="prose max-w-none text-gray-700 space-y-4">
            {program.gmdssContent.split('\n\n').map((paragraph, index) => (
              <p key={index}>{renderFormattedText(paragraph)}</p>
            ))}
          </div>
        </div>
      )}

      {program.gmdssScopeContent && (
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm mt-6">
          <div className="prose max-w-none text-gray-700 space-y-4">
            {program.gmdssScopeContent.split('\n\n').map((paragraph, index) => (
              <p key={index}>{renderFormattedText(paragraph)}</p>
            ))}
          </div>
        </div>
      )}

      {program.gmdssScopeApplicationsContent && (
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm mt-6">
          <div className="prose max-w-none text-gray-700">
            {program.gmdssScopeApplicationsContent.split('\n\n').map((block, index) => {
              if (block.startsWith('**') && block.endsWith('**')) {
                return (
                  <h3 key={index} className="text-xl font-bold text-aemet-navy mb-4">
                    {block.slice(2, -2)}
                  </h3>
                );
              }
              if (block.startsWith('•')) {
                const lines = block.split('\n');
                const heading = lines[0];
                const description = lines.slice(1).join(' ').trim();
                return (
                  <div key={index} className="mb-4">
                    <p className="font-semibold text-gray-800">
                      {renderFormattedText(heading)}
                    </p>
                    <p className="text-gray-600 ml-4">
                      {renderFormattedText(description)}
                    </p>
                  </div>
                );
              }
              return <p key={index}>{renderFormattedText(block)}</p>;
            })}
          </div>
        </div>
      )}

      {program.gmdssRegulatoryFrameworkContent && (
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm mt-6">
          <div className="prose max-w-none text-gray-700 space-y-4">
            {program.gmdssRegulatoryFrameworkContent.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return (
                  <h3 key={index} className="text-xl font-bold text-aemet-navy mb-4">
                    {paragraph.slice(2, -2)}
                  </h3>
                );
              }
              return <p key={index}>{renderFormattedText(paragraph)}</p>;
            })}
          </div>
        </div>
      )}

      {program.gmdssApplicabilityContent && (
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm mt-6">
          <div className="prose max-w-none text-gray-700 space-y-4">
            {program.gmdssApplicabilityContent.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return (
                  <h3 key={index} className="text-xl font-bold text-aemet-navy mb-4">
                    {paragraph.slice(2, -2)}
                  </h3>
                );
              }
              if (paragraph.startsWith('•')) {
                return (
                  <p key={index} className="ml-4">
                    {renderFormattedText(paragraph)}
                  </p>
                );
              }
              return <p key={index}>{renderFormattedText(paragraph)}</p>;
            })}
          </div>
        </div>
      )}

      {program.gmdssTypesContent && (
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm mt-6">
          <div className="prose max-w-none text-gray-700 space-y-4">
            {program.gmdssTypesContent.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return (
                  <h3 key={index} className="text-xl font-bold text-aemet-navy mb-4">
                    {paragraph.slice(2, -2)}
                  </h3>
                );
              }
              if (paragraph.startsWith('1.') || paragraph.startsWith('2.')) {
                const lines = paragraph.split('\n');
                const heading = lines[0];
                const description = lines.slice(1).join(' ').trim();
                return (
                  <div key={index} className="mb-2">
                    <p className="text-gray-800">
                      {renderFormattedText(heading)}
                    </p>
                    {description && (
                      <p className="text-gray-600 ml-4">
                        {renderFormattedText(description)}
                      </p>
                    )}
                  </div>
                );
              }
              if (paragraph.startsWith('○')) {
                return (
                  <p key={index} className="ml-8 text-gray-600">
                    {renderFormattedText(paragraph)}
                  </p>
                );
              }
              return <p key={index}>{renderFormattedText(paragraph)}</p>;
            })}
          </div>
        </div>
      )}

    </div>
  );
};

export default GmdssTab;
