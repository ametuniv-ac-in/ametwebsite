import React from 'react';
import Layout from '@/components/Layout';
import { Users } from 'lucide-react';

const WomenEmpowermentCell: React.FC = () => {
  const members = [
    { sno: 1, name: "Dr. Meenatchi Somasundari K", designation: "Associate Professor, AMET Business School", role: "Chairperson", email: "meenakshik@ametuniv.ac.in", mobile: "9677953638" },
    { sno: 2, name: "Dr. M. Tamilarasi", designation: "Associate Professor, Marine Engineering", role: "Coordinator", email: "tamilarasieee@ametuniv.ac.in", mobile: "9894150526" },
    { sno: 3, name: "Mrs. Elavarasi Dhanasekar", designation: "Assistant Professor, AMET Business School", role: "Member", email: "elavarasi@ametuniv.ac.in", mobile: "7023165954" },
    { sno: 4, name: "Dr. R. K. Padmashini", designation: "Associate Professor, Electrical and Electronics Engineering", role: "Member", email: "padmashini@ametuniv.ac.in", mobile: "9047545341" },
    { sno: 5, name: "Dr. S. Meher Taj", designation: "Associate Professor, Mathematics", role: "Member", email: "mehertaj.s@ametuniv.ac.in", mobile: "9976507552" },
    { sno: 6, name: "Dr. K. Gayathri", designation: "Associate Professor, Physics", role: "Member", email: "gayathri.k@ametuniv.ac.in", mobile: "9789933245" },
    { sno: 7, name: "Mrs. R. Padmaja", designation: "Student Counsellor", role: "Member", email: "counsellor@ametuniv.ac.in", mobile: "7904782631" },
    { sno: 8, name: "Ms. Anjalika Choudhury", designation: "BSc Nautical Science", role: "Student Member", email: "anjalikachoudhury54@gmail.com", mobile: "7856818166" },
    { sno: 9, name: "Ms. Romy Verma", designation: "I Year, BE Marine Engineering", role: "Student Member", email: "romyv277@gmail.com", mobile: "9234221062" },
  ];

  return (
    <Layout>
      <div className="bg-gradient-to-r from-aemet-navy to-aemet-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Users className="h-8 w-8" />
            <h1 className="text-4xl md:text-5xl font-bold">Women Empowerment Cell</h1>
          </div>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Empowering women across the university community
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
                  <th className="px-4 py-3 text-left font-semibold">Name and Designation</th>
                  <th className="px-4 py-3 text-left font-semibold">Role</th>
                  <th className="px-4 py-3 text-left font-semibold">E-mail Address and Mobile Number</th>
                </tr>
              </thead>
              <tbody>
                {members.map((member, index) => (
                  <tr key={member.sno} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-4 py-4 text-gray-700 font-medium">{member.sno}</td>
                    <td className="px-4 py-4 text-gray-700">
                      <span className="font-medium">{member.name}</span>
                      {member.designation && <span>, {member.designation}</span>}
                    </td>
                    <td className="px-4 py-4 text-gray-700">{member.role}</td>
                    <td className="px-4 py-4 text-gray-700">
                      {member.email && <div>{member.email}</div>}
                      {member.mobile && <div>{member.mobile}</div>}
                    </td>
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

export default WomenEmpowermentCell;
