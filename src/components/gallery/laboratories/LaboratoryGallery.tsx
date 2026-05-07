
import React from 'react';
import ImageGallery from '@/components/gallery/ImageGallery';

// Laboratory images data
const laboratoryImages = [
  {
    src: "/lovable-uploads/c7408f2a-88cb-493f-a771-a2a044806d71.png",
    alt: "Chemistry Laboratory Research",
    title: "Chemistry Laboratory",
    description: "A researcher conducting precise measurements and analysis in the chemistry laboratory."
  },
  {
    src: "/lovable-uploads/497cf88d-9f4c-43f2-8a48-ec09f71e1aea.png",
    alt: "Welding Training Facility",
    title: "Welding Laboratory",
    description: "Student practicing welding skills in a specialized booth with proper safety equipment."
  },
  {
    src: "/lovable-uploads/13dc7690-e6da-4237-a56f-795ab00d5a9d.png",
    alt: "Engineering Demonstration",
    title: "Mechanical Engineering Lab",
    description: "Faculty demonstrating specialized equipment to students in the mechanical engineering laboratory."
  },
  {
    src: "/lovable-uploads/aa2b264f-0cea-48a1-b536-1ba3e19da7e6.png",
    alt: "Engineering Workshop",
    title: "Heavy Equipment Training",
    description: "Students receiving hands-on training with industrial equipment under expert supervision."
  },
  {
    src: "/lovable-uploads/73d628bf-2c10-4a26-8376-cf34251cfa87.png",
    alt: "Digital Learning Center",
    title: "Smart Classroom Technology",
    description: "Faculty using advanced digital display technology to teach microbiology concepts to students."
  },
  {
    src: "/lovable-uploads/7127da61-f69e-45da-940e-efb2805df08d.png",
    alt: "Process Control System",
    title: "Control Systems Laboratory",
    description: "Students learning to operate a multiprocess control system for pressure and temperature regulation."
  },
  {
    src: "/lovable-uploads/0d9ff304-8cc0-4fa1-a3c7-9c8f9c6c020e.png",
    alt: "Computer Laboratory",
    title: "Computer Science Lab",
    description: "Students engaged in programming and software development in a well-equipped computer laboratory."
  },
  {
    src: "/lovable-uploads/8e3ade7e-3be2-4524-9469-bd4222048bb9.png",
    alt: "Chemistry Titration",
    title: "Analytical Chemistry Lab",
    description: "Students conducting titration experiments in the analytical chemistry laboratory."
  },
  {
    src: "/lovable-uploads/021acd09-4109-469c-8399-06fd16692a18.png",
    alt: "Precision Engineering",
    title: "Precision Instrument Lab",
    description: "Students working with high-precision measuring and engineering instruments."
  },
  {
    src: "/lovable-uploads/7f336bc5-44e1-4563-8c4a-1c915e7e2007.png",
    alt: "Measurement Laboratory",
    title: "Material Testing Lab",
    description: "Students learning to use measurement instruments in a specialized engineering laboratory."
  },
  {
    src: "/lovable-uploads/88a15765-0816-45a0-9997-6f62218de2db.png",
    alt: "Technical Drawing",
    title: "Engineering Drawing Lab",
    description: "Students collaborating on engineering drawings and technical drafting projects."
  },
  {
    src: "/lovable-uploads/50801a9a-e018-489e-b285-35e58a2cac8b.png",
    alt: "Ship Navigation Simulator",
    title: "Maritime Navigation Simulator",
    description: "Cadets training on advanced ship navigation equipment in a state-of-the-art simulator environment."
  }
];

const LaboratoryGallery: React.FC = () => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-aemet-navy mb-4">Specialized Laboratories</h2>
      <p className="text-gray-600 mb-6 max-w-3xl">
        AMET University provides students with access to cutting-edge laboratories across various disciplines. These facilities enable practical learning, research, and innovation in maritime studies, engineering, sciences, and technology.
      </p>
      <ImageGallery images={laboratoryImages} columns={2} />
    </div>
  );
};

export default LaboratoryGallery;
