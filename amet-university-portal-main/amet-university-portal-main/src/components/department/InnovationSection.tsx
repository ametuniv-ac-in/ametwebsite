import React from 'react';
import { Lightbulb, FileDown, Sparkles, Target, TrendingUp } from 'lucide-react';
interface InnovationSectionProps {
  departmentId?: string;
}
const InnovationSection: React.FC<InnovationSectionProps> = ({
  departmentId
}) => {
  if (departmentId === 'mechanical-engineering') {
    return <div>
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <Lightbulb className="h-5 w-5 mr-2 text-aemet-blue" />
          Innovation & Best Practices
        </h3>

        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-200 rounded-lg p-8 mb-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center">
                <Lightbulb className="w-10 h-10 text-white" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h4 className="text-2xl font-bold text-aemet-navy mb-2">
                Innovative Practices & Excellence
              </h4>
              <p className="text-gray-700">
                Discover our department's innovative teaching methodologies, research initiatives, and best practices that drive excellence in mechanical engineering education.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a href="/documents/mechanical-engineering-Innovation-Best-Practices.pdf" download className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium shadow-sm">
                <FileDown className="w-5 h-5" />
                Download Details
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-all">
            <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="h-7 w-7 text-purple-600" />
            </div>
            <h5 className="font-semibold text-aemet-navy mb-2">Innovation Culture</h5>
            <p className="text-sm text-gray-600">
              Fostering creativity and innovation in curriculum and research
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-all">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="h-7 w-7 text-blue-600" />
            </div>
            <h5 className="font-semibold text-aemet-navy mb-2">Best Practices</h5>
            <p className="text-sm text-gray-600">
              Industry-aligned teaching methods and quality standards
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-all">
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-7 w-7 text-green-600" />
            </div>
            <h5 className="font-semibold text-aemet-navy mb-2">Continuous Improvement</h5>
            <p className="text-sm text-gray-600">
              Regular updates and enhancements to educational processes
            </p>
          </div>
        </div>
      </div>;
  }

  if (departmentId === 'computer-science') {
    return (
      <div>
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <Lightbulb className="h-5 w-5 mr-2 text-aemet-blue" />
          Innovation by Faculty in Teaching, Research and Development
        </h3>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-6">
          <p className="text-gray-700 leading-relaxed">
            Faculty members of the Department of Computer Science and Engineering continuously introduce new ideas and practices to improve teaching, research, and development.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-aemet-navy mb-4 flex items-center">
              <Sparkles className="h-5 w-5 mr-2 text-purple-600" />
              In Teaching
            </h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <div className="h-2 w-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Use of modern teaching methods such as online learning tools, simulations, and project-based learning.</span>
              </li>
              <li className="flex items-start">
                <div className="h-2 w-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Integration of real-time industry problems and case studies in classroom teaching.</span>
              </li>
              <li className="flex items-start">
                <div className="h-2 w-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Preparation of digital content, video lectures, and interactive materials for students.</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-teal-50 border border-green-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-aemet-navy mb-4 flex items-center">
              <Target className="h-5 w-5 mr-2 text-green-600" />
              In Research and Development
            </h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <div className="h-2 w-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Active research in areas such as Artificial Intelligence, Machine Learning, Cybersecurity, Cloud Computing, IoT, and Data Analytics.</span>
              </li>
              <li className="flex items-start">
                <div className="h-2 w-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Faculty participation in research projects, paper publications, and patent filings.</span>
              </li>
              <li className="flex items-start">
                <div className="h-2 w-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Collaboration with industries and research organizations for innovative solutions.</span>
              </li>
              <li className="flex items-start">
                <div className="h-2 w-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Guidance to students in mini projects, hackathons, and start-up ideas.</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-aemet-blue/10 to-aemet-navy/10 border border-aemet-blue/20 rounded-lg p-6">
            <div className="flex items-center gap-3">
              <TrendingUp className="h-6 w-6 text-aemet-blue" />
              <p className="text-gray-700 font-medium">
                Through these initiatives, the department promotes innovation, creativity, and a strong research culture among both faculty and students.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (departmentId === 'physics') {
    return (
      <div>
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <Lightbulb className="h-5 w-5 mr-2 text-aemet-blue" />
          Innovation by Faculty in Teaching, Research and Development
        </h3>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-aemet-navy mb-4 flex items-center">
              <Sparkles className="h-5 w-5 mr-2 text-blue-600" />
              Innovative Teaching Practices
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Our Department is committed to fostering innovative and student-centered teaching practices. Faculty members encourage participative learning through group discussions, seminar presentations, and collaborative activities. Problem-solving and experiential learning methods are regularly adopted to enhance critical thinking and real-time application of concepts. The teaching environment is supported by modern ICT tools such as smart boards, PowerPoint presentations, video demonstrations, GIF and animation-based visual explanations, and online educational resources. These approaches create an interactive, engaging, and concept-oriented learning atmosphere for students.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-aemet-navy mb-4 flex items-center">
              <Target className="h-5 w-5 mr-2 text-purple-600" />
              Research and Development
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              In addition to teaching excellence, the faculty members are actively involved in research and development across various emerging and interdisciplinary domains. Our research areas include:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {[
                "Wastewater Treatment",
                "Supercapacitors",
                "Pigments",
                "Luminescent Materials",
                "Optics",
                "Electrochemical Work Station",
                "Nanophotonics",
                "Bionanophotonics",
                "Density Functional Theory (DFT)",
                "Soil Fertility Assessment",
                "Astrophysics",
                "Thin Film for Solar Cells",
                "Geophysics"
              ].map((area, index) => (
                <div key={index} className="bg-white px-3 py-2 rounded-md border border-purple-100 text-sm text-gray-700 text-center">
                  {area}
                </div>
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed mt-4">
              Faculty members contribute through research publications, conference presentations, and collaborative research projects with institutions and industries.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-teal-50 border border-green-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-aemet-navy mb-4 flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
              Academic Excellence & Student Development
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Through the integration of innovative teaching methodologies and active research culture, the Department continues to promote academic excellence, scientific inquiry, and holistic student development.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Default content for other departments
  return <div></div>;
};
export default InnovationSection;