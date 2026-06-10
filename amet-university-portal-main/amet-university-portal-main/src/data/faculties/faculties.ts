
import { Ship, Cog, Briefcase, BookText, HeartPulse, Cpu, GraduationCap, Plane, Computer, Stethoscope } from "lucide-react";
import { Faculty } from "./types";

export const faculties: Faculty[] = [
  {
    id: 'maritime',
    name: 'Faculty of Maritime Studies',
    description: 'Premier institution for maritime education and training',
    icon: Ship,
    color: '#152043',
    programs: ['B.E Marine Engineering', 'B.Sc Nautical Science', 'Advanced Diploma in Nautical Science', 'Electro Technical Officer'],
    pdfProfile: '#' // Add PDF URL here
  },
  {
    id: 'engineering-tech',
    name: 'Faculty of Engineering and Technology',
    description: 'Advanced engineering programs in mechanical, naval architecture and offshore engineering, and technology disciplines',
    icon: Cpu,
    color: '#6E59A5',
    programs: ['B.Tech. Computer Science and Engineering', 'B.E. Naval Architecture & Offshore Engineering', 'M.E. Petroleum Engineering', 'B.E. Mechanical Engineering', 'B.E. Electrical and Computer Engineering'],
    pdfProfile: '#' // Add PDF URL here
  },
  {
    id: 'management',
    name: 'Faculty of Management Studies',
    description: 'Advanced management studies and professional development',
    icon: Briefcase,
    color: '#38a169',
    programs: ['MBA Hospital Administration', 'MBA Shipping and Logistics Management', 'BBA Shipping'],
    pdfProfile: '#' // Add PDF URL here
  },
  {
    id: 'computing-sciences',
    name: 'Faculty of Advanced Computing Sciences',
    description: 'Cutting-edge education in computer science and information technology',
    icon: Computer,
    color: '#2563eb',
    programs: ['B.Sc. Data Science', 'B.Sc. Artificial Intelligence and Machine Learning', 'B.Sc. (Hons) Robotics and Artificial Intelligence', 'Ph.D in Computing Sciences'],
    pdfProfile: '#' // Add PDF URL here
  },
  {
    id: 'commerce',
    name: 'Faculty of Commerce',
    description: 'Excellence in commerce and business education',
    icon: BookText,
    color: '#e53e3e',
    programs: ['B.Com (General)', 'Financial Markets', 'Accounting Systems', 'Business Analytics'],
    pdfProfile: '#' // Add PDF URL here
  },
  {
    id: 'aviation',
    name: 'Faculty of Aviation Studies',
    description: 'Specialized programs for aviation industry professionals',
    icon: Plane,
    color: '#3182ce',
    programs: ['B.Sc. Aviation', 'B.A. Airlines and Airport Management', 'Aircraft Maintenance'],
    pdfProfile: '#' // Add PDF URL here
  },
  {
    id: 'life-sciences',
    name: 'Faculty of Life Sciences',
    description: 'Innovative research in life sciences and biotechnology',
    icon: HeartPulse,
    color: '#d97706',
    programs: ['B.Tech Food Processing Technology', 'B.Sc. Food Processing Technology and Management', 'M.Sc. Biotechnology', 'M.Sc. Marine Biotechnology'],
    pdfProfile: '#' // Add PDF URL here
  },
  {
    id: 'science-humanities',
    name: 'Faculty of Science and Humanities',
    description: 'Integrating scientific inquiry with humanistic understanding',
    icon: GraduationCap,
    color: '#4B5563',
    programs: ['Ph.D. Physics', 'Ph.D. Mathematics', 'Ph.D. Chemistry', 'Ph.D. English', 'Ph.D. Physical Education'],
    pdfProfile: '#' // Add PDF URL here
  },
  {
    id: 'allied-health-sciences',
    name: 'Faculty of Allied Health Sciences',
    description: 'Preparing skilled healthcare professionals for diagnostic, therapeutic, and preventive healthcare services',
    icon: Stethoscope,
    color: '#059669',
    programs: ['B.Sc. Allied Health Sciences'],
    pdfProfile: '#' // Add PDF URL here
  }
];
