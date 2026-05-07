import React, { useEffect, useRef, useState } from 'react';
import { FileDown, GraduationCap, Calendar, Users, ArrowRight, ChevronLeft, ChevronRight, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const updates = [
  {
    title: 'Instruction to Candidates - Model Exams April 2026 & End Sem Exams May 2026',
    category: 'Examinations',
    icon: Calendar,
    href: '/documents/Instruction_to_the_Candidates_May_2026.pdf',
  },
  {
    title: 'End Semester (Arrear) Examinations – May 2026 Time Table',
    category: 'Examinations',
    icon: Calendar,
    href: '/documents/ESE_ARREAR_TIME_TABLE_MAY_2026_OVERALL.pdf',
  },
  {
    title: 'Notification for Pre-PhD Thesis Presentation of Mr. Mohanbabu Senthil',
    category: 'PhD',
    icon: Users,
    href: '/documents/updates/pre-phd-thesis-presentation-mohanbabu-senthil.pdf',
  },
  {
    title: 'Notification for Pre-PhD Thesis Presentation of Ms. J. Suganthi',
    category: 'PhD',
    icon: Users,
    href: '/documents/updates/pre-phd-thesis-presentation-j-suganthi.pdf',
  },
  {
    title: 'MoES-DOM Technical Assistant Vacancy - Dept. of Marine Biotechnology',
    category: 'Career',
    icon: Briefcase,
    href: '/career/moes-dom-technical-assistant',
    isInternal: true,
  },
  {
    title: 'Model Examinations – April 2026 for all UG and PG Programs',
    category: 'Examinations',
    icon: Calendar,
    href: '/documents/MODEL_EXAM_TIME_TABLE_APRIL_2026_MAIN_CAMPUS.pdf',
  },
  {
    title: 'End Semester Examinations – April 2026 for all UG and PG Programs',
    category: 'Examinations',
    icon: Calendar,
    href: '/documents/ESE_EXAM_TIME_TABLE_MAY_2026_MAIN_CAMPUS.pdf',
  },
  {
    title: 'PhD Viva Voce Examination - Ms. R. K. Gayathri',
    category: 'PhD Viva',
    icon: Users,
    href: '/documents/updates/PhD-Viva-RK-Gayathri.pdf',
  },
  {
    title: 'PhD Viva Voce Examination - Mr. Aristo L',
    category: 'PhD Viva',
    icon: Users,
    href: '/documents/updates/PhD-Viva-Aristo-L.pdf',
  },
  {
    title: 'Admission Open 2026 - 2027',
    category: 'Admissions',
    icon: GraduationCap,
    href: '/admissions',
    isInternal: true,
  },
  {
    title: 'UGC Approved OL/ODL Programmes - Admissions Open 2025-26',
    category: 'Admissions',
    icon: GraduationCap,
    href: 'https://auol.in/',
    isExternal: true,
  },
  {
    title: '15th Convocation Notification',
    category: 'Convocation',
    icon: GraduationCap,
    href: '/documents/updates/15th-Convocation-Notification-2.pdf',
  },
  {
    title: 'Revised Academic Calendar 2025-26 (Sem 1)',
    category: 'Academic Calendar',
    icon: Calendar,
    href: '/documents/updates/revised-academic-calendar-2025-26-1.pdf',
  },
  {
    title: 'Revised Academic Calendar 2025-26 (Sem 2-4)',
    category: 'Academic Calendar',
    icon: Calendar,
    href: '/documents/updates/revised-academic-calendar-2025-26-2-3-4.pdf',
  },
  {
    title: 'PhD Course Work Exams - Dec 2025',
    category: 'PhD',
    icon: GraduationCap,
    href: '/documents/updates/PhD-Course-Work-Exams-Dec-2025.pdf',
  },
  {
    title: 'PhD Viva - K. Manikandan',
    category: 'PhD Viva',
    icon: Users,
    href: '/documents/updates/PhD-Viva-KManikandan.pdf',
  },
  {
    title: 'PhD Viva - V. Muralidharan',
    category: 'PhD Viva',
    icon: Users,
    href: '/documents/updates/PhD-Viva-VMuralidharan.pdf',
  },
];

const cardColors = [
  { cardBg: 'bg-blue-50', iconBg: 'bg-blue-100', iconText: 'text-blue-600', border: 'border-blue-200 hover:border-blue-400' },
  { cardBg: 'bg-green-50', iconBg: 'bg-green-100', iconText: 'text-green-600', border: 'border-green-200 hover:border-green-400' },
  { cardBg: 'bg-purple-50', iconBg: 'bg-purple-100', iconText: 'text-purple-600', border: 'border-purple-200 hover:border-purple-400' },
  { cardBg: 'bg-orange-50', iconBg: 'bg-orange-100', iconText: 'text-orange-600', border: 'border-orange-200 hover:border-orange-400' },
  { cardBg: 'bg-teal-50', iconBg: 'bg-teal-100', iconText: 'text-teal-600', border: 'border-teal-200 hover:border-teal-400' },
  { cardBg: 'bg-rose-50', iconBg: 'bg-rose-100', iconText: 'text-rose-600', border: 'border-rose-200 hover:border-rose-400' },
];

const LatestUpdatesSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollSpeed = 1;

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;
        
        // Reset scroll when reaching the end
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Latest Updates</h2>
            <p className="text-muted-foreground mt-1">Stay informed with the latest announcements</p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollLeft}
              className="hidden md:flex"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollRight}
              className="hidden md:flex"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button asChild variant="default" className="ml-2">
              <Link to="/latest-updates">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
        {updates.map((update, index) => {
            const colorScheme = cardColors[index % cardColors.length];
            return (
              <a
                key={index}
                href={update.href}
                target={update.isInternal ? '_self' : '_blank'}
                rel={update.isInternal ? undefined : 'noopener noreferrer'}
                className={`flex-shrink-0 w-[300px] ${colorScheme.cardBg} ${colorScheme.border} rounded-lg p-5 hover:shadow-lg transition-all duration-300 group`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 ${colorScheme.iconBg} rounded-lg transition-colors`}>
                    <update.icon className={`h-5 w-5 ${colorScheme.iconText}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      {update.category}
                    </span>
                    <h3 className="font-semibold text-foreground mt-1 line-clamp-2 transition-colors">
                      {update.title}
                    </h3>
                    <div className="mt-3 flex items-center text-sm text-muted-foreground transition-colors">
                      {update.isInternal || update.isExternal ? (
                        <>View Details <ArrowRight className="ml-1 h-3 w-3" /></>
                      ) : (
                        <>Download <FileDown className="ml-1 h-3 w-3" /></>
                      )}
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LatestUpdatesSection;
