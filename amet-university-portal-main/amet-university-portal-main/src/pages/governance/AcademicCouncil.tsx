
import React from 'react';
import GovernanceLayout from '@/components/governance/GovernanceLayout';
import { Separator } from "@/components/ui/separator";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";

const AcademicCouncil = () => {
  // Academic Council Members 2025-26
  const chairperson = [
    {
      sno: "I",
      name: "Prof.Dr.V.Rajendran (Chairman)",
      designation: "Vice-Chancellor",
      email: "vc@ametuniv.ac.in"
    }
  ];

  const secretary = [
    {
      sno: "II",
      name: "Dr. V. Sangeetha Albin (Secretary)",
      designation: "Registrar",
      email: "registrar@ametuniv.ac.in"
    }
  ];

  const deans = [
    { sno: "1", name: "Capt.Gopal Srinivas", designation: "Principal, DGS Courses", email: "principal@ametuniv.ac.in" },
    { sno: "2", name: "Dr.N.R.Ramkumar", designation: "Joint Registrar", email: "Jt.registrar@ametuniv.ac.in" },
    { sno: "3", name: "Capt.K.Karthik", designation: "Principal, AMET Institute of Science and Technology", email: "karthik.k@ametuniv.ac.in" },
    { sno: "4", name: "Dr.T.Sasilatha", designation: "Principal – General Programmes", email: "principalgp@ametuniv.ac.in" },
    { sno: "5", name: "Dr.M.Jayaprakashvel", designation: "Special Officer & IQAC Coordinator", email: "iqac@ametuniv.ac.in" },
    { sno: "6", name: "Dr.A.Rajesh Kanna", designation: "Controller of Examinations", email: "coe@ametuniv.ac.in" },
    { sno: "7", name: "Dr.S.Priya", designation: "Dean - Academics", email: "deanacd@ametuniv.ac.in" },
    { sno: "8", name: "Dr.R.Muthezhilan", designation: "Dean - Research and Development", email: "deanrnd@ametuniv.ac.in" },
    { sno: "9", name: "Dr.A.Thanikasalam", designation: "Dean - Administration", email: "deanadm@ametuniv.ac.in" },
    { sno: "10", name: "Dr.S.Ramalingam", designation: "Dean - Students Welfare", email: "deanstw@ametuniv.ac.in" },
    { sno: "11", name: "Dr.D.Madhesh", designation: "Dean - Staff Welfare", email: "deanstfw@ametuniv.ac.in" },
    { sno: "12", name: "Dr.S.Bharathi Raja", designation: "Dean, Faculty of Engineering and Technology", email: "deanet@ametuniv.ac.in" },
    { sno: "13", name: "Dr.Anita R Warrier", designation: "Dean (i/c), Faculty of Science and Humanities", email: "deansh@ametuniv.ac.in" },
    { sno: "14", name: "Dr.J.Rengamani", designation: "Dean - AMET Business School", email: "rengamani.j@ametuniv.ac.in" },
    { sno: "15", name: "Dr.R.Karthikeyan", designation: "Director, AMET Institute of Science and Technology", email: "r.karthi1968@ametuniv.ac.in" },
    { sno: "16", name: "Dr.K.Gayathri", designation: "Director – Research Publications Incentives", email: "gayathri.k@ametuniv.ac.in" },
    { sno: "17", name: "Dr.D.Rajasekar", designation: "Director - AMET Business School", email: "rajasekar@ametuniv.ac.in" },
  ];

  const hods = [
    { sno: "1", name: "Capt.P.Rajendran", designation: "Nautical Science", email: "rajendran.p@ametuniv.ac.in" },
    { sno: "2", name: "C/E. M.Muthu Kumar", designation: "Marine Engineering", email: "muthuganga@ametuniv.ac.in" },
    { sno: "3", name: "Dr.P.Sivabalan", designation: "Naval Architecture and Offshore Engineering", email: "hodna@ametuniv.ac.in" },
    { sno: "4", name: "Dr.R.Srinivasan", designation: "AMET Business School", email: "hodabs@ametuniv.ac.in" },
    { sno: "5", name: "Dr. C.M.Ramakritinan", designation: "Marine Biotechnology", email: "hodmbt@ametuniv.ac.in" },
    { sno: "6", name: "Dr.V.Sridevi", designation: "Electrical and Electronics Engineering", email: "hodeee@ametuniv.ac.in" },
    { sno: "7", name: "Dr. S.Ponmani, (i/c)", designation: "Mining Engineering", email: "hodmin@ametuniv.ac.in" },
    { sno: "8", name: "Dr. V.Amirthavalli", designation: "Petroleum Engineering", email: "amirthavalli.v@ametuniv.ac.in" },
    { sno: "9", name: "Dr.John Wyson", designation: "Food Processing Technology", email: "hodfpt@ametuniv.ac.in" },
    { sno: "10", name: "Dr.S.Subramaniyan", designation: "Maritime Commerce", email: "hodcommerce@ametuniv.ac.in" },
    { sno: "11", name: "Dr.D.Sivakumar", designation: "Computer Science and Engineering", email: "hodcse@ametuniv.ac.in" },
    { sno: "12", name: "Mr.P.Karthik", designation: "Advanced Computer Science", email: "hodacs@ametuniv.ac.in" },
    { sno: "13", name: "Dr. I. Paul raj", designation: "Aviation", email: "hodavi@ametuniv.ac.in" },
    { sno: "14", name: "Mr.Antony Gomez", designation: "Pre-Sea Modular Courses", email: "stcw12course@gmail.com" },
    { sno: "15", name: "Dr.P.Balaganesan", designation: "Mathematics", email: "hodmaths@ametuniv.ac.in" },
    { sno: "16", name: "Dr.C.Vairavan", designation: "English", email: "hodenglish@ametuniv.ac.in" },
    { sno: "17", name: "Dr.D.Arivazhagan", designation: "Director, E-Governance", email: "prof.arivazhagan@ametuniv.ac.in" },
    { sno: "18", name: "Dr.K.Sekar", designation: "Librarian", email: "sekar@ametuniv.ac.in" },
    { sno: "19", name: "Dr.V.Kanchana", designation: "Chemistry", email: "hodche@ametuniv.ac.in" },
    { sno: "20", name: "Dr.K.Anandan", designation: "Physics", email: "hodphy@ametuniv.ac.in" },
    { sno: "21", name: "Mr.P.Ramanathan", designation: "Additional Controller of Examinations", email: "addl.coe@ametuniv.ac.in" },
  ];

  const professors = [
    { sno: "1", name: "Dr.A.Shameem", designation: "AMET Business School", email: "drshameem@ametuniv.ac.in" },
    { sno: "2", name: "Dr.D.Lakshmi", designation: "EEE", email: "lakshmi.d@ametuniv.ac.in" },
    { sno: "3", name: "Dr.J.Ananth", designation: "Marine Engineering", email: "jambuananth@ametuniv.ac.in" },
    { sno: "4", name: "Dr.C.N.Ravi", designation: "Computer Science and Engineering", email: "sivakumar.d@ametuniv.ac.in" },
  ];

  const associateProfessors = [
    {
      sno: "1",
      name: "Capt.R.K.Kumar",
      designation: "Nautical Science",
      email: "captrkkumar@ametuniv.ac.in"
    },
    {
      sno: "2",
      name: "Dr.R.Elavarasi",
      designation: "Electrical and Electronics Engineering",
      email: "elavarasi.r@ametuniv.ac.in"
    }
  ];

  const assistantProfessors = [
    { sno: "1", name: "Dr.K.Manikandan", designation: "Electrical and Electronics Engineering", email: "manikandaneee@ametuniv.ac.in" },
    { sno: "2", name: "Dr.A.R.Sivaram", designation: "Naval Architecture and Offshore Engineering", email: "sivaramar@ametuniv.ac.in" },
  ];

  const eminentEducationists = [
    { sno: "1", name: "Dr.K.Sivasami", designation: "Associate Professor & Head - SMET, Indian Maritime University, Chennai", email: "ksivasami@imu.ac.in" },
    { sno: "2", name: "Dr.S.Swamynathan", designation: "Professor of Information Technology, Anna University", email: "swamyns@annauniv.edu" },
    { sno: "3", name: "Dr.S.Rajadurai", designation: "President, CEO and Head of R&D, Sharda Motor Industries Ltd.", email: "srajadurai@hotmail.com" },
    { sno: "4", name: "Dr.Chitra Krishnan", designation: "Former Professor and Head, Department of French, University of Madras", email: "krishchi@gmail.com" },
    { sno: "5", name: "B.Thangapandian", designation: "CEO-CertifyTN, Head-Microsoft Training Division, Certiport US / South Asia", email: "thangapandian@certifytn.com" },
  ];

  const eminentPersons = [
    {
      sno: "1",
      name: "C/E. Mr Suresh Shenoi",
      designation: "Project Manager, V Ships and IMEI Chairman",
      email: "suresh.shenoi@vships.com"
    },
    {
      sno: "2",
      name: "Capt. Danny Jowher",
      designation: "Culture & Capability Manager, AP Moller Maersk",
      email: "capt.danny@ametuniv.ac.in"
    },
    {
      sno: "3",
      name: "C/E. P.K.Mishra",
      designation: "Joint Managing Director of IRS Indian Register of Shipping",
      email: "PK.Mishra@irclass.org"
    },
    {
      sno: "4",
      name: "Capt. Sartaj Gill",
      designation: "Chief Strategic Advisor V.Ships",
      email: "sartajgill76@gmail.com"
    },
    {
      sno: "5",
      name: "Mr.J.Shyam Sundar",
      designation: "Director & Chief Operating Officer Flyjac Logistics Pvt. Ltd.",
      email: "shyamsundar@flyjac.com"
    }
  ];

  const studentRepresentatives = [
    { sno: "1", name: "Mr.R.Nalliesvar", designation: "B.Sc Nautical Science III year", email: "9092345456\nNalliesvar24@gmail.com" },
    { sno: "2", name: "Mr.R.Deepan", designation: "BE Marine Engineering IV year", email: "9578959823\ndeep_ame22171@ametuniv.ac.in" },
    { sno: "3", name: "Ms.Dharshini.P", designation: "MBA II year ASL24014", email: "8122872242\nasl24014@ametuniv.ac.in" },
    { sno: "4", name: "Mr.Akthar Khan.R.", designation: "ANA22002 NAOE IV year", email: "6383843352" },
  ];

  const renderMembersTable = (members: any[], title: string, categoryNumber?: string) => (
    <div className="mb-10">
      <h3 className="text-xl font-semibold mb-4 text-aemet-navy">
        {categoryNumber && `${categoryNumber}. `}{title}
      </h3>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-slate-50">
              <TableHead className="w-16 text-center">S.No</TableHead>
              <TableHead>Name of the Member</TableHead>
              <TableHead>Designation</TableHead>
              <TableHead className="w-56">Email Id</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {members.map((member, index) => (
              <TableRow key={index} className="border-b">
                <TableCell className="font-medium text-center">{member.sno}</TableCell>
                <TableCell className="font-medium">{member.name}</TableCell>
                <TableCell>{member.designation}</TableCell>
                <TableCell className="text-sm whitespace-pre-line">{member.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );

  return (
    <GovernanceLayout title="Academic Council">
      <div className="py-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-aemet-navy mb-4">Academic Council</h1>
          <p className="max-w-2xl mx-auto text-gray-600">
            List of Members of the Academic Council 2025-26
          </p>
          <Separator className="max-w-md mx-auto my-6 bg-aemet-blue/30" />
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Chairperson */}
          {renderMembersTable(chairperson, "The Vice Chancellor as Chairperson")}
          
          {/* Secretary */}
          {renderMembersTable(secretary, "The Registrar, as the Secretary of the Academic Council")}
          
          {/* Deans Section */}
          {renderMembersTable(deans, "Principal/ Dean(S) / Director of Faculties", "III")}
          
          {/* HODs Section */}
          {renderMembersTable(hods, "Heads of the Departments", "IV")}
          
          {/* Professors Section */}
          {renderMembersTable(professors, "Professors other than the Heads of the Departments (By Rotation of Seniority)", "V")}
          
          {/* Associate Professors Section */}
          {renderMembersTable(associateProfessors, "Two Associate Professors from the Departments other than the Heads of the Departments by Rotation of Seniority", "VI")}
          
          {/* Assistant Professors Section */}
          {renderMembersTable(assistantProfessors, "Two Assistant Professors from the Departments by Rotation of Seniority", "VII")}
          
          {/* Eminent Educationists Section */}
          {renderMembersTable(eminentEducationists, "Eminent educationist from other field related to the activities of the Institution / Deemed to be University who are not in the service of the Institution / Deemed to be University, nominated by the Vice-Chancellor", "VIII")}
          
          {/* Eminent Persons Section */}
          {renderMembersTable(eminentPersons, "Eminent persons who are not members of the Teaching staff, co-opted by the Academic Council for their specialised knowledge", "IX")}
          
          {/* Student Representatives Section */}
          {renderMembersTable(studentRepresentatives, "Student Representatives")}
        </div>

        <div className="max-w-3xl mx-auto mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-aemet-navy mb-4">About the Academic Council</h3>
            <p className="text-gray-700 mb-4">
              The Academic Council is the principal academic body of AMET University, responsible for the maintenance of 
              standards of education, teaching, and training, inter-departmental coordination, research, examinations, and academic regulations.
            </p>
            <p className="text-gray-700">
              It is comprised of the Vice-Chancellor as the chairperson, Deans, Heads of Departments, 
              Professors, external educationists, industry experts, and student representatives to ensure a 
              comprehensive approach to academic excellence and governance.
            </p>
          </div>
        </div>
      </div>
    </GovernanceLayout>
  );
};

export default AcademicCouncil;
