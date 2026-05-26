import React, { useEffect, useRef, useState } from 'react';
import { FileDown, GraduationCap, Calendar, Users, ArrowRight, ChevronLeft, ChevronRight, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const updates = [
  {
    title: 'Pre-PhD Thesis Presentation - Mr. A. Vidya (22.05.2026)',
    category: 'Pre-PhD',
    icon: Users,
    href: '/documents/pre-phd-thesis-presentation-a-vidya.pdf',
    isNew: true,
    expiresOn: '2026-05-22',
  },
  {
    title: 'Project Associate – I Vacancy (MoES-DOM) - Dept. of Marine Biotechnology',
    category: 'Career',
    icon: Briefcase,
    href: '/career/moes-dom-project-associate',
    isInternal: true,
    isNew: true,
    expiresOn: '2026-05-19',
  },
  {
    title: 'Instruction to Candidates - Model Exams April 2026 & End Sem Exams May 2026',
    category: 'Examinations',
    icon: Calendar,
    href: '/documents/Instruction_to_the_Candidates_May_2026.pdf',
    expiresOn: '2026-05-31',
  },
  {
    title: 'End Semester (Arrear) Examinations – May 2026 Time Table',
    category: 'Examinations',
    icon: Calendar,
    href: '/documents/ESE_ARREAR_TIME_TABLE_MAY_2026_OVERALL.pdf',
    expiresOn: '2026-05-31',
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
    expiresOn: '2026-02-20',
  },
  {
    title: 'Model Examinations – April 2026 for all UG and PG Programs',
    category: 'Examinations',
    icon: Calendar,
    href: '/documents/MODEL_EXAM_TIME_TABLE_APRIL_2026_MAIN_CAMPUS.pdf',
    expiresOn: '2026-04-30',
  },
  {
    title: 'End Semester Examinations – April 2026 for all UG and PG Programs',
    category: 'Examinations',
    icon: Calendar,
    href: '/documents/ESE_EXAM_TIME_TABLE_MAY_2026_MAIN_CAMPUS.pdf',
    expiresOn: '2026-05-15',
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
    expiresOn: '2026-07-31',
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
    expiresOn: '2026-05-31',
  },
  {
    title: 'Revised Academic Calendar 2025-26 (Sem 2-4)',
    category: 'Academic Calendar',
    icon: Calendar,
    href: '/documents/updates/revised-academic-calendar-2025-26-2-3-4.pdf',
    expiresOn: '2026-08-31',
  },
  {
    title: 'PhD Course Work Exams - Dec 2025',
    category: 'PhD',
    icon: GraduationCap,
    href: '/documents/updates/PhD-Course-Work-Exams-Dec-2025.pdf',
    expiresOn: '2025-12-31',
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

const isExpired = (expiresOn?: string) => {
  if (!expiresOn) return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const exp = new Date(expiresOn + 'T23:59:59');
  return today.getTime() > exp.getTime();
};

const visibleUpdates = updates.filter((u) => !isExpired(u.expiresOn));

const cardColors = [
  { cardBg: 'bg-blue-50', iconBg: 'bg-blue-100', iconText: 'text-blue-600', border: 'border-blue-200 hover:border-blue-400', accent: 'text-blue-700' },
  { cardBg: 'bg-green-50', iconBg: 'bg-green-100', iconText: 'text-green-600', border: 'border-green-200 hover:border-green-400', accent: 'text-green-700' },
  { cardBg: 'bg-purple-50', iconBg: 'bg-purple-100', iconText: 'text-purple-600', border: 'border-purple-200 hover:border-purple-400', accent: 'text-purple-700' },
  { cardBg: 'bg-amber-50', iconBg: 'bg-amber-100', iconText: 'text-amber-600', border: 'border-amber-200 hover:border-amber-400', accent: 'text-amber-700' },
  { cardBg: 'bg-teal-50', iconBg: 'bg-teal-100', iconText: 'text-teal-600', border: 'border-teal-200 hover:border-teal-400', accent: 'text-teal-700' },
  { cardBg: 'bg-rose-50', iconBg: 'bg-rose-100', iconText: 'text-rose-600', border: 'border-rose-200 hover:border-rose-400', accent: 'text-rose-700' },
];

const LatestUpdatesSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const manualPauseRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    const scrollSpeed = 0.6;

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

  const pauseTemporarily = () => {
    setIsPaused(true);
    if (manualPauseRef.current) clearTimeout(manualPauseRef.current);
    manualPauseRef.current = setTimeout(() => setIsPaused(false), 1200);
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      pauseTemporarily();
      scrollRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      pauseTemporarily();
      scrollRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 bg-[#f8fafc]">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-8 gap-4 flex-wrap">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Latest Updates</h2>
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

        <div className="relative">
          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-[#f8fafc] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-[#f8fafc] to-transparent z-10" />

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto pb-6 pt-2 scrollbar-hide"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {visibleUpdates.map((update, index) => {
              const target = update.isInternal ? '_self' : '_blank';
              const rel = update.isInternal ? undefined : 'noopener noreferrer';
              const c = cardColors[index % cardColors.length];

              return (
                <a
                  key={index}
                  href={update.href}
                  target={target}
                  rel={rel}
                  className={`group relative flex-shrink-0 w-[calc((100%-2.5rem)/3)] min-w-[260px] rounded-xl p-4 ${c.cardBg} border ${c.border} transition-all duration-300 hover:shadow-md`}
                >
                  {update.isNew && (
                    <span className="absolute -top-2 -right-2 inline-flex items-center gap-1 px-2.5 py-1 bg-red-500 text-white text-[9px] font-bold rounded-full uppercase tracking-widest shadow-md z-10">
                      <span className="w-1 h-1 rounded-full bg-white animate-pulse" />
                      Latest
                    </span>
                  )}
                  <div className="flex items-start gap-3">
                    <div className={`p-2 ${c.iconBg} rounded-lg shrink-0`}>
                      <update.icon className={`h-4 w-4 ${c.iconText}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className={`text-[10px] font-bold uppercase tracking-wider ${c.accent}`}>
                        {update.category}
                      </span>
                      <h3 className="font-semibold text-foreground text-sm leading-snug mt-0.5 line-clamp-2">
                        {update.title}
                      </h3>
                      <div className="mt-2 flex items-center text-xs text-muted-foreground">
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
      </div>
    </section>
  );
};

export default LatestUpdatesSection;
