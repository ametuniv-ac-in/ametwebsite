import React, { useState } from 'react';
import { Briefcase, Users, TrendingUp, Building2, FileText, Award, Mail, Phone, GraduationCap } from 'lucide-react';
import placementCompanies from '@/assets/marine-engineering-placement-companies.jpg';
import petroleumPlacementCompanies from '@/assets/petroleum-placement-companies.jpg';

interface StudentPerformanceSectionProps {
  departmentId?: string;
}

const StudentPerformanceSection: React.FC<StudentPerformanceSectionProps> = ({ departmentId }) => {
  const [activeTab, setActiveTab] = useState<'placements' | 'internship'>('placements');
  
  // Marine Engineering specific student performance
  if (departmentId === 'marine-engineering') {
    return (
      <div>
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <TrendingUp className="h-5 w-5 mr-2 text-aemet-blue" />
          Student Performance
        </h3>
        
        {/* Simple Tab Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <button
            onClick={() => setActiveTab('placements')}
            className={`p-6 rounded-lg border-2 transition-all duration-200 text-left ${
              activeTab === 'placements'
                ? 'border-aemet-blue bg-aemet-blue/5'
                : 'border-gray-200 hover:border-aemet-blue/50 hover:bg-gray-50'
            }`}
          >
            <Briefcase className={`h-6 w-6 mb-2 ${activeTab === 'placements' ? 'text-aemet-blue' : 'text-gray-600'}`} />
            <h4 className={`font-semibold ${activeTab === 'placements' ? 'text-aemet-blue' : 'text-aemet-navy'}`}>
              Placements
            </h4>
          </button>

          <button
            onClick={() => setActiveTab('internship')}
            className={`p-6 rounded-lg border-2 transition-all duration-200 text-left ${
              activeTab === 'internship'
                ? 'border-aemet-blue bg-aemet-blue/5'
                : 'border-gray-200 hover:border-aemet-blue/50 hover:bg-gray-50'
            }`}
          >
            <Users className={`h-6 w-6 mb-2 ${activeTab === 'internship' ? 'text-aemet-blue' : 'text-gray-600'}`} />
            <h4 className={`font-semibold ${activeTab === 'internship' ? 'text-aemet-blue' : 'text-aemet-navy'}`}>
              Internship
            </h4>
          </button>
        </div>

        {/* Tab Content */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
          {activeTab === 'placements' && (
            <div className="flex flex-col items-center text-center">
              <div className="bg-gradient-to-r from-aemet-blue to-aemet-navy p-4 rounded-full mb-6">
                <Briefcase className="h-12 w-12 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-aemet-navy mb-3">Placement Details</h4>
              <p className="text-gray-700 mb-6 max-w-2xl">
                Download the comprehensive placement details document containing information about our placement partners, placement statistics, and career opportunities for Marine Engineering students.
              </p>
              <a 
                href="/documents/marine-engineering-placement-details.pdf" 
                download="Marine-Engineering-Placement-Details.pdf"
                className="inline-flex items-center px-8 py-4 bg-aemet-blue text-white rounded-lg hover:bg-aemet-navy transition-colors text-lg font-semibold shadow-lg hover:shadow-xl"
              >
                <FileText className="h-6 w-6 mr-3" />
                Download PDF
              </a>
            </div>
          )}

          {activeTab === 'internship' && (
            <div>
              <div className="flex items-center mb-6">
                <Users className="h-8 w-8 text-aemet-blue mr-3" />
                <h4 className="text-2xl font-bold text-aemet-navy">Internship & Field Projects</h4>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6">
                  <h5 className="text-lg font-semibold text-aemet-navy mb-3">Program Overview</h5>
                  <p className="text-gray-700 mb-4">
                    Our comprehensive internship program provides students with hands-on experience in marine engineering 
                    through field projects, research assignments, and industry collaborations. Students work on diverse 
                    topics ranging from environmental science to advanced maritime technology.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h6 className="font-semibold text-aemet-navy mb-2">🔬 Research Areas</h6>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Marine Pollution & Environmental Science</li>
                        <li>• Renewable Energy & Water Technology</li>
                        <li>• Maritime Safety & Regulations</li>
                        <li>• Ship Design & Propulsion Systems</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h6 className="font-semibold text-aemet-navy mb-2">🎓 Student Benefits</h6>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Practical industry exposure</li>
                        <li>• Research & development skills</li>
                        <li>• Technical documentation experience</li>
                        <li>• Industry mentor guidance</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h5 className="text-lg font-semibold text-aemet-navy mb-3">Project Topics</h5>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {[
                      'Environmental Science',
                      'Marine Pollution',
                      'Renewable Energy',
                      'Water Technology',
                      'Ship Design',
                      'Maritime Safety',
                      'Ocean Engineering',
                      'Climate Change',
                      'Biodiversity',
                      'Purification Techniques',
                      'Global Warming',
                      'Environmental Chemistry'
                    ].map((topic, index) => (
                      <div key={index} className="bg-aemet-lightGray text-aemet-navy px-3 py-2 rounded text-sm text-center">
                        {topic}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-aemet-blue/10 rounded-lg p-6 border border-aemet-blue/20">
                  <div className="flex items-start space-x-4">
                    <FileText className="h-6 w-6 text-aemet-blue flex-shrink-0 mt-1" />
                    <div>
                      <h5 className="font-semibold text-aemet-navy mb-2">Complete Internship Records</h5>
                      <p className="text-sm text-gray-700 mb-3">
                        View detailed records of all student internships, field projects, and research topics undertaken by our Marine Engineering students.
                      </p>
                      <a 
                        href="/documents/marine-engineering-internship.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-aemet-blue text-white rounded-lg hover:bg-aemet-navy transition-colors text-sm"
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        View Internship Records
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Petroleum Engineering specific student performance
  if (departmentId === 'petroleum-engineering') {
    return (
      <div>
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <TrendingUp className="h-5 w-5 mr-2 text-aemet-blue" />
          Student Performance
        </h3>
        
        {/* Simple Tab Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <button
            onClick={() => setActiveTab('placements')}
            className={`p-6 rounded-lg border-2 transition-all duration-200 text-left ${
              activeTab === 'placements'
                ? 'border-aemet-blue bg-aemet-blue/5'
                : 'border-gray-200 hover:border-aemet-blue/50 hover:bg-gray-50'
            }`}
          >
            <Briefcase className={`h-6 w-6 mb-2 ${activeTab === 'placements' ? 'text-aemet-blue' : 'text-gray-600'}`} />
            <h4 className={`font-semibold ${activeTab === 'placements' ? 'text-aemet-blue' : 'text-aemet-navy'}`}>
              Placements
            </h4>
          </button>

          <button
            onClick={() => setActiveTab('internship')}
            className={`p-6 rounded-lg border-2 transition-all duration-200 text-left ${
              activeTab === 'internship'
                ? 'border-aemet-blue bg-aemet-blue/5'
                : 'border-gray-200 hover:border-aemet-blue/50 hover:bg-gray-50'
            }`}
          >
            <Users className={`h-6 w-6 mb-2 ${activeTab === 'internship' ? 'text-aemet-blue' : 'text-gray-600'}`} />
            <h4 className={`font-semibold ${activeTab === 'internship' ? 'text-aemet-blue' : 'text-aemet-navy'}`}>
              Internship
            </h4>
          </button>
        </div>

        {/* Tab Content */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
          {activeTab === 'placements' && (
            <div>
              <div className="flex items-center mb-6">
                <Briefcase className="h-8 w-8 text-aemet-blue mr-3" />
                <h4 className="text-2xl font-bold text-aemet-navy">Campus Placements</h4>
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-6">
                <h5 className="text-lg font-semibold text-aemet-navy mb-4">Our Placement Partners</h5>
                <p className="text-gray-700 mb-4">
                  Our students are placed in reputed companies such as:
                </p>
                <img 
                  src={petroleumPlacementCompanies} 
                  alt="Petroleum Engineering Placement Partner Companies" 
                  className="w-full rounded-lg border border-gray-200"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <Building2 className="h-8 w-8 text-aemet-blue mb-3" />
                  <h5 className="font-semibold text-aemet-navy mb-2">Industry Leaders</h5>
                  <p className="text-sm text-gray-700">
                    Partnerships with Shell, Tech Mahindra, McDermott, and other leading oil & gas companies
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <Briefcase className="h-8 w-8 text-aemet-blue mb-3" />
                  <h5 className="font-semibold text-aemet-navy mb-2">Career Opportunities</h5>
                  <p className="text-sm text-gray-700">
                    Diverse roles in drilling, reservoir engineering, production operations, and petroleum technology
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <TrendingUp className="h-8 w-8 text-aemet-blue mb-3" />
                  <h5 className="font-semibold text-aemet-navy mb-2">High Placement Rate</h5>
                  <p className="text-sm text-gray-700">
                    Consistent track record of placing students in top-tier petroleum and energy companies
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'internship' && (
            <div>
              <div className="flex items-center mb-6">
                <Users className="h-8 w-8 text-aemet-blue mr-3" />
                <h4 className="text-2xl font-bold text-aemet-navy">Internship & Field Projects</h4>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6">
                  <h5 className="text-lg font-semibold text-aemet-navy mb-3">Program Overview</h5>
                  <p className="text-gray-700 mb-4">
                    Our students engage in comprehensive internship and field projects covering various aspects of petroleum engineering, 
                    including drilling operations, reservoir engineering, artificial lift systems, and advanced oil recovery techniques.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h6 className="font-semibold text-aemet-navy mb-2">🔬 Key Areas</h6>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Drilling & Completion</li>
                        <li>• Reservoir Engineering</li>
                        <li>• Production Technology</li>
                        <li>• Enhanced Oil Recovery</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h6 className="font-semibold text-aemet-navy mb-2">🎓 Skills Developed</h6>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Technical analysis</li>
                        <li>• Industry software proficiency</li>
                        <li>• Research methodology</li>
                        <li>• Project management</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h6 className="font-semibold text-aemet-navy mb-2">💼 Industry Exposure</h6>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Real-world applications</li>
                        <li>• Professional mentorship</li>
                        <li>• Industry best practices</li>
                        <li>• Career preparation</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-aemet-blue/10 rounded-lg p-6 border border-aemet-blue/20">
                  <div className="flex items-start space-x-4">
                    <FileText className="h-6 w-6 text-aemet-blue flex-shrink-0 mt-1" />
                    <div>
                      <h5 className="font-semibold text-aemet-navy mb-2">Complete Internship Records</h5>
                      <p className="text-sm text-gray-700 mb-3">
                        View detailed records of all student internships and field projects undertaken by our Petroleum Engineering students, 
                        including project titles and research areas.
                      </p>
                      <a 
                        href="/documents/petroleum-engineering/Internship.pdf" 
                        download
                        className="inline-flex items-center px-4 py-2 bg-aemet-blue text-white rounded-lg hover:bg-aemet-navy transition-colors text-sm"
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        Download Internship Records
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Food Processing specific student performance
  if (departmentId === 'food-processing') {
    return (
      <div>
        <h3 className="text-xl font-bold text-aemet-navy mb-6">Student Performances</h3>
        
        <div className="space-y-6">
          {/* Industrial Visit */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Building2 className="w-6 h-6 text-aemet-blue" />
                <div>
                  <h4 className="text-lg font-semibold text-aemet-navy">Industrial Visit</h4>
                  <p className="text-sm text-gray-600 mt-1">Records of student industrial visits and field trips</p>
                </div>
              </div>
              <a 
                href="/documents/food-processing-industrial-visit.pdf" 
                download
                className="inline-flex items-center px-4 py-2 bg-aemet-blue text-white rounded-lg hover:bg-aemet-navy transition-colors text-sm"
              >
                <FileText className="h-4 w-4 mr-2" />
                Download
              </a>
            </div>
          </div>

          {/* Internship */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-green-600" />
                <div>
                  <h4 className="text-lg font-semibold text-aemet-navy">Internship</h4>
                  <p className="text-sm text-gray-600 mt-1">Student internship records and industry placements</p>
                </div>
              </div>
              <a 
                href="/documents/food-processing-internship.pdf" 
                download
                className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
              >
                <FileText className="h-4 w-4 mr-2" />
                Download
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }


  // Nautical Sciences specific student performance
  if (departmentId === 'nautical-sciences') {
    return (
      <div>
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <TrendingUp className="h-5 w-5 mr-2 text-aemet-blue" />
          Student Performance
        </h3>
        
        <div className="space-y-6">
          {/* Students Participants in Various Events */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-aemet-blue" />
                <div>
                  <h4 className="text-lg font-semibold text-aemet-navy">List of Students Participants in Various Events</h4>
                  <p className="text-sm text-gray-600 mt-1">Complete list of student participants in various academic and extracurricular events</p>
                </div>
              </div>
              <a 
                href="/documents/nautical/students-participants-events.docx" 
                download="List_of_Students_Participants_in_Various_Events.docx"
                className="inline-flex items-center px-4 py-2 bg-aemet-blue text-white rounded-lg hover:bg-aemet-navy transition-colors text-sm"
              >
                <FileText className="h-4 w-4 mr-2" />
                Download
              </a>
            </div>
          </div>

          {/* Placement Details */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-100">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-green-600" />
                <div>
                  <h4 className="text-lg font-semibold text-aemet-navy">Placement Details</h4>
                  <p className="text-sm text-gray-600 mt-1">Comprehensive placement details and career opportunities for Nautical Sciences students</p>
                </div>
              </div>
              <a 
                href="/documents/nautical/placement-details.docx" 
                download="Nautical_Sciences_Placement_Details.docx"
                className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
              >
                <FileText className="h-4 w-4 mr-2" />
                Download
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Computer Science specific student performance
  if (departmentId === 'computer-science') {
    return (
      <div>
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <TrendingUp className="h-5 w-5 mr-2 text-aemet-blue" />
          Student Performances - Student Participation and Prizes
        </h3>
        
        <div className="space-y-6">
          {/* IDEATHON 2024 */}
          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-lg border border-amber-200">
            <div className="flex items-start gap-4">
              <div className="bg-amber-500 p-3 rounded-full">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-aemet-navy mb-2">IDEATHON 2024 Competition</h4>
                <div className="text-gray-700 mb-2">
                  <p>PRANIT HASAN.N - I year AIML</p>
                  <p>F SYED DARIS - I year AIML</p>
                  <p>SHERIN ABRAHAM - I year AIML</p>
                </div>
                <span className="inline-block bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Won the Second Prize
                </span>
              </div>
            </div>
          </div>

          {/* World Science Day - First Prize */}
          <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-lg border border-yellow-200">
            <div className="flex items-start gap-4">
              <div className="bg-yellow-500 p-3 rounded-full">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-aemet-navy mb-2">World Science Day Competition</h4>
                <div className="text-gray-700 mb-2">
                  <p>PRANIT HASAN.N - I year AIML</p>
                  <p>SACHIN S - I year AIML</p>
                </div>
                <span className="inline-block bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Won the First Prize
                </span>
              </div>
            </div>
          </div>

          {/* World Science Day - Second Prize */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-lg border border-amber-200">
            <div className="flex items-start gap-4">
              <div className="bg-amber-500 p-3 rounded-full">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-aemet-navy mb-2">World Science Day Competition</h4>
                <div className="text-gray-700 mb-2">
                  <p>VIGNESH.M - II year AIML</p>
                  <p>SHIVESANGKER.I - II year CS</p>
                </div>
                <span className="inline-block bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Won the Second Prize
                </span>
              </div>
            </div>
          </div>

          {/* I-techno 2k25 */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
            <div className="flex items-start gap-4">
              <div className="bg-aemet-blue p-3 rounded-full">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-aemet-navy mb-2">I-techno 2k25</h4>
                <div className="text-gray-700">
                  <p>PRANIT HASAN.N - III year AIML</p>
                  <p>SISWA JEROME - III Year AIML</p>
                </div>
              </div>
            </div>
          </div>

          {/* IIT Madras Space Settlement Design Contest */}
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-lg border border-purple-200">
            <div className="flex items-start gap-4">
              <div className="bg-purple-600 p-3 rounded-full">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-aemet-navy mb-2">IIT Madras Space Settlement Design Contest 2025</h4>
                <p className="text-gray-700">
                  Narain Karthik and Vishal Raj secured 5th place out of 113 teams in the IIT Madras Space Settlement Design Contest 2025, showcasing excellence in engineering, design, and teamwork under a 24-hour challenge.
                </p>
              </div>
            </div>
          </div>

          {/* Coding Competition */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
            <div className="flex items-start gap-4">
              <div className="bg-green-600 p-3 rounded-full">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-aemet-navy mb-2">Coding Competition - Code Freeze</h4>
                <p className="text-gray-700">
                  Dinesh A K won 3rd place in the Coding Competition – Code Freeze at the National Level Technical Symposium "Chakravyuham 2K25" organized by Gojan School of Business and Technology.
                </p>
              </div>
            </div>
          </div>

          {/* Nritya Kalai Mani */}
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-lg border border-pink-200">
            <div className="flex items-start gap-4">
              <div className="bg-pink-600 p-3 rounded-full">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-aemet-navy mb-2">Nritya Kalai Mani Title</h4>
                <p className="text-gray-700">
                  S. Sweetha received the "Nritya Kalai Mani" title for her outstanding classical dance performance at the Navaratri Thiruvizha 2025 in Mylapore, Chennai, organized by Sri Shankara Natya Vidyalaya.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Commerce Department student performance
  if (departmentId === 'commerce-department') {
    return (
      <div>
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <TrendingUp className="h-5 w-5 mr-2 text-aemet-blue" />
          Student Performance
        </h3>
        
        <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl border-2 border-blue-100 overflow-hidden shadow-lg">
          <div className="bg-gradient-to-r from-aemet-blue to-aemet-navy p-6">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-3 rounded-full">
                <Award className="h-8 w-8 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">Student Performance Report</h4>
                <p className="text-blue-100">Department of Commerce</p>
              </div>
            </div>
          </div>
          
          <div className="p-8 text-center">
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Download the comprehensive student performance report containing academic achievements, 
              examination results, project accomplishments, and co-curricular activities of 
              Commerce department students.
            </p>
            
            <a 
              href="/documents/commerce/student-performance.pdf" 
              download="Commerce-Student-Performance.pdf"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-aemet-blue to-aemet-navy text-white rounded-lg hover:from-aemet-navy hover:to-aemet-blue transition-all text-lg font-semibold shadow-lg hover:shadow-xl"
            >
              <FileText className="h-6 w-6 mr-3" />
              Download Student Performance PDF
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Default student performance for other departments
  return (
    <div>
      <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
        <TrendingUp className="h-5 w-5 mr-2 text-aemet-blue" />
        Student Performance
      </h3>
      
      <div className="bg-white border border-gray-200 rounded-lg p-8 text-center">
        <TrendingUp className="h-12 w-12 text-aemet-blue mx-auto mb-4" />
        <p className="text-gray-600">Student performance information will be available soon</p>
      </div>
    </div>
  );
};

export default StudentPerformanceSection;
