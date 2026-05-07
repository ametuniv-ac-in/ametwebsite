import React from 'react';
import { Users, Briefcase, GraduationCap, Star, Calendar, MessageSquare, Download } from 'lucide-react';
import mechanicalAlumniMeet01 from '@/assets/mechanical-alumni-meet-01.jpg';
import mechanicalAlumniMeet02 from '@/assets/mechanical-alumni-meet-02.jpg';
import commerceAlumniMeet from '@/assets/commerce-alumni-meet.jpg';

interface AlumniSectionProps {
  departmentId?: string;
}

const AlumniSection: React.FC<AlumniSectionProps> = ({ departmentId }) => {
  
  // Commerce Department specific alumni data
  if (departmentId === 'commerce-department') {
    const distinguishedAlumni = [
      { sno: 1, name: "Aishwarya. V", position: "Mckinsey (BPO), Chennai" },
      { sno: 2, name: "Vikram Krishnan.R", position: "Mckinsey (BPO), Chennai" },
      { sno: 3, name: "Monisha", position: "Inchcape Shipping Services, Chennai" },
      { sno: 4, name: "Aravind.A", position: "Website Learners, Chennai" },
      { sno: 5, name: "K.Nitesh", position: "Brunel University, London - M.Sc (Accounting and Business Management)" },
      { sno: 6, name: "Shri Venkata Pragetesh", position: "Inchcape Shipping Services, Chennai" },
      { sno: 7, name: "V.Karan Raj", position: "Movemax System Logistics Private Limited (Sea Export Operations department)" },
      { sno: 8, name: "M. Joshua Alfred", position: "UPES - University of Petroleum and Energy Studies, Dehradun" }
    ];

    return (
      <div>
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <Users className="h-5 w-5 mr-2 text-aemet-blue" />
          Distinguished Alumni
        </h3>

        {/* Alumni Association Overview */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200 mb-6">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <div className="flex items-start gap-3 mb-4">
                <div className="bg-aemet-blue p-3 rounded-lg">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-aemet-navy mb-2">Alumni Association</h4>
                  <p className="text-gray-700 text-sm">
                    Department of Maritime Commerce has established the Alumni Association in the year 2019. 
                    The Alumni Association conducted various activities viz., Guest Lecture, Alumni Association meeting.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src={commerceAlumniMeet} 
                alt="AMET Alumni Association Meeting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Alumni Activities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-lg border border-green-200">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="h-5 w-5 text-green-600" />
              <h5 className="font-semibold text-aemet-navy">Alumni Meetings</h5>
            </div>
            <p className="text-sm text-gray-700">Regular networking sessions for alumni to connect and collaborate</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-5 rounded-lg border border-purple-200">
            <div className="flex items-center gap-2 mb-2">
              <MessageSquare className="h-5 w-5 text-purple-600" />
              <h5 className="font-semibold text-aemet-navy">Guest Lectures</h5>
            </div>
            <p className="text-sm text-gray-700">Alumni sharing industry insights and experiences with students</p>
          </div>
        </div>

        {/* Distinguished Alumni List */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-aemet-blue to-aemet-navy p-4">
            <h4 className="text-lg font-semibold text-white flex items-center">
              <Star className="h-5 w-5 mr-2" />
              List of Distinguished Alumni
            </h4>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="p-3 text-left text-xs font-semibold text-gray-700 uppercase">S.No</th>
                  <th className="p-3 text-left text-xs font-semibold text-gray-700 uppercase">Name</th>
                  <th className="p-3 text-left text-xs font-semibold text-gray-700 uppercase">Current Designation & Employer/Higher Education</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {distinguishedAlumni.map((alumni) => (
                  <tr key={alumni.sno} className="hover:bg-blue-50 transition-colors">
                    <td className="p-3 text-gray-800 font-medium">{alumni.sno}</td>
                    <td className="p-3 font-medium text-gray-800">{alumni.name}</td>
                    <td className="p-3 text-gray-700">{alumni.position}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Alumni Success Highlights */}
        <div className="bg-gradient-to-r from-aemet-blue/5 to-aemet-navy/5 rounded-lg p-6 border border-aemet-blue/20 mt-6">
          <h4 className="font-semibold text-aemet-navy mb-3 flex items-center">
            <Briefcase className="h-5 w-5 mr-2 text-aemet-blue" />
            Alumni Success Highlights
          </h4>
          <div className="space-y-2 text-sm text-gray-700">
            <p><strong>Global Opportunities:</strong> Our alumni are placed in prestigious organizations including McKinsey, Inchcape Shipping Services, and Movemax System Logistics</p>
            <p><strong>Higher Education:</strong> Alumni pursuing advanced studies in top universities like Brunel University (London) and UPES (Dehradun)</p>
            <p><strong>Diverse Sectors:</strong> Career paths spanning BPO, logistics, shipping services, digital marketing, and consultancy</p>
          </div>
        </div>
      </div>
    );
  }
  
  // AMET Business School specific alumni data
  if (departmentId === 'amet-business-school') {
    return (
      <div>
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <Users className="h-5 w-5 mr-2 text-aemet-blue" />
          AMET Alumni Association
        </h3>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 border border-blue-200">
          <div className="flex flex-col items-center text-center">
            <div className="bg-gradient-to-r from-aemet-blue to-aemet-navy p-4 rounded-full mb-6">
              <Users className="h-12 w-12 text-white" />
            </div>
            
            <h4 className="text-2xl font-bold text-aemet-navy mb-3">
              AMET Alumni Association
            </h4>
            
            <p className="text-gray-700 mb-6 max-w-2xl">
              Connect with our distinguished alumni network. Download the comprehensive alumni association document to learn about our alumni community, their achievements, and networking opportunities.
            </p>
            
            <a
              href="/documents/abs-alumni-association.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-aemet-blue to-aemet-navy hover:from-aemet-navy hover:to-aemet-blue text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Download className="h-5 w-5" />
              Download Alumni Association Details
            </a>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200 text-center">
            <GraduationCap className="h-8 w-8 text-green-600 mx-auto mb-3" />
            <h5 className="font-semibold text-aemet-navy mb-2">Global Network</h5>
            <p className="text-sm text-gray-600">Alumni across the world in maritime and business sectors</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200 text-center">
            <Briefcase className="h-8 w-8 text-purple-600 mx-auto mb-3" />
            <h5 className="font-semibold text-aemet-navy mb-2">Career Success</h5>
            <p className="text-sm text-gray-600">Leading positions in shipping, logistics and management</p>
          </div>
          
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-lg border border-amber-200 text-center">
            <Star className="h-8 w-8 text-amber-600 mx-auto mb-3" />
            <h5 className="font-semibold text-aemet-navy mb-2">Excellence</h5>
            <p className="text-sm text-gray-600">Recognition for outstanding contributions to industry</p>
          </div>
        </div>
      </div>
    );
  }
  
  // Marine Engineering specific alumni data
  if (departmentId === 'marine-engineering') {
    const marineAlumni = [
      { name: "Vishwesh Pandit", batch: "BE (ME) - 2009", position: "Chief Officer", company: "Maersk Line" },
      { name: "Abhinavchaudhry", batch: "BE (ME) - 2008", position: "Surveyor", company: "Indian Register of Shipping" },
      { name: "Subhajit Sarkar", batch: "BE (ME) - 2012", position: "Marine-operations Manager", company: "A.P. Moller - Maersk" },
      { name: "Rohit Singh", batch: "BE (ME) - 2016", position: "3E-Gas Tanker", company: "Exmar Shipmanagement N.V" },
      { name: "Ajinkya Lele", batch: "BE (ME) - 2009", position: "Head operations", company: "Fleet Management" },
      { name: "Neelesh Singh", batch: "BE (ME) - 2014", position: "Gas Engineer", company: "Shell Shipping" },
      { name: "Aniruddha Mittra", batch: "BE (ME) - 2009", position: "Chief Officer", company: "A.P. Moller - Maersk" },
      { name: "Ilavarasu Shanmugam", batch: "BE (ME) - 2015", position: "Engineer", company: "Ocean Sparkle Limited" },
      { name: "Jagadesan Venkatesh Kumar", batch: "BE (ME) - 2017", position: "Engineer", company: "Maersk Line Fleet" }
    ];

    return (
      <div>
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <Users className="h-5 w-5 mr-2 text-aemet-blue" />
          Distinguished Alumni
        </h3>

        {/* Statistics Overview */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-4 rounded-lg text-center">
            <div className="text-2xl font-bold mb-1">{marineAlumni.length}</div>
            <div className="text-sm opacity-90">Distinguished Alumni</div>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-lg text-center">
            <div className="text-2xl font-bold mb-1">100%</div>
            <div className="text-sm opacity-90">Global Placement</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-4 rounded-lg text-center">
            <div className="text-2xl font-bold mb-1">5+</div>
            <div className="text-sm opacity-90">Top Companies</div>
          </div>
        </div>

        {/* Alumni List */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-3 font-medium text-aemet-navy">S.No</th>
                  <th className="text-left p-3 font-medium text-aemet-navy">Name</th>
                  <th className="text-left p-3 font-medium text-aemet-navy">Batch</th>
                  <th className="text-left p-3 font-medium text-aemet-navy">Position</th>
                  <th className="text-left p-3 font-medium text-aemet-navy">Company</th>
                </tr>
              </thead>
              <tbody>
                {marineAlumni.map((alumni, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-blue-50">
                    <td className="p-3 text-gray-600">{index + 1}</td>
                    <td className="p-3 font-medium text-gray-800">{alumni.name}</td>
                    <td className="p-3 text-gray-600">{alumni.batch}</td>
                    <td className="p-3 text-gray-700">{alumni.position}</td>
                    <td className="p-3 text-gray-700">{alumni.company}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Alumni Success Highlights */}
        <div className="bg-gradient-to-r from-aemet-blue/5 to-aemet-navy/5 rounded-lg p-6 border border-aemet-blue/20 mb-6">
          <h4 className="font-semibold text-aemet-navy mb-3 flex items-center">
            <Star className="h-5 w-5 mr-2" />
            Alumni Network Highlights
          </h4>
          <div className="space-y-3 text-sm text-gray-700">
            <p><strong>Industry Leaders:</strong> Our alumni hold key positions in world's leading maritime companies including Maersk Line, A.P. Moller - Maersk, Shell Shipping, and Indian Register of Shipping.</p>
            <p><strong>Global Presence:</strong> Working in diverse roles from Chief Officers to Marine Operations Managers, Gas Engineers, and Fleet Management specialists.</p>
            <p><strong>Career Excellence:</strong> Representing prestigious organizations like Exmar Shipmanagement, Ocean Sparkle Limited, and other international maritime leaders.</p>
          </div>
        </div>

        {/* PDF Download */}
        <div className="bg-white rounded-lg p-6 border border-gray-200 text-center">
          <GraduationCap className="h-10 w-10 text-aemet-blue mx-auto mb-3" />
          <h4 className="font-semibold text-aemet-navy mb-2">Complete Alumni Directory</h4>
          <p className="text-sm text-gray-600 mb-4">View detailed profiles of our distinguished alumni</p>
          <a 
            href="/documents/marine-engineering-alumni.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-aemet-blue text-white rounded-lg hover:bg-aemet-navy transition-colors"
          >
            <Briefcase className="h-5 w-5 mr-2" />
            View Alumni Directory
          </a>
        </div>
      </div>
    );
  }
  
  // Mining Engineering specific alumni data
  if (departmentId === 'mining-engineering') {
    const miningAlumniBatches = [
      {
        batchNumber: "Batch - 1",
        alumni: [
          { name: "Bharat", employer: "NLC as a Trainee" },
          { name: "Joe Thomas Edwin", employer: "Engineer at ACT InfraPort Ltd" },
          { name: "Venkitaramanan", employer: "NLC as a Trainee" },
          { name: "Sanjay R.", employer: "NLC as a Trainee" },
          { name: "Gokulan", employer: "Kerala Quarries company" },
          { name: "Raja Guru", employer: "Chettinad cements" }
        ]
      },
      {
        batchNumber: "Batch - 2",
        alumni: [
          { name: "Arunkumar R", employer: "Sri Lakshmi Stone Crusher Industries." },
          { name: "Manoj Kumar M", employer: "Madhucon Granites Limited" },
          { name: "Hariharan", employer: "Ramco Cements" },
          { name: "Dhinesh Kumar S", employer: "Sri Ponguru Magnesite Mines" },
          { name: "Prakash", employer: "Cettinad Cements" },
          { name: "Hariharan A", employer: "NLC as trainee" },
          { name: "Kavin raj", employer: "Cettinad cements" }
        ]
      },
      {
        batchNumber: "Batch - 3",
        alumni: [
          { name: "ARAVINTH K", employer: "NLC as a Trainee" },
          { name: "Ajay", employer: "UCIL as a Trainee" },
          { name: "Mahesh", employer: "SCCL as trainee" },
          { name: "Hari prasad", employer: "Karnataka Stone Quarry" },
          { name: "Sowmya Kumar", employer: "Karnataka Stone Quarry" }
        ]
      },
      {
        batchNumber: "Batch - 4",
        alumni: [
          { name: "Bahawinth Rajh R", employer: "The India Cements Limited" },
          { name: "Jayakumar", employer: "The India Cements Limited" },
          { name: "Sancril", employer: "ICL" },
          { name: "Mani kandan", employer: "NLC as a Trainee" },
          { name: "Sethumathavan S", employer: "NLC as a Trainee" },
          { name: "Annamalai", employer: "NLC as a Trainee" },
          { name: "Muragavel", employer: "NLC as a Trainee" }
        ]
      },
      {
        batchNumber: "Batch - 5",
        alumni: [
          { name: "Eswar", employer: "NLC as a Trainee" },
          { name: "Nandipathi Jagath Guruvareddy", employer: "NLC as a Trainee" },
          { name: "Jagadeswaran", employer: "NLC as a Trainee" },
          { name: "Mughilrasan", employer: "NLC as a Trainee" }
        ]
      }
    ];

    return (
      <div>
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <Users className="h-5 w-5 mr-2 text-aemet-blue" />
          Distinguished Alumni
        </h3>
        
        {/* Alumni by Batches */}
        <div className="space-y-6 mb-8">
          {miningAlumniBatches.map((batch, batchIndex) => (
            <div key={batchIndex} className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-aemet-navy mb-4">{batch.batchNumber}</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left p-2 font-medium text-aemet-navy">S.No</th>
                      <th className="text-left p-2 font-medium text-aemet-navy">Name</th>
                      <th className="text-left p-2 font-medium text-aemet-navy">Current Designation & Employer</th>
                    </tr>
                  </thead>
                  <tbody>
                    {batch.alumni.map((alumni, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="p-2 text-gray-600">{index + 1}</td>
                        <td className="p-2 font-medium text-gray-800">{alumni.name}</td>
                        <td className="p-2 text-gray-700">{alumni.employer}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        {/* Alumni Meeting Information */}
        <div className="bg-gradient-to-r from-aemet-blue/5 to-aemet-navy/5 rounded-lg p-6 border border-aemet-blue/20 mb-6">
          <h4 className="text-lg font-semibold text-aemet-navy mb-4 flex items-center">
            <Calendar className="h-5 w-5 mr-2" />
            Alumni Meet
          </h4>
          <div className="space-y-3 text-gray-700">
            <p>1. The passed out Batch -1 (2016-2020) were called for Alumni meeting on <strong>May 16th 2021 Sunday.</strong></p>
            <p>2. The passed-out Batch - 2, 3 & 4 were called for Alumni meeting on <strong>Sep 9th, 2023. (Hybrid Mode)</strong></p>
          </div>

          <div className="mt-6">
            <h5 className="font-semibold text-aemet-navy mb-3">Agenda</h5>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start">
                <div className="h-1.5 w-1.5 bg-aemet-blue rounded-full mr-3 mt-2"></div>
                Discussing about their present life after AMET and Getting comments about the mining engineering syllabus whether it helped in their job.
              </li>
              <li className="flex items-start">
                <div className="h-1.5 w-1.5 bg-aemet-blue rounded-full mr-3 mt-2"></div>
                Discussing about the improvement required on syllabus and curriculum to meet the need of the Recruiters and each individual has to give comments about their view of Department requirement and requirement for the upcoming batches to get a job on mining sector.
              </li>
            </ul>
          </div>

          <div className="mt-6">
            <h5 className="font-semibold text-aemet-navy mb-3 flex items-center">
              <MessageSquare className="h-4 w-4 mr-2" />
              Minutes of the Meeting
            </h5>
            <div className="space-y-3 text-gray-700 text-sm">
              <p>• A Guru brahmam Assistant Professor, Department of Mining Engineering hosted the meeting and welcomed all the passed out students & Department Head (Siva Subramanian) and other faculty members (Mr. Subramanian) along with Visiting Professor (Dr. Jothimani P).</p>
              <p>• A Guru brahmam had called one by one of the passed out students and enquired about their life after AMET degree completion and enquired about their Job Status...</p>
              <p>• Among Students Sethumadhavan Initiated the discussion that he is at present working in NLC (NEYVELI LIGNITE CORPORATION) as trainee. He said that during their academic sessions, not much of lab facility and industrial visits were conducted and gave suggestions like GATE coaching syllabus must be included. Ponmani S replied that the department has improved with more Lab facilities and more GATE syllabus has been included from batch -5 to 7.</p>
              <p>• Secondly, kavin raj, Manoj said that both are also working as cettinad cements, and he gave suggestion to take more and more industrial visits.</p>
              <p>• Meeting ended with wishing them all for the bright future and keep shining in their life.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Naval Architecture specific alumni data
  if (departmentId === 'naval-architecture') {
    const navalArchitectureAlumni = [
      { name: "Saikrishna Govindarajan", employer: "Safety Advisor, Safetec Nordic AS (Norway)", location: "International" },
      { name: "Venkatesan Arumugam Elumalai", employer: "Engineer, Subsea 7, Norway", location: "International" },
      { name: "Mallikarjun Kalluru", employer: "Naval Architect/ Construction Support Engineer, McDermott Inc. Houston, Texas, USA", location: "International" },
      { name: "Samrat Kundu", employer: "Market Analyst, Ducker Frontier, Troy, Michigan, USA", location: "International" },
      { name: "Aravind Srikanth", employer: "Senior Design Engineer, Sembcorp Marine Ltd, Singapore", location: "International" },
      { name: "Lakshmanan Sreenivasan", employer: "Engineer, Sembcorp Marine LTD, Singapore", location: "International" },
      { name: "Naveen Mathew", employer: "Engineer (F.E), Sembcorp Marine Admiralty Yard, Singapore", location: "International" },
      { name: "Vignesh Sivagnanam", employer: "Sr. Naval Architect/ Inspection Engineer, Zener Maritime Solutions (Singapore) Pte Ltd", location: "International" },
      { name: "S. Raghu Ram", employer: "Design Engineer, Sembcorp Marine, Singapore", location: "International" },
      { name: "Jofin Lukose", employer: "Offshore Engineer, Jumbo Maritime, Netherlands", location: "International" },
      { name: "Irshad Syed", employer: "Structural Engineer (Offshore), Arab Shipbuilding and Repair Yard, Bahrain", location: "International" },
      { name: "Rahim K", employer: "Offshore Structural Integrity Engineer, Atkins, UAE", location: "International" },
      { name: "Shyam Krishnan", employer: "Naval Architect, Al Shaali Marine, UAE", location: "International" },
      { name: "Jabez Dawnson", employer: "Manager-Naval Architecture and Performance, Maersk Tankers, Mumbai", location: "India" },
      { name: "Amit Kumar", employer: "Deputy Manager, Mazagon Dock Shipbuilders Limited, Mumbai", location: "India" },
      { name: "Shailendra Singh Tomar", employer: "Manager (Design-Structural), Mazagon Dock Shipbuilders Ltd. (MDL), Mumbai", location: "India" },
      { name: "Ravikumar", employer: "Deputy Manager, Mazgon Dock Ltd. Mumbai", location: "India" },
      { name: "Riaz A", employer: "Deputy Manager, Mazagon Dock Shipbuilders Limited, Mumbai", location: "India" },
      { name: "Balakumar R", employer: "Yacht designer/Naval Architect, Ultramarine Yachts, Pondicherry", location: "India" },
      { name: "Buvaneswari P Iyer", employer: "Assistant Manager, Warship Design Center, L&T Ship Building, Chennai", location: "India" },
      { name: "Jayakumar", employer: "Asst. Manager, Larson & Toubro Shipyard, Chennai", location: "India" },
      { name: "Suriya Prabha", employer: "Offshore Structural Professional, Kellogg Brown & Root, Chennai", location: "India" },
      { name: "Nikhil Kumar", employer: "Assistant Manager (Naval Architect), Garden Reach Shipbuilders and Engineers Ltd, (Govt of India, Ministry of Defense U/T), Kolkata", location: "India" },
      { name: "Sajin Victor", employer: "Structural Engineer, Keppel Offshore and Marine, Mumbai", location: "India" },
      { name: "Gowri Shankar. B", employer: "Marine Integrity Engineer, Quest-Global Engineering Services Pvt. Ltd, Bangalore", location: "India" },
      { name: "Anto Breshnew", employer: "Design Engineer, Vik-Sandvik Design India Pvt. Ltd. Chennai", location: "India" },
      { name: "Shashi Bushan", employer: "Structural Engineer, Keppel Offshore and Marine, Mumbai", location: "India" },
      { name: "Bonny Kurian", employer: "Assistant Manager Systems and Process, Kuehne+Nagel India Pvt Ltd", location: "India" },
      { name: "Vipul Shankar", employer: "Assistant Manager (Design & Marketing), Godrej & Boyce Mfg.Co.Ltd, Mumbai", location: "India" },
      { name: "Sivaram", employer: "Naval Architect, Zener Maritime Solutions, Mumbai", location: "India" },
      { name: "Mugunthan B.S", employer: "Project Engineer, Chowgule Lavgan Dockyard, Ratnagiri, Maharastra", location: "India" },
      { name: "Dhanesh Damodaran", employer: "Design Engineer, DND, Indian Navy, Cochin", location: "India" }
    ];

    const internationalAlumni = navalArchitectureAlumni.filter(alumni => alumni.location === "International");
    const indiaAlumni = navalArchitectureAlumni.filter(alumni => alumni.location === "India");

    return (
      <div>
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <Users className="h-5 w-5 mr-2 text-aemet-blue" />
          Distinguished Alumni Network
        </h3>

        {/* Global Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-4 rounded-lg text-center">
            <div className="text-2xl font-bold mb-1">32</div>
            <div className="text-sm opacity-90">Distinguished Alumni</div>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-lg text-center">
            <div className="text-2xl font-bold mb-1">13</div>
            <div className="text-sm opacity-90">International Placements</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-4 rounded-lg text-center">
            <div className="text-2xl font-bold mb-1">8</div>
            <div className="text-sm opacity-90">Countries</div>
          </div>
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-4 rounded-lg text-center">
            <div className="text-2xl font-bold mb-1">19</div>
            <div className="text-sm opacity-90">India Locations</div>
          </div>
        </div>

        {/* International Alumni Section */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-aemet-navy mb-4 flex items-center">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
            International Placements ({internationalAlumni.length})
          </h4>
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-3 font-medium text-aemet-navy">S.No</th>
                    <th className="text-left p-3 font-medium text-aemet-navy">Name</th>
                    <th className="text-left p-3 font-medium text-aemet-navy">Current Designation & Employer</th>
                  </tr>
                </thead>
                <tbody>
                  {internationalAlumni.map((alumni, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-blue-50">
                      <td className="p-3 text-gray-600">{index + 1}</td>
                      <td className="p-3 font-medium text-gray-800">{alumni.name}</td>
                      <td className="p-3 text-gray-700">{alumni.employer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* India Alumni Section */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-aemet-navy mb-4 flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
            India Placements ({indiaAlumni.length})
          </h4>
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-3 font-medium text-aemet-navy">S.No</th>
                    <th className="text-left p-3 font-medium text-aemet-navy">Name</th>
                    <th className="text-left p-3 font-medium text-aemet-navy">Current Designation & Employer</th>
                  </tr>
                </thead>
                <tbody>
                  {indiaAlumni.map((alumni, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-green-50">
                      <td className="p-3 text-gray-600">{index + 1}</td>
                      <td className="p-3 font-medium text-gray-800">{alumni.name}</td>
                      <td className="p-3 text-gray-700">{alumni.employer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Alumni Success Highlights */}
        <div className="bg-gradient-to-r from-aemet-blue/5 to-aemet-navy/5 rounded-lg p-6 border border-aemet-blue/20">
          <h4 className="font-semibold text-aemet-navy mb-3 flex items-center">
            <Star className="h-5 w-5 mr-2" />
            Global Alumni Network Highlights
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <p className="mb-2"><strong>International Presence:</strong> Our alumni work in prestigious companies across Norway, USA, Singapore, Netherlands, Bahrain, and UAE</p>
              <p className="mb-2"><strong>Leading Companies:</strong> Safetec Nordic AS, Subsea 7, McDermott Inc, Sembcorp Marine, Maersk Tankers</p>
            </div>
            <div>
              <p className="mb-2"><strong>India Locations:</strong> Mumbai, Chennai, Kolkata, Bangalore, Pondicherry, and other major maritime hubs</p>
              <p className="mb-2"><strong>Key Employers:</strong> Mazagon Dock Shipbuilders, L&T Shipbuilding, Indian Navy, Garden Reach Shipbuilders</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Nautical Sciences specific alumni data
  if (departmentId === 'nautical-sciences') {
    const nauticalAlumni = [
      { name: "Capt Sartaj Gill", designation: "Manager Director – V.Group" },
      { name: "Ms.Reshma Nilofer (President Medal Awardee)", designation: "Pilot – Syama Prasad Mokerjee Port – Kolkata Port" },
      { name: "Capt Arvind Shankar", designation: "Marine Training Manager, Marine People Asia, Maersk Fleet Management and Technology" },
      { name: "Capt K.Sriram", designation: "Master Mariner – A.P.Moller Maersk" }
    ];

    const distinguishedAlumni = [
      { sno: 1, name: "Prasenjit Mohanta", company: "KOTUG INTERNATIONAL, Netherland", role: "HSEQ Manager" },
      { sno: 2, name: "Capt. Nityanand Singh", company: "Darya Shipping, Haryana", role: "Superintendent" },
      { sno: 3, name: "Capt. VIKAS SIROHI", company: "SEAMORAT SHIPPING PVT LTD. Hyderabad", role: "Managing Director" },
      { sno: 4, name: "Capt. Sartaj Gill", company: "Ek Nav Izna Pte Ltd, Singapore", role: "Founder & Director" },
      { sno: 5, name: "Capt. Alok Patra", company: "Valad Infotech Solutions, Maharashtra", role: "Chief Executive Officer" },
      { sno: 6, name: "Rajiv Chakraborti", company: "MSC, Colombo", role: "Chief Officer" },
      { sno: 7, name: "Mr. Lokesh Yadav", company: "Synergy Marine Group, Chennai", role: "Chief Officer" },
      { sno: 8, name: "Dinesh Janarthanan", company: "Admiral Marine, Chennai", role: "Chief Officer" },
      { sno: 9, name: "Capt. Danny Jowher", company: "A.P. Moller Maersk, Denmark", role: "Cadet Training Manager" },
      { sno: 10, name: "Capt. Sriram Krishna Kumar", company: "A.P. Moller Maersk, Denmark", role: "Captain" },
      { sno: 11, name: "Capt. Vishnoo Anand", company: "Fleet Management, HKG, Chennai", role: "Captain" },
      { sno: 12, name: "Mr. Prabhakar Subramanya", company: "MarineIQ Shipping Solutions Pvt Ltd, New Zealand", role: "Founder" }
    ];

    return (
      <div>
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <Users className="h-5 w-5 mr-2 text-aemet-blue" />
          Distinguished Alumni
        </h3>

        {/* Distinguished Alumni Introduction */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200 mb-8">
          <p className="text-gray-700 leading-relaxed">
            Graduates of the B.Sc. Nautical Science program have distinguished themselves in diverse roles across the global maritime industry, excelling in management, ship operations, training, and innovation. The Department takes pride in its accomplished alumni, who hold key positions in prestigious international organizations and have made notable contributions as directors, chief officers, superintendents, trainers, and entrepreneurs. Their professional achievements reflect the Department's commitment to cultivating leadership, technical expertise, and industry readiness in its students. These alumni serve as esteemed ambassadors, continuously inspiring the next generation of maritime professionals.
          </p>
        </div>

        {/* Distinguished Alumni Table */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-aemet-navy to-aemet-blue p-4">
            <h4 className="text-lg font-semibold text-white flex items-center">
              <Star className="h-5 w-5 mr-2" />
              Distinguished Alumni
            </h4>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left p-4 font-semibold text-aemet-navy w-16">S.No</th>
                  <th className="text-left p-4 font-semibold text-aemet-navy">Name</th>
                  <th className="text-left p-4 font-semibold text-aemet-navy">Company Name</th>
                  <th className="text-left p-4 font-semibold text-aemet-navy">Role</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {distinguishedAlumni.map((alumni, index) => (
                  <tr key={alumni.sno} className={index % 2 === 0 ? 'bg-white hover:bg-blue-50' : 'bg-gray-50/50 hover:bg-blue-50'}>
                    <td className="p-4 text-gray-600 font-medium">{alumni.sno}</td>
                    <td className="p-4 font-medium text-gray-800">{alumni.name}</td>
                    <td className="p-4 text-gray-700">{alumni.company}</td>
                    <td className="p-4 text-gray-700">{alumni.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Previous Alumni List */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4">
            <h4 className="text-lg font-semibold text-white flex items-center">
              <Briefcase className="h-5 w-5 mr-2" />
              Notable Alumni in Industry
            </h4>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-aemet-blue/10 to-aemet-navy/10">
                <tr>
                  <th className="text-left p-4 font-semibold text-aemet-navy border-b border-gray-300">S.No</th>
                  <th className="text-left p-4 font-semibold text-aemet-navy border-b border-gray-300">Name</th>
                  <th className="text-left p-4 font-semibold text-aemet-navy border-b border-gray-300">Current Designation & Employer</th>
                </tr>
              </thead>
              <tbody>
                {nauticalAlumni.map((alumni, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                    <td className="p-4 text-gray-600">{index + 1}</td>
                    <td className="p-4 font-medium text-gray-800">{alumni.name}</td>
                    <td className="p-4 text-gray-700">{alumni.designation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Alumni Success Highlights */}
        <div className="bg-gradient-to-r from-aemet-blue/5 to-aemet-navy/5 rounded-lg p-6 border border-aemet-blue/20">
          <h4 className="font-semibold text-aemet-navy mb-3 flex items-center">
            <Star className="h-5 w-5 mr-2" />
            Alumni Network Highlights
          </h4>
          <div className="space-y-3 text-sm text-gray-700">
            <p><strong>Global Presence:</strong> Our alumni hold prestigious positions in world's leading maritime companies across Netherlands, Singapore, Denmark, New Zealand, and more.</p>
            <p><strong>Notable Achievements:</strong> Ms. Reshma Nilofer honored with President Medal, working as Pilot at Syama Prasad Mokerjee Port. Multiple alumni serving as Captains, Managing Directors, and Founders.</p>
            <p><strong>Career Excellence:</strong> From HSEQ Managers to Cadet Training Managers, Chief Officers to Founders, our alumni represent excellence across the maritime industry spectrum.</p>
          </div>
        </div>

        {/* Alumni Meet Gallery */}
        <div className="mt-8">
          <h4 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
            <Calendar className="h-5 w-5 mr-2 text-aemet-blue" />
            Alumni Meet Gallery
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={`/images/nautical-alumni-${num}.jpg`}
                    alt={`Chennai Chapter Alumni Meet ${num}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 bg-gradient-to-r from-aemet-blue/5 to-aemet-navy/5">
                  <p className="text-center font-semibold text-aemet-navy">
                    CHENNAI CHAPTER – ALUMNI MEET on 07.12.2024
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Petroleum Engineering specific alumni data
  if (departmentId === 'petroleum-engineering') {
    const petroleumAlumni = [
      { name: "M.Vignesh", employer: "Schlumberger" },
      { name: "Umeshsingh", employer: "Schlumberger" },
      { name: "Ginu", employer: "Sterling Global Oil" },
      { name: "Nazeel", employer: "Sterling Global Oil" },
      { name: "ArjithDhar", employer: "Sterling Oil" },
      { name: "Eswarprasath", employer: "Sterling Oil" },
      { name: "Rahul", employer: "Tech Mahendra" },
      { name: "Kousik Sharma", employer: "TechMahendra, Chennai" },
      { name: "MonishKumar", employer: "Shell Oil Chennai" },
      { name: "SamayaBiswal", employer: "GSPC" },
      { name: "Keerthikanand Mohanraj", employer: "Corporate Executive (Drilling & Completions), SEEPCO, Nigeria" },
      { name: "Sundaramoorthy", employer: "Fugro Offshore, Mumbai" },
      { name: "Vignesh", employer: "Armstrong International" },
      { name: "Manikandan. K", employer: "ONGC" }
    ];

    return (
      <div>
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <Users className="h-5 w-5 mr-2 text-aemet-blue" />
          Distinguished Alumni
        </h3>

        {/* Statistics Overview */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-4 rounded-lg text-center">
            <div className="text-2xl font-bold mb-1">{petroleumAlumni.length}</div>
            <div className="text-sm opacity-90">Distinguished Alumni</div>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-lg text-center">
            <div className="text-2xl font-bold mb-1">100%</div>
            <div className="text-sm opacity-90">Industry Placement</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-4 rounded-lg text-center">
            <div className="text-2xl font-bold mb-1">8+</div>
            <div className="text-sm opacity-90">Top Companies</div>
          </div>
        </div>

        {/* Alumni List */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-3 font-medium text-aemet-navy">S.No</th>
                  <th className="text-left p-3 font-medium text-aemet-navy">Name</th>
                  <th className="text-left p-3 font-medium text-aemet-navy">Current Designation & Employer</th>
                </tr>
              </thead>
              <tbody>
                {petroleumAlumni.map((alumni, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-blue-50">
                    <td className="p-3 text-gray-600">{index + 1}</td>
                    <td className="p-3 font-medium text-gray-800">{alumni.name}</td>
                    <td className="p-3 text-gray-700">{alumni.employer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Alumni Success Highlights */}
        <div className="bg-gradient-to-r from-aemet-blue/5 to-aemet-navy/5 rounded-lg p-6 border border-aemet-blue/20">
          <h4 className="font-semibold text-aemet-navy mb-3 flex items-center">
            <Star className="h-5 w-5 mr-2" />
            Alumni Network Highlights
          </h4>
          <div className="space-y-3 text-sm text-gray-700">
            <p><strong>Industry Leaders:</strong> Our alumni work at prestigious organizations including Schlumberger, ONGC, Shell Oil, Sterling Global Oil, and SEEPCO Nigeria.</p>
            <p><strong>Global Presence:</strong> Alumni are employed in diverse roles across drilling & completions, offshore operations, and petroleum technology sectors.</p>
            <p><strong>Career Excellence:</strong> Representing leading companies like Tech Mahendra, Fugro Offshore, Armstrong International, and GSPC in key technical positions.</p>
          </div>
        </div>
      </div>
    );
  }

  // Mechanical Engineering specific alumni data
  if (departmentId === 'mechanical-engineering') {
    const mechanicalAlumni = [
      { name: "Mr. M.Suraj Kumar", employer: "Automation Engineer, SIEG Industrial Servies and spm machines" },
      { name: "Mr. E.Vinoth", employer: "Senior Analyst, Flextronics Technologies" },
      { name: "Mr. Ranjith Menon.D", employer: "Engineer, SEASPAN Crew Management India Private Limited." },
      { name: "Mr. M.Avinash", employer: "Lead – Implementations, Sutherland Healthcare Solutions." },
      { name: "Mr.Nasir Ahmad", employer: "Quality Assurance Inspector, SEAGA India pvt.Ltd." },
      { name: "Mr.P.Monish Raghav", employer: "Content Researcher, Website Learners" },
      { name: "Mr.A.Aravindhan", employer: "Trainee Process Associate, AGS Health Care." }
    ];

    return (
      <div>
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <Users className="h-5 w-5 mr-2 text-aemet-blue" />
          Distinguished Alumni
        </h3>

        {/* Alumni List */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-3 font-medium text-aemet-navy">S.No</th>
                  <th className="text-left p-3 font-medium text-aemet-navy">Name</th>
                  <th className="text-left p-3 font-medium text-aemet-navy">Current Designation & Employer</th>
                </tr>
              </thead>
              <tbody>
                {mechanicalAlumni.map((alumni, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-blue-50">
                    <td className="p-3 text-gray-600">{index + 1}</td>
                    <td className="p-3 font-medium text-gray-800">{alumni.name}</td>
                    <td className="p-3 text-gray-700">{alumni.employer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Alumni Meetings */}
        <div className="bg-gradient-to-r from-aemet-blue/5 to-aemet-navy/5 rounded-lg p-6 border border-aemet-blue/20 mb-8">
          <h4 className="text-lg font-semibold text-aemet-navy mb-4 flex items-center">
            <Calendar className="h-5 w-5 mr-2" />
            Alumni Meetings
          </h4>
          <div className="text-gray-700 mb-6">
            <p>Department of Mechanical Engineering has an Alumni Association named <strong>"AMET Mechanical Engineers' Alumni Association (AMAA)"</strong> which has conducted 3 Alumni Meetings.</p>
          </div>

          {/* Alumni Meeting Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <img 
                src={mechanicalAlumniMeet01} 
                alt="AMET Mechanical Engineers Alumni Association Meeting" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <img 
                src={mechanicalAlumniMeet02} 
                alt="Virtual Alumni Meeting Session" 
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Electrical Engineering specific alumni data
  if (departmentId === 'electrical-engineering') {
    return (
      <div>
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <Users className="h-5 w-5 mr-2 text-aemet-blue" />
          Distinguished Alumni
        </h3>

        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <img 
              src="/images/alumni-eeem02.jpg" 
              alt="Electrical Engineering Alumni - Page 1" 
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <img 
              src="/images/alumni-eeem01.jpg" 
              alt="Electrical Engineering Alumni - Page 2" 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    );
  }

  // Food Processing specific alumni data
  if (departmentId === 'food-processing') {
    const batch1Alumni = [
      { name: "Moison", employer: "Research Scientist, Cavinkare" },
      { name: "Ruban", employer: "Quality Analyst, Vegroute" },
      { name: "Rajkhumar", employer: "Doing Masters in U.K" },
      { name: "Gopi", employer: "Quality Analyst, Licious" },
      { name: "Robin", employer: "Food Technologist, Food Buddies" },
      { name: "Chandresh", employer: "Trainee, CTS" },
      { name: "Muthusamy", employer: "Production Lead, Parle-g" }
    ];

    const batch2Alumni = [
      { name: "Getsey Aishwarya Prakash", employer: "TANUVAS, Industry Unit Chennai" },
      { name: "Pimpalkhare Chinmayee", employer: "Research Associate, Innova Market Insights" },
      { name: "Ujjainkar Prajakta Dinesh", employer: "Innova Market Insights, Chennai" },
      { name: "Yamini .B", employer: "Food Safety Auditors, The Nabati Wafer Company in Chennai" },
      { name: "Aravind Kumar. T", employer: "Aachi Masala Company, Chennai" },
      { name: "Balamurugan .E", employer: "Sr.Officer Quality, Nabati" },
      { name: "Bharani Abhishek. M I", employer: "Indian Institute Of Plantation Management (Bangalore)" },
      { name: "Boopathi Raja. S", employer: "Licious Office In Bangalore" },
      { name: "George Mathew", employer: "Sula Wine Industry (Bangalore)" },
      { name: "Gowtham .M", employer: "Abc Pvt. Ltd., Chennai" },
      { name: "Gunabalan .G", employer: "Modern Bakers (Madhavaram, Chennai)" },
      { name: "Harish Kumar. E", employer: "Spectra Foods And Beverages Pvt. Ltd., Vijayawada" },
      { name: "Marudhu .V R", employer: "Abc Pvt. Ltd., Chennai" },
      { name: "Mehroof Maheen", employer: "Sula Wine Industry (Bangalore)" },
      { name: "Muthusamy .M", employer: "Indian Institute Of Plantation Management (Bangalore)" },
      { name: "Rahuldavid .J", employer: "Indian Institute Of Plantation Management (Bangalore)" },
      { name: "Rajesh Kanna .T", employer: "Aachi Masala Company, Chennai" },
      { name: "Sarenraj .L", employer: "Modern Bakers (Madhavaram, Chennai)" },
      { name: "Suresh .R", employer: "Fresh To Home, Bangalore" },
      { name: "Vasanthakumar. V", employer: "Spectra Foods And Beverages Pvt. Ltd., Vijayawada" },
      { name: "Vasanthan S. M", employer: "Abc Pvt. Ltd., Chennai" },
      { name: "Nagarajan. S", employer: "Sula Wine Industry (Bangalore)" }
    ];

    const batch3Alumni = [
      { name: "Keerthika.S", employer: "Tamil Nadu Co-Operative Milk Producers' Federation Limited (Aavin)" },
      { name: "Prathiksha.R", employer: "Microbiology Technician, Columbus" },
      { name: "Ramya.R", employer: "Hindustan Coca-Cola Beverages Private Limited (HCCBPL)" },
      { name: "Amarnath .V", employer: "Modern Food Enterprises Pvt Ltd., Chennai" },
      { name: "Chandresh .S", employer: "Britannia Industries Ltd, Chennai" },
      { name: "Dharmesh .R", employer: "Scientific Food Testing Service Pvt Ltd (Ambattur, Chennai)" },
      { name: "Doddapaneni Venkata Chandra Shashank", employer: "Food Safety And Quality Assurance Technician, Columbus" },
      { name: "Jaison A", employer: "The Eimco-K.C.P. Limited., Chennai" },
      { name: "Rajkhumar Billlva . C", employer: "Nutrition Officer, Nestlé And Abbott Nutrition, Columbus, OH, USA" },
      { name: "Robin .R K", employer: "Apeda Registration Spices Board Of India (Ambattur, Chennai)" },
      { name: "Thiruloga Sundar.B", employer: "QA Technician I, Columbus, OH, USA" },
      { name: "Divya Bharathi", employer: "Modern Bakers (Madhavaram, Chennai)" }
    ];

    const batch4Alumni = [
      { name: "Ajas Mohammed. K", employer: "The Eimco-K.C.P. Limited., Chennai" },
      { name: "Anisha Theres Cherian", employer: "Modern Food Enterprises Pvt Ltd., Chennai" },
      { name: "Kavi Varadha Raja A K", employer: "Parle Agro Pvt Ltd., Chennai" },
      { name: "Nivedya. D", employer: "Century Flour Mills Private Limited., Chennai" },
      { name: "Vignesh. M", employer: "Bakery And Food & Beverage, Department At Madras Club., Chennai" }
    ];

    const batch5Alumni = [
      { name: "Jayavelnathan. S", employer: "Confluence Valley Pvt Ltd, Bangalore" },
      { name: "Shakthee Swari. T J", employer: "Britannia Industries Limited - Coimbatore" },
      { name: "Sreedarsan. S", employer: "Hindustan Coca Cola Beverage Pvt Ltd, Nungambakkam, Chennai" },
      { name: "Vuyyuru Vyshnavi Priya", employer: "Britannia Industries Limited - Coimbatore" },
      { name: "Induri Sreeja", employer: "Licious, Hyderabad, Bangalore" },
      { name: "Madhu Mitha. C", employer: "Food Safety Trainer, Rareminds, Bangalore" }
    ];

    const renderAlumniTable = (alumni: { name: string; employer: string }[], batchTitle: string) => (
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-6">
        <div className="bg-gradient-to-r from-aemet-blue to-aemet-navy px-4 py-3">
          <h4 className="text-white font-semibold">{batchTitle}</h4>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-3 font-medium text-aemet-navy w-16">S.No</th>
                <th className="text-left p-3 font-medium text-aemet-navy">Name</th>
                <th className="text-left p-3 font-medium text-aemet-navy">Current Designation & Employer</th>
              </tr>
            </thead>
            <tbody>
              {alumni.map((alum, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-blue-50">
                  <td className="p-3 text-gray-600">{index + 1}</td>
                  <td className="p-3 font-medium text-gray-800">{alum.name}</td>
                  <td className="p-3 text-gray-700">{alum.employer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );

    return (
      <div>
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <Users className="h-5 w-5 mr-2 text-aemet-blue" />
          Department of Food Processing Technology - Alumni
        </h3>

        {renderAlumniTable(batch1Alumni, "Alumni Batch - 1")}
        {renderAlumniTable(batch2Alumni, "Alumni Batch - 2")}
        {renderAlumniTable(batch3Alumni, "Alumni Batch - 3")}
        {renderAlumniTable(batch4Alumni, "Alumni Batch - 4")}
        {renderAlumniTable(batch5Alumni, "Alumni Batch - 5")}

        {/* Success Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-5 rounded-lg text-center">
            <GraduationCap className="h-8 w-8 mx-auto mb-2 opacity-90" />
            <div className="text-2xl font-bold mb-1">5</div>
            <div className="text-sm opacity-90">Alumni Batches</div>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-5 rounded-lg text-center">
            <Briefcase className="h-8 w-8 mx-auto mb-2 opacity-90" />
            <div className="text-2xl font-bold mb-1">52+</div>
            <div className="text-sm opacity-90">Successful Placements</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-5 rounded-lg text-center">
            <Star className="h-8 w-8 mx-auto mb-2 opacity-90" />
            <div className="text-sm opacity-90">Global Opportunities</div>
          </div>
        </div>
      </div>
    );
  }

  // Default alumni content for other departments
  const notableAlumni = [
    {
      name: "Alex Rodriguez",
      batch: "2018-2022",
      position: "Senior Software Engineer",
      company: "Google",
      achievement: "Led AI research team"
    },
    {
      name: "Priya Sharma",
      batch: "2017-2021",
      position: "Chief Technology Officer",
      company: "Tech Startup",
      achievement: "Founded successful AI startup"
    },
    {
      name: "David Chen",
      batch: "2016-2020",
      position: "Research Scientist",
      company: "Microsoft Research",
      achievement: "Published 20+ research papers"
    },
    {
      name: "Sarah Wilson",
      batch: "2015-2019",
      position: "Product Manager",
      company: "Apple",
      achievement: "Led major product launches"
    }
  ];

  return (
    <div>
      <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
        <Users className="h-5 w-5 mr-2 text-aemet-blue" />
        Alumni Network
      </h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {notableAlumni.map((alumni, index) => (
          <div key={index} className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-aemet-blue rounded-full flex items-center justify-center text-white font-semibold">
                {alumni.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-aemet-navy text-lg mb-1">{alumni.name}</h4>
                <p className="text-aemet-blue font-medium text-sm mb-2">{alumni.batch}</p>
                <div className="space-y-1">
                  <div className="flex items-center text-gray-600 text-sm">
                    <Briefcase className="h-4 w-4 mr-2" />
                    <span>{alumni.position} at {alumni.company}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Star className="h-4 w-4 mr-2" />
                    <span>{alumni.achievement}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-aemet-navy text-white p-4 rounded-lg text-center">
          <div className="text-2xl font-bold mb-1">2000+</div>
          <div className="text-sm opacity-90">Total Alumni</div>
        </div>
        <div className="bg-aemet-blue text-white p-4 rounded-lg text-center">
          <div className="text-2xl font-bold mb-1">95%</div>
          <div className="text-sm opacity-90">Placement Rate</div>
        </div>
        <div className="bg-green-600 text-white p-4 rounded-lg text-center">
          <div className="text-2xl font-bold mb-1">150+</div>
          <div className="text-sm opacity-90">Companies</div>
        </div>
        <div className="bg-purple-600 text-white p-4 rounded-lg text-center">
          <div className="text-2xl font-bold mb-1">₹12 LPA</div>
          <div className="text-sm opacity-90">Avg Package</div>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-aemet-lightGray to-blue-50 p-6 rounded-lg">
        <h4 className="font-semibold text-aemet-navy mb-2 flex items-center">
          <GraduationCap className="h-5 w-5 mr-2" />
          Alumni Achievements
        </h4>
        <p className="text-gray-700 text-sm">
          Our alumni are working in top companies worldwide including Google, Microsoft, Apple, Amazon, 
          and many successful startups. They hold leadership positions and are making significant 
          contributions to technology and innovation.
        </p>
      </div>
    </div>
  );
};

export default AlumniSection;