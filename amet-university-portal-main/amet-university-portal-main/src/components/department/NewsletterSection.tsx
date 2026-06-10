import React from 'react';
import { FileText, Download } from 'lucide-react';

interface NewsletterSectionProps {
  departmentId: string;
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({ departmentId }) => {
  // Physics department newsletters
  const physicsNewsletters = [
    {
      title: 'Department Magazine 2024-25 (Even Semester)',
      file: '/documents/physics/2024-25_EVEN_SEM_Magazine.pdf',
      color: 'blue'
    },
    {
      title: 'Department Magazine 2024-25 (Odd Semester)',
      file: '/documents/physics/2024-25_ODD_SEM_Magazine.pdf',
      color: 'purple'
    }
  ];

  // Default newsletters for other departments
  const defaultNewsletters = [
    {
      title: 'Newsletter 2024-25',
      file: '/documents/newsletter-2024-25.pdf',
      color: 'blue'
    },
    {
      title: 'Newsletter 2020-21 (Even Semester)',
      file: '/documents/newsletter-2020-21-even.pdf',
      color: 'purple'
    },
    {
      title: 'Newsletter 2020-21 (Odd Semester)',
      file: '/documents/newsletter-2020-21-odd.pdf',
      color: 'indigo'
    },
    {
      title: 'Newsletter 2019-20 (Even Semester)',
      file: '/documents/newsletter-2019-20-even.pdf',
      color: 'green'
    },
    {
      title: 'Newsletter 2019-20 (Odd Semester)',
      file: '/documents/newsletter-2019-20-odd.pdf',
      color: 'teal'
    },
    {
      title: 'Newsletter 2018-19 (Even Semester)',
      file: '/documents/newsletter-2018-19-even.pdf',
      color: 'amber'
    },
    {
      title: 'Newsletter 2018-19 (Odd Semester)',
      file: '/documents/newsletter-2018-19-odd.pdf',
      color: 'orange'
    },
    {
      title: 'Newsletter 2017-18 (Even Semester)',
      file: '/documents/newsletter-2017-18-even.pdf',
      color: 'red'
    },
    {
      title: 'Newsletter 2017-18 (Odd Semester)',
      file: '/documents/newsletter-2017-18-odd.pdf',
      color: 'pink'
    }
  ];

  const newsletters = departmentId === 'physics' ? physicsNewsletters : defaultNewsletters;

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; hover: string }> = {
      blue: { bg: 'bg-blue-100', text: 'text-blue-600', hover: 'hover:bg-blue-50' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-600', hover: 'hover:bg-purple-50' },
      indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600', hover: 'hover:bg-indigo-50' },
      green: { bg: 'bg-green-100', text: 'text-green-600', hover: 'hover:bg-green-50' },
      teal: { bg: 'bg-teal-100', text: 'text-teal-600', hover: 'hover:bg-teal-50' },
      amber: { bg: 'bg-amber-100', text: 'text-amber-600', hover: 'hover:bg-amber-50' },
      orange: { bg: 'bg-orange-100', text: 'text-orange-600', hover: 'hover:bg-orange-50' },
      red: { bg: 'bg-red-100', text: 'text-red-600', hover: 'hover:bg-red-50' },
      pink: { bg: 'bg-pink-100', text: 'text-pink-600', hover: 'hover:bg-pink-50' }
    };
    return colors[color];
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-aemet-navy mb-6">Newsletter / Magazines</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {newsletters.map((newsletter, index) => {
          const colorClasses = getColorClasses(newsletter.color);
          return (
            <div 
              key={index} 
              className={`bg-white rounded-lg p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow ${colorClasses.hover}`}
            >
              <div className="flex items-start gap-4">
                <div className={`${colorClasses.bg} p-3 rounded-lg flex-shrink-0`}>
                  <FileText className={`w-6 h-6 ${colorClasses.text}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-aemet-navy mb-3 text-sm">
                    {newsletter.title}
                  </h4>
                  <a 
                    href={newsletter.file} 
                    download={newsletter.title.replace(/ /g, '-') + '.pdf'}
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

export default NewsletterSection;
