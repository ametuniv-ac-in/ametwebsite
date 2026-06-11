import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileDown, Calendar, GraduationCap, Users, Briefcase } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const updates = [
  {
    title: 'Pre-PhD Thesis Presentation - Mr. A. Marimuthu (27.05.2026)',
    category: 'Pre-PhD',
    icon: Users,
    href: '/documents/pre-phd-thesis-presentation-a-marimuthu.pdf',
  },
  {
    title: 'Pre-PhD Thesis Presentation - Mr. A. Vidya (22.05.2026)',
    category: 'Pre-PhD',
    icon: Users,
    href: '/documents/pre-phd-thesis-presentation-a-vidya.pdf',
  },
  {
    title: 'Project Associate – I Vacancy (MoES-DOM) - Dept. of Marine Biotechnology',
    category: 'Career',
    icon: Briefcase,
    href: '/career/moes-dom-project-associate',
  },
  {
    title: 'Pre-PhD Thesis Presentation - Mr. Samson Joseph (14.05.2026)',
    category: 'Pre-PhD',
    icon: Users,
    href: '/documents/pre-phd-thesis-presentation-samson-joseph.pdf',
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
    title: 'UGC Approved Online / Open Distance Learning (OL/ODL) Programmes - Admissions Open 2025-26',
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
    title: 'Revised Academic Calendar 2025-26 (Semester 1)',
    category: 'Academic Calendar',
    icon: Calendar,
    href: '/documents/updates/revised-academic-calendar-2025-26-1.pdf',
  },
  {
    title: 'Revised Academic Calendar 2025-26 (Semester 2, 3 & 4)',
    category: 'Academic Calendar',
    icon: Calendar,
    href: '/documents/updates/revised-academic-calendar-2025-26-2-3-4.pdf',
  },
  {
    title: 'PhD Course Work Examinations - December 2025',
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
  {
    title: 'Pre-PhD - V. Sathya',
    category: 'Pre-PhD',
    icon: Users,
    href: '/documents/updates/Pre-PhD-VSathya.pdf',
  },
  {
    title: 'Pre-PhD - V. Sathya (Part 2)',
    category: 'Pre-PhD',
    icon: Users,
    href: '/documents/updates/Pre-PhD-VSathya1.pdf',
  },
  {
    title: 'Pre-PhD - A. Dennis',
    category: 'Pre-PhD',
    icon: Users,
    href: '/documents/updates/Pre-PhD-ADennis.pdf',
  },
  {
    title: 'Approved Medical Examiners - May 2024',
    category: 'Medical',
    icon: Users,
    href: '/documents/updates/Approved-Medical-Examiners-May-2024.pdf',
  },
];

const LatestUpdates = () => {
  return (
    <Layout title="Latest Updates">
      <div className="bg-gradient-to-b from-muted/50 to-background py-12">
        <div className="container mx-auto px-4">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Latest Updates</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Latest Updates
          </h1>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            Stay informed with the latest announcements, notifications, and updates from AMET University.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {updates.map((update, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <update.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs font-medium text-primary uppercase tracking-wide">
                        {update.category}
                      </span>
                      <h3 className="font-semibold text-foreground mt-1 mb-3 line-clamp-2">
                        {update.title}
                      </h3>
                      {'isInternal' in update && update.isInternal ? (
                        <Button asChild size="sm" variant="default">
                          <a href={update.href}>
                            View Details
                          </a>
                        </Button>
                      ) : 'isExternal' in update && update.isExternal ? (
                        <Button asChild size="sm" variant="default">
                          <a href={update.href} target="_blank" rel="noopener noreferrer">
                            View Details
                          </a>
                        </Button>
                      ) : (
                        <Button asChild size="sm" variant="outline">
                          <a href={update.href} target="_blank" rel="noopener noreferrer">
                            <FileDown className="h-4 w-4 mr-2" />
                            Download
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LatestUpdates;
