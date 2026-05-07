
import React from 'react';
import DSWLayout from '@/components/dsw/DSWLayout';
import { Building2, GraduationCap, Award, Target, BookOpen, Users, Trophy, FileText } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const S3Centre = () => {
  return (
    <DSWLayout title="Single Window Students Service Centre (S3)">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-aemet-navy/10 to-aemet-blue/10 rounded-lg p-8 mb-12 shadow-md">
        <h1 className="text-3xl md:text-4xl font-bold text-aemet-navy mb-4">Single Window Students Service Centre (S3)</h1>
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="md:w-2/3">
            <p className="text-gray-700 leading-relaxed">
              The Single Window Students Service Centre (S3) at AMET University serves as a comprehensive one-stop solution for all student-related services, ensuring comfort, safety, and holistic development of students through various support systems and facilities.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <div className="bg-white p-5 rounded-full shadow-lg">
              <Building2 className="h-20 w-20 text-aemet-blue" />
            </div>
          </div>
        </div>
      </div>

      {/* Dean Profile Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-aemet-navy mb-6 flex items-center gap-2">
          <Users className="h-6 w-6 text-aemet-blue" />
          <span>Dean - Students Welfare</span>
        </h2>
        
        <Card className="border-aemet-blue/20">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4 flex justify-center">
                <div className="bg-gradient-to-br from-aemet-blue/20 to-aemet-navy/20 p-6 rounded-lg">
                  <div className="w-32 h-32 bg-aemet-navy/10 rounded-full flex items-center justify-center">
                    <Users className="h-16 w-16 text-aemet-navy" />
                  </div>
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold text-aemet-navy mb-2">Dr. N. R. Ramkumar</h3>
                <p className="text-aemet-blue font-medium mb-4">Dean – Students Welfare | Director – Physical Education | Joint Registrar</p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dr. N. R. Ramkumar is among the senior academic-administrative leaders at AMET University — combining responsibilities as Dean (Students Welfare), Director of Physical Education, and holding registrar-level administrative representation. He brings decades of experience in student administration, sports and physical education, and a track record of promoting holistic student welfare.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Under his oversight, AMET's student support, sports, and extra-curricular initiatives are shaped — reflecting the institution's commitment to well-rounded maritime education beyond just academics.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Education & Qualifications */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-aemet-navy mb-6 flex items-center gap-2">
          <GraduationCap className="h-6 w-6 text-aemet-blue" />
          <span>Education & Qualifications</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-aemet-blue/20 hover:shadow-md transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="font-semibold text-aemet-navy mb-3">Academic Qualifications</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-aemet-blue rounded-full"></div>
                  M.Com
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-aemet-blue rounded-full"></div>
                  M.P.E.S.
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-aemet-blue rounded-full"></div>
                  M.Phil. (N.I.S.)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-aemet-blue rounded-full"></div>
                  P.G.D.E.M.
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-aemet-blue rounded-full"></div>
                  Ph.D.
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-aemet-blue/20 hover:shadow-md transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="font-semibold text-aemet-navy mb-3">Area of Specialization</h3>
              <p className="text-gray-700 mb-4">Physical Education and Sports, including multiple games and sports disciplines.</p>
              <h3 className="font-semibold text-aemet-navy mb-3">Experience</h3>
              <p className="text-gray-700">About 28 years of teaching experience in Physical Education and Sports Administration.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Awards & Achievements */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-aemet-navy mb-6 flex items-center gap-2">
          <Award className="h-6 w-6 text-aemet-blue" />
          <span>Awards & Achievements</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-aemet-blue/20 hover:shadow-md transition-all duration-300 bg-gradient-to-br from-yellow-50 to-white">
            <CardContent className="p-6 text-center">
              <Trophy className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="font-semibold text-aemet-navy mb-2">Dr. S. Radhakrishnan Best Teacher Award</h3>
              <p className="text-gray-600 text-sm">Received for two consecutive years (2020–21 and 2021–22)</p>
            </CardContent>
          </Card>
          
          <Card className="border-aemet-blue/20 hover:shadow-md transition-all duration-300 bg-gradient-to-br from-blue-50 to-white">
            <CardContent className="p-6 text-center">
              <Users className="h-12 w-12 text-aemet-blue mx-auto mb-4" />
              <h3 className="font-semibold text-aemet-navy mb-2">AIU Sports Board Representative</h3>
              <p className="text-gray-600 text-sm">National representative on Association of Indian Universities Sports Board</p>
            </CardContent>
          </Card>
          
          <Card className="border-aemet-blue/20 hover:shadow-md transition-all duration-300 bg-gradient-to-br from-green-50 to-white">
            <CardContent className="p-6 text-center">
              <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-aemet-navy mb-2">15+ National AIU Tournaments</h3>
              <p className="text-gray-600 text-sm">Coordinated tournaments in Tug of War, Table Tennis, Volleyball, etc.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Academic Output */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-aemet-navy mb-6 flex items-center gap-2">
          <FileText className="h-6 w-6 text-aemet-blue" />
          <span>Academic Output & Sports Focus</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-aemet-blue/20 hover:shadow-md transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="font-semibold text-aemet-navy mb-4">Publications</h3>
              <div className="flex gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-aemet-blue">35</div>
                  <div className="text-gray-600 text-sm">Journal Papers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-aemet-blue">2</div>
                  <div className="text-gray-600 text-sm">Books</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-aemet-blue/20 hover:shadow-md transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="font-semibold text-aemet-navy mb-4">Sports Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {['Cricket', 'Handball', 'Tennis', 'Table Tennis', 'Volleyball', 'Swimming', 'Kabaddi', 'Basketball'].map((sport, idx) => (
                  <span key={idx} className="bg-aemet-blue/10 text-aemet-navy px-3 py-1 rounded-full text-sm">
                    {sport}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Vision & Role */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-aemet-navy mb-6 flex items-center gap-2">
          <Target className="h-6 w-6 text-aemet-blue" />
          <span>Role & Vision as Dean – Students Welfare</span>
        </h2>
        
        <Card className="border-aemet-blue/20 bg-gradient-to-r from-aemet-blue/5 to-aemet-navy/5">
          <CardContent className="p-6">
            <p className="text-gray-700 leading-relaxed mb-4">
              Dr. N. R. Ramkumar's vision emphasizes holistic student development: ensuring comfort and safety for students, offering them platforms for extracurricular/co-curricular growth (student council, clubs, cells, community/student support systems), and aiming for well-rounded development beyond academics.
            </p>
            <p className="text-gray-700 leading-relaxed">
              He underscores the importance of co-curricular and extra-curricular activities (sports, social clubs, cultural clubs etc.) in shaping students as future leaders and responsible ambassadors of AMET.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Administrative Responsibilities */}
      <div>
        <h2 className="text-2xl font-semibold text-aemet-navy mb-6 flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-aemet-blue" />
          <span>Administrative Responsibilities</span>
        </h2>
        
        <div className="bg-white rounded-lg shadow-md p-6 border border-aemet-blue/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Oversight of student welfare and support systems",
              "Extracurricular & co-curricular activities management",
              "Sports administration and coordination",
              "Student council facilitation",
              "Clubs and cells coordination",
              "Hostel and transport services oversight",
              "Student facilitation services (Nodal Officer)",
              "Mess committee coordination",
              "Health centre management",
              "Outreach programmes coordination",
              "Member of Academic Council (2024-25)",
              "Various institutional committees participation"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <div className="bg-aemet-blue text-white rounded-full w-6 h-6 flex-shrink-0 flex items-center justify-center mt-0.5 text-xs">
                  ✓
                </div>
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DSWLayout>
  );
};

export default S3Centre;
