import React from 'react';
import Layout from '@/components/Layout';
import { Users, BookOpen, Heart, Activity, PenTool, UserCheck } from 'lucide-react';

const OutreachPrograms: React.FC = () => {
  const overallCoordinators = [
    { name: "Technical Clubs", coordinator: "Mr. Neela Prasad, Asst. Prof., Department of Marine Engineering" },
    { name: "Social Connect Clubs", coordinator: "Dr. Haroon Basha, Asso. Prof., Department of Physics" },
    { name: "Arts and Cultural Clubs", coordinator: "Mrs. Maria Surendran, Soft Skill Trainer, CCPD" },
    { name: "Health and Wellness Clubs", coordinator: "Dr. A. Thanikasalam, Associate Professor, Department of Marine Engineering" },
    { name: "Literary Clubs", coordinator: "Dr. S. Krishna, Associate Professor, Department of English" }
  ];

  const divisions = [
    {
      title: "Technical Clubs",
      icon: <BookOpen className="w-6 h-6" />,
      coordinator: "Mr. Neela Prasad, Asst. Prof., Department of Marine Engineering",
      clubs: [
        { name: "Media & Digital Creators Club", coordinator: "Dr. A. Dhanasekaran, Asso. Professor, Department of Mechanical Engineering" },
        { name: "Toast Masters Club", coordinator: "Mr. T. Johnson, Director - CCPD" }
      ]
    },
    {
      title: "Social Connect Clubs",
      icon: <Users className="w-6 h-6" />,
      coordinator: "Dr. Haroon Basha, Asso. Prof., Department of Physics",
      clubs: [
        { name: "National Service Scheme (NSS) U-1", coordinator: "Mr. V. Sivakumar, Asst. Prof., Department of Marine Engineering" },
        { name: "National Service Scheme (NSS) U-2", coordinator: "Mr. Neela Prasad, Asst. Prof., Department of Marine Engineering" },
        { name: "National Service Scheme (NSS) U-3", coordinator: "Dr. Haroon Basha, Asso. Prof., Department of Physics" },
        { name: "National Cadet Corps (NCC) – Naval Unit", coordinator: "Sub.Lt. A. Prem Anandh, Asst. Prof., Department of NA&OE" },
        { name: "National Cadet Corps (NCC) – Army Unit", coordinator: "Dr. Anitha Rexalin Devaraj, Asso. Prof., Department of Physics" },
        { name: "Youth Red Cross (YRC)", coordinator: "Dr. Santharaman P., Asso. Professor, Department of Chemistry" },
        { name: "Leo Club", coordinator: "Mr. S. Prithvi, Asst. Prof., ABS" },
        { name: "Eco Club", coordinator: "Mrs. Manju K., Asst. Prof., Department of NA&OE" },
        { name: "Peace Club", coordinator: "Mrs. V. Ramabhai, Asst. Prof., Department of FPT" },
        { name: "Rotaract Club", coordinator: "Dr. S. Krishna, Associate Professor, Department of English" },
        { name: "Women Empowerment Cell", coordinator: "Dr. K. Meenatchi Somasundari, Asso. Professor, ABS" },
        { name: "AMET News Club", coordinator: "Mr. S. Ramaraju, Asst. Prof., Department of English" },
        { name: "Heritage Club", coordinator: "Dr. P. Jayakumar, Asst. Prof., Department of English" },
        { name: "Unnat Bharath Abhiyan", coordinator: "Dr. R. Vijayaraj, Asst. Prof., Department of Marine Biotechnology" }
      ]
    },
    {
      title: "Arts and Cultural Clubs",
      icon: <PenTool className="w-6 h-6" />,
      coordinator: "Mrs. Maria Surendran, Soft Skill Trainer, CCPD",
      clubs: [
        { name: "Fine Arts Club", coordinator: "Mrs. Maria Surendran, Soft Skill Trainer, CCPD" },
        { name: "Cultural Club", coordinator: "Mrs. Maria Surendran, Soft Skill Trainer, CCPD" },
        { name: "Humour Club", coordinator: "Dr. K.M. Mahaboob Sheriff, Asso. Prof., Department of Mechanical Engineering" },
        { name: "Pixel Club", coordinator: "Dr. R. Karthick Manoj, Asst. Prof., Department of EEE" }
      ]
    },
    {
      title: "Health and Wellness Clubs",
      icon: <Heart className="w-6 h-6" />,
      coordinator: "Dr. A. Thanikasalam, Associate Professor, Department of Marine Engineering",
      clubs: [
        { name: "Centre for Yoga & Human Excellence", coordinator: "Dr. A. Thanikasalam, Asst. Prof., Department of Marine Engineering" },
        { name: "Nutrition Club", coordinator: "Ms. J. Shanmuga Priya, Asst. Professor, Department of FPT" },
        { name: "AMET Fitness Club", coordinator: "Mr. N. Selvakumar, Asst. Prof., Department of NA&OE" },
        { name: "AMET Anti-Drugs Club", coordinator: "Dr. C. Amirthakumar, Asst. Professor, Department of Physics" }
      ]
    },
    {
      title: "Literary Clubs",
      icon: <Activity className="w-6 h-6" />,
      coordinator: "Dr. S. Krishna, Associate Professor, Department of English",
      clubs: [
        { name: "English Literary Club", coordinator: "Dr. S. Krishna, Asst. Prof., Department of English" },
        { name: "AMET Readers Club", coordinator: "Mr. A. R. Sivaram, Asst. Prof., Department of NA&OE" },
        { name: "Tutorial Club", coordinator: "Dr. V. T. Vimalananth, Asst. Prof., Department of Mechanical Engineering" }
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-aemet-navy to-aemet-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">CENTRE FOR OUTREACH PROGRAMS</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Fostering holistic development through diverse clubs and activities that enhance student engagement and community service
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        {/* Director Section */}
        <div className="mb-12 bg-white rounded-lg shadow-md p-8">
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-aemet-blue/10 rounded-full mx-auto mb-4">
              <UserCheck className="w-8 h-8 text-aemet-blue" />
            </div>
            <h2 className="text-2xl font-bold text-aemet-navy mb-2">Director – Outreach Programs</h2>
            <p className="text-lg text-gray-700 font-medium">Mr. S. Ramaraju</p>
          </div>
        </div>

        {/* Overall Coordinators Table */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-aemet-navy mb-6 text-center">OVERALL COORDINATORS OF VARIOUS DIVISIONS</h3>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-aemet-navy text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Sl. No</th>
                    <th className="px-6 py-4 text-left">Name of the Club</th>
                    <th className="px-6 py-4 text-left">Name of the Overall Coordinator</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {overallCoordinators.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{index + 1}</td>
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">{item.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{item.coordinator}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Faculty Coordinators of Various Clubs */}
        <div>
          <h3 className="text-2xl font-bold text-aemet-navy mb-8 text-center">FACULTY COORDINATORS OF VARIOUS CLUBS/CELLS/CENTRES/UNITS</h3>
          
          {divisions.map((division, divIndex) => (
            <div key={divIndex} className="mb-10">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gradient-to-r from-aemet-blue to-aemet-navy text-white p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 bg-white/20 rounded-lg">
                      {division.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">{division.title}</h4>
                      <p className="text-blue-100 text-sm">Overall Coordinator: {division.coordinator}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Club Name</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Faculty Coordinators</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {division.clubs.map((club, clubIndex) => (
                          <tr key={clubIndex} className="hover:bg-gray-50">
                            <td className="px-4 py-3 text-sm font-medium text-gray-900">{club.name}</td>
                            <td className="px-4 py-3 text-sm text-gray-700">{club.coordinator}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-gradient-to-r from-aemet-blue/5 to-aemet-navy/5 rounded-lg p-8 text-center">
          <h4 className="text-xl font-semibold text-aemet-navy mb-4">Get Involved</h4>
          <p className="text-gray-600 mb-4">
            Join one of our many clubs and programs to enhance your university experience and make meaningful connections.
          </p>
          <p className="text-sm text-gray-500">
            For more information about any of these programs, please contact the respective coordinators or visit the Centre for Outreach Programs office.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default OutreachPrograms;
