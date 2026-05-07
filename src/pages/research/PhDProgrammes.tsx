import React from 'react';
import ResearchLayout from '@/components/research/ResearchLayout';
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, BookOpen, Users, CheckCircle } from 'lucide-react';

const PhDProgrammes = () => {
  const phdDisciplines = [
    "Marine Engineering",
    "Computer Science and Engineering",
    "Electrical and Electronics Engineering",
    "Mechanical Engineering",
    "Mining Engineering",
    "Naval Architecture and Offshore Engineering",
    "Petroleum Engineering",
    "AMET Business School",
    "Marine Biotechnology",
    "Food Processing Technology",
    "Nautical Science",
    "Physics",
    "Mathematics",
    "Chemistry",
    "English"
  ];

  return (
    <ResearchLayout title="PhD Programmes">
      <div className="py-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-aemet-navy mb-4">PhD Programmes</h1>
          <p className="max-w-3xl mx-auto text-gray-600">
            AMET University offers doctoral programs across various disciplines
          </p>
          <Separator className="max-w-md mx-auto my-6 bg-aemet-blue/30" />
        </div>

        <div className="max-w-5xl mx-auto">
          {/* PhD Programmes Section */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="h-8 w-8 text-aemet-navy" />
              <h2 className="text-2xl font-bold text-aemet-navy">Explore Our PhD Programmes</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {phdDisciplines.map((discipline, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow hover:border-aemet-blue/50">
                  <CardContent className="pt-6 text-center">
                    <BookOpen className="h-6 w-6 text-aemet-blue mx-auto mb-3" />
                    <p className="font-medium text-gray-800">{discipline}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* D.Sc. Program Section */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-aemet-navy/5 to-aemet-blue/5 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Award className="h-8 w-8 text-aemet-navy" />
                <h2 className="text-2xl font-bold text-aemet-navy">Doctor of Science (D.Sc.) Program</h2>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                The Doctor of Science (D.Sc.) is the highest academic degree conferred by AMET Deemed to be University. It is awarded to candidates who have demonstrated exceptional post-doctoral research through the submission of a thesis based on original, independent research. This research must contribute significantly to the advancement of knowledge in a specific field of study, and it must be approved by the Board of Examiners, as required by the University's regulations.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The D.Sc. program emphasizes original research, critical thinking, and notable contributions to a particular scientific discipline. The regulations governing the D.Sc. program are subject to modification from time to time by the competent authorities of the University.
              </p>
            </div>
          </section>

          {/* Eligibility Section */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-8 w-8 text-aemet-navy" />
              <h2 className="text-2xl font-bold text-aemet-navy">General Eligibility for Admission to D.Sc. Program</h2>
            </div>
            
            <p className="text-gray-700 mb-6">
              Candidates seeking admission to the D.Sc. program at AMET University must meet the following eligibility criteria:
            </p>

            <div className="space-y-6">
              {/* Ph.D. Qualification */}
              <Card className="border-l-4 border-l-aemet-navy">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-aemet-navy mb-4">Ph.D. Qualification</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">The candidate must have obtained a Doctor of Philosophy (Ph.D.) degree either from AMET University or any other University recognized by the UGC or an equivalent foreign university.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">For candidates with a Ph.D. from other universities or institutes in India or abroad, a genuineness certificate issued by a competent authority of the University is mandatory for registration.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Post-Doctoral Research */}
              <Card className="border-l-4 border-l-aemet-blue">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-aemet-navy mb-4">Post-Doctoral Research</h3>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Candidates must have pursued outstanding post-doctoral research in the relevant discipline after obtaining their Ph.D. degree.</span>
                  </div>
                </CardContent>
              </Card>

              <p className="text-gray-700 font-medium">In addition, candidates must satisfy the following specific conditions:</p>

              {/* Professional Experience */}
              <Card className="border-l-4 border-l-aemet-navy">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-aemet-navy mb-4">Professional Experience</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">The candidate should have been a regular employee at AMET University, another recognized university, or a research institute for a minimum of 25 years of professional experience. Out of these 25 years, at least 10 years must have been served as a Professor or in a comparable academic or research position in industry or research institutions, following the completion of the Ph.D. degree.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">The candidate's research work should reflect a consistent record of accomplishment in advanced research within these recognized institutions.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Publications Requirement */}
              <Card className="border-l-4 border-l-aemet-blue">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-aemet-navy mb-4">Publications Requirement</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">The candidate must have published at least 25 research articles in SCI journals (Science Citation Index) with an impact factor of 1.0 or higher, where the candidate must have been the single author, corresponding author, or first author.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">The average impact factor of the journals in which these 25 articles have been published should be not less than 1.5.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* h-index Requirement */}
              <Card className="border-l-4 border-l-aemet-navy">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-aemet-navy mb-4">h-index Requirement</h3>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">The candidate must have an h-index greater than 25 to qualify for the D.Sc. program.</span>
                  </div>
                </CardContent>
              </Card>

              {/* No Age Limit */}
              <Card className="border-l-4 border-l-aemet-blue">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-aemet-navy mb-4">No Age Limit</h3>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">There is no age limit for registration or submission of the D.Sc. thesis.</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </ResearchLayout>
  );
};

export default PhDProgrammes;
