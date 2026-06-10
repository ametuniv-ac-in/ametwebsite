
import React from "react";
import Layout from "@/components/Layout";
import { 
  Award, 
  Medal, 
  Trophy, 
  Star, 
  CheckCircle, 
  FileCheck, 
  Building,
  FileBadge
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

const RankingAccreditation = () => {
  return (
    <Layout>
      <div className="pt-40 pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-aemet-navy mb-4 text-center">
              Ranking and Accreditation
            </h1>
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              AMET University has received various accreditations and rankings from prestigious national and international organizations.
            </p>

            <Separator className="my-8" />

            {/* Accreditation Cards */}
            <div className="space-y-6 mt-8">
              {/* NAAC */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Award className="h-8 w-8 text-aemet-blue mr-3" />
                    <h2 className="text-xl font-bold text-aemet-navy">
                      National Assessment and Accreditation Council (NAAC)
                    </h2>
                  </div>
                  <p className="text-gray-700">
                    AMET is accredited by the National Assessment and Accreditation Council (NAAC) 
                    <span className="font-semibold ml-1">
                      (A Grade with a CGPA of 3.13)
                    </span>.
                  </p>
                </div>
              </div>

              {/* CIP */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Medal className="h-8 w-8 text-aemet-blue mr-3" />
                    <h2 className="text-xl font-bold text-aemet-navy">
                      Comprehensive Inspection Programme (CIP)
                    </h2>
                  </div>
                  <p className="text-gray-700">
                    The Maritime Programmes of the University are Accredited by Directorate General of Shipping, Government of India, Mumbai through Comprehensive Inspection Programme carried out by Internationally Accredited Certification Body, Det Norske Veritas (Norway) - DNV. AMET has been accredited with <span className="font-semibold">Grade A1 Outstanding</span> in the CIP for the past <span className="font-semibold">FIVE consecutive years</span>.
                  </p>
                </div>
              </div>

              {/* PIMET */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Trophy className="h-8 w-8 text-aemet-blue mr-3" />
                    <h2 className="text-xl font-bold text-aemet-navy">
                      Performance Indicators in Maritime Education and Training (PIMET)
                    </h2>
                  </div>
                  <p className="text-gray-700">
                    The International Association of Maritime Universities headquartered at Tokyo, Japan has been conducting PIMET Ranking and listed AMET as one of the <span className="font-semibold">top FIVE Maritime Institutions in the World</span> for the past <span className="font-semibold">FOUR consecutive years</span>.
                  </p>
                </div>
              </div>

              {/* NBA */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="h-8 w-8 text-aemet-blue mr-3" />
                    <h2 className="text-xl font-bold text-aemet-navy">
                      National Board of Accreditation (NBA)
                    </h2>
                  </div>
                  <p className="text-gray-700 mb-4">
                    The following five Departments in AMET have been accredited by National Board of Accreditation (NBA):
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>B.E Mechanical Engineering</li>
                    <li>B.E Electrical and Electronics Engineering (Marine)</li>
                    <li>M.B.A Shipping and Logistics Management</li>
                    <li>B.E. Marine Engineering</li>
                    <li>B.E. Naval Architecture & Offshore Engineering</li>
                  </ul>
                </div>
              </div>

              {/* SIRO */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <FileCheck className="h-8 w-8 text-aemet-blue mr-3" />
                    <h2 className="text-xl font-bold text-aemet-navy">
                      Scientific and Industrial Research Organization (SIRO)
                    </h2>
                  </div>
                  <p className="text-gray-700">
                    AMET Deemed to be University is recognized as a Scientific and Industrial Research Organization (SIRO) by the Department of Scientific and Industrial Research (DSIR), Government of India for the period 2022-2025.
                  </p>
                </div>
              </div>

              {/* ARIIA */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Star className="h-8 w-8 text-aemet-blue mr-3" />
                    <h2 className="text-xl font-bold text-aemet-navy">
                      Atal Ranking of Institutions on Innovation Achievement (ARIIA)
                    </h2>
                  </div>
                  <p className="text-gray-700">
                    AMET is categorized as <span className="font-semibold">'PERFORMER' institution (Star Ranking 4/5)</span> in category of 'University & Deemed to be University (Private-Self-Financed)' in Atal Ranking of Institutions on Innovation Achievement (ARIIA) 2021 announced on 29th December 2021.
                  </p>
                </div>
              </div>

              {/* AICTE Approval */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="h-8 w-8 text-aemet-blue mr-3" />
                    <h2 className="text-xl font-bold text-aemet-navy">
                      AICTE Approval
                    </h2>
                  </div>
                  <p className="text-gray-700">
                    AMET University is approved by the All India Council for Technical Education (AICTE), ensuring that the technical education programs meet the highest national standards.
                  </p>
                </div>
              </div>

              {/* MHRD Approval */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <FileCheck className="h-8 w-8 text-aemet-blue mr-3" />
                    <h2 className="text-xl font-bold text-aemet-navy">
                      MHRD Approval
                    </h2>
                  </div>
                  <p className="text-gray-700">
                    AMET University is recognized by the Ministry of Human Resource Development (MHRD), Government of India, validating its status as a premier educational institution.
                  </p>
                </div>
              </div>


              {/* DGS Approval */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Building className="h-8 w-8 text-aemet-blue mr-3" />
                    <h2 className="text-xl font-bold text-aemet-navy">
                      DGS Approval
                    </h2>
                  </div>
                  <p className="text-gray-700">
                    AMET has obtained approval from the Directorate General of Shipping (DGS), Government of India, affirming that our maritime education meets the regulatory requirements for professional seafaring careers.
                  </p>
                </div>
              </div>

              {/* NDL Registration */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <FileBadge className="h-8 w-8 text-aemet-blue mr-3" />
                    <h2 className="text-xl font-bold text-aemet-navy">
                      NDL Registration
                    </h2>
                  </div>
                  <p className="text-gray-700">
                    AMET is registered with the National Digital Library (NDL) of India, providing students and faculty with access to a vast repository of educational resources and research materials.
                  </p>
                </div>
              </div>

              {/* MHW Ranking 2022 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Trophy className="h-8 w-8 text-aemet-blue mr-3" />
                    <h2 className="text-xl font-bold text-aemet-navy">
                      MHW Ranking 2022
                    </h2>
                  </div>
                  <p className="text-gray-700">
                    AMET has been recognized in the Maritime Horizon Worldwide (MHW) Ranking 2022, highlighting its position as a leading institution in maritime education globally.
                  </p>
                </div>
              </div>

              {/* DNV - Management System Certificate */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="h-8 w-8 text-aemet-blue mr-3" />
                    <h2 className="text-xl font-bold text-aemet-navy">
                      DNV - Management System Certificate (ISO 9001:2015)
                    </h2>
                  </div>
                  <p className="text-gray-700">
                    AMET has been awarded the ISO 9001:2015 certification by Det Norske Veritas (DNV), valid from 29th May 2025 to 28th May 2028, demonstrating our commitment to quality management systems and continuous improvement.
                  </p>
                </div>
              </div>

              {/* Environmental Management System Certificate */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Medal className="h-8 w-8 text-aemet-blue mr-3" />
                    <h2 className="text-xl font-bold text-aemet-navy">
                      Environmental Management System Certificate (ISO 14001:2015)
                    </h2>
                  </div>
                  <p className="text-gray-700">
                    AMET has obtained the ISO 14001:2015 certification for Environmental Management Systems, highlighting our dedication to environmental responsibility and sustainable educational practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RankingAccreditation;
