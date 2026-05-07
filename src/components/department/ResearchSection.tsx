
import React from 'react';
import { Microscope, Users, DollarSign, FileText, TrendingUp, Award, Download, Building, Monitor, BookOpen, FlaskConical, Anchor, Compass, MapPin, Lightbulb, ChevronRight } from 'lucide-react';

interface ResearchSectionProps {
  researchAreas: string[];
  departmentId?: string;
}

const ResearchSection: React.FC<ResearchSectionProps> = ({ researchAreas, departmentId }) => {
  
  // Commerce Department specific research content
  if (departmentId === 'commerce-department') {
    const researchItems = [
      {
        title: 'Research Scholars',
        description: 'Current doctoral research scholars and their work',
        icon: Users,
        file: '/documents/commerce/research-scholars.pdf',
        color: 'from-blue-500 to-indigo-600',
        bgColor: 'from-blue-50 to-indigo-50',
        borderColor: 'border-blue-200',
        buttonColor: 'bg-blue-600 hover:bg-blue-700'
      },
      {
        title: 'Seed Money Projects',
        description: 'Internal research funding and development projects',
        icon: DollarSign,
        file: '/documents/commerce/seed-money-projects.pdf',
        color: 'from-green-500 to-emerald-600',
        bgColor: 'from-green-50 to-emerald-50',
        borderColor: 'border-green-200',
        buttonColor: 'bg-green-600 hover:bg-green-700'
      },
      {
        title: 'Industry Projects',
        description: 'Collaborative research projects with industry partners',
        icon: TrendingUp,
        file: '/documents/commerce/industry-projects.pdf',
        color: 'from-purple-500 to-pink-600',
        bgColor: 'from-purple-50 to-pink-50',
        borderColor: 'border-purple-200',
        buttonColor: 'bg-purple-600 hover:bg-purple-700'
      },
      {
        title: 'Consultancy',
        description: 'Consultancy services and advisory work for businesses',
        icon: FileText,
        file: '/documents/commerce/consultancy.pdf',
        color: 'from-orange-500 to-amber-600',
        bgColor: 'from-orange-50 to-amber-50',
        borderColor: 'border-orange-200',
        buttonColor: 'bg-orange-600 hover:bg-orange-700'
      }
    ];

    return (
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <Microscope className="h-5 w-5 mr-2 text-aemet-blue" />
          Research & Development
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {researchItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index} 
                className={`bg-gradient-to-br ${item.bgColor} rounded-lg p-6 border-2 ${item.borderColor} hover:shadow-xl transition-all duration-300`}
              >
                <div className="flex flex-col h-full">
                  <div className={`bg-gradient-to-r ${item.color} p-3 rounded-lg w-fit mb-4`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  
                  <h4 className="text-lg font-bold text-aemet-navy mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600 mb-4 flex-grow">{item.description}</p>
                  
                  <a
                    href={item.file}
                    download
                    className={`inline-flex items-center justify-center gap-2 ${item.buttonColor} text-white font-medium px-4 py-3 rounded-lg transition-colors duration-200 text-sm w-full`}
                  >
                    <Download className="h-4 w-4" />
                    Download PDF
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-aemet-blue/5 to-aemet-navy/5 rounded-lg p-6 border border-aemet-blue/20 mt-6">
          <p className="text-sm text-gray-700">
            The Department of Commerce is actively involved in research activities, guiding doctoral scholars, managing seed money projects, collaborating with industry partners, and providing consultancy services to enhance academic and practical knowledge in commerce and business domains.
          </p>
        </div>
      </div>
    );
  }
  
  // AMET Business School specific research content
  if (departmentId === 'amet-business-school') {
    const absResearchDocuments = [
      {
        title: "List of PhD Degree Awarded (up to 2024)",
        description: "Complete list of doctoral degrees awarded",
        file: "/documents/abs/List_of_PhD_degree_awarded_upto_2024.docx",
        icon: Award,
        color: "blue"
      },
      {
        title: "PhD Scholars Details",
        description: "Current doctoral research scholars information",
        file: "/documents/abs/ABS_PhD_Scholars_Details.xlsx",
        icon: Users,
        color: "purple"
      },
      {
        title: "Seed Money Project Details",
        description: "Internal research funding projects",
        file: "/documents/abs/Seed_Money_Project_Details.docx",
        icon: DollarSign,
        color: "green"
      },
      {
        title: "Consultancy, Testing & Training",
        description: "Industry consultancy and training programs",
        file: "/documents/abs/ConsultancyTestingTraining.docx",
        icon: FileText,
        color: "amber"
      },
      {
        title: "Faculty as Consultant of Industries",
        description: "Faculty industry consultancy details",
        file: "/documents/abs/Faculty_as_consultant_of_the_industries.docx",
        icon: TrendingUp,
        color: "cyan"
      },
      {
        title: "Research Areas",
        description: "Department research focus areas",
        file: "/documents/abs/RESEARCH_AREAS.docx",
        icon: Microscope,
        color: "red"
      }
    ];

    const getColorClasses = (color: string) => {
      const colors: Record<string, { bg: string; border: string; icon: string; button: string; buttonHover: string }> = {
        blue: { bg: "from-blue-50 to-indigo-50", border: "border-blue-100", icon: "text-aemet-blue", button: "bg-aemet-blue", buttonHover: "hover:bg-aemet-navy" },
        purple: { bg: "from-purple-50 to-pink-50", border: "border-purple-100", icon: "text-purple-600", button: "bg-purple-600", buttonHover: "hover:bg-purple-700" },
        green: { bg: "from-green-50 to-emerald-50", border: "border-green-100", icon: "text-green-600", button: "bg-green-600", buttonHover: "hover:bg-green-700" },
        amber: { bg: "from-amber-50 to-orange-50", border: "border-amber-100", icon: "text-amber-600", button: "bg-amber-600", buttonHover: "hover:bg-amber-700" },
        cyan: { bg: "from-cyan-50 to-blue-50", border: "border-cyan-100", icon: "text-cyan-600", button: "bg-cyan-600", buttonHover: "hover:bg-cyan-700" },
        red: { bg: "from-red-50 to-pink-50", border: "border-red-100", icon: "text-red-600", button: "bg-red-600", buttonHover: "hover:bg-red-700" }
      };
      return colors[color] || colors.blue;
    };

    return (
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <Microscope className="h-5 w-5 mr-2 text-aemet-blue" />
          Research & Development
        </h3>
        
        {absResearchDocuments.map((doc, index) => {
          const colors = getColorClasses(doc.color);
          const IconComponent = doc.icon;
          return (
            <div key={index} className={`bg-gradient-to-br ${colors.bg} p-6 rounded-lg border ${colors.border}`}>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <IconComponent className={`w-6 h-6 ${colors.icon}`} />
                  <div>
                    <h4 className="text-lg font-semibold text-aemet-navy">{doc.title}</h4>
                    <p className="text-sm text-gray-600">{doc.description}</p>
                  </div>
                </div>
                <a 
                  href={doc.file} 
                  download
                  className={`inline-flex items-center px-4 py-2 ${colors.button} text-white rounded-lg ${colors.buttonHover} transition-colors text-sm`}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </a>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  
  // Information Technology specific research content
  if (departmentId === 'information-technology') {
    return (
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-aemet-navy mb-6">Research</h3>
        
        {/* Seed Money Projects */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <DollarSign className="w-6 h-6 text-purple-600" />
              <div>
                <h4 className="text-lg font-semibold text-aemet-navy">Seed Money Projects</h4>
                <p className="text-sm text-gray-600">Internal research funding projects</p>
              </div>
            </div>
            <a 
              href="/research/it/seed-money-projects.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm"
            >
              <Download className="h-4 w-4 mr-2" />
              Download
            </a>
          </div>
        </div>

        {/* Projects Funded by Govt */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Award className="w-6 h-6 text-green-600" />
              <div>
                <h4 className="text-lg font-semibold text-aemet-navy">Projects Funded by Government</h4>
                <p className="text-sm text-gray-600">Government-funded research projects</p>
              </div>
            </div>
            <a 
              href="/research/it/projects-funded-by-govt.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
            >
              <Download className="h-4 w-4 mr-2" />
              Download
            </a>
          </div>
        </div>

        {/* Research Scholars */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-aemet-blue" />
              <div>
                <h4 className="text-lg font-semibold text-aemet-navy">Research Scholars</h4>
                <p className="text-sm text-gray-600">Current doctoral research scholars</p>
              </div>
            </div>
            <a 
              href="/research/it/research-scholars.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-aemet-blue text-white rounded-lg hover:bg-aemet-navy transition-colors text-sm"
            >
              <Download className="h-4 w-4 mr-2" />
              Download
            </a>
          </div>
        </div>
      </div>
    );
  }
  
  // Computer Science specific research content
  if (departmentId === 'computer-science') {
    const thrustAreas = [
      "Artificial Intelligence and Machine Learning",
      "Data Science and Big Data Analytics",
      "Cybersecurity and Blockchain Technologies",
      "Cloud Computing and Edge Computing",
      "Internet of Things (IoT) and Smart Systems",
      "Natural Language Processing (NLP) and Generative AI",
      "Computer Vision and Deep Learning",
      "Human–Computer Interaction and Digital Wellbeing",
      "GeoAI (Geospatial Artificial Intelligence) and Maritime Data Analytics",
    ];

    const researchFacilities = [
      "AI and Machine Learning Lab",
      "Cybersecurity Lab with ethical hacking and forensic tools",
      "Data Science Lab with Python, R, and Big Data platforms",
      "Dedicated Research Server for advanced computational experiments",
    ];

    return (
      <div className="space-y-8">
        {/* Overview */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
          <h3 className="text-xl font-bold text-aemet-navy mb-4 flex items-center">
            <Microscope className="h-5 w-5 mr-2 text-aemet-blue" />
            Research - Thrust Areas, Facilities and Related Information
          </h3>
          <p className="text-gray-700 leading-relaxed">
            The Department of Computer Science and Engineering at AMET University actively promotes research and innovation in emerging areas of computing and intelligent systems. The department provides a collaborative research ecosystem supported by high performance computing infrastructure, modern laboratories, and strong industry-academic partnerships.
          </p>
        </section>

        {/* Thrust Areas */}
        <section className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <h4 className="text-lg font-bold text-aemet-navy mb-4 flex items-center">
            <Lightbulb className="h-5 w-5 mr-2 text-aemet-blue" />
            Thrust Areas of Research
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {thrustAreas.map((area, index) => (
              <div
                key={index}
                className="flex items-start gap-2 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100"
              >
                <ChevronRight className="h-4 w-4 text-aemet-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">{area}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Research Facilities */}
        <section className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <h4 className="text-lg font-bold text-aemet-navy mb-4 flex items-center">
            <Building className="h-5 w-5 mr-2 text-aemet-blue" />
            Research Facilities
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {researchFacilities.map((facility, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg border border-purple-200"
              >
                <Monitor className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{facility}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Ph.D. Research */}
        <section className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <h4 className="text-lg font-bold text-aemet-navy mb-4 flex items-center">
            <Award className="h-5 w-5 mr-2 text-aemet-blue" />
            Ph.D. Research
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200 text-center">
              <p className="text-3xl font-bold text-green-600">-</p>
              <p className="text-gray-700">Ph.D.'s Completed</p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-4 rounded-lg border border-amber-200 text-center">
              <p className="text-3xl font-bold text-amber-600">10</p>
              <p className="text-gray-700">Ph.D.'s Ongoing</p>
            </div>
          </div>
          <p className="text-gray-700 text-sm bg-gray-50 p-4 rounded-lg">
            Research scholars work on interdisciplinary topics in AI, Cybersecurity, Healthcare and Smart Systems under the supervision of experienced faculty, contributing to publications in Scopus and SCI-indexed journals.
          </p>
        </section>

        {/* Collaborations */}
        <section className="bg-gradient-to-r from-aemet-blue/5 to-aemet-navy/5 rounded-lg p-6 border border-aemet-blue/20">
          <h4 className="text-lg font-bold text-aemet-navy mb-3 flex items-center">
            <Users className="h-5 w-5 mr-2 text-aemet-blue" />
            Collaborations
          </h4>
          <p className="text-gray-700">
            The Department collaborates with industry partners such as <span className="font-semibold text-aemet-navy">IBM</span>, <span className="font-semibold text-aemet-navy">Red Hat</span>, <span className="font-semibold text-aemet-navy">Kalvium</span>, and <span className="font-semibold text-aemet-navy">NxtWave</span> to align academic research with current industry trends and applications.
          </p>
        </section>

        {/* Downloads (existing files) */}
        <section className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <h4 className="text-lg font-bold text-aemet-navy mb-4 flex items-center">
            <Download className="h-5 w-5 mr-2 text-aemet-blue" />
            Downloads
          </h4>

          <div className="space-y-4">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-aemet-blue" />
                  <div>
                    <h5 className="text-lg font-semibold text-aemet-navy">Research Scholars</h5>
                    <p className="text-sm text-gray-600">List of research scholars and their work</p>
                  </div>
                </div>
                <a
                  href="/documents/Research-Scholars.pdf"
                  download
                  className="inline-flex items-center px-4 py-2 bg-aemet-blue text-white rounded-lg hover:bg-aemet-navy transition-colors text-sm"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Download
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-100">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <DollarSign className="w-6 h-6 text-green-600" />
                  <div>
                    <h5 className="text-lg font-semibold text-aemet-navy">Projects Funded by Govt</h5>
                    <p className="text-sm text-gray-600">Government-funded research projects</p>
                  </div>
                </div>
                <a
                  href="/documents/Projects-Funded-by-Govt.pdf"
                  download
                  className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Download
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-100">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <Microscope className="w-6 h-6 text-purple-600" />
                  <div>
                    <h5 className="text-lg font-semibold text-aemet-navy">Seed Money Projects</h5>
                    <p className="text-sm text-gray-600">Seed money funded projects</p>
                  </div>
                </div>
                <a
                  href="/documents/Seed-Money-Projects.pdf"
                  download
                  className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Download
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  // Marine Engineering specific research content
  if (departmentId === 'marine-engineering') {
    const supervisors = [
      { name: "Dr.A.Suresh", designation: "Professor & Dy.HoD", expertise: "Power Electronics" },
      { name: "Dr. S. Ranganathan", designation: "Professor", expertise: "Refrigeration and Air Conditioning" },
      { name: "Dr.Ananthi Christy", designation: "Professor", expertise: "Power Systems" },
      { name: "Dr.S.Satish Kumar", designation: "Associate Professor", expertise: "Power Electronics" },
      { name: "Dr.Bharathi.K", designation: "Associate Professor", expertise: "Power Electronics" },
      { name: "Dr.S.Ponmani", designation: "Associate Professor", expertise: "Drilling, Oil Spill & Ocean Engineering" },
      { name: "Dr. P. Shanthi", designation: "Assistant Professor", expertise: "Power Electronics" },
      { name: "Dr.S.V.Saravanan", designation: "Assistant Professor", expertise: "Power Systems" },
      { name: "Dr.M. Tamilarasi", designation: "Assistant Professor", expertise: "Power Systems" },
      { name: "Dr.M. Ramamurthy", designation: "Assistant Professor", expertise: "Manufacturing Engineering" },
      { name: "Dr. Thanikasalam.A", designation: "Assistant Professor", expertise: "Manufacturing Engineering" },
      { name: "Dr.E.Ravikumar", designation: "Assistant Professor", expertise: "Production Engineering" },
      { name: "Dr.S.Muthurajan", designation: "Assistant Professor", expertise: "Power Electronics" },
    ];

    return (
      <div className="space-y-8">
        {/* Research & Thrust Areas Header */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg border border-blue-100">
          <div className="flex items-center gap-3 mb-6">
            <Microscope className="w-6 h-6 text-aemet-blue" />
            <h2 className="text-2xl font-semibold text-aemet-navy">Research & Thrust Areas</h2>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-blue-200 space-y-4">
            <p className="text-gray-700">
              The Department of Marine Engineering actively promotes cutting-edge research in marine technology and allied fields. Faculty supervisors guide research scholars in key areas such as ship design, marine propulsion, renewable ocean energy, and emerging maritime technologies. Their expert mentorship ensures strong technical depth, innovation, and academic rigor in every research project.
            </p>
            <p className="text-gray-700">
              Collaborative research with industry partners enhances the practical relevance and global impact of the department's work. With a strong focus on innovation and sustainability, the research culture encourages scholars to contribute meaningful advancements that shape the future of maritime engineering.
            </p>
          </div>
        </section>

        {/* Supervisors Table */}
        <section className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-lg border border-green-100">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-6 h-6 text-green-600" />
            <h2 className="text-2xl font-semibold text-aemet-navy">Research Supervisors & Thrust Areas</h2>
          </div>
          
          <p className="text-gray-700 mb-6">
            The following supervisors identified under various thrust areas are listed below.
          </p>
          
          <div className="bg-white rounded-lg border border-green-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-aemet-blue/10">
                    <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-aemet-navy">Sl.No</th>
                    <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-aemet-navy">Name of the Supervisor</th>
                    <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-aemet-navy">Designation</th>
                    <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-aemet-navy">Area of Expertise</th>
                  </tr>
                </thead>
                <tbody>
                  {supervisors.map((supervisor, index) => (
                    <tr key={index} className="hover:bg-green-50/50">
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">{index + 1}</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700 font-medium">{supervisor.name}</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">{supervisor.designation}</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">{supervisor.expertise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* HoD Signature */}
        <section className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-lg border border-amber-100">
          <div className="text-right">
            <p className="text-sm text-gray-600 mb-1">Hod/ Marine Engineering</p>
            <p className="font-semibold text-aemet-navy">(C/E M Muthukumar)</p>
          </div>
        </section>
      </div>
    );
  }
  
  // Nautical Sciences specific research content
  if (departmentId === 'nautical-sciences') {
    const researchFellows = [
      { sno: 1, name: "Capt. P. Rajkumar", year: "2024-25 (23.05.2024)", category: "Part Time" },
      { sno: 2, name: "Capt. Kais A. Hassam", year: "2024-25 (23.05.2024)", category: "Part Time" },
    ];

    return (
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-aemet-navy mb-6">Department Facilities (Research)</h3>
        
        {/* Infrastructure and Facilities */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg border border-blue-200">
          <div className="flex items-center gap-3 mb-4">
            <Building className="w-6 h-6 text-aemet-blue" />
            <h4 className="text-xl font-semibold text-aemet-navy">Infrastructure and Facilities</h4>
          </div>
          <p className="text-gray-700 leading-relaxed">
            The department is equipped with comprehensive infrastructure and state-of-the-art facilities that support high-quality teaching, advanced learning, and impactful research.
          </p>
        </section>

        {/* ICT-Enabled Learning Environment */}
        <section className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-lg border border-purple-200">
          <div className="flex items-center gap-3 mb-4">
            <Monitor className="w-6 h-6 text-purple-600" />
            <h4 className="text-xl font-semibold text-aemet-navy">ICT-Enabled Learning Environment</h4>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            All classrooms are fully integrated with modern Information and Communication Technology (ICT) tools, including Smart Boards, LCD projectors, audio–video systems, and video conferencing facilities. These resources facilitate interactive pedagogy, blended learning, and technology-driven instruction.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Dedicated provisions for <strong>Flipped Classroom Activities</strong> promote active learning, enabling students to engage with course content beyond the traditional classroom environment.
          </p>
        </section>

        {/* Library and Digital Learning Resources */}
        <section className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-lg border border-green-200">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 text-green-600" />
            <h4 className="text-xl font-semibold text-aemet-navy">Library and Digital Learning Resources</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-white p-4 rounded-lg border border-green-200 text-center">
              <div className="text-3xl font-bold text-aemet-blue">8,702</div>
              <div className="text-sm text-gray-600">Books</div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-green-200 text-center">
              <div className="text-3xl font-bold text-aemet-blue">1,910</div>
              <div className="text-sm text-gray-600">Titles</div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-green-200 text-center">
              <div className="text-3xl font-bold text-aemet-blue">12</div>
              <div className="text-sm text-gray-600">Journals (3 National, 9 International)</div>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            To complement physical resources, the <strong>Digital Library</strong> provides access to e-books, online databases, and international research publications, enriching students' academic pursuits, project work, and research activities.
          </p>
        </section>

        {/* Specialized Laboratories */}
        <section className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-lg border border-orange-200">
          <div className="flex items-center gap-3 mb-4">
            <FlaskConical className="w-6 h-6 text-orange-600" />
            <h4 className="text-xl font-semibold text-aemet-navy">Specialized Laboratories</h4>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            To ensure strong practical exposure and experiential learning, the department offers well-established laboratory facilities, including:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg border border-orange-200 text-center">
              <Anchor className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <div className="font-semibold text-aemet-navy">Seamanship Laboratory</div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-orange-200 text-center">
              <Compass className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <div className="font-semibold text-aemet-navy">Navigation Laboratory</div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-orange-200 text-center">
              <MapPin className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <div className="font-semibold text-aemet-navy">Chart Room</div>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            These laboratories support practical training in core maritime domains and help students develop essential operational competencies.
          </p>
          <div className="bg-white p-4 rounded-lg border border-orange-300">
            <p className="text-gray-700">
              Additionally, the department is equipped with advanced simulation systems such as the <strong>Polaris Bridge Simulator</strong> and the <strong>Full Mission Navigation Bridge Simulator</strong>, providing highly realistic, industry-aligned training environments.
            </p>
          </div>
        </section>

        {/* Research and Innovation Support */}
        <section className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-lg border border-teal-200">
          <div className="flex items-center gap-3 mb-4">
            <Lightbulb className="w-6 h-6 text-teal-600" />
            <h4 className="text-xl font-semibold text-aemet-navy">Research and Innovation Support</h4>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            The department actively promotes a culture of research, innovation, and entrepreneurship through several structured initiatives:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <ChevronRight className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700"><strong>Skill Enhancement Training Programs</strong> designed to strengthen research capabilities.</span>
            </li>
            <li className="flex items-start gap-3">
              <ChevronRight className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700"><strong>Financial Assistance</strong> for students and faculty to undertake innovative projects through the Seed Money Scheme.</span>
            </li>
            <li className="flex items-start gap-3">
              <ChevronRight className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700"><strong>Institutional Support for Patent Filing</strong>, encouraging research breakthroughs and intellectual property creation.</span>
            </li>
            <li className="flex items-start gap-3">
              <ChevronRight className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700"><strong>Incubation and Innovation Center</strong>, offering opportunities to develop prototypes and creative solutions.</span>
            </li>
            <li className="flex items-start gap-3">
              <ChevronRight className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700"><strong>Hackathons and Innovation Challenges</strong> to nurture critical thinking and problem-solving skills.</span>
            </li>
          </ul>
        </section>

        {/* Summary Note */}
        <div className="bg-gradient-to-r from-aemet-navy to-aemet-blue p-6 rounded-lg text-white">
          <p className="leading-relaxed">
            With its robust digital infrastructure, specialized laboratories, research funding pathways, and a strong innovation ecosystem, the department provides a dynamic, future-ready academic environment aligned with global educational and industry benchmarks.
          </p>
        </div>

        {/* Research Fellows Table */}
        <section className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-aemet-navy to-aemet-blue p-4">
            <h4 className="text-lg font-bold text-white flex items-center gap-2">
              <Users className="h-5 w-5" />
              Research Fellows
            </h4>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-aemet-navy border-b">S.No</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-aemet-navy border-b">Name of Research Fellow</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-aemet-navy border-b">Year of Enrolment</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-aemet-navy border-b">Category of Ph.D. Registration</th>
                </tr>
              </thead>
              <tbody>
                {researchFellows.map((fellow, index) => (
                  <tr key={fellow.sno} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b">{fellow.sno}</td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b font-medium">{fellow.name}</td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b">{fellow.year}</td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b">{fellow.category}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    );
  }
  
  // Mining Engineering specific research content
  if (departmentId === 'mining-engineering') {
    const miningResearchDocuments = [
      {
        title: "Research Scholars",
        description: "Information about current research scholars and their work",
        pdfPath: "/documents/mining-research-scholars.pdf",
        iconColor: "text-blue-600",
        bgColor: "from-blue-50 to-indigo-50",
        borderColor: "border-blue-200",
        buttonColor: "bg-blue-600 hover:bg-blue-700"
      },
      {
        title: "Industry Projects",
        description: "Collaborative projects with industry partners",
        pdfPath: "/documents/mining-industry-projects.pdf",
        iconColor: "text-green-600",
        bgColor: "from-green-50 to-emerald-50",
        borderColor: "border-green-200",
        buttonColor: "bg-green-600 hover:bg-green-700"
      },
      {
        title: "Seed Money Projects",
        description: "Faculty-led research initiatives funded through seed grants",
        pdfPath: "/documents/mining-seed-money-projects.pdf",
        iconColor: "text-purple-600",
        bgColor: "from-purple-50 to-pink-50",
        borderColor: "border-purple-200",
        buttonColor: "bg-purple-600 hover:bg-purple-700"
      },
      {
        title: "Consultancy",
        description: "Professional consultancy services and projects",
        pdfPath: "/documents/mining-consultancy.pdf",
        iconColor: "text-orange-600",
        bgColor: "from-orange-50 to-amber-50",
        borderColor: "border-orange-200",
        buttonColor: "bg-orange-600 hover:bg-orange-700"
      }
    ];

    return (
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-aemet-navy mb-6">Research</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {miningResearchDocuments.map((doc, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${doc.bgColor} p-6 rounded-lg border ${doc.borderColor}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <Microscope className={`w-6 h-6 ${doc.iconColor}`} />
                <h4 className="text-lg font-semibold text-aemet-navy">{doc.title}</h4>
              </div>
              <p className="text-sm text-gray-700 mb-4">{doc.description}</p>
              <a 
                href={doc.pdfPath}
                download
                className={`inline-flex items-center px-4 py-2 ${doc.buttonColor} text-white rounded-lg transition-colors text-sm font-medium`}
              >
                <FileText className="h-4 w-4 mr-2" />
                Download PDF
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Naval Architecture specific research content
  if (departmentId === 'naval-architecture') {
    return (
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-aemet-navy mb-6">Research</h3>
        
        {/* Research Scholars */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-aemet-blue" />
              <h4 className="text-lg font-semibold text-aemet-navy">Research Scholars</h4>
            </div>
            <a 
              href="/documents/naval-architecture/Research-Scholars.pdf" 
              download
              className="inline-flex items-center px-4 py-2 bg-aemet-blue text-white rounded-lg hover:bg-aemet-navy transition-colors text-sm"
            >
              <FileText className="h-4 w-4 mr-2" />
              Download
            </a>
          </div>
        </div>

        {/* Projects Funded by Govt */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <DollarSign className="w-6 h-6 text-green-600" />
              <h4 className="text-lg font-semibold text-aemet-navy">Projects Funded by Govt</h4>
            </div>
            <a 
              href="/documents/naval-architecture/Projects-Funded-by-Govt.pdf" 
              download
              className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
            >
              <FileText className="h-4 w-4 mr-2" />
              Download
            </a>
          </div>
        </div>

        {/* Industry Projects */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Microscope className="w-6 h-6 text-purple-600" />
              <h4 className="text-lg font-semibold text-aemet-navy">Industry Projects</h4>
            </div>
            <a 
              href="/documents/naval-architecture/Industry-Projects.pdf" 
              download
              className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm"
            >
              <FileText className="h-4 w-4 mr-2" />
              Download
            </a>
          </div>
        </div>

        {/* Seed Money Projects */}
        <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-lg border border-orange-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Award className="w-6 h-6 text-orange-600" />
              <h4 className="text-lg font-semibold text-aemet-navy">Seed Money Projects</h4>
            </div>
            <a 
              href="/documents/naval-architecture/Seed-Money-Projects.pdf" 
              download
              className="inline-flex items-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-sm"
            >
              <FileText className="h-4 w-4 mr-2" />
              Download
            </a>
          </div>
        </div>

        {/* Consultancy Projects */}
        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-lg border border-cyan-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-cyan-600" />
              <h4 className="text-lg font-semibold text-aemet-navy">Consultancy Projects</h4>
            </div>
            <a 
              href="/documents/naval-architecture/Consultancy.pdf" 
              download
              className="inline-flex items-center px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors text-sm"
            >
              <FileText className="h-4 w-4 mr-2" />
              Download
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Petroleum Engineering specific research content
  if (departmentId === 'petroleum-engineering') {
    return (
      <div className="space-y-8">
        {/* PhD Scholars Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg border border-blue-100">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-6 h-6 text-aemet-blue" />
            <h2 className="text-2xl font-semibold text-aemet-navy">List of Ph.D. Scholars</h2>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-blue-200 space-y-4">
            <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-aemet-blue text-white rounded-full flex items-center justify-center font-semibold text-sm">
                1
              </div>
              <div>
                <p className="font-medium text-gray-800">Mr. A. Hameed Hussain</p>
                <p className="text-sm text-gray-600">Guided by Dr. S. Ponmani, Assistant Professor</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-aemet-blue text-white rounded-full flex items-center justify-center font-semibold text-sm">
                2
              </div>
              <div>
                <p className="font-medium text-gray-800">Mrs. V. Amirthavalli</p>
                <p className="text-sm text-gray-600">Guided by Dr. T. Nagalakshmi (Former Professor)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Government Funded Projects Section */}
        <section className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-lg border border-green-100">
          <div className="flex items-center gap-3 mb-6">
            <DollarSign className="w-6 h-6 text-green-600" />
            <h2 className="text-2xl font-semibold text-aemet-navy">Government Funded Projects</h2>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-green-200 space-y-6">
            <div className="p-5 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-start gap-3 mb-3">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  1
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-800">Mrs. V. Amirthavalli, Co-PI</h4>
                    <span className="text-green-700 font-bold text-lg">₹18.3 Lakhs</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    <span className="font-medium">Period:</span> 2019-20 (Completed)
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <span className="font-medium">Project:</span> CSIR funded project on "Self – generation of methanol for biodiesel production by visible light photoreduction of carbondioxide using SnS-ZnO quantum dot core shell nanostructures"
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-start gap-3 mb-3">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  2
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-800">Dr. S. Ponmani</h4>
                    <span className="text-green-700 font-bold text-lg">₹22.12 Lakhs</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    <span className="font-medium">Period:</span> 2017-20 (Completed)
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <span className="font-medium">Project:</span> "An Ecofriendly Technology for the Enhancement of Rheological Properties of Water Based Drilling Mud" funded by SERB
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-green-200">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600 font-medium">Total Government Funding</p>
                <p className="text-2xl font-bold text-green-700">₹40.42 Lakhs</p>
              </div>
            </div>
          </div>
        </section>

        {/* Seed Money Projects Section */}
        <section className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-lg border border-purple-100">
          <div className="flex items-center gap-3 mb-6">
            <Microscope className="w-6 h-6 text-purple-600" />
            <h2 className="text-2xl font-semibold text-aemet-navy">Seed Money Projects</h2>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-purple-200">
            <p className="text-gray-700 mb-6">
              Our Faculty has been consistently engaged in the pursuit of their own independent deliberations by way of 
              doing research. Our Faculty consistently work towards the development of inter‑linkages across teaching and research.
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-purple-50">
                    <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-aemet-navy">Sl. No</th>
                    <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-aemet-navy">Name of the Faculty</th>
                    <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-aemet-navy">Department</th>
                    <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-aemet-navy">Sanctioned Amount (INR in Lakhs)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-aemet-navy">Year of Sanctioned</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-purple-50/50">
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">1.</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">Dr. A. Rajesh Kanna</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">Petroleum Engineering</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">0.32</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">2020</td>
                  </tr>
                  <tr className="hover:bg-purple-50/50">
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">2.</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">Dr. A. Rajesh Kanna</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">Petroleum Engineering</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">0.1</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">2020</td>
                  </tr>
                  <tr className="hover:bg-purple-50/50">
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">3.</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">Dr. P. Ramesh</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">Petroleum Engineering</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">0.61</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">2020</td>
                  </tr>
                  <tr className="hover:bg-purple-50/50">
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">4.</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">Dr. T. Nagalakshmi</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">Petroleum Engineering</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">0.4</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">2020</td>
                  </tr>
                  <tr className="hover:bg-purple-50/50">
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">5.</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">Dr. M. J. Prince</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">Petroleum Engineering</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">0.4</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">2020</td>
                  </tr>
                  <tr className="hover:bg-purple-50/50">
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">6.</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">Dr. A. Rajaesh Kanna</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">Petroleum Engineering</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">1.75</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">2019</td>
                  </tr>
                  <tr className="hover:bg-purple-50/50">
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">7.</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">V. Amrithavalli</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">Petroleum Engineering</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">0.3</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">2019</td>
                  </tr>
                  <tr className="hover:bg-purple-50/50">
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">8.</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">Dr. S. Ponmani</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">Petroleum Engineering</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">0.25</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">2019</td>
                  </tr>
                  <tr className="hover:bg-purple-50/50">
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">9.</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">Dr. S. Nambirajan</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">Petroleum Engineering</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">0.2</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">2019</td>
                  </tr>
                  <tr className="hover:bg-purple-50/50">
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">10.</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">P. Ilavalagan</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">Petroleum Engineering</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">0.19</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">2018</td>
                  </tr>
                  <tr className="hover:bg-purple-50/50">
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">11.</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">H. Sundaram</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">Petroleum Engineering</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">0.28</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">2017</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 pt-6 border-t border-purple-200">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600 font-medium">Total Seed Money Funding</p>
                <p className="text-2xl font-bold text-purple-700">₹4.8 Lakhs</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Mechanical Engineering specific research content
  if (departmentId === 'mechanical-engineering') {
    return (
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <Microscope className="h-5 w-5 mr-2 text-aemet-blue" />
          Research Activities
        </h3>
        
        {/* Research Scholars */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border-2 border-blue-200 hover:shadow-md transition-all">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-aemet-navy">Research Scholars</h4>
                <p className="text-sm text-gray-600">PhD candidates and research scholars information</p>
              </div>
            </div>
            <a 
              href="/documents/mechanical-engineering-Research-Scholars.pdf" 
              download
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              <FileText className="h-4 w-4 mr-2" />
              Download
            </a>
          </div>
        </div>

        {/* Projects Funded by Govt */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border-2 border-green-200 hover:shadow-md transition-all">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-aemet-navy">Projects Funded by Govt</h4>
                <p className="text-sm text-gray-600">Government-funded research projects and grants</p>
              </div>
            </div>
            <a 
              href="/documents/mechanical-engineering-Projects-Funded-by-Govt.pdf" 
              download
              className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
            >
              <FileText className="h-4 w-4 mr-2" />
              Download
            </a>
          </div>
        </div>

        {/* Industry Projects */}
        <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-lg border-2 border-orange-200 hover:shadow-md transition-all">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-aemet-navy">Industry Projects</h4>
                <p className="text-sm text-gray-600">Industry-sponsored research and collaboration projects</p>
              </div>
            </div>
            <a 
              href="/documents/mechanical-engineering-Industry-Projects.pdf" 
              download
              className="inline-flex items-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-sm font-medium"
            >
              <FileText className="h-4 w-4 mr-2" />
              Download
            </a>
          </div>
        </div>

        {/* Seed Money Projects */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border-2 border-purple-200 hover:shadow-md transition-all">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                <Microscope className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-aemet-navy">Seed Money Projects</h4>
                <p className="text-sm text-gray-600">Internal seed funding for innovative research initiatives</p>
              </div>
            </div>
            <a 
              href="/documents/mechanical-engineering-Seed-Money-Projects.pdf" 
              download
              className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium"
            >
              <FileText className="h-4 w-4 mr-2" />
              Download
            </a>
          </div>
        </div>

        {/* Consultancy Project */}
        <div className="bg-gradient-to-br from-cyan-50 to-sky-50 p-6 rounded-lg border-2 border-cyan-200 hover:shadow-md transition-all">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-aemet-navy">Consultancy Project</h4>
                <p className="text-sm text-gray-600">Industrial consultancy and advisory services</p>
              </div>
            </div>
            <a 
              href="/documents/mechanical-engineering-Consultancy.pdf" 
              download
              className="inline-flex items-center px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors text-sm font-medium"
            >
              <FileText className="h-4 w-4 mr-2" />
              Download
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Food Processing specific research content
  if (departmentId === 'food-processing') {
    const consultancyProjects = [
      {
        slNo: 1,
        investigator: "Dr. John Wyson",
        title: "Development of Nutrients enriched noodles by fortification of underutilized millets – 2019",
        amount: "50,000"
      },
      {
        slNo: 2,
        investigator: "Dr. John Wyson",
        title: "Study on Nutritive importance and its Pharmacological application on Moringa oliefera – 2019",
        amount: "50,000"
      },
      {
        slNo: 3,
        investigator: "Dr. Sasi Praba",
        title: "Studies on low glycemic index foods and its process optimization – 2019",
        amount: "40,000"
      },
      {
        slNo: 4,
        investigator: "Mr. Karthikeyan",
        title: "Development of Gluten free cookies – 2019",
        amount: "75,000"
      }
    ];

    return (
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <Microscope className="h-5 w-5 mr-2 text-aemet-blue" />
          Research
        </h3>

        {/* Consultancy Projects Section */}
        <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg p-6 border border-orange-200">
          <h4 className="text-lg font-semibold text-aemet-navy mb-4 flex items-center">
            <Award className="h-5 w-5 mr-2 text-orange-600" />
            Consultancy Project
          </h4>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-gradient-to-r from-orange-600 to-amber-600 text-white">
                  <th className="border border-orange-300 px-4 py-3 text-left font-semibold w-16">S.No</th>
                  <th className="border border-orange-300 px-4 py-3 text-left font-semibold">Name of the Investigator</th>
                  <th className="border border-orange-300 px-4 py-3 text-left font-semibold">Title of the Projects</th>
                  <th className="border border-orange-300 px-4 py-3 text-right font-semibold">Amount Sanctioned (Rs.)</th>
                </tr>
              </thead>
              <tbody>
                {consultancyProjects.map((project, index) => (
                  <tr key={project.slNo} className={index % 2 === 0 ? "hover:bg-orange-50" : "hover:bg-orange-50 bg-orange-50/30"}>
                    <td className="border border-gray-200 px-4 py-3 text-gray-800">{project.slNo}</td>
                    <td className="border border-gray-200 px-4 py-3 font-medium text-aemet-navy">{project.investigator}</td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-800">{project.title}</td>
                    <td className="border border-gray-200 px-4 py-3 text-right text-gray-800 font-medium">{project.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Summary Section */}
        <div className="bg-gradient-to-r from-aemet-blue/5 to-aemet-navy/5 rounded-lg p-6 border border-aemet-blue/20">
          <p className="text-sm text-gray-700">
            The Department of Food Processing Technology is actively engaged in research and consultancy projects focusing on food fortification, nutrition enhancement, and development of health-conscious food products. Our faculty members are dedicated to advancing food technology through innovative research.
          </p>
        </div>
      </div>
    );
  }


  // Default research areas display for other departments
  return (
    <div>
      <h3 className="text-xl font-bold text-aemet-navy mb-6">Research Areas</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {researchAreas.map((area, index) => (
          <div 
            key={index}
            className="p-4 bg-white border border-gray-200 rounded-lg hover:border-aemet-blue/50 transition-colors"
          >
            <div className="flex items-center">
              <div className="h-2 w-2 bg-aemet-blue rounded-full mr-3"></div>
              <span className="text-gray-700">{area}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchSection;
