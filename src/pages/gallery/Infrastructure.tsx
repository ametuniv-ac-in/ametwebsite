
import React from 'react';
import GalleryLayout from '@/components/gallery/GalleryLayout';
import ImageGallery from '@/components/gallery/ImageGallery';

const infrastructureImages = [
  {
    src: "/lovable-uploads/70e57e83-8137-4200-ba67-49579ae83d2a.png",
    alt: "AMET Training Ship - Jewel of AMET",
    title: "AMET Training Ship",
    description: "The AMET Training Ship 'Jewel of AMET' provides hands-on training for maritime students.",
  },
  {
    src: "/lovable-uploads/a8ddda87-e458-446f-b521-7c7004676328.png",
    alt: "Academy of Maritime Education and Training Building",
    title: "Main Campus Building",
    description: "The Academy of Maritime Education and Training headquarters with assembled cadets in formation.",
  },
  {
    src: "/lovable-uploads/6d9f5df7-0acc-497c-872f-25151883a310.png",
    alt: "Cadet Band",
    title: "Cadet Band Performance",
    description: "AMET's cadet band showcasing their musical talents during formal ceremonies.",
  },
  {
    src: "/lovable-uploads/a69a1bc7-e74b-444d-9465-0416dbdbbb65.png",
    alt: "Cadets in Formation",
    title: "Cadets Parade",
    description: "Disciplined cadets in formal white uniforms during an official parade ceremony.",
  },
  {
    src: "/lovable-uploads/33998a43-ebf9-4f86-abf6-f42107b0bdd0.png",
    alt: "Cadet Leader",
    title: "Cadet Leadership",
    description: "A cadet leader standing at attention, demonstrating leadership qualities fostered at AMET.",
  },
  {
    src: "/lovable-uploads/3c2e70ca-fd0e-41d1-9d11-45e3b826a1a2.png",
    alt: "Campus Aerial View",
    title: "Aerial Campus View",
    description: "Bird's eye view of the AMET campus showing the layout and cadet formations during a ceremony.",
  },
  {
    src: "/lovable-uploads/09cc74b3-1369-4174-868e-2cf46bf3ab2c.png",
    alt: "Students in Circle",
    title: "Student Collaboration",
    description: "A creative perspective of AMET students forming a circle, symbolizing teamwork and unity.",
  },
  {
    src: "/lovable-uploads/b91f19cd-7a19-444a-be71-c2f6c1b39900.png",
    alt: "Swimming Training",
    title: "Aquatic Training",
    description: "Swimming training facilities where cadets develop essential water survival skills.",
  },
  {
    src: "/lovable-uploads/e42b2d0a-5eb0-4040-b21c-def7879c4916.png",
    alt: "Female Students Working on Laptop",
    title: "Digital Learning",
    description: "Students engaged in collaborative digital learning, reflecting AMET's commitment to modern education.",
  },
  {
    src: "/lovable-uploads/9948ca2f-2890-4a07-bf5f-8dc031c90f28.png",
    alt: "Students in Library",
    title: "Library Resources",
    description: "International students utilizing AMET's extensive library resources for maritime education.",
  },
  {
    src: "/lovable-uploads/e0ae2199-15ba-4536-9eef-7ba089f17550.png",
    alt: "Students in Communication Lab",
    title: "Communications Laboratory",
    description: "Students training in the communications laboratory with professional headsets and equipment.",
  },
  {
    src: "/lovable-uploads/10daf3a6-656f-4734-b3b4-e9c946a52e93.png",
    alt: "Students with Ropes",
    title: "Rope Work Training",
    description: "Students learning essential maritime rope work skills in practical training sessions.",
  },
  {
    src: "/lovable-uploads/c348da01-9546-4056-a2a8-bc5cf7035904.png",
    alt: "Navigation Training",
    title: "Navigation Instruments",
    description: "Cadets learning to use navigation instruments as part of their practical maritime education.",
  },
  {
    src: "/lovable-uploads/e4ccb567-cd99-4852-83a8-0290a2b89921.png",
    alt: "Rowing Exercise",
    title: "Team Rowing Exercise",
    description: "Maritime trainees in a coordinated rowing exercise, developing teamwork and safety skills.",
  },
  {
    src: "/lovable-uploads/428a5c19-b2ac-4174-95cf-c40d03c17565.png",
    alt: "Female Student in Library",
    title: "Academic Research",
    description: "A student engages in academic research with maritime engineering textbooks in the AMET library.",
  },
  {
    src: "/lovable-uploads/3bb9cbdf-d568-48e4-b93e-d34a7bd78fe8.png",
    alt: "Female Student Studying",
    title: "Focused Learning",
    description: "A dedicated student studying maritime subjects in AMET's conducive learning environment.",
  },
];

const Infrastructure = () => {
  return (
    <GalleryLayout 
      title="Infrastructure Gallery" 
      description="Explore AMET University's state-of-the-art infrastructure facilities that provide an excellent learning environment for our students."
    >
      <div className="mb-8">
        <h2 className="text-xl font-bold text-aemet-navy mb-4">Campus Infrastructure Gallery</h2>
        <p className="text-gray-600 mb-6 max-w-3xl">
          Discover AMET University's comprehensive infrastructure designed to support maritime excellence. From specialized training facilities to modern academic resources, our campus offers everything students need to succeed.
        </p>
        <ImageGallery images={infrastructureImages} columns={2} />
      </div>
      
      <div className="mt-10 bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h2 className="text-xl font-bold text-aemet-navy mb-4">World-Class Infrastructure</h2>
        <p className="text-gray-700 mb-4">
          AMET University takes pride in providing state-of-the-art facilities that simulate real-world maritime environments. Our infrastructure is designed to offer students hands-on experience alongside theoretical education, preparing them for successful careers in the maritime industry.
        </p>
        <p className="text-gray-700">
          From specialized training ships to modern laboratories, our campus provides the perfect environment for learning, innovation, and growth in maritime studies.
        </p>
      </div>
    </GalleryLayout>
  );
};

export default Infrastructure;
