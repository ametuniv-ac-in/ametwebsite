import React from 'react';
import { Target, BookOpen, Cloud, Globe, Lightbulb, Monitor, Anchor, Settings, Clock, TrendingUp } from 'lucide-react';

const objectives = [
  {
    icon: BookOpen,
    title: "Knowledge Sharing",
    description: "To promote knowledge sharing through institutional repositories, open-access journals, and scholarly communication while fostering intellectual curiosity."
  },
  {
    icon: Lightbulb,
    title: "Research & Innovation",
    description: "To support research and innovation by providing access to research tools, databases, and Open Educational Resources (OERs), along with expert guidance for students and faculty."
  },
  {
    icon: Cloud,
    title: "Modern Technology",
    description: "To leverage modern technology by implementing a cloud-based library management system for seamless integration and efficient resource management."
  },
  {
    icon: Globe,
    title: "24/7 Remote Access",
    description: "To ensure 24/7 remote access to digital resources and virtual reference services, enabling learning and research anytime, anywhere."
  },
  {
    icon: Target,
    title: "Indian Knowledge Systems",
    description: "To integrate research on Indian Knowledge Systems (IKS) with the goals of India's National Education Policy (NEP), thereby preserving and promoting indigenous knowledge, and to serve the user community by providing the right information at the right time."
  },
  {
    icon: Monitor,
    title: "Digital Repositories",
    description: "To enhance the availability of digital repositories of teaching and research materials through Information and Communication Technology (ICT), accessible anytime and anywhere."
  },
  {
    icon: Anchor,
    title: "Maritime Resources",
    description: "To inspire learning and discovery through maritime information resources by providing global connectivity to digital networks and learning platforms."
  }
];

const facilities = [
  {
    icon: Settings,
    title: "Library Automation",
    description: "Library is fully automated with an Integrated Library Management System (ILMS) with RFID that manages cataloguing, circulation, acquisition, serial control, and user records."
  },
  {
    icon: Clock,
    title: "Remote Access",
    description: "Remote access to e-library facilities is extended 24x7 through INFED from INFLIBNET."
  },
  {
    icon: TrendingUp,
    title: "Annual Upgradation",
    description: "Library is annual upgradation of latest edition of IMO, AICTE, DGS and other publication books for enrichment of reading."
  }
];

const ObjectivesSection: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Objectives Section */}
      <div>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-aemet-navy mb-3">Our Objectives</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-aemet-blue to-aemet-teal mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Committed to excellence in library services and supporting the academic community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {objectives.map((objective, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-aemet-blue/30"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-aemet-blue to-aemet-navy rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <objective.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-aemet-navy mb-2 group-hover:text-aemet-blue transition-colors">
                    {objective.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {objective.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Facilities Section */}
      <div className="bg-gradient-to-br from-aemet-navy/5 to-aemet-blue/5 rounded-2xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-aemet-navy mb-2">Library Facilities</h2>
          <div className="w-16 h-1 bg-aemet-teal mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-aemet-blue/10"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-aemet-teal to-aemet-blue rounded-full flex items-center justify-center mb-4 mx-auto">
                <facility.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-aemet-navy text-center mb-3">
                {facility.title}
              </h3>
              <p className="text-gray-600 text-sm text-center leading-relaxed">
                {facility.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ObjectivesSection;
