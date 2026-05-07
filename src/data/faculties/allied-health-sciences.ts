
import { Stethoscope } from "lucide-react";
import { Department } from "./types";

export const alliedHealthSciencesDepartments: Department[] = [
  {
    id: "allied-health-dept",
    name: "Department of Allied Health Sciences",
    description: "The Department of Allied Health Sciences is dedicated to preparing skilled healthcare professionals who play a vital role in the diagnosis, treatment, and prevention of diseases. Our programs combine theoretical knowledge with practical clinical training to produce competent graduates ready to serve in various healthcare settings.",
    icon: Stethoscope,
    visionMission: "**Vision**\nTo be a value-based, practice-oriented program committed to producing globally competent Allied Health Professionals who contribute to excellence in patient care, education, and community well-being.\n\n**Mission**\n- Foster a dynamic learning environment that integrates theoretical knowledge with hands-on clinical practice.\n- Attract and develop highly qualified faculty committed to excellence in teaching, research, and healthcare innovation.\n- Establish state-of-the-art laboratories and clinical training facilities to enhance practical learning experiences.\n- Encourage interdisciplinary collaboration to promote holistic patient care and inter professional education.\n- Instill leadership, ethical values, and a spirit of community service among students to meet global healthcare challenges.",
    highlights: [
      "Year of Establishment: 2024",
      "Industry-integrated curriculum",
      "Hands-on clinical training",
      "Expert faculty with healthcare experience"
    ],
    facilities: [
      {
        name: "Clinical Training Labs",
        description: "State-of-the-art laboratories for practical training"
      },
      {
        name: "Hospital Partnerships",
        description: "Collaborations with leading hospitals for internships and training"
      }
    ],
    research_areas: [
      "Healthcare Management",
      "Clinical Research",
      "Public Health"
    ],
    collaborations: [
      "Leading Healthcare Institutions",
      "Research Organizations"
    ],
    certifications: [
      "Healthcare Quality Standards"
    ],
    courses: [
      {
        id: "bsc-hons-aott",
        name: "B.Sc Anaesthesia and Operation Theatre Technology",
        category: "UG",
        duration: "4 Years",
        admission: "Annual",
        careerPath: "Hospitals, Operation Theatres, Anaesthesia Departments, Critical Care Units",
        tabs: ['overview', 'eligibility'],
        description: "The B.Sc in Anaesthesia & Operation Theatre Technology is a four-year undergraduate program designed to produce highly skilled allied health professionals who can function as integral members of the surgical and critical care team. The program combines rigorous academic training with extensive clinical exposure, preparing graduates to assist anaesthesiologists and surgeons during perioperative care, manage operation theatre equipment, and ensure patient safety in surgical environments.\n\nThis program at AMET University is delivered through a unique partnership model: AMET University provides the academic framework, degree conferral, examinations, and campus infrastructure, while Emversity (www.emversity.com) delivers the industry-skilling component — including AR/VR simulation-based training, employer-co-designed curriculum modules, structured clinical internships, and placement assistance through its network of 500+ healthcare employer partners.\n\nGraduates of this program are equipped to work across a wide range of healthcare settings including multi-specialty hospitals, trauma centres, diagnostic facilities, intensive care units, and ambulatory surgical centres.",
        eligibility: "10+2 (Science Stream: PCB / PCMB) with minimum 50% / NEET not mandatory for any.\n\nAge & gap: as per UGC norms"
      },
      {
        id: "bsc-hons-cvt",
        name: "B.Sc Cardiovascular Technology",
        category: "UG",
        duration: "4 Years",
        admission: "Annual",
        careerPath: "Cardiology Departments, Cardiac Catheterization Labs, Echocardiography Units, Hospitals",
        tabs: ['overview', 'eligibility'],
        description: "The B.Sc. in Cardiovascular Technology is a four-year undergraduate program that trains students to become specialised professionals in cardiac diagnostics, catheterisation laboratory procedures, and cardiovascular imaging. Students learn to operate ECG machines, echocardiography equipment, cardiac catheterisation systems, and vascular diagnostic instruments — playing a critical role in the detection, monitoring, and treatment of heart and vascular diseases.\n\nThis program at AMET University is delivered through a unique partnership model: AMET University provides the academic framework, degree conferral, examinations, and campus infrastructure, while Emversity (www.emversity.com) delivers the industry-skilling component — including AR/VR simulation-based training, employer-co-designed curriculum modules, structured clinical internships, and placement assistance through its network of 500+ healthcare employer partners.\n\nGraduates are equipped to work in cardiac catheterisation labs, echocardiography units, cardiac rehabilitation centres, vascular diagnostic labs, and cardiothoracic surgery departments across hospitals and specialised cardiac care centres.",
        eligibility: "10+2 (Science Stream: PCB / PCMB) with minimum 50% / NEET not mandatory for any.\n\nAge & gap: as per UGC norms"
      },
      {
        id: "bsc-hons-mlt",
        name: "B.Sc Medical Laboratory Technology",
        category: "UG",
        duration: "4 Years",
        admission: "Annual",
        careerPath: "Clinical Laboratories, Diagnostic Centers, Research Labs, Blood Banks",
        tabs: ['overview', 'eligibility'],
        description: "The B.Sc. in Medical Laboratory Technology is a four-year undergraduate program that prepares students to become skilled diagnostic professionals in clinical laboratories. The program covers haematology, clinical biochemistry, microbiology, histopathology, immunology, and molecular diagnostics — equipping graduates to perform and interpret laboratory investigations that are critical to accurate medical diagnosis and patient care.\n\nThis program at AMET University is delivered through a unique partnership model: AMET University provides the academic framework, degree conferral, examinations, and campus infrastructure, while Emversity (www.emversity.com) delivers the industry-skilling component — including AR/VR simulation-based training, employer-co-designed curriculum modules, structured clinical internships, and placement assistance through its network of 500+ healthcare employer partners.\n\nGraduates are equipped to work in hospital laboratories, diagnostic chains, blood banks, research institutions, pharmaceutical companies, and public health laboratories.",
        eligibility: "10+2 (Science Stream: PCB / PCMB) with minimum 50% / NEET not mandatory for any.\n\nAge & gap: as per UGC norms"
      },
      {
        id: "bsc-hospital-management",
        name: "B.Sc Hospital Management",
        category: "UG",
        duration: "3 Years",
        admission: "Annual",
        careerPath: "Hospital Administration, Healthcare Operations, Health Insurance, Diagnostic Centre Management",
        tabs: ['overview', 'eligibility'],
        description: "The B.Sc. in Hospital Management is a three-year undergraduate program that prepares students for operational and administrative roles in hospitals, clinics, and healthcare organisations. The program covers hospital operations, front office management, medical records, health informatics, healthcare finance, supply chain management, and patient services — building a comprehensive understanding of how modern healthcare facilities function from the ground up.\n\nThis program at AMET University is delivered through a unique partnership model: AMET University provides the academic framework, degree conferral, examinations, and campus infrastructure, while Emversity (www.emversity.com) delivers the industry-skilling component — including industry guest lectures, employer-co-designed modules, structured hospital internships, and placement assistance through its network of 500+ healthcare employer partners.\n\nGraduates are equipped for administrative, operational, and support management roles across hospitals, diagnostic centres, health insurance companies, and healthcare services organisations.",
        eligibility: "Candidates must have passed 10+2 (or equivalent) from a recognised board with any stream.\n\nMinimum aggregate marks as prescribed by AMET University (relaxation for SC/ST/OBC as per university norms)"
      },
      {
        id: "bsc-hons-physiotherapy",
        name: "Bachelor of Physiotherapy",
        category: "UG",
        duration: "5 Years (4 Years on Campus & 1 Year Internship)",
        admission: "Annual",
        careerPath: "Hospitals, Rehabilitation Centres, Sports Medicine Clinics, Orthopaedic Centres, Neurological Care Units, Private Physiotherapy Practices",
        tabs: ['overview', 'eligibility'],
        description: "The Bachelor of Physiotherapy is a five-year undergraduate program that prepares students to become qualified physiotherapy professionals skilled in assessing, diagnosing, and treating movement disorders, musculoskeletal conditions, neurological impairments, and cardiopulmonary dysfunction. The program integrates evidence-based clinical reasoning with hands-on therapeutic techniques, equipping graduates to restore mobility, manage pain, and improve quality of life for patients across all age groups.\n\nThis program at AMET University is delivered through a unique partnership model: AMET University provides the academic framework, degree conferral, examinations, and campus infrastructure, while Emversity (www.emversity.com) delivers the industry-skilling component including AR/VR simulation-based training, employer-co-designed curriculum modules, structured clinical internships, and placement assistance through its network of 500+ healthcare employer partners.\n\nGraduates are equipped to work in hospitals, rehabilitation centres, sports medicine clinics, orthopaedic centres, neurological care units, community health settings, and private physiotherapy practices.",
        eligibility: "10+2 (Science Stream: PCB / PCMB) with minimum 50% / NEET not mandatory for any.\n\nAge & gap: as per UGC norms"
      },
      {
        id: "mba-hospital-admin",
        name: "MBA Hospital Administration",
        category: "PG",
        duration: "2 Years",
        admission: "Annual",
        careerPath: "Hospital Administration, Healthcare Management, Health Policy, Medical Tourism Management",
        tabs: ['overview', 'eligibility'],
        description: "The MBA in Hospital Administration is a two-year postgraduate program designed to develop healthcare leaders and administrators capable of managing complex healthcare delivery systems. The program integrates management principles with healthcare-specific knowledge, preparing graduates for senior administrative and leadership roles in hospitals and healthcare organisations.",
        eligibility: "Any undergraduate degree from a recognised university"
      }
    ]
  }
];
