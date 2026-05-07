
import React from 'react';
import PlacementLayout from '@/components/placement/PlacementLayout';

const Activities = () => {
  const activities = [
    // 2025 Activities
    {
      title: "21 Knots Group",
      description: "Mr. Sudhir Prajapati, Senior Architect and Director–Technical from 21 Knots Group, visited our campus on 10th November 2025 to recruit B.E. Naval Architecture and Offshore Engineering students.",
      date: "10 Nov 2025",
      image: "/images/placement/21_Knots_Group_-_10_Nov_2025.jpg"
    },
    {
      title: "Landbridge Ship Management (HK) Limited",
      description: "C/E Gautam Venkataraman, Senior Technical Superintendent from Landbridge Ship Management (HK) Limited, visited our campus on 07th November 2025 to conduct a recruitment drive for ETO cadets.",
      date: "07 Nov 2025",
      image: "/images/placement/Landbridge_Ship_Management_HK_Limited_-_07_Nov_2025.jpg"
    },
    {
      title: "V.Ships",
      description: "Mr. Jure Raguz, Global Cadet Manager, along with his team from V.Ships, visited our campus on 5th November 2025 to interact with the selected cadets.",
      date: "05 Nov 2025",
      image: "/images/placement/V.Ships_-_05_Nov_2025.jpg"
    },
    {
      title: "Students' Induction Programme (SIP) 2025–26",
      description: "Capt. Sudarshan Srinivasan visited our campus on 19th August 2025 for the Students' Induction Programme (SIP) 2025–26.",
      date: "19 Aug 2025",
      image: "/images/placement/SIP_2025-26_-_19_Aug_2025.jpg"
    },
    {
      title: "NYK Shipmanagement (Singapore)",
      description: "Mr. Shigetaka Tomikawa, General Manager – Maritime Training (Singapore), Mr. Abir S. Dey, Deputy General Manager – Training, and Capt. M. Komahan, Manager, visited our campus on 7th August 2025.",
      date: "07 Aug 2025",
      image: "/images/placement/NYK_Shipmanagement_Visit_-_07_Aug_2025.jpg"
    },
    {
      title: "Northern Marine Management (India) Pvt. Ltd.",
      description: "Mr. Rahul S. Dudhade, Director–GM, and Mr. Parth Dutta, Marine Resource Manager from Northern Marine Management (India) Pvt. Ltd., visited our campus on 13th June 2025 to conduct a recruitment drive for Deck and Engine Cadets.",
      date: "13 Jun 2025",
      image: "/images/placement/Northern_Marine_Management_-_13_Jun_2025.jpg"
    },
    {
      title: "Landbridge Ship Management (HK) Ltd",
      description: "Capt. Sanjeev Verma, Managing Director from Landbridge Ship Management (HK) Ltd visited our campus on 12th June 2025.",
      date: "12 Jun 2025",
      image: "/images/placement/Landbridge_Ship_Management_Capt._Verma_-_12_Jun_2025.jpg"
    },
    {
      title: "Chellaram Shipping Pvt. Ltd.",
      description: "Capt. Ashish Mokashi, Superintendent – Manning & Training from Chellaram Shipping Pvt. Ltd., visited our campus on 29th and 30th May 2025 to conduct a recruitment drive for Deck Cadets.",
      date: "29-30 May 2025",
      image: "/images/placement/Chellaram_Shipping_-_29-30_May_2025.jpg"
    },
    {
      title: "DHL Logistics Pvt. Ltd.",
      description: "Ms. Rithika Mary Verghese, Deputy Manager – HR from DHL Logistics Pvt. Ltd., visited our campus on 19th May 2025 to recruit students from the Business School.",
      date: "19 May 2025",
      image: "/images/placement/DHL_Logistics_-_19_May_2025.jpg"
    },
    {
      title: "Wallem Group",
      description: "Capt. Ankit Singh, Assistant General Manager, and Ms. Divya Shinde, Crew Manager from Wallem Group, visited our campus on 23rd April 2025.",
      date: "23 Apr 2025",
      image: "/images/placement/Wallem_Group_-_23_Apr_2025.jpg"
    },
    {
      title: "Dynacom Tankers Management Ltd.",
      description: "Capt. T. P. V. Sathyan, General Manager, Capt. Yfantis Panagiotis, HSSE Manager, and Mrs. Schoina Christina from the Marine Department of Dynacom Tankers Management Ltd., visited our campus on 13th March 2025 to recruit Deck and Engine Cadets.",
      date: "13 Mar 2025",
      image: "/images/placement/Dynacom_Tankers_-_13_Mar_2025.jpg"
    },
    {
      title: "CMA Ships",
      description: "Mr. Francois Leray, Deputy Managing Director, Mr. Pierre Vignal, Operations Manager, Ms. Sangeeta Naik, General Manager – Human Resources, and Mr. N. Shyam Sundar, Area General Manager – South & East India from CMA Ships, visited our campus on 26th February 2025.",
      date: "26 Feb 2025",
      image: "/images/placement/CMA_Ships_-_26_Feb_2025.jpg"
    },
    {
      title: "Business School Selection Process",
      description: "Mr. Sanjay Kumar, Vice President – Sales and Operations (South Region), Mr. Sujit Kumar Baral, Vice President – LCL Export, Mr. Kamalakanth P. A., Branch Manager, and Ms. Meghna Surve, Deputy Manager – Human Resources, visited our campus on 13th February 2025 to conduct the selection process for Business School students.",
      date: "13 Feb 2025",
      image: "/images/placement/Allcargo_Logistics_-_13_Feb_2025.jpg"
    },
    {
      title: "NYK Shipmanagement (India) Pvt. Ltd.",
      description: "Capt. N. P. Singh, Deputy General Manager, and Mr. Abir S. Dey, Manager from NYK Shipmanagement (India) Pvt. Ltd., visited our campus on 13th February 2025 to conduct a recruitment drive.",
      date: "13 Feb 2025",
      image: "/images/placement/NYK_Shipmanagement_Recruitment_-_13_Feb_2025.jpg"
    },
    {
      title: "Synergy",
      description: "Mr. Johnson Leonard and his team from Synergy visited our campus on 10th February 2025 to interact with the sponsored cadets.",
      date: "10 Feb 2025",
      image: "/images/placement/Synergy_-_10_Feb_2025.jpg"
    },
    {
      title: "\"K\" Line Ship Management (India) Pvt. Ltd.",
      description: "Capt. Praveen Kumar Bansal, CEO & Managing Director of \"K\" Line Ship Management (India) Pvt. Ltd., visited our campus on 6th and 7th February 2025 to conduct a recruitment drive for Deck and Engine Cadets.",
      date: "06-07 Feb 2025",
      image: "/images/placement/K_Line_Ship_Management_-_06-07_Feb_2025.jpg"
    },
    {
      title: "Fleet Management Ltd.",
      description: "Capt. James Richards and Capt. Ajay Kumar from Fleet Management Ltd. visited our campus on 4th February 2025 to conduct a recruitment drive.",
      date: "04 Feb 2025",
      image: "/images/placement/Fleet_Management_Ltd_-_04_Feb_2025.jpg"
    },
    // Existing Activities
    {
      title: "M/s. Givven Logistics Pvt Ltd",
      description: "Mr. Ajit Menon, Mr. Vijay Rajendran, M/s. Givven Logistics Pvt Ltd, visited to recruit our students from AMET Business School.",
      date: "03 Feb 2023",
      image: "/images/placement/activity-1.jpg"
    },
    {
      title: "M/s. Sharaf Shipping",
      description: "Capt. Arun Gupta, Mr. Vaishak Murali, Mr. Sonu Pious, M/s. Sharaf Shipping visited to our campus.",
      date: "26 Oct 2022",
      image: "/images/placement/activity-2.jpg"
    },
    {
      title: "M/s. Synergy Maritime Pvt Ltd",
      description: "Capt. J. Kirupakaran and Brigadier Sreekumar, M/s. Synergy Maritime Pvt Ltd, visited our campus.",
      date: "13 Oct 2022",
      image: "/images/placement/activity-3.jpg"
    },
    {
      title: "M/s. NYK Shipmanagement India Pvt. Ltd.",
      description: "Mr. Kanishka Roy, Cadet Training Superintendent, M/s. NYK Shipmanagement India Pvt. Ltd., visited to recruit our students from Nautical Science.",
      date: "27 Sep 2022",
      image: "/images/placement/activity-4.jpg"
    },
    {
      title: "M/s. BP Maritime Services, Singapore",
      description: "Mr. Kevin Dsouza, Mr. Shankar Rajasekharan, Ms. Geetika Saraswat and Mr. Clarence Somasundar, M/s. BP Maritime Services, Singapore, visited to the campus.",
      date: "22 & 23 Sep 2022",
      image: "/images/placement/activity-5.jpg"
    },
    {
      title: "M/s. Fleet Management Ltd.",
      description: "Capt. James Richards, Senior Manager Training and Capt. Vinod Suryavanshi, Manager Training, M/s. Fleet Management Ltd., visited to recruit our cadets.",
      date: "21 Sep 2022",
      image: "/images/placement/activity-6.jpg"
    },
    {
      title: "M/s. New Shipping Kaisha Ltd.",
      description: "Mr. Sivananda Rajaram, Managing Director and Team from M/s. New Shipping Kaisha Ltd., Chennai visited to campus to recruit our students from DGS courses.",
      date: "26 Aug 2022",
      image: "/images/placement/activity-7.jpg"
    },
    {
      title: "M/s. Pacmak DB Naval Charterers & Consultants Pte. Ltd.",
      description: "Mr. Vignesh Sivagnanam, Lead Director (Naval Architect) and Team, M/s. Pacmak DB Naval Charterers & Consultants Pte. Ltd. visited to recruit our students from Naval Architecture.",
      date: "10 Aug 2022",
      image: "/images/placement/activity-8.jpg"
    },
    {
      title: "M/s. TCIS International India",
      description: "Mr. Nihal Ghosh, Director, M/s. TCIS International India visited to our campus to recruit our students from Naval Architecture.",
      date: "08 Aug 2022",
      image: "/images/placement/activity-9.jpg"
    },
    {
      title: "M/s. V-Group",
      description: "Capt. Sartaj Gill, Global Director Crew Culture Competence and Ms. Tatyana Melnychenko, Head of Global Cadet Program, M/s. V-Group visited our campus.",
      date: "17 Jun 2022",
      image: "/images/placement/activity-10.jpg"
    },
    {
      title: "M/s. Thome India Pvt. Ltd",
      description: "Capt. Veeresh Bahadur, Head of Marine HR Operation and Team, M/s. Thome India Pvt. Ltd, visited to recruit our cadets from DGS Courses.",
      date: "13 Jun 2022",
      image: "/images/placement/activity-11.jpg"
    },
    {
      title: "MAERSK",
      description: "Ms. Trine Hoffmann, Diversity & Inclusion Manager, Mr. Arvind Shankar, Marine Training Manager - Asia from MAERSK, visited our campus.",
      date: "07 & 08 Jun 2022",
      image: "/images/placement/activity-12.jpg"
    },
    {
      title: "M/s. OPTIO Marine Pvt. Ltd",
      description: "Mr. Rogero Fernando, Director & COO and Team from M/s. OPTIO Marine Pvt. Ltd, Chennai, visited to recruit our students from Naval Architecture.",
      date: "25 May 2022",
      image: "/images/placement/activity-13.jpg"
    },
    {
      title: "Norinco Pvt. Ltd",
      description: "Mr. A. Karuppan Chetty, Head AMC Operations and Team of Norinco Pvt. Ltd, visited to recruit our students.",
      date: "23 May 2022",
      image: "/images/placement/activity-14.jpg"
    },
    {
      title: "M/s. Fugro Survey India Pvt, Mumbai",
      description: "Mr. Kapil Mehta, ROV Services Manager, Ms. Sarika Ranadive, Country HR Manager, M/s. Fugro Survey India Pvt, Mumbai, visited to recruit our students from Naval Architecture.",
      date: "19 May 2022",
      image: "/images/placement/activity-15.jpg"
    },
    {
      title: "M/s. Aurus Ship Management Pvt. Ltd.",
      description: "Mr. Kalisaran Ramalingam, Branch Manager and Team, M/s. Aurus Ship Management Pvt. Ltd. Chennai, visited our campus to recruit our cadets from ETO.",
      date: "28 Apr 2022",
      image: "/images/placement/activity-16.jpg"
    },
    {
      title: "M/s. Unique Solution",
      description: "Mr. Sayuj D, CMD & Founder, M/s. Unique Solution, visited to recruit our students from Naval Architecture.",
      date: "19 Apr 2022",
      image: "/images/placement/activity-17.jpg"
    },
    {
      title: "M/s. Deugro Projects India Pvt Ltd",
      description: "Mr. Vijith Vasudevan, General Manager and Team, M/s. Deugro Projects India Pvt Ltd, visited to recruit our students from AMET Business School.",
      date: "12 Apr 2022",
      image: "/images/placement/activity-18.jpg"
    },
    {
      title: "M/s. OSM Asia Singapore & OSM Fleet Management India Pvt. Ltd",
      description: "Ms. Simona Toma, MD, Mr. Tihomir Baraba, GM, Capt. Jatinder Bhoai, GM, M/s. OSM Asia Singapore and Capt. Ramaswamy, CEO, M/s. OSM Fleet Management India Pvt. Ltd, visited our campus.",
      date: "01 Apr 2022",
      image: "/images/placement/activity-19.jpg"
    },
    {
      title: "M/s. Capital Ship Solutions",
      description: "Mr. Akhil Augustine and Team, Naval Architects, M/s. Capital Ship Solutions visited to recruit our students from NA&OE.",
      date: "31 Mar 2022",
      image: "/images/placement/activity-20.jpg"
    },
    {
      title: "M/s. V Ships",
      description: "Capt. Sujit Vaidya, Crew Assessment & Global Cadet, Management Director and Romell Tiwari, Cadet planner M/s. V Ships visited.",
      date: "28 Mar 2022",
      image: "/images/placement/activity-21.jpg"
    },
    {
      title: "M/s. ACCEL",
      description: "Mr. Sanjay Tiwary, Dy. GM, Mr. Rony Paul, AGM and Mr. Abhishek Sharma, HR, M/s. ACCEL visited to recruit our students from NA&OE.",
      date: "28 Mar 2022",
      image: "/images/placement/activity-22.jpg"
    },
    {
      title: "M/s. Fly Jac Logistics Pvt. Ltd",
      description: "Appointment order received by the students of MBA, from M/s. Fly Jac Logistics Pvt. Ltd.",
      date: "17 Mar 2022",
      image: "/images/placement/activity-23.jpg"
    },
    {
      title: "M/s. ASP Ships India Pvt Ltd",
      description: "Capt. Vaibhav S Rupade, GM & Capt. Shailesh Kulkarni, Manager Quality Assurance & Training, M/s. ASP Ships India Pvt Ltd, visited for recruiting DGS cadets.",
      date: "20 - 22 Dec 2021",
      image: "/images/placement/activity-24.jpg"
    },
    {
      title: "Synergy Maritime Pvt Ltd",
      description: "Mr. Mukesh Keni, Technical Superintendent, Synergy Maritime Pvt Ltd, visited for recruiting students from NA&OE.",
      date: "20 Dec 2021",
      image: "/images/placement/activity-25.jpg"
    },
  ];

  return (
    <PlacementLayout title="Placement Activities">
      <div className="container mx-auto py-4">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-aemet-navy mb-4">
              Placement Activities at AMET
            </h1>
            <p className="text-gray-700 max-w-3xl mx-auto">
              AMET University's Placement Cell organizes various activities throughout the academic year to prepare students 
              for successful careers in the maritime industry and facilitate their recruitment by leading companies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {activities.map((activity, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={activity.image} 
                    alt={activity.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-2 text-aemet-blue">{activity.title}</h3>
                  <p className="text-gray-600 mb-3">{activity.description}</p>
                  <p className="text-sm text-gray-500 italic">When: {activity.date}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-aemet-blue/10 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-bold text-aemet-navy mb-4">
              Year-Round Support Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-aemet-blue text-white h-8 w-8 flex items-center justify-center shrink-0">1</div>
                <div>
                  <h3 className="font-semibold mb-1">Career Counseling</h3>
                  <p className="text-sm text-gray-600">One-on-one guidance sessions with placement officers to help students identify suitable career paths.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-aemet-blue text-white h-8 w-8 flex items-center justify-center shrink-0">2</div>
                <div>
                  <h3 className="font-semibold mb-1">Resume Building Assistance</h3>
                  <p className="text-sm text-gray-600">Professional help with creating impactful resumes that highlight relevant skills and experiences.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-aemet-blue text-white h-8 w-8 flex items-center justify-center shrink-0">3</div>
                <div>
                  <h3 className="font-semibold mb-1">Communication Skills Development</h3>
                  <p className="text-sm text-gray-600">Regular workshops focusing on professional communication, presentation, and interpersonal skills.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-aemet-blue text-white h-8 w-8 flex items-center justify-center shrink-0">4</div>
                <div>
                  <h3 className="font-semibold mb-1">Alumni Connect Program</h3>
                  <p className="text-sm text-gray-600">Platform connecting current students with AMET alumni for mentorship and industry insights.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-xl font-bold text-aemet-blue mb-4">
              Recently Recruited Companies
            </h2>
            <div className="inline-block border border-gray-200 rounded-lg overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="p-3 border-b w-16">S.No</th>
                    <th className="p-3 border-b">Name of the Company</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    "A.P. Moller Singapore Pte Ltd",
                    "ACT Infraport Ltd.",
                    "Albion Engineering Pvt Ltd",
                    "Bernhard Schulte Shipmanagement India Pvt Ltd",
                    "BW Maritime Ltd",
                    "Expeditors International",
                    "Fleet Ship Management",
                    "Fynsea Lines & Logistics (P) Ltd",
                    "Goodrich Gasket Private Limited",
                    "Goodwood Marine Services Pvt. Ltd.",
                    "JSW Infrastructure",
                    "MMS Maritime (I) Pvt Ltd.",
                    "MSC Crewing Services",
                    "MSC Service Center India Pvt Limited",
                    "MSI Ship Management Pte Ltd",
                    "New Age Logistics",
                    "NTC Logistics (P) Ltd",
                    "NYK SHIPMANAGEMENT PTE LTD.",
                    "Shell Business Operations, Chennai",
                    "TechMahindra",
                    "Tomini Shipping",
                    "V Ships",
                    "Vedam Design",
                    "Vik-Sandvik Design India Pvt. Ltd."
                  ].map((company, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-3 border-b text-center">{index + 1}</td>
                      <td className="p-3 border-b">{company}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </PlacementLayout>
  );
};

export default Activities;
