import React from 'react';
import { BookOpen, Download } from 'lucide-react';

interface MagazinesSectionProps {
  departmentId: string;
}

const MagazinesSection: React.FC<MagazinesSectionProps> = ({ departmentId }) => {
  const magazines = [
    {
      title: 'Magazine 2020-21',
      file: '/documents/magazine-2020-21.pdf',
      color: 'violet'
    },
    {
      title: 'Magazine 2019-20',
      file: '/documents/magazine-2019-20.pdf',
      color: 'cyan'
    },
    {
      title: 'Magazine 2018-19',
      file: '/documents/magazine-2018-19.pdf',
      color: 'emerald'
    },
    {
      title: 'Magazine 2017-18',
      file: '/documents/magazine-2017-18.pdf',
      color: 'rose'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; hover: string }> = {
      violet: { bg: 'bg-violet-100', text: 'text-violet-600', hover: 'hover:bg-violet-50' },
      cyan: { bg: 'bg-cyan-100', text: 'text-cyan-600', hover: 'hover:bg-cyan-50' },
      emerald: { bg: 'bg-emerald-100', text: 'text-emerald-600', hover: 'hover:bg-emerald-50' },
      rose: { bg: 'bg-rose-100', text: 'text-rose-600', hover: 'hover:bg-rose-50' }
    };
    return colors[color];
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-aemet-navy mb-6">Magazines</h2>
      
      <div className="grid md:grid-cols-2 gap-4">
        {magazines.map((magazine, index) => {
          const colorClasses = getColorClasses(magazine.color);
          return (
            <div 
              key={index} 
              className={`bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow ${colorClasses.hover}`}
            >
              <div className="flex items-start gap-4">
                <div className={`${colorClasses.bg} p-3 rounded-lg flex-shrink-0`}>
                  <BookOpen className={`w-7 h-7 ${colorClasses.text}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-aemet-navy mb-3">
                    {magazine.title}
                  </h4>
                  <a 
                    href={magazine.file} 
                    download={magazine.title.replace(/ /g, '-') + '.pdf'}
                    className="inline-flex items-center gap-2 text-aemet-blue hover:text-aemet-navy font-medium text-sm transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MagazinesSection;
