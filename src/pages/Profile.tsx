import React from 'react';
import Layout from '@/components/Layout';
import { useParams } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ProfileHeader from '@/components/profile/ProfileHeader';
import VCProfileHeader from '@/components/profile/VCProfileHeader';
import Biography from '@/components/profile/Biography';
import Awards from '@/components/profile/Awards';
import MedicalInitiative from '@/components/profile/MedicalInitiative';
import SocialInitiatives from '@/components/profile/SocialInitiatives';
import { GraduationCap, Award, Globe, BookOpen, Users, Briefcase } from 'lucide-react';
import { Card } from '@/components/ui/card';
import jointRegistrarPhoto from '@/assets/joint-registrar.jpg';
import specialOfficerPhoto from '@/assets/officials/special-officer-jayaprakashvel.jpg';
import NotFoundMessage from '@/components/faculty/NotFoundMessage';

const Profile = () => {
  const { id } = useParams();

  // Profiles that appear on the Governance page
  const governanceProfileIds = [
    'j-ramachandran',
    'v-rajendran',
    'v-sangeetha-albin',
    'a-rajesh-kanna',
    'rajesh-ramachandren',
    'susheela-ramachandran',
    'g-thiruvasagam',
    'deepa-rajesh'
  ];

  // Profiles that appear on the Officials page
  const officialsProfileIds = [
    't-sasilatha',
    'nr-ramkumar',
    'srinivas-gopal',
    'm-jayaprakashvel'
  ];

  const validProfileIds = [...governanceProfileIds, ...officialsProfileIds];

  // Determine the back link based on which list the profile belongs to
  const isOfficialsProfile = id && officialsProfileIds.includes(id);
  const backLink = isOfficialsProfile ? '/governance/officials' : '/governance';
  const backLabel = isOfficialsProfile ? 'Officials' : 'Governance';

  if (id && !validProfileIds.includes(id)) {
    return (
      <Layout>
        <NotFoundMessage 
          type="profile"
          title="Profile Not Found"
          message="The faculty or staff profile you are looking for does not exist or has been moved."
        />
      </Layout>
    );
  }

  if (id === 'a-rajesh-kanna') {
    const biographyParagraphs = [
      "Dr. A. Rajesh Kanna holds 12 years of experience in the field of teaching, administration and 8 years in the field of research. He was graduated with a B.Tech in Petrochemical Technology from Bharathidasan University, Furthermore, he completed his M.Tech in Petroleum Refining and Petrochemicals from A.C. Tech, Anna University. He holds a Doctorate from the prestigious Indian Institute of Technology Madras.",
      "With over a decade of teaching experience both in India and abroad, he has travelled to several countries, including Dubai, France and Ghana. Dr. Kanna has published more than 40 research articles and holds a granted patent. He has shared his work at numerous national and international forums.",
      "Additionally, he has spear headed as Dean Administration and headed the Department of Petroleum Engineering at AMET. He has been instrumental and played a pivotal role in driving the University to reach the great heights of the horizons and in Accreditations.",
      "His innovative thoughts, creative ideas and kaizen have brought great laurels to the development of the University. He has known for his proactive communication in ensuring smooth operations. His attention to detail and organizational skills enabled him to streamline processes, which improved overall productivity at University. His collaborative approach to leadership has allowed him to build strong relationships with faculty, students, clients, parents and industry partners, ensuring that our programs remain relevant and rigorous."
    ];

    const academicRoles = (
      <div className="space-y-4">
        <p>Academic and Administrative Roles:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Dean Administration</li>
          <li>Head of Department of Petroleum Engineering</li>
          <li>12 years in teaching and administration</li>
          <li>8 years in research</li>
        </ul>
      </div>
    );

    const researchAchievements = (
      <div className="space-y-4">
        <p>Research and Publications:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Published more than 40 research articles</li>
          <li>Holds a granted patent</li>
          <li>Presented research at numerous national and international forums</li>
        </ul>
      </div>
    );

    const educationalInitiatives = (
      <div className="space-y-4">
        <p>Educational Background:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Ph.D. from Indian Institute of Technology Madras</li>
          <li>M.Tech in Petroleum Refining and Petrochemicals from A.C. Tech, Anna University</li>
          <li>B.Tech in Petrochemical Technology from Bharathidasan University</li>
          <li>International exposure including Dubai, France, and Ghana</li>
        </ul>
      </div>
    );

    const leadershipSkills = (
      <div className="space-y-4">
        <p>Leadership and Skills:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Innovative thoughts and creative ideas</li>
          <li>Kaizen approach to continuous improvement</li>
          <li>Proactive communication in ensuring smooth operations</li>
          <li>Strong attention to detail and organizational skills</li>
          <li>Collaborative approach to leadership</li>
          <li>Built strong relationships with faculty, students, and industry partners</li>
        </ul>
      </div>
    );

    return (
      <Layout>
        <div className="pt-28">
          <div className="bg-gray-50 py-3 border-b">
            <div className="container mx-auto px-4">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href={backLink}>{backLabel}</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Dr. A. Rajesh Kanna</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>

          <Separator className="border-gray-200" />

          <div className="container mx-auto px-4 py-12 mt-8">
            <div className="max-w-5xl mx-auto">
              <VCProfileHeader 
                name="Dr. A. Rajesh Kanna"
                title="Controller of Examination i/c"
                phone="91 - 44 - 2744 4625 / 627 / 628"
                imageSrc="/lovable-uploads/837e5e09-f6e4-496e-9f39-99a98c5e37a7.png"
              />

              <div className="mt-12 space-y-8">
                {/* Academic Leadership Banner */}
                <div className="bg-gradient-to-r from-aemet-navy via-aemet-blue to-purple-600 text-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="h-8 w-8" />
                    <h2 className="text-2xl font-bold">Academic Excellence & Research Innovation</h2>
                  </div>
                </div>

                {/* Education and Experience */}
                <Card className="border-none shadow-xl bg-gradient-to-br from-white to-blue-50/30">
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-aemet-blue/10 rounded-lg">
                        <GraduationCap className="h-6 w-6 text-aemet-blue" />
                      </div>
                      <h3 className="text-2xl font-bold text-aemet-navy">Education & Professional Journey</h3>
                    </div>
                    <div className="space-y-4 text-gray-700">
                      <p>Dr. A. Rajesh Kanna holds 12 years of experience in the field of teaching, administration and 8 years in the field of research. He was graduated with a B.Tech in Petrochemical Technology from Bharathidasan University. Furthermore, he completed his M.Tech in Petroleum Refining and Petrochemicals from A.C. Tech, Anna University. He holds a Doctorate from the prestigious Indian Institute of Technology Madras.</p>
                      
                      <div className="grid md:grid-cols-3 gap-4 mt-6">
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="text-3xl font-bold text-aemet-blue">12+</div>
                          <div className="text-sm text-gray-600">Years Teaching & Admin</div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="text-3xl font-bold text-purple-600">40+</div>
                          <div className="text-sm text-gray-600">Research Articles</div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="text-3xl font-bold text-amber-600">1</div>
                          <div className="text-sm text-gray-600">Granted Patent</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* International Exposure & Research */}
                <Card className="border-none shadow-xl bg-gradient-to-br from-white to-purple-50/30">
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-purple-100 rounded-lg">
                        <Globe className="h-6 w-6 text-purple-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-aemet-navy">Global Exposure & Research Excellence</h3>
                    </div>
                    <p className="text-gray-700 mb-6">With over a decade of teaching experience both in India and abroad, he has travelled to several countries, including Dubai, France and Ghana. Dr. Kanna has published more than 40 research articles and holds a granted patent. He has shared his work at numerous national and international forums.</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-aemet-navy mb-3">Academic Qualifications</h4>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-aemet-blue rounded-full mt-2"></div>
                          <span className="text-gray-700">Ph.D. from Indian Institute of Technology Madras</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-aemet-blue rounded-full mt-2"></div>
                          <span className="text-gray-700">M.Tech in Petroleum Refining and Petrochemicals</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-aemet-blue rounded-full mt-2"></div>
                          <span className="text-gray-700">B.Tech in Petrochemical Technology</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-aemet-navy mb-3">International Experience</h4>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-gradient-to-r from-aemet-blue to-purple-600 text-white rounded-full text-sm">Dubai</span>
                          <span className="px-3 py-1 bg-gradient-to-r from-aemet-blue to-purple-600 text-white rounded-full text-sm">France</span>
                          <span className="px-3 py-1 bg-gradient-to-r from-aemet-blue to-purple-600 text-white rounded-full text-sm">Ghana</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Leadership at AMET */}
                <Card className="border-none shadow-xl bg-gradient-to-br from-white to-amber-50/30">
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-amber-100 rounded-lg">
                        <Users className="h-6 w-6 text-amber-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-aemet-navy">Leadership & Institutional Development</h3>
                    </div>
                    <p className="text-gray-700 mb-6">Additionally, he has spear headed as Dean Administration and headed the Department of Petroleum Engineering at AMET. He has been instrumental and played a pivotal role in driving the University to reach the great heights of the horizons and in Accreditations.</p>
                    
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="flex items-center gap-3">
                          <Award className="h-5 w-5 text-aemet-blue" />
                          <div>
                            <div className="font-semibold text-aemet-navy">Dean Administration</div>
                            <div className="text-sm text-gray-600">Leading administrative excellence at AMET</div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="flex items-center gap-3">
                          <Award className="h-5 w-5 text-purple-600" />
                          <div>
                            <div className="font-semibold text-aemet-navy">Head of Petroleum Engineering</div>
                            <div className="text-sm text-gray-600">Driving departmental growth and innovation</div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="flex items-center gap-3">
                          <Award className="h-5 w-5 text-amber-600" />
                          <div>
                            <div className="font-semibold text-aemet-navy">Accreditation Leadership</div>
                            <div className="text-sm text-gray-600">Key role in university accreditations</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Leadership Qualities */}
                <Card className="border-none shadow-xl bg-gradient-to-br from-white to-green-50/30">
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-green-100 rounded-lg">
                        <BookOpen className="h-6 w-6 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-aemet-navy">Leadership Excellence</h3>
                    </div>
                    <p className="text-gray-700 mb-6">His innovative thoughts, creative ideas and kaizen have brought great laurels to the development of the University. He is known for his proactive communication in ensuring smooth operations. His attention to detail and organizational skills enabled him to streamline processes, which improved overall productivity at University.</p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3 p-3 bg-white rounded-lg">
                        <div className="flex-shrink-0 w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                        <span className="text-gray-700">Innovative thoughts and creative ideas</span>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-white rounded-lg">
                        <div className="flex-shrink-0 w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                        <span className="text-gray-700">Kaizen approach to continuous improvement</span>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-white rounded-lg">
                        <div className="flex-shrink-0 w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                        <span className="text-gray-700">Proactive communication excellence</span>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-white rounded-lg">
                        <div className="flex-shrink-0 w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                        <span className="text-gray-700">Strong collaborative leadership approach</span>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Vision Quote */}
                <Card className="border-none shadow-xl bg-gradient-to-r from-aemet-navy to-aemet-blue text-white">
                  <div className="p-8 text-center">
                    <Award className="h-12 w-12 mx-auto mb-4 opacity-80" />
                    <blockquote className="text-xl md:text-2xl font-light italic mb-4">
                      "Innovation, dedication, and collaborative excellence are the pillars of institutional growth and academic success."
                    </blockquote>
                    <p className="text-sm opacity-90">- Dr. A. Rajesh Kanna</p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  } else if (id === 'j-ramachandran') {
    const visionParagraphs = [
      "In the Seventies, the youth of India, especially, the educated youth of India were sinking into a depression due to lack of jobs and cursing themselves forgetting educated. A young visionary, Mr.J.Ramachandran, could not tolerate this hopelessness anymore. He came out with a solution-the NAESEY (New Era Association of Educated Self Employed Youth, a voluntary organization) and through it-- complementing the government employment exchanges and MSMEs.",
      "With NAESEY Self-employment schemes, he created employment and entrepreneurial opportunities to thousands of educated unemployed youth directly and a thousand and more indirectly. In 1993 He set up the Academy for Maritime Education and Training as an alternative to the existing system of education. He made the youth see the merit in casting the net in the unfished waters when everyone was fishing in the same old waters.",
      "He never wanted to compete, he just wanted to complement. Complement he did and history he made, when he made India proud when AMET metamorphosed to become the first ever maritime deemed to be university in India—the CRISIL rated, ISO Certified, AMET, established under section 3 of the UGC Act 1956. The national and international laurels bestowed upon it like the Seatrade awards which are known as the Oscars of the Shipping Industry, speak of its quality."
    ];

    const medicalInitiativeContent = "The unquenchable thirst of Dr. J. Ramachandran towards patronizing of quality professional education never limited to the maritime education but also extended to the field of medical education. Under the aegis of Saraswathi Ammal Educational and Charitable Trust, Dr. J. Ramachandran has established a 550-bed hospital cum Medical College in Hapur, a socially backward area in the State of Uttar Pradesh where availing immediate medical services is considered to be a nightmare for the people residing in and around that region. The Hospital is equipped with sophisticated infrastructure and served by highly qualified medical professionals and thereby rendering all medical facilities to the needy people.";

    const awards = [
      "Times of India, Edupreneur of the Year in 2013",
      "Award of Excellence by the National Maritime Day Committee, Ministry of Shipping, Government of India",
      "Honorary Doctorate from York St.John's University",
      "Lifetime Achievement Award 2017 for contributions to the global Shipping Industry"
    ];

    return (
      <Layout>
        <div className="pt-28">
          <div className="bg-gray-50 py-3 border-b">
            <div className="container mx-auto px-4">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href={backLink}>{backLabel}</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Dr. J. Ramachandran</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>

          <Separator className="border-gray-200" />

          <div className="container mx-auto px-4 py-12 mt-8">
            <div className="max-w-5xl mx-auto">
              <VCProfileHeader 
                name="Dr. J. Ramachandran"
                title="Chancellor, AMET University"
                phone="91 - 44 - 2744 4625 / 627 / 628"
                imageSrc="/lovable-uploads/cb795afc-c768-4194-82a0-1c6235efc67a.png"
              />

              <div className="mt-12 space-y-8">
                {/* Founding Vision Banner */}
                <div className="bg-gradient-to-r from-purple-50 via-indigo-50 to-purple-50 border-l-4 border-purple-600 p-6 rounded-lg shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-full text-white shadow-lg">
                      <Award className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-purple-900 mb-2">Founding Visionary & Pioneer</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Founder of <strong>India's First Maritime University</strong>, established NAESEY to empower thousands of youth, and created history by transforming maritime education in India through innovation, dedication, and unwavering commitment to excellence.
                      </p>
                    </div>
                  </div>
                </div>

              {/* Vision and Leadership Section */}
              <Card className="relative overflow-hidden border-none bg-gradient-to-br from-white to-purple-50/30 shadow-lg">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-purple-200/10 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
                <div className="relative p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg text-white">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <h2 className="text-3xl font-bold text-aemet-navy">Vision and Leadership</h2>
                  </div>

                  {/* Key Milestones */}
                  <div className="grid md:grid-cols-3 gap-4 mb-8">
                    <div className="bg-gradient-to-br from-purple-50 to-white p-5 rounded-xl border border-purple-100 text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-1">1970s</div>
                      <div className="text-sm text-gray-600">Founded NAESEY</div>
                    </div>
                    <div className="bg-gradient-to-br from-indigo-50 to-white p-5 rounded-xl border border-indigo-100 text-center">
                      <div className="text-3xl font-bold text-indigo-600 mb-1">1993</div>
                      <div className="text-sm text-gray-600">Established AMET</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-white p-5 rounded-xl border border-purple-100 text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-1">First</div>
                      <div className="text-sm text-gray-600">Maritime University</div>
                    </div>
                  </div>

                  <div className="space-y-5">
                    {visionParagraphs.map((paragraph, index) => (
                      <div key={index} className="bg-white/50 p-6 rounded-xl border border-purple-100">
                        <p className="text-gray-700 leading-relaxed">{paragraph}</p>
                      </div>
                    ))}
                  </div>

                  {/* AMET Achievements Highlight */}
                  <div className="mt-6 bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-xl border border-indigo-200">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-indigo-600 rounded-lg text-white">
                        <Award className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-bold text-indigo-900">AMET University Excellence</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                        <span className="text-gray-700"><strong>CRISIL</strong> Rated</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                        <span className="text-gray-700"><strong>ISO</strong> Certified</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-purple-600"></div>
                        <span className="text-gray-700"><strong>UGC Act 1956</strong> Section 3</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-purple-600"></div>
                        <span className="text-gray-700"><strong>Seatrade Awards</strong> Winner</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Medical Initiative Section */}
              <Card className="relative overflow-hidden border-none bg-gradient-to-br from-white to-red-50/30 shadow-lg">
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tl from-red-200/10 to-transparent rounded-full translate-y-36 translate-x-36"></div>
                <div className="relative p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-gradient-to-br from-red-600 to-pink-600 rounded-lg text-white">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <h2 className="text-3xl font-bold text-aemet-navy">Medical Education Initiative</h2>
                  </div>

                  {/* Hospital Highlights */}
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-gradient-to-r from-red-50 to-white p-5 rounded-xl border-l-4 border-red-600 text-center">
                      <div className="text-3xl font-bold text-red-700 mb-1">550</div>
                      <div className="text-sm text-gray-600 font-medium">Bed Hospital</div>
                    </div>
                    <div className="bg-gradient-to-r from-pink-50 to-white p-5 rounded-xl border-l-4 border-pink-600 text-center">
                      <div className="text-2xl font-bold text-pink-700 mb-1">Medical College</div>
                      <div className="text-sm text-gray-600 font-medium">Full-fledged Facility</div>
                    </div>
                    <div className="bg-gradient-to-r from-red-50 to-white p-5 rounded-xl border-l-4 border-red-600 text-center">
                      <div className="text-2xl font-bold text-red-700 mb-1">Hapur, UP</div>
                      <div className="text-sm text-gray-600 font-medium">Socially Backward Area</div>
                    </div>
                  </div>

                  <div className="bg-white/50 p-6 rounded-xl border border-red-100">
                    <p className="text-gray-700 leading-relaxed mb-4">{medicalInitiativeContent}</p>
                    
                    <div className="mt-6 grid md:grid-cols-2 gap-4">
                      <div className="bg-gradient-to-r from-red-50 to-white p-4 rounded-lg border border-red-100">
                        <h4 className="font-semibold text-red-900 mb-2">Sophisticated Infrastructure</h4>
                        <p className="text-sm text-gray-600">State-of-the-art medical equipment and facilities</p>
                      </div>
                      <div className="bg-gradient-to-r from-pink-50 to-white p-4 rounded-lg border border-pink-100">
                        <h4 className="font-semibold text-pink-900 mb-2">Expert Medical Team</h4>
                        <p className="text-sm text-gray-600">Highly qualified medical professionals serving the community</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Awards and Recognition Section */}
              <Card className="relative overflow-hidden border-none bg-gradient-to-br from-white to-amber-50/30 shadow-lg">
                <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-amber-200/10 to-transparent rounded-full -translate-y-32 -translate-x-32"></div>
                <div className="relative p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-gradient-to-br from-amber-600 to-yellow-600 rounded-lg text-white">
                      <Award className="h-6 w-6" />
                    </div>
                    <h2 className="text-3xl font-bold text-aemet-navy">Awards and Recognition</h2>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">His entrepreneurial acumen and edupreneurial efforts attracted many an award nationally and internationally including:</p>
                  <div className="grid gap-4">
                    {awards.map((award, index) => (
                      <div key={index} className="flex gap-4 bg-gradient-to-r from-amber-50 to-white p-6 rounded-xl border border-amber-100 hover:shadow-md transition-shadow">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-yellow-600 text-white flex items-center justify-center text-sm font-bold shadow-md">
                          {index + 1}
                        </div>
                        <p className="text-gray-700 leading-relaxed flex-1">{award}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

              {/* Legacy Quote Section */}
              <Card className="relative overflow-hidden border-none bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-900 shadow-xl">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0YzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
                <div className="relative p-10 md:p-12 text-center">
                  <div className="text-6xl text-amber-400 mb-4">"</div>
                  <p className="text-xl md:text-2xl font-light text-white leading-relaxed italic max-w-3xl mx-auto">
                    He never wanted to compete, he just wanted to complement. Complement he did and history he made.
                  </p>
                  <div className="text-6xl text-amber-400 mt-4 rotate-180">"</div>
                  <div className="mt-6 text-amber-300 text-sm">
                    Founder & Visionary Leader
                  </div>
                </div>
              </Card>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  } else if (id === 'rajesh-ramachandren') {
    const biographyParagraphs = [
      "Dr. Rajesh Ramachandren is the President of AMET University, the first maritime university in India. He graduated from Loyola College, Chennai, one of the top-ranking Educational Institutions of India. He had his post-graduation, MBA (Finance) from Cardiff Business School, United Kingdom. He is the Vice President of AMET Trust and Trustee of Saraswathi Ammal Educational and Charitable Trust.",
      "With his vivid international exposure, Dr. Rajesh has developed AMET University as the premier Institute for maritime education in India which has so far produced more than 200000 internationally competent seafarers.",
      "Dr. Rajesh Ramachandren has over 20 years of experience as a social activist in empowering educated youth in India. He is the Vice President of New Era Association of Educated Self Employed Youth (NAESEY), an organization through which he organizes self-employment training and job opportunities for educated youth in rural areas of India.",
      "Dr. Rajesh organizes skill development programmes and job fairs through which he promoted employment opportunities for more than 1,50,000 unemployed youth of whom more than 20,000 have been provided with permanent employment in India during the past 20 years. Dr. Rajesh has so far established 126 skill development centres in India under the aegis of NAESEY."
    ];

    const socialInitiativesContent = "Dr. Rajesh has been socially committed to the upliftment of general public by organizing free medical camps, blood donation camps and medical awareness campus in Tamil Nadu state in India. He also creates awareness among youth by organizing eco-conscious events such as Tree Plantation, Plastic Free Environment, Heritage Conscious events for a greener and responsible India. Recently, Dr. Rajesh has launched Mission Green 2025, a volunteer movement of planting trees along the water bodies in and around Chennai City.";

    const politicalInitiativesContent = "Dr. Rajesh has also served as the Chairman of Tamil Nadu Research Department in the All India Congress Committee, the oldest and largest democratic movement in India. He was also the President for Tamil Nadu Youth Congress (Arakkonam Constituency) during 2010-2012 and was also elected as Vice President of Tamil Nadu Young Congress during 2012-14.";

    const awards = [
      "Lloyds List Award (2013)",
      "Doctorate Degree in Education (Honoris causa) from the Commonwealth University, UK (2017) for exemplary contribution in societal development and youth empowerment"
    ];

    return (
      <Layout>
        <div className="pt-28">
          <div className="bg-gray-50 py-3 border-b">
            <div className="container mx-auto px-4">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href={backLink}>{backLabel}</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Dr. Rajesh Ramachandren</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>

          <Separator className="border-gray-200" />

          <div className="container mx-auto px-4 py-12 mt-8">
            <div className="max-w-5xl mx-auto">
              <VCProfileHeader 
                name="Dr. Rajesh Ramachandren"
                title="President, AMET University"
                phone="91 - 44 - 2744 4625 / 627 / 628"
                imageSrc="/lovable-uploads/df979b62-3bb2-4325-8441-0722f6e9212f.png"
              />

              <div className="mt-12 space-y-8">
                {/* Leadership Banner */}
                <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 border-l-4 border-blue-600 p-6 rounded-lg shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full text-white shadow-lg">
                      <Award className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-blue-900 mb-2">Visionary Leadership</h3>
                      <p className="text-gray-700 leading-relaxed">
                        President of <strong>India's First Maritime University</strong>, committed educationalist, philanthropic social activist, goal-full green crusader and visionary entrepreneur dedicated to youth empowerment and sustainable development.
                      </p>
                    </div>
                  </div>
                </div>

              {/* Education and Leadership Section */}
              <Card className="relative overflow-hidden border-none bg-gradient-to-br from-white to-blue-50/30 shadow-lg">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-200/10 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
                <div className="relative p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg text-white">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <h2 className="text-3xl font-bold text-aemet-navy">Education and Leadership</h2>
                  </div>

                  {/* Key Statistics */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                    <div className="bg-gradient-to-br from-blue-50 to-white p-5 rounded-xl border border-blue-100 text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-1">200,000+</div>
                      <div className="text-sm text-gray-600">Seafarers Trained</div>
                    </div>
                    <div className="bg-gradient-to-br from-indigo-50 to-white p-5 rounded-xl border border-indigo-100 text-center">
                      <div className="text-3xl font-bold text-indigo-600 mb-1">20+</div>
                      <div className="text-sm text-gray-600">Years of Service</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-white p-5 rounded-xl border border-purple-100 text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-1">126</div>
                      <div className="text-sm text-gray-600">Skill Centers</div>
                    </div>
                  </div>

                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    {biographyParagraphs.map((paragraph, index) => (
                      <p key={index} className="text-base">{paragraph}</p>
                    ))}
                  </div>
                </div>
              </Card>

              {/* Social Initiatives Section */}
              <Card className="relative overflow-hidden border-none bg-gradient-to-br from-white to-green-50/30 shadow-lg">
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tl from-green-200/10 to-transparent rounded-full translate-y-36 translate-x-36"></div>
                <div className="relative p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg text-white">
                      <Globe className="h-6 w-6" />
                    </div>
                    <h2 className="text-3xl font-bold text-aemet-navy">Social Initiatives</h2>
                  </div>

                  {/* Impact Statistics */}
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-gradient-to-r from-green-50 to-white p-5 rounded-xl border-l-4 border-green-600">
                      <div className="text-2xl font-bold text-green-700 mb-2">1,50,000+</div>
                      <div className="text-sm text-gray-600 font-medium">Youth Empowered</div>
                      <div className="text-xs text-gray-500 mt-1">Through skill development programs</div>
                    </div>
                    <div className="bg-gradient-to-r from-emerald-50 to-white p-5 rounded-xl border-l-4 border-emerald-600">
                      <div className="text-2xl font-bold text-emerald-700 mb-2">20,000+</div>
                      <div className="text-sm text-gray-600 font-medium">Permanent Jobs Created</div>
                      <div className="text-xs text-gray-500 mt-1">Across India in 20 years</div>
                    </div>
                  </div>

                  <div className="bg-white/50 p-6 rounded-xl border border-green-100">
                    <p className="text-gray-700 leading-relaxed">{socialInitiativesContent}</p>
                  </div>

                  {/* Mission Green 2025 Highlight */}
                  <div className="mt-6 bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-xl border border-green-200">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-green-600 rounded-lg text-white">
                        <Globe className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-bold text-green-900">Mission Green 2025</h3>
                    </div>
                    <p className="text-gray-700">A volunteer movement dedicated to planting trees along water bodies in and around Chennai City, promoting environmental sustainability and climate action.</p>
                  </div>
                </div>
              </Card>

              {/* Political Experience Section */}
              <Card className="relative overflow-hidden border-none bg-gradient-to-br from-white to-orange-50/30 shadow-lg">
                <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-orange-200/10 to-transparent rounded-full -translate-y-32 -translate-x-32"></div>
                <div className="relative p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg text-white">
                      <Users className="h-6 w-6" />
                    </div>
                    <h2 className="text-3xl font-bold text-aemet-navy">Political Experience</h2>
                  </div>

                  <div className="bg-gradient-to-r from-orange-50 to-white p-6 rounded-xl border border-orange-100">
                    <div className="space-y-4">
                      <div className="flex gap-3 items-start">
                        <div className="flex-shrink-0 w-2 h-2 rounded-full bg-orange-600 mt-2"></div>
                        <div className="flex-1">
                          <p className="font-semibold text-gray-900 mb-1">Chairman, Tamil Nadu Research Department</p>
                          <p className="text-sm text-gray-600">All India Congress Committee</p>
                        </div>
                      </div>
                      <div className="flex gap-3 items-start">
                        <div className="flex-shrink-0 w-2 h-2 rounded-full bg-orange-600 mt-2"></div>
                        <div className="flex-1">
                          <p className="font-semibold text-gray-900 mb-1">President, Tamil Nadu Youth Congress</p>
                          <p className="text-sm text-gray-600">Arakkonam Constituency (2010-2012)</p>
                        </div>
                      </div>
                      <div className="flex gap-3 items-start">
                        <div className="flex-shrink-0 w-2 h-2 rounded-full bg-orange-600 mt-2"></div>
                        <div className="flex-1">
                          <p className="font-semibold text-gray-900 mb-1">Vice President, Tamil Nadu Young Congress</p>
                          <p className="text-sm text-gray-600">(2012-2014)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Awards and Recognition Section */}
              <Card className="relative overflow-hidden border-none bg-gradient-to-br from-white to-amber-50/30 shadow-lg">
                <div className="absolute bottom-0 right-0 w-56 h-56 bg-gradient-to-tl from-amber-200/10 to-transparent rounded-full translate-y-28 translate-x-28"></div>
                <div className="relative p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-gradient-to-br from-amber-600 to-yellow-600 rounded-lg text-white">
                      <Award className="h-6 w-6" />
                    </div>
                    <h2 className="text-3xl font-bold text-aemet-navy">Awards and Recognition</h2>
                  </div>
                  <div className="grid gap-4">
                    {awards.map((award, index) => (
                      <div key={index} className="flex gap-4 bg-gradient-to-r from-amber-50 to-white p-6 rounded-xl border border-amber-100 hover:shadow-md transition-shadow">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-yellow-600 text-white flex items-center justify-center text-sm font-bold shadow-md">
                          {index + 1}
                        </div>
                        <p className="text-gray-700 leading-relaxed flex-1">{award}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

              {/* Vision Quote Section */}
              <Card className="relative overflow-hidden border-none bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 shadow-xl">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0YzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
                <div className="relative p-10 md:p-12 text-center">
                  <div className="text-6xl text-amber-400 mb-4">"</div>
                  <p className="text-xl md:text-2xl font-light text-white leading-relaxed italic max-w-3xl mx-auto">
                    Dr. Rajesh Ramachandren is a committed educationalist, philanthropic social activist, goal-full green crusader and a visionary entrepreneur.
                  </p>
                  <div className="text-6xl text-amber-400 mt-4 rotate-180">"</div>
                </div>
              </Card>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  } else if (id === 'v-rajendran') {
    const awards = [
      "National Council for Science & Technology Communication Award (2016) for Out standing efforts in Science and Technology popularization among Children",
      "PSN National Award for Excellence in Science and Technology (2013)",
      "Lifetime Achievement Award (2016) from Nehru Group of Educational and Charitable Trust, India",
      "Lifetime Achievement Award (2023) from Rotary Club of Coimbatore (RCC) Meridian, Coimbatore",
      "Lifetime Achievement Award (2023) from Indian Spectro Physics Association (ISPA), Chennai",
      "Lifetime Achievement Award (2016) from Dr. Kalam Educational Trust for Tribal, Chennai",
      "NDT Man of the Year (2004) from Indian Society for Non-Destructive Testing, India (ISNDT)",
      "Prof. K. Arumugam National Award for innovative work in Engineering and Technology",
      "Tamil Nadu Scientists Award (TANSA) (1996-97)",
      "Best Faculty Award from Nehru Group of Educational and Charitable Trust, India",
      "18+ National and International Fellowships including DAAD-Germany, Indo-Australia, Indo-Poland and more"
    ];

    const academicAchievements = [
      "Chairman, NAAC Peer Team for institutional accreditation under Ministry of Education, Government of India",
      "Member, Curation Committee Member – National Maritime Heritage Complex (NMHC), Ministry of Ports, Shipping and waterways (MoPSW), Govt. of India",
      "Member, AICTE Committee for Ph.D. guidelines in Engineering and Technology (2025)",
      "Member, UGC-AICTE Joint Expert Committee for inspections of new universities"
    ];

    return (
      <Layout>
        <div className="pt-28">
          <div className="bg-gray-50 py-3 border-b">
            <div className="container mx-auto px-4">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href={backLink}>{backLabel}</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Dr. V. Rajendran</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>

          <Separator className="border-gray-200" />

          <div className="container mx-auto px-4 py-12 mt-8">
            <div className="max-w-5xl mx-auto">
              <VCProfileHeader 
                name="Dr. V. Rajendran"
                title="Vice Chancellor, AMET University"
                phone="91 - 44 - 2744 4625 / 627 / 628"
                imageSrc="/lovable-uploads/1fef6fd8-c589-4081-88eb-bf168f7943ad.png"
                email="vc@ametuniv.ac.in"
                showBadges={false}
                showStats={false}
              />

              {/* Stats Section */}
              <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                <div className="bg-gradient-to-br from-aemet-navy to-aemet-blue p-5 rounded-xl text-white text-center">
                  <div className="text-3xl font-bold">265+</div>
                  <div className="text-sm opacity-90">Peer Reviewed Journal Publications</div>
                </div>
                <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-5 rounded-xl text-white text-center">
                  <div className="text-3xl font-bold">20+</div>
                  <div className="text-sm opacity-90">Awards / Honors</div>
                </div>
                <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-5 rounded-xl text-white text-center">
                  <div className="text-3xl font-bold">22</div>
                  <div className="text-sm opacity-90">Govt. Funded Projects Completed</div>
                </div>
                <div className="bg-gradient-to-br from-green-600 to-green-700 p-5 rounded-xl text-white text-center">
                  <div className="text-3xl font-bold">₹24.28 Cr</div>
                  <div className="text-sm opacity-90">Govt. Grants Received</div>
                </div>
                <div className="bg-gradient-to-br from-sky-600 to-sky-700 p-5 rounded-xl text-white text-center">
                  <div className="text-3xl font-bold">28+</div>
                  <div className="text-sm opacity-90">Countries Visited</div>
                </div>
              </div>

              <div className="mt-12 space-y-8">
                {/* Distinguished Recognition Banner */}
                <div className="bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 border-l-4 border-amber-500 p-6 rounded-lg shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full text-white shadow-lg">
                      <Award className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-amber-900 mb-2">Distinguished Recognition</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Consistently recognized for <strong>four consecutive years</strong> as <strong>Top 2% of World Scientists</strong> in Material Science by <strong>Elsevier BV and Stanford University</strong> since 2019. Selected based on 44 unique research parameters including publications, h-index, citations, and inventions.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Education and Experience Section */}
                <Card className="relative overflow-hidden border-none bg-gradient-to-br from-white to-blue-50/30 shadow-lg">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-200/10 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
                  <div className="relative p-8 md:p-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-gradient-to-br from-aemet-navy to-aemet-blue rounded-lg text-white">
                        <GraduationCap className="h-6 w-6" />
                      </div>
                      <h2 className="text-3xl font-bold text-aemet-navy">Education and Experience</h2>
                    </div>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>Dr. V. RAJENDRAN obtained his D.Sc. Biomaterials from Bharathiar University, Coimbatore, Ph.D. Physics from Annamalai University, Chidambaram and M.Tech. Nanotechnology from Anna university, Chennai., Tamil Nadu, India.</p>
                      <p><p>Dr. V. Rajendran has more <strong>than 33+ years of experience</strong> in higher education and research, including <strong>22+ years</strong> in academic administration.</p> in higher education and research, including <strong>22+ years</strong> in academic administration.</p>
                      <p>His academic leadership talent nurtured through outstanding programs like <strong>Leadership for Academicians Programme (LEAP)</strong> both in India (2020) and USA (UPenn University, USA, 2021) sponsored by MoE, Govt. of India and <strong>Fulbright-Nehru International Education Administrators Programme</strong>, United States-India Educational Foundation (USIEF), USA (2015).</p>
                    </div>
                  </div>
                </Card>

                {/* Academic Achievements Section */}
                <Card className="relative overflow-hidden border-none bg-gradient-to-br from-white to-indigo-50/30 shadow-lg">
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-indigo-200/10 to-transparent rounded-full translate-y-24 -translate-x-24"></div>
                  <div className="relative p-8 md:p-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg text-white">
                        <GraduationCap className="h-6 w-6" />
                      </div>
                      <h2 className="text-3xl font-bold text-aemet-navy">Academic Achievements</h2>
                    </div>
                    <div className="space-y-3">
                      {academicAchievements.map((achievement, index) => (
                        <div key={index} className="flex gap-3 bg-white/50 p-4 rounded-xl border border-indigo-100">
                          <div className="flex-shrink-0 w-2 bg-gradient-to-b from-indigo-600 to-purple-600 rounded-full"></div>
                          <p className="text-gray-700 leading-relaxed">{achievement}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 space-y-4 text-gray-700 bg-white/50 p-5 rounded-xl border border-indigo-100">
                      <p className="leading-relaxed">He is promoting Science and Technology especially among the unreachable rural children, as a Coordinator by providing opportunities for more than <strong className="text-aemet-navy">13,500 school children</strong> (+2 grade) across Tamil Nadu through DST-INSPIRE programs.</p>
                      <p className="leading-relaxed">Serving as an <strong className="text-aemet-navy">Adjunct Professor</strong>, University Clermont Auvergne (UCA), Clermont-Ferrand, France and Edith Cowan University (EDU), Australia since 2015.</p>
                      <p className="leading-relaxed">Invited <strong className="text-aemet-navy">Five Nobel Laureates</strong> on various occasions to interact with the students through DST-INSPIRE and other programs to inspire and take up higher education and careers in Science and Technology.</p>
                    </div>
                  </div>
                </Card>

                {/* Research and Publications Section */}
                <Card className="relative overflow-hidden border-none bg-gradient-to-br from-white to-purple-50/30 shadow-lg">
                  <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-purple-200/10 to-transparent rounded-full -translate-y-36 translate-x-36"></div>
                  <div className="relative p-8 md:p-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg text-white">
                        <BookOpen className="h-6 w-6" />
                      </div>
                      <h2 className="text-3xl font-bold text-aemet-navy">Research and Publications</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div className="bg-gradient-to-br from-purple-50 to-white p-5 rounded-xl border border-purple-100">
                        <div className="text-3xl font-bold text-purple-600 mb-1">265+</div>
                        <div className="text-sm text-gray-600">Research Papers Published</div>
                      </div>
                      <div className="bg-gradient-to-br from-pink-50 to-white p-5 rounded-xl border border-pink-100">
                        <div className="text-3xl font-bold text-pink-600 mb-1">32</div>
                        <div className="text-sm text-gray-600">Ph.D. Guided</div>
                      </div>
                      <div className="bg-gradient-to-br from-indigo-50 to-white p-5 rounded-xl border border-indigo-100">
                        <div className="text-3xl font-bold text-indigo-600 mb-1">28</div>
                        <div className="text-sm text-gray-600">Countries Visited</div>
                      </div>
                      <div className="bg-gradient-to-br from-purple-50 to-white p-5 rounded-xl border border-purple-100">
                        <div className="text-3xl font-bold text-purple-600 mb-1">14</div>
                        <div className="text-sm text-gray-600">Patents Filed</div>
                      </div>
                      <div className="bg-gradient-to-br from-green-50 to-white p-5 rounded-xl border border-green-100">
                        <div className="text-3xl font-bold text-green-600 mb-1">3</div>
                        <div className="text-sm text-gray-600">Ph.D. Pursuing</div>
                      </div>
                      <div className="bg-gradient-to-br from-amber-50 to-white p-5 rounded-xl border border-amber-100">
                        <div className="text-3xl font-bold text-amber-600 mb-1">26+</div>
                        <div className="text-sm text-gray-600">Text Books</div>
                      </div>
                      <div className="bg-gradient-to-br from-teal-50 to-white p-5 rounded-xl border border-teal-100">
                        <div className="text-3xl font-bold text-teal-600 mb-1">4</div>
                        <div className="text-sm text-gray-600">Patents Granted</div>
                      </div>
                      <div className="bg-gradient-to-br from-rose-50 to-white p-5 rounded-xl border border-rose-100">
                        <div className="text-3xl font-bold text-rose-600 mb-1">10</div>
                        <div className="text-sm text-gray-600">Patents Published</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div className="bg-gradient-to-br from-sky-50 to-white p-5 rounded-xl border border-sky-100">
                        <div className="text-3xl font-bold text-sky-600 mb-1">18+</div>
                        <div className="text-sm text-gray-600">National / International Fellowships</div>
                      </div>
                      <div className="bg-gradient-to-br from-violet-50 to-white p-5 rounded-xl border border-violet-100">
                        <div className="text-3xl font-bold text-violet-600 mb-1">20+</div>
                        <div className="text-sm text-gray-600">Edited Research & Conference Proceedings</div>
                      </div>
                      <div className="bg-gradient-to-br from-cyan-50 to-white p-5 rounded-xl border border-cyan-100">
                        <div className="text-3xl font-bold text-cyan-600 mb-1">15+</div>
                        <div className="text-sm text-gray-600">Edited / Guest Editors in Intl. Journals</div>
                      </div>
                      <div className="bg-gradient-to-br from-orange-50 to-white p-5 rounded-xl border border-orange-100">
                        <div className="text-3xl font-bold text-orange-600 mb-1">30+</div>
                        <div className="text-sm text-gray-600">Ph.D. Scholars Guided</div>
                      </div>
                    </div>
                    <div className="space-y-4 text-gray-700 bg-white/50 p-5 rounded-xl border border-purple-100">
                      <p className="leading-relaxed">He has received Grant-in-Aid to the tune of more than <strong>Rs.24.28 crore</strong> from Govt. of India funding agencies like DST, DRDO, DAE, CSIR, etc. which also includes successfully completed 23 funded research projects, prestigious Indo-German DST-DAAD project and Institutional building.</p>
                      <p className="leading-relaxed">He has to his credit more than <strong>265 research papers</strong> in reputed peer-reviewed international journals (Scopus h-index 40 with 5573 citations), 125 papers in conference proceedings, 26 textbooks, 2 research books, 1 monograph, 1 compendium book, 14 edited research books, 7 edited conference proceedings and <strong>14 patents</strong> (4 granted and 10 published).</p>
                      <p className="leading-relaxed">Guided <strong>30 plus Ph.D.</strong> (Anna, Madurai Kamarajar and Bharathiar Universities), 3 PDF and 1 N-PDF. Currently, 4 scholars are pursuing their Ph.D. degree.</p>
                      <p className="leading-relaxed">Visited <strong>28 countries</strong> like USA, Canada, Germany, France, Taiwan, Japan, Singapore, China and so on for academic exchange and signed more than <strong>25 MoUs</strong> with foreign universities on faculty/students exchange and collaborative research.</p>
                      <p className="leading-relaxed">Organized <strong>10+ International</strong> and <strong>25+ National conferences</strong> and attended more than 25 International and 150 National conferences.</p>
                      <p className="leading-relaxed">As an <strong>Editor (14) / Guest Editor (10) / Editorial Board Member (11) and Peer Reviewer (23)</strong> contributed to high quality international journals in the field of Nanotechnology and Materials Science.</p>
                    </div>
                  </div>
                </Card>

                {/* Educational Initiatives Section */}
                <Card className="relative overflow-hidden border-none bg-gradient-to-br from-white to-green-50/30 shadow-lg">
                  <div className="absolute bottom-0 right-0 w-56 h-56 bg-gradient-to-tl from-green-200/10 to-transparent rounded-full translate-y-28 translate-x-28"></div>
                  <div className="relative p-8 md:p-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg text-white">
                        <Globe className="h-6 w-6" />
                      </div>
                      <h2 className="text-3xl font-bold text-aemet-navy">Educational Initiatives</h2>
                    </div>
                    <div className="space-y-5">
                      <div className="bg-gradient-to-r from-green-50 to-white p-6 rounded-xl border-l-4 border-green-600">
                        <h3 className="font-semibold text-lg text-green-900 mb-3">STEM Education Programs</h3>
                        <p className="text-gray-700 leading-relaxed">Introduced UG and PG courses on STEM education like B.Tech. & M.Tech. Programs in Nanotechnology, B.Sc. in AI with ML, Data Science, Cyber Security, Cognitive System, B.Com. in Accounting & Taxation, Cost Accounting etc. and designed curriculum and syllabi on par with <strong>Industry 4.0/5.0</strong>.</p>
                      </div>
                      <div className="bg-gradient-to-r from-emerald-50 to-white p-6 rounded-xl border-l-4 border-emerald-600">
                        <h3 className="font-semibold text-lg text-emerald-900 mb-3">Industry-Linked Programs</h3>
                        <p className="text-gray-700 leading-relaxed">Introduced Industry linked programmes from considering recommendations of the <strong>World Economic Forum (WeF)</strong>, <strong>NEP 2020</strong> and the guidelines of <strong>United Nations Sustainable Development Goals (UN SDGs 2030)</strong> both at UG and PG Levels to provide quality higher education.</p>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Awards and Recognition Section */}
                <Card className="relative overflow-hidden border-none bg-gradient-to-br from-white to-amber-50/30 shadow-lg">
                  <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-amber-200/10 to-transparent rounded-full -translate-y-32 -translate-x-32"></div>
                  <div className="relative p-8 md:p-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-gradient-to-br from-amber-600 to-yellow-600 rounded-lg text-white">
                        <Award className="h-6 w-6" />
                      </div>
                      <h2 className="text-3xl font-bold text-aemet-navy">Awards and Recognition</h2>
                    </div>
                    <p className="text-gray-700 mb-6 leading-relaxed">His entrepreneurial acumen and edupreneurial efforts attracted many an award nationally and internationally including:</p>
                    <div className="grid gap-3">
                      {awards.map((award, index) => (
                        <div key={index} className="flex gap-3 bg-gradient-to-r from-amber-50 to-white p-4 rounded-lg border border-amber-100 hover:shadow-md transition-shadow">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-yellow-600 text-white flex items-center justify-center text-sm font-bold shadow-md">
                            {index + 1}
                          </div>
                          <p className="text-gray-700 leading-relaxed flex-1">{award}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>

                {/* Memberships and Affiliations Section */}
                <Card className="relative overflow-hidden border-none bg-gradient-to-br from-white to-slate-50/30 shadow-lg">
                  <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tl from-slate-200/10 to-transparent rounded-full translate-y-36 translate-x-36"></div>
                  <div className="relative p-8 md:p-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-gradient-to-br from-slate-700 to-slate-900 rounded-lg text-white">
                        <Users className="h-6 w-6" />
                      </div>
                      <h2 className="text-3xl font-bold text-aemet-navy">Memberships and Affiliations</h2>
                    </div>
                    <div className="space-y-5">
                      <div className="bg-gradient-to-r from-slate-50 to-white p-6 rounded-xl border border-slate-200">
                        <h3 className="font-semibold text-lg text-slate-900 mb-3">Fellowships</h3>
                        <p className="text-gray-700 leading-relaxed">Dr. Rajendran is Fellow of <strong>Institute of Physics (FInstP)</strong>, London (UK), <strong>International Association of Advanced Materials (FIAAM)</strong>, Sweden and <strong>The Academy of Sciences Chennai (FASCh)</strong>, Tamil Nadu. Instrument Society of India (ISOI), Bangalore</p>
                      </div>
                      <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-xl border border-blue-200">
                        <h3 className="font-semibold text-lg text-blue-900 mb-3">Professional Memberships</h3>
                        <p className="text-gray-700 leading-relaxed">Dr. Rajendran is a member of <strong>The Indian Academy of Science Communication</strong>, <strong>National Council for Science & Technology Communication (NCSTC)</strong>, DST, Govt. of India and MHRD, Govt. of India.</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  } else if (id === 'g-thiruvasagam') {
    const biographyParagraphs = [
      "Col. Dr. G. Thiruvasagam is serving as the Provost of AMET University, Chennai, India. A person of academic and administrative eminence, Col. Dr. G. Thiruvasagam brings with him his dynamic experience of five decades in Higher Education, his keen sense of justice and his generous spirit of fraternity.",
      "He obtained his Ph.D from Madurai Kamaraj University in the discipline of Management, and later went on to do his post doctorate from University of Southampton, United Kingdom. His academic career spreading over more than five decades, include the honour of having been invited to associate with the University of Southampton, UK, during 1991-92 as Research Fellow, Visiting Faculty at National University of Singapore during 2011-12 and during the year 2015-16, invited to serve as Visiting Professor at Alam Maritime Resources, Malaysia.",
      "His career spans 34 years as Professor of Commerce and Management and 10 years as Principal, along with serving as Member of the Syndicate of Madurai Kamaraj University. He was appointed as Vice Chancellor for three successive terms (between 2006-2022) of two eminent state universities in Tamil Nadu namely Bharathiar University, Coimbatore and the prestigious 167 years old first 'Port' University of India, the University of Madras, and India's first Maritime University - AMET University, Chennai."
    ];

    const academicAchievements = (
      <div className="space-y-4">
        <p>Col. Dr. G. Thiruvasagam has authored:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Eighteen books including Qualitative Research Methodology, Business Research Methods, Logistics Management, Financial Management, and more</li>
          <li>Thirty six publications in National and International Journals</li>
          <li>Served as Member in various committees of prestigious Apex bodies of Higher Education</li>
          <li>Executive Committee Member in Tamil Nadu State Council for Higher Education</li>
          <li>One of six Vice Chancellors invited to serve on the Central Advisory Board for Education (CABE)</li>
        </ul>
      </div>
    );

    const leadershipRoles = (
      <div className="space-y-4">
        <p>Notable Leadership Positions:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>100th President of the Association of Indian Universities (AIU)</li>
          <li>Chairperson of National Assessment and Accreditation Council (NAAC) Visiting and Evaluation Committee</li>
          <li>Member of Planning and Academic Committees of University Grants Commission (UGC)</li>
          <li>Established the National Education Policy Implementation Committee</li>
          <li>Represented Indian Universities in Global Education Conventions in USA, UK, Spain etc.</li>
        </ul>
      </div>
    );

    const awards = [
      "Colombo Plan Fellowship by the British Council, United Kingdom (1992)",
      "Colonel Status by the Tamil Nadu State NCC Battalion (2008)",
      "Best Management Leader by the International Business Management Council, Mumbai (2016)",
      "National Award for Social Service from President Dr. A.P.J. Abdul Kalam",
      "Service above self Award from the Rotary International"
    ];

    return (
      <Layout>
        <div className="pt-28">
          <div className="bg-gray-50 py-3 border-b">
            <div className="container mx-auto px-4">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href={backLink}>{backLabel}</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Col. Dr. G. Thiruvasagam</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>

          <Separator className="border-gray-200" />

          <div className="container mx-auto px-4 py-12 mt-8">
            <div className="max-w-4xl mx-auto">
              <ProfileHeader 
                name="Col. Dr. G. Thiruvasagam"
                title="Provost, AMET University"
                phone="91 - 44 - 2744 4625 / 627 / 628"
                imageSrc="/lovable-uploads/f43ae36f-2b8f-4061-961b-325b0ca44107.png"
              />

              <Separator className="my-8" />

              <Card className="relative overflow-hidden border-none bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 shadow-xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-aemet-blue/5 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-aemet-navy/5 to-transparent rounded-full translate-y-24 -translate-x-24"></div>
                <div className="relative p-8 md:p-10">
                  <div className="prose max-w-none">
                  <Biography title="Academic Background and Leadership" paragraphs={biographyParagraphs} />
                  
                  <div className="mt-8">
                    <SocialInitiatives 
                      title="Academic Achievements" 
                      content={academicAchievements}
                      icon={<GraduationCap className="h-5 w-5" />}
                    />
                  </div>

                  <div className="mt-8">
                    <SocialInitiatives 
                      title="Leadership Roles" 
                      content={leadershipRoles}
                      icon={<Globe className="h-5 w-5" />}
                    />
                  </div>

                  <div className="mt-8">
                    <Awards awards={awards} />
                  </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Layout>
    );
  } else if (id === 'v-sangeetha-albin') {
    return (
      <Layout>
        <div className="pt-28">
          <div className="bg-gray-50 py-3 border-b">
            <div className="container mx-auto px-4">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href={backLink}>{backLabel}</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Dr. V. Sangeetha Albin</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>

          <Separator className="border-gray-200" />

          <div className="container mx-auto px-4 py-12 mt-8">
            <div className="max-w-5xl mx-auto">
              <VCProfileHeader 
                name="Dr. V. Sangeetha Albin"
                title="Registrar (i/c)"
                phone="044-2744 4625 Extn. No. 107"
                imageSrc="/lovable-uploads/5bffc478-0249-4f5a-bef9-e2dec501ac14.png"
              />

              <div className="mt-12 space-y-8">
                {/* Academic Excellence Banner */}
                <div className="bg-gradient-to-r from-aemet-navy via-aemet-blue to-purple-600 text-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="h-8 w-8" />
                    <h2 className="text-2xl font-bold">Academic Excellence & Administrative Leadership</h2>
                  </div>
                </div>

                {/* Biography */}
                <Card className="border-none shadow-xl bg-gradient-to-br from-white to-blue-50/30">
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-aemet-blue/10 rounded-lg">
                        <Users className="h-6 w-6 text-aemet-blue" />
                      </div>
                      <h3 className="text-2xl font-bold text-aemet-navy">Profile</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Dr. V. Sangeetha Albin is an accomplished academic administrator with strong experience in logistics, administration, and institutional governance, contributing significantly to the growth and functioning of AMET University.
                    </p>
                  </div>
                </Card>

                {/* Education */}
                <Card className="border-none shadow-xl bg-gradient-to-br from-white to-green-50/30">
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-green-100 rounded-lg">
                        <GraduationCap className="h-6 w-6 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-aemet-navy">Educational Qualifications</h3>
                    </div>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="text-green-600 mt-1">•</span>
                        <span>Bachelor's degree in Electronics & Electrical Engineering</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-600 mt-1">•</span>
                        <span>Master's degree in Shipping and Logistics</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-600 mt-1">•</span>
                        <span>Doctoral Degree (Ph.D.) in Management Studies, University of Madras</span>
                      </li>
                    </ul>
                  </div>
                </Card>

                {/* Professional Experience */}
                <Card className="border-none shadow-xl bg-gradient-to-br from-white to-amber-50/30">
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-amber-100 rounded-lg">
                        <Briefcase className="h-6 w-6 text-amber-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-aemet-navy">Professional Experience</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-2 h-2 bg-aemet-blue rounded-full"></div>
                        <div>
                          <span className="font-semibold text-aemet-navy">Registrar (i/c)</span>
                          <span className="text-gray-600 ml-2">- AMET University</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-2 h-2 bg-aemet-blue rounded-full"></div>
                        <div>
                          <span className="font-semibold text-aemet-navy">Director – Administration</span>
                          <span className="text-gray-600 ml-2">- AMET University (Over a decade of service)</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-2 h-2 bg-aemet-blue rounded-full"></div>
                        <div>
                          <span className="font-semibold text-aemet-navy">Joint Registrar</span>
                          <span className="text-gray-600 ml-2">- AMET University (2 years)</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-2 h-2 bg-aemet-blue rounded-full"></div>
                        <div>
                          <span className="font-semibold text-aemet-navy">Solutions Engineering – South India Manager</span>
                          <span className="text-gray-600 ml-2">- Kuehne-Nagel, Germany-based MNC</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-2 h-2 bg-aemet-blue rounded-full"></div>
                        <div>
                          <span className="font-semibold text-aemet-navy">Deputation in Bremen, Germany</span>
                          <span className="text-gray-600 ml-2">- Managing European logistics projects</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Vision Quote */}
                <Card className="border-none shadow-xl bg-gradient-to-r from-aemet-navy to-aemet-blue text-white">
                  <div className="p-8 text-center">
                    <Award className="h-12 w-12 mx-auto mb-4 opacity-80" />
                    <blockquote className="text-xl md:text-2xl font-light italic mb-4">
                      "Excellence in administration is achieved through dedication, innovation, and a commitment to institutional growth."
                    </blockquote>
                    <p className="text-sm opacity-90">- Dr. V. Sangeetha Albin</p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  } else if (id === 'deepa-rajesh') {
    const biographyParagraphs = [
      "Dr. Deepa Rajesh serves as the Vice President (Academics) and Executive Director of AMET Business School at AMET University, Chennai. She brings rich academic, research, and administrative experience to these roles. Dr. Rajesh specialized in Human Resources and Systems and completed her doctorate at the University of Madras, Chennai.",
      "In addition to her primary responsibilities, she serves as the Director of the Human Resource Development Centre at AMET University and as the Nodal Officer for AMET University Academic and Administrative Development Centre (AADC) within the Association of Indian Universities.",
      "Her commitment to academic excellence is reflected in her numerous publications in peer-reviewed and Scopus-indexed journals and books. Dr. Rajesh has organized multiple international and national conferences and seminars focused on recent advancements in sustainability.",
      "As a respected academic, she has served as a resource person at national and international conferences, workshops, and faculty development programs. Her expertise has also led to appointments on editorial and review boards of peer-reviewed and Scopus-indexed journals."
    ];

    const academicRoles = (
      <div className="space-y-4">
        <p>Academic and Administrative Roles:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Vice President (Academics), AMET University</li>
          <li>Executive Director, AMET Business School</li>
          <li>Director, Human Resource Development Centre, AMET University</li>
          <li>Nodal Officer, AMET University Academic and Administrative Development Centre (AADC), Association of Indian University</li>
          <li>Board of Studies Member, Guru Nanak College, Chennai</li>
        </ul>
      </div>
    );

    const teachingExperience = (
      <div className="space-y-4">
        <p>Teaching Experience:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Visiting Professor, University of Madras (educating working professionals on weekends)</li>
          <li>External Examiner, Tamil Nadu Open University</li>
          <li>External Examiner, SRM University, Chennai</li>
          <li>Specialization in Human Resources and Systems</li>
        </ul>
      </div>
    );

    const researchContributions = (
      <div className="space-y-4">
        <p>Research and Academic Contributions:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Published numerous articles in peer-reviewed and Scopus-indexed journals</li>
          <li>Published books in the field of management</li>
          <li>Organized international and national conferences on sustainability advancements</li>
          <li>Served as resource person for conferences, workshops, and faculty development programs</li>
          <li>Editorial and review board member for peer-reviewed and Scopus-indexed journals</li>
        </ul>
      </div>
    );

    const awards = [
      "Best Citizen of India Gold Medal Award",
      "Young Researcher Award for Outstanding Contribution in Management Research"
    ];

    return (
      <Layout>
        <div className="pt-28">
          <div className="bg-gray-50 py-3 border-b">
            <div className="container mx-auto px-4">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href={backLink}>{backLabel}</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Dr. Deepa Rajesh</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>

          <Separator className="border-gray-200" />

          <div className="container mx-auto px-4 py-12 mt-8">
            <div className="max-w-4xl mx-auto">
              <ProfileHeader 
                name="Dr. Deepa Rajesh"
                title="Vice President (Academics) & Executive Director, AMET Business School"
                phone="91 - 44 - 2744 4625 / 627 / 628"
                imageSrc="/lovable-uploads/429f91b4-c192-48b9-8492-38bc8acd8b91.png"
              />

              <Separator className="my-8" />

              <Card className="relative overflow-hidden border-none bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 shadow-xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-aemet-blue/5 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-aemet-navy/5 to-transparent rounded-full translate-y-24 -translate-x-24"></div>
                <div className="relative p-8 md:p-10">
                  <div className="prose max-w-none">
                  <Biography title="Profile and Experience" paragraphs={biographyParagraphs} />
                  
                  <div className="mt-8">
                    <SocialInitiatives 
                      title="Academic and Administrative Roles" 
                      content={academicRoles}
                      icon={<GraduationCap className="h-5 w-5" />}
                    />
                  </div>

                  <div className="mt-8">
                    <SocialInitiatives 
                      title="Teaching Experience" 
                      content={teachingExperience}
                      icon={<Globe className="h-5 w-5" />}
                    />
                  </div>

                  <div className="mt-8">
                    <SocialInitiatives 
                      title="Research and Academic Contributions" 
                      content={researchContributions}
                      icon={<BookOpen className="h-5 w-5" />}
                    />
                  </div>

                  <div className="mt-8">
                    <Awards awards={awards} />
                  </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Layout>
    );
  } else if (id === 't-sasilatha') {
    return (
      <Layout>
        <div className="pt-28">
          <div className="bg-gray-50 py-3 border-b">
            <div className="container mx-auto px-4">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href={backLink}>{backLabel}</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Dr. T. Sasilatha</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>

          <Separator className="border-gray-200" />

          <div className="container mx-auto px-4 py-12 mt-8">
            <div className="max-w-5xl mx-auto">
              <VCProfileHeader 
                name="Dr. T. Sasilatha"
                title="Principal - General Programs"
                phone="91 - 44 - 2744 4625 / 627 / 628"
                imageSrc="/lovable-uploads/a1b2c3d4-sasilatha-photo.png"
              />

              <div className="mt-12 space-y-8">
                {/* Academic Excellence Banner */}
                <div className="bg-gradient-to-r from-aemet-navy via-aemet-blue to-purple-600 text-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="h-8 w-8" />
                    <h2 className="text-2xl font-bold">30+ Years of Academic Excellence & Leadership</h2>
                  </div>
                </div>

                {/* Education & Qualifications */}
                <Card className="border-none shadow-xl bg-gradient-to-br from-white to-blue-50/30">
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-aemet-blue/10 rounded-lg">
                        <GraduationCap className="h-6 w-6 text-aemet-blue" />
                      </div>
                      <h3 className="text-2xl font-bold text-aemet-navy">Education & Qualifications</h3>
                    </div>
                    <div className="space-y-4 text-gray-700">
                      <p>With over 30 years of distinguished experience in teaching, research, and academic administration, Dr. T. Sasilatha has made significant contributions to higher education, institutional development, and international collaborations.</p>
                      
                      <div className="grid md:grid-cols-2 gap-4 mt-6">
                        <div className="space-y-3">
                          <h4 className="font-semibold text-aemet-navy mb-3">Academic Degrees</h4>
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-aemet-blue rounded-full mt-2"></div>
                            <span>B.E from Manonmaniam Sundaranar University</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-aemet-blue rounded-full mt-2"></div>
                            <span>M.E from Anna University, Chennai</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-aemet-blue rounded-full mt-2"></div>
                            <span>Ph.D. from Anna University, Chennai</span>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <h4 className="font-semibold text-aemet-navy mb-3">Professional Certifications</h4>
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                            <span>AICTE–UKIERI Leadership Development Programme (Dudley College of Technology, UK)</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                            <span>CMI Level 5 International Certificate in Leadership and Management (2020)</span>
                          </div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-4 gap-4 mt-6">
                        <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                          <div className="text-3xl font-bold text-aemet-blue">30+</div>
                          <div className="text-sm text-gray-600">Years Experience</div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                          <div className="text-3xl font-bold text-purple-600">200+</div>
                          <div className="text-sm text-gray-600">Publications</div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                          <div className="text-3xl font-bold text-amber-600">₹375L</div>
                          <div className="text-sm text-gray-600">Research Funding</div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                          <div className="text-3xl font-bold text-green-600">10</div>
                          <div className="text-sm text-gray-600">Patents</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Research & Publications */}
                <Card className="border-none shadow-xl bg-gradient-to-br from-white to-purple-50/30">
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-purple-100 rounded-lg">
                        <BookOpen className="h-6 w-6 text-purple-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-aemet-navy">Research Excellence & Publications</h3>
                    </div>
                    <p className="text-gray-700 mb-6">Dr. Sasilatha has authored over 200 articles in refereed international journals and conferences and has been the Principal Investigator for several research projects worth ₹375 Lakhs sponsored by esteemed Government organizations.</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-aemet-navy mb-3">Sponsoring Organizations</h4>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-gradient-to-r from-aemet-blue to-purple-600 text-white rounded-full text-sm">DST</span>
                          <span className="px-3 py-1 bg-gradient-to-r from-aemet-blue to-purple-600 text-white rounded-full text-sm">MOES</span>
                          <span className="px-3 py-1 bg-gradient-to-r from-aemet-blue to-purple-600 text-white rounded-full text-sm">AICTE</span>
                          <span className="px-3 py-1 bg-gradient-to-r from-aemet-blue to-purple-600 text-white rounded-full text-sm">TNSCST</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-aemet-navy mb-3">Research Areas</h4>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Artificial Intelligence</span>
                          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Signal Processing</span>
                          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">VLSI Design</span>
                          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Wireless Sensor Networks</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-white rounded-lg shadow-sm">
                      <h4 className="font-semibold text-aemet-navy mb-3">Patents & Innovations</h4>
                      <p className="text-gray-700">Her contributions to research have resulted in the publication of <strong>10 patents</strong>, <strong>3 of which have been awarded</strong>. She has guided <strong>13 Ph.D. scholars</strong> and is currently guiding <strong>8 research scholars</strong>.</p>
                    </div>
                  </div>
                </Card>

                {/* International Collaborations */}
                <Card className="border-none shadow-xl bg-gradient-to-br from-white to-green-50/30">
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-green-100 rounded-lg">
                        <Globe className="h-6 w-6 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-aemet-navy">International Collaborations & Partnerships</h3>
                    </div>
                    <p className="text-gray-700 mb-6">As Dean International Relations, Dr. Sasilatha initiated Twinning and Joint Degree Programmes with leading foreign universities. She hosted a Fulbright-Nehru Specialist Fellow through USIEF and organized more than 20 international conferences.</p>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold text-aemet-navy">Partner Universities (MoUs Signed)</h4>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                        <div className="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                          <span className="text-sm text-gray-700">Arizona State University (USA)</span>
                        </div>
                        <div className="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                          <span className="text-sm text-gray-700">Albstadt Sigmaringen University (Germany)</span>
                        </div>
                        <div className="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                          <span className="text-sm text-gray-700">Edge Hill University (UK)</span>
                        </div>
                        <div className="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                          <span className="text-sm text-gray-700">University of Portsmouth (UK)</span>
                        </div>
                        <div className="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                          <span className="text-sm text-gray-700">INTI International University (Malaysia)</span>
                        </div>
                        <div className="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                          <span className="text-sm text-gray-700">King Mongkut's University (Thailand)</span>
                        </div>
                        <div className="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                          <span className="text-sm text-gray-700">Raja Ali Haji Maritime University (Indonesia)</span>
                        </div>
                        <div className="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                          <span className="text-sm text-gray-700">University of Zambia</span>
                        </div>
                        <div className="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                          <span className="text-sm text-gray-700">NUST (Muscat, Oman)</span>
                        </div>
                      </div>

                      <div className="mt-6">
                        <h4 className="font-semibold text-aemet-navy mb-3">Countries Visited</h4>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">USA</span>
                          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">UK</span>
                          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Japan</span>
                          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Malaysia</span>
                          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Oman</span>
                          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Thailand</span>
                          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Indonesia</span>
                          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Nepal</span>
                          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Bangladesh</span>
                          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Myanmar</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Leadership Positions */}
                <Card className="border-none shadow-xl bg-gradient-to-br from-white to-amber-50/30">
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-amber-100 rounded-lg">
                        <Users className="h-6 w-6 text-amber-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-aemet-navy">Leadership & Administrative Roles</h3>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="flex items-center gap-3">
                          <Award className="h-5 w-5 text-aemet-blue" />
                          <div>
                            <div className="font-semibold text-aemet-navy">Principal - General Programs</div>
                            <div className="text-sm text-gray-600">Current Position at AMET University</div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="flex items-center gap-3">
                          <Award className="h-5 w-5 text-purple-600" />
                          <div>
                            <div className="font-semibold text-aemet-navy">Principal - Technical Programs</div>
                            <div className="text-sm text-gray-600">Former Position</div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="flex items-center gap-3">
                          <Award className="h-5 w-5 text-amber-600" />
                          <div>
                            <div className="font-semibold text-aemet-navy">Dean Academics & Dean International Relations</div>
                            <div className="text-sm text-gray-600">Initiated Twinning & Joint Degree Programmes</div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="flex items-center gap-3">
                          <Award className="h-5 w-5 text-green-600" />
                          <div>
                            <div className="font-semibold text-aemet-navy">NBA Chief Coordinator</div>
                            <div className="text-sm text-gray-600">Secured accreditation for UG and PG programmes</div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="flex items-center gap-3">
                          <Award className="h-5 w-5 text-red-600" />
                          <div>
                            <div className="font-semibold text-aemet-navy">NAAC Assessor</div>
                            <div className="text-sm text-gray-600">Government of India (Since 2019)</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Awards & Recognition */}
                <Card className="border-none shadow-xl bg-gradient-to-br from-white to-red-50/30">
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-red-100 rounded-lg">
                        <Award className="h-6 w-6 text-red-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-aemet-navy">Awards & Recognition</h3>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-white rounded-lg shadow-sm">
                        <h4 className="font-semibold text-aemet-navy mb-2">IAMU Certificate of Appreciation</h4>
                        <p className="text-sm text-gray-600">International Association of Maritime Universities - 2022, 2024, 2025</p>
                      </div>
                      <div className="p-4 bg-white rounded-lg shadow-sm">
                        <h4 className="font-semibold text-aemet-navy mb-2">AICTE & MoE Recognition</h4>
                        <p className="text-sm text-gray-600">Certificate of Appreciation for NEAT, Toycathon & Hackathon evaluations</p>
                      </div>
                      <div className="p-4 bg-white rounded-lg shadow-sm">
                        <h4 className="font-semibold text-aemet-navy mb-2">IAMU Working Group Member</h4>
                        <p className="text-sm text-gray-600">Research Projects 2025 with IAMU Secretariat, Japan</p>
                      </div>
                      <div className="p-4 bg-white rounded-lg shadow-sm">
                        <h4 className="font-semibold text-aemet-navy mb-2">Fulbright-Nehru Fellow Host</h4>
                        <p className="text-sm text-gray-600">Hosted specialist through USIEF at AMET University</p>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h4 className="font-semibold text-aemet-navy mb-3">Professional Memberships</h4>
                      <div className="flex flex-wrap gap-3">
                        <span className="px-4 py-2 bg-aemet-navy text-white rounded-lg text-sm">Life Member - ISTE</span>
                        <span className="px-4 py-2 bg-aemet-blue text-white rounded-lg text-sm">Life Member - IAENG</span>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Vision Quote */}
                <Card className="border-none shadow-xl bg-gradient-to-r from-aemet-navy to-aemet-blue text-white">
                  <div className="p-8 text-center">
                    <Award className="h-12 w-12 mx-auto mb-4 opacity-80" />
                    <blockquote className="text-xl md:text-2xl font-light italic mb-4">
                      "Creating platforms for academicians and scientists to share their ideas, while providing wider visibility to students, researchers, and teaching faculty worldwide."
                    </blockquote>
                    <p className="text-sm opacity-90">- Dr. T. Sasilatha</p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  } else if (id === 'susheela-ramachandran') {
    return (
      <Layout>
        <div className="pt-28">
          <div className="bg-gray-50 py-3 border-b">
            <div className="container mx-auto px-4">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href={backLink}>{backLabel}</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Mrs. Susheela Ramachandran</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>

          <Separator className="border-gray-200" />

          <div className="container mx-auto px-4 py-12 mt-8">
            <div className="max-w-5xl mx-auto">
              <VCProfileHeader 
                name="Mrs. Susheela Ramachandran"
                title="Managing Trustee"
                phone=""
                imageSrc="/images/susheela.png"
              />

              <div className="mt-12 space-y-8">
                {/* Leadership Banner */}
                <div className="bg-gradient-to-r from-aemet-navy via-aemet-blue to-purple-600 text-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <Award className="h-8 w-8" />
                    <h2 className="text-2xl font-bold">Leadership & Community Service</h2>
                  </div>
                </div>

                {/* Biography */}
                <Card className="border-none shadow-xl bg-gradient-to-br from-white to-blue-50/30">
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-aemet-blue/10 rounded-lg">
                        <Users className="h-6 w-6 text-aemet-blue" />
                      </div>
                      <h3 className="text-2xl font-bold text-aemet-navy">Profile</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Mrs. Susheela Ramachandran, Managing Trustee, is a Postgraduate in History. She also has a Post Graduate Diploma in Hospital Management. She is presently pursuing her Doctoral Studies. She has been closely associated with the Education system, having worked in Bentinck Higher Secondary School and Sacred Heart College.
                    </p>
                  </div>
                </Card>

                {/* Education */}
                <Card className="border-none shadow-xl bg-gradient-to-br from-white to-green-50/30">
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-green-100 rounded-lg">
                        <GraduationCap className="h-6 w-6 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-aemet-navy">Educational Qualifications</h3>
                    </div>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="text-green-600 mt-1">•</span>
                        <span>Postgraduate in History</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-600 mt-1">•</span>
                        <span>Post Graduate Diploma in Hospital Management</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-600 mt-1">•</span>
                        <span>Currently pursuing Doctoral Studies</span>
                      </li>
                    </ul>
                  </div>
                </Card>

                {/* Professional Experience */}
                <Card className="border-none shadow-xl bg-gradient-to-br from-white to-amber-50/30">
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-amber-100 rounded-lg">
                        <Briefcase className="h-6 w-6 text-amber-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-aemet-navy">Professional Experience</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-2 h-2 bg-aemet-blue rounded-full"></div>
                        <div>
                          <span className="font-semibold text-aemet-navy">Managing Trustee</span>
                          <span className="text-gray-600 ml-2">- AMET University</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-2 h-2 bg-aemet-blue rounded-full"></div>
                        <div>
                          <span className="font-semibold text-aemet-navy">Bentinck Higher Secondary School</span>
                          <span className="text-gray-600 ml-2">- Education sector experience</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-2 h-2 bg-aemet-blue rounded-full"></div>
                        <div>
                          <span className="font-semibold text-aemet-navy">Sacred Heart College</span>
                          <span className="text-gray-600 ml-2">- Education sector experience</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Sports & Interests */}
                <Card className="border-none shadow-xl bg-gradient-to-br from-white to-purple-50/30">
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-purple-100 rounded-lg">
                        <Globe className="h-6 w-6 text-purple-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-aemet-navy">Sports & Personal Interests</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      She is an active sportswoman and is keen on volleyball and kabaddi.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Volleyball</span>
                      <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Kabaddi</span>
                    </div>
                  </div>
                </Card>

                {/* Social Service */}
                <Card className="border-none shadow-xl bg-gradient-to-br from-white to-red-50/30">
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-red-100 rounded-lg">
                        <Award className="h-6 w-6 text-red-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-aemet-navy">Community Service & Social Initiatives</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Social service to the community is very close to her heart and she has undertaken several initiatives to empower the local community.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-white rounded-lg shadow-sm">
                        <h4 className="font-semibold text-aemet-navy mb-2">Tailoring Classes</h4>
                        <p className="text-sm text-gray-600">Sponsored many tailoring classes for unemployed ladies to enable self-employment</p>
                      </div>
                      <div className="p-4 bg-white rounded-lg shadow-sm">
                        <h4 className="font-semibold text-aemet-navy mb-2">Free Tuition Centre</h4>
                        <p className="text-sm text-gray-600">Running a free Tuition centre catering to 8 villages, providing education to underprivileged students</p>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Vision Quote */}
                <Card className="border-none shadow-xl bg-gradient-to-r from-aemet-navy to-aemet-blue text-white">
                  <div className="p-8 text-center">
                    <Award className="h-12 w-12 mx-auto mb-4 opacity-80" />
                    <blockquote className="text-xl md:text-2xl font-light italic mb-4">
                      "Education and community service are the pillars of a progressive society."
                    </blockquote>
                    <p className="text-sm opacity-90">- Mrs. Susheela Ramachandran</p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  } else if (id === 'nr-ramkumar') {
    const awards = [
      "Dr. S. Radhakrishnan Best Teacher Award (2020-21)",
      "Dr. S. Radhakrishnan Best Teacher Award (2021-22)",
      "Multiple awards for academic work and community service"
    ];

    return (
      <Layout>
        <div className="pt-28">
          <div className="bg-gray-50 py-3 border-b">
            <div className="container mx-auto px-4">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href={backLink}>{backLabel}</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Dr. N.R. Ramkumar</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>

          <Separator className="border-gray-200" />

          <div className="container mx-auto px-4 py-12 mt-8">
            <div className="max-w-5xl mx-auto">
              <VCProfileHeader 
                name="Dr. N.R. Ramkumar"
                title="Joint Registrar | Dean – Students Welfare | Director – Physical Education"
                phone=""
                imageSrc={jointRegistrarPhoto}
                showBadges={false}
                showStats={false}
              />

              {/* Stats Section */}
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gradient-to-br from-aemet-navy to-aemet-blue p-5 rounded-xl text-white text-center">
                  <div className="text-3xl font-bold">28+</div>
                  <div className="text-sm opacity-90">Years Experience</div>
                </div>
                <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-5 rounded-xl text-white text-center">
                  <div className="text-3xl font-bold">35</div>
                  <div className="text-sm opacity-90">Journal Papers</div>
                </div>
                <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-5 rounded-xl text-white text-center">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-sm opacity-90">AIU Tournaments</div>
                </div>
                <div className="bg-gradient-to-br from-green-600 to-green-700 p-5 rounded-xl text-white text-center">
                  <div className="text-3xl font-bold">2</div>
                  <div className="text-sm opacity-90">Books Published</div>
                </div>
              </div>

              <div className="mt-12 space-y-8">
                {/* Leadership Banner */}
                <div className="bg-gradient-to-r from-aemet-navy via-aemet-blue to-purple-600 text-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <Award className="h-8 w-8" />
                    <div>
                      <h2 className="text-2xl font-bold">Senior Academic-Administrative Leader</h2>
                      <p className="text-sm opacity-90 mt-1">Combining responsibilities as Dean (Students Welfare), Director of Physical Education, and Joint Registrar</p>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <Card className="border-none shadow-xl bg-gradient-to-br from-white to-blue-50/30">
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-aemet-blue/10 rounded-lg">
                        <Users className="h-6 w-6 text-aemet-blue" />
                      </div>
                      <h3 className="text-2xl font-bold text-aemet-navy">Profile</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Dr. N. R. Ramkumar is among the senior academic-administrative leaders at AMET University — combining responsibilities as Dean (Students Welfare), Director of Physical Education, and holding registrar-level administrative representation. He brings decades of experience in student administration, sports and physical education, and a track record of promoting holistic student welfare. Under his oversight, AMET's student support, sports, and extra-curricular initiatives are shaped — reflecting the institution's commitment to well-rounded maritime education beyond just academics.
                    </p>
                  </div>
                </Card>

                {/* Education */}
                <Card className="border-none shadow-xl bg-gradient-to-br from-white to-green-50/30">
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-green-100 rounded-lg">
                        <GraduationCap className="h-6 w-6 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-aemet-navy">Education & Qualifications</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-white rounded-lg shadow-sm">
                        <span className="font-semibold text-aemet-navy">M.Com</span>
                        <p className="text-sm text-gray-600">Master of Commerce</p>
                      </div>
                      <div className="p-4 bg-white rounded-lg shadow-sm">
                        <span className="font-semibold text-aemet-navy">M.P.E.S.</span>
                        <p className="text-sm text-gray-600">Master of Physical Education & Sports</p>
                      </div>
                      <div className="p-4 bg-white rounded-lg shadow-sm">
                        <span className="font-semibold text-aemet-navy">M.Phil. (N.I.S.)</span>
                        <p className="text-sm text-gray-600">Master of Philosophy</p>
                      </div>
                      <div className="p-4 bg-white rounded-lg shadow-sm">
                        <span className="font-semibold text-aemet-navy">P.G.D.E.M.</span>
                        <p className="text-sm text-gray-600">Post Graduate Diploma in Education Management</p>
                      </div>
                      <div className="p-4 bg-white rounded-lg shadow-sm md:col-span-2">
                        <span className="font-semibold text-aemet-navy">Ph.D.</span>
                        <p className="text-sm text-gray-600">Doctor of Philosophy - Specialization in Physical Education and Sports</p>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Current Roles */}
                <Card className="border-none shadow-xl bg-gradient-to-br from-white to-indigo-50/30">
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-indigo-100 rounded-lg">
                        <Briefcase className="h-6 w-6 text-indigo-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-aemet-navy">Current Roles & Responsibilities</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="p-4 bg-gradient-to-r from-indigo-50 to-white rounded-lg border-l-4 border-indigo-600">
                        <h4 className="font-semibold text-aemet-navy">Joint Registrar</h4>
                        <p className="text-sm text-gray-600">Registrar-level administrative representation at AMET University</p>
                      </div>
                      <div className="p-4 bg-gradient-to-r from-purple-50 to-white rounded-lg border-l-4 border-purple-600">
                        <h4 className="font-semibold text-aemet-navy">Dean – Students Welfare</h4>
                        <p className="text-sm text-gray-600">Oversees student welfare, support systems, extracurricular & co-curricular activities, student council, clubs/cells, hostel/transport/student-facilitation services</p>
                      </div>
                      <div className="p-4 bg-gradient-to-r from-green-50 to-white rounded-lg border-l-4 border-green-600">
                        <h4 className="font-semibold text-aemet-navy">Director – Physical Education</h4>
                        <p className="text-sm text-gray-600">Head of Department, Physical Education - overseeing sports programs and physical education curriculum</p>
                      </div>
                      <div className="p-4 bg-gradient-to-r from-amber-50 to-white rounded-lg border-l-4 border-amber-600">
                        <h4 className="font-semibold text-aemet-navy">Nodal Officer – Student Facilitation Services</h4>
                        <p className="text-sm text-gray-600">Oversees non-academic student facilities like transport, hostels, and other support services</p>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Experience & Contributions */}
                <Card className="border-none shadow-xl bg-gradient-to-br from-white to-amber-50/30">
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-amber-100 rounded-lg">
                        <Globe className="h-6 w-6 text-amber-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-aemet-navy">Experience & Contributions</h3>
                    </div>
                    <div className="space-y-4 text-gray-700">
                      <p className="leading-relaxed">
                        With approximately <strong>28 years of teaching experience</strong>, Dr. Ramkumar has been a cornerstone of AMET University's student development initiatives.
                      </p>
                      <p className="leading-relaxed">
                        He serves as a <strong>National Representative on the Association of Indian Universities (AIU) Sports Board</strong>, and has coordinated over <strong>15 national AIU tournaments</strong> in sports like Tug of War, Table Tennis, Volleyball, and more.
                      </p>
                      <p className="leading-relaxed">
                        Dr. Ramkumar is a member of the <strong>Academic Council for 2024–25</strong> under the "Dean – Students Welfare" slot.
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Sports & Physical Education */}
                <Card className="border-none shadow-xl bg-gradient-to-br from-white to-purple-50/30">
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-purple-100 rounded-lg">
                        <BookOpen className="h-6 w-6 text-purple-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-aemet-navy">Sports & Physical Education Focus</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Active engagement in physical education and multiple sports disciplines:
                    </p>
                    <div className="flex flex-wrap gap-3 mb-6">
                      <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Cricket (Men)</span>
                      <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Handball</span>
                      <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Tennis</span>
                      <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Table Tennis</span>
                      <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Volleyball</span>
                      <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Swimming</span>
                      <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Kabaddi</span>
                      <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Basketball</span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-white rounded-lg shadow-sm">
                        <div className="text-2xl font-bold text-purple-600">35</div>
                        <p className="text-sm text-gray-600">Journal Papers Published</p>
                      </div>
                      <div className="p-4 bg-white rounded-lg shadow-sm">
                        <div className="text-2xl font-bold text-purple-600">2</div>
                        <p className="text-sm text-gray-600">Books Authored</p>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Awards */}
                <Card className="border-none shadow-xl bg-gradient-to-br from-white to-amber-50/30">
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-amber-100 rounded-lg">
                        <Award className="h-6 w-6 text-amber-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-aemet-navy">Awards & Recognition</h3>
                    </div>
                    <div className="grid gap-3">
                      {awards.map((award, index) => (
                        <div key={index} className="flex gap-3 bg-gradient-to-r from-amber-50 to-white p-4 rounded-lg border border-amber-100 hover:shadow-md transition-shadow">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-yellow-600 text-white flex items-center justify-center text-sm font-bold shadow-md">
                            {index + 1}
                          </div>
                          <p className="text-gray-700 leading-relaxed flex-1">{award}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>

                {/* Vision Quote */}
                <Card className="border-none shadow-xl bg-gradient-to-r from-aemet-navy to-aemet-blue text-white">
                  <div className="p-8 text-center">
                    <Award className="h-12 w-12 mx-auto mb-4 opacity-80" />
                    <blockquote className="text-xl md:text-2xl font-light italic mb-4">
                      "Ensuring comfort and safety for students, offering them platforms for extracurricular and co-curricular growth, and aiming for well-rounded development beyond academics."
                    </blockquote>
                    <p className="text-sm opacity-90">- Dr. N.R. Ramkumar</p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  } else if (id === 'm-jayaprakashvel') {
    return (
      <Layout>
        <div className="pt-28">
          <div className="bg-gray-50 py-3 border-b">
            <div className="container mx-auto px-4">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href={backLink}>{backLabel}</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Prof. M. Jayaprakashvel</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>

          <Separator className="border-gray-200" />

          <div className="container mx-auto px-4 py-12 mt-8">
            <div className="max-w-5xl mx-auto">
              <VCProfileHeader 
                name="Prof. M. Jayaprakashvel, M.Sc., Ph.D."
                title="Special Officer – Institutional Development | Coordinator – IQAC | Professor of Marine Biotechnology"
                phone="+91 98405 29274"
                email="jayaprakashvel.m@ametuniv.ac.in"
                imageSrc={specialOfficerPhoto}
                showBadges={false}
                showStats={false}
              />

              {/* Stats Section */}
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gradient-to-br from-aemet-navy to-aemet-blue p-5 rounded-xl text-white text-center">
                  <div className="text-3xl font-bold">17+</div>
                  <div className="text-sm opacity-90">Years at AMET</div>
                </div>
                <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-5 rounded-xl text-white text-center">
                  <div className="text-3xl font-bold">77</div>
                  <div className="text-sm opacity-90">Research Papers</div>
                </div>
                <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-5 rounded-xl text-white text-center">
                  <div className="text-3xl font-bold">850+</div>
                  <div className="text-sm opacity-90">Citations</div>
                </div>
                <div className="bg-gradient-to-br from-green-600 to-green-700 p-5 rounded-xl text-white text-center">
                  <div className="text-3xl font-bold">11</div>
                  <div className="text-sm opacity-90">Ph.D. Scholars</div>
                </div>
              </div>

              <div className="mt-12 space-y-8">
                {/* Leadership Banner */}
                <div className="bg-gradient-to-r from-aemet-navy via-aemet-blue to-purple-600 text-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <Award className="h-8 w-8" />
                    <div>
                      <h2 className="text-2xl font-bold">Senior Academic Leader & Administrator</h2>
                      <p className="text-sm opacity-90 mt-1">Leading Institutional Development, Quality Assurance & Marine Biotechnology Research</p>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <Card className="border-none shadow-xl bg-gradient-to-br from-white to-blue-50/30">
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-aemet-blue/10 rounded-lg">
                        <Users className="h-6 w-6 text-aemet-blue" />
                      </div>
                      <h3 className="text-2xl font-bold text-aemet-navy">Profile Summary</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      A senior academic leader and administrator with a Doctorate in Industrial Microbiology (University of Madras) and over 17 years of uninterrupted service at AMET Deemed to be University, Chennai, holding progressively responsible academic and administrative leadership roles.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Currently serving as Special Officer – Institutional Development, Coordinator – IQAC, and Professor of Marine Biotechnology, with prior roles including Registrar (i/c), Director – Research, Controller of Examinations (i/c), Director – Ranking & Accreditation, and Head of Department at AMET.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Recognized for institution-building, accreditation and ranking leadership, regulatory compliance, policy formulation, academic governance, research administration, digital transformation, and strategic planning. Contributed for two cycles of NAAC accreditation, resulting in institutional progression from <span className="font-semibold text-aemet-blue">B Grade (2.43 CGPA) to A Grade (3.13 CGPA)</span>, and led multiple national and international ranking, accreditation, and recognition initiatives at AMET.
                    </p>
                  </div>
                </Card>

                {/* Key Expertise */}
                <Card className="border-none shadow-xl bg-gradient-to-br from-white to-green-50/30">
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-green-100 rounded-lg">
                        <BookOpen className="h-6 w-6 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-aemet-navy">Key Expertise</h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 bg-aemet-navy text-white rounded-lg text-sm">Strategic Planning for Institutional Development</span>
                      <span className="px-4 py-2 bg-aemet-blue text-white rounded-lg text-sm">Ranking & Accreditation (NAAC, NBA, NIRF, ARIIA)</span>
                      <span className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm">Regulatory Compliance (UGC, AICTE, DEB, DGS, MoE)</span>
                      <span className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm">Academic Governance & University Administration</span>
                      <span className="px-4 py-2 bg-amber-600 text-white rounded-lg text-sm">Policy Development & Implementation</span>
                      <span className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm">Research Administration & Grant Management</span>
                      <span className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm">Digital Transformation, ERP & LMS</span>
                      <span className="px-4 py-2 bg-teal-600 text-white rounded-lg text-sm">Entrepreneurship and Innovation</span>
                      <span className="px-4 py-2 bg-pink-600 text-white rounded-lg text-sm">Industry Collaboration & International Partnerships</span>
                      <span className="px-4 py-2 bg-slate-600 text-white rounded-lg text-sm">Data Governance & Institutional Analytics</span>
                      <span className="px-4 py-2 bg-cyan-600 text-white rounded-lg text-sm">Talent Acquisition & Team Building</span>
                      <span className="px-4 py-2 bg-orange-600 text-white rounded-lg text-sm">Benchmarking & Perception Enhancement</span>
                    </div>
                  </div>
                </Card>

                {/* Administrative Experience */}
                <Card className="border-none shadow-xl bg-gradient-to-br from-white to-purple-50/30">
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-purple-100 rounded-lg">
                        <Briefcase className="h-6 w-6 text-purple-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-aemet-navy">Key Administrative Experience</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border-l-4 border-aemet-blue">
                        <div className="text-sm font-semibold text-aemet-blue whitespace-nowrap">2024 – Present</div>
                        <div className="font-medium text-aemet-navy">Special Officer – Institutional Development</div>
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border-l-4 border-purple-600">
                        <div className="text-sm font-semibold text-purple-600 whitespace-nowrap">2020 – 2023</div>
                        <div className="font-medium text-aemet-navy">Registrar (i/c) – AMET</div>
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border-l-4 border-green-600">
                        <div className="text-sm font-semibold text-green-600 whitespace-nowrap">2013 – 2020 & 2024</div>
                        <div className="font-medium text-aemet-navy">Coordinator – IQAC</div>
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border-l-4 border-amber-600">
                        <div className="text-sm font-semibold text-amber-600 whitespace-nowrap">2015 – 2020</div>
                        <div className="font-medium text-aemet-navy">Director – Research</div>
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border-l-4 border-red-600">
                        <div className="text-sm font-semibold text-red-600 whitespace-nowrap">2013</div>
                        <div className="font-medium text-aemet-navy">Controller of Examinations (i/c)</div>
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border-l-4 border-indigo-600">
                        <div className="text-sm font-semibold text-indigo-600 whitespace-nowrap">2009 – 2020</div>
                        <div className="font-medium text-aemet-navy">Head, Department of Marine Biotechnology</div>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Major Contributions */}
                <Card className="border-none shadow-xl bg-gradient-to-br from-white to-amber-50/30">
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-amber-100 rounded-lg">
                        <Award className="h-6 w-6 text-amber-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-aemet-navy">Major Contributions & Achievements</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex gap-3 p-3 bg-white rounded-lg border border-amber-100">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">Led institutional transformation and governance reforms as Registrar, including technology-enabled administration and compliance systems</span>
                      </div>
                      <div className="flex gap-3 p-3 bg-white rounded-lg border border-amber-100">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">Successfully processed institution-level proposals: Off-Campus, 2f & 12B status, ODL-OL approvals, DSIR-SIRO recognition, and new program approvals</span>
                      </div>
                      <div className="flex gap-3 p-3 bg-white rounded-lg border border-amber-100">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">Long-term Coordinator of IQAC, establishing quality systems from inception and managing two NAAC cycles</span>
                      </div>
                      <div className="flex gap-3 p-3 bg-white rounded-lg border border-amber-100">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">Nodal Officer for NAAC (since 2013), AISHE (since 2015), NIRF & ARIIA (since inception)</span>
                      </div>
                      <div className="flex gap-3 p-3 bg-white rounded-lg border border-amber-100">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">Facilitated over 80 MoUs, strengthened industry–academia collaboration, and supported entrepreneurship and incubation initiatives</span>
                      </div>
                      <div className="flex gap-3 p-3 bg-white rounded-lg border border-amber-100">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">Led digital transformation initiatives including online examinations (pre-COVID), LMS for regular and ODL programs, MOOC platforms</span>
                      </div>
                      <div className="flex gap-3 p-3 bg-white rounded-lg border border-amber-100">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">Administered 80+ funded research projects as Registrar and Director – Research</span>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Educational Qualifications */}
                <Card className="border-none shadow-xl bg-gradient-to-br from-white to-blue-50/30">
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-aemet-blue/10 rounded-lg">
                        <GraduationCap className="h-6 w-6 text-aemet-blue" />
                      </div>
                      <h3 className="text-2xl font-bold text-aemet-navy">Educational Qualifications</h3>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-aemet-navy text-white">
                            <th className="p-3 text-left rounded-tl-lg">Degree</th>
                            <th className="p-3 text-left">Discipline</th>
                            <th className="p-3 text-left">Institution</th>
                            <th className="p-3 text-left">Year</th>
                            <th className="p-3 text-left rounded-tr-lg">Result</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-white border-b">
                            <td className="p-3 font-medium">Ph.D.</td>
                            <td className="p-3">Industrial Microbiology (Botany)</td>
                            <td className="p-3">CAS in Botany, University of Madras</td>
                            <td className="p-3">2004-2009</td>
                            <td className="p-3 text-green-600 font-medium">Thesis Highly Commended</td>
                          </tr>
                          <tr className="bg-gray-50 border-b">
                            <td className="p-3 font-medium">M.Sc.</td>
                            <td className="p-3">Industrial Microbiology</td>
                            <td className="p-3">CAS in Botany, University of Madras</td>
                            <td className="p-3">2000-2002</td>
                            <td className="p-3 text-green-600 font-medium">Outstanding (76.61%)</td>
                          </tr>
                          <tr className="bg-white">
                            <td className="p-3 font-medium rounded-bl-lg">B.Sc.</td>
                            <td className="p-3">Microbiology</td>
                            <td className="p-3">Kandaswamy Kandar College (UoM)</td>
                            <td className="p-3">1997-2000</td>
                            <td className="p-3 text-green-600 font-medium rounded-br-lg">First Class (74.41%)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </Card>

                {/* Research Output */}
                <Card className="border-none shadow-xl bg-gradient-to-br from-white to-indigo-50/30">
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-indigo-100 rounded-lg">
                        <Globe className="h-6 w-6 text-indigo-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-aemet-navy">Research Output</h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                      <div className="p-4 bg-white rounded-lg shadow-sm text-center">
                        <div className="text-3xl font-bold text-aemet-blue">77</div>
                        <div className="text-sm text-gray-600">Research Papers</div>
                      </div>
                      <div className="p-4 bg-white rounded-lg shadow-sm text-center">
                        <div className="text-3xl font-bold text-purple-600">11</div>
                        <div className="text-sm text-gray-600">Book Chapters</div>
                      </div>
                      <div className="p-4 bg-white rounded-lg shadow-sm text-center">
                        <div className="text-3xl font-bold text-amber-600">7 + 5</div>
                        <div className="text-sm text-gray-600">Books & E-books</div>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-gradient-to-r from-aemet-blue/10 to-white rounded-lg">
                        <h4 className="font-semibold text-aemet-navy mb-2">Google Scholar Citations</h4>
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-bold text-aemet-blue">850+</span>
                          <span className="text-sm text-gray-600">(h-index 17)</span>
                        </div>
                      </div>
                      <div className="p-4 bg-gradient-to-r from-purple-100/50 to-white rounded-lg">
                        <h4 className="font-semibold text-aemet-navy mb-2">Scopus Citations</h4>
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-bold text-purple-600">280+</span>
                          <span className="text-sm text-gray-600">(h-index 10)</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-white rounded-lg shadow-sm">
                      <div className="flex items-center gap-3">
                        <Award className="h-5 w-5 text-amber-600" />
                        <span className="text-gray-700">1 Patent (Published)</span>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Ph.D. Scholars */}
                <Card className="border-none shadow-xl bg-gradient-to-br from-white to-teal-50/30">
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-teal-100 rounded-lg">
                        <Users className="h-6 w-6 text-teal-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-aemet-navy">Ph.D. Guidance</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-white rounded-lg shadow-sm text-center">
                        <div className="text-3xl font-bold text-teal-600">6</div>
                        <div className="text-sm text-gray-600">Ph.D. Scholars Awarded</div>
                      </div>
                      <div className="p-4 bg-white rounded-lg shadow-sm text-center">
                        <div className="text-3xl font-bold text-teal-600">5</div>
                        <div className="text-sm text-gray-600">Ph.D. Scholars Ongoing</div>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-gray-600">Examiner and Doctoral Committee member for multiple universities</p>
                  </div>
                </Card>

                {/* Honours & Awards */}
                <Card className="border-none shadow-xl bg-gradient-to-br from-white to-yellow-50/30">
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-yellow-100 rounded-lg">
                        <Award className="h-6 w-6 text-yellow-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-aemet-navy">Honours & Awards</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex gap-3 bg-gradient-to-r from-yellow-50 to-white p-4 rounded-lg border border-yellow-100">
                        <Award className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Best Teacher Award (Senior Category) – 2025 - Microbiologists Society of India</span>
                      </div>
                      <div className="flex gap-3 bg-gradient-to-r from-yellow-50 to-white p-4 rounded-lg border border-yellow-100">
                        <Award className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Grant for Science & Technology Publications in Tamil (2024), TNSCST, Government of Tamil Nadu</span>
                      </div>
                      <div className="flex gap-3 bg-gradient-to-r from-yellow-50 to-white p-4 rounded-lg border border-yellow-100">
                        <Award className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Consultation Committee Member SIRF, TANSCHE (2024)</span>
                      </div>
                      <div className="flex gap-3 bg-gradient-to-r from-yellow-50 to-white p-4 rounded-lg border border-yellow-100">
                        <Award className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Best Faculty – AMET (2015) & Best Faculty for Research Guidance – AMET (2019)</span>
                      </div>
                      <div className="flex gap-3 bg-gradient-to-r from-yellow-50 to-white p-4 rounded-lg border border-yellow-100">
                        <Award className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Junior Research Fellowship – Aventis CropScience, Belgium</span>
                      </div>
                      <div className="flex gap-3 bg-gradient-to-r from-yellow-50 to-white p-4 rounded-lg border border-yellow-100">
                        <Award className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Author of Most Cited Paper – Journal of Modern Biotechnology</span>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Vision Quote */}
                <Card className="border-none shadow-xl bg-gradient-to-r from-aemet-navy to-aemet-blue text-white">
                  <div className="p-8 text-center">
                    <Award className="h-12 w-12 mx-auto mb-4 opacity-80" />
                    <blockquote className="text-xl md:text-2xl font-light italic mb-4">
                      "Quality assurance, strategic planning, and digital transformation are the cornerstones of institutional excellence and global recognition."
                    </blockquote>
                    <p className="text-sm opacity-90">- Prof. M. Jayaprakashvel</p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <NotFoundMessage 
        type="profile"
        title="Profile Not Found"
        message="The faculty or staff profile you are looking for does not exist or has been moved."
      />
    </Layout>
  );
};

export default Profile;

