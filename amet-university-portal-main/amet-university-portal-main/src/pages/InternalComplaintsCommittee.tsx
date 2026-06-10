import React from 'react';
import Layout from '@/components/Layout';
import { Users } from 'lucide-react';

const InternalComplaintsCommittee: React.FC = () => {
  const members = [
    { sno: 1, name: "Dr.A.Shameem", designation: "Professor, AMET Business School", role: "Convener and Proceeding Officer" },
    { sno: 2, name: "Dr.S.Meher Taj", designation: "Asso. Professor, Dept. of Mathematics", role: "Coordinator" },
    { sno: 3, name: "Ms.Sandhya Rani Ramadass", designation: "Lady Member of NGO and Psychologist", role: "Member" },
    { sno: 4, name: "Dr.G.Jenitha", designation: "Associate Professor, Associate Dean - DSW", role: "Member" },
    { sno: 5, name: "Dr.K.Gayathri", designation: "Associate Professor, Department of Physics", role: "Member" },
    { sno: 6, name: "Dr.R.Padmaja", designation: "Psychologist & Student Counsellor", role: "Member" },
    { sno: 7, name: "Mr.Dilli Ganesh G", designation: "Local Media", role: "Member" },
    { sno: 8, name: "Mr. Muthurajan RM", designation: "Assistant Registrar, DG Courses", role: "Member" },
    { sno: 9, name: "Naina Baburaj", designation: "Cadet - B.Sc Nautical Science", role: "Member" },
    { sno: 10, name: "Aditi Bauriya", designation: "Cadet - BE Marine Engineering", role: "Member" },
    { sno: 11, name: "Adrit Singha", designation: "Cadet - BE Marine Engineering", role: "Member" },
    { sno: 12, name: "Rilika A V", designation: "BE Mechanical Engineering", role: "Member" },
  ];

  return (
    <Layout>
      <div className="bg-gradient-to-r from-aemet-navy to-aemet-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Users className="h-8 w-8" />
            <h1 className="text-4xl md:text-5xl font-bold">Internal Complaints Committee</h1>
          </div>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Committee members for addressing internal complaints
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-aemet-navy text-white">
                  <th className="px-4 py-3 text-left font-semibold">S.No</th>
                  <th className="px-4 py-3 text-left font-semibold">Name of Faculty</th>
                  <th className="px-4 py-3 text-left font-semibold">Designation & Department</th>
                  <th className="px-4 py-3 text-left font-semibold">Role of Committee</th>
                </tr>
              </thead>
              <tbody>
                {members.map((member, index) => (
                  <tr key={member.sno} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-4 py-4 text-gray-700 font-medium">{member.sno}</td>
                    <td className="px-4 py-4 text-gray-700">{member.name}</td>
                    <td className="px-4 py-4 text-gray-700">{member.designation}</td>
                    <td className="px-4 py-4 text-gray-700">{member.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default InternalComplaintsCommittee;
