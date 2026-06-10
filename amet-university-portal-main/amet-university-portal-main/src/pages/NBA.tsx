
import React from 'react';
import Layout from '@/components/Layout';
import { Shield, Award, Building, Anchor, Ship, Cpu, Cog } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';

interface AccreditedDepartment {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  features: string[];
  link: string;
}

const accreditedDepartments: AccreditedDepartment[] = [
  {
    id: "electrical-electronics",
    name: "Department of Electrical and Electronics Engineering",
    description: "NBA accredited for excellence in electrical engineering education and research with focus on power systems, control systems, and electronics.",
    icon: Cpu,
    link: "/faculty/engineering/department/electrical-electronics",
    features: [
      "Advanced curriculum aligned with industry standards",
      "State-of-the-art laboratories for practical learning",
      "Industry-experienced faculty members",
      "Focus on research and innovation",
      "Strong industry partnerships for internships and placements"
    ]
  },
  {
    id: "mechanical-engineering",
    name: "Department of Mechanical Engineering",
    description: "NBA accredited for outstanding mechanical engineering education with specializations in design, thermal sciences, and manufacturing.",
    icon: Cog,
    link: "/faculty/engineering/department/mechanical-engineering",
    features: [
      "Comprehensive curriculum covering all aspects of mechanical engineering",
      "Modern laboratories with industry-standard equipment",
      "Research opportunities in emerging areas",
      "Practical training and industrial visits",
      "Career development and placement support"
    ]
  },
  {
    id: "amet-business-school",
    name: "AMET Business School",
    description: "NBA accredited for excellence in management education with specializations in maritime business and hospital administration.",
    icon: Building,
    link: "/faculty/management/department/business-school",
    features: [
      "Industry-relevant curriculum designed with expert inputs",
      "Distinguished faculty with extensive academic and industry experience",
      "Case-based learning methodology",
      "Strong focus on leadership development",
      "Excellent placement record with leading companies"
    ]
  },
  {
    id: "marine-engineering",
    name: "Department of Marine Engineering",
    description: "NBA accredited for world-class marine engineering education preparing students for careers in maritime industry and offshore operations.",
    icon: Anchor,
    link: "/faculty/maritime/department/marine-engineering",
    features: [
      "Curriculum recognized by Directorate General of Shipping",
      "Cutting-edge marine engine room simulators",
      "Workshops equipped with latest marine equipment",
      "Faculty with extensive seafaring experience",
      "Strong placement record with national and international shipping companies"
    ]
  },
  {
    id: "naval-architecture",
    name: "Department of Naval Architecture and Offshore Engineering",
    description: "NBA accredited for excellence in naval architecture education focusing on ship design, construction, and offshore structures.",
    icon: Ship,
    link: "/faculty/maritime/department/naval-architecture",
    features: [
      "Comprehensive curriculum covering all aspects of naval architecture",
      "Advanced ship design software and tools",
      "Towing tank and model testing facilities",
      "Research opportunities in ship hydrodynamics and structures",
      "Strong industry connections with shipyards and design firms"
    ]
  }
];

const NBA = () => {
  return (
    <Layout>
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="mb-12 text-center">
            <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-full mb-4">
              <Shield className="h-8 w-8 text-aemet-blue" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-aemet-navy mb-4">
              NBA Accredited Departments
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              AMET University takes pride in its NBA (National Board of Accreditation) accredited departments, 
              showcasing our commitment to quality education and academic excellence.
            </p>
          </div>

          {/* About NBA Section */}
          <Card className="p-6 mb-12 bg-gradient-to-r from-blue-50 to-indigo-50">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-2 bg-white rounded-full">
                <Award className="h-8 w-8 text-amber-500" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-aemet-navy mb-2">About NBA Accreditation</h2>
                <p className="text-gray-700 mb-4">
                  The National Board of Accreditation (NBA) is an autonomous organization that assesses and accredits 
                  technical education programs in India. NBA accreditation ensures that the educational program meets 
                  specified norms and standards, signifying quality and relevance.
                </p>
                <p className="text-gray-700">
                  NBA accreditation is a mark of quality and assures that our graduates are equipped with the knowledge, 
                  skills, and attitudes to meet global industry requirements and academic standards.
                </p>
              </div>
            </div>
          </Card>

          {/* Accredited Departments Section */}
          <h2 className="text-2xl font-semibold text-aemet-navy mb-6">Our NBA Accredited Departments</h2>
          
          <div className="space-y-8">
            {accreditedDepartments.map((department, index) => (
              <Card key={department.id} className="p-6 transition-all hover:shadow-md">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-lg bg-blue-100 flex items-center justify-center">
                      <department.icon className="h-8 w-8 text-aemet-blue" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-aemet-navy mb-2">
                      {department.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{department.description}</p>
                    
                    <h4 className="font-medium text-aemet-navy mb-2">Key Features:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {department.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-600 text-xs mr-2 mt-0.5">✓</span>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {index < accreditedDepartments.length - 1 && (
                  <Separator className="mt-6" />
                )}
              </Card>
            ))}
          </div>
          
          {/* Benefits Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-aemet-navy mb-6">Benefits of Studying in NBA Accredited Departments</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-5 border-l-4 border-l-blue-500">
                <h3 className="font-semibold text-aemet-navy mb-2">Quality Education</h3>
                <p className="text-gray-600 text-sm">Assurance of education that meets specified standards of quality education and relevance to industry needs.</p>
              </Card>
              <Card className="p-5 border-l-4 border-l-green-500">
                <h3 className="font-semibold text-aemet-navy mb-2">Enhanced Employability</h3>
                <p className="text-gray-600 text-sm">Improved job prospects as employers prefer graduates from accredited programs for their quality and industry readiness.</p>
              </Card>
              <Card className="p-5 border-l-4 border-l-purple-500">
                <h3 className="font-semibold text-aemet-navy mb-2">Global Recognition</h3>
                <p className="text-gray-600 text-sm">Recognition of degrees in international educational institutions and for higher studies abroad.</p>
              </Card>
              <Card className="p-5 border-l-4 border-l-amber-500">
                <h3 className="font-semibold text-aemet-navy mb-2">Industry Connections</h3>
                <p className="text-gray-600 text-sm">Strong ties with industry partners resulting in better internship and placement opportunities.</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NBA;
