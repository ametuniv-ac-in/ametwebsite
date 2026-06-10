import React from 'react';
import { ChevronRight } from 'lucide-react';

interface VisionSectionProps {
  departmentName?: string;
  departmentId?: string;
  visionMission?: string;
}

const VisionSection: React.FC<VisionSectionProps> = ({ departmentName, departmentId, visionMission }) => {
  // Parse visionMission from department data if available
  const parseVisionMission = (text?: string) => {
    if (!text) return null;
    
    const lines = text.split('\n').filter(line => line.trim());
    let vision = '';
    const mission: string[] = [];
    let currentSection = '';
    
    lines.forEach(line => {
      const trimmed = line.trim();
      if (trimmed.startsWith('**Vision**')) {
        currentSection = 'vision';
      } else if (trimmed.startsWith('**Mission**')) {
        currentSection = 'mission';
      } else if (trimmed.startsWith('-')) {
        if (currentSection === 'mission') {
          mission.push(trimmed.substring(1).trim());
        }
      } else if (currentSection === 'vision' && trimmed) {
        vision = trimmed;
      }
    });
    
    return { vision, mission };
  };

  // Try to parse visionMission from department data first
  const parsedData = parseVisionMission(visionMission);
  
  // Dynamic vision and mission based on department (fallback for departments without visionMission field)
  const getVisionMission = (deptId?: string, deptName?: string) => {
    switch (deptId) {
      case 'electrical-engineering':
        return {
          vision: "To establish a center of excellence in Electrical and Electronics Engineering, fostering quality education and promoting innovation in power systems, electronics, and control engineering using state-of-the-art technology.",
          mission: [
            "To develop infrastructure and foster research facilities to achieve excellence in electrical and electronics engineering.",
            "To provide opportunities for knowledge exchange and maintain high standards to meet local and global demands in electrical engineering.",
            "To collaborate with industries and institutions to promote innovations in teaching-learning processes and interdisciplinary research.",
            "To instill professional skills and ensure ethical behavior through value-based and skill-based education."
          ]
        };
      case 'computer-science':
        return {
          vision: "To be a globally recognized center of excellence in Computer Science and Engineering, fostering innovation, research, and ethical leadership in computing technologies.",
          mission: [
            "To provide quality education in computer science fundamentals, emerging technologies, and research methodologies.",
            "To foster innovation and entrepreneurship in software development, artificial intelligence, and cybersecurity.",
            "To establish strong industry partnerships for practical learning and placement opportunities.",
            "To develop skilled professionals with strong ethical values and leadership qualities."
          ]
        };
      case 'mechanical-engineering':
        return {
          vision: "To develop emerging professionals through innovative Teaching Learning and Research in Marine based Mechanical Engineering for ever-changing societal needs with credibility, integrity and ethical standards.",
          mission: [
            "Produce job ready Engineers in the field on design, manufacturing, thermal engineering by imparting basic sciences and engineering knowledge. Inspire students to pursue higher education in marine/mechanical related fields.",
            "Nurture students with creativeness, innovativeness, and entrepreneurship skills to meet the needs of the requirements of the industry.",
            "Establish high quality teaching and research environment to offer state-of-art under graduate, post graduate and doctoral programs."
          ]
        };
      case 'naval-architecture':
        return {
          vision: "To educate and train students in Naval Architecture and Offshore Engineering who are academically bright, technically creative, ethically sound, emotionally strong, and valuable to society through innovative teaching, learning and research.",
          mission: [
            "To upgrade technical knowledge through industry institute interaction, to educate students in order to produce innovative and socio-economically conscious Naval Architects and Offshore Engineers.",
            "To inspire students to pursue higher education in Naval Architecture and Offshore Engineering and other allied fields in the maritime sector.",
            "To nurture innovativeness, creative, strong ethics, positive attitude and entrepreneurship skills in students to meet the needs of the industry and society.",
            "To establish high quality teaching and research environment to offer state-of-the-art undergraduate, graduate and doctoral programs.",
            "To create world-class research facilities and infrastructure in the field of Naval Architecture and Offshore Engineering."
          ]
        };
      case 'marine-engineering':
        return {
          vision: "To establish a center of excellence in Marine Engineering, to foster quality education, to collaborate with the global Marine community and to promote innovation in Maritime studies using appropriate scientific and technological tools and methodologies.",
          mission: [
            "To develop the infra-structure and foster research facilities so as to achieve excellence in marine engineering and connected fields.",
            "To provide opportunities for the exchange of ideas and practices and upholding the status, standards and knowledge of essential to meet the local and global demands in Marine Engineering.",
            "To collaborate with other Institutions and Industries to take appropriate measures for promoting innovations in teaching-learning process, inter-disciplinary studies and research.",
            "To instill professional skills and ensure ethical behavior throughout their career by imparting value-based and skill-based education."
          ]
        };
      case 'nautical-sciences':
        return {
          vision: "To ensure the curriculum remains current with international and national standards and complies with the requirements of the STCW (Standards of Training, Certification, and Watchkeeping) Convention, as amended.",
          mission: [
            "To establish and implement best practices that ensure technical competence and professional excellence.",
            "To embrace and integrate emerging technologies seamlessly into the curriculum.",
            "To develop and sustain world-class research capabilities, generating knowledge and skills aligned with the future needs of the shipping industry.",
            "To extend training beyond conventional domains, fostering confidence, leadership, and entrepreneurial skills.",
            "To empower students to adapt to the dynamic socio-cultural, economic, and environmental changes that influence professional and personal growth.",
            "To instil academic rigor and ethical values, enabling students to become sources of creativity, positive energy, and ethical leadership."
          ]
        };
      case 'mining-engineering':
        return {
          vision: "To establish the Department as a premier and one stop destination for all Mining related education with appropriate Artificial Intelligence solutions to the industries.",
          mission: [
            "Produce mining Engineers in the field in the mining operation and mine planning by strengthening IT enables the basic with appropriate Data Scientist and Machine Learning, Scientific and Engineering Knowledge.",
            "Students to be exposed in International and National mining projects.",
            "Cultivate students for pursuing higher education in mining operations and planning related fields.",
            "Develop the entrepreneurship skill in students related to the mining business.",
            "Establish high quality teaching and research environment to offer practical knowledge."
          ]
        };
      case 'petroleum-engineering':
        return {
          vision: "To be a world class provider of education, research and new technologies to Petroleum, energy and Mining sectors.",
          mission: [
            "To have a high quality curriculum in petroleum and mining engineering that disseminates knowledge in the discovery, extraction, development and production of hydrocarbons and economic minerals and rocks.",
            "To offer opportunities for developing technologies and innovation in the petroleum and mining fields.",
            "To create the awareness about the challenges of operational hazards in the areas of health, environment, safety and security",
            "To have collaboration with researchers, industry, government and the community for sharing the knowledge",
            "To prepare Petroleum and Mining Engineers for lifelong learning and capable of being productive contributors for the petroleum and mining industries."
          ]
        };
      case 'food-processing':
        return {
          vision: "To become a Centre of excellence in Food Technology Education and Research, through the development of highly competent and Dynamic Food Technologist, for serving the society.",
          mission: [
            "To inculcate in-depth knowledge of Food Engineering and Technology with an ability to analyze, evaluate, design, discriminate, interpret, create and integrate existing and new knowledge.",
            "To analyze technological problems and judge independently to create information for conducting research and think to conceptualize in the area of Food Engineering and Technology.",
            "To develop strong research aptitude through research work to enable the students to opt for higher levels of learning in the field of Food Engineering and Technology.",
            "To inculcate capabilities of students to analyze a problem, identify, formulate and solve technical problems using basic fundamental principles of food process engineering approach.",
            "To acquaint and equip students with professional and intellectual integrity, ethics of research and scholarship and responsibilities to contribute positively in the sustainable development of society.",
            "To enable the students to get engaged in lifelong learning independently with the vigor and zeal and become capable to start-up their own businesses."
          ]
        };
      case 'mathematics':
        return {
          vision: "To transform the Department into a Centre of excellence to contribute significantly to Marine based realms through Mathematics.",
          mission: [
            "To provide adaptive learning ambiance in Mathematics and its related fields to enhance problem solving, leadership and teamwork skills of students.",
            "To enable the students to tap the potentials of Mathematics in the Marine related domains by adopting innovative Teaching – Learning techniques.",
            "To nurture knowledge through cutting-edge research and innovations to enrich the society in meaningful and sustainable ways.",
            "To inculcate among students the value of commitment, quality, and ethical behavior."
          ]
        };
      case 'chemistry':
        return {
          vision: "Preparing the students for a diverse and changing world by bridging knowledge with engineering sciences relevant to marine and non-marine curricula.",
          mission: [
            "To provide an adaptive learning environment in Engineering Chemistry and its related fields fostering technical problem solving, leadership and teamwork skills among students.",
            "To enhance research and development activities to meet emerging industrial requirements.",
            "To deliver a high-quality education experience that will prepare graduates for leadership roles in chemical availed associated industries.",
            "To provide leadership to the chemical engineering profession through scholarship, teaching, and service.",
            "To strengthen interaction between students and chemical industry.",
            "To offer consultancy services to chemical and allied industries within the region."
          ]
        };
      case 'aviation-dept':
        return {
          vision: "To be a centre of excellence in aviation education, research, and training by nurturing globally competent professionals, fostering innovation, and contributing to the sustainable growth of the aviation industry.",
          mission: [
            "To provide high-quality academic programs that integrate theoretical knowledge with practical skills relevant to the aviation sector.",
            "To cultivate industry-ready graduates through exposure to modern technologies, safety standards, and regulatory frameworks.",
            "To promote research, innovation, and continuous learning that address the evolving needs of the global aviation industry.",
            "To develop responsible, ethical, and skilled aviation professionals capable of leading and contributing to national and international aviation advancements.",
            "To foster collaborations with industry, regulatory bodies, and academic institutions to enhance learning and professional development opportunities for students."
          ]
        };
      default:
        return {
          vision: `To establish a center of excellence in ${deptName || 'Engineering'}, fostering quality education, promoting research, and developing skilled professionals for global challenges.`,
          mission: [
            "To develop infrastructure and foster research facilities to achieve excellence in the field.",
            "To provide opportunities for knowledge exchange and maintain high standards to meet industry demands.",
            "To collaborate with institutions and industries to promote innovations in teaching-learning processes.",
            "To instill professional skills and ensure ethical behavior through comprehensive education."
          ]
        };
    }
  };

  // Use parsed data if available, otherwise use hardcoded data
  const { vision, mission } = parsedData || getVisionMission(departmentId, departmentName);

  return (
    <div>
      <h3 className="text-xl font-bold text-aemet-navy mb-4">Vision and Mission</h3>
      <div className="space-y-6">
        <div className="p-5 border-l-4 border-aemet-blue bg-blue-50 rounded">
          <h4 className="text-lg font-semibold text-aemet-navy mb-2">Vision</h4>
          <p className="text-gray-700">
            {vision}
          </p>
        </div>
        <div className="p-5 border-l-4 border-aemet-navy bg-blue-50 rounded">
          <h4 className="text-lg font-semibold text-aemet-navy mb-2">Mission</h4>
          <ul className="space-y-2 text-gray-700">
            {mission.map((item, index) => (
              <li key={index} className="flex items-start">
                <ChevronRight className="h-5 w-5 text-aemet-blue mr-2 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Food Processing Department - Complete Vision & Mission Section */}
        {departmentId === 'food-processing' && (
          <div className="space-y-8 mt-8">
            {/* AMET Institute Vision & Mission */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
              <h4 className="text-xl font-bold text-aemet-navy mb-4">The Vision and Mission of AMET</h4>
              
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg border border-blue-100">
                  <h5 className="text-lg font-semibold text-aemet-navy mb-2">Vision of the Institute</h5>
                  <p className="text-gray-700">
                    To sustain identity as a World Class Leader in Maritime Education and empower learners with wholesome knowledge through progressive innovation in training, research and development which will render students a unique learning experience and a transformation impact on the Global Society.
                  </p>
                </div>
                
                <div className="p-4 bg-white rounded-lg border border-blue-100">
                  <h5 className="text-lg font-semibold text-aemet-navy mb-2">Mission of the Institute</h5>
                  <p className="text-gray-700 mb-2">AMET will strive continuously to:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-aemet-blue mr-2 mt-0.5 flex-shrink-0" />
                      <span>Impart value-based higher education and technical knowledge with uncompromising strides of an outstanding quality.</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-aemet-blue mr-2 mt-0.5 flex-shrink-0" />
                      <span>Emerge as a Centre of Excellence inculcating skill development in recent technologies in accordance with industrial trends.</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-aemet-blue mr-2 mt-0.5 flex-shrink-0" />
                      <span>Create World class research capabilities on par with the finest in the world and broaden student's horizons beyond classroom education.</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-aemet-blue mr-2 mt-0.5 flex-shrink-0" />
                      <span>Nurture talent and entrepreneurship and enable all round personality development in students.</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-aemet-blue mr-2 mt-0.5 flex-shrink-0" />
                      <span>Empower students from across socio economic strata.</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-aemet-blue mr-2 mt-0.5 flex-shrink-0" />
                      <span>Make a positive difference to society through technical education.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Department Vision & Mission */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg p-6 border border-orange-200">
              <h4 className="text-xl font-bold text-aemet-navy mb-4">The Vision and Mission of the Department of Food Processing Technology</h4>
              
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg border border-orange-100">
                  <h5 className="text-lg font-semibold text-aemet-navy mb-2">Vision of the Department</h5>
                  <p className="text-gray-700">
                    To become a Centre of excellence in Food Technology Education and Research, through the development of highly competent and Dynamic Food Technologist, for serving the society.
                  </p>
                </div>
                
                <div className="p-4 bg-white rounded-lg border border-orange-100">
                  <h5 className="text-lg font-semibold text-aemet-navy mb-2">Mission of the Department</h5>
                  <p className="text-gray-700 mb-2">The Vision of the Department is accomplished by the following mission statements:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>To inculcate in-depth knowledge of Food Engineering and Technology with an ability to analyze, evaluate, design, discriminate, interpret, create and integrate existing and new knowledge.</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>To analyze technological problems and judge independently to create information for conducting research and think to conceptualize in the area of Food Engineering and Technology.</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>To develop strong research aptitude through research work to enable the students to opt for higher levels of learning in the field of Food Engineering and Technology.</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>To inculcate capabilities of students to analyze a problem, identify, formulate and solve technical problems using basic fundamental principles of food process engineering approach.</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>To acquaint and equip students with professional and intellectual integrity, ethics of research and scholarship and responsibilities to contribute positively in the sustainable development of society.</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>To enable the students to get engaged in lifelong learning independently with the vigor and zeal and become capable to start-up their own businesses.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Consistency Table */}
            <div className="mt-8">
              <h4 className="text-xl font-bold text-aemet-navy mb-4">Consistency of Institute and Departmental Vision</h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-gradient-to-r from-aemet-navy to-aemet-blue text-white">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Institute Vision</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Departmental Vision</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">To sustain identity as a World Class Leader in Maritime Education</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">To be a prime department and to carry out R&D in frontier areas of food engineering.</td>
                    </tr>
                    <tr className="hover:bg-gray-50 bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Empower learners with wholesome knowledge through progressive innovation in training, research and development.</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">To produce business leaders, develop competitive processes, technologies and practices in the area of food engineering, entrepreneurship and management</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Impart value-based higher education and technical knowledge with uncompromising strides of an outstanding quality.</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">To offer continual training to the industry to enhance their skill and be updated on global trends in food research and technology by consultation with the stakeholders.</td>
                    </tr>
                    <tr className="hover:bg-gray-50 bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">To produce world-class business leaders, develop globally competitive processes and technologies and international best practices, entrepreneurship and management</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">To develop World Class Managerial Talent coupled with advanced knowledge in Food Science and Technology.</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">To offer courses and training programmes of global standards with optimal mix of inputs management and entrepreneurship</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">To promote cooperation and networking among existing institutions within India and Abroad.</td>
                    </tr>
                    <tr className="hover:bg-gray-50 bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-gray-700"></td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">To produce competent technologist, scientist, researchers and entrepreneurs through quality education</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-gray-700"></td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">To upgrade the scientific knowledge in the areas of food science, food processing and safety for the development of food products through quality research</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Alignment Table for AMET Business School */}
        {departmentId === 'amet-business-school' && (
          <div className="mt-8">
            <h4 className="text-xl font-bold text-aemet-navy mb-4">Aligning the Department Vision and Mission with the University Vision and Mission</h4>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-aemet-navy text-white">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Vision / Mission</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">AMET (Deemed to be University)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">AMET Business School</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-aemet-navy">Vision</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">To sustain identity as a World Class Leader in Maritime Education and empower learners with wholesome knowledge through progressive innovation in training, research and development which will render students a unique learning experience and a transformation impact on the Global Society.</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">To continuously upgrade the Quality of our Curriculum, Pedagogy and Research pursuits in order to achieve the status of one of the top-ranking institutions in the Maritime Management Education in the World.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-aemet-navy">Mission-1</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">Impart value-based higher education and technical knowledge with uncompromising strides of an outstanding quality.</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">To be a source of effective Value-based Managerial Talent for the sustained development of Maritime Trade, Commerce and Industry not only in India but across the Globe.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-aemet-navy">Mission-2</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">Emerge as a Centre of Excellence inculcating skill development in recent technologies in accordance with industrial trends.</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">To emerge as a Centre of Excellence in technical, managerial and leadership in maritime trade and business based industrial needs.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-aemet-navy">Mission-3</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">Create World class research capabilities on par with the finest in the world and broaden student's horizons beyond classroom education.</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">To produce and disseminate World-class, cutting edge research that shapes the way organisations operate and businesses are led and managed.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-aemet-navy">Mission-4</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">Nurture talent and entrepreneurship and enable all round personality development in students.</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">To produce World-class, Socially Responsible, Creative Leaders and Entrepreneurs who think on a global scale.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-aemet-navy">Mission-5</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">Empower students from across socio economic strata.</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">To Endow students with the educational opportunity belonging to different socio-economic backgrounds.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-aemet-navy">Mission-6</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">Make a positive difference to society through technical education.</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">To engage meaningfully with maritime trade and business, to create a better society.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VisionSection;

