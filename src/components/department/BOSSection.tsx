import React from 'react';
import { Users, FileText, Award, BookOpen, Lightbulb, GraduationCap, Handshake, Target } from 'lucide-react';

interface BOSSectionProps {
  departmentId?: string;
}

const BOSSection: React.FC<BOSSectionProps> = ({ departmentId }) => {
  if (departmentId === 'marine-engineering') {
    const bosMembers = [
      { name: "C/E M Muthukumar", position: "HOD - Marine Engineering", designation: "Chairman" },
      { name: "Capt. Srinivas Gopal", position: "DGS Principal", designation: "Internal Member" },
      { name: "C/E V.S.Seshadri Rajan", position: "Country Head- Global Sourcing Solutions India, Supply Management, Halliburton, Chennai", designation: "External Member – Industry" },
      { name: "C/E Visheswaran", position: "Surveyor-Shell Pvt Ltd", designation: "External Member – Industry" },
      { name: "Capt. Danny Jowher", position: "Cadet Training Manager- MAERSK", designation: "External Member" },
      { name: "Dr. R Sathish", position: "Associate Professor and HOD-St. Joseph's College of Engineering and Technology", designation: "External Member – Academic" },
      { name: "Dr S Ramalingam", position: "Professor and HOD-Mechanical Engineering", designation: "Internal Member" },
      { name: "Dr S Priya", position: "Dean Academics", designation: "Internal Member" },
      { name: "C/E. Boopathy Bhaskaran", position: "Associate Professor", designation: "Internal Member" },
      { name: "C/E Majendran Gopinath", position: "Associate Professor", designation: "Internal Member" },
      { name: "C/E R Balaji", position: "Associate Professor", designation: "Internal Member" },
      { name: "Dr.A Suresh", position: "Professor", designation: "Internal Member" },
      { name: "Dr J Ananth", position: "Professor", designation: "Internal Member" },
      { name: "Dr S Renganathan", position: "Professor", designation: "Internal Member" },
      { name: "Dr Ananthi Christy", position: "Professor", designation: "Internal Member" },
      { name: "Dr S Satish Kumar", position: "Associate Professor", designation: "Internal Member" },
      { name: "Mr Ram kumar", position: "Assistant Tech lead Project Management, Sem-Corp marine, Singapore", designation: "Alumni" },
    ];

    const responsibilities = [
      {
        title: "Curriculum Design and Review",
        icon: BookOpen,
        points: [
          "Develop, review, and update the curriculum for all programs in accordance with national and international maritime standards (IMO, DGS, AICTE, etc.)",
          "Ensure alignment of syllabus content with the outcomes of the OBE (Outcome-Based Education) framework and National Education Policy (NEP) 2020",
          "Recommend inclusion of emerging technologies and practices in marine and allied fields"
        ]
      },
      {
        title: "Course Structure and Content",
        icon: FileText,
        points: [
          "Approve new courses, electives, and value-added modules to enhance employability and skill development",
          "Ensure that the course content is balanced between theory, practical applications, and industrial relevance"
        ]
      },
      {
        title: "Academic Quality Assurance",
        icon: Award,
        points: [
          "Review and recommend appropriate assessment and evaluation methods consistent with learning outcomes",
          "Ensure continuous improvement through student feedback, alumni inputs, and stakeholder consultation"
        ]
      },
      {
        title: "Industry and Research Linkages",
        icon: Handshake,
        points: [
          "Advise on collaboration with maritime industries, research institutions, and classification societies",
          "Recommend internships, training, and research opportunities that enhance professional competence"
        ]
      },
      {
        title: "Faculty and Resource Development",
        icon: Users,
        points: [
          "Suggest faculty development programmes, workshops, and seminars to upgrade pedagogical and technical skills",
          "Encourage faculty involvement in research, consultancy, and professional societies"
        ]
      },
      {
        title: "Innovation and Best Practices",
        icon: Lightbulb,
        points: [
          "Promote innovative teaching-learning practices, simulation-based learning, and laboratory modernization",
          "Integrate sustainability, environmental awareness, and safety management principles into the curriculum"
        ]
      },
      {
        title: "Approval of Academic Matters",
        icon: Target,
        points: [
          "Recommend to the Department Academic Committee (DAC) and University Academic Council (AC) for approval of revised syllabi, new programs, and regulations",
          "Review and endorse project topics, course outcomes (COs), and program outcomes (POs) mapping"
        ]
      },
      {
        title: "Student-Centric Development",
        icon: GraduationCap,
        points: [
          "Ensure that the curriculum fosters critical thinking, leadership, and global maritime competencies",
          "Encourage interdisciplinary learning and participation in research and innovation activities"
        ]
      }
    ];

    return (
      <div className="space-y-8">
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <Users className="h-5 w-5 mr-2 text-aemet-blue" />
          Board of Studies Members
        </h3>

        {/* Header */}
        <div className="bg-gradient-to-r from-aemet-navy to-aemet-blue text-white rounded-lg p-6">
          <h4 className="text-2xl font-bold mb-2">BOARD OF STUDIES MEMBERS</h4>
          <p className="text-lg opacity-90">Department of Marine Engineering</p>
          <p className="text-white/80 mt-2">Academic Year 2025–2026</p>
        </div>

        {/* Introduction */}
        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <p className="text-gray-700 leading-relaxed">
            In accordance with the University regulations and academic governance framework, the Board of Studies (BoS) 
            for the Department of Marine Engineering is constituted for the Academic Year 2025–2026. The BoS operates 
            under the purview of the Academic Council and is responsible for reviewing, updating, and recommending 
            academic matters related to the curriculum, course content, and programme structure of the Department.
          </p>
        </div>

        {/* Members Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="bg-aemet-navy text-white p-4">
            <h4 className="text-lg font-semibold">BoS Members</h4>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-aemet-navy">S. No.</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-aemet-navy">Name</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-aemet-navy">Position</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-aemet-navy">Designation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {bosMembers.map((member, index) => (
                  <tr key={index} className={index === 0 ? "bg-aemet-blue/5" : "hover:bg-gray-50"}>
                    <td className="px-4 py-3 text-sm text-gray-700">{index + 1}</td>
                    <td className="px-4 py-3 text-sm font-medium text-aemet-navy">{member.name}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{member.position}</td>
                    <td className="px-4 py-3 text-sm">
                      <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                        member.designation === 'Chairman' 
                          ? 'bg-aemet-navy text-white' 
                          : member.designation.includes('External') 
                            ? 'bg-green-100 text-green-800'
                            : member.designation === 'Alumni'
                              ? 'bg-purple-100 text-purple-800'
                              : 'bg-blue-100 text-blue-800'
                      }`}>
                        {member.designation}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Responsibilities Section */}
        <div className="space-y-6">
          <div className="bg-aemet-navy text-white rounded-lg p-4">
            <h4 className="text-lg font-semibold">Responsibilities of the Board of Studies (BoS) Members</h4>
          </div>
          
          <p className="text-gray-700 leading-relaxed">
            The Board of Studies (BoS) serves as the primary academic body responsible for maintaining the quality, 
            relevance, and excellence of the curriculum, teaching, and learning processes within the Department of 
            Marine Engineering. The members play a pivotal role in aligning academic programs with industry standards, 
            regulatory requirements, and the university's vision for maritime education.
          </p>

          <h5 className="text-lg font-bold text-aemet-navy">Key Responsibilities:</h5>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {responsibilities.map((resp, index) => {
              const IconComponent = resp.icon;
              return (
                <div key={index} className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-aemet-blue/10 rounded-lg flex items-center justify-center mr-3">
                      <IconComponent className="h-5 w-5 text-aemet-blue" />
                    </div>
                    <h6 className="font-semibold text-aemet-navy">{resp.title}</h6>
                  </div>
                  <ul className="space-y-2">
                    {resp.points.map((point, pIndex) => (
                      <li key={pIndex} className="text-sm text-gray-700 flex items-start">
                        <span className="h-1.5 w-1.5 bg-aemet-blue rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Chairman Signature */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 border border-gray-200 text-center">
          <div className="w-20 h-20 bg-aemet-navy rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="h-10 w-10 text-white" />
          </div>
          <p className="text-lg font-bold text-aemet-navy">CHAIRMAN</p>
          <p className="text-gray-600">Board of Studies - Marine Engineering</p>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center py-12">
      <Users className="h-16 w-16 text-gray-300 mx-auto mb-4" />
      <p className="text-gray-500">Board of Studies information coming soon.</p>
    </div>
  );
};

export default BOSSection;
