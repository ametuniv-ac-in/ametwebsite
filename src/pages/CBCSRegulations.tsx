import React from 'react';
import Layout from '@/components/Layout';
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, FileDown, Users, Target, Award, Clock } from 'lucide-react';

const CBCSRegulations = () => {
  return (
    <Layout>
      <div className="bg-gray-50 py-3 border-b">
        <div className="container mx-auto px-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Academics</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>CBCS Regulations 2023</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      
      <div className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-aemet-navy mb-8 text-center">CBCS Regulations 2023</h1>
          
          <div className="mb-12 max-w-3xl mx-auto">
            <p className="text-center text-gray-600 leading-relaxed">
              The Choice Based Credit System (CBCS) at AMET University provides flexibility in course selection, 
              promotes interdisciplinary learning, and ensures global compatibility in education standards.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Introduction */}
            <Card className="border-l-4 border-l-aemet-blue">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <BookOpen className="h-8 w-8 text-aemet-blue mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-aemet-navy mb-4">About CBCS at AMET University</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      The Choice Based Credit System (CBCS) is a flexible system of learning that permits students 
                      to choose courses from the prescribed courses comprising core, elective/minor or 
                      skill-based courses. The CBCS provides an opportunity for students to choose courses 
                      from a wide gamut of courses offered by the university.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Under CBCS, each course is assigned credit points based on the number of hours of 
                      instruction required per week. The performance of a student in each course is 
                      indicated by a grade point which is assigned based on the performance.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Features */}
            <div>
              <h2 className="text-2xl font-bold text-aemet-navy mb-8 flex items-center gap-2">
                <Target className="h-6 w-6 text-aemet-blue" />
                Key Features of CBCS
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <Users className="h-8 w-8 text-aemet-blue" />,
                    title: "Student-Centric Approach",
                    description: "Flexible curriculum allowing students to choose courses based on their interests and career goals."
                  },
                  {
                    icon: <Award className="h-8 w-8 text-aemet-blue" />,
                    title: "Credit-Based Assessment",
                    description: "Standardized credit system ensuring transparency and facilitating student mobility."
                  },
                  {
                    icon: <BookOpen className="h-8 w-8 text-aemet-blue" />,
                    title: "Interdisciplinary Learning",
                    description: "Opportunity to study courses across different disciplines and faculties."
                  },
                  {
                    icon: <Clock className="h-8 w-8 text-aemet-blue" />,
                    title: "Flexible Progression",
                    description: "Multiple entry and exit points with lateral and vertical mobility in the system."
                  }
                ].map((feature, index) => (
                  <Card key={index} className="hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-aemet-navy/10 p-3 rounded-full">
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-aemet-navy mb-2">{feature.title}</h3>
                          <p className="text-gray-700">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Course Structure */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-aemet-navy mb-6">Course Structure Under CBCS</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      title: "Core Courses",
                      description: "Mandatory courses that students must take in their chosen discipline",
                      percentage: "40-50%"
                    },
                    {
                      title: "Elective Courses", 
                      description: "Courses that students can choose from a pool of available options",
                      percentage: "30-40%"
                    },
                    {
                      title: "Ability Enhancement",
                      description: "Courses focused on developing language and communication skills",
                      percentage: "10-15%"
                    },
                    {
                      title: "Skill Enhancement",
                      description: "Value-added courses providing employable skills and competencies",
                      percentage: "10-15%"
                    }
                  ].map((course, index) => (
                    <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                      <h3 className="text-lg font-semibold text-aemet-navy mb-2">{course.title}</h3>
                      <p className="text-2xl font-bold text-aemet-blue mb-2">{course.percentage}</p>
                      <p className="text-sm text-gray-700">{course.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Grading System */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-aemet-navy mb-6">Grading System</h2>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-aemet-navy text-white">
                        <th className="border border-gray-300 p-3 text-left">Grade</th>
                        <th className="border border-gray-300 p-3 text-left">Grade Points</th>
                        <th className="border border-gray-300 p-3 text-left">Percentage Range</th>
                        <th className="border border-gray-300 p-3 text-left">Performance Level</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { grade: "O", points: "10", range: "90-100%", level: "Outstanding" },
                        { grade: "A+", points: "9", range: "80-89%", level: "Excellent" },
                        { grade: "A", points: "8", range: "70-79%", level: "Very Good" },
                        { grade: "B+", points: "7", range: "60-69%", level: "Good" },
                        { grade: "B", points: "6", range: "55-59%", level: "Above Average" },
                        { grade: "C", points: "5", range: "50-54%", level: "Average" },
                        { grade: "P", points: "4", range: "40-49%", level: "Pass" },
                        { grade: "F", points: "0", range: "Below 40%", level: "Fail" }
                      ].map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                          <td className="border border-gray-300 p-3 font-semibold text-aemet-navy">{row.grade}</td>
                          <td className="border border-gray-300 p-3">{row.points}</td>
                          <td className="border border-gray-300 p-3">{row.range}</td>
                          <td className="border border-gray-300 p-3">{row.level}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Download Section */}
            <Card className="bg-gray-50">
              <CardContent className="p-8">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-aemet-navy mb-4">CBCS Regulations Document</h2>
                  <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                    Download the complete CBCS Regulations 2023 document for detailed information 
                    about course structure, credit system, and academic policies.
                  </p>
                  <a href="/documents/AMET-CBCS-Regulations-2023.pdf" download>
                    <Button className="bg-aemet-navy hover:bg-aemet-blue transition-colors text-lg px-8 py-3">
                      <FileDown className="mr-2 h-5 w-5" />
                      Download CBCS Regulations 2023
                    </Button>
                  </a>
                  <p className="text-sm text-gray-600 mt-4">
                    PDF Format | 2.8 MB | Last Updated: August 2023
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-aemet-navy mb-2">Need Help with CBCS?</h3>
                <p className="text-gray-700 mb-4">
                  For any queries regarding CBCS regulations or course selection, contact the Academic Office.
                </p>
                <p className="text-sm text-gray-600">
                  Email: <a href="mailto:academics@amet.ac.in" className="text-aemet-blue hover:underline">academics@amet.ac.in</a> | 
                  Phone: +91-44-2747-4756
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CBCSRegulations;