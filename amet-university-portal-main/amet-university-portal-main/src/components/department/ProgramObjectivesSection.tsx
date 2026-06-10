import React from 'react';
import { Target, Award, Star } from 'lucide-react';

interface ProgramObjectivesSectionProps {
  departmentId?: string;
}

const ProgramObjectivesSection: React.FC<ProgramObjectivesSectionProps> = ({ departmentId }) => {
  
  if (departmentId === 'amet-business-school') {
    return (
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-aemet-navy mb-6">Program Educational Objectives, Outcomes & Specific Outcomes</h3>
        
        {/* MBA Shipping and Logistics Management and BBA Shipping - POs */}
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
            <h4 className="text-xl font-bold text-aemet-navy mb-4">MBA - Shipping and Logistics Management & BBA – Shipping</h4>
            
            {/* POs */}
            <div className="mb-6">
              <h5 className="text-lg font-semibold text-aemet-navy mb-3 flex items-center">
                <Award className="h-5 w-5 mr-2 text-green-600" />
                Program Outcomes (POs)
              </h5>
              <div className="space-y-3">
                {[
                  { num: 1, desc: "Apply knowledge of management theories and practices to solve business problems" },
                  { num: 2, desc: "Foster analytical and critical thinking abilities for data-based decision making." },
                  { num: 3, desc: "Ability to develop value based leadership ability." },
                  { num: 4, desc: "Ability to understand, analyse and communicate global, economic, legal, and ethical aspects of business." },
                  { num: 5, desc: "Ability to lead themselves and others in the achievement of organizational goals, contributing effectively to a team environment." },
                  { num: 6, desc: "Inculcate innovative thinking and entrepreneurial orientation" },
                  { num: 7, desc: "Apply systems and processes used in the functional areas of business and organisational development." },
                  { num: 8, desc: "Demonstrate ability to undertake lifelong learning" }
                ].map((po) => (
                  <div key={po.num} className="flex items-start">
                    <div className="flex-shrink-0 h-6 min-w-[50px] bg-green-600 text-white rounded flex items-center justify-center mr-3 text-sm font-medium">
                      PO{po.num}
                    </div>
                    <p className="text-gray-700 text-sm">{po.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* PEOs */}
            <div className="mb-6">
              <h5 className="text-lg font-semibold text-aemet-navy mb-3 flex items-center">
                <Target className="h-5 w-5 mr-2 text-blue-600" />
                Program Educational Objectives (PEOs)
              </h5>
              <div className="space-y-3">
                {[
                  { num: 1, desc: "Become successful and competent, innovative and productive in addressing the needs of the Industry" },
                  { num: 2, desc: "Have a successful career in Shipping and Logistics Sector with sound technical and managerial leadership" },
                  { num: 3, desc: "Demonstrate high standard of ethical conduct, positive attitude and societal responsibilities in their chosen areas of career" },
                  { num: 4, desc: "Pursue higher education or research in maritime areas of management." }
                ].map((peo) => (
                  <div key={peo.num} className="flex items-start">
                    <div className="flex-shrink-0 h-6 min-w-[60px] bg-blue-600 text-white rounded flex items-center justify-center mr-3 text-sm font-medium">
                      PEO{peo.num}
                    </div>
                    <p className="text-gray-700 text-sm">{peo.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BBA Shipping - PSOs */}
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-6 rounded-lg border border-purple-200">
            <h4 className="text-xl font-bold text-aemet-navy mb-4">BBA – Shipping - Program Specific Objectives (PSO)</h4>
            
            <div className="space-y-3">
              {[
                { num: 1, desc: "Identify, analyse, interpret and evaluate various issues faced by corporate world with respect to business management, shipping and logistics." },
                { num: 2, desc: "Efficiently practice as graduate trainees in the fields such as business management, shipping and logistics." },
                { num: 3, desc: "Demonstrate and adopt ethical and socially accepted norms for effective management of diverse environments." },
                { num: 4, desc: "Undertake self-directed life-long learning in order to serve business organizations and the society at large." }
              ].map((pso) => (
                <div key={pso.num} className="flex items-start">
                  <div className="flex-shrink-0 h-6 min-w-[60px] bg-purple-600 text-white rounded flex items-center justify-center mr-3 text-sm font-medium">
                    PSO{pso.num}
                  </div>
                  <p className="text-gray-700 text-sm">{pso.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BBA E-Commerce and Digital Marketing - POs */}
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border border-amber-200">
            <h4 className="text-xl font-bold text-aemet-navy mb-4">BBA - E-Commerce and Digital Marketing</h4>
            
            {/* POs */}
            <div className="mb-6">
              <h5 className="text-lg font-semibold text-aemet-navy mb-3 flex items-center">
                <Award className="h-5 w-5 mr-2 text-amber-600" />
                Program Outcomes (POs)
              </h5>
              <div className="space-y-3">
                {[
                  { num: 1, title: "Data Analysis Skills", desc: "Demonstrate proficiency in analysing business data to interpret trends and support decision-making." },
                  { num: 2, title: "Digital Marketing Application", desc: "Effectively apply digital marketing tools such as SEO, SEM, and social media for campaign management." },
                  { num: 3, title: "E-Commerce & Analytics", desc: "Utilize practical knowledge of e-commerce models and web analytics to drive online business performance." },
                  { num: 4, title: "Marketing Optimization Tech", desc: "Integrate AI, automation tools, and A/B testing to optimize digital marketing strategies." },
                  { num: 5, title: "Consumer & Brand Engagement", desc: "Analyse consumer behaviour and apply content and influencer marketing to enhance brand engagement." },
                  { num: 6, title: "Ethics & Financial Accountability", desc: "Adhere to ethical marketing practices, ensure data privacy, and assess financial outcomes like ROI." },
                  { num: 7, title: "Leadership & Collaboration", desc: "Exhibit leadership, manage projects, and collaborate across teams to achieve business objectives." }
                ].map((po) => (
                  <div key={po.num} className="flex items-start">
                    <div className="flex-shrink-0 h-6 min-w-[50px] bg-amber-600 text-white rounded flex items-center justify-center mr-3 text-sm font-medium">
                      PO{po.num}
                    </div>
                    <p className="text-gray-700 text-sm"><span className="font-medium">{po.title}:</span> {po.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* PEOs */}
            <div className="mb-6">
              <h5 className="text-lg font-semibold text-aemet-navy mb-3 flex items-center">
                <Target className="h-5 w-5 mr-2 text-orange-600" />
                Program Educational Objectives (PEOs)
              </h5>
              <div className="space-y-3">
                {[
                  { num: 1, desc: "Become successful graduates who are competent, innovative, and productive in addressing the needs of the digital marketing and e-commerce industries or pursue higher education and research." },
                  { num: 2, desc: "Grow professionally, continuously enhancing their knowledge and skills in digital marketing technologies, analytics, and e-commerce strategies throughout their career." },
                  { num: 3, desc: "Demonstrate a high standard of ethical conduct, a positive attitude, and a strong sense of societal responsibility in their professional endeavours." },
                  { num: 4, desc: "Pursue higher education or research in specialized areas of digital marketing, analytics, and technology-driven business management." }
                ].map((peo) => (
                  <div key={peo.num} className="flex items-start">
                    <div className="flex-shrink-0 h-6 min-w-[60px] bg-orange-600 text-white rounded flex items-center justify-center mr-3 text-sm font-medium">
                      PEO{peo.num}
                    </div>
                    <p className="text-gray-700 text-sm">{peo.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* PSOs */}
            <div>
              <h5 className="text-lg font-semibold text-aemet-navy mb-3 flex items-center">
                <Star className="h-5 w-5 mr-2 text-rose-600" />
                Program Specific Objectives (PSOs)
              </h5>
              <div className="space-y-3">
                {[
                  { num: 1, desc: "Recognize and critically assess challenges and opportunities in the digital business and marketing landscape." },
                  { num: 2, desc: "Apply theoretical and practical knowledge to launch careers as entry-level professionals in e-commerce, digital marketing, or online business roles." },
                  { num: 3, desc: "Exhibit integrity and embrace social responsibility while managing digital initiatives in diverse organizational contexts." },
                  { num: 4, desc: "Pursue continual personal and professional growth by updating skills and knowledge in response to innovations and changes in the digital economy." }
                ].map((pso) => (
                  <div key={pso.num} className="flex items-start">
                    <div className="flex-shrink-0 h-6 min-w-[60px] bg-rose-600 text-white rounded flex items-center justify-center mr-3 text-sm font-medium">
                      PSO{pso.num}
                    </div>
                    <p className="text-gray-700 text-sm">{pso.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  if (departmentId === 'electrical-engineering') {
    return (
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-aemet-navy mb-6">Program Educational Objectives, Outcomes & Specific Outcomes</h3>
        
        {/* B.E. Electrical and Computer Engineering */}
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
            <h4 className="text-xl font-bold text-aemet-navy mb-4">B.E. Electrical and Computer Engineering</h4>
            
            {/* PEOs */}
            <div className="mb-6">
              <h5 className="text-lg font-semibold text-aemet-navy mb-3 flex items-center">
                <Target className="h-5 w-5 mr-2 text-blue-600" />
                Program Educational Objectives (PEOs)
              </h5>
              <p className="text-gray-700 mb-3 text-sm">B.E. Electrical and Computer Engineering is designed to prepare the graduates will,</p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 min-w-[50px] bg-blue-600 text-white rounded flex items-center justify-center mr-3 text-sm font-medium">
                    PEO1
                  </div>
                  <p className="text-gray-700 text-sm">Have a successful career in Marine or other related Electrical and Computer Engineering fields or pursue higher education and research in multidisciplinary area.</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 min-w-[50px] bg-blue-600 text-white rounded flex items-center justify-center mr-3 text-sm font-medium">
                    PEO2
                  </div>
                  <p className="text-gray-700 text-sm">Apply Engineering fundamentals, technical knowledge, skills and modern tools to solve real world Electrical and Computer Engineering problems in Maritime industries.</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 min-w-[50px] bg-blue-600 text-white rounded flex items-center justify-center mr-3 text-sm font-medium">
                    PEO3
                  </div>
                  <p className="text-gray-700 text-sm">Adapt to any environment and practice the ethics of their profession, consistent with a sense of social responsibility.</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 min-w-[50px] bg-blue-600 text-white rounded flex items-center justify-center mr-3 text-sm font-medium">
                    PEO4
                  </div>
                  <p className="text-gray-700 text-sm">Exhibit the skills by updating the breadth of knowledge in the life-long learning process to meet the global challenges.</p>
                </div>
              </div>
            </div>

            {/* POs */}
            <div className="mb-6">
              <h5 className="text-lg font-semibold text-aemet-navy mb-3 flex items-center">
                <Award className="h-5 w-5 mr-2 text-green-600" />
                Program Outcomes (POs)
              </h5>
              <p className="text-gray-700 mb-3 text-sm">A graduate of the Electrical and Computer Engineering Program will,</p>
              <div className="space-y-3">
                {[
                  { num: 1, title: "Engineering Knowledge", desc: "Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems." },
                  { num: 2, title: "Problem Analysis", desc: "Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences." },
                  { num: 3, title: "Design/Development of Solutions", desc: "Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations." },
                  { num: 4, title: "Conduct Investigations of Complex Problems", desc: "Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions." },
                  { num: 5, title: "Modern Tool Usage", desc: "Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modelling to complex engineering activities with an understanding of the limitations." },
                  { num: 6, title: "The Engineer and Society", desc: "Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice." },
                  { num: 7, title: "Environment and Sustainability", desc: "Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development." },
                  { num: 8, title: "Ethics", desc: "Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice." },
                  { num: 9, title: "Individual and Team work", desc: "Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings." },
                  { num: 10, title: "Communication", desc: "Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions." },
                  { num: 11, title: "Project Management and Finance", desc: "Demonstrate knowledge and understanding of the engineering and management principles and apply these to one's own work, as a member and leader in a team, to manage projects and in multidisciplinary environments." },
                  { num: 12, title: "Life-long learning", desc: "Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change." }
                ].map((po) => (
                  <div key={po.num} className="flex items-start">
                    <div className="flex-shrink-0 h-6 min-w-[50px] bg-green-600 text-white rounded flex items-center justify-center mr-3 text-sm font-medium">
                      PO{po.num}
                    </div>
                    <p className="text-gray-700 text-sm"><span className="font-medium">{po.title}:</span> {po.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* PSOs */}
            <div>
              <h5 className="text-lg font-semibold text-aemet-navy mb-3 flex items-center">
                <Star className="h-5 w-5 mr-2 text-purple-600" />
                Program Specific Outcomes (PSOs)
              </h5>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 min-w-[50px] bg-purple-600 text-white rounded flex items-center justify-center mr-3 text-sm font-medium">
                    PSO1
                  </div>
                  <p className="text-gray-700 text-sm">Apply the knowledge of Electrical Engineering, investigate and solve the complex Marine Electrical Engineering problems to meet the specified needs with appropriate considerations for the society.</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 min-w-[50px] bg-purple-600 text-white rounded flex items-center justify-center mr-3 text-sm font-medium">
                    PSO2
                  </div>
                  <p className="text-gray-700 text-sm">Develop solutions for complex Engineering problems in the broad field of power electronics and drives, power systems, high voltage Engineering and Marine Engineering and control.</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 min-w-[50px] bg-purple-600 text-white rounded flex items-center justify-center mr-3 text-sm font-medium">
                    PSO3
                  </div>
                  <p className="text-gray-700 text-sm">Analyze, design and integrate Electrical systems in on board ships and apply modern tools and techniques in marine industries and create passion for life-long learning and research in advanced fields.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* M.E. Power Systems */}
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border border-amber-200">
            <h4 className="text-xl font-bold text-aemet-navy mb-4">M.E. Power Systems</h4>
            
            {/* PEOs */}
            <div className="mb-6">
              <h5 className="text-lg font-semibold text-aemet-navy mb-3 flex items-center">
                <Target className="h-5 w-5 mr-2 text-amber-600" />
                Program Educational Objectives (PEOs)
              </h5>
              <p className="text-gray-700 mb-3 text-sm">Master of Engineering in Power Systems program is designed to prepare the graduates will,</p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 min-w-[50px] bg-amber-600 text-white rounded flex items-center justify-center mr-3 text-sm font-medium">
                    PEO1
                  </div>
                  <p className="text-gray-700 text-sm">Have a successful career and carryout innovative research in power system Engineering and its related disciplines.</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 min-w-[50px] bg-amber-600 text-white rounded flex items-center justify-center mr-3 text-sm font-medium">
                    PEO2
                  </div>
                  <p className="text-gray-700 text-sm">Provide optimum solutions to the challenging problems in power and energy sectors with ethical values and social responsibility.</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 min-w-[50px] bg-amber-600 text-white rounded flex items-center justify-center mr-3 text-sm font-medium">
                    PEO3
                  </div>
                  <p className="text-gray-700 text-sm">Demonstrate life-long independent and reflective learning skills in their career.</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 min-w-[50px] bg-amber-600 text-white rounded flex items-center justify-center mr-3 text-sm font-medium">
                    PEO4
                  </div>
                  <p className="text-gray-700 text-sm">Exhibit project management skills and ability to work in collaborative, multidisciplinary tasks in their profession.</p>
                </div>
              </div>
            </div>

            {/* POs */}
            <div>
              <h5 className="text-lg font-semibold text-aemet-navy mb-3 flex items-center">
                <Award className="h-5 w-5 mr-2 text-orange-600" />
                Program Outcomes (POs)
              </h5>
              <p className="text-gray-700 mb-3 text-sm">Master of Technology in Power Systems program is designed to prepare the graduates will have,</p>
              <div className="space-y-3">
                {[
                  { num: 1, desc: "An ability to independently carry out research/investigation and development work to solve practical problems." },
                  { num: 2, desc: "An ability to write and present a substantial technical report /document." },
                  { num: 3, desc: "An ability to apply advanced concepts of Electrical Power Engineering to analyse, design and develop Electrical systems to put forward power systems Engineering solutions globally." },
                  { num: 4, desc: "Ability to use advanced techniques, skills and modern scientific and Engineering tools for professional practice in power systems." },
                  { num: 5, desc: "Ability to communicate effectively at all levels of projects and its management and demonstrate leadership qualities in a multidisciplinary scientific research team." },
                  { num: 6, desc: "An ability to engage in independent, reflective, and lifelong learning for the benefits of society." }
                ].map((po) => (
                  <div key={po.num} className="flex items-start">
                    <div className="flex-shrink-0 h-6 min-w-[50px] bg-orange-600 text-white rounded flex items-center justify-center mr-3 text-sm font-medium">
                      PO{po.num}
                    </div>
                    <p className="text-gray-700 text-sm">{po.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (departmentId === 'petroleum-engineering') {
    return (
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-aemet-navy mb-6">Program Educational Objectives, Outcomes & Specific Outcomes</h3>
        
        {/* M.E. Petroleum Engineering */}
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border border-amber-200">
            <h4 className="text-xl font-bold text-aemet-navy mb-4">Master of Engineering in Petroleum Engineering</h4>
            
            {/* PEOs */}
            <div className="mb-6">
              <h5 className="text-lg font-semibold text-aemet-navy mb-3 flex items-center">
                <Target className="h-5 w-5 mr-2 text-amber-600" />
                Program Educational Objectives (PEOs)
              </h5>
              <p className="text-gray-700 mb-3 text-sm">Master of Engineering in Petroleum Engineering program is designed</p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 min-w-[50px] bg-amber-600 text-white rounded flex items-center justify-center mr-3 text-sm font-medium">
                    PEO1
                  </div>
                  <p className="text-gray-700 text-sm">To create graduates who can contribute towards propagating the Petroleum Technology.</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 min-w-[50px] bg-amber-600 text-white rounded flex items-center justify-center mr-3 text-sm font-medium">
                    PEO2
                  </div>
                  <p className="text-gray-700 text-sm">To create graduates in Petroleum Engineering who can progress to be developers, designers and researchers to fulfill the necessities of Petroleum Industries.</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 min-w-[50px] bg-amber-600 text-white rounded flex items-center justify-center mr-3 text-sm font-medium">
                    PEO3
                  </div>
                  <p className="text-gray-700 text-sm">Demonstrate life-long independent and reflective learning skills in their career.</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 min-w-[50px] bg-amber-600 text-white rounded flex items-center justify-center mr-3 text-sm font-medium">
                    PEO4
                  </div>
                  <p className="text-gray-700 text-sm">Exhibit Petroleum project management skills and ability to work in collaborative, multidisciplinary tasks in an Oil & Gas profession.</p>
                </div>
              </div>
            </div>

            {/* POs */}
            <div className="mb-6">
              <h5 className="text-lg font-semibold text-aemet-navy mb-3 flex items-center">
                <Award className="h-5 w-5 mr-2 text-orange-600" />
                Program Outcomes (POs)
              </h5>
              <p className="text-gray-700 mb-3 text-sm">Master of Engineering in Petroleum Engineering program is designed to prepare the graduates</p>
              <div className="space-y-3">
                {[
                  { num: 1, desc: "Apply the technical knowledge in Petroleum Engineering specialization to devise the solution of complex engineering problems considering the risk, safety and environmental aspects for societal benefits." },
                  { num: 2, desc: "Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological advancement in Onshore & Offshore Petroleum Industry." },
                  { num: 3, desc: "Communicate effectively on complex engineering activities with the engineering community and with society with effective reports and design documentation, make effective presentations, and give and receive clear instructions." },
                  { num: 4, desc: "Use innovation method for design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions." },
                  { num: 5, desc: "Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations." },
                  { num: 6, desc: "Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development." }
                ].map((po) => (
                  <div key={po.num} className="flex items-start">
                    <div className="flex-shrink-0 h-6 min-w-[50px] bg-orange-600 text-white rounded flex items-center justify-center mr-3 text-sm font-medium">
                      PO{po.num}
                    </div>
                    <p className="text-gray-700 text-sm">{po.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* PSOs */}
            <div>
              <h5 className="text-lg font-semibold text-aemet-navy mb-3 flex items-center">
                <Star className="h-5 w-5 mr-2 text-purple-600" />
                Program Specific Outcomes (PSOs)
              </h5>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 min-w-[50px] bg-purple-600 text-white rounded flex items-center justify-center mr-3 text-sm font-medium">
                    PSO1
                  </div>
                  <p className="text-gray-700 text-sm">To Provide students with effective and efficient knowledge in Petroleum Engineering, enabling them to apply technical skills in real world.</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 min-w-[50px] bg-purple-600 text-white rounded flex items-center justify-center mr-3 text-sm font-medium">
                    PSO2
                  </div>
                  <p className="text-gray-700 text-sm">To create awareness of foreign language among students to meet global industry environments for opportunities in multinational companies.</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 min-w-[50px] bg-purple-600 text-white rounded flex items-center justify-center mr-3 text-sm font-medium">
                    PSO3
                  </div>
                  <p className="text-gray-700 text-sm">To offer a platform for student training to receive develop a new and innovative project that address and improve current industry needs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default content for other departments
  return (
    <div>
      <h3 className="text-xl font-bold text-aemet-navy mb-6">Program Objectives & Outcomes</h3>
      <div className="bg-white border border-gray-200 rounded-lg p-8 text-center">
        <Target className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-600">Program objectives and outcomes information will be updated soon.</p>
      </div>
    </div>
  );
};

export default ProgramObjectivesSection;
