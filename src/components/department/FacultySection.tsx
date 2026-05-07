import React from "react";
import { User, GraduationCap, BookOpen, FileText, Award } from "lucide-react";

interface FacultyMember {
  name: string;
  designation: string;
  qualification?: string;
  specialization?: string;
  profileUrl?: string;
}

interface FacultySectionProps {
  facultyMembers?: FacultyMember[];
  departmentId?: string;
}

const FacultySection: React.FC<FacultySectionProps> = ({ facultyMembers, departmentId }) => {
  // Default faculty members for other departments
  const defaultFacultyMembers = [
    {
      name: "Dr. John Smith",
      designation: "Professor & Head",
      qualification: "Ph.D., M.Tech",
      specialization: "Power Systems, Control Engineering",
      profileUrl: "#",
    },
    {
      name: "Dr. Sarah Johnson",
      designation: "Associate Professor",
      qualification: "Ph.D., M.E.",
      specialization: "Electronics, VLSI Design",
      profileUrl: "#",
    },
    {
      name: "Dr. Michael Brown",
      designation: "Assistant Professor",
      qualification: "Ph.D., B.Tech",
      specialization: "Embedded Systems, IoT",
      profileUrl: "#",
    },
    {
      name: "Dr. Lisa Davis",
      designation: "Assistant Professor",
      qualification: "Ph.D., M.Tech",
      specialization: "Renewable Energy, Smart Grids",
      profileUrl: "#",
    },
  ];

  // Commerce department specific faculty
  const commerceFacultyMembers = [
    {
      name: "Dr. S. Subramanian",
      designation: "Professor & Head",
      qualification: "M.Com, M.B.A, Ph.D",
      specialization: "Accounting, Banking and Finance",
      experience: "42 years teaching, 24 years research",
      description:
        "Dr. S. Subramanian specializes in Accounting, Banking and Finance and has 42 years of teaching experience, including 24 years in Research. He graduated in Commerce (UG & PG) from Madurai Kamaraj University, Madurai and obtained his Ph.D. from the same university in 2002. He has published eighteen research papers in indexed journals and ten in UGC listed journals. He has also presented nearly 25 papers in various conferences and seminars. He has produced six Ph.D. scholars under his supervision. He has registered two utility patents. In addition, he has completed two NGO funded projects and continues his research and supervisory work at AMET University.",
      profileUrl: "#",
    },
    {
      name: "Dr. R. Sathish",
      designation: "Associate Professor",
      qualification: "Ph.D in Commerce",
      specialization: "Investment Behaviour, Consumer Satisfaction, Financial Decision-Making",
      experience: "Over a decade of teaching experience",
      description:
        "Dr. R. Sathish is a dedicated academician with a Ph.D. in Commerce. He has established himself as a committed educator, researcher, and mentor. With more than a decade of teaching experience across reputed institutions, he currently serves as Associate Professor in the Department of Commerce at AMET University, Chennai. His career is marked by diverse responsibilities, including NAAC Coordinator, ISO Coordinator and leadership in academic and institutional development. He has guided research scholars at M.Phil., M.Com, and Ph.D. levels. His research includes publications in national and international journals, covering areas such as investment behaviour, consumer satisfaction, and financial decision-making, along with contributions to Springer proceedings. He has organized multiple national seminars, workshops, and outreach programmes focusing on entrepreneurship, financial literacy, and digital business.",
      profileUrl: "#",
    },
    {
      name: "Dr. Fasahat Nazir Buchoo",
      designation: "Assistant Professor",
      qualification: "Ph.D in Commerce (Annamalai University), M.Com, M.Ed (Kashmir University)",
      specialization: "Marketing, Agricultural Marketing, Horticultural Commodities",
      experience: "Academic and research experience",
      description:
        "Dr. Fasahat Nazir Buchoo is an accomplished academician, researcher, and educator. He holds a Ph.D. in Commerce from Annamalai University along with postgraduate degrees in Commerce and Education from Kashmir University, reflecting his strong academic foundation and commitment to learning. His specialization in marketing, particularly in the study of horticultural commodities such as apples, saffron, walnuts, and almonds, highlights his significant research contributions to the field of agricultural marketing in Jammu & Kashmir. He has authored and co-authored several research papers in reputed journals, focusing on horticultural marketing, cooperatives, and banking. His active participation in numerous national and international conferences, seminars, and workshops underscores his commitment to academic excellence and lifelong learning. Furthermore, his role as a resource person in various state-level seminars highlights his recognition as a subject expert.",
      profileUrl: "#",
    },
  ];

  // Mining Engineering department specific faculty
  const miningFacultyMembers = [
    {
      name: "Dr. Ponmani Swaminathan",
      designation: "Associate Professor and Head i/c",
      qualification: "PhD, M.Tech",
      specialization: "",
      profileUrl: "#",
      dateOfJoining: "16.07.2018",
    },
    {
      name: "Dr. K S Siva Subramanian",
      designation: "Professor of Practice (Part Time)",
      qualification: "M.Sc, Ph.D",
      specialization: "Remote Sensing and Mine Design",
      profileUrl: "#",
      dateOfJoining: "06.08.2018",
    },
  ];

  // Marine Engineering department specific faculty
  const marineEngineeringFacultyMembers = [
    {
      name: "C/E Muthu Kumar",
      designation: "Associate Professor",
      qualification: "B.E., MEO Class I, MBA",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "C/E. Boopathy Bhaskaran",
      designation: "Associate Professor",
      qualification: "B.Sc., MEO CLASS-I",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "C/E. Krishnan Ramesh",
      designation: "Associate Professor",
      qualification: "B.E MECH., MEO CLASS-I",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "C/E. Muthazhaqu Mugilan",
      designation: "Associate Professor",
      qualification: "B.E MECH, MEO CLASS-I",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "C/E Majendran Gopinath",
      designation: "Associate Professor",
      qualification: "MEO CLASS-I MOTOR",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "C/E Sathish Kumar. M",
      designation: "Associate Professor",
      qualification: "B.E., MEO CLASS-I",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "C/E Kokki Paneer Selvam",
      designation: "Assistant Professor",
      qualification: "MEO CLASS I",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "3/E. Mr. S. Jeyachandran",
      designation: "Assistant Professor (Fire Lab In charge)",
      qualification: "B.Com., DDGM.",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "2/E. Chandra Sekaran",
      designation: "Assistant Professor",
      qualification: "MEO CLASS II - FG",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Dr.A.Suresh",
      designation: "Professor",
      qualification: "M.E, Ph.D Distinction",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Dr.S.V.Saravanan",
      designation: "Assistant Professor",
      qualification: "B.E., M.E. Ph.D",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Dr. S. Ranganathan",
      designation: "Professor",
      qualification: "B.E., M.E. Ph.D",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Dr M Rajavelan",
      designation: "Associate Professor",
      qualification: "M.E., Ph.D",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Dr. P. Shanthi",
      designation: "Associate Professor",
      qualification: "M.E., Ph.D",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Dr.M. Tamilarasi",
      designation: "Associate Professor",
      qualification: "B.E., M.Tech., Ph.D",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Mr. V. Sivakumar",
      designation: "Assistant Professor",
      qualification: "DME., TME., B.E., M.E.",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Dr.M. Ramamurthy",
      designation: "Assistant Professor",
      qualification: "M.E., Ph.D",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Mr.R.Sundar",
      designation: "Assistant Professor",
      qualification: "M.E., Ph.D",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Mr.Neela Prasad U N",
      designation: "Assistant Professor",
      qualification: "B.E., M.TECH NAVAL ARCH",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Mr.K.Stalin",
      designation: "Assistant Professor",
      qualification: "M.E, (Ph.D)",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Dr. Thanikasalam.A",
      designation: "Assistant Professor",
      qualification: "B.E., M.E Ph.D",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Dr.S.Satish Kumar",
      designation: "Associate Professor",
      qualification: "M.E., Ph.D",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Dr.E.Ravikumar",
      designation: "Assistant Professor",
      qualification: "M.E., Ph.D",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Dr.Bharathi.K",
      designation: "Associate Professor",
      qualification: "Ph.D",
      specialization: "",
      profileUrl: "#",
    },
    { name: "Dr.Ananth.J", designation: "Professor", qualification: "Ph.D", specialization: "", profileUrl: "#" },
    {
      name: "Dr.Ananthi Christy",
      designation: "Professor",
      qualification: "Ph.D",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Dr. S. Sharbuddin Ali",
      designation: "Assistant Professor",
      qualification: "M.E Ph.D",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Mr.Rakesh",
      designation: "Assistant Professor",
      qualification: "M.E",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Dr.S.Ponmani",
      designation: "Assistant Professor",
      qualification: "M.E Ph.D",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Dr.N.Venkatesan",
      designation: "Assistant Professor",
      qualification: "M.E Ph.D",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Dr.P.Karthikeyan",
      designation: "Assistant Professor",
      qualification: "M.E Ph.D",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Dr.M.Mugunthan",
      designation: "Assistant Professor",
      qualification: "M.E Ph.D",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Dr.B.Parvathy Sangeetha",
      designation: "Associate Professor",
      qualification: "M.E., Ph.D",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Palani Murugappan",
      designation: "Assistant Professor",
      qualification: "B.E. ELCT, ETO",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "C/E. R. Balaji",
      designation: "Associate Professor",
      qualification: "B.E., MEO Class I, ME",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "M.Nagarajan",
      designation: "Assistant Professor",
      qualification: "GR. INDIAN NAVY, ETO",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "2E.V.Ayyappan",
      designation: "Assistant Professor",
      qualification: "MEO Class II",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Nagarajan Venkatrama",
      designation: "Assistant Professor",
      qualification: "MEO Class II",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Dr.Muthurajan",
      designation: "Assistant Professor",
      qualification: "M.E Ph.D",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "C/E. R. Rathakrishnan",
      designation: "Associate Professor",
      qualification: "B.E., MEO Class I",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Mr.S.Pandiselvi",
      designation: "Aptitude Trainer",
      qualification: "M.Sc., B.Ed.",
      specialization: "",
      profileUrl: "#",
    },
  ];

  // Naval Architecture department specific faculty
  const navalArchitectureFacultyMembers = [
    {
      name: "Dr. Siva Balan P",
      designation: "Professor and Head",
      qualification: "Ph.D., M.E.",
      specialization: "Marine Material, Floating Body Dynamics",
      profileUrl: "#",
    },
    {
      name: "S/Lt. Prem Anandh A",
      designation: "Assistant Professor",
      qualification: "B.E., M.Tech",
      specialization: "Naval Architecture",
      profileUrl: "#",
    },
    {
      name: "Mr. S. Ramaswami",
      designation: "Assistant Professor",
      qualification: "B.E., M.Tech",
      specialization: "Naval Architecture",
      profileUrl: "#",
    },
    {
      name: "Mr. Sivaram A R",
      designation: "Assistant Professor",
      qualification: "B.E., M.Tech",
      specialization: "Naval Architecture",
      profileUrl: "#",
    },
    {
      name: "Mr. Jaya Surya R",
      designation: "Assistant Professor",
      qualification: "B.E., M.Tech",
      specialization: "Naval Architecture",
      profileUrl: "#",
    },
    {
      name: "Dr. V. Arularasi",
      designation: "Assistant Professor",
      qualification: "Ph.D., M.E.",
      specialization: "Naval Architecture",
      profileUrl: "#",
    },
    {
      name: "Mr. Selvakumar N",
      designation: "Assistant Professor",
      qualification: "B.E., M.Tech",
      specialization: "Naval Architecture",
      profileUrl: "#",
    },
    {
      name: "Mr. Philips J",
      designation: "Assistant Professor",
      qualification: "B.E., M.Tech",
      specialization: "Naval Architecture",
      profileUrl: "#",
    },
    {
      name: "Mr. C. Varun",
      designation: "Assistant Professor",
      qualification: "B.E., M.Tech",
      specialization: "Naval Architecture",
      profileUrl: "#",
    },
  ];

  // Nautical Sciences department specific faculty
  const nauticalSciencesFacultyMembers = [
    { name: "Capt. Gopal Srinivas", designation: "Principal", qualification: "", specialization: "", profileUrl: "#" },
    {
      name: "Capt. P. Rajendran",
      designation: "Course In-charge",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Capt. R.K. Kumar",
      designation: "Associate Professor",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Capt. Dr. K. Rajesh",
      designation: "Associate Professor",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Capt. S. Sudarsanan",
      designation: "Associate Professor",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Capt. Krishna Chittipedhi",
      designation: "Associate Professor",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Capt. B. Santha Kumar",
      designation: "Associate Professor",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Cdr. V. Ramakrishnan",
      designation: "Associate Professor",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Capt. Pandiyan Mahadevan",
      designation: "Associate Professor",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Capt. C. Rajendran",
      designation: "Associate Professor",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Capt. Subbanaidu Gajendran",
      designation: "Associate Professor",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Capt. Tripathi Manjul",
      designation: "Associate Professor",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Capt. Nazer Hussain Shiek Ebrahim",
      designation: "Associate Professor",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Capt. Yeshwanth Raj",
      designation: "Professor of Practice",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Capt. Mohammed Abdul Sukkur",
      designation: "Associate Professor",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Capt. Seshadri Upilli",
      designation: "Associate Professor",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Capt. Ganeshyam",
      designation: "Associate Professor",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Capt. Franklin Paul",
      designation: "Associate Professor",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Capt. V.S. Narayanan",
      designation: "Associate Professor",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Capt. Santhakumar",
      designation: "Associate Professor",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Capt. Leela Vinoth",
      designation: "Associate Professor",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
    { name: "Mr. Madana Gopal", designation: "Second Officer", qualification: "", specialization: "", profileUrl: "#" },
    {
      name: "Mr. Thirunavukkarasu",
      designation: "Second Officer",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Mr. Marimuthu",
      designation: "Faculty of Aptitude",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Mrs. Sujatha",
      designation: "Faculty of Aptitude",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Mr. S. Mathuram",
      designation: "Assistant Professor",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Mr. Abubaker",
      designation: "Assistant Professor",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Mr. Balasudhakar",
      designation: "Assistant Professor",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Dr. N. Sivakumar",
      designation: "Assistant Professor",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Mrs. M. Selva Rani",
      designation: "Assistant Professor",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Dr. V. Amirthavalli",
      designation: "Assistant Professor",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Dr. M. Suresh Kumar",
      designation: "Associate Professor",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
  ];

  // Computer Science department specific faculty
  const computerScienceFacultyMembers = [
    { name: "Dr. D. Sivakumar", designation: "Professor", qualification: "", specialization: "", profileUrl: "#" },
    {
      name: "Ms. S. Sivapurnima",
      designation: "Assistant Professor",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
    { name: "Dr. K. Sampath Kumar", designation: "Professor", qualification: "", specialization: "", profileUrl: "#" },
    {
      name: "Mrs. K. Gokila",
      designation: "Assistant Professor",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Mr. S. Muthuvel",
      designation: "Assistant Professor",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Mr. P. Arunkumar",
      designation: "Assistant Professor",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Ms. J. Jayashankari",
      designation: "Assistant Professor",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
  ];

  // Petroleum Engineering department specific faculty
  const petroleumEngineeringFacultyMembers = [
    {
      name: "Dr. A. Rajesh Kanna",
      designation: "Associate Professor and HOD",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Dr. S. Ponmani",
      designation: "Assistant Professor",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Mrs. V. Amirthavalli",
      designation: "Assistant Professor",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Mr. A. Jayasekaran",
      designation: "Visiting Faculty, GGM, ONGC Retd.",
      qualification: "",
      specialization: "",
    },
  ];

  // Mechanical Engineering department specific faculty
  const mechanicalEngineeringFacultyMembers = [
    { name: "Dr. S. Bharathiraja", designation: "Professor", qualification: "", specialization: "" },
    { name: "Dr. S. Ramalingam", designation: "Professor", qualification: "", specialization: "" },
    { name: "Dr. R. Rajavel", designation: "Professor", qualification: "", specialization: "" },
    { name: "Dr. Madhesh D", designation: "Professor", qualification: "", specialization: "", profileUrl: "#" },
    {
      name: "Dr. Adinarayanan A",
      designation: "Associate Professor",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
    { name: "Mr. Ramanathan P", designation: "Assistant Professor", qualification: "", specialization: "" },
    {
      name: "Dr. G.S. Samy",
      designation: "Assistant Professor",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Dr. P. Karthikeyan",
      designation: "Assistant Professor",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Dr. V.T. Vimalananth",
      designation: "Assistant Professor",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Mr. C. Jayabalan",
      designation: "Assistant Professor",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Dr. N. Mukilarasan",
      designation: "Assistant Professor",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Mr. G. Rakesh",
      designation: "Assistant Professor",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Dr. A. Dhanasekaran",
      designation: "Associate Professor",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Dr. Tushar Anand",
      designation: "Assistant Professor",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Dr. K.M. Mahaboob Sheriff",
      designation: "Associate Professor",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
  ];

  // Electrical Engineering department specific faculty
  const electricalEngineeringFacultyMembers = [
    { name: "Dr.V.Sridevi", designation: "Professor & Head", qualification: "", specialization: "", profileUrl: "#" },
    { name: "Dr.D.Lakshmi", designation: "Professor", qualification: "", specialization: "", profileUrl: "#" },
    {
      name: "Dr.R.Elavarasi",
      designation: "Assistant Professor",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Dr.R.K.Padmashini",
      designation: "Assistant Professor",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Dr.R.Karthick Manoj",
      designation: "Assistant Professor",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Mr.K.Manikandan",
      designation: "Assistant Professor",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Mrs.R.Rajasree",
      designation: "Assistant Professor",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Dr.J.Padmapriya",
      designation: "Assistant Professor",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Dr.S.Murugesan",
      designation: "Assistant Professor",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
  ];

  // Food Processing Technology department specific faculty
  const foodProcessingFacultyMembers = [
    {
      name: "Dr. W. John Wyson",
      designation: "Head",
      qualification: "",
      specialization:
        "Well experience in developing various food products and chemical formulation and well versed in sterile techniques, PCR, ELISA and Innovative Food Product Development.",
    },
    {
      name: "Mrs. V. Ramabhai",
      designation: "Assistant Professor",
      qualification: "",
      specialization:
        "Microbiology, Cell Biology and Genetics, Food technology, Pharmaceutical Biotechnology, Molecular Biology and Genetic Engineering.",
    },
    {
      name: "Mrs. Shanmugapriya",
      designation: "Assistant Professor",
      qualification: "",
      specialization: "Food Processing, Food Preservation, Bio Chemistry, Food Microbiology, Nanotechnology",
    },
  ];

  // AMET Business School faculty members
  const ametBusinessSchoolFacultyMembers = [
    {
      name: "Dr.D.Rajasekar",
      designation: "Professor & Director",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
    { name: "Dr.J.Rengamani", designation: "Professor", qualification: "", specialization: "", profileUrl: "#" },
    { name: "Dr.A.Shameem", designation: "Professor", qualification: "", specialization: "", profileUrl: "#" },
    { name: "Dr.D.Arivazhagan", designation: "Professor", qualification: "", specialization: "", profileUrl: "#" },
    { name: "Dr.S.Poongavanam", designation: "Professor", qualification: "", specialization: "", profileUrl: "#" },
    { name: "Dr.R.Srinivasan", designation: "Professor", qualification: "", specialization: "", profileUrl: "#" },
    {
      name: "Dr.R.Vettriselvan",
      designation: "Associate Professor",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Dr.Meenakshi",
      designation: "Associate Professor",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
    { name: "Dr.Haroon Basha", designation: "Assistant Professor", qualification: "", specialization: "" },
    {
      name: "Dr.K.J.Sumitha",
      designation: "Assistant Professor",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Dr.R.Divya Ranjani",
      designation: "Assistant Professor",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Dr.K.T.M.Thiruppathi",
      designation: "Assistant Professor",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Dr.M.K.Ganesan",
      designation: "Assistant Professor",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
    { name: "Mr.Arun kumar", designation: "Assistant Professor", qualification: "", specialization: "" },
    {
      name: "Ms.V.K.Elavarasi",
      designation: "Assistant Professor",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Mr.S.Prithvi",
      designation: "Assistant Professor",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
  ];

  // Information Technology department specific faculty
  const informationTechnologyFacultyMembers = [
    {
      name: "Mr. Karthick P",
      designation: "Assistant Professor",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
    {
      name: "Mr. M. Ramesh Kumar",
      designation: "Assistant Professor",
      qualification: "",
      specialization: "",
      profileUrl: "#",
    },
  ];

  // Mathematics department specific faculty
  const mathematicsFacultyMembers = [
    {
      name: "Dr. L. Rajendran",
      designation: "Professor",
      qualification: "M.Sc, M.Phil, M.Ed, PhD, PGDCA",
      specialization: "",
    },
    {
      name: "Dr. I. Paulraj Jayasimman",
      designation: "Associate Professor",
      qualification: "M.Sc., M.Phil., Ph.D.",
      specialization: "",
    },
    { name: "Dr. Salahuddin", designation: "Associate Professor", qualification: "M.Tech, Ph.D.", specialization: "" },
    {
      name: "Dr. S. Meher Taj",
      designation: "Associate Professor",
      qualification: "M.Sc., M.Phil., Ph.D.",
      specialization: "",
    },
    {
      name: "Dr. G. Jenitha",
      designation: "Associate Professor",
      qualification: "M.Sc., M.Phil., B.Ed., Ph.D.",
      specialization: "",
    },
    {
      name: "Dr. K. Chinnadurai",
      designation: "Assistant Professor",
      qualification: "M.Sc., M.Phil., B.Ed., Ph.D.",
      specialization: "",
    },
  ];

  // Physics department specific faculty with research guidance data
  const physicsFacultyMembers = [
    {
      name: "Dr. Anita R Warrier",
      designation: "Professor and Dean (S & H)",
      researchArea: "Nanophotonics",
      ongoingPhD: "5 (PhD)",
      ongoingPDF: "2 (PDF)",
      completedPhD: "2 (PhD)",
      completedPDF: "-",
    },
    {
      name: "Dr. K. Anandan",
      designation: "Associate Professor & Head",
      researchArea: "Nanomaterials, Photocatalysis",
      ongoingPhD: "2 (PhD)",
      ongoingPDF: "2 (PDF)",
      completedPhD: "-",
      completedPDF: "1 (PDF)",
    },
    {
      name: "Dr. A. Mohamed Haroon Basha",
      designation: "Associate Professor",
      researchArea: "Geo Physics",
      ongoingPhD: "1 (PhD)",
      ongoingPDF: "-",
      completedPhD: "-",
      completedPDF: "-",
    },
    {
      name: "Dr. K. Gayathri",
      designation: "Associate Professor & Deputy Head, Director Publication Incentive",
      researchArea: "Material Science, Nano & Bio Photonics",
      ongoingPhD: "2 (PhD)",
      ongoingPDF: "1 (PDF)",
      completedPhD: "1 (PhD)",
      completedPDF: "-",
    },
    {
      name: "Dr. Anitha Rexalin Devaraj",
      designation: "Associate Professor & Director-AMET Institutions' Innovation Council",
      researchArea: "Density Functional Theory, Vibrational Spectroscopy",
      ongoingPhD: "-",
      ongoingPDF: "-",
      completedPhD: "-",
      completedPDF: "-",
    },
    {
      name: "Dr. C. Amirthakumar",
      designation: "Assistant Professor",
      researchArea: "Crystal Growth, Non – Linear Optics",
      ongoingPhD: "-",
      ongoingPDF: "-",
      completedPhD: "-",
      completedPDF: "-",
    },
    {
      name: "Dr. Swapna Mary Gali",
      designation: "Assistant Professor",
      researchArea: "Thin films for Solar Cells",
      ongoingPhD: "-",
      ongoingPDF: "-",
      completedPhD: "-",
      completedPDF: "-",
    },
    {
      name: "Dr. T.U.Jeevitha",
      designation: "Assistant Professor",
      researchArea: "Theoretical Astrophysics",
      ongoingPhD: "-",
      ongoingPDF: "-",
      completedPhD: "-",
      completedPDF: "-",
    },
    {
      name: "Dr. E. Thenpandiyan",
      designation: "Assistant Professor",
      researchArea:
        "Nanostructured materials, photocatalysis, Electrochemical analysis and Nano drug delivery applications",
      ongoingPhD: "-",
      ongoingPDF: "-",
      completedPhD: "-",
      completedPDF: "-",
    },
    {
      name: "Dr. K. Prabhu",
      designation: "Assistant Professor",
      researchArea: "Geo Physics",
      ongoingPhD: "-",
      ongoingPDF: "-",
      completedPhD: "-",
      completedPDF: "-",
    },
  ];

  // English department faculty members
  const englishFacultyMembers = [
    {
      name: "Dr. C. Vairavan",
      designation: "Associate Professor & Head",
      profileUrl: "#",
    },
    {
      name: "Mr. S. Ramaraju",
      designation: "Deputy Head & Assistant Professor",
      profileUrl: "#",
    },
    {
      name: "Dr. S. Krishna",
      designation: "Associate Professor",
      profileUrl: "#",
    },
    {
      name: "Mrs. K. Shoba",
      designation: "Assistant Professor",
      profileUrl: "#",
    },
    {
      name: "Dr. P. Jayakumar",
      designation: "Assistant Professor",
      profileUrl: "#",
    },
    {
      name: "Dr. T. P. Anupama",
      designation: "Assistant Professor",
      profileUrl: "#",
    },
  ];

  // English department technical staff
  const englishTechnicalStaff = [
    {
      name: "Mr. A. Abdul Muneer",
      designation: "Technical Assistant",
      profileUrl: "#",
    },
  ];

  // Use department-specific faculty if available, otherwise use provided faculty or default
  const displayFacultyMembers =
    departmentId === "commerce-department"
      ? commerceFacultyMembers
      : departmentId === "mining-engineering"
        ? miningFacultyMembers
        : departmentId === "naval-architecture"
          ? navalArchitectureFacultyMembers
          : departmentId === "marine-engineering"
            ? marineEngineeringFacultyMembers
            : departmentId === "nautical-sciences"
              ? nauticalSciencesFacultyMembers
              : departmentId === "computer-science"
                ? computerScienceFacultyMembers
                : departmentId === "petroleum-engineering"
                  ? petroleumEngineeringFacultyMembers
                  : departmentId === "mechanical-engineering"
                    ? mechanicalEngineeringFacultyMembers
                    : departmentId === "electrical-engineering"
                      ? electricalEngineeringFacultyMembers
                      : departmentId === "food-processing"
                        ? foodProcessingFacultyMembers
                        : departmentId === "amet-business-school"
                          ? ametBusinessSchoolFacultyMembers
                          : departmentId === "information-technology"
                            ? informationTechnologyFacultyMembers
                            : departmentId === "mathematics"
                              ? mathematicsFacultyMembers
                              : departmentId === "english"
                                ? englishFacultyMembers
                                : facultyMembers || defaultFacultyMembers;

  // Physics faculty simple list
  const physicsFacultyList = [
    { name: "Dr. Anita R Warrier", designation: "Professor and Dean (S & H)" },
    { name: "Dr. A. Mohamed Haroon Basha", designation: "Associate Professor" },
    { name: "Dr. K. Gayathri", designation: "Associate Professor and Deputy Head, Director Publication Incentive" },
    {
      name: "Dr. Anitha Rexalin Devaraj",
      designation: "Associate Professor and Director-AMET Institutions' Innovation Council",
    },
    { name: "Dr. C. Amirthakumar", designation: "Assistant Professor" },
    { name: "Dr. Swapna Mary Gali", designation: "Assistant Professor" },
    { name: "Dr. T.U. Jeevitha", designation: "Assistant Professor" },
    { name: "Dr. E. Thenpandiyan", designation: "Assistant Professor" },
    { name: "Dr. K. Prabhu", designation: "Assistant Professor" },
  ];

  // Physics faculty detailed profiles
  const physicsFacultyProfiles = [
    {
      name: "Dr. Anita R Warrier",
      designation: "Professor and Dean (S & H)",
      profile:
        "Dr. Anita R. Warrier has 14 years of teaching experience and has served as Principal Investigator for multiple government-funded research projects. Her research interests span nanomaterials, photonics, and optics, where she has significantly contributed through publications and collaborative work. She also guides Ph.D. scholars in these specialized areas, fostering advanced research and scientific innovation.",
    },
    {
      name: "Dr. A. Mohamed Haroon Basha",
      designation: "Associate Professor",
      profile:
        'Dr. A. Mohamed Haroon Basha is an accomplished physicist and academician from Tamil Nadu, India. He is currently serving as an Associate Professor in the Department of Physics at the Academy of Maritime Education and Training (AMET University), Chennai. He obtained his Ph.D. in Geophysics from Manonmaniam Sundaranar University, where he specialized in soil and environmental studies. With more than fifteen years of teaching and research experience, Dr. Haroon Basha has made significant contributions to the fields of Soil Physics, Geophysics, and Environmental Material Science. His research primarily focuses on enhancing soil fertility, productivity, and microbial yield through the use of organic and carbon-based amendments. He has conducted experimental studies on the physico-chemical and morphological properties of red and brown soils using Ultra Graphite and Azolla, leading to the registration of a patent titled "Method Employed in the Study of Effect of Azolla and Ultra Graphite on Red Soil." He has also been actively involved in UGC-CRS and other collaborative research projects aimed at promoting sustainable agricultural and environmental practices. Dr. Haroon Basha continues to contribute to academic excellence through teaching, mentoring, and innovative research in applied physics and sustainable environmental systems.',
    },
    {
      name: "Dr. K. Gayathri",
      designation: "Associate Professor and Deputy Head",
      profile:
        "Dr. K. Gayathri has over 15 years of extensive research experience in the fields of Nanophotonics, Quantum Physics, Materials Science, and Crystal Growth. She has been associated with AMET University, Chennai, for the past 9 years, contributing to both teaching and research across various Physics subjects. Prior to this, she gained international exposure through 1.9 years of research and teaching experience at the University of Texas at San Antonio (UTSA), USA. Dr. Gayathri has published 38 research articles in reputed international journals indexed in Scopus, SCI, and Web of Science, with a citation count of 826, an h-index of 17, and an i-10 index of 23. She has also published two patents and actively serves as a reviewer for Elsevier and Springer journals. She participated in the Women in Space Leadership Programme (WiSLP), launched by the Department of Science and Technology (DST) in collaboration with the British Council under the UKIERI initiative in January 2025. She is the recipient of the Dr. S. Radhakrishnan Best Teacher Award for Academic Achievements (2023) at AMET University. Dr. Gayathri has hands-on expertise in advanced scientific instruments such as the Quanta Master series fluorescence spectrometers, transient digitizer laser systems, and Zetasizer Nano ZS. She is proficient in scientific software including Origin, ChemOffice, WinGX, ORTEP, and Mercury, and is actively mentoring Ph.D. research scholars. In addition to academic and research excellence, she holds key administrative responsibilities as Director (Publications), Member of the Executive Council, and Deputy Head of the Department of Physics at AMET University.",
    },
    {
      name: "Dr. Anitha Rexalin Devaraj",
      designation: "Associate Professor",
      profile:
        "Dr. Anitha Rexalin Devaraj, M.Sc., M.Phil., Ph.D. is a distinguished physicist and academician with over a decade of teaching and research experience. She is currently serving as the Director of the Institutions' Innovation Council and Associate Professor in the Department of Physics at the Academy of Maritime Education and Training (AMET) University, Chennai. She holds a Ph.D. in Physics from Bharathidasan University, Tiruchirappalli, for her research on Vibrational Spectroscopic Investigation of Halogenated Compounds of Biological and Pharmaceutical Importance. Dr. Anitha Rexalin Devaraj's research interests lie in spectroscopy, quantum chemical computations, nanomaterials, and material science. She has published 20 peer-reviewed journal papers and 7 conference proceedings, with over 200 citations, and has presented at numerous national and international conferences. Her notable contributions include chapters in reputed books and collaborative projects such as Tailoring Solid Electrolytes for Rechargeable Batteries with the Copperbelt University, Zambia. A recipient of multiple accolades, she has been honored with the Dr. Radhakrishnan Best Teacher Award (2023-2024, 2024–2025), the People's Choice Award under the Women in Space and Allied Science Leadership Program (DST–UKIERI), and the Academic Leadership Award (Chancellor's STARR Award 2025–2026). She has also received several Best Poster and Best Oral Presentation awards at many international conferences. Beyond her research and teaching, she has made significant contributions to academic leadership, serving as I-STEM District Ambassador for Chengalpattu and Member of the Centre for Nanotechnology and Hydrogen Energy Research at AMET University. She has also been actively involved with NPTEL and AICTE-SWAYAM as a Tamil translator and transcript editor for several physics and engineering courses. With her lifelong memberships in professional bodies such as ILA, STRA, IAASSE, ISERS, and REAI, Dr. Anitha Rexalin Devaraj continues to advance scientific inquiry and educational innovation, inspiring students and researchers through her multidisciplinary expertise and leadership in academia.",
    },
    {
      name: "Dr. C. Amirthakumar",
      designation: "Assistant Professor",
      profile:
        "Dr. C. Amirthakumar is a distinguished faculty member at AMET University, known for his dedication to teaching, research, and academic excellence. With a strong background in physics and material science, he has contributed significantly to the advancement of scientific knowledge through his research on optical, thermal, and mechanical properties of advanced materials and Nonlinear optical Materials. Dr. Amirthakumar is actively involved in guiding students, organizing academic events, and publishing research papers in reputed journals. His commitment to education and innovation has made him a respected figure in the academic community of AMET University.",
    },
    {
      name: "Dr. Swapna Mary Gali",
      designation: "Assistant Professor",
      profile:
        "Dr. Swapna Mary Gali has expertise in fabrication and optimization of CZGSe chalcogenide thin films for thin-film solar cell applications, involving advanced vacuum deposition, selenization, and comprehensive structural, optical, and electrical characterization. Electrochemical analysis of semiconductor thin films and material interfaces.",
    },
    {
      name: "Dr. T.U. Jeevitha",
      designation: "Assistant Professor",
      profile:
        "Dr. T.U. Jeevitha is an active researcher in the field of Physics, with a focus on astrophysics, quantum theory, and light–matter interaction. Her work explores the application of theoretical models such as the Newman–Penrose formalism in understanding spacetime structures and cosmological effects. Her research integrates both analytical and computational approaches, bridging classical and modern physics concepts to address emerging problems in physical sciences.",
    },
    {
      name: "Dr. E. Thenpandiyan",
      designation: "Assistant Professor (Research)",
      profile:
        "Dr. E. Thenpandiyan, M.Sc., Ph.D., is currently working as Assistant Professor (Research) in the Department of Physics, AMET University, Kanathur, Chennai. He obtained his Doctor of Philosophy (Ph.D.) in Physics from Annamalai University, Chidambaram, in September 2024, where his research work was highly commended by the evaluation committee. He completed his Master of Science in Physics at Annamalai University in June 2018, securing First Class, and his Bachelor of Science in Physics at Arignar Anna Government Arts College, Villupuram (affiliated with Thiruvalluvar University, Vellore) in May 2016, with First Class and Distinction. He has demonstrated excellence in research, with 12 publications in peer-reviewed SCI journals and 01 Indian patent to his credit. He has also presented 07 papers at international conferences and has served as a reviewer for Discover Materials (Springer journal). His primary research interests include Nanostructured Materials, Polymer-based Nano Photocatalysts, Rare-earth Ion-based Nano Supercapacitors, and Biomedical Applications.",
    },
    {
      name: "Dr. K. Prabhu",
      designation: "Assistant Professor",
      profile:
        "Dr. K. Prabhu is a researcher in Geophysics with a focus on Geo-informatics. His work integrates geophysical methods and spatial data analysis to study subsurface structures, natural resources, and environmental processes. His research interests include remote sensing, seismic interpretation, and data-driven geoscientific analysis.",
    },
  ];

  // Special rendering for Physics department
  if (departmentId === "physics") {
    return (
      <div className="space-y-8">
        {/* Faculty List Table */}
        <div>
          <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
            <User className="h-5 w-5 mr-2 text-aemet-blue" />
            Faculty Profile
          </h3>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-aemet-navy text-white">
                  <th className="border border-gray-300 px-4 py-3 text-left w-16">S.No.</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Faculty Name</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Designation</th>
                </tr>
              </thead>
              <tbody>
                {physicsFacultyList.map((faculty, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="border border-gray-300 px-4 py-3 text-center">{index + 1}</td>
                    <td className="border border-gray-300 px-4 py-3 font-medium text-aemet-navy">{faculty.name}</td>
                    <td className="border border-gray-300 px-4 py-3">{faculty.designation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Research Guidance Table */}
        <div>
          <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
            <GraduationCap className="h-5 w-5 mr-2 text-aemet-blue" />
            List of Faculty – Research Thrust Area and PhD / PDF Guidance Status
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-aemet-navy text-white">
                  <th className="border border-gray-300 px-3 py-3 text-left">S.No.</th>
                  <th className="border border-gray-300 px-3 py-3 text-left">Faculty Name</th>
                  <th className="border border-gray-300 px-3 py-3 text-left">Designation</th>
                  <th className="border border-gray-300 px-3 py-3 text-left">Research Thrust Area</th>
                  <th className="border border-gray-300 px-3 py-3 text-center" colSpan={2}>
                    PhD/PDF Guidance - Ongoing
                  </th>
                  <th className="border border-gray-300 px-3 py-3 text-center" colSpan={2}>
                    Completed
                  </th>
                </tr>
              </thead>
              <tbody>
                {physicsFacultyMembers.map((faculty, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="border border-gray-300 px-3 py-3 text-center">{index + 1}</td>
                    <td className="border border-gray-300 px-3 py-3 font-medium text-aemet-navy">{faculty.name}</td>
                    <td className="border border-gray-300 px-3 py-3">{faculty.designation}</td>
                    <td className="border border-gray-300 px-3 py-3">{faculty.researchArea}</td>
                    <td className="border border-gray-300 px-3 py-3 text-center">{faculty.ongoingPhD}</td>
                    <td className="border border-gray-300 px-3 py-3 text-center">{faculty.ongoingPDF}</td>
                    <td className="border border-gray-300 px-3 py-3 text-center">{faculty.completedPhD}</td>
                    <td className="border border-gray-300 px-3 py-3 text-center">{faculty.completedPDF}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Detailed Faculty Profiles */}
        <div>
          <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
            <BookOpen className="h-5 w-5 mr-2 text-aemet-blue" />
            Detailed Faculty Profiles
          </h3>

          <div className="space-y-6">
            {physicsFacultyProfiles.map((faculty, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-aemet-navy text-lg mb-1">{faculty.name}</h4>
                <p className="text-aemet-blue font-medium text-sm mb-3">{faculty.designation}</p>
                <p className="text-gray-700 text-sm leading-relaxed">{faculty.profile}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-gray-600">
            Our department has highly qualified and experienced faculty members with expertise in various fields of
            Physics including Nanophotonics, Material Science, Geophysics, and Computational Physics. The faculty are
            actively involved in research, PhD/PDF guidance, and innovative teaching practices.
          </p>
        </div>
      </div>
    );
  }

  // Food Processing department special rendering with table
  if (departmentId === "food-processing") {
    return (
      <div>
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <User className="h-5 w-5 mr-2 text-aemet-blue" />
          Staff Profiles
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-gradient-to-r from-orange-600 to-amber-600 text-white">
                <th className="border border-orange-300 px-4 py-3 text-left font-semibold w-16">S.No</th>
                <th className="border border-orange-300 px-4 py-3 text-left font-semibold">Name of the Faculty</th>
                <th className="border border-orange-300 px-4 py-3 text-left font-semibold">Designation</th>
                <th className="border border-orange-300 px-4 py-3 text-left font-semibold">Research Specializations</th>
              </tr>
            </thead>
            <tbody>
              {foodProcessingFacultyMembers.map((faculty, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "hover:bg-orange-50" : "hover:bg-orange-50 bg-orange-50/30"}
                >
                  <td className="border border-gray-200 px-4 py-3 text-gray-800">{index + 1}</td>
                  <td className="border border-gray-200 px-4 py-3 font-medium text-aemet-navy">{faculty.name}</td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-800">{faculty.designation}</td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-700">{faculty.specialization}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
          <p className="text-sm text-gray-600">
            Our department has highly qualified and experienced faculty members with expertise in food processing,
            microbiology, and food technology. The faculty are actively involved in research and maintain strong
            industry connections.
          </p>
        </div>
      </div>
    );
  }

  // Special rendering for Commerce department with detailed profiles
  if (departmentId === "commerce-department") {
    return (
      <div className="space-y-8">
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <User className="h-5 w-5 mr-2 text-aemet-blue" />
          Faculty Details
        </h3>

        <div className="space-y-6">
          {commerceFacultyMembers.map((faculty, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-blue-50 rounded-xl border-2 border-blue-100 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-gradient-to-r from-aemet-blue to-aemet-navy p-4">
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-3 rounded-full">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{faculty.name}</h4>
                    <p className="text-blue-100">{faculty.designation}</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-blue-50 rounded-lg p-3">
                    <div className="flex items-center gap-2 text-aemet-navy font-medium mb-1">
                      <GraduationCap className="h-4 w-4 text-aemet-blue" />
                      Qualification
                    </div>
                    <p className="text-gray-700 text-sm">{faculty.qualification}</p>
                  </div>

                  <div className="bg-green-50 rounded-lg p-3">
                    <div className="flex items-center gap-2 text-aemet-navy font-medium mb-1">
                      <BookOpen className="h-4 w-4 text-green-600" />
                      Specialization
                    </div>
                    <p className="text-gray-700 text-sm">{faculty.specialization}</p>
                  </div>
                </div>

                {faculty.experience && (
                  <div className="bg-purple-50 rounded-lg p-3 mb-4">
                    <div className="flex items-center gap-2 text-aemet-navy font-medium mb-1">
                      <Award className="h-4 w-4 text-purple-600" />
                      Experience
                    </div>
                    <p className="text-gray-700 text-sm">{faculty.experience}</p>
                  </div>
                )}

                {faculty.description && (
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <p className="text-gray-700 text-sm leading-relaxed">{faculty.description}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
        <User className="h-5 w-5 mr-2 text-aemet-blue" />
        Faculty Members
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayFacultyMembers.map((faculty, index) => {
          const CardWrapper = faculty.profileUrl ? "a" : "div";
          const cardProps = faculty.profileUrl
            ? {
                href: faculty.profileUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                className:
                  "bg-gradient-to-r from-gray-50 to-white p-6 rounded-lg border border-gray-200 hover:shadow-lg hover:border-aemet-blue transition-all duration-300 cursor-pointer relative group block",
              }
            : {
                className:
                  "bg-gradient-to-r from-gray-50 to-white p-6 rounded-lg border border-gray-200 transition-all duration-300 relative",
              };

          return (
            <CardWrapper key={index} {...cardProps}>
              {faculty.profileUrl && (
                <FileText className="absolute top-4 right-4 h-5 w-5 text-aemet-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}
              <div className="flex-1">
                <h4 className="font-semibold text-aemet-navy text-lg mb-1">{faculty.name}</h4>
                <p className="text-aemet-blue font-medium text-sm mb-2">{faculty.designation}</p>
                <div className="space-y-1">
                  {faculty.qualification && (
                    <div className="flex items-center text-gray-600 text-sm">
                      <GraduationCap className="h-4 w-4 mr-2" />
                      <span>{faculty.qualification}</span>
                    </div>
                  )}
                  {faculty.specialization && (
                    <div className="flex items-center text-gray-600 text-sm">
                      <BookOpen className="h-4 w-4 mr-2" />
                      <span>{faculty.specialization}</span>
                    </div>
                  )}
                </div>
              </div>
            </CardWrapper>
          );
        })}
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-sm text-gray-600">
          Our department has highly qualified and experienced faculty members with expertise in various fields. The
          faculty are actively involved in research and maintain strong industry connections.
        </p>
      </div>
    </div>
  );
};
export default FacultySection;
