
import React from 'react';
import GovernanceLayout from '@/components/governance/GovernanceLayout';
import { Users } from 'lucide-react';
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import ceoSeyaduPhoto from '@/assets/officials/ceo-seyadu.jpg';
import jointRegistrarPhoto from '@/assets/officials/joint-registrar-ramkumar.jpg';
import specialOfficerPhoto from '@/assets/officials/special-officer-jayaprakashvel.jpg';

const Officials = () => {
  const officials = [
    {
      name: "Dr. V. Rajendran, Ph.D, D.Sc",
      position: "Vice-Chancellor",
      image: "/lovable-uploads/0ee62c6e-5732-4e7b-835b-657c7fa055e7.png",
      id: "v-rajendran"
    },
    {
      name: "Dr. V. Sangeetha Albin",
      position: "Registrar",
      image: "/lovable-uploads/5bffc478-0249-4f5a-bef9-e2dec501ac14.png",
      id: "v-sangeetha-albin"
    },
    {
      name: "Mr. K. Seyadu",
      position: "CEO",
      image: ceoSeyaduPhoto,
      id: "k-seyadu"
    },
    {
      name: "Dr. N.R. Ramkumar",
      position: "Joint Registrar",
      image: jointRegistrarPhoto,
      id: "nr-ramkumar"
    },
    {
      name: "Dr. A. Rajesh Kanna",
      position: "Controller of Examination",
      image: "/lovable-uploads/a2fd26b5-14f6-45d7-a5c2-02a6fea5ec62.png",
      id: "a-rajesh-kanna"
    },
    {
      name: "Prof. M. Jayaprakashvel, M.Sc., Ph.D.",
      position: "Special Officer - Institutional Development",
      image: specialOfficerPhoto,
      id: "m-jayaprakashvel"
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
    <GovernanceLayout title="Officials">
      <div className="py-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-aemet-navy mb-4">University Officials</h1>
          <p className="max-w-2xl mx-auto text-gray-600">
            Meet the key officials who ensure the smooth functioning and administration of AMET University.
          </p>
          <Separator className="max-w-md mx-auto my-6 bg-aemet-blue/30" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
          {officials.map((official, index) => (
            <div 
              key={index}
              className="flex flex-col bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <div className="flex items-center justify-center overflow-hidden h-44 md:h-36 bg-gray-50">
                <img 
                  src={official.image} 
                  alt={official.name} 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-4 flex flex-col justify-center flex-grow">
                <h3 className="font-semibold text-aemet-navy text-lg mb-1">{official.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{official.position}</p>
                <Link 
                  to={`/profile/${official.id}`}
                  className="text-xs text-gray-500 hover:text-aemet-navy flex items-center gap-1 mt-auto w-fit"
                >
                  Visit Profile
                  <ChevronRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="py-12">
          <div className="text-center">
            <div className="max-w-3xl mx-auto p-8 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-aemet-navy">Administration & Leadership</h2>
              <p className="text-gray-700">
                Our university officials play a crucial role in shaping the academic environment and ensuring 
                excellence in education delivery, student welfare, and institutional growth at AMET University.
              </p>
            </div>
          </div>
        </div>
      </div>
    </GovernanceLayout>
  );
};

export default Officials;
