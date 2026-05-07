import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { 
  Info,
  Eye,
  Network,
  CheckCircle,
  Shield,
  FileText, 
  Users, 
  User,
  Users2,
  FolderOpen,
  ClipboardList,
  Calendar,
  TrendingUp,
  Download,
  Star,
  Award,
  Target,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

type IQACTab = {
  id: string;
  title: string;
  icon: React.ElementType;
};

// Split tabs into two groups for better display on smaller screens
const firstRowTabs: IQACTab[] = [
  {
    id: "about",
    title: "About IQAC of AMET",
    icon: Info,
  },
  {
    id: "vision-mission",
    title: "Vision & Mission",
    icon: Eye,
  },
  {
    id: "collaborative-framework",
    title: "Collaborative Framework",
    icon: Network,
  },
  {
    id: "functions",
    title: "Functions of IQAC",
    icon: CheckCircle,
  },
  {
    id: "governance",
    title: "Governance & Strategic Leadership",
    icon: Shield,
  },
  {
    id: "outcomes",
    title: "Outcomes of IQAC Activities",
    icon: Award,
  },
  {
    id: "accreditation",
    title: "Accreditation & Quality Benchmarks",
    icon: Star,
  },
  {
    id: "composition",
    title: "Composition of IQAC",
    icon: Users2,
  },
  {
    id: "members",
    title: "Members of IQAC",
    icon: Users,
  },
  {
    id: "coordinator",
    title: "Co-ordinator",
    icon: User,
  },
  {
    id: "dept-coordinators",
    title: "Department IQAC Co-ordinators",
    icon: Users2,
  },
  {
    id: "naac-task-force",
    title: "NAAC Task Force Members",
    icon: Users,
  },
];

const secondRowTabs: IQACTab[] = [
  {
    id: "events",
    title: "Events",
    icon: Calendar,
  },
  {
    id: "career-advancement",
    title: "Career Advancement Scheme",
    icon: TrendingUp,
  },
  {
    id: "best-practices",
    title: "Best Practices",
    icon: Star,
  },
  {
    id: "plan-of-action",
    title: "Plan of Action",
    icon: Target,
  },
  {
    id: "naac-cwg",
    title: "NAAC Core Working Group",
    icon: Shield,
  },
  {
    id: "contact",
    title: "Contact",
    icon: Phone,
  },
];

const allTabs = [...firstRowTabs, ...secondRowTabs];

interface IQACTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const IQACTabs: React.FC<IQACTabsProps> = ({ activeTab, onTabChange }) => {
  const isMobile = useIsMobile();
  
  const renderTabRow = (tabs: IQACTab[]) => {
    return tabs.map((tab) => (
      <TabsTrigger
        key={tab.id}
        value={tab.id}
        className={cn(
          "py-2 px-3 md:px-4 flex items-center gap-1 md:gap-2 whitespace-nowrap text-xs md:text-sm",
          "transition-all duration-200 ease-in-out"
        )}
      >
        <tab.icon className="h-3 w-3 md:h-4 md:w-4" />
        <span className="truncate">{tab.title}</span>
      </TabsTrigger>
    ));
  };

  return (
    <div className="w-full">
      <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
        {isMobile ? (
          <>
            <TabsList className="bg-white h-auto p-1 mb-1 flex flex-nowrap overflow-x-auto scrollbar-hide">
              {renderTabRow(firstRowTabs)}
            </TabsList>
            <TabsList className="bg-white h-auto p-1 flex flex-nowrap overflow-x-auto scrollbar-hide">
              {renderTabRow(secondRowTabs)}
            </TabsList>
          </>
        ) : (
          <TabsList className="bg-white h-auto p-1 flex flex-wrap overflow-x-auto">
            {renderTabRow(allTabs)}
          </TabsList>
        )}
        
        {/* Tab Contents */}
        <TabsContent value="about" className="mt-6">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-aemet-navy/5 to-aemet-blue/5 p-6 rounded-lg mb-8 border-l-4 border-aemet-blue">
              <h2 className="text-2xl font-semibold text-aemet-navy mb-4">Welcome to IQAC</h2>
              <p className="text-gray-700 leading-relaxed">
                Welcome to the Internal Quality Assurance Cell (IQAC) of AMET University. The IQAC is dedicated to promoting a culture of continuous improvement and institutional excellence across all academic and administrative spheres. Through systematic planning, collaborative governance, and robust quality benchmarking, we ensure that AMET consistently aligns with national and global standards. We invite all stakeholders to actively contribute to strengthening a vibrant, accountable, and quality-driven academic ecosystem.
              </p>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <Info className="h-6 w-6 text-aemet-blue" />
              <h2 className="text-2xl font-semibold text-aemet-navy">About IQAC of AMET</h2>
            </div>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <blockquote className="border-l-4 border-aemet-blue pl-4 italic text-lg text-aemet-navy bg-gray-50 py-3 rounded-r-lg">
                "Quality is not an act; it is a habit." — Aristotle
              </blockquote>

              <p>
                AMET commenced its journey in 1993 as India's first private maritime academy to offer maritime higher education through a Twinning Programme with Glasgow College of Nautical Science, UK, pioneering globally benchmarked maritime training in the country. With steady growth in academic strength, research capabilities, and international maritime recognition, AMET attained the status of a Deemed-to-be University in 2007.
              </p>

              <p>
                The Internal Quality Assurance Cell (IQAC) of AMET serves as the central body for sustaining and enhancing quality, ensuring that excellence remains the core of institutional development. Since 1998, AMET has consistently maintained ISO certification awarded by the distinguished maritime classification society DNV GL. The University currently holds the ISO 9001:2015 certification, affirming its commitment to systematic processes and academic–administrative excellence through a strong Quality Management System.
              </p>

              <p>
                AMET initiated institution-wide NAAC sensitization in 2011 under the leadership of Prof. Dr. A. Jaffar Hussain, the first Coordinator of the NAAC Steering Committee, laying the foundation for structured internal quality practices. In 2013, the Steering Committee was reconstituted as the Internal Quality Assurance Cell (IQAC) in alignment with NAAC quality frameworks.
              </p>

              <p>
                From 2013 to 2020, Dr. M. Jayaprakashvel served as the Coordinator of IQAC and successfully guided the University through its 1st NAAC Accreditation Cycle in 2015, securing a 'B' Grade with a CGPA of 2.41, a significant milestone in AMET's quality journey. From 2020 to 2024, Dr. D. Arivazhagan led IQAC and steered AMET through the 2nd NAAC Accreditation Cycle in 2020, achieving a commendable 'A' Grade with a CGPA of 3.13, demonstrating marked improvement in institutional performance.
              </p>

              <p>
                In accordance with NAAC guidelines, IQAC functions as a post-accreditation quality sustenance mechanism, striving to develop a conscious, consistent, and catalytic system that enhances academic and administrative excellence. Integrated within the institutional governance structure, the Cell promotes transparent evaluation processes, continual improvement, and performance benchmarking across departments and functional units.
              </p>

              <p>
                During the post-accreditation period, IQAC has effectively coordinated institutional initiatives to foster holistic academic excellence and nurture a strong culture of quality across all domains of university functioning.
              </p>

              <p className="font-medium text-aemet-navy">
                Today, IQAC continues to lead all quality-centric initiatives, ensuring that AMET remains future-ready, globally competitive, and aligned with the highest standards of higher education quality.
              </p>
            </div>
          </div>
        </TabsContent>

        {/* Vision & Mission Tab */}
        <TabsContent value="vision-mission" className="mt-6">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <Eye className="h-6 w-6 text-aemet-blue" />
              <h2 className="text-2xl font-semibold text-aemet-navy">Vision & Mission</h2>
            </div>
            
            <div className="space-y-8">
              {/* Vision Section */}
              <section>
                <h3 className="text-xl font-semibold text-aemet-navy mb-4 flex items-center gap-2">
                  <div className="w-1 h-6 bg-aemet-blue rounded"></div>
                  Vision
                </h3>
                <ul className="space-y-3 text-gray-700 leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="text-aemet-blue mt-1.5">•</span>
                    <span>To establish and strengthen systems and procedures that support the development, sustenance, and continuous enhancement of quality initiatives across AMET's academic and administrative performance.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-aemet-blue mt-1.5">•</span>
                    <span>To integrate all functional bodies of AMET, ensuring a cohesive and holistic approach to quality assurance and improvement.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-aemet-blue mt-1.5">•</span>
                    <span>To elevate AMET to the status of a top-ranked Higher Educational Institution in India across all key quality parameters.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-aemet-blue mt-1.5">•</span>
                    <span>To sustain AMET's NAAC accreditation status and strive toward achieving the highest possible grade.</span>
                  </li>
                </ul>
              </section>

              {/* Mission Section */}
              <section>
                <h3 className="text-xl font-semibold text-aemet-navy mb-4 flex items-center gap-2">
                  <div className="w-1 h-6 bg-aemet-blue rounded"></div>
                  Mission
                </h3>
                <ul className="space-y-3 text-gray-700 leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="text-aemet-blue mt-1.5">•</span>
                    <span>Collaborate closely with other quality-focused entities, including the Quality Management System (QMS).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-aemet-blue mt-1.5">•</span>
                    <span>Establish and uphold quality standards in alignment with NAAC guidelines.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-aemet-blue mt-1.5">•</span>
                    <span>Identify areas that offer scope for quality enhancement across academic and administrative functions.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-aemet-blue mt-1.5">•</span>
                    <span>Nurture and strengthen existing quality practices in academics, administration, and allied institutional activities.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-aemet-blue mt-1.5">•</span>
                    <span>Optimize, expand, and institutionalize best-quality attributes throughout the University.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-aemet-blue mt-1.5">•</span>
                    <span>Develop and refine mechanisms for monitoring and tracking the implementation of quality initiatives.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-aemet-blue mt-1.5">•</span>
                    <span>Foster and embed a culture of quality in every institutional process and activity.</span>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </TabsContent>

        {/* Collaborative Framework Tab */}
        <TabsContent value="collaborative-framework" className="mt-6">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <Network className="h-6 w-6 text-aemet-blue" />
              <h2 className="text-2xl font-semibold text-aemet-navy">Collaborative Framework</h2>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              AMET IQAC works in close coordination with the following bodies to ensure holistic quality enhancement across the University:
            </p>

            <div className="grid gap-4">
              <div className="bg-gradient-to-r from-aemet-navy/5 to-transparent p-4 rounded-lg border-l-4 border-aemet-blue">
                <h4 className="font-semibold text-aemet-navy mb-1">Quality Management System (QMS)</h4>
                <p className="text-gray-600 text-sm">Operates under ISO 9001:2015, ensuring systematic processes, documentation, and continual quality improvement.</p>
              </div>

              <div className="bg-gradient-to-r from-aemet-navy/5 to-transparent p-4 rounded-lg border-l-4 border-aemet-blue">
                <h4 className="font-semibold text-aemet-navy mb-1">Centre for Curriculum Development</h4>
                <p className="text-gray-600 text-sm">Designs, reviews, and updates curricula to ensure academic excellence, industry relevance, and global competitiveness.</p>
              </div>

              <div className="bg-gradient-to-r from-aemet-navy/5 to-transparent p-4 rounded-lg border-l-4 border-aemet-blue">
                <h4 className="font-semibold text-aemet-navy mb-1">Academic Council</h4>
                <p className="text-gray-600 text-sm">The apex academic body responsible for academic policy formulation, curriculum approval, and governance.</p>
              </div>

              <div className="bg-gradient-to-r from-aemet-navy/5 to-transparent p-4 rounded-lg border-l-4 border-aemet-blue">
                <h4 className="font-semibold text-aemet-navy mb-1">University Departments</h4>
                <p className="text-gray-600 text-sm">Contribute to academic excellence, research output, and a wide range of quality enhancement initiatives.</p>
              </div>

              <div className="bg-gradient-to-r from-aemet-navy/5 to-transparent p-4 rounded-lg border-l-4 border-aemet-blue">
                <h4 className="font-semibold text-aemet-navy mb-1">Specialized Research Centres</h4>
                <p className="text-gray-600 text-sm">Foster advanced research, innovation, and industry-aligned projects.</p>
              </div>

              <div className="bg-gradient-to-r from-aemet-navy/5 to-transparent p-4 rounded-lg border-l-4 border-aemet-blue">
                <h4 className="font-semibold text-aemet-navy mb-1">Student Council</h4>
                <p className="text-gray-600 text-sm">Promotes participatory governance by involving students in quality-related activities and institutional development.</p>
              </div>

              <div className="bg-gradient-to-r from-aemet-navy/5 to-transparent p-4 rounded-lg border-l-4 border-aemet-blue">
                <h4 className="font-semibold text-aemet-navy mb-1">Office of International Affairs</h4>
                <p className="text-gray-600 text-sm">Strengthens global partnerships and facilitates international academic and research collaborations.</p>
              </div>

              <div className="bg-gradient-to-r from-aemet-navy/5 to-transparent p-4 rounded-lg border-l-4 border-aemet-blue">
                <h4 className="font-semibold text-aemet-navy mb-1">AMET Chamber for Entrepreneurship, Innovation & Incubation (ACEII)</h4>
                <p className="text-gray-600 text-sm">Enhances industry linkages, entrepreneurship, and employability through training, incubation, and collaborative projects.</p>
              </div>

              <div className="bg-gradient-to-r from-aemet-navy/5 to-transparent p-4 rounded-lg border-l-4 border-aemet-blue">
                <h4 className="font-semibold text-aemet-navy mb-1">e-Governance Unit</h4>
                <p className="text-gray-600 text-sm">Drives transparency, accountability, and operational efficiency through digital academic and administrative processes.</p>
              </div>

              <div className="bg-gradient-to-r from-aemet-navy/5 to-transparent p-4 rounded-lg border-l-4 border-aemet-blue">
                <h4 className="font-semibold text-aemet-navy mb-1">Office of the Dean of Student Welfare (DSW)</h4>
                <p className="text-gray-600 text-sm">Supports student development, well-being, and a holistic campus experience.</p>
              </div>

              <div className="bg-gradient-to-r from-aemet-navy/5 to-transparent p-4 rounded-lg border-l-4 border-aemet-blue">
                <h4 className="font-semibold text-aemet-navy mb-1">Strategic Quality Advisor</h4>
                <p className="text-gray-600 text-sm">Recommends quality-driven initiatives and policies to apex bodies such as the Executive Council, Finance Committee, Board of Management, and Academic Governance Committees.</p>
              </div>

              <div className="bg-gradient-to-r from-aemet-navy/5 to-transparent p-4 rounded-lg border-l-4 border-aemet-blue">
                <h4 className="font-semibold text-aemet-navy mb-1">Research Excellence Facilitator</h4>
                <p className="text-gray-600 text-sm">Works with the Research Advisory Council to strengthen research culture, innovation output, and external funding opportunities.</p>
              </div>

              <div className="bg-gradient-to-r from-aemet-navy/5 to-transparent p-4 rounded-lg border-l-4 border-aemet-blue">
                <h4 className="font-semibold text-aemet-navy mb-1">Quality Compliance & Review Partner</h4>
                <p className="text-gray-600 text-sm">Collaborates with the Management Review Committee to evaluate institutional performance in line with ISO-QMS standards and evolving quality mandates.</p>
              </div>

              <div className="bg-gradient-to-r from-aemet-navy/5 to-transparent p-4 rounded-lg border-l-4 border-aemet-blue">
                <h4 className="font-semibold text-aemet-navy mb-1">Administrative Coordination Hub</h4>
                <p className="text-gray-600 text-sm">Ensures seamless communication and synchronized execution of quality initiatives across the Vice-Chancellor's Office, Registrar, Controller of Examinations, and senior administrative units.</p>
              </div>

              <div className="bg-gradient-to-r from-aemet-navy/5 to-transparent p-4 rounded-lg border-l-4 border-aemet-blue">
                <h4 className="font-semibold text-aemet-navy mb-1">Implementation & Monitoring Authority</h4>
                <p className="text-gray-600 text-sm">Serves as the central linkage between academic, administrative, and support units for effective implementation, monitoring, review, and documentation of quality benchmarks.</p>
              </div>

              <div className="bg-gradient-to-r from-aemet-navy/5 to-transparent p-4 rounded-lg border-l-4 border-aemet-blue">
                <h4 className="font-semibold text-aemet-navy mb-1">Continuous Enhancement Catalyst</h4>
                <p className="text-gray-600 text-sm">Initiates and supports improvement proposals related to digital infrastructure, academic processes, faculty development, and student-centric quality programmes to strengthen long-term institutional growth.</p>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Functions of IQAC Tab */}
        <TabsContent value="functions" className="mt-6">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="h-6 w-6 text-aemet-blue" />
              <h2 className="text-2xl font-semibold text-aemet-navy">Functions of IQAC (As per NAAC Guidelines)</h2>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The Internal Quality Assurance Cell (IQAC) of AMET undertakes the following functions in a systematic and phased manner to ensure continuous quality enhancement and institutional excellence:
            </p>

            <div className="space-y-3">
              {[
                "Ensure timely, efficient, and progressive execution of all academic and administrative tasks.",
                "Enhance the quality, relevance, and outcomes of academic and research programmes.",
                "Promote accessibility, inclusiveness, and equity across all University operations.",
                "Strengthen Institutional Social Responsibility (ISR) initiatives.",
                "Provide guidance on modern, innovative, and effective teaching–learning methodologies.",
                "Establish and sustain credible, transparent, and responsive stakeholder feedback mechanisms.",
                "Ensure a fair, secure, transparent, and objective evaluation system.",
                "Recommend modernization, upgradation, and optimization of physical infrastructure.",
                "Promote Green Campus practices and environmental sustainability.",
                "Maintain and improve institutional support structures and student-centric services.",
                "Foster collaborations with industry, academia, government, and community sectors.",
                "Develop and monitor quality benchmarks for academic, administrative, and co-curricular processes.",
                "Collect, analyze, and utilize stakeholder feedback to drive continuous improvement.",
                "Disseminate information related to quality parameters and best practices in higher education.",
                "Organize inter- and intra-institutional workshops, seminars, and training programmes on quality-related themes.",
                "Maintain systematic documentation and records of all quality assurance and enhancement activities.",
                "Serve as the nodal agency for coordinating, implementing, and institutionalizing quality initiatives and best practices."
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-gradient-to-r from-aemet-navy/5 to-transparent rounded-lg">
                  <span className="flex-shrink-0 w-6 h-6 bg-aemet-blue text-white rounded-full flex items-center justify-center text-xs font-medium">
                    {index + 1}
                  </span>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* Governance and Strategic Leadership Tab */}
        <TabsContent value="governance" className="mt-6">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-6 w-6 text-aemet-blue" />
              <h2 className="text-2xl font-semibold text-aemet-navy">Governance and Strategic Leadership</h2>
            </div>
            
            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-semibold text-aemet-navy mb-4 flex items-center gap-2">
                  <div className="w-1 h-6 bg-aemet-blue rounded"></div>
                  The Core Working Group (CWG) of the IQAC
                </h3>
                
                <div className="bg-gradient-to-r from-aemet-navy/5 to-aemet-blue/5 p-6 rounded-lg border border-aemet-blue/20 mb-6">
                  <p className="text-gray-700 leading-relaxed">
                    The Internal Quality Assurance Cell (IQAC) has constituted a Core Working Group (CWG) under the chairmanship of <span className="font-semibold text-aemet-navy">Col. Dr. G. Thiruvasagam, Provost of AMET</span>, who brings over 16 years of distinguished leadership experience as Vice-Chancellor of the University of Madras, Bharathiar University, and AMET University. He has also served as the <span className="font-semibold text-aemet-navy">100th President of the Association of Indian Universities (AIU)</span>, contributing his vast academic expertise to strengthen AMET's quality enhancement, governance, and institutional advancement.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-aemet-navy/5 to-transparent p-6 rounded-lg border-l-4 border-aemet-blue">
                  <p className="text-gray-700 leading-relaxed">
                    The CWG is composed of <span className="font-semibold text-aemet-navy">Criteria Managers</span> for each NAAC criterion, supported by <span className="font-semibold text-aemet-navy">Task Force Members</span> who serve as the vital link between the IQAC and the various departments. Together, they drive strategic initiatives to advance institutional quality beyond the achievements of the 2nd NAAC Cycle and work toward elevating AMET's performance benchmarks in pursuit of the highest grade in the <span className="font-semibold text-aemet-navy">NAAC 3rd Cycle Accreditation</span>.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </TabsContent>

        {/* Outcomes of IQAC Activities Tab */}
        <TabsContent value="outcomes" className="mt-6">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <Award className="h-6 w-6 text-aemet-blue" />
              <h2 className="text-2xl font-semibold text-aemet-navy">Outcomes of IQAC Activities at AMET</h2>
            </div>
            
            <div className="space-y-8">
              {/* Introduction */}
              <div className="bg-gradient-to-r from-aemet-navy/5 to-aemet-blue/5 p-6 rounded-lg border border-aemet-blue/20">
                <p className="text-gray-700 leading-relaxed">
                  The Internal Quality Assurance Cell (IQAC) at AMET has played a pivotal role in driving continuous institutional improvement, resulting in significant achievements in accreditation, research advancement, governance reforms, and national-level recognition.
                </p>
              </div>

              {/* Accreditation & Quality Benchmarks */}
              <section>
                <h3 className="text-xl font-semibold text-aemet-navy mb-4 flex items-center gap-2">
                  <div className="w-1 h-6 bg-aemet-blue rounded"></div>
                  Accreditation & Quality Benchmarks
                </h3>
                
                <div className="grid gap-4">
                  <div className="bg-gradient-to-r from-aemet-navy/10 to-aemet-blue/5 p-5 rounded-lg border-l-4 border-aemet-navy">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-aemet-navy text-white text-xs font-bold px-2 py-1 rounded">2015</div>
                      <h4 className="font-bold text-aemet-navy">NAAC Cycle 1</h4>
                    </div>
                    <p className="text-gray-700">Secured a <span className="font-semibold text-aemet-blue">'B' Grade</span> with a CGPA of <span className="font-semibold">2.41</span></p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-aemet-blue/10 to-aemet-navy/5 p-5 rounded-lg border-l-4 border-aemet-blue">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-aemet-blue text-white text-xs font-bold px-2 py-1 rounded">2020</div>
                      <h4 className="font-bold text-aemet-navy">NAAC Cycle 2</h4>
                    </div>
                    <p className="text-gray-700">Achieved an <span className="font-semibold text-aemet-blue">'A' Grade</span> with a CGPA of <span className="font-semibold">3.13</span></p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-aemet-navy/5 to-transparent p-4 rounded-lg border-l-4 border-aemet-navy">
                    <h4 className="font-semibold text-aemet-navy mb-1">NBA Accreditation</h4>
                    <p className="text-gray-600">Awarded to five academic programmes, reflecting programme-level excellence</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-aemet-blue/5 to-transparent p-4 rounded-lg border-l-4 border-aemet-blue">
                    <h4 className="font-semibold text-aemet-navy mb-1">ISO 9001:2015 Certification</h4>
                    <p className="text-gray-600">Sustained through systematic internal and external audits</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-aemet-navy/5 to-transparent p-4 rounded-lg border-l-4 border-aemet-navy">
                    <h4 className="font-semibold text-aemet-navy mb-1">DSIR–SIRO Recognition</h4>
                    <p className="text-gray-600">Strengthening the University's research credibility and promoting innovation</p>
                  </div>
                </div>
              </section>

              {/* Awards & Recognition */}
              <section>
                <h3 className="text-xl font-semibold text-aemet-navy mb-4 flex items-center gap-2">
                  <div className="w-1 h-6 bg-aemet-blue rounded"></div>
                  Awards & Institutional Recognition
                </h3>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-b from-amber-50 to-yellow-50 p-5 rounded-lg border border-amber-200 text-center hover:shadow-lg transition-shadow">
                    <div className="text-3xl mb-2">🏆</div>
                    <h4 className="font-bold text-aemet-navy">Sagar Ratna Award 2025</h4>
                    <p className="text-amber-700 text-sm mt-1">Maritime Excellence</p>
                  </div>
                  
                  <div className="bg-gradient-to-b from-amber-50 to-yellow-50 p-5 rounded-lg border border-amber-200 text-center hover:shadow-lg transition-shadow">
                    <div className="text-3xl mb-2">🎖️</div>
                    <h4 className="font-bold text-aemet-navy">Naval Connect Award 2025</h4>
                    <p className="text-amber-700 text-sm mt-1">Naval Excellence</p>
                  </div>
                  
                  <div className="bg-gradient-to-b from-amber-50 to-yellow-50 p-5 rounded-lg border border-amber-200 text-center hover:shadow-lg transition-shadow">
                    <div className="text-3xl mb-2">⚓</div>
                    <h4 className="font-bold text-aemet-navy">Marex Award 2025</h4>
                    <p className="text-amber-700 text-sm mt-1">Maritime Industry</p>
                  </div>
                  
                  <div className="bg-gradient-to-b from-amber-50 to-yellow-50 p-5 rounded-lg border border-amber-200 text-center hover:shadow-lg transition-shadow">
                    <div className="text-3xl mb-2">👩‍💼</div>
                    <h4 className="font-bold text-aemet-navy">SheEO Excellence Award 2024</h4>
                    <p className="text-amber-700 text-sm mt-1">Leadership Excellence</p>
                  </div>
                  
                  <div className="bg-gradient-to-b from-amber-50 to-yellow-50 p-5 rounded-lg border border-amber-200 text-center hover:shadow-lg transition-shadow">
                    <div className="text-3xl mb-2">🌍</div>
                    <h4 className="font-bold text-aemet-navy">National Geospatial Award 2024</h4>
                    <p className="text-amber-700 text-sm mt-1">Best University</p>
                  </div>
                  
                  <div className="bg-gradient-to-b from-amber-50 to-yellow-50 p-5 rounded-lg border border-amber-200 text-center hover:shadow-lg transition-shadow">
                    <div className="text-3xl mb-2">🌱</div>
                    <h4 className="font-bold text-aemet-navy">IGEN Ensaver Award 2024</h4>
                    <p className="text-amber-700 text-sm mt-1">Green Campus Initiatives</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </TabsContent>

        {/* Accreditation & Quality Benchmarks Tab */}
        <TabsContent value="accreditation" className="mt-6">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <Star className="h-6 w-6 text-aemet-blue" />
              <h2 className="text-2xl font-semibold text-aemet-navy">Accreditation & Quality Benchmarks</h2>
            </div>
            
            <div className="space-y-8">
              {/* Accreditation Section */}
              <section>
                <h3 className="text-xl font-semibold text-aemet-navy mb-4 flex items-center gap-2">
                  <div className="w-1 h-6 bg-aemet-blue rounded"></div>
                  Accreditation Achievements
                </h3>
                
                <div className="grid gap-4">
                  <div className="bg-gradient-to-r from-aemet-navy/5 to-transparent p-4 rounded-lg border-l-4 border-aemet-blue">
                    <h4 className="font-semibold text-aemet-navy mb-1">NAAC Cycle 1 (2015)</h4>
                    <p className="text-gray-600">Secured a 'B' Grade with a CGPA of 2.41</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-aemet-navy/5 to-transparent p-4 rounded-lg border-l-4 border-aemet-blue">
                    <h4 className="font-semibold text-aemet-navy mb-1">NAAC Cycle 2 (2020)</h4>
                    <p className="text-gray-600">Achieved an 'A' Grade with a CGPA of 3.13</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-aemet-navy/5 to-transparent p-4 rounded-lg border-l-4 border-aemet-blue">
                    <h4 className="font-semibold text-aemet-navy mb-1">NBA Accreditation</h4>
                    <p className="text-gray-600">Awarded to five academic programmes, reflecting programme-level excellence</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-aemet-navy/5 to-transparent p-4 rounded-lg border-l-4 border-aemet-blue">
                    <h4 className="font-semibold text-aemet-navy mb-1">ISO 9001:2015 Certification</h4>
                    <p className="text-gray-600">Sustained through systematic internal and external audits</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-aemet-navy/5 to-transparent p-4 rounded-lg border-l-4 border-aemet-blue">
                    <h4 className="font-semibold text-aemet-navy mb-1">DSIR–SIRO Recognition</h4>
                    <p className="text-gray-600">Strengthening the University's research credibility and promoting innovation</p>
                  </div>
                </div>
              </section>

              {/* Awards Section */}
              <section>
                <h3 className="text-xl font-semibold text-aemet-navy mb-4 flex items-center gap-2">
                  <div className="w-1 h-6 bg-aemet-blue rounded"></div>
                  Awards & Institutional Recognition
                </h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-4 rounded-lg border border-amber-200">
                    <h4 className="font-semibold text-aemet-navy mb-1">Sagar Ratna Award 2025</h4>
                    <p className="text-gray-600 text-sm">Maritime Excellence</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-4 rounded-lg border border-amber-200">
                    <h4 className="font-semibold text-aemet-navy mb-1">Naval Connect Award 2025</h4>
                    <p className="text-gray-600 text-sm">Naval Excellence Recognition</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-4 rounded-lg border border-amber-200">
                    <h4 className="font-semibold text-aemet-navy mb-1">Marex Award 2025</h4>
                    <p className="text-gray-600 text-sm">Maritime Industry Recognition</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-4 rounded-lg border border-amber-200">
                    <h4 className="font-semibold text-aemet-navy mb-1">SheEO Excellence Award 2024</h4>
                    <p className="text-gray-600 text-sm">Leadership Excellence</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-4 rounded-lg border border-amber-200">
                    <h4 className="font-semibold text-aemet-navy mb-1">National Geospatial Award 2024</h4>
                    <p className="text-gray-600 text-sm">Best University</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-4 rounded-lg border border-amber-200">
                    <h4 className="font-semibold text-aemet-navy mb-1">IGEN Ensaver Award 2024</h4>
                    <p className="text-gray-600 text-sm">Green Campus Initiatives</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </TabsContent>

        {/* Composition of the IQAC Tab */}
        <TabsContent value="composition" className="mt-6">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <Users2 className="h-6 w-6 text-aemet-blue" />
              <h2 className="text-2xl font-semibold text-aemet-navy">Composition of the IQAC</h2>
            </div>
            
            <div className="bg-gradient-to-r from-aemet-navy/5 to-aemet-blue/5 p-6 rounded-lg border border-aemet-blue/20 mb-6">
              <p className="text-gray-700 leading-relaxed">
                The Internal Quality Assurance Cell (IQAC) of AMET is constituted in accordance with NAAC guidelines, ensuring broad-based representation from all key stakeholder groups to promote participatory governance and comprehensive quality enhancement.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-aemet-navy mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-aemet-blue rounded"></div>
              The composition includes:
            </h3>
            
            <div className="grid gap-4">
              <div className="bg-gradient-to-r from-aemet-navy/5 to-transparent p-4 rounded-lg border-l-4 border-aemet-blue">
                <h4 className="font-semibold text-aemet-navy">Vice-Chancellor – Chairperson</h4>
              </div>
              
              <div className="bg-gradient-to-r from-aemet-navy/5 to-transparent p-4 rounded-lg border-l-4 border-aemet-blue">
                <h4 className="font-semibold text-aemet-navy mb-1">Administrative Officers</h4>
                <p className="text-gray-600 text-sm">Representing major academic and administrative divisions</p>
              </div>
              
              <div className="bg-gradient-to-r from-aemet-navy/5 to-transparent p-4 rounded-lg border-l-4 border-aemet-blue">
                <h4 className="font-semibold text-aemet-navy mb-1">Teaching Faculty Members</h4>
                <p className="text-gray-600 text-sm">Drawn from various academic departments</p>
              </div>
              
              <div className="bg-gradient-to-r from-aemet-navy/5 to-transparent p-4 rounded-lg border-l-4 border-aemet-blue">
                <h4 className="font-semibold text-aemet-navy mb-1">One Member from the Management</h4>
                <p className="text-gray-600 text-sm">Providing strategic guidance and institutional oversight</p>
              </div>
              
              <div className="bg-gradient-to-r from-aemet-navy/5 to-transparent p-4 rounded-lg border-l-4 border-aemet-blue">
                <h4 className="font-semibold text-aemet-navy mb-1">Nominees from Local Society, Industry, and the Student Community</h4>
                <p className="text-gray-600 text-sm">Strengthening stakeholder participation and external engagement</p>
              </div>
              
              <div className="bg-gradient-to-r from-aemet-navy/5 to-transparent p-4 rounded-lg border-l-4 border-aemet-blue">
                <h4 className="font-semibold text-aemet-navy mb-1">Distinguished Academicians</h4>
                <p className="text-gray-600 text-sm">Offering expert insights and quality-oriented perspectives</p>
              </div>
              
              <div className="bg-gradient-to-r from-aemet-navy/5 to-transparent p-4 rounded-lg border-l-4 border-aemet-blue">
                <h4 className="font-semibold text-aemet-navy mb-1">One Teaching Faculty Member as the IQAC Coordinator/Convener</h4>
                <p className="text-gray-600 text-sm">Responsible for coordinating all IQAC activities</p>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="members" className="mt-6">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-6 w-6 text-aemet-blue" />
              <h2 className="text-2xl font-semibold text-aemet-navy">Internal Quality Assurance Cell (IQAC), AMET</h2>
            </div>
            
            <div className="bg-gradient-to-r from-aemet-navy/5 to-aemet-blue/5 p-4 rounded-lg border border-aemet-blue/20 mb-6">
              <h3 className="text-lg font-semibold text-aemet-navy">Members of the IQAC (2025-26 onwards)</h3>
            </div>
            
            <div className="space-y-8">
              <section>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-200 rounded-lg">
                    <thead className="bg-aemet-navy text-white">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-medium">S.No.</th>
                        <th className="px-4 py-3 text-left text-sm font-medium">Member of the IQAC</th>
                        <th className="px-4 py-3 text-left text-sm font-medium">Designation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">1</td>
                        <td className="px-4 py-3 text-sm font-medium">Prof.Dr.V.Rajendran</td>
                        <td className="px-4 py-3 text-sm">Vice-Chancellor, Chairman</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">2</td>
                        <td className="px-4 py-3 text-sm font-medium">Col.Dr.G.Thiruvasagam</td>
                        <td className="px-4 py-3 text-sm">Provost and Chairman NAAC Core Working Group</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">3</td>
                        <td className="px-4 py-3 text-sm font-medium">Dr.Deepa Rajesh</td>
                        <td className="px-4 py-3 text-sm">Vice-President Academics (Member-Management)</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">4</td>
                        <td className="px-4 py-3 text-sm font-medium">Mr.S.Karikalan</td>
                        <td className="px-4 py-3 text-sm">Senior Vice President-AMET, Member (Member-Management)</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">5</td>
                        <td className="px-4 py-3 text-sm font-medium">Dr.V.Sangeetha Albin</td>
                        <td className="px-4 py-3 text-sm">Registrar i/c, (Member- Administrative Officer)</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">6</td>
                        <td className="px-4 py-3 text-sm font-medium">Prof N Thajuddin</td>
                        <td className="px-4 py-3 text-sm">Pro-Vice Chancellor, BS Abdur Rahman University, Chennai (Member- Distinguished Academician)</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">7</td>
                        <td className="px-4 py-3 text-sm font-medium">Dr.R.Jaganathan</td>
                        <td className="px-4 py-3 text-sm">Director-IQAC, University of Madras (Member- Distinguished Academician)</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">8</td>
                        <td className="px-4 py-3 text-sm font-medium">Dr.R.Gunasekaran</td>
                        <td className="px-4 py-3 text-sm">Professor, Director IQAC, Anna University- MIT Campus (Member- Distinguished Academician)</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">9</td>
                        <td className="px-4 py-3 text-sm font-medium">Dr.T.Sudalaimuthu</td>
                        <td className="px-4 py-3 text-sm">Coordinator-IQAC, Hindustan University, Chennai (Member- Distinguished Academician)</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">10</td>
                        <td className="px-4 py-3 text-sm font-medium">Capt.Danny Jowher</td>
                        <td className="px-4 py-3 text-sm">Cadet Training Manager- A.P. Moller-Maersk (Member-Industry)</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">11</td>
                        <td className="px-4 py-3 text-sm font-medium">Capt.Gopal Srinivas</td>
                        <td className="px-4 py-3 text-sm">Principal - DGS Courses (Member- Administrative Officer)</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">12</td>
                        <td className="px-4 py-3 text-sm font-medium">Prof.Dr.T.Sasilatha</td>
                        <td className="px-4 py-3 text-sm">Dean – General Courses (Member- Administrative Officer)</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">13</td>
                        <td className="px-4 py-3 text-sm font-medium">Capt.Sriram Krishnakumar</td>
                        <td className="px-4 py-3 text-sm">Captain-A.P. Moller-Maersk (Member- Industry)</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">14</td>
                        <td className="px-4 py-3 text-sm font-medium">Mr Darwin Annadurai</td>
                        <td className="px-4 py-3 text-sm">Director-Eco Society India (Member-Local Society)</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">15</td>
                        <td className="px-4 py-3 text-sm font-medium">Mr Govind K Barath</td>
                        <td className="px-4 py-3 text-sm">Co-Founder & CEO, WASailor (Member-Alumni)</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">16</td>
                        <td className="px-4 py-3 text-sm font-medium">Dr.S.Prabhakaran</td>
                        <td className="px-4 py-3 text-sm">Professor, Marine Engineering (Member- Teaching Faculty)</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">17</td>
                        <td className="px-4 py-3 text-sm font-medium">Dr.D.Arivazhagan</td>
                        <td className="px-4 py-3 text-sm">Professor, AMET Business School, (Member- Teaching Faculty)</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">18</td>
                        <td className="px-4 py-3 text-sm font-medium">Dr.D.Lakshmi</td>
                        <td className="px-4 py-3 text-sm">Professor, Department of Electrical and Electronics Engineering (Member- Teaching Faculty)</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">19</td>
                        <td className="px-4 py-3 text-sm font-medium">Dr.S.Bharthiraja</td>
                        <td className="px-4 py-3 text-sm">Professor, Department of Mechanical Engineering, (Member- Teaching Faculty)</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">20</td>
                        <td className="px-4 py-3 text-sm font-medium">Mr.Mridu Prayash</td>
                        <td className="px-4 py-3 text-sm">Chairperson of the Student Council AMET (Member-Student)</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">21</td>
                        <td className="px-4 py-3 text-sm font-medium">Ms. P.Vaishnavi</td>
                        <td className="px-4 py-3 text-sm">III Year B.E Naval Architecture and Offshore Engineering (Member-Student)</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">22</td>
                        <td className="px-4 py-3 text-sm font-medium">Mr Ashok Kumar</td>
                        <td className="px-4 py-3 text-sm">F/o: Gideon Mathew, III Year B.E Electrical and Computer Engineering (Member-Parent)</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">23</td>
                        <td className="px-4 py-3 text-sm font-medium">Dr.M.Jayaprakashvel</td>
                        <td className="px-4 py-3 text-sm">Professor, Department of Marine Biotechnology (Member-Coordinator)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="coordinator" className="mt-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            {/* Profile Header with Photo */}
            <div className="bg-gradient-to-r from-aemet-navy via-aemet-navy/95 to-aemet-blue p-8">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="relative">
                  <div className="w-48 h-48 rounded-full border-4 border-white/30 shadow-2xl overflow-hidden bg-white/10">
                    <img 
                      src="/profiles/m-jayaprakashvel.jpg" 
                      alt="Dr. M. Jayaprakashvel"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-aemet-navy text-xs font-bold rounded-full shadow-lg">
                    IQAC Coordinator
                  </div>
                </div>
                <div className="text-center lg:text-left flex-1">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Dr. M. Jayaprakashvel</h2>
                  <p className="text-xl text-white/90 mb-1">M.Sc., Ph.D.</p>
                  <p className="text-lg text-white/80 mb-4">Professor, Department of Marine Biotechnology</p>
                  <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white">Academic Mentor</span>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white">Ranking & Accreditation Expert</span>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white">Higher Education Management</span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start text-sm text-white/90">
                    <a href="mailto:jayaprakashvel@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                      <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">📧</span>
                      jayaprakashvel@gmail.com
                    </a>
                    <span className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">📞</span>
                      +91-8825577074, +91-9840529274
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8 space-y-8">
              {/* Expertise & Research Interests */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-aemet-blue/5 to-transparent rounded-xl p-6 border border-aemet-blue/10">
                  <h3 className="text-lg font-semibold text-aemet-navy mb-4 flex items-center gap-2">
                    <Target className="h-5 w-5 text-aemet-blue" />
                    Expertise
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['Academic Administration', 'Ranking and Accreditation', 'Academic Leadership', 'Research', 'Innovation', 'Incubation', 'Entrepreneurship', 'E-learning', 'Scientific Writing', 'Crisis Management'].map((item, idx) => (
                      <span key={idx} className="px-3 py-1.5 bg-white shadow-sm text-aemet-navy rounded-full text-sm border border-aemet-blue/20">{item}</span>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-transparent rounded-xl p-6 border border-green-100">
                  <h3 className="text-lg font-semibold text-aemet-navy mb-4 flex items-center gap-2">
                    <Info className="h-5 w-5 text-green-600" />
                    Research Interests
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['Marine Microbiology', 'Natural Products', 'Environmental Biotechnology', 'Food Technology', 'Plant Pathology'].map((item, idx) => (
                      <span key={idx} className="px-3 py-1.5 bg-white shadow-sm text-green-800 rounded-full text-sm border border-green-200">{item}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Key Contributions */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
                <h3 className="text-lg font-semibold text-aemet-navy mb-3 flex items-center gap-2">
                  <Award className="h-5 w-5 text-amber-600" />
                  Key Contributions
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Contributed and mentored NAAC, NBA, NIRF, ARIIA, PIMET, AISHE, ISO works; been a part of University Management for 15 years and contributed for AICTE, UGC, DGS Visits; Policy Development, Process Implementation and Monitoring, Crisis Management.
                </p>
              </div>

              {/* Work Experience */}
              <div>
                <h3 className="text-lg font-semibold text-aemet-navy mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5 text-aemet-blue" />
                  Work Experience
                </h3>
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-aemet-blue via-aemet-navy/50 to-gray-200"></div>
                  <div className="space-y-4 pl-10">
                    <div className="relative">
                      <div className="absolute -left-[26px] w-4 h-4 bg-aemet-blue rounded-full border-4 border-white shadow"></div>
                      <div className="p-4 bg-aemet-blue/5 rounded-lg border-l-4 border-aemet-blue">
                        <p className="font-semibold text-aemet-navy">Coordinator IQAC</p>
                        <p className="text-sm text-aemet-blue font-medium">December 2023 - Present</p>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[26px] w-4 h-4 bg-aemet-navy rounded-full border-4 border-white shadow"></div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="font-semibold text-aemet-navy">Registrar i/c, AMET</p>
                        <p className="text-sm text-gray-600">April 2020 - December 2023</p>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[26px] w-4 h-4 bg-gray-400 rounded-full border-4 border-white shadow"></div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="font-semibold text-aemet-navy">Director-Research & Coordinator IQAC</p>
                        <p className="text-sm text-gray-600">2013 - 2020</p>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[26px] w-4 h-4 bg-gray-400 rounded-full border-4 border-white shadow"></div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="font-semibold text-aemet-navy">Head of Department, Marine Biotechnology</p>
                        <p className="text-sm text-gray-600">2009 - 2020</p>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[26px] w-4 h-4 bg-gray-400 rounded-full border-4 border-white shadow"></div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="font-semibold text-aemet-navy">Controller of Examinations i/c</p>
                        <p className="text-sm text-gray-600">2013</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-lg font-semibold text-aemet-navy mb-4 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-aemet-blue" />
                  Education
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-5 bg-gradient-to-br from-aemet-blue/10 to-aemet-blue/5 rounded-xl border border-aemet-blue/20">
                    <div className="w-10 h-10 bg-aemet-blue text-white rounded-lg flex items-center justify-center mb-3 text-lg font-bold">🎓</div>
                    <p className="font-semibold text-aemet-navy">Ph.D., Industrial Microbiology - Botany</p>
                    <p className="text-sm text-gray-600 mt-1">CAS in Botany, University of Madras (2008)</p>
                  </div>
                  <div className="p-5 bg-gradient-to-br from-aemet-navy/10 to-aemet-navy/5 rounded-xl border border-aemet-navy/20">
                    <div className="w-10 h-10 bg-aemet-navy text-white rounded-lg flex items-center justify-center mb-3 text-lg font-bold">📚</div>
                    <p className="font-semibold text-aemet-navy">M.Sc., Industrial Microbiology (First Class)</p>
                    <p className="text-sm text-gray-600 mt-1">CAS in Botany, University of Madras (2000-2002)</p>
                  </div>
                  <div className="p-5 bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl border border-gray-200">
                    <div className="w-10 h-10 bg-gray-500 text-white rounded-lg flex items-center justify-center mb-3 text-lg font-bold">📖</div>
                    <p className="font-semibold text-aemet-navy">B.Sc., Microbiology (First Class)</p>
                    <p className="text-sm text-gray-600 mt-1">Kandaswamy Kandar College, University of Madras (1997-2000)</p>
                  </div>
                </div>
              </div>

              {/* Academic & Research Accomplishments */}
              <div className="bg-gradient-to-r from-aemet-navy to-aemet-blue rounded-xl p-6 text-white">
                <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  Academic & Research Accomplishments
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                    <p className="text-3xl font-bold">77</p>
                    <p className="text-sm text-white/80">Research Publications</p>
                  </div>
                  <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                    <p className="text-3xl font-bold">656</p>
                    <p className="text-sm text-white/80">Citations (h-index: 13)</p>
                  </div>
                  <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                    <p className="text-3xl font-bold">5</p>
                    <p className="text-sm text-white/80">Ph.D. Scholars Guided</p>
                  </div>
                  <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                    <p className="text-3xl font-bold">4</p>
                    <p className="text-sm text-white/80">Books Published</p>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <ul className="space-y-2 text-sm text-white/90">
                    <li className="flex items-start gap-2">
                      <span className="text-white/60">•</span>
                      9 book chapters; 5 E-Books; 12 Edited Volumes/Workshop Manuals; 2 Books in Tamil
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-white/60">•</span>
                      Chief Editor, Journal of Marine Biosciences
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-white/60">•</span>
                      Delivered more than 50 invited lectures on various topics
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-white/60">•</span>
                      Organized more than 50 Academic Events as Convener/Organizing Secretary
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-white/60">•</span>
                      Member - Board of Management, Academic Council, Research Advisory Council, IQAC of AMET University
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="dept-coordinators" className="mt-6">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <Users2 className="h-6 w-6 text-aemet-blue" />
              <h2 className="text-xl font-semibold text-aemet-navy">Department IQAC Co-ordinators</h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 rounded-lg">
                <thead className="bg-aemet-navy text-white">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium">S.No.</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Name of the Department</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">IQAC Department Coordinator</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm">1.</td>
                    <td className="px-4 py-3 text-sm font-medium">Marine Engineering</td>
                    <td className="px-4 py-3 text-sm">Dr.A.Ananthi Christy, Professor</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm">2.</td>
                    <td className="px-4 py-3 text-sm font-medium">Nautical Sciences</td>
                    <td className="px-4 py-3 text-sm">Capt.Rajesh K, Associate Professor</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm">3.</td>
                    <td className="px-4 py-3 text-sm font-medium">Naval Architecture and Offshore Engineering</td>
                    <td className="px-4 py-3 text-sm">Dr.R.Senthilkumar, Assistant Professor</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm">4.</td>
                    <td className="px-4 py-3 text-sm font-medium">AMET Business School</td>
                    <td className="px-4 py-3 text-sm">Dr.S.Poongavanam, Professor</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm">5.</td>
                    <td className="px-4 py-3 text-sm font-medium">Electrical and Electronics Engineering</td>
                    <td className="px-4 py-3 text-sm">Dr.Elavarasi R, Assistant Professor</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm">6.</td>
                    <td className="px-4 py-3 text-sm font-medium">Mechanical Engineering</td>
                    <td className="px-4 py-3 text-sm">Dr.S.Bharathiraja, Professor</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm">7.</td>
                    <td className="px-4 py-3 text-sm font-medium">Computer Science and Engineering</td>
                    <td className="px-4 py-3 text-sm">Mr.P.Karthick, Assistant Professor</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm">8.</td>
                    <td className="px-4 py-3 text-sm font-medium">Information Technology</td>
                    <td className="px-4 py-3 text-sm">Mr.Kishore Kuppusamy, Professor of Practice</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm">9.</td>
                    <td className="px-4 py-3 text-sm font-medium">Marine Biotechnology</td>
                    <td className="px-4 py-3 text-sm">Dr.R.Vijayaraj, Assistant Professor</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm">10.</td>
                    <td className="px-4 py-3 text-sm font-medium">Food Processing Technology</td>
                    <td className="px-4 py-3 text-sm">Mrs.V.Ramabhai, Assistant Professor</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm">11.</td>
                    <td className="px-4 py-3 text-sm font-medium">Mining Engineering</td>
                    <td className="px-4 py-3 text-sm">Mr.Ammanabrolu Guru Brahman, Assistant Professor</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm">12.</td>
                    <td className="px-4 py-3 text-sm font-medium">Maritime Commerce</td>
                    <td className="px-4 py-3 text-sm">Dr.R.Sathish, Associate Professor</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm">13.</td>
                    <td className="px-4 py-3 text-sm font-medium">English</td>
                    <td className="px-4 py-3 text-sm">Dr.Krishna S, Assistant Professor</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm">14.</td>
                    <td className="px-4 py-3 text-sm font-medium">Physics</td>
                    <td className="px-4 py-3 text-sm">Dr.K.Anandan, Assistant Professor</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm">15.</td>
                    <td className="px-4 py-3 text-sm font-medium">Chemistry</td>
                    <td className="px-4 py-3 text-sm">Dr.Rajesh Kumar.T, Assistant Professor</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm">16.</td>
                    <td className="px-4 py-3 text-sm font-medium">Mathematics</td>
                    <td className="px-4 py-3 text-sm">Dr.Salahuddin - Associate Professor</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="naac-task-force" className="mt-6">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-6 w-6 text-aemet-blue" />
              <h2 className="text-xl font-semibold text-aemet-navy">NAAC Task Force Member of the Department</h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 rounded-lg">
                <thead className="bg-aemet-navy text-white">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium">Sl.No</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Name of the Department</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Name of the NAAC Task Force Member of the Department</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm">1.</td>
                    <td className="px-4 py-3 text-sm font-medium">Marine Engineering</td>
                    <td className="px-4 py-3 text-sm">Dr.A.Ananthi Christy, Professor</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm">2.</td>
                    <td className="px-4 py-3 text-sm font-medium">Nautical Sciences</td>
                    <td className="px-4 py-3 text-sm">Dr Nandakumar, Associate Professor</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm">3.</td>
                    <td className="px-4 py-3 text-sm font-medium">Naval Architecture and Offshore Engineering</td>
                    <td className="px-4 py-3 text-sm">Mr.R.Jayasurya, Assistant Professor</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm">4.</td>
                    <td className="px-4 py-3 text-sm font-medium">AMET Business School</td>
                    <td className="px-4 py-3 text-sm">Dr.K.Meenatchisomasundari, Associate Professor</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm">5.</td>
                    <td className="px-4 py-3 text-sm font-medium">Electrical and Electronics Engineering</td>
                    <td className="px-4 py-3 text-sm">Dr.R.Elavarasi, Assistant Professor</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm">6.</td>
                    <td className="px-4 py-3 text-sm font-medium">Petroleum and Mining Engineering</td>
                    <td className="px-4 py-3 text-sm">Dr.S.Ponmani, Assistant Professor</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm">7.</td>
                    <td className="px-4 py-3 text-sm font-medium">Mechanical Engineering</td>
                    <td className="px-4 py-3 text-sm">Dr.N.Mukilarasan, Assistant Professor</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm">8.</td>
                    <td className="px-4 py-3 text-sm font-medium">Computer Science and Engineering</td>
                    <td className="px-4 py-3 text-sm">Dr.C.N.Ravi, Professor</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm">9.</td>
                    <td className="px-4 py-3 text-sm font-medium">Advanced Computing Sciences</td>
                    <td className="px-4 py-3 text-sm">Mr.M.Rameshkumar, Assistant Professor</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm">10.</td>
                    <td className="px-4 py-3 text-sm font-medium">Marine Biotechnology</td>
                    <td className="px-4 py-3 text-sm">Dr.R.Vijayaraj, Assistant Professor</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm">11.</td>
                    <td className="px-4 py-3 text-sm font-medium">Food Processing Technology</td>
                    <td className="px-4 py-3 text-sm">Mrs.J.Shanmugapriya, Assistant Professor</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm">12.</td>
                    <td className="px-4 py-3 text-sm font-medium">Commerce</td>
                    <td className="px-4 py-3 text-sm">Dr.R.Sathish, Associate Professor</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm">13.</td>
                    <td className="px-4 py-3 text-sm font-medium">English</td>
                    <td className="px-4 py-3 text-sm">Ms.K.Shoba, Assistant Professor</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm">14.</td>
                    <td className="px-4 py-3 text-sm font-medium">Physics</td>
                    <td className="px-4 py-3 text-sm">Dr.Swapna Mary Gali, Associate Professor</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm">15.</td>
                    <td className="px-4 py-3 text-sm font-medium">Chemistry</td>
                    <td className="px-4 py-3 text-sm">Dr.T. Rajesh Kumar, Assistant Professor</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm">16.</td>
                    <td className="px-4 py-3 text-sm font-medium">Mathematics</td>
                    <td className="px-4 py-3 text-sm">Dr.Salahuddin, Associate Professor</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm">17.</td>
                    <td className="px-4 py-3 text-sm font-medium">Dr.VBS.Rajan Library</td>
                    <td className="px-4 py-3 text-sm">Dr.K.Sekar, Library i/c</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm">18.</td>
                    <td className="px-4 py-3 text-sm font-medium">Physical Education</td>
                    <td className="px-4 py-3 text-sm">Dr Vasantha Kokila, Asst. Director of Physical Education</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="events" className="mt-6">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="h-6 w-6 text-aemet-blue" />
              <h2 className="text-2xl font-semibold text-aemet-navy">Events Conducted by IQAC</h2>
            </div>
            
            <div className="space-y-8">
              {/* 2024-25 Events */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-aemet-navy text-white px-4 py-2 rounded-lg font-bold text-lg">2024-25</div>
                  <div className="h-0.5 flex-1 bg-gradient-to-r from-aemet-navy to-transparent"></div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  IQAC organized a rich series of programs for quality improvement and awareness:
                </p>
                <div className="grid gap-4">
                  <div className="bg-gradient-to-r from-aemet-blue/5 to-transparent p-4 rounded-lg border-l-4 border-aemet-blue hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <p className="font-medium text-aemet-navy">Quick Skills Workshop for Administrative Staff</p>
                      <span className="bg-aemet-blue/10 text-aemet-blue text-sm px-3 py-1 rounded-full w-fit">June 2024</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-aemet-navy/5 to-transparent p-4 rounded-lg border-l-4 border-aemet-navy hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <p className="font-medium text-aemet-navy">Patti Mandram on Pros and Cons of Electronic Gadgets</p>
                      <span className="bg-aemet-navy/10 text-aemet-navy text-sm px-3 py-1 rounded-full w-fit">June 2024</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-aemet-blue/5 to-transparent p-4 rounded-lg border-l-4 border-aemet-blue hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <p className="font-medium text-aemet-navy">Seven Workshops on Gender Sensitization</p>
                      <span className="bg-aemet-blue/10 text-aemet-blue text-sm px-3 py-1 rounded-full w-fit">July - August 2024</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-aemet-navy/5 to-transparent p-4 rounded-lg border-l-4 border-aemet-navy hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <p className="font-medium text-aemet-navy">Workshop on Integrating Digital Learning Tools in Classroom Teaching</p>
                      <span className="bg-aemet-navy/10 text-aemet-navy text-sm px-3 py-1 rounded-full w-fit">July 2024</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-aemet-blue/5 to-transparent p-4 rounded-lg border-l-4 border-aemet-blue hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <p className="font-medium text-aemet-navy">Organizing a Health Camp for Staff Welfare</p>
                      <span className="bg-aemet-blue/10 text-aemet-blue text-sm px-3 py-1 rounded-full w-fit">August 2024</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-aemet-navy/5 to-transparent p-4 rounded-lg border-l-4 border-aemet-navy hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <p className="font-medium text-aemet-navy">Orientation Session on NAAC Accreditation Framework by Dr. M.G. Sethuraman</p>
                      <span className="bg-aemet-navy/10 text-aemet-navy text-sm px-3 py-1 rounded-full w-fit">November 2024</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-aemet-blue/5 to-transparent p-4 rounded-lg border-l-4 border-aemet-blue hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <p className="font-medium text-aemet-navy">"InnoWeek 2024" with ACEII & IIC - A project contest</p>
                      <span className="bg-aemet-blue/10 text-aemet-blue text-sm px-3 py-1 rounded-full w-fit">December 2024</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-aemet-navy/5 to-transparent p-4 rounded-lg border-l-4 border-aemet-navy hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <p className="font-medium text-aemet-navy">Webinar on the Prospects of SigmaPlot and Systat Software</p>
                      <span className="bg-aemet-navy/10 text-aemet-navy text-sm px-3 py-1 rounded-full w-fit">December 2024</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-aemet-blue/5 to-transparent p-4 rounded-lg border-l-4 border-aemet-blue hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <p className="font-medium text-aemet-navy">Workshop on Creating MOOCs and E-Content in Four Quadrant Model</p>
                      <span className="bg-aemet-blue/10 text-aemet-blue text-sm px-3 py-1 rounded-full w-fit">March 2025</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-aemet-navy/5 to-transparent p-4 rounded-lg border-l-4 border-aemet-navy hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <p className="font-medium text-aemet-navy">Workshop on "MOOC E-Content Development and Hosting" for Selected Maritime Faculty</p>
                      <span className="bg-aemet-navy/10 text-aemet-navy text-sm px-3 py-1 rounded-full w-fit">March 2025</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-aemet-blue/5 to-transparent p-4 rounded-lg border-l-4 border-aemet-blue hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <p className="font-medium text-aemet-navy">Workshop on "Preparing Yourself to be an E-Content Developer: A Practical Approach"</p>
                      <span className="bg-aemet-blue/10 text-aemet-blue text-sm px-3 py-1 rounded-full w-fit">March 2025</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-aemet-navy/5 to-transparent p-4 rounded-lg border-l-4 border-aemet-navy hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <p className="font-medium text-aemet-navy">Workshops on Research Proposal Writing</p>
                      <span className="bg-aemet-navy/10 text-aemet-navy text-sm px-3 py-1 rounded-full w-fit">March 2025</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* 2023-24 Events */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-aemet-blue text-white px-4 py-2 rounded-lg font-bold text-lg">2023-24</div>
                  <div className="h-0.5 flex-1 bg-gradient-to-r from-aemet-blue to-transparent"></div>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-200 rounded-lg">
                    <thead className="bg-aemet-navy text-white">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-medium">S.No</th>
                        <th className="px-4 py-3 text-left text-sm font-medium">Title of the Programme</th>
                        <th className="px-4 py-3 text-left text-sm font-medium">Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">1</td>
                        <td className="px-4 py-3 text-sm font-medium">Awareness Programme on Cybersecurity</td>
                        <td className="px-4 py-3 text-sm">26-12-2023</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">2</td>
                        <td className="px-4 py-3 text-sm font-medium">Workshop on Technology Tools for Administrative Tasks</td>
                        <td className="px-4 py-3 text-sm">27-12-2023</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">3</td>
                        <td className="px-4 py-3 text-sm font-medium">Workshop on Technical Troubleshooting Skills - Computer Usage</td>
                        <td className="px-4 py-3 text-sm">27-12-2023</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">4</td>
                        <td className="px-4 py-3 text-sm font-medium">Interactive Session on Effective Communication Skills</td>
                        <td className="px-4 py-3 text-sm">28-12-2023</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">5</td>
                        <td className="px-4 py-3 text-sm font-medium">Workshop on Equipment Handling and Safety Procedures</td>
                        <td className="px-4 py-3 text-sm">28-12-2023</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">6</td>
                        <td className="px-4 py-3 text-sm font-medium">Quick Skills Workshop for Administrative Staff</td>
                        <td className="px-4 py-3 text-sm">11-06-2024</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">7</td>
                        <td className="px-4 py-3 text-sm font-medium">Patti Mandram on Pros and Cons of Usage of Electronic Gadgets</td>
                        <td className="px-4 py-3 text-sm">13-06-2024</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">8</td>
                        <td className="px-4 py-3 text-sm font-medium">Health Talk on Healthy Diet</td>
                        <td className="px-4 py-3 text-sm">14-06-2024</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="career-advancement" className="mt-6">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="h-6 w-6 text-aemet-blue" />
              <h2 className="text-2xl font-semibold text-aemet-navy">Career Advancement Scheme (CAS)</h2>
            </div>
            
            <div className="space-y-8">
              {/* Overview Section */}
              <section className="bg-gradient-to-r from-aemet-navy/5 to-aemet-blue/5 rounded-lg p-6 border border-aemet-blue/20">
                <h3 className="text-xl font-semibold text-aemet-navy mb-4 flex items-center gap-2">
                  <div className="w-1 h-6 bg-aemet-blue rounded"></div>
                  Overview
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The Career Advancement Scheme (CAS) at AMET University is implemented in accordance with the latest University Grants Commission (UGC) Regulations, "Minimum Academic Performance and Service Requirements for Promotion of Teachers in Universities and Colleges", 2018, along with subsequent amendments issued from time to time. The Scheme provides faculty members with clear promotional pathways based on their contributions to teaching, research, and institutional service.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4 font-medium text-aemet-navy">
                  CAS reflects AMET's commitment to fostering the continuous professional growth of its faculty through a transparent, merit-based, and progressive evaluation and promotion process.
                </p>
              </section>

              {/* Eligibility and Coverage */}
              <section>
                <h3 className="text-xl font-semibold text-aemet-navy mb-4 flex items-center gap-2">
                  <div className="w-1 h-6 bg-aemet-blue rounded"></div>
                  Eligibility and Coverage
                </h3>
                <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                  <p className="text-gray-700 leading-relaxed">
                    The Career Advancement Scheme (CAS) applies to all regular faculty members of AMET University serving as Assistant Professors, Associate Professors, and Professors, appointed in accordance with UGC norms. Faculty members become eligible for promotion upon completing the prescribed minimum service period in their current cadre and meeting the performance benchmarks and academic requirements stipulated under the UGC Regulations, 2018, and subsequent amendments.
                  </p>
                </div>
              </section>

              {/* Career Progression Pathway */}
              <section>
                <h3 className="text-xl font-semibold text-aemet-navy mb-4 flex items-center gap-2">
                  <div className="w-1 h-6 bg-aemet-blue rounded"></div>
                  Career Progression Pathway
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Promotions under the Career Advancement Scheme (CAS) follow a structured and systematic progression model, as outlined below:
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 py-6">
                  <div className="bg-aemet-navy text-white px-6 py-3 rounded-lg font-semibold text-center">
                    Assistant Professor
                  </div>
                  <div className="text-aemet-blue text-2xl">→</div>
                  <div className="bg-aemet-blue text-white px-6 py-3 rounded-lg font-semibold text-center">
                    Associate Professor
                  </div>
                  <div className="text-aemet-blue text-2xl">→</div>
                  <div className="bg-aemet-navy text-white px-6 py-3 rounded-lg font-semibold text-center">
                    Professor
                  </div>
                  <div className="text-aemet-blue text-2xl">→</div>
                  <div className="bg-gradient-to-r from-aemet-navy to-aemet-blue text-white px-6 py-3 rounded-lg font-semibold text-center">
                    Senior Professor
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-center italic">
                  Each stage of advancement is based on a comprehensive evaluation of the faculty member's performance in teaching, research, professional development, and institutional contribution during the prescribed assessment period, in full alignment with UGC standards and guidelines.
                </p>
              </section>

              {/* PBAS Section */}
              <section>
                <h3 className="text-xl font-semibold text-aemet-navy mb-4 flex items-center gap-2">
                  <div className="w-1 h-6 bg-aemet-blue rounded"></div>
                  Performance Based Appraisal System (PBAS)
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    The Performance-Based Appraisal System (PBAS) is a structured evaluation framework prescribed by the University Grants Commission (UGC) for assessing the performance of faculty members in higher education institutions. It serves as the foundation for the annual appraisal process and Career Advancement Scheme (CAS) promotions. The PBAS ensures that faculty contributions in teaching, research, and institutional activities are systematically measured, acknowledged, and rewarded, thereby promoting academic excellence and professional growth.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    PBAS functions through a Self-Assessment Proforma in which each faculty member records their academic and professional activities for a specified assessment period. The evaluation is carried out using the Academic Performance Indicators (API) prescribed by the UGC, categorized into three major sections:
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    <div className="bg-gradient-to-b from-aemet-navy/10 to-transparent p-5 rounded-lg border border-aemet-navy/20">
                      <div className="bg-aemet-navy text-white text-sm font-bold px-3 py-1 rounded mb-3 inline-block">Category I</div>
                      <h4 className="font-semibold text-aemet-navy mb-2">Teaching, Learning, and Evaluation</h4>
                      <p className="text-gray-600 text-sm">
                        Includes classroom teaching, use of innovative pedagogical methods, preparation of learning materials, mentoring students, and involvement in examination and evaluation processes.
                      </p>
                    </div>
                    <div className="bg-gradient-to-b from-aemet-blue/10 to-transparent p-5 rounded-lg border border-aemet-blue/20">
                      <div className="bg-aemet-blue text-white text-sm font-bold px-3 py-1 rounded mb-3 inline-block">Category II</div>
                      <h4 className="font-semibold text-aemet-navy mb-2">Co-curricular, Extension, and Professional Development</h4>
                      <p className="text-gray-600 text-sm">
                        Covers participation in seminars, conferences, workshops, community outreach programs, student support activities, and efforts taken for continuing professional development.
                      </p>
                    </div>
                    <div className="bg-gradient-to-b from-aemet-navy/10 to-transparent p-5 rounded-lg border border-aemet-navy/20">
                      <div className="bg-aemet-navy text-white text-sm font-bold px-3 py-1 rounded mb-3 inline-block">Category III</div>
                      <h4 className="font-semibold text-aemet-navy mb-2">Research and Academic Contributions</h4>
                      <p className="text-gray-600 text-sm">
                        Encompasses research publications, externally funded projects, patents, books, consultancy work, guidance of research scholars, and other scholarly or creative contributions.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Implementation Process */}
              <section>
                <h3 className="text-xl font-semibold text-aemet-navy mb-4 flex items-center gap-2">
                  <div className="w-1 h-6 bg-aemet-blue rounded"></div>
                  Implementation Process
                </h3>
                <h4 className="font-semibold text-aemet-navy mb-4">CAS Promotion and PBAS Process at AMET University</h4>
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="bg-aemet-navy text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold">1</div>
                    <div className="bg-gray-50 p-4 rounded-lg flex-1 border-l-4 border-aemet-navy">
                      <h5 className="font-semibold text-aemet-navy">Notification of Promotions</h5>
                      <p className="text-gray-600 text-sm mt-1">The University issues official notifications regarding promotions under the Career Advancement Scheme (CAS).</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="bg-aemet-blue text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold">2</div>
                    <div className="bg-gray-50 p-4 rounded-lg flex-1 border-l-4 border-aemet-blue">
                      <h5 className="font-semibold text-aemet-navy">Submission of PBAS</h5>
                      <p className="text-gray-600 text-sm mt-1">Faculty members submit their Annual Self-Assessment Report (PBAS Proforma) along with all supporting documents to the IQAC Office.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="bg-aemet-navy text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold">3</div>
                    <div className="bg-gray-50 p-4 rounded-lg flex-1 border-l-4 border-aemet-navy">
                      <h5 className="font-semibold text-aemet-navy">Verification by IQAC</h5>
                      <p className="text-gray-600 text-sm mt-1">The IQAC scrutinizes the submissions for eligibility as per UGC norms and verifies API scores.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="bg-aemet-blue text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold">4</div>
                    <div className="bg-gray-50 p-4 rounded-lg flex-1 border-l-4 border-aemet-blue">
                      <h5 className="font-semibold text-aemet-navy">Formation of Selection Committee</h5>
                      <p className="text-gray-600 text-sm mt-1">Based on the verified applications, the University appoints a Scrutiny-cum-Selection Committee in accordance with UGC guidelines.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="bg-aemet-navy text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold">5</div>
                    <div className="bg-gray-50 p-4 rounded-lg flex-1 border-l-4 border-aemet-navy">
                      <h5 className="font-semibold text-aemet-navy">Performance Appraisal & Promotion</h5>
                      <p className="text-gray-600 text-sm mt-1">The validated data and recommendations of the Committee are used for annual performance appraisal and for consideration of CAS promotions to higher academic positions.</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mt-4 bg-aemet-blue/5 p-4 rounded-lg border border-aemet-blue/20 italic">
                  This structured process ensures transparency, merit-based evaluation, and recognition of teaching, research, and institutional contributions for faculty members.
                </p>
              </section>

              {/* Institutional Support */}
              <section>
                <h3 className="text-xl font-semibold text-aemet-navy mb-4 flex items-center gap-2">
                  <div className="w-1 h-6 bg-aemet-blue rounded"></div>
                  Institutional Support
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  AMET fosters a supportive environment to enable faculty career advancement through:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-r from-aemet-navy/5 to-transparent p-4 rounded-lg border-l-4 border-aemet-navy">
                    <p className="text-gray-700">Regular Faculty Development and Training Programmes focusing on pedagogy, research, and innovation.</p>
                  </div>
                  <div className="bg-gradient-to-r from-aemet-blue/5 to-transparent p-4 rounded-lg border-l-4 border-aemet-blue">
                    <p className="text-gray-700">Guidance and mentoring to assist faculty in documentation, self-assessment, and performance profiling for CAS applications.</p>
                  </div>
                  <div className="bg-gradient-to-r from-aemet-navy/5 to-transparent p-4 rounded-lg border-l-4 border-aemet-navy">
                    <p className="text-gray-700">Facilitation by the IQAC Office, which oversees the application process, conducts scrutiny, ensures transparency, and provides timely communication.</p>
                  </div>
                  <div className="bg-gradient-to-r from-aemet-blue/5 to-transparent p-4 rounded-lg border-l-4 border-aemet-blue">
                    <p className="text-gray-700">Periodic Reviews, Counselling, and Institutional Workshops designed to help faculty align with CAS requirements and performance benchmarks.</p>
                  </div>
                </div>
              </section>

              {/* Transparency and Governance */}
              <section className="bg-gradient-to-r from-aemet-navy/10 to-aemet-blue/10 rounded-lg p-6 border border-aemet-blue/20">
                <h3 className="text-xl font-semibold text-aemet-navy mb-4 flex items-center gap-2">
                  <div className="w-1 h-6 bg-aemet-blue rounded"></div>
                  Transparency and Governance
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  AMET is committed to fairness, accountability, and transparency in all CAS-related processes. Faculty members are encouraged to remain updated on the latest UGC circulars and University notifications regarding CAS implementation, eligibility, and assessment criteria.
                </p>
              </section>
            </div>
          </div>
        </TabsContent>


        <TabsContent value="best-practices" className="mt-6">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <Star className="h-6 w-6 text-aemet-blue" />
              <h2 className="text-xl font-semibold text-aemet-navy">Best Practices</h2>
            </div>
            
            <div className="space-y-6">
              <section className="bg-gradient-to-r from-aemet-navy/5 to-aemet-blue/5 rounded-lg p-6 border border-aemet-blue/20">
                <h3 className="text-xl font-bold text-aemet-navy mb-4">BEST PRACTICE (2023)</h3>
                
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <div>
                    <h4 className="text-lg font-semibold text-aemet-navy mb-2">Name:</h4>
                    <p className="font-medium">Integration of Industry Interaction into the Curriculum</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-aemet-navy mb-2">Objective:</h4>
                    <p>
                      To enhance the industry exposure and employability of students by the way of opening up more avenues and scope within the regular curricular framework
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-aemet-navy mb-2">The Context</h4>
                    <p>
                      AMET is a committed University with 30 years of strong collaboration with the industry. The University has already expanded the scope of industry participation in academics, research and outreach in various ways. However, with the introduction of National Education Policy, the University is aiming to enhance the industry connect of the students through formal mechanisms within the curricular frameworks
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-aemet-navy mb-2">The Practice</h4>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>All the Board of Studies will have minimum one Industry Expert as a Member</li>
                      <li>Syllabus and Curriculum, teaching methods are reviewed by Industry Experts</li>
                      <li>In every submit, minimum 20% of the content should be covered by the Industry Experts through special lectures</li>
                      <li>Industry Internship is compulsory for all the students</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-aemet-navy mb-2">Evidence of Success</h4>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>It is ensured that Board of Studies of all the Departments have Industry Expert including the Academic Council</li>
                      <li>Industry Experts are participating in both Course Content development and Course Delivery thereby contemporary industry exposure is ensured</li>
                      <li>100% of the students have gone for Industry Internship (Details are provided in 1.3.4)</li>
                      <li>The University is offering real time training in advanced computer science topics with leading industry such as IBM, thus making students more employable</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-aemet-navy mb-2">Problems Encountered and Resources Required</h4>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>In some disciplines such as Nautical Science and Marine Engineering, Internship duration provided by the Industry are very less due to regulatory limitations</li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </TabsContent>


        <TabsContent value="plan-of-action" className="mt-6">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <Target className="h-6 w-6 text-aemet-blue" />
              <h2 className="text-xl font-semibold text-aemet-navy">Plan of Action</h2>
            </div>
            
            <div className="space-y-6">
              <section className="bg-gradient-to-r from-aemet-navy/5 to-aemet-blue/5 rounded-lg p-6 border border-aemet-blue/20">
                <h3 className="text-xl font-bold text-aemet-navy mb-6">PLAN OF ACTION BY THE IQAC FOR THE NEXT CYCLE OF ASSESSMENT</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-aemet-navy mb-3">1. Establishment of Research Centers and Centers of Excellence:</h4>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside ml-4">
                      <li>Creation of dedicated Research Centers and Centers of Excellence aimed at fostering a robust research ecosystem within the university.</li>
                      <li>Focus on addressing contemporary and futuristic research areas to contribute significantly to knowledge advancement.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-aemet-navy mb-3">2. Promotion of Research Activities:</h4>
                    <div className="text-gray-700 ml-4">
                      <p className="mb-2">Emphasis on various research activities, including:</p>
                      <ul className="space-y-1 list-disc list-inside ml-4">
                        <li>Journal publication</li>
                        <li>Execution of Seed Money projects</li>
                        <li>Collaboration with industry for sponsored and consultancy projects</li>
                        <li>Pursuit of government-funded research initiatives.</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-aemet-navy mb-3">3. Augmentation of Digital Resources:</h4>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside ml-4">
                      <li>Implementation of strategies to enhance digital resources, fostering an improved teaching and learning process.</li>
                      <li>Integration of advanced technological tools to facilitate innovative and effective methodologies in academic delivery.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-aemet-navy mb-3">4. Strengthening Startup Initiatives:</h4>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside ml-4">
                      <li>Substantial increase in startup initiatives through the establishment and active operation of an Incubation Centre.</li>
                      <li>Encouraging entrepreneurial spirit among students and faculty members, fostering a culture of innovation and enterprise.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-aemet-navy mb-3">5. Expansion of E-content Materials:</h4>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside ml-4">
                      <li>Scaling up the production and dissemination of electronic content materials.</li>
                      <li>Development of a comprehensive repository of E-content to supplement and enrich academic curricula.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-aemet-navy mb-3">6. Quality Enhancement Workshops and Orientation Programs:</h4>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside ml-4">
                      <li>Implementation of systematic quality enhancement workshops for faculty members and staff.</li>
                      <li>Conducting orientation programs designed to acquaint academic and administrative personnel with the latest pedagogical and administrative best practices.</li>
                      <li>Spearheading the preparative works for the NAAC Re-accreditation, NBA, AISHE, CIP, PIMET, DGS, NIRF, ARIIA, Swachata Ranking etc;</li>
                      <li>Exploring the scope and participation of the scope and participation of other National and International Ranking and Accreditation</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-aemet-navy mb-3">7. Expanding the Academic Scope through Online and Distance Education</h4>
                    <div className="text-gray-700 ml-4">
                      <p>
                        Since the University is having A Grade in NAAC Accreditation, as per revised UGC Regulations 2023 it is eligible to offer academic programmes through online and distance education mode. Hence University will aim to get approval from the UGC Distance Education Beureu to offer online and distance education programmes.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </TabsContent>

        {/* NAAC Core Working Group Tab */}
        <TabsContent value="naac-cwg" className="mt-6">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-6 w-6 text-aemet-blue" />
              <h2 className="text-2xl font-semibold text-aemet-navy">NAAC Core Working Group</h2>
            </div>
            
            <div className="space-y-8">
              {/* Chairman */}
              <section className="bg-gradient-to-r from-aemet-navy/10 to-aemet-blue/10 rounded-lg p-6 border border-aemet-blue/20">
                <h3 className="text-lg font-semibold text-aemet-navy mb-4">Chairman NAAC CWG</h3>
                <div className="flex items-center gap-4">
                  <div className="bg-aemet-navy text-white w-12 h-12 rounded-full flex items-center justify-center">
                    <User className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold text-aemet-navy text-lg">Col. Dr. G. Thiruvasagam</p>
                    <p className="text-gray-600">Provost</p>
                  </div>
                </div>
              </section>

              {/* Coordinator */}
              <section className="bg-gradient-to-r from-aemet-blue/5 to-transparent rounded-lg p-6 border border-aemet-blue/20">
                <h3 className="text-lg font-semibold text-aemet-navy mb-4">Coordinator of the IQAC</h3>
                <div className="flex items-center gap-4">
                  <div className="bg-aemet-blue text-white w-12 h-12 rounded-full flex items-center justify-center">
                    <User className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold text-aemet-navy text-lg">Dr. M. Jayaprakashvel</p>
                    <p className="text-gray-600">Professor, Marine Biotechnology</p>
                  </div>
                </div>
              </section>

              {/* Deputy Coordinators */}
              <section>
                <h3 className="text-lg font-semibold text-aemet-navy mb-4 flex items-center gap-2">
                  <div className="w-1 h-6 bg-aemet-blue rounded"></div>
                  Deputy Coordinators of the IQAC
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-aemet-navy">
                    <p className="font-semibold text-aemet-navy">Dr. S. Prabhakaran</p>
                    <p className="text-gray-600 text-sm">Professor, Marine Engineering</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-aemet-blue">
                    <p className="font-semibold text-aemet-navy">Dr. D. Arivazhagan</p>
                    <p className="text-gray-600 text-sm">Professor, AMET Business School</p>
                  </div>
                </div>
              </section>

              {/* Members - Criteria Wise */}
              <section>
                <h3 className="text-lg font-semibold text-aemet-navy mb-4 flex items-center gap-2">
                  <div className="w-1 h-6 bg-aemet-blue rounded"></div>
                  Members (Criteria-wise)
                </h3>
                <div className="grid gap-3">
                  <div className="bg-gradient-to-r from-aemet-navy/5 to-transparent p-4 rounded-lg border-l-4 border-aemet-navy">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <p className="font-semibold text-aemet-navy">Dr. D. Arivazhagan</p>
                        <p className="text-gray-600 text-sm">Professor, AMET Business School</p>
                      </div>
                      <span className="bg-aemet-navy text-white text-xs px-3 py-1 rounded-full w-fit">Criteria 1: Curriculum Aspects</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-aemet-blue/5 to-transparent p-4 rounded-lg border-l-4 border-aemet-blue">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <p className="font-semibold text-aemet-navy">Dr. M. Rajavelan</p>
                        <p className="text-gray-600 text-sm">Assistant Professor, Dept. of Marine Engineering</p>
                      </div>
                      <span className="bg-aemet-blue text-white text-xs px-3 py-1 rounded-full w-fit">Criteria 2: Teaching - Learning and Evaluation</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-aemet-navy/5 to-transparent p-4 rounded-lg border-l-4 border-aemet-navy">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <p className="font-semibold text-aemet-navy">Dr. D. Lakshmi</p>
                        <p className="text-gray-600 text-sm">Professor, Dept. of EEE</p>
                      </div>
                      <span className="bg-aemet-navy text-white text-xs px-3 py-1 rounded-full w-fit">Criteria 3: Research, Consultancy and Extension</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-aemet-blue/5 to-transparent p-4 rounded-lg border-l-4 border-aemet-blue">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <p className="font-semibold text-aemet-navy">Dr. R. Sundar</p>
                        <p className="text-gray-600 text-sm">Associate Professor, Dept. of Marine Engineering</p>
                      </div>
                      <span className="bg-aemet-blue text-white text-xs px-3 py-1 rounded-full w-fit">Criteria 4: Infrastructure and Learning Resources</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-aemet-navy/5 to-transparent p-4 rounded-lg border-l-4 border-aemet-navy">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <p className="font-semibold text-aemet-navy">Dr. S. Poongavanam</p>
                        <p className="text-gray-600 text-sm">Professor, AMET Business School</p>
                      </div>
                      <span className="bg-aemet-navy text-white text-xs px-3 py-1 rounded-full w-fit">Criteria 5: Students Support and Progression</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-aemet-blue/5 to-transparent p-4 rounded-lg border-l-4 border-aemet-blue">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <p className="font-semibold text-aemet-navy">Dr. Padmashini R K</p>
                        <p className="text-gray-600 text-sm">Assistant Professor, Dept. of EEE</p>
                      </div>
                      <span className="bg-aemet-blue text-white text-xs px-3 py-1 rounded-full w-fit">Criteria 6: Governance, Leadership and Management</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-aemet-navy/5 to-transparent p-4 rounded-lg border-l-4 border-aemet-navy">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <p className="font-semibold text-aemet-navy">Dr. S. Bharathiraja</p>
                        <p className="text-gray-600 text-sm">Professor, Mechanical Engineering</p>
                      </div>
                      <span className="bg-aemet-navy text-white text-xs px-3 py-1 rounded-full w-fit">Criteria 7: Innovation and Best Practices</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Associate Coordinator */}
              <section>
                <h3 className="text-lg font-semibold text-aemet-navy mb-4 flex items-center gap-2">
                  <div className="w-1 h-6 bg-aemet-blue rounded"></div>
                  Associate Coordinator of the IQAC
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-aemet-blue">
                  <p className="font-semibold text-aemet-navy">Dr. D. S. Balaji</p>
                  <p className="text-gray-600 text-sm">Assistant Professor, Mechanical Engineering</p>
                </div>
              </section>

              {/* Administrative Staff */}
              <section>
                <h3 className="text-lg font-semibold text-aemet-navy mb-4 flex items-center gap-2">
                  <div className="w-1 h-6 bg-aemet-blue rounded"></div>
                  Administrative Staff
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-b from-aemet-navy/5 to-transparent p-4 rounded-lg text-center border border-gray-200">
                    <div className="bg-aemet-navy/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <User className="h-5 w-5 text-aemet-navy" />
                    </div>
                    <p className="font-semibold text-aemet-navy">Mr. D. Kannan</p>
                    <p className="text-gray-600 text-sm">Assistant</p>
                  </div>
                  <div className="bg-gradient-to-b from-aemet-blue/5 to-transparent p-4 rounded-lg text-center border border-gray-200">
                    <div className="bg-aemet-blue/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <User className="h-5 w-5 text-aemet-blue" />
                    </div>
                    <p className="font-semibold text-aemet-navy">Ms. R. Shivani</p>
                    <p className="text-gray-600 text-sm">Assistant</p>
                  </div>
                  <div className="bg-gradient-to-b from-aemet-navy/5 to-transparent p-4 rounded-lg text-center border border-gray-200">
                    <div className="bg-aemet-navy/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <User className="h-5 w-5 text-aemet-navy" />
                    </div>
                    <p className="font-semibold text-aemet-navy">Mrs. Soniya Ceaser</p>
                    <p className="text-gray-600 text-sm">Data Entry Operator</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="contact" className="mt-6">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <Phone className="h-6 w-6 text-aemet-blue" />
              <h2 className="text-2xl font-semibold text-aemet-navy">Contact</h2>
            </div>
            
            <div className="bg-gradient-to-r from-aemet-navy/5 to-aemet-blue/5 rounded-lg p-6 border border-aemet-blue/20">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <div className="bg-aemet-navy/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-4">
                    <User className="h-12 w-12 text-aemet-navy" />
                  </div>
                </div>
                
                <div className="md:w-2/3 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-aemet-navy">Dr. M. Jayaprakashvel</h3>
                    <p className="text-aemet-blue font-medium">Coordinator, Internal Quality Assurance Cell (IQAC)</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-aemet-blue mt-0.5 shrink-0" />
                      <div>
                        <p className="text-gray-700">Academy of Maritime Education and Training (AMET)</p>
                        <p className="text-gray-700">Deemed to be University</p>
                        <p className="text-gray-700">135, East Coast Road, Kanathur-603112</p>
                        <p className="text-gray-700">Tamil Nadu, India</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-aemet-blue shrink-0" />
                      <div>
                        <p className="text-gray-700">
                          <span className="font-medium">Mobile:</span> 9840529274 (Coordinator); 8939021818 (Office)
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-aemet-blue shrink-0" />
                      <div>
                        <p className="text-gray-700">
                          <span className="font-medium">Phone:</span> +91 - 44 - 2744 4625 / 627 / 628 Ext: 229 (Coordinator) 159 (Office)
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-aemet-blue mt-0.5 shrink-0" />
                      <div>
                        <p className="text-gray-700">
                          <a href="mailto:iqac@ametuniv.ac.in" className="text-aemet-blue hover:underline">iqac@ametuniv.ac.in</a>
                          {" / "}
                          <a href="mailto:jayaprakashvel.m@ametuniv.ac.in" className="text-aemet-blue hover:underline">jayaprakashvel.m@ametuniv.ac.in</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default IQACTabs;