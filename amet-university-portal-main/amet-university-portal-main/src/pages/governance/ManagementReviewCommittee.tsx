import React from 'react';
import GovernanceLayout from '@/components/governance/GovernanceLayout';

const members = [
  { category: 'Top Management', items: [
    { sno: 1, name: 'Col. Dr. G. Thiruvasagam', designation: 'Provost', department: 'Top Management' },
    { sno: 2, name: 'Dr. V. Rajendran', designation: 'Vice-Chancellor', department: 'ChairPerson' },
    { sno: 3, name: 'Dr. V. Sangeetha Albin', designation: 'Registrar i/c', department: 'Governing Body' },
    { sno: 4, name: 'Mr. K. Seyadu', designation: 'Chief Executive Officer', department: 'Governing Body' },
    { sno: 5, name: 'Dr. N. R. Ramkumar', designation: 'Joint Registrar', department: 'Governing Body' },
    { sno: 6, name: 'Capt. Dr. K. Rajesh', designation: 'Management Coordinator', department: 'Governing Body' },
    { sno: 7, name: 'Dr. A. Rajesh Kanna', designation: 'Controller of Examination', department: 'Governing Body' },
  ]},
  { category: 'Principal / Dean / Director', items: [
    { sno: 8, name: 'Capt. Srinivas Gopal', designation: 'Principal', department: 'DGS Programmes' },
    { sno: 9, name: 'Dr. T. Sasilatha', designation: 'Principal', department: 'General Programmes' },
    { sno: 10, name: 'Mr. B. Subba Rao', designation: 'Dean', department: 'Marine Engineering' },
    { sno: 11, name: 'Dr. S. Priya', designation: 'Dean', department: 'Academics' },
    { sno: 12, name: 'Dr. R. Muthezhilan', designation: 'Dean', department: 'Technical & Research Activities' },
    { sno: 13, name: 'Dr. M. Jayaprakashvel', designation: 'Director', department: 'Internal Quality Assurance Cell' },
    { sno: 14, name: 'Dr. D. Arivazhagan', designation: 'Director', department: 'Centre for E-Governance' },
    { sno: 15, name: 'Mr. Ramanan', designation: 'Director', department: 'Public Relation Officer' },
  ]},
  { category: 'Heads of the Departments', items: [
    { sno: 16, name: 'C/E Muthukumar', designation: 'Head of the Department', department: 'Marine Engineering' },
    { sno: 17, name: 'Capt. Rajendran', designation: 'Head of the Department', department: 'Nautical Science' },
    { sno: 18, name: 'C/E Majendra Gopinath', designation: 'Course in Charge', department: 'GME' },
    { sno: 19, name: 'Capt. Pandiyan Mahadevan', designation: 'Course in Charge', department: 'GP Rating' },
    { sno: 20, name: 'C/E Majendra Gopinath', designation: 'Course in Charge', department: 'ETO' },
    { sno: 21, name: 'C/O. Antony Gomez', designation: 'Course in Charge', department: 'STCW' },
    { sno: 22, name: 'Mr. N. Anand', designation: 'Course in Charge', department: 'GMDSS' },
    { sno: 23, name: 'Dr. S. Ramalingam', designation: 'Head of the Department', department: 'Mechanical Engineering' },
    { sno: 24, name: 'Dr. Sivabalan', designation: 'Head of the Department', department: 'Naval Architecture & Offshore Engineering' },
    { sno: 25, name: 'Dr. Sridevi', designation: 'Head of the Department', department: 'Electrical and Computer Engineering' },
    { sno: 26, name: 'Dr. R. Srinivasan', designation: 'Head of the Department', department: 'AMET Business School' },
    { sno: 27, name: 'Dr. D. Sivakumar', designation: 'Head of the Department', department: 'Computer Science and Engineering' },
    { sno: 28, name: 'Mr. Karthick', designation: 'Head of the Department', department: 'Advanced Computing Sciences' },
    { sno: 29, name: 'Dr. Rajesh Kumar', designation: 'Head of the Department', department: 'Chemistry' },
    { sno: 30, name: 'Dr. Anandan Kasinathan', designation: 'Head of the Department', department: 'Physics' },
    { sno: 31, name: 'Dr. P. Balaganeshan', designation: 'Head of the Department', department: 'Mathematics' },
    { sno: 32, name: 'Dr. C. Vairavan', designation: 'Head of the Department', department: 'English' },
    { sno: 33, name: 'Mr. T. Johnson', designation: 'Head of the Department', department: 'EPIC' },
    { sno: 34, name: 'Mr. C. Chandrasekaran', designation: 'Director', department: 'Placements' },
    { sno: 35, name: 'Mr. P. Rajan', designation: 'Incharge', department: 'Ship in Campus' },
    { sno: 36, name: '2/E. G. Chandrasekharan', designation: 'Incharge', department: 'Fire Fighting Laboratory' },
    { sno: 37, name: 'Mr. M. John Sagayaraj', designation: 'Incharge', department: 'Workshop' },
    { sno: 38, name: 'Capt. Krishna Chittipedhi', designation: 'Incharge', department: 'Seamanship Laboratory' },
  ]},
  { category: 'Functional Heads', items: [
    { sno: 39, name: 'Ms. Divya', designation: 'Head', department: 'Admission' },
    { sno: 40, name: 'Mr. Shankara Krishnan', designation: 'Deputy Registrar', department: 'Administration' },
    { sno: 41, name: 'Mr. Madhavan', designation: 'Manager', department: 'Purchase' },
    { sno: 42, name: 'Mr. Mathew Varghese', designation: 'Proctor', department: 'Hostel' },
    { sno: 43, name: 'Mr. Venugopal', designation: 'Incharge', department: 'Canteen' },
    { sno: 44, name: 'Mr. G. Vijayakumar', designation: 'Manager', department: 'Network and System Administration' },
    { sno: 45, name: 'Mr. M. Sudhakar', designation: 'Assistant Registrar', department: 'Housekeeping & Maintenance' },
    { sno: 46, name: 'Mr. Kannan', designation: 'Manager', department: 'Transport' },
    { sno: 47, name: 'Dr. N. Selvakumar', designation: 'Incharge', department: 'Physical Education' },
    { sno: 48, name: 'Dr. Jayashri', designation: 'Medical Officer', department: 'Dispensary' },
    { sno: 49, name: 'Dr. K. Sekar', designation: 'In-Charge', department: 'Library' },
  ]},
];

const ManagementReviewCommittee = () => {
  return (
    <GovernanceLayout title="Management Review Committee Members">
      <div className="space-y-6">
        <h1 className="text-2xl md:text-3xl font-bold text-primary">
          Management Review Committee Members
        </h1>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-border text-sm">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="border border-border px-4 py-3 text-left w-16">S.No</th>
                <th className="border border-border px-4 py-3 text-left">Name</th>
                <th className="border border-border px-4 py-3 text-left">Designation</th>
                <th className="border border-border px-4 py-3 text-left">Department</th>
              </tr>
            </thead>
            <tbody>
              {members.map((group) => (
                <React.Fragment key={group.category}>
                  <tr>
                    <td colSpan={4} className="border border-border px-4 py-3 bg-accent font-semibold text-accent-foreground">
                      {group.category}
                    </td>
                  </tr>
                  {group.items.map((member) => (
                    <tr key={member.sno} className="hover:bg-muted/50 transition-colors">
                      <td className="border border-border px-4 py-2 text-center">{member.sno}</td>
                      <td className="border border-border px-4 py-2">{member.name}</td>
                      <td className="border border-border px-4 py-2">{member.designation}</td>
                      <td className="border border-border px-4 py-2">{member.department}</td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-right mt-8 space-y-1">
          <p className="font-semibold text-foreground">Management Coordinator</p>
          <p className="text-muted-foreground">Capt. Dr. K. Rajesh</p>
        </div>
      </div>
    </GovernanceLayout>
  );
};

export default ManagementReviewCommittee;
