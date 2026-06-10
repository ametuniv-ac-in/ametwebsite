
import { FooterLink } from './FooterLinkSection';

interface FooterSection {
  title: string;
  links: FooterLink[];
}

export const footerLinks: FooterSection[] = [
  {
    title: 'Mandatory Disclosures',
    links: [
      { label: 'Mandatory Disclosure', href: '/disclosures/mandatory' },
      { label: 'Mandatory Disclosure for ODL/OL', href: '/disclosures/odl-ol' },
      { label: 'Public Self-Disclosure', href: '/disclosures/public-self' },
      { label: 'International Collaborations', href: '/international-collaborations' },
      { label: 'MoU 2022-23 and 2023-24', href: '/mou' },
      { label: 'Center for Outreach Programs', href: '/outreach-programs' },
      { label: 'Student Corner', href: '/student-corner' },
      { label: 'FCRA Disclosure', href: '/disclosures/fcra' },
    ]
  },
  {
    title: 'Campus Resources',
    links: [
      { label: 'Student Corner', href: '/student-corner' },
      { label: 'Alumni', href: 'https://ametuniversity.com/alumni/', target: '_blank' },
      { label: 'Centre for Outreach Programs', href: '/outreach-programs' },
      { label: 'IQAC', href: '/iqac' },
      { label: 'IIIC', href: '/iiic' },
      { label: 'ACEII', href: '/aceii' },
      { label: 'OPRC Level-2', href: '/oprc-level-2' },
    ]
  },
  {
    title: 'Student Support',
    links: [
      { label: 'National Ragging Prevention Programme', href: '/anti-ragging' },
      { label: 'Committee Against Sexual Harassment', href: '/sexual-harassment' },
      { label: 'Students Grievance Redressal', href: '/grievance-redressal' },
      { label: 'Feedback', href: '/feedback' },
      { label: 'UGC e-Samadhan', href: 'https://samadhaan.ugc.ac.in/', target: '_blank' },
      { label: 'AMET - LMS', href: 'https://lms.amet.edu', target: '_blank' },
      { label: 'Staff Welfare Committee', href: '/staff-welfare-committee' },
    ]
  },
  {
    title: 'Media & Resources',
    links: [
      { label: 'AMET Waves', href: '/amet-waves' },
      { label: 'AMET Magazines', href: '/magazines' },
      { label: 'Video Lectures', href: '/video-lectures' },
      { label: 'Latest Updates', href: '/latest-updates' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Refund Policy', href: '/refund-policy' },
      { label: 'Sitemap', href: '/sitemap' },
    ]
  }
];
