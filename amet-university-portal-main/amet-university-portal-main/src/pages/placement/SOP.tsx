
import React from 'react';
import PlacementLayout from '@/components/placement/PlacementLayout';

const SOP = () => {
  return (
    <PlacementLayout title="SOP for Recruitment / Placement">
      <div className="container mx-auto py-4">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-aemet-navy mb-4">
              Standard Operating Procedure for Recruitment and Placement
            </h1>
            <p className="text-gray-700">
              This document outlines the standard operating procedures for the recruitment and placement process 
              at AMET University. These procedures ensure consistency, transparency, and efficiency in connecting 
              our students with employment opportunities in the maritime industry.
            </p>
          </div>
          
          <div className="mb-10">
            <h2 className="text-xl font-bold text-aemet-blue mb-4">1. Pre-Placement Planning</h2>
            <div className="space-y-4">
              <div className="p-4 border-l-4 border-aemet-blue bg-aemet-blue/5">
                <h3 className="font-semibold mb-2">1.1 Annual Calendar Preparation</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Placement Committee meets by March 15th to finalize the placement calendar for the upcoming academic year</li>
                  <li>Calendar includes pre-placement training schedules, company visit dates, and other key milestones</li>
                  <li>Calendar is published by April 1st and shared with all stakeholders</li>
                </ul>
              </div>
              
              <div className="p-4 border-l-4 border-aemet-blue bg-aemet-blue/5">
                <h3 className="font-semibold mb-2">1.2 Industry Outreach</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Industry Relations Team contacts potential recruiters by April 15th</li>
                  <li>Updated placement brochures sent to all partner companies by May 1st</li>
                  <li>One-on-one meetings with key recruiters scheduled between May and July</li>
                </ul>
              </div>
              
              <div className="p-4 border-l-4 border-aemet-blue bg-aemet-blue/5">
                <h3 className="font-semibold mb-2">1.3 Student Registration Process</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Placement orientation for final year students conducted in the first week of July</li>
                  <li>Registration portal opens by July 15th and closes on July 31st</li>
                  <li>Verification of student credentials completed by August 15th</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mb-10">
            <h2 className="text-xl font-bold text-aemet-blue mb-4">2. Preparation Phase</h2>
            <div className="space-y-4">
              <div className="p-4 border-l-4 border-aemet-blue bg-aemet-blue/5">
                <h3 className="font-semibold mb-2">2.1 Resume Development</h3>
                <ol className="list-decimal pl-6 space-y-1">
                  <li>Resume format templates provided to students by August 1st</li>
                  <li>Resume writing workshops conducted during the first two weeks of August</li>
                  <li>First draft submission deadline: August 20th</li>
                  <li>Faculty review completed by August 25th</li>
                  <li>Final resume submission deadline: August 31st</li>
                </ol>
              </div>
              
              <div className="p-4 border-l-4 border-aemet-blue bg-aemet-blue/5">
                <h3 className="font-semibold mb-2">2.2 Student Database Creation</h3>
                <ol className="list-decimal pl-6 space-y-1">
                  <li>Consolidated student database prepared by September 5th</li>
                  <li>Database includes academic records, certifications, skills, and career preferences</li>
                  <li>Database verification by students: September 6-10</li>
                  <li>Final database preparation: September 15th</li>
                </ol>
              </div>
              
              <div className="p-4 border-l-4 border-aemet-blue bg-aemet-blue/5">
                <h3 className="font-semibold mb-2">2.3 Pre-Placement Training</h3>
                <ol className="list-decimal pl-6 space-y-1">
                  <li>Aptitude test preparation: August 15-31</li>
                  <li>Technical interview preparation: September 1-15</li>
                  <li>HR interview and group discussion practice: September 16-30</li>
                  <li>Mock interview sessions: October 1-15</li>
                </ol>
              </div>
            </div>
          </div>
          
          <div className="mb-10">
            <h2 className="text-xl font-bold text-aemet-blue mb-4">3. Recruitment Process</h2>
            <div className="space-y-4">
              <div className="p-4 border-l-4 border-aemet-blue bg-aemet-blue/5">
                <h3 className="font-semibold mb-2">3.1 Company Registration</h3>
                <ol className="list-decimal pl-6 space-y-1">
                  <li>Company provides job description, eligibility criteria, and recruitment process details</li>
                  <li>Placement Office reviews and confirms participation within 3 working days</li>
                  <li>Date finalization and logistics coordination completed within 5 working days</li>
                </ol>
              </div>
              
              <div className="p-4 border-l-4 border-aemet-blue bg-aemet-blue/5">
                <h3 className="font-semibold mb-2">3.2 Student Notification</h3>
                <ol className="list-decimal pl-6 space-y-1">
                  <li>Job notification published on placement portal at least 7 days before the recruitment date</li>
                  <li>Email notification sent to eligible students</li>
                  <li>Student application deadline: 3 days after notification</li>
                  <li>Application screening and shortlist preparation: 2 days after application deadline</li>
                </ol>
              </div>
              
              <div className="p-4 border-l-4 border-aemet-blue bg-aemet-blue/5">
                <h3 className="font-semibold mb-2">3.3 Pre-Placement Talk</h3>
                <ol className="list-decimal pl-6 space-y-1">
                  <li>Venue preparation completed 2 hours before the scheduled talk</li>
                  <li>Company representatives received by placement coordinators 30 minutes before the talk</li>
                  <li>Students must be seated 15 minutes before the scheduled start time</li>
                  <li>Attendance recorded and verified</li>
                </ol>
              </div>
              
              <div className="p-4 border-l-4 border-aemet-blue bg-aemet-blue/5">
                <h3 className="font-semibold mb-2">3.4 Selection Process</h3>
                <ol className="list-decimal pl-6 space-y-1">
                  <li>Written test/online assessment coordination as per company requirements</li>
                  <li>Group discussion facilities arranged as needed</li>
                  <li>Interview rooms prepared with necessary equipment and refreshments</li>
                  <li>Placement coordinators available throughout the process for assistance</li>
                  <li>Regular updates provided to waiting students</li>
                </ol>
              </div>
              
              <div className="p-4 border-l-4 border-aemet-blue bg-aemet-blue/5">
                <h3 className="font-semibold mb-2">3.5 Offer Process</h3>
                <ol className="list-decimal pl-6 space-y-1">
                  <li>Company provides final selection list to Placement Office within 3 days of completion</li>
                  <li>Offer letters received and processed by Placement Office within 2 working days</li>
                  <li>Students notified of offers within 24 hours of receipt</li>
                  <li>Student acceptance/rejection deadline: 24 hours after notification</li>
                  <li>Company informed of acceptances within 48 hours</li>
                </ol>
              </div>
            </div>
          </div>
          
          <div className="mb-10">
            <h2 className="text-xl font-bold text-aemet-blue mb-4">4. Post-Placement Activities</h2>
            <div className="space-y-4">
              <div className="p-4 border-l-4 border-aemet-blue bg-aemet-blue/5">
                <h3 className="font-semibold mb-2">4.1 Documentation</h3>
                <ol className="list-decimal pl-6 space-y-1">
                  <li>Placement records updated within 2 days of offer acceptance</li>
                  <li>Offer letter copies filed in student placement records</li>
                  <li>Monthly placement statistics prepared by the 5th of each month</li>
                </ol>
              </div>
              
              <div className="p-4 border-l-4 border-aemet-blue bg-aemet-blue/5">
                <h3 className="font-semibold mb-2">4.2 Feedback Collection</h3>
                <ol className="list-decimal pl-6 space-y-1">
                  <li>Company feedback collected within 7 days of recruitment drive</li>
                  <li>Student feedback collected within 3 days of recruitment process</li>
                  <li>Feedback analysis completed within 10 days</li>
                  <li>Improvement measures implemented as necessary</li>
                </ol>
              </div>
              
              <div className="p-4 border-l-4 border-aemet-blue bg-aemet-blue/5">
                <h3 className="font-semibold mb-2">4.3 Pre-Joining Support</h3>
                <ol className="list-decimal pl-6 space-y-1">
                  <li>Pre-joining documentation assistance provided to students</li>
                  <li>Industry-specific orientation conducted for placed students</li>
                  <li>Regular communication maintained with recruited students until joining</li>
                </ol>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-aemet-navy mb-4">5. Responsibility Matrix</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Process</th>
                    <th className="py-3 px-4 border-b text-left">Primary Responsibility</th>
                    <th className="py-3 px-4 border-b text-left">Secondary Responsibility</th>
                    <th className="py-3 px-4 border-b text-left">Approval Authority</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b">Calendar Preparation</td>
                    <td className="py-2 px-4 border-b">Placement Coordinator</td>
                    <td className="py-2 px-4 border-b">Training Officer</td>
                    <td className="py-2 px-4 border-b">Placement Director</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-2 px-4 border-b">Industry Outreach</td>
                    <td className="py-2 px-4 border-b">Industry Relations Officer</td>
                    <td className="py-2 px-4 border-b">Placement Coordinator</td>
                    <td className="py-2 px-4 border-b">Placement Director</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Student Registration</td>
                    <td className="py-2 px-4 border-b">Placement Assistant</td>
                    <td className="py-2 px-4 border-b">Department Coordinators</td>
                    <td className="py-2 px-4 border-b">Placement Coordinator</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-2 px-4 border-b">Resume Development</td>
                    <td className="py-2 px-4 border-b">Training Officer</td>
                    <td className="py-2 px-4 border-b">Faculty Advisors</td>
                    <td className="py-2 px-4 border-b">Placement Coordinator</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Company Registration</td>
                    <td className="py-2 px-4 border-b">Placement Coordinator</td>
                    <td className="py-2 px-4 border-b">Industry Relations Officer</td>
                    <td className="py-2 px-4 border-b">Placement Director</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-2 px-4 border-b">Selection Process</td>
                    <td className="py-2 px-4 border-b">Placement Coordinator</td>
                    <td className="py-2 px-4 border-b">Student Volunteers</td>
                    <td className="py-2 px-4 border-b">Company Representatives</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Offer Process</td>
                    <td className="py-2 px-4 border-b">Placement Assistant</td>
                    <td className="py-2 px-4 border-b">Placement Coordinator</td>
                    <td className="py-2 px-4 border-b">Placement Director</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-2 px-4 border-b">Documentation</td>
                    <td className="py-2 px-4 border-b">Placement Assistant</td>
                    <td className="py-2 px-4 border-b">Administrative Staff</td>
                    <td className="py-2 px-4 border-b">Placement Coordinator</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p className="mt-6 text-sm italic">
              This Standard Operating Procedure (SOP) is subject to revision as needed. Updates will be communicated 
              to all stakeholders. For any clarifications, please contact the Placement Director at 
              <a href="mailto:placement.director@ametuniv.ac.in" className="text-aemet-blue hover:underline ml-1">placement.director@ametuniv.ac.in</a>.
            </p>
          </div>
        </div>
      </div>
    </PlacementLayout>
  );
};

export default SOP;
