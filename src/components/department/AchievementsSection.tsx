import React from 'react';
import { Trophy, Star, Award, Medal, DollarSign, GraduationCap, FileText, FileDown, Users } from 'lucide-react';

interface AchievementsSectionProps {
  departmentId?: string;
}

const AchievementsSection: React.FC<AchievementsSectionProps> = ({ departmentId }) => {
  // AMET Business School specific achievements
  if (departmentId === 'amet-business-school') {
    const achievementItems = [
      {
        title: 'Faculty Awards',
        description: 'Awards and recognitions received by faculty members',
        file: '/documents/abs/faculty_awards.docx',
        color: 'from-amber-500 to-yellow-600',
        bgColor: 'from-amber-50 to-yellow-50',
        borderColor: 'border-amber-200',
        buttonColor: 'bg-amber-600 hover:bg-amber-700'
      },
      {
        title: 'Faculty Membership Details',
        description: 'Professional memberships and affiliations of faculty',
        file: '/documents/abs/faculty_membership_details.xlsx',
        color: 'from-blue-500 to-indigo-600',
        bgColor: 'from-blue-50 to-indigo-50',
        borderColor: 'border-blue-200',
        buttonColor: 'bg-blue-600 hover:bg-blue-700'
      },
      {
        title: 'Faculty Achievements',
        description: 'Comprehensive list of faculty achievements and accomplishments',
        file: '/documents/abs/faculty_achievements.docx',
        color: 'from-green-500 to-emerald-600',
        bgColor: 'from-green-50 to-emerald-50',
        borderColor: 'border-green-200',
        buttonColor: 'bg-green-600 hover:bg-green-700'
      }
    ];

    return (
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <Trophy className="h-5 w-5 mr-2 text-aemet-blue" />
          Faculty Achievements & Awards
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievementItems.map((item, index) => (
            <div 
              key={index} 
              className={`bg-gradient-to-br ${item.bgColor} rounded-lg p-6 border ${item.borderColor} hover:shadow-lg transition-all duration-300`}
            >
              <div className="flex flex-col h-full">
                <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center mb-4`}>
                  <Award className="h-7 w-7 text-white" />
                </div>
                <h4 className="text-lg font-bold text-aemet-navy mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600 mb-4 flex-grow">{item.description}</p>
                
                <a 
                  href={item.file} 
                  download 
                  className={`inline-flex items-center justify-center gap-2 ${item.buttonColor} text-white font-medium px-4 py-2 rounded-lg transition-colors duration-200 text-sm w-full`}
                >
                  <FileDown className="h-4 w-4" />
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Commerce Department specific achievements
  if (departmentId === 'commerce-department') {
    return (
      <div>
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <Trophy className="h-5 w-5 mr-2 text-aemet-blue" />
          Department Achievements
        </h3>
        
        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl border-2 border-amber-200 overflow-hidden shadow-lg">
          <div className="bg-gradient-to-r from-amber-500 to-yellow-600 p-6">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-3 rounded-full">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">Student Achievement in Sports</h4>
                <p className="text-amber-100">Department of Commerce</p>
              </div>
            </div>
          </div>
          
          <div className="p-8">
            <p className="text-gray-700 mb-6 text-center max-w-2xl mx-auto">
              Download the comprehensive reports of student achievements in sports, 
              including inter-university competitions, state-level events, and 
              national championships participated by Commerce department students.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a 
                href="/documents/commerce/student-achievements-sports.docx" 
                download="Commerce-Student-Sports-Achievements-1.docx"
                className="inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-white rounded-lg hover:from-amber-600 hover:to-yellow-700 transition-all font-semibold shadow-lg hover:shadow-xl"
              >
                <FileDown className="h-5 w-5 mr-2" />
                Sports Achievements - Part 1
              </a>
              
              <a 
                href="/documents/commerce/student-achievements-sports-2.docx" 
                download="Commerce-Student-Sports-Achievements-2.docx"
                className="inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition-all font-semibold shadow-lg hover:shadow-xl"
              >
                <FileDown className="h-5 w-5 mr-2" />
                Sports Achievements - Part 2
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Naval Architecture specific achievements
  if (departmentId === 'naval-architecture') {
    return (
      <div>
        <h3 className="text-xl font-bold text-aemet-navy mb-6">Department Achievements</h3>
        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-lg border-2 border-amber-200">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center">
                <Trophy className="w-10 h-10 text-white" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h4 className="text-2xl font-bold text-aemet-navy mb-2">
                Department Achievements
              </h4>
              <p className="text-gray-700">
                View our comprehensive list of achievements, awards, and recognitions
              </p>
            </div>
            <div className="flex-shrink-0">
              <a
                href="/documents/naval-architecture/Achievements.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-medium shadow-sm"
              >
                <FileDown className="w-5 h-5" />
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Computer Science specific achievements
  if (departmentId === 'computer-science') {
    return (
      <div>
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <Trophy className="h-5 w-5 mr-2 text-aemet-blue" />
          Department Achievements
        </h3>
        
        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg p-8 border-2 border-amber-200">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center">
                <Award className="w-10 h-10 text-white" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h4 className="text-2xl font-bold text-aemet-navy mb-2">
                Faculty Awards & Achievements
              </h4>
              <p className="text-gray-700">
                Download the complete list of awards and achievements by faculty members including funded projects, research publications, patents, and book chapters.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a
                href="/documents/computer-science/Achievements-faculty_cse.docx"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-medium shadow-sm"
              >
                <FileDown className="w-5 h-5" />
                Download Achievements
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Mining Engineering specific achievements
  if (departmentId === 'mining-engineering') {
    return (
      <div>
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <Trophy className="h-5 w-5 mr-2 text-aemet-blue" />
          Department Achievements
        </h3>
        
        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg p-8 border-2 border-amber-200">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center">
                <Award className="w-10 h-10 text-white" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h4 className="text-2xl font-bold text-aemet-navy mb-2">
                Awards & Recognitions
              </h4>
              <p className="text-gray-700">
                Download the complete list of awards and recognitions received by our faculty and students in the Mining Engineering department.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a
                href="/documents/mining-engineering/Awards.docx"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-medium shadow-sm"
              >
                <FileDown className="w-5 h-5" />
                Download Awards
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Marine Engineering specific achievements
  if (departmentId === 'marine-engineering') {
    return (
      <div>
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <Trophy className="h-5 w-5 mr-2 text-aemet-blue" />
          Department Achievements
        </h3>
        
        {/* Student Scholarship Achievements */}
        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-lg border border-amber-200 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Award className="h-6 w-6 text-amber-600" />
            <h4 className="text-xl font-semibold text-aemet-navy">International Scholarships</h4>
          </div>
          <p className="text-gray-700 mb-6">
            Our students have been recognized by the International Association of Maritime Universities (IAMU) 
            with prestigious scholarships for outstanding academic performance and extracurricular excellence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {/* Achievement 1 */}
            <div className="bg-white rounded-lg p-5 border border-amber-200 shadow-sm">
              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-amber-600" />
                </div>
                <div className="flex-1">
                  <h5 className="font-semibold text-aemet-navy mb-1">Soumya Ranjan Rout</h5>
                  <p className="text-sm text-gray-600 mb-2">Roll No: 3087B | Batch: B.E (M.E) - 19</p>
                  <div className="flex items-center space-x-2 mb-2">
                    <DollarSign className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-semibold text-green-700">$3,500 USD Scholarship</span>
                  </div>
                  <div className="bg-blue-50 px-3 py-1.5 rounded text-xs text-blue-800 inline-block">
                    Academic Year: 2022-23
                  </div>
                </div>
              </div>
            </div>

            {/* Achievement 2 */}
            <div className="bg-white rounded-lg p-5 border border-amber-200 shadow-sm">
              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-amber-600" />
                </div>
                <div className="flex-1">
                  <h5 className="font-semibold text-aemet-navy mb-1">K. Keerthivasan</h5>
                  <p className="text-sm text-gray-600 mb-2">Roll No: 3150B | Batch: B.E (M.E) - 20</p>
                  <div className="flex items-center space-x-2 mb-2">
                    <DollarSign className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-semibold text-green-700">$3,500 USD Scholarship</span>
                  </div>
                  <div className="bg-blue-50 px-3 py-1.5 rounded text-xs text-blue-800 inline-block">
                    Academic Year: 2023-24
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 border border-amber-200">
            <p className="text-sm text-gray-700 mb-3">
              <strong>About IAMU Scholarships:</strong> The International Association of Maritime Universities 
              recognizes exceptional students who demonstrate outstanding academic achievements, leadership skills, 
              and active participation in extracurricular activities.
            </p>
            <a 
              href="/documents/marine-engineering-achievements.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors text-sm"
            >
              <FileText className="h-4 w-4 mr-2" />
              View Achievement Details
            </a>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-5 rounded-lg text-center">
            <Trophy className="h-8 w-8 mx-auto mb-2 opacity-90" />
            <div className="text-2xl font-bold mb-1">2</div>
            <div className="text-sm opacity-90">IAMU Scholars</div>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-5 rounded-lg text-center">
            <DollarSign className="h-8 w-8 mx-auto mb-2 opacity-90" />
            <div className="text-2xl font-bold mb-1">$7,000</div>
            <div className="text-sm opacity-90">Total Scholarships</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-5 rounded-lg text-center">
            <Star className="h-8 w-8 mx-auto mb-2 opacity-90" />
            <div className="text-2xl font-bold mb-1">International</div>
            <div className="text-sm opacity-90">Recognition</div>
          </div>
        </div>
      </div>
    );
  }
  
  // Physics Department achievements
  if (departmentId === 'physics') {
    return (
      <div>
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <Trophy className="h-5 w-5 mr-2 text-aemet-blue" />
          Awards and Recognition
        </h3>
        
        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg p-8 border-2 border-amber-200">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center">
                <Trophy className="w-10 h-10 text-white" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h4 className="text-2xl font-bold text-aemet-navy mb-2">
                Awards and Recognition (2021-2025)
              </h4>
              <p className="text-gray-700">
                Explore the comprehensive list of awards, recognitions, and achievements of the Department of Physics faculty and students.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a
                href="/documents/physics/Awards_and_Recognition_2021-2025.docx"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-medium shadow-sm"
              >
                <FileDown className="w-5 h-5" />
                Download Document
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Nautical Sciences specific achievements
  if (departmentId === 'nautical-sciences') {
    const achievementsData = [
      { sno: 1, name: "Abhay Krishna", prize: "1st Prize", event: "Fashion Walk", venue: "Coast Guard Fitness Festival 2025 (VIT Chennai)" },
      { sno: 2, name: "Anjalika", prize: "", event: "", venue: "" },
      { sno: 3, name: "Sampriti", prize: "", event: "", venue: "" },
      { sno: 4, name: "Kshitij Malhotra", prize: "", event: "", venue: "" },
      { sno: 5, name: "Yujyait", prize: "", event: "", venue: "" },
      { sno: 6, name: "Saniya James", prize: "", event: "", venue: "" },
      { sno: 7, name: "Taniya", prize: "", event: "", venue: "" },
      { sno: 8, name: "Shikhar Mukherjee", prize: "2nd Prize", event: "Nautical Quiz", venue: "Sarvesh Navgati 2025 (IMU Chennai)" },
      { sno: 9, name: "Jothika S", prize: "", event: "", venue: "" },
      { sno: 10, name: "Elina Batra", prize: "2nd Prize", event: "Dance Competition", venue: "Sarvesh Navgati 2025" },
      { sno: 11, name: "Garima Dobriyal", prize: "", event: "", venue: "" },
      { sno: 12, name: "Kharanshu Arora", prize: "2nd Prize", event: "Paper Presentation", venue: "Sarvesh Navgati 2025" },
      { sno: 13, name: "Sakshi Swarupa", prize: "", event: "", venue: "" },
      { sno: 14, name: "Agilesh", prize: "", event: "", venue: "" },
      { sno: 15, name: "Sukhman Singh", prize: "1st Prize", event: "Coast Guard Fitness Festival", venue: "VIT Chennai (15.02.2025)" },
      { sno: 16, name: "Apurv Bhadana", prize: "2nd Prize", event: "", venue: "" },
      { sno: 17, name: "Bikram Singh", prize: "3rd Prize", event: "", venue: "" },
      { sno: 18, name: "Abhiram Krishnan", prize: "PM Appreciation", event: "NCC RDC Camp 2025", venue: "27th Dec 2024 - 30th Jan 2025" },
      { sno: 19, name: "Aniruddha Parag Lendhe", prize: "1st Prize", event: "Acoustic Band", venue: "Naughtica 5.0, Pune" },
      { sno: 20, name: "Daksh Sharma", prize: "", event: "", venue: "" },
      { sno: 21, name: "Vasu Chauhan", prize: "", event: "", venue: "" },
      { sno: 22, name: "Sahil Rexalin", prize: "", event: "", venue: "" },
      { sno: 23, name: "Ansh Sriram", prize: "2nd Prize", event: "Nautical Quiz", venue: "Naughtica 5.0" },
      { sno: 24, name: "Elakkuvan K", prize: "1st Prize", event: "Seamanship Skills", venue: "Naughtica 5.0" },
      { sno: 25, name: "Jothika S", prize: "3rd Prize", event: "IIM Innovation Award", venue: "01.10.2024" },
      { sno: 26, name: "P.S.Yogeshraj", prize: "", event: "", venue: "" },
      { sno: 27, name: "Sakshi Swarupa", prize: "", event: "", venue: "" },
      { sno: 28, name: "Vedika Desai", prize: "", event: "", venue: "" },
      { sno: 29, name: "Kharanshu Arora", prize: "1st Prize", event: "TIM Yuva Tarang", venue: "01.10.2024" },
      { sno: 30, name: "Saniya James", prize: "", event: "", venue: "" },
      { sno: 31, name: "Aditya L Samaga", prize: "", event: "", venue: "" },
      { sno: 32, name: "Kisher Kumar", prize: "", event: "", venue: "" },
      { sno: 33, name: "Kharanshu Arora", prize: "1st Prize", event: "Maritime Quiz, Art, Fashion Show, Debate, Short Film", venue: "Navgati 2024" },
      { sno: 34, name: "Sakshi Swarupa", prize: "", event: "", venue: "" },
      { sno: 35, name: "Joshuan Periera", prize: "2nd Prize", event: "Mr & Ms Navgati", venue: "Navgati 2024 (IMU Chennai)" },
      { sno: 36, name: "Tushar Saini", prize: "2nd Prize", event: "Feel the Beat, ADZAP", venue: "" },
      { sno: 37, name: "Chitransh Gaur", prize: "", event: "", venue: "" },
      { sno: 38, name: "Kathirvel", prize: "", event: "", venue: "" },
      { sno: 39, name: "Avinash Singh", prize: "", event: "", venue: "" },
      { sno: 40, name: "Ambika Ranaut", prize: "", event: "", venue: "" },
      { sno: 41, name: "Senati", prize: "", event: "", venue: "" },
      { sno: 42, name: "Cavin", prize: "", event: "", venue: "" },
    ];

    const navgatiEvents = [
      { event: "Maritime Quiz", position: "First Position" },
      { event: "Debate", position: "First Position" },
      { event: "Fashion Show", position: "First Position" },
      { event: "Poster Making", position: "First and Runner-up Positions" },
      { event: "Feel The Beat", position: "Runner-up Position" },
      { event: "Mr & Ms Navgati", position: "Runner-up Position" },
      { event: "Short Film", position: "First Position" },
      { event: "Adzap", position: "Runner-up Position" },
    ];

    return (
      <div>
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <Trophy className="h-5 w-5 mr-2 text-aemet-blue" />
          Students' Achievements in Co-curricular and Cultural Events
        </h3>
        
        {/* Introduction */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200 mb-8">
          <p className="text-gray-700 leading-relaxed">
            The students of our university have consistently demonstrated exceptional performance in inter-collegiate, national, and maritime-level competitions, securing numerous prizes and accolades that reflect their talent, teamwork, and leadership.
          </p>
        </div>

        {/* Highlights Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {/* IIM Innovation Award */}
          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-5 border border-amber-200">
            <div className="flex items-center gap-2 mb-3">
              <div className="bg-amber-500 p-2 rounded-full">
                <Award className="h-4 w-4 text-white" />
              </div>
              <h5 className="font-bold text-aemet-navy">IIM Innovation Award</h5>
            </div>
            <p className="text-sm text-gray-600">3rd Prize showcasing creativity and problem-solving abilities</p>
          </div>

          {/* TIM Yuva Tarang */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-5 border border-purple-200">
            <div className="flex items-center gap-2 mb-3">
              <div className="bg-purple-500 p-2 rounded-full">
                <Star className="h-4 w-4 text-white" />
              </div>
              <h5 className="font-bold text-aemet-navy">TIM Yuva Tarang</h5>
            </div>
            <p className="text-sm text-gray-600">Top positions in cultural competitions highlighting artistic talent</p>
          </div>

          {/* Naughtica 5.0 */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-5 border border-blue-200">
            <div className="flex items-center gap-2 mb-3">
              <div className="bg-blue-500 p-2 rounded-full">
                <Trophy className="h-4 w-4 text-white" />
              </div>
              <h5 className="font-bold text-aemet-navy">Naughtica 5.0, Pune</h5>
            </div>
            <p className="text-sm text-gray-600">1st Prize Acoustic Band, 2nd Prize Nautical Quiz, 1st Prize Seamanship Skills</p>
          </div>

          {/* IMU Navgati */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-5 border border-green-200">
            <div className="flex items-center gap-2 mb-3">
              <div className="bg-green-500 p-2 rounded-full">
                <Medal className="h-4 w-4 text-white" />
              </div>
              <h5 className="font-bold text-aemet-navy">IMU Navgati Events</h5>
            </div>
            <p className="text-sm text-gray-600">1st Place in Maritime Quiz, Debate, Fashion Show, Art, and Short Film</p>
          </div>

          {/* NCC RDC Camp */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-5 border border-red-200">
            <div className="flex items-center gap-2 mb-3">
              <div className="bg-red-500 p-2 rounded-full">
                <Award className="h-4 w-4 text-white" />
              </div>
              <h5 className="font-bold text-aemet-navy">NCC RDC Camp 2025</h5>
            </div>
            <p className="text-sm text-gray-600">Appreciation from Prime Minister of India for exemplary participation</p>
          </div>

          {/* Coast Guard Fitness Festival */}
          <div className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-xl p-5 border border-indigo-200">
            <div className="flex items-center gap-2 mb-3">
              <div className="bg-indigo-500 p-2 rounded-full">
                <Trophy className="h-4 w-4 text-white" />
              </div>
              <h5 className="font-bold text-aemet-navy">Coast Guard Fitness Festival</h5>
            </div>
            <p className="text-sm text-gray-600">1st Prize Fashion Walk and merit positions at VIT Chennai</p>
          </div>
        </div>

        {/* Navgati 2024 Event Results */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-aemet-navy to-aemet-blue p-4">
            <h5 className="text-lg font-bold text-white flex items-center gap-2">
              <Trophy className="h-5 w-5" />
              Navgati 2024 Event Results
            </h5>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {navgatiEvents.map((item, index) => (
                <div key={index} className={`p-4 rounded-lg border ${item.position.includes('First') ? 'bg-amber-50 border-amber-200' : 'bg-gray-50 border-gray-200'}`}>
                  <h6 className="font-semibold text-aemet-navy text-sm mb-1">{item.event}</h6>
                  <p className={`text-xs ${item.position.includes('First') ? 'text-amber-700 font-medium' : 'text-gray-600'}`}>{item.position}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievement Details */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-lg border border-gray-200 mb-6">
          <p className="text-gray-700 leading-relaxed">
            These consistent accomplishments across diverse platforms underscore the university's commitment to nurturing holistic growth and promoting excellence in academics, culture, leadership, and maritime professionalism.
          </p>
        </div>

        {/* Winners Table */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-amber-500 to-yellow-500 p-4">
            <h5 className="text-lg font-bold text-white flex items-center gap-2">
              <Award className="h-5 w-5" />
              Achievement Winners
            </h5>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-aemet-navy border-b">S.No</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-aemet-navy border-b">Name of Cadet</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-aemet-navy border-b">Prize</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-aemet-navy border-b">Event</th>
                </tr>
              </thead>
              <tbody>
                {achievementsData.map((item, index) => (
                  <tr key={item.sno} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b">{item.sno}</td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b font-medium">{item.name}</td>
                    <td className="px-4 py-3 text-sm border-b">
                      {item.prize && (
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          item.prize.includes('1st') ? 'bg-amber-100 text-amber-800' :
                          item.prize.includes('2nd') ? 'bg-gray-100 text-gray-800' :
                          item.prize.includes('3rd') ? 'bg-orange-100 text-orange-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {item.prize}
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b">{item.event}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  // Mechanical Engineering specific achievements
  if (departmentId === 'mechanical-engineering') {
    return (
      <div>
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <Trophy className="h-5 w-5 mr-2 text-aemet-blue" />
          Department Achievements
        </h3>
        
        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-lg border-2 border-amber-200">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center">
                <Trophy className="w-10 h-10 text-white" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h4 className="text-2xl font-bold text-aemet-navy mb-2">
                Department Achievements
              </h4>
              <p className="text-gray-700">
                Explore our comprehensive list of achievements, awards, recognitions, and student accomplishments
              </p>
            </div>
            <div className="flex-shrink-0">
              <a
                href="/documents/mechanical-engineering-Achievements.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-medium shadow-sm"
              >
                <FileDown className="w-5 h-5" />
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Food Processing specific achievements
  if (departmentId === 'food-processing') {
    return (
      <div>
        <h3 className="text-xl font-bold text-aemet-navy mb-6">Department Achievements</h3>
        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-lg border-2 border-amber-200">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center">
                <Trophy className="w-10 h-10 text-white" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h4 className="text-2xl font-bold text-aemet-navy mb-2">
                Department Achievements
              </h4>
              <p className="text-gray-700">
                View our comprehensive list of achievements, awards, and recognitions
              </p>
            </div>
            <div className="flex-shrink-0">
              <a
                href="/documents/food-processing-achievements.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-medium shadow-sm"
              >
                <FileDown className="w-5 h-5" />
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Information Technology specific achievements
  if (departmentId === 'information-technology') {
    return (
      <div>
        <h3 className="text-xl font-bold text-aemet-navy mb-6">Department Achievements</h3>
        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-lg border-2 border-amber-200">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center">
                <Trophy className="w-10 h-10 text-white" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h4 className="text-2xl font-bold text-aemet-navy mb-2">
                Department Achievements
              </h4>
              <p className="text-gray-700">
                View our comprehensive list of achievements, awards, and recognitions
              </p>
            </div>
            <div className="flex-shrink-0">
              <a
                href="/achievements/it/achievements.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-medium shadow-sm"
              >
                <FileDown className="w-5 h-5" />
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const achievements = [
    {
      title: "NAAC A+ Accreditation",
      description: "Department received NAAC A+ grade for excellence in education",
      year: "2023",
      icon: Award,
      color: "text-yellow-600"
    },
    {
      title: "Best Research Department Award",
      description: "Recognized for outstanding research contributions in engineering",
      year: "2023",
      icon: Trophy,
      color: "text-blue-600"
    },
    {
      title: "Industry Partnership Excellence",
      description: "Awarded for best industry-academia collaboration",
      year: "2022",
      icon: Star,
      color: "text-green-600"
    },
    {
      title: "Student Placement Record",
      description: "Achieved 95% placement rate with top companies",
      year: "2022",
      icon: Medal,
      color: "text-purple-600"
    }
  ];

  return (
    <div>
      <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
        <Trophy className="h-5 w-5 mr-2 text-aemet-blue" />
        Department Achievements
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((achievement, index) => {
          const IconComponent = achievement.icon;
          return (
            <div key={index} className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gray-100 ${achievement.color}`}>
                  <IconComponent className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-aemet-navy text-lg">{achievement.title}</h4>
                    <span className="bg-aemet-blue text-white px-2 py-1 rounded text-xs font-medium">
                      {achievement.year}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-aemet-blue text-white p-4 rounded-lg text-center">
          <div className="text-2xl font-bold mb-1">500+</div>
          <div className="text-sm opacity-90">Publications</div>
        </div>
        <div className="bg-aemet-navy text-white p-4 rounded-lg text-center">
          <div className="text-2xl font-bold mb-1">50+</div>
          <div className="text-sm opacity-90">Patents Filed</div>
        </div>
        <div className="bg-green-600 text-white p-4 rounded-lg text-center">
          <div className="text-2xl font-bold mb-1">25+</div>
          <div className="text-sm opacity-90">Awards Received</div>
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;