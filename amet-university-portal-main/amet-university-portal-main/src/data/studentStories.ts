
import ritochitBose from '@/assets/placements/ritochit-bose.jpg';
import sudeep from '@/assets/placements/sudeep.jpg';
import adithyaP from '@/assets/placements/adithya-p.jpg';
import agash from '@/assets/placements/agash.jpg';
import vamsiS from '@/assets/placements/vamsi-s.jpg';
import keerthivasanK from '@/assets/placements/keerthivasan-k.jpg';
import rifanaN from '@/assets/placements/rifana-n.jpg';
import mohamedUmar from '@/assets/placements/mohamed-umar.jpg';
import sakthivelan from '@/assets/placements/sakthivelan.jpg';
import harshini from '@/assets/placements/harshini.jpg';
import jayaGanesh from '@/assets/placements/jaya-ganesh.jpg';
import annaJob from '@/assets/placements/anna-job.jpg';
import sanjanaJT from '@/assets/placements/sanjana-jt.jpg';

export interface StudentStory {
  id: string;
  name: string;
  degree: string;
  company: string;
  imageUrl: string;
}

export const studentStories: StudentStory[] = [
  {
    id: "student1",
    name: "RITOCHIT BOSE",
    degree: "B.Sc Nautical Science",
    company: "Maersk Line Fleet Management",
    imageUrl: ritochitBose
  },
  {
    id: "student2",
    name: "SUDEEP",
    degree: "B.Sc Nautical Science",
    company: "Maersk Line Fleet Management",
    imageUrl: sudeep
  },
  {
    id: "student3",
    name: "ADITHYA.P",
    degree: "B.Sc Nautical Science",
    company: "Maersk Line Fleet Management",
    imageUrl: adithyaP
  },
  {
    id: "student4",
    name: "KEERTHIVASAN.K",
    degree: "B.E Marine Engineering",
    company: "Maersk Line Fleet Management",
    imageUrl: keerthivasanK
  },
  {
    id: "student5",
    name: "RIFANA.N",
    degree: "B.E Marine Engineering",
    company: "Maersk Line Fleet Management",
    imageUrl: rifanaN
  },
  {
    id: "student6",
    name: "MOHAMED UMAR",
    degree: "B.E Marine Engineering",
    company: "Maersk Line Fleet Management",
    imageUrl: mohamedUmar
  },
  {
    id: "student7",
    name: "SAKTHIVELAN",
    degree: "B.B.A",
    company: "Khimji Ramdas Group",
    imageUrl: sakthivelan
  },
  {
    id: "student8",
    name: "HARSHINI",
    degree: "B.B.A",
    company: "PacMak DB Naval Charterers & Consultants",
    imageUrl: harshini
  },
  {
    id: "student9",
    name: "JAYA GANESH",
    degree: "B.B.A",
    company: "PacMak DB Naval Charterers & Consultants",
    imageUrl: jayaGanesh
  },
  {
    id: "student10",
    name: "ANNA JOB",
    degree: "M.B.A",
    company: "JSW Paradip Terminal Pvt Ltd",
    imageUrl: annaJob
  },
  {
    id: "student11",
    name: "SANJANA.J.T",
    degree: "B.E Naval Architecture",
    company: "Seatrium Limited",
    imageUrl: sanjanaJT
  },
  {
    id: "student12",
    name: "AGASH",
    degree: "B.E Mechanical Engineering",
    company: "Tag Corporation",
    imageUrl: agash
  },
  {
    id: "student13",
    name: "VAMSI. S",
    degree: "B.E EEE",
    company: "KDU Marine Equipment Trading & Maintenance",
    imageUrl: vamsiS
  }
];
