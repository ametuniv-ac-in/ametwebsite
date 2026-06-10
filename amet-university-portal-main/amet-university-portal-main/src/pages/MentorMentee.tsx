
import React from 'react';
import Layout from '@/components/Layout';
import { BookOpen, Target, UserCheck, MessageSquare, LineChart, Users, Award, Lightbulb, GraduationCap, Star } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const MentorMentee = () => {
  return (
    <Layout title="Mentor Mentee Program | AMET University">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="max-w-5xl mx-auto pt-16 md:pt-20">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-aemet-navy/10 to-aemet-blue/10 rounded-lg p-8 mb-12 shadow-md">
            <h1 className="text-3xl md:text-4xl font-bold text-aemet-navy mb-4">Mentor Mentee Program</h1>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="md:w-2/3">
                <p className="text-gray-700 leading-relaxed">
                  AMET has formulated a system of student support and mentoring in a structured manner. The student support and mentoring are offered to the student's right from the admission till their graduation. Here, an effective mentoring relationship is characterized by mutual respect, trust, understanding, and empathy.
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="bg-white p-5 rounded-full shadow-lg">
                  <BookOpen className="h-20 w-20 text-aemet-blue" />
                </div>
              </div>
            </div>
          </div>

          {/* Main Content with Cards Layout */}
          <div className="space-y-12 animate-fade-in">
            {/* Introduction Card */}
            <Card className="border-aemet-blue/20 overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-aemet-blue/20 to-aemet-blue/5 p-6">
                  <div className="flex items-start gap-4">
                    <GraduationCap className="h-8 w-8 text-aemet-blue shrink-0 mt-1" />
                    <div>
                      <h2 className="text-2xl font-semibold text-aemet-navy mb-4">AMET University Mentoring Program</h2>
                      <p className="text-gray-700 leading-relaxed">
                        Our mentors are able to share life experiences and wisdom, as well as technical expertise with the students. They are good listeners, good observers, and good problem-solvers. They make an effort to know, accept and respect the goals and interests of a student. In the end, they establish an environment in which the student's accomplishment is limited only by the extent of his or her talent.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Objectives Section */}
            <div>
              <h2 className="text-2xl font-semibold text-aemet-navy mb-6 flex items-center gap-2">
                <Target className="h-6 w-6 text-aemet-blue" />
                <span>Objectives of Mentoring Program</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: <Users className="h-10 w-10 text-aemet-blue" />, text: "To interact with students about their need, problems, difficulties and address them effectively." },
                  { icon: <Award className="h-10 w-10 text-aemet-blue" />, text: "To mentor students to participate in various technical and cultural events for their overall development." },
                  { icon: <Lightbulb className="h-10 w-10 text-aemet-blue" />, text: "To regularly observes the overall growth of student by updating the green card and provide counselling whenever required." },
                  { icon: <Star className="h-10 w-10 text-aemet-blue" />, text: "To guide the students to ease the transition from school to work." },
                  { icon: <Users className="h-10 w-10 text-aemet-blue" />, text: "To gain access to the professional community." }
                ].map((item, idx) => (
                  <Card key={idx} className="hover:shadow-md transition-all duration-300 border-aemet-blue/20">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="shrink-0 bg-aemet-navy/5 p-3 rounded-full">
                          {item.icon}
                        </div>
                        <p className="text-gray-700">{item.text}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Responsibilities Section */}
            <div>
              <h2 className="text-2xl font-semibold text-aemet-navy mb-6 flex items-center gap-2">
                <UserCheck className="h-6 w-6 text-aemet-blue" />
                <span>Responsibilities of Mentor</span>
              </h2>
              
              <div className="bg-white rounded-lg shadow-md p-6 border border-aemet-blue/20">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    "Mentoring.",
                    "Professional and Personal Guidance.",
                    "Internships, Industrial Trainings & Industry Readiness.",
                    "Higher studies exposure.",
                    "Guiding the mentee regarding choice of electives, add on courses (NPTEL, SWAYAM, MOOC & Value Added Courses), external certifications and project works.",
                    "Participation in co-curricular and extra-curricular activities.",
                    "Providing special attention on slow learners."
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="bg-aemet-blue text-white rounded-full w-6 h-6 flex-shrink-0 flex items-center justify-center mt-0.5">
                        {idx + 1}
                      </div>
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Issues Section */}
            <div>
              <h2 className="text-2xl font-semibold text-aemet-navy mb-6 flex items-center gap-2">
                <MessageSquare className="h-6 w-6 text-aemet-blue" />
                <span>Issues to be discussed with the students by mentor</span>
              </h2>
              
              <div className="bg-gradient-to-r from-aemet-blue/10 to-white p-6 rounded-lg shadow-md border border-aemet-blue/20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "Personal study timetable.",
                    "Attendance in the classes and practical.",
                    "Economic status.",
                    "Area of Interest.",
                    "Hostel / Food issues.",
                    "Confidence level.",
                    "Personal, familial, social and academic issues."
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-aemet-blue rounded-full"></div>
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Frequency Section */}
            <Card className="border-aemet-blue/20 overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-aemet-navy/10 p-6">
                  <div className="flex items-start gap-4">
                    <MessageSquare className="h-6 w-6 text-aemet-blue shrink-0 mt-1" />
                    <div>
                      <h2 className="text-2xl font-semibold text-aemet-navy mb-4">Frequency of meeting</h2>
                      <p className="text-gray-700 leading-relaxed mb-0">
                        In AMET, we follow the best possible mentoring system (i.e.) Total Development Mentoring System for the benefit of the students. The mentor mentee ratio is 1:20 which greatly helps the mentor to focus on all the issues raised by the students. The mentor meets the student once in a month and whenever required to discuss about the academics & other beneficiary topics.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Feedback System */}
            <div>
              <h2 className="text-2xl font-semibold text-aemet-navy mb-6 flex items-center gap-2">
                <LineChart className="h-6 w-6 text-aemet-blue" />
                <span>Feedback System</span>
              </h2>
              
              <div className="bg-white rounded-lg shadow-md p-6 border border-aemet-blue/20">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Student feedback is a mandatory procedure in AMET. Every student is expected to give the feedback once in a semester on various parameters. The feedback is regarding course coverage and other parameters to improve the course delivery methodologies etc.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  Feedback is collected in Online. Software with the parameters to be considered, the name of the faculty handling the subjects for each class is prepared. A schedule is prepared for feedback to be given by all classes. The students of each class go to the laboratories assigned for them, use their login ID and password and give confidential feedback for each faculty handling class for them based on a standard questionnaire.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  Feedback about the department and institution is received from the students and the parents through suggestion box and Email. It focuses on the infrastructures, facilities and practices.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-0">
                  Vice Chancellor and HOD addresses student representatives from each year to obtain feedback and suggestions regarding academic and co-curricular activities directly. This feedback is then shared with concerned faculty members for remedial actions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MentorMentee;
