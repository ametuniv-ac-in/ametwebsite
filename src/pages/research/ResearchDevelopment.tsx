
import React from 'react';
import ResearchLayout from '@/components/research/ResearchLayout';
import { Separator } from "@/components/ui/separator";

import { Card, CardContent } from "@/components/ui/card";

const ResearchDevelopment = () => {
  // Research accomplishments data
  const accomplishments = [
    { metric: "Total No of Publications", value: "3382" },
    { metric: "Publications in Scopus", value: "2286" },
    { metric: "Publications in Web of Science", value: "709" },
    { metric: "Total Citation (Scopus)", value: "13157" },
    { metric: "Total Citation (Web of Science)", value: "7026" },
    { metric: "H-index of the University (Scopus)", value: "43" },
    { metric: "H-index of the University (Web of Science)", value: "35" },
    { metric: "Other Indexed Journal Articles", value: "64" },
    { metric: "Cumulative Impact Factor", value: "1428.12" },
    { metric: "Highest Impact Factor", value: "12.7" },
    { metric: "I10 index", value: "250" },
    { metric: "No of Books and Chapters Published", value: "856" },
    { metric: "No of Patents Filed and Published", value: "106" },
  ];

  return (
    <ResearchLayout title="Research & Development">
      <div className="py-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-aemet-navy mb-4">RESEARCH & DEVELOPMENT</h1>
          <p className="max-w-3xl mx-auto text-gray-600">
            AMET University is committed to excellence in research and innovation across various disciplines
          </p>
          <Separator className="max-w-md mx-auto my-6 bg-aemet-blue/30" />
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="space-y-10">
            {/* Vision and Mission Section */}
            <section className="bg-gradient-to-r from-aemet-navy/5 to-aemet-blue/5 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-aemet-navy mb-6 text-center">VISION AND MISSION</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-l-4 border-l-aemet-navy">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold text-aemet-navy mb-4">Vision</h3>
                    <p className="text-gray-700 leading-relaxed">
                      To be a leading maritime university of international standards by providing state-of-the-art research infrastructure to researchers and prioritizing research excellence through SCOPUS-indexed and high-impact factor publications arising from funded and academic research projects.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-aemet-blue">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold text-aemet-navy mb-4">Mission</h3>
                    <p className="text-gray-700 leading-relaxed">
                      To create world-class research facilities on the university campus to cater to the needs of research scholars, facilitate high-quality research, and foster both sponsored and academic research that advances the frontiers of knowledge and contributes to the growth of industry and society.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Research Infrastructure Section */}
            <section>
              <p className="text-gray-700 leading-relaxed mb-4">
                To uphold strong governance policies and establish a robust research infrastructure, positioning AMET University as a research-intensive institution through continuous quality enhancement and sustainable initiatives. The University is committed to promoting academic research that leads to Ph.D. degrees across 15 academic disciplines. To support this, AMET has appointed full-time faculty members with Ph.D. qualifications to supervise research scholars, in accordance with the UGC Ph.D. Regulations, 2023.
              </p>
              <p className="text-gray-700 leading-relaxed">
                AMET University boasts sophisticated research laboratories, equipped with over 126 major instruments, to support advanced academic research in the field of Maritime Studies. In line with the latest academic advancements, the University has introduced Ph.D. programs across all academic disciplines, adhering strictly to the UGC Regulations, 2022, and the amendments made in 2023.
              </p>
            </section>

            {/* Research Accomplishments Section */}
            <section>
              <h2 className="text-2xl font-bold text-aemet-navy mb-6">Salient Research Accomplishments</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {accomplishments.map((item, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <p className="text-3xl font-bold text-aemet-navy mb-2">{item.value}</p>
                      <p className="text-sm text-gray-600">{item.metric}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* RDC Framework Section */}
            <section>
              <h2 className="text-2xl font-bold text-aemet-navy mb-6">Prospect and Framework of the Research and Development Cell</h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  The Research and Development Cell (RDC) at AMET University functions through three distinct centres—the Centre for Academic Research, the Centre for Sponsored Research, and the Centre for Publications—each headed by an independent Director and monitored by the Dean. In accordance with the UGC communication dated 08.06.2022 and the UGC Guidelines 2022, amended at AMET in 2023, all existing research governing bodies within universities were mandated to be renamed as the Research and Development Cell (RDC).
                </p>
                <p>
                  The Guidelines for the Establishment of RDCs in Higher Education Institutions, 2022, further stipulate that every institution must establish a Research and Development Council with clearly defined objectives, supported by a comprehensive research governance framework. Accordingly, AMET's RDC is overseen by a Research Advisory Council (RAC), chaired by the Vice-Chancellor or nominee, serving as the apex body. The Director–RDC, nominated by the Vice-Chancellor from among the university's distinguished researchers, leads various committees formed to ensure effective governance, with committee members nominated by the Director–RDC and approved by the RAC.
                </p>
                <p>
                  The RDC operates with a state-of-the-art infrastructure that includes sophisticated research laboratories, specialized research centres, and advanced simulation facilities. These include Maritime Research Laboratories equipped for ship design, hydrodynamic analysis, and fluid dynamics simulations; Shipbuilding and Marine Engineering Laboratories that offer hands-on research opportunities in vessel design and testing; an Environmental Studies Center focused on sustainable maritime technologies and renewable energy solutions; a Computational Fluid Dynamics (CFD) Simulation Facility supporting high-end research in ship performance and hydrodynamics; and Marine Safety and Training Simulators used for studies in ship safety, navigation, and emergency response.
                </p>
                <p>
                  The RDC's research spans multiple domains such as maritime engineering and technology, naval architecture, marine safety, ocean engineering, environmental sustainability, and smart shipping with AI and automation. AMET's research ecosystem is further strengthened by national and international collaborations with maritime institutions, industries, and government agencies, enabling joint research projects, industry-engaged studies, and participation in global conferences and workshops. The R&D Cell actively secures funding from government bodies such as the Ministry of Shipping and the Ministry of Earth Sciences, industry-sponsored research partnerships, and international maritime research organisations, thereby supporting a dynamic and impactful research environment.
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </ResearchLayout>
  );
};

export default ResearchDevelopment;
