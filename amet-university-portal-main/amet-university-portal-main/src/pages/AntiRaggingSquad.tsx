import React from 'react';
import Layout from '@/components/Layout';
import { Shield } from 'lucide-react';

const AntiRaggingSquad: React.FC = () => {
  const members = [
    { sno: 1, name: "Dr. V. Sangeetha Albin", designation: "Registrar & Chairperson", mobile: "9962603081" },
    { sno: 2, name: "Dr. N.R. Ramkumar", designation: "Joint Registrar", mobile: "9381080111" },
    { sno: 3, name: "Capt. Gopal Srinivas", designation: "Principal – DGS Courses", mobile: "9003071866" },
    { sno: 4, name: "Dr. A. Rajesh Kanna", designation: "Controller of Examination", mobile: "9445964887" },
    { sno: 5, name: "C/E. Muthukumar", designation: "HoD – Marine Engineering", mobile: "9600591769" },
    { sno: 6, name: "Dr. S. Ramalingam", designation: "Dean – Student Welfare", mobile: "9444660285" },
    { sno: 7, name: "Sub.Lt. A. Prem Anandh", designation: "Associate Dean Administration & NCC Officer", mobile: "9003360606" },
    { sno: 8, name: "Dr. G. Jenitha", designation: "Associate Dean Student Welfare", mobile: "9842307816" },
    { sno: 9, name: "Dr. V.T. Vimalananth", designation: "Associate Dean Student Welfare", mobile: "8148388360" },
    { sno: 10, name: "Dr. S. Meher Taj", designation: "Associate Professor, Dept. of Maths", mobile: "9976507552" },
    { sno: 11, name: "Dr. N. Selva Kumar", designation: "HOD i/c, Physical Education", mobile: "9597300434" },
    { sno: 12, name: "Mr. Varghese Mathew", designation: "Proctor & Convener", mobile: "9072469094" },
    { sno: 13, name: "Mr. Suresh", designation: "Hostel Manager", mobile: "9791096286" },
    { sno: 14, name: "Mr. Anto Cardoza", designation: "Duty Officer", mobile: "9176778079" },
    { sno: 15, name: "Mr. Rajasekar", designation: "Assistant Security Officer", mobile: "9344003953" },
    { sno: 16, name: "Cadet. Muhammaed Muhzin", designation: "BE Marine Engineering – IV Year", mobile: "9037102526" },
    { sno: 17, name: "Cadet. Aswin Murukesan", designation: "B.Sc Nautical Science – III Year", mobile: "8828298360" },
    { sno: 18, name: "Cadet. Tanya Dandapat", designation: "B.Sc Nautical Science – III Year", mobile: "9002329773" },
    { sno: 19, name: "Ms. Dharshini", designation: "MBA – II Year", mobile: "8122872242" },
    { sno: 20, name: "Mr. Kaviraj", designation: "BE – Naval Architecture – IV Year", mobile: "8122804863" },
    { sno: 21, name: "Ms. Preethi", designation: "BBA – III Year", mobile: "7013757834" },
    { sno: 22, name: "Ms. Vaishnavi. K", designation: "B.Tech CSE(AI&DS) – I Year", mobile: "9005361885" },
  ];

  return (
    <Layout title="Anti-Ragging Squad | AMET University">
      <div className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary)/0.85)] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="h-8 w-8" />
            <h1 className="text-4xl md:text-5xl font-bold">Anti-Ragging Squad</h1>
          </div>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Squad members for anti-ragging vigilance and immediate action
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[hsl(var(--primary))] text-white">
                  <th className="px-4 py-3 text-left font-semibold">S.No</th>
                  <th className="px-4 py-3 text-left font-semibold">Name</th>
                  <th className="px-4 py-3 text-left font-semibold">Designation & Department</th>
                  <th className="px-4 py-3 text-left font-semibold">Mobile No</th>
                </tr>
              </thead>
              <tbody>
                {members.map((member, index) => (
                  <tr key={member.sno} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-4 py-4 text-gray-700 font-medium">{member.sno}</td>
                    <td className="px-4 py-4 text-gray-700 font-medium">{member.name}</td>
                    <td className="px-4 py-4 text-gray-700">{member.designation}</td>
                    <td className="px-4 py-4 text-gray-700">{member.mobile}</td>
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

export default AntiRaggingSquad;
