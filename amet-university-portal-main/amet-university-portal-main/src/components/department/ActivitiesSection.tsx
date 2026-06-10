import React, { useState } from 'react';
import { Calendar, Users, Award, BookOpen, Camera, Presentation, Activity, GraduationCap, Handshake, FileText, Briefcase, Building, MapPin } from 'lucide-react';

interface ActivitiesSectionProps {
  departmentId?: string;
}

const ActivitiesSection: React.FC<ActivitiesSectionProps> = ({ departmentId }) => {
  const [activeTab, setActiveTab] = useState<'mou' | 'conferences' | 'extension' | 'courses'>('mou');
  const [foodActiveTab, setFoodActiveTab] = useState<'mou' | 'conferences' | 'extension' | 'courses' | 'events' | 'career'>('extension');
  
  // Marine Biotechnology specific activities
  if (departmentId === 'marine-biotechnology') {
    const activityItems = [
      {
        title: 'Value Added Courses',
        description: 'Additional courses to enhance student skills and knowledge',
        icon: GraduationCap,
        file: '/documents/marine-biotech-value-added-courses.pdf',
        color: 'from-blue-500 to-indigo-600',
        bgColor: 'from-blue-50 to-indigo-50',
        borderColor: 'border-blue-200',
        buttonColor: 'bg-blue-600 hover:bg-blue-700'
      },
      {
        title: 'Extension Activity',
        description: 'Community outreach and extension programs',
        icon: Users,
        file: '/documents/marine-biotech-extension-activity.pdf',
        color: 'from-green-500 to-emerald-600',
        bgColor: 'from-green-50 to-emerald-50',
        borderColor: 'border-green-200',
        buttonColor: 'bg-green-600 hover:bg-green-700'
      },
      {
        title: 'Conferences',
        description: 'Department conferences, seminars, and workshops organized',
        icon: Presentation,
        file: '/documents/marine-biotech-conferences.pdf',
        color: 'from-purple-500 to-pink-600',
        bgColor: 'from-purple-50 to-pink-50',
        borderColor: 'border-purple-200',
        buttonColor: 'bg-purple-600 hover:bg-purple-700'
      },
      {
        title: 'MoU',
        description: 'Memorandum of Understanding with industry and institutions',
        icon: Handshake,
        file: '/documents/marine-biotech-mou.pdf',
        color: 'from-orange-500 to-amber-600',
        bgColor: 'from-orange-50 to-amber-50',
        borderColor: 'border-orange-200',
        buttonColor: 'bg-orange-600 hover:bg-orange-700'
      }
    ];

    return (
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <Activity className="h-5 w-5 mr-2 text-aemet-blue" />
          Department Activities
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activityItems.map((item, index) => {
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
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-2 ${item.buttonColor} text-white font-medium px-4 py-3 rounded-lg transition-colors duration-200 text-sm w-full`}
                  >
                    <FileText className="h-4 w-4" />
                    Download PDF
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-aemet-blue/5 to-aemet-navy/5 rounded-lg p-6 border border-aemet-blue/20 mt-6">
          <p className="text-sm text-gray-700">
            The Department of Marine Biotechnology actively engages in various activities including value-added courses, extension programs, conferences, and maintains partnerships with industry through MoUs to enhance research and academic excellence.
          </p>
        </div>
      </div>
    );
  }
  
  // Physics department specific activities
  if (departmentId === 'physics') {
    const activityFiles = [
      {
        title: 'Department Activities Overview',
        description: 'Comprehensive overview of all department activities',
        file: '/documents/physics/Department_Activities_Overview.docx',
        color: 'from-aemet-blue to-aemet-navy',
        bgColor: 'from-blue-50 to-indigo-50',
        borderColor: 'border-blue-200',
        buttonColor: 'bg-aemet-blue hover:bg-aemet-navy'
      },
      {
        title: 'Department Activities 2025-26',
        description: 'Activities for Academic Year 2025-26',
        file: '/documents/physics/Department_Activities_25-26.docx',
        color: 'from-purple-500 to-pink-600',
        bgColor: 'from-purple-50 to-pink-50',
        borderColor: 'border-purple-200',
        buttonColor: 'bg-purple-600 hover:bg-purple-700'
      },
      {
        title: 'Department Activities 2024-25',
        description: 'Activities for Academic Year 2024-25',
        file: '/documents/physics/Department_Activities_24-25.docx',
        color: 'from-green-500 to-emerald-600',
        bgColor: 'from-green-50 to-emerald-50',
        borderColor: 'border-green-200',
        buttonColor: 'bg-green-600 hover:bg-green-700'
      },
      {
        title: 'Department Activities 2023-24',
        description: 'Activities for Academic Year 2023-24',
        file: '/documents/physics/Department_Activities_23-24.docx',
        color: 'from-orange-500 to-amber-600',
        bgColor: 'from-orange-50 to-amber-50',
        borderColor: 'border-orange-200',
        buttonColor: 'bg-orange-600 hover:bg-orange-700'
      },
      {
        title: 'Department Activities 2022-23',
        description: 'Activities for Academic Year 2022-23',
        file: '/documents/physics/Department_Activities_22-23.docx',
        color: 'from-teal-500 to-cyan-600',
        bgColor: 'from-teal-50 to-cyan-50',
        borderColor: 'border-teal-200',
        buttonColor: 'bg-teal-600 hover:bg-teal-700'
      },
      {
        title: 'Department Activities 2021-22',
        description: 'Activities for Academic Year 2021-22',
        file: '/documents/physics/Department_Activities_21-22.docx',
        color: 'from-red-500 to-rose-600',
        bgColor: 'from-red-50 to-rose-50',
        borderColor: 'border-red-200',
        buttonColor: 'bg-red-600 hover:bg-red-700'
      }
    ];

    return (
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <Activity className="h-5 w-5 mr-2 text-aemet-blue" />
          Department Activities
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activityFiles.map((item, index) => (
            <div 
              key={index} 
              className={`bg-gradient-to-br ${item.bgColor} rounded-lg p-6 border-2 ${item.borderColor} hover:shadow-xl transition-all duration-300`}
            >
              <div className="flex flex-col h-full">
                <div className={`bg-gradient-to-r ${item.color} p-3 rounded-lg w-fit mb-4`}>
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                
                <h4 className="text-lg font-bold text-aemet-navy mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600 mb-4 flex-grow">{item.description}</p>
                
                <a
                  href={item.file}
                  download
                  className={`inline-flex items-center justify-center gap-2 ${item.buttonColor} text-white font-medium px-4 py-3 rounded-lg transition-colors duration-200 text-sm w-full`}
                >
                  <FileText className="h-4 w-4" />
                  Download File
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-aemet-blue/5 to-aemet-navy/5 rounded-lg p-6 border border-aemet-blue/20 mt-6">
          <p className="text-sm text-gray-700">
            The Department of Physics actively organizes various academic activities including workshops, seminars, conferences, guest lectures, and extension programs to enhance student learning and research exposure.
          </p>
        </div>
      </div>
    );
  }
  
  if (departmentId === 'information-technology') {
    const activityItems = [
      {
        title: 'Value Added Courses',
        description: 'Additional courses to enhance student skills and knowledge',
        icon: GraduationCap,
        file: '/activities/it/value-added-courses.pdf',
        color: 'from-blue-500 to-indigo-600',
        bgColor: 'from-blue-50 to-indigo-50',
        borderColor: 'border-blue-200',
        buttonColor: 'bg-blue-600 hover:bg-blue-700'
      },
      {
        title: 'Extension Activity',
        description: 'Community outreach and extension programs',
        icon: Users,
        file: '/activities/it/extension-activity.pdf',
        color: 'from-green-500 to-emerald-600',
        bgColor: 'from-green-50 to-emerald-50',
        borderColor: 'border-green-200',
        buttonColor: 'bg-green-600 hover:bg-green-700'
      },
      {
        title: 'Conferences',
        description: 'Department conferences, seminars, and workshops organized',
        icon: Presentation,
        file: '/activities/it/conferences.pdf',
        color: 'from-purple-500 to-pink-600',
        bgColor: 'from-purple-50 to-pink-50',
        borderColor: 'border-purple-200',
        buttonColor: 'bg-purple-600 hover:bg-purple-700'
      },
      {
        title: 'MoU',
        description: 'Memorandum of Understanding with industry and institutions',
        icon: Handshake,
        file: '/activities/it/mou.pdf',
        color: 'from-orange-500 to-amber-600',
        bgColor: 'from-orange-50 to-amber-50',
        borderColor: 'border-orange-200',
        buttonColor: 'bg-orange-600 hover:bg-orange-700'
      }
    ];

    return (
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <Activity className="h-5 w-5 mr-2 text-aemet-blue" />
          Department Activities
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activityItems.map((item, index) => {
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
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-2 ${item.buttonColor} text-white font-medium px-4 py-3 rounded-lg transition-colors duration-200 text-sm w-full`}
                  >
                    <FileText className="h-4 w-4" />
                    Download PDF
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-aemet-blue/5 to-aemet-navy/5 rounded-lg p-6 border border-aemet-blue/20 mt-6">
          <p className="text-sm text-gray-700">
            The department regularly organizes various activities including value-added courses, extension programs, conferences, and maintains partnerships with industry through MoUs to enhance student learning and professional development.
          </p>
        </div>
      </div>
    );
  }
  
  // Commerce Department specific activities
  if (departmentId === 'commerce-department') {
    const activityItems = [
      {
        title: 'Extension Activities',
        description: 'Community outreach and social engagement programs',
        icon: Users,
        file: '/documents/commerce/extension-activities.pdf',
        color: 'from-green-500 to-emerald-600',
        bgColor: 'from-green-50 to-emerald-50',
        borderColor: 'border-green-200',
        buttonColor: 'bg-green-600 hover:bg-green-700'
      },
      {
        title: 'Workshops',
        description: 'Professional development and skill enhancement workshops',
        icon: GraduationCap,
        file: '/documents/commerce/workshops.pdf',
        color: 'from-blue-500 to-indigo-600',
        bgColor: 'from-blue-50 to-indigo-50',
        borderColor: 'border-blue-200',
        buttonColor: 'bg-blue-600 hover:bg-blue-700'
      },
      {
        title: 'Conferences',
        description: 'Academic conferences, seminars, and symposiums',
        icon: Presentation,
        file: '/documents/commerce/conferences.pdf',
        color: 'from-purple-500 to-pink-600',
        bgColor: 'from-purple-50 to-pink-50',
        borderColor: 'border-purple-200',
        buttonColor: 'bg-purple-600 hover:bg-purple-700'
      },
      {
        title: 'MoU',
        description: 'Memorandum of Understanding with industry partners and institutions',
        icon: Handshake,
        file: '/documents/commerce/mou.pdf',
        color: 'from-orange-500 to-amber-600',
        bgColor: 'from-orange-50 to-amber-50',
        borderColor: 'border-orange-200',
        buttonColor: 'bg-orange-600 hover:bg-orange-700'
      }
    ];

    return (
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <Activity className="h-5 w-5 mr-2 text-aemet-blue" />
          Department Activities
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activityItems.map((item, index) => {
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
                    <FileText className="h-4 w-4" />
                    Download PDF
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-aemet-blue/5 to-aemet-navy/5 rounded-lg p-6 border border-aemet-blue/20 mt-6">
          <p className="text-sm text-gray-700">
            The Department of Commerce actively engages in various activities to enhance academic excellence and industry connections through workshops, conferences, extension programs, and strategic partnerships with business organizations.
          </p>
        </div>
      </div>
    );
  }
  
  // AMET Business School specific activities
  if (departmentId === 'amet-business-school') {
    return (
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <Activity className="h-5 w-5 mr-2 text-aemet-blue" />
          Department Activities
        </h3>

        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-8 border border-indigo-200">
          <div className="flex flex-col items-center text-center">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-4 rounded-full mb-6">
              <Activity className="h-12 w-12 text-white" />
            </div>
            
            <h4 className="text-2xl font-bold text-aemet-navy mb-3">
              Department Activities
            </h4>
            
            <p className="text-gray-700 mb-6 max-w-2xl">
              Explore the comprehensive list of department activities including workshops, seminars, conferences, guest lectures, industry visits, and other academic events organized by AMET Business School.
            </p>
            
            <a 
              href="/documents/abs/department_activities.docx" 
              download 
              className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-purple-600 hover:to-indigo-500 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <FileText className="h-5 w-5" />
              Download Department Activities
            </a>
          </div>
        </div>
      </div>
    );
  }
  
  // Computer Science specific activities
  if (departmentId === 'computer-science') {
    return (
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-aemet-navy mb-6">Department Activities</h3>
        
        {/* Academic Events */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="w-6 h-6 text-aemet-blue" />
            <h4 className="text-lg font-semibold text-aemet-navy">Academic Events</h4>
          </div>
          
          {/* 2025-26 FDP */}
          <div className="mb-4">
            <h5 className="font-semibold text-aemet-navy mb-2">2025-26 (FDP)</h5>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>AICTE-ATAL FDP sanctioned with budget of 3.5 lakhs INR, conducted between Oct 13th - 18th October, 2025. Coordinator: Dr D Sivakumar, Co-Coordinator: Dr C N Ravi</li>
              <li>Mr. P. Arunkumar conducted ICT Academy FDP Power BI workshop at AMET in Sept 2025</li>
            </ul>
          </div>
          
          {/* 2025-26 Seminars/Webinars/Workshop */}
          <div className="mb-4">
            <h5 className="font-semibold text-aemet-navy mb-2">2025-26 (Seminars/Webinars/Workshop)</h5>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Dr. P. Jothimani organized Seminar on "Funding opportunity for Commercial ideas" - June 2025</li>
              <li>Dr. P. Jothimani organised "Career guidance and job abroad for AMET Students" - Sept 2025</li>
              <li>Dr. P. Jothimani organised "Cyber Security Awareness for university employees" - 20th October, 2025</li>
              <li>Dr. C. N. Ravi organized Workshop on "Powering the Future - using Gen-AI" at AMET - Oct 2025</li>
            </ul>
          </div>
          
          {/* 2024-25 Seminar */}
          <div>
            <h5 className="font-semibold text-aemet-navy mb-2">2024-25 (Seminar)</h5>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>National Seminar on "Artificial Intelligence vs Human Intelligence: What stays unchanged" (NCAIHI'2K25) was conducted on 28th March 2025</li>
            </ul>
          </div>
        </div>

        {/* Co-Curricular: Internships */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-100">
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="w-6 h-6 text-green-600" />
            <h4 className="text-lg font-semibold text-aemet-navy">Co-Curricular: Internships (May 2025)</h4>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Pondicherry University - Pondicherry</li>
            <li>Code Bind Technologies - AP</li>
            <li>Python Technology - Madurai</li>
          </ul>
        </div>

        {/* Extension-Outreach Events */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-100">
          <div className="flex items-center gap-3 mb-4">
            <Activity className="w-6 h-6 text-purple-600" />
            <h4 className="text-lg font-semibold text-aemet-navy">Extension-Outreach Events (4th week of May 2025)</h4>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Smart phone literacy for Fisherman Families</li>
            <li>Internet Basics for School Teachers</li>
            <li>UPI Payment Training at Fish market</li>
            <li>Hands-on Internet Navigation for First time users</li>
          </ul>
        </div>

        {/* Cultural and Sports */}
        <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-lg border border-orange-100">
          <div className="flex items-center gap-3 mb-4">
            <Award className="w-6 h-6 text-orange-600" />
            <h4 className="text-lg font-semibold text-aemet-navy">Cultural and Sports</h4>
          </div>
          <p className="text-gray-700">Sports meet conducted at Department Level on 30th and 31st October, 2025</p>
        </div>

        {/* Industrial Visit */}
        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-lg border border-cyan-100">
          <div className="flex items-center gap-3 mb-4">
            <Building className="w-6 h-6 text-cyan-600" />
            <h4 className="text-lg font-semibold text-aemet-navy">Industrial Visit</h4>
          </div>
          <p className="text-gray-700">JTech, Chennai on 17th October, 2025</p>
        </div>
      </div>
    );
  }
  
  // Naval Architecture specific activities
  if (departmentId === 'naval-architecture') {
    return (
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-aemet-navy mb-6">Department Activities</h3>
        
        {/* MoU */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Handshake className="w-6 h-6 text-aemet-blue" />
              <h4 className="text-lg font-semibold text-aemet-navy">MoU</h4>
            </div>
            <a 
              href="/documents/naval-architecture/MoU.pdf" 
              download
              className="inline-flex items-center px-4 py-2 bg-aemet-blue text-white rounded-lg hover:bg-aemet-navy transition-colors text-sm"
            >
              <FileText className="h-4 w-4 mr-2" />
              Download
            </a>
          </div>
        </div>

        {/* Conferences */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Presentation className="w-6 h-6 text-green-600" />
              <h4 className="text-lg font-semibold text-aemet-navy">Conferences</h4>
            </div>
            <a 
              href="/documents/naval-architecture/Conferences.pdf" 
              download
              className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
            >
              <FileText className="h-4 w-4 mr-2" />
              Download
            </a>
          </div>
        </div>

        {/* Seminars, Workshops, Guest Lectures */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-purple-600" />
              <h4 className="text-lg font-semibold text-aemet-navy">Seminars, Workshops, Guest Lectures</h4>
            </div>
            <a 
              href="/documents/naval-architecture/Seminars-Workshops-GuestLectures.pdf" 
              download
              className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm"
            >
              <FileText className="h-4 w-4 mr-2" />
              Download
            </a>
          </div>
        </div>

        {/* Extension Activity */}
        <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-lg border border-orange-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Activity className="w-6 h-6 text-orange-600" />
              <h4 className="text-lg font-semibold text-aemet-navy">Extension Activity</h4>
            </div>
            <a 
              href="/documents/naval-architecture/Extension-Activity.pdf" 
              download
              className="inline-flex items-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-sm"
            >
              <FileText className="h-4 w-4 mr-2" />
              Download
            </a>
          </div>
        </div>

        {/* Value Added Courses */}
        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-lg border border-cyan-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-cyan-600" />
              <h4 className="text-lg font-semibold text-aemet-navy">Value Added Courses</h4>
            </div>
            <a 
              href="/documents/naval-architecture/Value-Added-Courses.pdf" 
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
  
  // Marine Engineering specific activities - PDF downloads
  if (departmentId === 'marine-engineering') {
    return (
      <div className="space-y-8">
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <Calendar className="h-5 w-5 mr-2 text-aemet-blue" />
          Department Activities
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Department Activities & Conferences */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg border border-blue-100">
            <div className="flex flex-col items-center text-center">
              <div className="bg-gradient-to-r from-aemet-blue to-aemet-navy p-4 rounded-full mb-6">
                <FileText className="h-12 w-12 text-white" />
              </div>
              <h4 className="text-xl font-bold text-aemet-navy mb-3">Department Activities & Conferences</h4>
              <p className="text-gray-700 mb-6">
                Download the comprehensive document containing all department activities, conferences, workshops, seminars, MoUs, extension activities, and value-added courses.
              </p>
              <a 
                href="/documents/marine-engineering-activities-conferences.pdf" 
                download="Marine-Engineering-Activities-Conferences.pdf"
                className="inline-flex items-center px-6 py-3 bg-aemet-blue text-white rounded-lg hover:bg-aemet-navy transition-colors font-semibold shadow-lg hover:shadow-xl"
              >
                <FileText className="h-5 w-5 mr-2" />
                Download PDF
              </a>
            </div>
          </div>

          {/* Students Participation */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-lg border border-green-100">
            <div className="flex flex-col items-center text-center">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-4 rounded-full mb-6">
                <Users className="h-12 w-12 text-white" />
              </div>
              <h4 className="text-xl font-bold text-aemet-navy mb-3">Students Participation in Contests, Events & Innovation</h4>
              <p className="text-gray-700 mb-6">
                Download the document showcasing student achievements, participation in contests, events, and innovative projects.
              </p>
              <a 
                href="/documents/marine-engineering-students-participation.pdf" 
                download="Marine-Engineering-Students-Participation.pdf"
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold shadow-lg hover:shadow-xl"
              >
                <FileText className="h-5 w-5 mr-2" />
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Nautical Sciences specific activities
  if (departmentId === 'nautical-sciences') {
    const nauticalActivities = [
      {
        title: "MoU",
        description: "Memorandums of Understanding with leading maritime organizations and educational institutions",
        icon: Handshake,
        pdfLink: "/documents/nautical-sciences-mou.pdf"
      },
      {
        title: "Conferences",
        description: "Academic conferences, seminars, and workshops organized by the department",
        icon: Presentation,
        pdfLink: "/documents/nautical-sciences-conferences.pdf"
      },
      {
        title: "Extension Activity",
        description: "Community outreach and extension programs conducted by faculty and students",
        icon: Activity,
        pdfLink: "/documents/nautical-sciences-extension-activity.pdf"
      }
    ];

    return (
      <div>
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <Calendar className="h-5 w-5 mr-2 text-aemet-blue" />
          Department Activities
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {nauticalActivities.map((activity, index) => {
            const IconComponent = activity.icon;
            return (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-xl hover:border-aemet-blue transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-aemet-blue to-aemet-navy rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-bold text-aemet-navy text-xl mb-3">{activity.title}</h4>
                  <p className="text-gray-600 text-sm mb-6">{activity.description}</p>
                  <a 
                    href={activity.pdfLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-aemet-blue text-white rounded-lg hover:bg-aemet-navy transition-colors font-medium w-full justify-center"
                  >
                    <FileText className="h-5 w-5 mr-2" />
                    View Details
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  
  // Mining Engineering specific activities
  if (departmentId === 'mining-engineering') {
    const miningEvents = [
      { category: "National symposium", event: "Mines Monitoring and Safety", year: "2025" },
      { category: "Guest Lecture", event: "Application of Artificial Intelligence in Mining Industry", year: "2024" },
      { category: "Webinar", event: "Geospatial Analysis to Mineral Exploration", year: "2024" },
      { category: "Sports and Cultural", event: "Department level sports and cricket tournament", year: "2024" },
      { category: "Alumni Meet", event: "Alumni Meeting", year: "2024" },
      { category: "Alumni Guest Lecture", event: "Alumni Guest Lecture", year: "2024" },
      { category: "FDP", event: "Role of Mining Engineers in Mineral Exploration and Mining", year: "2024" },
      { category: "Symposium", event: "National level online technical mining quiz", year: "2024" },
      { category: "Sports and Cultural", event: "Department Cricket Tournament", year: "2023" },
      { category: "FDP", event: "Information Technology for Earth Science Community", year: "2023" },
      { category: "Commemorative Day", event: "World Wildlife Day", year: "2022" },
      { category: "National symposium", event: "Technical Quiz", year: "2022" },
      { category: "National symposium", event: "Underground Metal Mining Methods Quiz", year: "2022" },
      { category: "FDP", event: "Role of Engineers in Mineral Exploration & Mining", year: "2022" },
      { category: "National symposium", event: "Fundamentals of Modern Mining", year: "2021" },
      { category: "Webinar", event: "Modern Technological Applications in Mining and Mineral Exploration", year: "2021" },
      { category: "Webinar", event: "Internet of Things for Geoscientists, Mining and Petroleum Engineers", year: "2021" },
      { category: "Guest Lecture", event: "Build-up of Methane Concentration in a Controlled Recirculation", year: "2021" },
      { category: "National Conference", event: "Modern Technological Applications in Mining and Mineral Exploration", year: "2021" },
      { category: "Seminar", event: "Modern and Innovative Environmental Technology for Mining", year: "2020" },
    ];

    return (
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-aemet-navy mb-6">Department Activities</h3>
        
        {/* Events Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-aemet-blue to-aemet-navy text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Category</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Event Name</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold">Year</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {miningEvents.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 text-sm">
                      <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                        item.category.includes('symposium') || item.category.includes('Symposium') ? 'bg-blue-100 text-blue-800' :
                        item.category.includes('FDP') ? 'bg-purple-100 text-purple-800' :
                        item.category.includes('Webinar') ? 'bg-green-100 text-green-800' :
                        item.category.includes('Guest Lecture') || item.category.includes('Alumni') ? 'bg-amber-100 text-amber-800' :
                        item.category.includes('Sports') ? 'bg-orange-100 text-orange-800' :
                        item.category.includes('Conference') ? 'bg-indigo-100 text-indigo-800' :
                        item.category.includes('Seminar') ? 'bg-teal-100 text-teal-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {item.category}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">{item.event}</td>
                    <td className="px-4 py-3 text-sm text-center font-medium text-aemet-navy">{item.year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {/* Value Added Courses */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-aemet-blue" />
                <h4 className="text-lg font-semibold text-aemet-navy">Value Added Courses</h4>
              </div>
              <a 
                href="/documents/mining-value-added-courses.pdf" 
                download
                className="inline-flex items-center px-4 py-2 bg-aemet-blue text-white rounded-lg hover:bg-aemet-navy transition-colors text-sm"
              >
                <FileText className="h-4 w-4 mr-2" />
                Download
              </a>
            </div>
          </div>

          {/* Extension Activity */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Activity className="w-6 h-6 text-green-600" />
                <h4 className="text-lg font-semibold text-aemet-navy">Extension Activity</h4>
              </div>
              <a 
                href="/documents/mining-extension-activity.pdf" 
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

  // Petroleum Engineering specific activities
  if (departmentId === 'petroleum-engineering') {
    return (
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-aemet-navy mb-6">Department Activities</h3>
        
        {/* Value Added Courses */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-aemet-blue" />
              <h4 className="text-lg font-semibold text-aemet-navy">Value Added Courses</h4>
            </div>
            <a 
              href="/documents/petroleum-engineering/Value-Added-Courses.pdf" 
              download
              className="inline-flex items-center px-4 py-2 bg-aemet-blue text-white rounded-lg hover:bg-aemet-navy transition-colors text-sm"
            >
              <FileText className="h-4 w-4 mr-2" />
              Download
            </a>
          </div>
        </div>

        {/* Extension Activity */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Activity className="w-6 h-6 text-green-600" />
              <h4 className="text-lg font-semibold text-aemet-navy">Extension Activity</h4>
            </div>
            <a 
              href="/documents/petroleum-engineering/Extension-Activity.pdf" 
              download
              className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
            >
              <FileText className="h-4 w-4 mr-2" />
              Download
            </a>
          </div>
        </div>

        {/* Conferences */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Presentation className="w-6 h-6 text-purple-600" />
              <h4 className="text-lg font-semibold text-aemet-navy">Conferences</h4>
            </div>
            <a 
              href="/documents/petroleum-engineering/Conferences.pdf" 
              download
              className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm"
            >
              <FileText className="h-4 w-4 mr-2" />
              Download
            </a>
          </div>
        </div>

        {/* MoU */}
        <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-lg border border-orange-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Handshake className="w-6 h-6 text-orange-600" />
              <h4 className="text-lg font-semibold text-aemet-navy">MoU</h4>
            </div>
            <a 
              href="/documents/petroleum-engineering/MoU.pdf" 
              download
              className="inline-flex items-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-sm"
            >
              <FileText className="h-4 w-4 mr-2" />
              Download
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Mechanical Engineering specific activities
  if (departmentId === 'mechanical-engineering') {
    return (
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-aemet-navy mb-6">Department Activities</h3>
        
        {/* MoU */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Handshake className="w-6 h-6 text-aemet-blue" />
              <h4 className="text-lg font-semibold text-aemet-navy">MoU</h4>
            </div>
            <a 
              href="/documents/mechanical-engineering-MoU.pdf" 
              download
              className="inline-flex items-center px-4 py-2 bg-aemet-blue text-white rounded-lg hover:bg-aemet-navy transition-colors text-sm"
            >
              <FileText className="h-4 w-4 mr-2" />
              Download
            </a>
          </div>
        </div>

        {/* Conferences */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Presentation className="w-6 h-6 text-green-600" />
              <h4 className="text-lg font-semibold text-aemet-navy">Conferences</h4>
            </div>
            <a 
              href="/documents/mechanical-engineering-Conferences.pdf" 
              download
              className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
            >
              <FileText className="h-4 w-4 mr-2" />
              Download
            </a>
          </div>
        </div>

        {/* Extension Activity */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Activity className="w-6 h-6 text-purple-600" />
              <h4 className="text-lg font-semibold text-aemet-navy">Extension Activity</h4>
            </div>
            <a 
              href="/documents/mechanical-engineering-Extension-Activity.pdf" 
              download
              className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm"
            >
              <FileText className="h-4 w-4 mr-2" />
              Download
            </a>
          </div>
        </div>

        {/* Value Added Courses */}
        <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-lg border border-orange-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-orange-600" />
              <h4 className="text-lg font-semibold text-aemet-navy">Value Added Courses</h4>
            </div>
            <a 
              href="/documents/mechanical-engineering-Value-Added-Courses.pdf" 
              download
              className="inline-flex items-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-sm"
            >
              <FileText className="h-4 w-4 mr-2" />
              Download
            </a>
          </div>
        </div>

        {/* Career Guidance */}
        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-lg border border-cyan-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-cyan-600" />
              <h4 className="text-lg font-semibold text-aemet-navy">Career Guidance</h4>
            </div>
            <a 
              href="/documents/mechanical-engineering-Career-Guidance.pdf" 
              download
              className="inline-flex items-center px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors text-sm"
            >
              <FileText className="h-4 w-4 mr-2" />
              Download
            </a>
          </div>
        </div>

        {/* Professional Activities */}
        <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-lg border border-pink-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Award className="w-6 h-6 text-pink-600" />
              <h4 className="text-lg font-semibold text-aemet-navy">Professional Activities</h4>
            </div>
            <a 
              href="/documents/mechanical-engineering-Professional-Activities.pdf" 
              download
              className="inline-flex items-center px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors text-sm"
            >
              <FileText className="h-4 w-4 mr-2" />
              Download
            </a>
          </div>
        </div>

        {/* Seminar, Guest Lectures, Workshops */}
        <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-lg border border-yellow-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-yellow-600" />
              <h4 className="text-lg font-semibold text-aemet-navy">Seminar, Guest Lectures, Workshops</h4>
            </div>
            <a 
              href="/documents/mechanical-engineering-Seminar-Guest-Lectures-Workshops.pdf" 
              download
              className="inline-flex items-center px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors text-sm"
            >
              <FileText className="h-4 w-4 mr-2" />
              Download
            </a>
          </div>
        </div>

        {/* Conference and Symposium organized */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-lg border border-indigo-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Calendar className="w-6 h-6 text-indigo-600" />
              <h4 className="text-lg font-semibold text-aemet-navy">Conference and Symposium organized</h4>
            </div>
            <a 
              href="/documents/mechanical-engineering-Conference-Symposium-organized.pdf" 
              download
              className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm"
            >
              <FileText className="h-4 w-4 mr-2" />
              Download
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Food Processing specific activities
  if (departmentId === 'food-processing') {
    const extensionActivities = [
      { sno: 1, name: "Self Development and Empowerment of women", agency: "Food Processing Technology, AMET - Bright Educational Trust", scheme: "Community", year: "2019-20" },
      { sno: 2, name: "Skill development for dairy products for differently abled students", agency: "Food Processing Technology, AMET - Bright Educational Trust", scheme: "Extension", year: "2019-20" },
      { sno: 3, name: "Public health awareness Program for vitamin A deficiency control", agency: "Food Processing Technology, AMET - Christ Faith Home for Children", scheme: "Community", year: "2019-20" },
      { sno: 4, name: "Awareness on Hygienic Practice in dairy farming", agency: "Food Processing Technology, AMET - Thulir Welfare Association", scheme: "Extension", year: "2019-20" },
      { sno: 5, name: "Food Habits and Nutritional requirements for working mothers", agency: "Food Processing Technology, AMET - Bright Educational Trust", scheme: "Community", year: "2019-20" },
      { sno: 6, name: "Awareness on selenium vitamin E deficiency among cattle for enhanced productivity", agency: "Food Processing Technology, AMET - Thulir Welfare Association", scheme: "Community", year: "2019-20" },
      { sno: 7, name: "Health awareness to Overcome Xerophthalmia Among Young Aged People", agency: "Food Processing Technology, AMET", scheme: "Extension", year: "2019-20" },
      { sno: 8, name: "Healthy Food Habits", agency: "Food Processing Technology, AMET - St. Joseph's Higher Secondary School", scheme: "Extension", year: "2019-20" },
      { sno: 9, name: "Consumer Awareness on Packed Foods Products", agency: "Food Processing Technology, AMET - Karkakasadara Foundation", scheme: "Extension", year: "2019-20" },
      { sno: 10, name: "Awareness on Junk Foods", agency: "Food Processing Technology, AMET - Christ Faith Home for Children", scheme: "Extension", year: "2022-2023" },
      { sno: 11, name: "The Benefit of Millet on Day to Day Life", agency: "Food Processing Technology, AMET", scheme: "Extension", year: "2022-2023" },
      { sno: 12, name: "Nourish the Future: Nutrition Kit Distribution Programme", agency: "Food Processing Technology, AMET - Bethel Faith Christian Church Assembly", scheme: "Community", year: "2023-2024" },
      { sno: 13, name: "Healthy Plates, Healthy Lives: Nutrition Essentials for Women", agency: "Food Processing Technology, AMET - Bethel Faith Christian Church Assembly", scheme: "Community", year: "2023-2024" },
      { sno: 14, name: "Innovate for Safe Plates: A School Outreach Program on Food Adulteration Awareness", agency: "Food Processing Technology, AMET - Sankara Vidayalaya School", scheme: "Extension", year: "2023-2024" },
      { sno: 15, name: "Food for Thought: Promoting Nutrition and Wellness in Daily Life", agency: "Food Processing Technology, AMET - Sankara Vidayalaya School", scheme: "Extension", year: "2024-2025" },
      { sno: 16, name: "NutriSmile: Spreading Health and Happiness through Food", agency: "Food Processing Technology, AMET - Sankara Vidayalaya School", scheme: "Extension", year: "2025-2026" },
      { sno: 17, name: "World Water Day", agency: "Food Processing Technology, AMET - in association with Mahathi Biotech, Chennai", scheme: "Extension", year: "-" },
      { sno: 18, name: "National Pralines Day", agency: "Food Processing Technology, AMET", scheme: "Extension", year: "-" },
      { sno: 19, name: "Hand in Hand for Better Foods and a Better Future", agency: "Food Processing Technology, AMET - in association with Chetti Masala Food And Spices Private Limited, Chennai", scheme: "Extension", year: "-" }
    ];

    return (
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <Activity className="h-5 w-5 mr-2 text-orange-600" />
          Department Activities
        </h3>
        
        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setFoodActiveTab('extension')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              foodActiveTab === 'extension'
                ? 'bg-orange-600 text-white'
                : 'bg-orange-100 text-orange-700 hover:bg-orange-200'
            }`}
          >
            <Activity className="h-4 w-4 inline mr-2" />
            Extension Activity
          </button>
          <button
            onClick={() => setFoodActiveTab('mou')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              foodActiveTab === 'mou'
                ? 'bg-orange-600 text-white'
                : 'bg-orange-100 text-orange-700 hover:bg-orange-200'
            }`}
          >
            <Handshake className="h-4 w-4 inline mr-2" />
            MoU
          </button>
          <button
            onClick={() => setFoodActiveTab('conferences')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              foodActiveTab === 'conferences'
                ? 'bg-orange-600 text-white'
                : 'bg-orange-100 text-orange-700 hover:bg-orange-200'
            }`}
          >
            <Presentation className="h-4 w-4 inline mr-2" />
            Conferences
          </button>
          <button
            onClick={() => setFoodActiveTab('courses')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              foodActiveTab === 'courses'
                ? 'bg-orange-600 text-white'
                : 'bg-orange-100 text-orange-700 hover:bg-orange-200'
            }`}
          >
            <GraduationCap className="h-4 w-4 inline mr-2" />
            Value Added Courses
          </button>
          <button
            onClick={() => setFoodActiveTab('events')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              foodActiveTab === 'events'
                ? 'bg-orange-600 text-white'
                : 'bg-orange-100 text-orange-700 hover:bg-orange-200'
            }`}
          >
            <Calendar className="h-4 w-4 inline mr-2" />
            2025 Events
          </button>
          <button
            onClick={() => setFoodActiveTab('career')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              foodActiveTab === 'career'
                ? 'bg-orange-600 text-white'
                : 'bg-orange-100 text-orange-700 hover:bg-orange-200'
            }`}
          >
            <Award className="h-4 w-4 inline mr-2" />
            Career Prospects
          </button>
        </div>

        {/* Tab Content */}
        {foodActiveTab === 'extension' && (
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white p-4">
              <h4 className="text-lg font-semibold flex items-center">
                <Activity className="h-5 w-5 mr-2" />
                Extension Activities
              </h4>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-orange-50">
                    <th className="border-b border-orange-200 px-4 py-3 text-left font-semibold text-aemet-navy w-16">S.No</th>
                    <th className="border-b border-orange-200 px-4 py-3 text-left font-semibold text-aemet-navy">Name of the Activity</th>
                    <th className="border-b border-orange-200 px-4 py-3 text-left font-semibold text-aemet-navy">Organising Unit/Agency</th>
                    <th className="border-b border-orange-200 px-4 py-3 text-left font-semibold text-aemet-navy w-28">Scheme</th>
                    <th className="border-b border-orange-200 px-4 py-3 text-left font-semibold text-aemet-navy w-28">Year</th>
                  </tr>
                </thead>
                <tbody>
                  {extensionActivities.map((activity, index) => (
                    <tr key={index} className={index % 2 === 0 ? "hover:bg-orange-50/50" : "bg-orange-50/30 hover:bg-orange-50/50"}>
                      <td className="border-b border-gray-100 px-4 py-3 text-gray-800">{activity.sno}</td>
                      <td className="border-b border-gray-100 px-4 py-3 font-medium text-aemet-navy">{activity.name}</td>
                      <td className="border-b border-gray-100 px-4 py-3 text-gray-700 text-sm">{activity.agency}</td>
                      <td className="border-b border-gray-100 px-4 py-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          activity.scheme === 'Community' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-blue-100 text-blue-700'
                        }`}>
                          {activity.scheme}
                        </span>
                      </td>
                      <td className="border-b border-gray-100 px-4 py-3 text-gray-800">{activity.year}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {foodActiveTab === 'mou' && (
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Handshake className="w-6 h-6 text-aemet-blue" />
                <h4 className="text-lg font-semibold text-aemet-navy">MoU</h4>
              </div>
              <a 
                href="/documents/food-processing-mou.pdf" 
                download
                className="inline-flex items-center px-4 py-2 bg-aemet-blue text-white rounded-lg hover:bg-aemet-navy transition-colors text-sm"
              >
                <FileText className="h-4 w-4 mr-2" />
                Download
              </a>
            </div>
          </div>
        )}

        {foodActiveTab === 'conferences' && (
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-8 border-2 border-green-200">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                  <Presentation className="w-10 h-10 text-white" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h4 className="text-2xl font-bold text-aemet-navy mb-2">
                  Conferences
                </h4>
                <p className="text-gray-700">
                  Comprehensive list of conferences, seminars, and workshops organized and attended by the Department of Food Processing Technology.
                </p>
              </div>
              <div className="flex-shrink-0">
                <a
                  href="/downloads/food-processing/CONFERENCE.pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium shadow-sm"
                >
                  <FileText className="w-5 h-5" />
                  Download Document
                </a>
              </div>
            </div>
          </div>
        )}

        {foodActiveTab === 'courses' && (
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-lg border border-orange-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-orange-600" />
                <h4 className="text-lg font-semibold text-aemet-navy">Value Added Courses</h4>
              </div>
              <a 
                href="/documents/food-processing-value-added-courses.pdf" 
                download
                className="inline-flex items-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-sm"
              >
                <FileText className="h-4 w-4 mr-2" />
                Download
              </a>
            </div>
          </div>
        )}

        {foodActiveTab === 'events' && (
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white p-4">
              <h4 className="text-lg font-semibold flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                2025 Events
              </h4>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-orange-50">
                    <th className="border-b border-orange-200 px-4 py-3 text-left font-semibold text-aemet-navy w-16">S.No</th>
                    <th className="border-b border-orange-200 px-4 py-3 text-left font-semibold text-aemet-navy">Event</th>
                    <th className="border-b border-orange-200 px-4 py-3 text-left font-semibold text-aemet-navy w-36">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { sno: 1, event: 'Guest lecture on "Career opportunities in Food Industry"', date: "27-03-2025" },
                    { sno: 2, event: 'Community service program on "Awareness on Nutritional value of pulses"', date: "10-02-2025" },
                    { sno: 3, event: 'Alumni Guest Lecture – "Food & Public Health Nutrition"', date: "28-03-2025" },
                    { sno: 4, event: 'Extension activity on blue campus activity – World Water Day', date: "22-03-2025" },
                    { sno: 5, event: 'Extension activity – "National Pralines Day"', date: "24-06-2025" },
                    { sno: 6, event: 'Professional Development and Administrative Training Workshop on "Stress Management and Work Life balance for staff"', date: "21-05-2025" },
                    { sno: 7, event: 'Alumni Guest Lecture – "AI in food safety and food quality analysis"', date: "25-06-2025" },
                    { sno: 8, event: 'IPR Guest Lecture on "The Scope of Intellectual Property Protection in the food Industry"', date: "28-06-2025" },
                    { sno: 9, event: 'Extension Activity on "Hand in Hand for Better Foods and a Better Future"', date: "16-10-2025" },
                    { sno: 10, event: 'Workshop on Innovate, Launch, Succeed: A Practical Workshop on Entrepreneurship', date: "20-03-2025" },
                    { sno: 11, event: 'Guest lecture on From Ideas to Assets: Understanding IPR in the Academic World', date: "26-04-2025" },
                    { sno: 12, event: 'Workshop on Nutraceuticals and Functional Foods: From Concept to Commercialization', date: "14-11-2025" },
                    { sno: 13, event: 'Extension on Food for Thought: Promoting Nutrition and Wellness in Daily Life', date: "20-06-2025" },
                    { sno: 14, event: 'Community service on NutriSmile: Spreading Health and Happiness through Food', date: "22-10-2025" }
                  ].map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? "hover:bg-orange-50/50" : "bg-orange-50/30 hover:bg-orange-50/50"}>
                      <td className="border-b border-gray-100 px-4 py-3 text-gray-800">{item.sno}</td>
                      <td className="border-b border-gray-100 px-4 py-3 font-medium text-aemet-navy">{item.event}</td>
                      <td className="border-b border-gray-100 px-4 py-3 text-gray-800">{item.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {foodActiveTab === 'career' && (
          <div className="space-y-6">
            {/* Industry Linked Programme */}
            <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-lg p-6">
              <h4 className="text-xl font-bold mb-4 flex items-center">
                <Award className="h-6 w-6 mr-2" />
                Industry Linked Programme
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Coca-Cola", "Parle Agro Pvt", "Aachi", "Hatsun", "ITC", "Waycool Foods", "Veeba", "Mega Foods", "Earthy Origins"].map((company, index) => (
                  <span key={index} className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                    {company}
                  </span>
                ))}
              </div>
            </div>

            {/* Job Opportunities */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
              <h4 className="text-lg font-bold text-aemet-navy mb-4">Job Opportunities</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <h5 className="font-semibold text-green-700 mb-3">In Government Sector</h5>
                  <div className="flex flex-wrap gap-2">
                    {["FCI", "FSSAI", "BIS", "etc."].map((org, index) => (
                      <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        {org}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h5 className="font-semibold text-blue-700 mb-3">In Private Sector</h5>
                  <div className="flex flex-wrap gap-2">
                    {["Nestle", "Pepsi", "Britannia", "ITC", "MTR", "Aachi", "Cavin Kare", "Vegroute", "Relish", "Parle Products Pvt Ltd", "Licious"].map((company, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {company}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Salient Features */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
              <h4 className="text-lg font-bold text-aemet-navy mb-4">Salient Features</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Industry Sponsored Course (Merit Based)",
                  "Signed MoU with Major Food Industries",
                  "Employable Certificate Courses",
                  "Specialized Infrastructure for Pre-Placement Training",
                  "Competitive Exam Study Center",
                  "Industry-Academic Collaboration – Student Exchange Programme"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start p-3 bg-orange-50 rounded-lg">
                    <div className="h-2 w-2 bg-orange-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Placement */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg p-6">
              <h4 className="text-xl font-bold mb-4">Placement</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <div className="text-4xl font-bold mb-1">100%</div>
                  <div className="text-sm">Placement</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold mb-1">Internship</div>
                  <div className="text-sm">with Stipend</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Default activities for other departments
  const activities = [
    {
      type: "Workshop",
      title: "Recent Advances in Engineering Technology",
      date: "March 2024",
      participants: "120+ Students",
      icon: BookOpen
    },
    {
      type: "Seminar",
      title: "Industry-Academia Interaction",
      date: "February 2024",
      participants: "80+ Participants",
      icon: Users
    },
    {
      type: "Competition",
      title: "Technical Project Competition",
      date: "January 2024",
      participants: "200+ Students",
      icon: Award
    },
    {
      type: "Conference",
      title: "International Conference on Engineering",
      date: "December 2023",
      participants: "300+ Delegates",
      icon: Calendar
    }
  ];

  return (
    <div>
      <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
        <Calendar className="h-5 w-5 mr-2 text-aemet-blue" />
        Department Activities
      </h3>
      
      <div className="space-y-6">
        {activities.map((activity, index) => {
          const IconComponent = activity.icon;
          return (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-aemet-blue rounded-lg flex items-center justify-center">
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-block bg-aemet-lightGray text-aemet-navy px-3 py-1 rounded-full text-sm font-medium">
                      {activity.type}
                    </span>
                    <span className="text-gray-500 text-sm">{activity.date}</span>
                  </div>
                  <h4 className="font-semibold text-aemet-navy text-lg mb-2">{activity.title}</h4>
                  <p className="text-gray-600 text-sm">{activity.participants}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-6 p-4 bg-gradient-to-r from-aemet-lightGray to-blue-50 rounded-lg">
        <p className="text-sm text-gray-700">
          The department regularly organizes workshops, seminars, and conferences to enhance student learning 
          and provide exposure to latest industry trends and research developments.
        </p>
      </div>
    </div>
  );
};

export default ActivitiesSection;