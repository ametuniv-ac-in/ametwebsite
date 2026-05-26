
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import HeroSlider from '@/components/HeroSlider';
import AlertBanner, { AlertInfo } from '@/components/AlertBanner';
import WhyChooseSlider from '@/components/WhyChooseSlider';
import FacultySection from '@/components/FacultySection';
import ModuleCourses from '@/components/ModuleCourses';
import CallToAction from '@/components/CallToAction';
import LatestUpdatesSection from '@/components/LatestUpdatesSection';

import StudentStories from '@/components/StudentStories';
import AdmissionsFloatingCard from '@/components/AdmissionsFloatingCard';
import MaritimeFoundationFloatingCard from '@/components/MaritimeFoundationFloatingCard';
import ImpactNumbers from '@/components/ImpactNumbers';


const Index = () => {
  // Sample alerts - these could be fetched from an API in a real application
  const alerts: AlertInfo[] = [
    {
      type: 'announcement',
      title: 'Instruction to Candidates – Model Exams (April 2026) & End Semester Exams (May 2026)',
      description: 'Important instructions for candidates appearing for Model Examinations and End Semester (Regular & Arrear) Examinations',
      link: {
        text: 'View Instructions',
        url: '/documents/Instruction_to_the_Candidates_May_2026.pdf'
      }
    },
    {
      type: 'announcement',
      title: 'End Semester (Arrear) Examinations – May 2026',
      description: 'Time Tables for End Semester Arrear Examinations released for all UG and PG Programs',
      link: {
        text: 'View Timetable',
        url: '/documents/ESE_ARREAR_TIME_TABLE_MAY_2026_OVERALL.pdf'
      }
    },
    {
      type: 'announcement',
      title: 'PhD Admissions Open for 2025',
      description: 'Apply now for our doctoral programs with scholarships available',
      link: {
        text: 'Apply now',
        url: '/application-forms'
      }
    },
    {
      type: 'announcement',
      title: 'Ph.D Viva Voce Examination of Mr. P. N. Vijayakumar',
      description: 'Viva Voce Examination on 16.04.2026 at 11:00 AM at A/V Hall, Dr. VBS Rajan Library',
      link: {
        text: 'View Notification',
        url: '/documents/phd-viva-voce-examination-p-n-vijayakumar.pdf'
      }
    },
    {
      type: 'announcement',
      title: 'Ph.D Viva Voce Examination of Mr. John Jayaraj',
      description: 'Viva Voce Examination on 09.04.2026 at 11:00 AM at A/V Hall, Dr. VBS Rajan Library',
      link: {
        text: 'View Notification',
        url: '/documents/phd-viva-voce-examination-john-jayaraj.pdf'
      }
    },
    {
      type: 'announcement',
      title: 'Pre-PhD Thesis Presentation of Mr. Nazeebur Rehman Syed',
      description: 'Pre-PhD Thesis Presentation at A/V Hall, Dr. VBS Rajan Library on 28.04.2026 at 11.00 AM',
      link: {
        text: 'View Notification',
        url: '/documents/pre-phd-thesis-presentation-nazeebur-rehman-syed.pdf'
      }
    },
    {
      type: 'announcement',
      title: 'Pre-PhD Thesis Presentation of Mr. Bora Suri Venkata Reddy',
      description: 'Pre-PhD Thesis Presentation at A/V Hall, Dr. VBS Rajan Library on 22.04.2026 at 11.00 AM',
      link: {
        text: 'View Notification',
        url: '/documents/pre-phd-thesis-presentation-bora-suri-venkata-reddy.pdf'
      }
    },
    {
      type: 'info',
      title: 'New Research Partnership',
      description: 'AMET partners with Global Maritime Association for advanced research',
      link: {
        text: 'Discover more',
        url: '/research-ecosystem'
      }
    }
  ];

  // Add smooth scrolling for anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        if (!href) return;
        
        const targetElement = document.querySelector(href);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - 100, // Offset for fixed header
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <Layout>
      {/* Hero Section with Video Slider */}
      <HeroSlider />
      
      {/* Alert Banner for important announcements */}
      <AlertBanner alerts={alerts} />
      
      {/* Latest Updates Section */}
      <LatestUpdatesSection />
      {/* Why Choose AMET University */}
      <WhyChooseSlider />
      
      {/* Areas of Study / Faculties */}
      <FacultySection />
      
      {/* Module Courses */}
      <ModuleCourses />
      
      {/* Call to Action - Apply Now */}
      <CallToAction type="apply" />
      
      
      
      {/* Student Stories */}
      <StudentStories />
      
      {/* Call to Action - Campus Visit */}
      <CallToAction type="visit" />
      
      {/* Impact Numbers - Added before footer */}
      <ImpactNumbers />
      
      {/* Floating Admissions Card */}
      <AdmissionsFloatingCard />

      {/* Floating Maritime Foundation Awards Widget */}
      <MaritimeFoundationFloatingCard />
    </Layout>
  );
};

export default Index;
