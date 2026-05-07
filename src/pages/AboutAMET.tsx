import React from "react";
import Layout from "@/components/Layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CallToAction from "@/components/CallToAction";
import { faculties } from "@/data/faculties";
import { Link } from "react-router-dom";
import {
  Building,
  GraduationCap,
  Globe,
  ShieldCheck,
  Trophy,
  Users,
  BookOpen,
  ScrollText,
  Building2,
  Compass,
  Ship,
  HandshakeIcon,
  Medal,
  BadgeCheck,
  Target,
  FileText,
} from "lucide-react";

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-10 md:mb-16 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-aemet-navy mb-4 tracking-tight">{title}</h2>
    {subtitle && <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>}
    <div className="w-20 h-1 bg-aemet-blue mx-auto mt-6"></div>
  </div>
);

const StatItem = ({ icon: Icon, value, label }: { icon: React.ElementType; value: string; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="w-16 h-16 rounded-full bg-aemet-navy/10 flex items-center justify-center mb-4">
      <Icon className="h-8 w-8 text-aemet-navy" />
    </div>
    <h3 className="text-4xl font-bold text-aemet-navy mb-2">{value}</h3>
    <p className="text-gray-600 text-lg">{label}</p>
  </div>
);

const AboutAMET = () => {
  return (
    <Layout>
      <div className="relative h-[60vh] bg-aemet-navy">
        <div className="absolute inset-0 bg-black/40"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/about/amet-marine-engineering-hero.jpg')",
            opacity: 0.6,
          }}
        ></div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-center tracking-tight">
            Academy of Maritime Education and Training
          </h1>
          <p className="text-xl md:text-2xl text-white/90 text-center max-w-3xl">
            Shaping the Future of Maritime Excellence Since 1993
          </p>
          <div className="flex gap-4 mt-8">
            <a
              href="#about"
              className="bg-white text-aemet-navy hover:bg-aemet-navy hover:text-white transition-all duration-300 py-3 px-6 rounded-md font-medium"
            >
              Discover AMET
            </a>
            <a
              href="#faculties"
              className="bg-transparent border border-white text-white hover:bg-white/10 transition-all duration-300 py-3 px-6 rounded-md font-medium"
            >
              Explore Faculties
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-3 border-b">
        <div className="container mx-auto px-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">About Us</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>About AMET</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-6xl mx-auto">
            <StatItem icon={Building} value="1993" label="Founded" />
            <StatItem icon={Users} value="3,500+" label="Students" />
            <StatItem icon={GraduationCap} value="8" label="Faculties" />
            <StatItem icon={Globe} value="20+" label="Global Partners" />
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="About AMET University"
            subtitle="Excellence in Maritime Education for Over Three Decades"
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center max-w-7xl mx-auto">
            <div className="lg:col-span-3 order-2 lg:order-1">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Established in 1993, the Academy of Maritime Education and Training (AMET) began its journey with just
                  14 cadets enrolled in a Higher National Diploma programme in Marine Engineering. Driven by its core
                  principles—Quality, Commitment, Knowledge, and Excellence—AMET quickly established itself as India's
                  premier maritime institution.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Globally recognized, AMET is proudly the only Indian member of the prestigious International
                  Association of Maritime Universities (IAMU). Strategically located along the scenic East Coast Road in
                  Chennai, overlooking the Bay of Bengal, AMET serves as a beacon of maritime education, offering a
                  comprehensive range of academic programmes from Diploma to Doctoral levels.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Strategically located along the scenic East Coast Road in Chennai, overlooking the Bay of Bengal, AMET
                  serves as a beacon of maritime education, offering a comprehensive range of academic programs from
                  Diploma to Doctorate levels.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-5 rounded-lg flex flex-col items-center text-center">
                  <ShieldCheck className="h-10 w-10 text-aemet-blue mb-3" />
                  <h3 className="font-semibold text-aemet-navy">Quality</h3>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg flex flex-col items-center text-center">
                  <HandshakeIcon className="h-10 w-10 text-aemet-blue mb-3" />
                  <h3 className="font-semibold text-aemet-navy">Commitment</h3>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg flex flex-col items-center text-center">
                  <BookOpen className="h-10 w-10 text-aemet-blue mb-3" />
                  <h3 className="font-semibold text-aemet-navy">Knowledge</h3>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 order-1 lg:order-2">
              <div className="relative">
                <img
                  src="/images/about/amet-navigation-student.jpg"
                  alt="AMET Campus"
                  className="w-full h-auto rounded-lg shadow-lg relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faculties" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Academic Excellence"
            subtitle="Discover our diverse range of faculties offering world-class education"
          />

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {faculties.map((faculty) => (
                <div key={faculty.id} className="group">
                  <Card
                    className="bg-white h-full border-t-4 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2"
                    style={{ borderTopColor: faculty.color }}
                  >
                    <CardContent className="p-8 flex flex-col items-center text-center">
                      <h3 className="font-semibold text-aemet-navy text-lg mb-3">{faculty.name}</h3>
                      <p className="text-gray-600 text-sm mb-4">{faculty.description}</p>
                      <div className="mt-auto pt-4 border-t w-full space-y-2">
                        <Link to={`/faculty/${faculty.id}`}>
                          <span className="text-aemet-blue font-medium text-sm flex items-center justify-center gap-2 hover:text-aemet-navy transition-colors">
                            Learn More
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        </Link>
                        {faculty.pdfProfile && (
                          <a
                            href={faculty.pdfProfile}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md text-white text-sm font-medium transition-all duration-300 hover:opacity-90 w-full"
                            style={{ backgroundColor: faculty.color }}
                          >
                            <FileText className="h-4 w-4" />
                            View Profile
                          </a>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="AMET Advantage"
            subtitle="Discover what makes AMET a global leader in maritime education"
          />

          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="facilities" className="w-full">
              <TabsList className="mb-8 w-full grid grid-cols-1 md:grid-cols-4 h-auto p-1 bg-muted">
                <TabsTrigger
                  value="facilities"
                  className="py-3 data-[state=active]:bg-white data-[state=active]:text-aemet-navy"
                >
                  <Building2 className="w-5 h-5 mr-2" /> Facilities
                </TabsTrigger>
                <TabsTrigger
                  value="placements"
                  className="py-3 data-[state=active]:bg-white data-[state=active]:text-aemet-navy"
                >
                  <Compass className="w-5 h-5 mr-2" /> Placements
                </TabsTrigger>
                <TabsTrigger
                  value="international"
                  className="py-3 data-[state=active]:bg-white data-[state=active]:text-aemet-navy"
                >
                  <Globe className="w-5 h-5 mr-2" /> International
                </TabsTrigger>
                <TabsTrigger
                  value="accreditation"
                  className="py-3 data-[state=active]:bg-white data-[state=active]:text-aemet-navy"
                >
                  <Trophy className="w-5 h-5 mr-2" /> Recognition
                </TabsTrigger>
              </TabsList>

              <TabsContent value="facilities" className="mt-0">
                <div className="bg-white rounded-lg p-8 shadow-sm">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold text-aemet-navy mb-4">Facilities and Infrastructure</h3>
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        AMET fosters an enriching learning environment featuring modern teaching aids, state-of-the-art
                        practical workshops, marine workshops offering hands-on training, and unique Ship-in-Campus
                        facilities.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Additional amenities include comfortable hostels, hygienic canteens, comprehensive indoor and
                        outdoor sports facilities, a swimming pool, and medical care, all designed to enhance student
                        experience and wellbeing.
                      </p>

                      <div className="grid grid-cols-2 gap-4 mt-8">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                            <Ship className="h-5 w-5 text-green-600" />
                          </div>
                          <span className="text-gray-700">Ship-in-Campus</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                            <Building className="h-5 w-5 text-blue-600" />
                          </div>
                          <span className="text-gray-700">Hostels</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center">
                            <BookOpen className="h-5 w-5 text-yellow-600" />
                          </div>
                          <span className="text-gray-700">Workshops</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                            <Users className="h-5 w-5 text-purple-600" />
                          </div>
                          <span className="text-gray-700">Sports Facilities</span>
                        </div>
                      </div>
                    </div>
                    <div className="h-full flex items-center justify-center">
                      <img
                        src="/images/about/amet-engine-room.jpg"
                        alt="AMET Facilities"
                        className="rounded-lg shadow-lg max-h-96 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="placements" className="mt-0">
                <div className="bg-white rounded-lg p-8 shadow-sm">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold text-aemet-navy mb-4">Placements and Industry Connect</h3>
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        With an impressive placement record, AMET stands out as a leading institution for marine-related
                        employment, with graduates securing positions in commercial shipping sectors such as chartering,
                        shipbroking, naval architecture, petroleum engineering, harbor engineering, marine electrical,
                        and electronics engineering.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Renowned for preparing students to excel globally, AMET graduates consistently achieve rewarding
                        careers, backed by robust industry collaborations and research consultancy engagements valued at
                        several crores.
                      </p>

                      <div className="mt-8">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-gray-700">Placement Rate</span>
                          <span className="text-aemet-navy font-semibold">98%</span>
                        </div>
                        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                          <div className="bg-aemet-navy h-full rounded-full" style={{ width: "98%" }}></div>
                        </div>

                        <div className="flex items-center justify-between mb-2 mt-4">
                          <span className="text-gray-700">Industry Partners</span>
                          <span className="text-aemet-navy font-semibold">120+</span>
                        </div>
                        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                          <div className="bg-aemet-blue h-full rounded-full" style={{ width: "85%" }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="h-full flex items-center justify-center">
                      <img
                        src="/images/about/amet-student-ship.jpg"
                        alt="AMET Placements"
                        className="rounded-lg shadow-lg max-h-96 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="international" className="mt-0">
                <div className="bg-white rounded-lg p-8 shadow-sm">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold text-aemet-navy mb-4">
                        International Collaborations and Recognition
                      </h3>
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        AMET has developed strong global ties, notably with nations like Nigeria, Angola, and Djibouti,
                        forging long-term partnerships to enhance maritime infrastructure and develop skilled maritime
                        professionals.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        These collaborations underscore AMET's international reputation and its role as a global hub for
                        maritime education.
                      </p>

                      <div className="mt-8 space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                            <Globe className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-aemet-navy">Global Faculty Exchange</h4>
                            <p className="text-sm text-gray-600">
                              Collaborations with leading maritime institutions worldwide
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                            <ScrollText className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-aemet-navy">Joint Research Programs</h4>
                            <p className="text-sm text-gray-600">Collaborative research with international partners</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                            <Users className="h-5 w-5 text-purple-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-aemet-navy">Student Exchange</h4>
                            <p className="text-sm text-gray-600">Opportunities for global exposure and learning</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-full flex items-center justify-center">
                      <img
                        src="/images/about/amet-students-campus.jpg"
                        alt="AMET International Collaborations"
                        className="rounded-lg shadow-lg max-h-96 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="accreditation" className="mt-0">
                <div className="bg-white rounded-lg p-8 shadow-sm">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold text-aemet-navy mb-4">Recognition and Accreditation</h3>
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        AMET's commitment to excellence is recognized through numerous prestigious accreditations and
                        memberships that validate our dedication to quality education and global standards.
                      </p>

                      <div className="space-y-6 mt-8">
                        <div className="flex items-start gap-4">
                          <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                            <Globe className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-aemet-navy">
                              International Association of Maritime Universities
                            </h4>
                            <p className="text-gray-600 mt-1">
                              Proud member representing India in this prestigious global organization
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                            <BadgeCheck className="h-6 w-6 text-green-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-aemet-navy">NAAC 'A' Grade Accreditation</h4>
                            <p className="text-gray-600 mt-1">
                              Accredited with 'A' Grade by NAAC (valid from September 2021)
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="h-12 w-12 rounded-lg bg-yellow-100 flex items-center justify-center flex-shrink-0">
                            <Medal className="h-6 w-6 text-yellow-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-aemet-navy">ISO 9001 Certification</h4>
                            <p className="text-gray-600 mt-1">
                              ISO 9001 certified for quality assurance in educational services
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-full flex items-center justify-center">
                      <img
                        src="/images/about/amet-workshop-training.jpg"
                        alt="AMET Accreditations"
                        className="rounded-lg shadow-lg max-h-96 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <section className="py-20 bg-aemet-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Vision 2025</h2>
            <div className="w-20 h-1 bg-aemet-blue mx-auto mb-10"></div>

            <div className="relative mb-12">
              <div className="relative z-10">
                <p className="text-xl text-white/90 leading-relaxed mb-6">
                  AMET's ambitious Vision 2025 aims to establish itself as the global epicenter for maritime education,
                  research, and industry solutions, positioning itself as a premier provider of maritime education,
                  training, research, and consultancy services.
                </p>
                <p className="text-xl text-white/90 leading-relaxed">
                  Through dedicated efforts in education, research, innovation, and global cooperation, AMET continues
                  to nurture maritime professionals equipped to navigate the complexities of the global maritime sector
                  confidently and successfully.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-aemet-blue/20 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-7 w-7 text-aemet-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Strategic Growth</h3>
                <p className="text-white/80">Expansion of programs and global partnerships</p>
              </div>

              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-aemet-blue/20 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-7 w-7 text-aemet-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Research Excellence</h3>
                <p className="text-white/80">Industry-focused research and development</p>
              </div>

              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-aemet-blue/20 flex items-center justify-center mx-auto mb-4">
                  <Ship className="h-7 w-7 text-aemet-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Industry Leadership</h3>
                <p className="text-white/80">Setting maritime education standards globally</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Quality and Accreditation"
            subtitle="Our commitment to excellence and continuous improvement"
          />

          <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-sm">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-center leading-relaxed mb-6">
                AMET's journey began modestly in 1993, starting with just 14 cadets enrolled in a Higher National
                Diploma in Marine Engineering. Owing to its relentless commitment to quality education, knowledge
                advancement, and excellence, AMET has grown exponentially, now nurturing over 3,500 students across
                diverse faculties.
              </p>
              <p className="text-gray-700 text-center leading-relaxed">
                AMET was accredited with an 'A' grade by the National Assessment and Accreditation Council (NAAC) in
                September 2021, a testament to its high academic and administrative standards. This accreditation
                underscores the institution's adherence to stringent quality benchmarks, valid through September 2026.
              </p>
            </div>

            <div className="flex justify-center mt-10">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-aemet-navy text-white hover:bg-aemet-navy/90 transition-all duration-300 py-3 px-6 rounded-md font-medium"
              >
                <ScrollText className="h-5 w-5" />
                Download NAAC Report
              </a>
            </div>
          </div>
        </div>
      </section>

      <CallToAction type="visit" />
    </Layout>
  );
};

export default AboutAMET;
