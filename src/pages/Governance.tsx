
import React from 'react';
import GovernanceLayout from '@/components/governance/GovernanceLayout';
import { Card } from "@/components/ui/card";
import { ExternalLink, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import jointRegistrarPhoto from '@/assets/joint-registrar.jpg';

interface LeadershipProfile {
  name: string;
  position: string;
  image: string;
  id: string;
}

const Governance = () => {
  // Reordered leadership profiles based on the specified order
  const leadershipProfiles: LeadershipProfile[] = [
    {
      name: "Dr. J. Ramachandran",
      position: "Chancellor",
      image: "/lovable-uploads/9dc4322e-4709-4490-9ac8-b1845162e760.png",
      id: "j-ramachandran"
    },
    {
      name: "Dr. Rajesh Ramachandren",
      position: "President",
      image: "/lovable-uploads/e2cefff5-1c7e-42c4-b305-84918c7a772c.png",
      id: "rajesh-ramachandren"
    },
    {
      name: "Mrs. Susheela Ramachandran",
      position: "Managing Trustee",
      image: "/images/susheela.png",
      id: "susheela-ramachandran"
    },
    {
      name: "Col. Dr. G. Thiruvasagam",
      position: "Provost",
      image: "/images/thiruvasagam.png",
      id: "g-thiruvasagam"
    },
    {
      name: "Dr. V. Rajendran",
      position: "Vice-Chancellor",
      image: "/lovable-uploads/0ee62c6e-5732-4e7b-835b-657c7fa055e7.png",
      id: "v-rajendran"
    },
    {
      name: "Dr. Deepa Rajesh",
      position: "Vice President (Academics)",
      image: "/images/deepa.png",
      id: "deepa-rajesh"
    },
    {
      name: "Dr. V. Sangeetha Albin",
      position: "Registrar i/c",
      image: "/lovable-uploads/5bffc478-0249-4f5a-bef9-e2dec501ac14.png",
      id: "v-sangeetha-albin"
    },
    {
      name: "Dr. N.R. Ramkumar",
      position: "Joint Registrar",
      image: jointRegistrarPhoto,
      id: "nr-ramkumar"
    },
    {
      name: "Dr. A. Rajesh Kanna",
      position: "Controller of Examination i/c",
      image: "/lovable-uploads/a2fd26b5-14f6-45d7-a5c2-02a6fea5ec62.png",
      id: "a-rajesh-kanna"
    },
    {
      name: "Capt. Srinivas Gopal",
      position: "Principal – DGS Programmes",
      image: "/lovable-uploads/913674dd-df77-4b3f-9425-09fe62df0c87.png",
      id: "srinivas-gopal"
    },
    {
      name: "Dr. T. Sasilatha",
      position: "Principal – General Programmes",
      image: "/lovable-uploads/a1b2c3d4-sasilatha-photo.png",
      id: "t-sasilatha"
    }
  ];

  return (
    <GovernanceLayout title="Governance">
      <div className="mb-8">
        <div className="pt-0">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-aemet-navy mb-3">Leadership Team</h1>
            <p className="max-w-2xl mx-auto text-gray-600">
              Meet the visionary leaders steering AMET University towards excellence in education and innovation.
            </p>
            <Separator className="max-w-md mx-auto my-4 bg-aemet-blue/30" />
          </div>
          
          <div className="container mx-auto px-4">
            {/* First row - 4 specific profiles */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {leadershipProfiles.slice(0, 4).map((profile, index) => (
                <Card 
                  key={index}
                  className="flex flex-col h-full bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                >
                  <div className="h-44 overflow-hidden bg-gray-50">
                    <img 
                      src={profile.image} 
                      alt={profile.name} 
                      className="w-full h-full object-contain" 
                    />
                  </div>
                  <div className="p-4 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="font-semibold text-aemet-navy text-lg mb-1">{profile.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{profile.position}</p>
                    </div>
                    <Link 
                      to={`/profile/${profile.id}`}
                      className="text-xs text-gray-500 hover:text-aemet-navy flex items-center gap-1 mt-4 w-fit"
                    >
                      Visit Profile
                      <ChevronRight className="h-3 w-3" />
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
            
            {/* Second row - 4 remaining profiles with same card size */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {leadershipProfiles.slice(4).map((profile, index) => (
                <Card 
                  key={index + 4}
                  className="flex flex-col h-full bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                >
                  <div className="h-44 overflow-hidden bg-gray-50">
                    <img 
                      src={profile.image} 
                      alt={profile.name} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-4 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="font-semibold text-aemet-navy text-lg mb-1">{profile.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{profile.position}</p>
                    </div>
                    <Link 
                      to={`/profile/${profile.id}`}
                      className="text-xs text-gray-500 hover:text-aemet-navy flex items-center gap-1 mt-4 w-fit"
                    >
                      Visit Profile
                      <ChevronRight className="h-3 w-3" />
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      
        <div className="py-8">
          <div className="text-center">
            <div className="max-w-3xl mx-auto p-6 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 shadow-sm">
              <h2 className="text-2xl font-bold mb-3 text-aemet-navy">Committed to Excellence in Education</h2>
              <p className="text-gray-700">
                Our administrative body comprises distinguished academicians, industry experts, and visionaries who guide 
                AMET University's mission to provide world-class education and research opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </GovernanceLayout>
  );
};

export default Governance;
