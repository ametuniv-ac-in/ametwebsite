import React from 'react';
import Layout from '@/components/Layout';
import { Separator } from "@/components/ui/separator";
import { Award, FileText, Users } from "lucide-react";

const OPRCLevel2 = () => {
  const certificates = [
    { regNo: "230801", name: "Dy Comdt Dharakeshwari R" },
    { regNo: "230802", name: "Dy Comdt Jees Janesh M" },
    { regNo: "230803", name: "Dy Comdt Lobsang Tsering" },
    { regNo: "230804", name: "Dy Comdt Mayank Sharma" },
    { regNo: "230805", name: "Dy Comdt Jaiveer Kharwar" },
    { regNo: "230806", name: "Capt. Bibhupada Sahoo" },
    { regNo: "230807", name: "Capt. Pushpendra Sharma" },
    { regNo: "230808", name: "Capt. Subramanian Mageswaran" },
    { regNo: "230809", name: "Mr. G Krishna Raj" },
    { regNo: "230810", name: "Mr. A.M. Palani Kumar" },
    { regNo: "230811", name: "Mr. Mula Rama Rao" },
    { regNo: "230812", name: "Mr. Eswara Rao Kanithi" },
    { regNo: "230813", name: "Mr. Jayesh Shukla" },
    { regNo: "230814", name: "Mr. Alamgeer Khan" },
    { regNo: "230815", name: "Mr. Ravi N" },
    { regNo: "230816", name: "Mr. L. John Anand Antony" },
    { regNo: "230817", name: "Capt. Manoj Dalla" },
    { regNo: "230818", name: "Capt. Baidehi Vallav" },
    { regNo: "230819", name: "Capt. Sam Abraham" },
    { regNo: "230820", name: "Capt. Rahul Kashyap" },
    { regNo: "230821", name: "Mr.J.B.N. Choudhury" },
    { regNo: "230822", name: "Mr. Prakash Chandra Tripathy" },
    { regNo: "220801", name: "Comdt. Umakant Mandal" },
    { regNo: "220802", name: "Comdt JG Roshan Khandare" },
    { regNo: "220803", name: "Dy Comdt Dhaneswaran P" },
    { regNo: "220804", name: "Dy Comdt S.Muruganandam" },
    { regNo: "220805", name: "Asst. Comdt. Pradeep Singh" },
    { regNo: "220806", name: "Bathala Chaitanya Kumar" },
    { regNo: "220807", name: "K Kannan" },
    { regNo: "220808", name: "Capt Sabyasachi Banerjee" },
    { regNo: "220809", name: "Krishnan Kaushik" },
    { regNo: "220810", name: "Capt. Karan Singh Baghel" },
    { regNo: "220811", name: "Maheshkumar. V" },
    { regNo: "220812", name: "R.Bala Subramania Pillai" },
    { regNo: "220813", name: "V Kannan" },
    { regNo: "220814", name: "S.Kumaresan" },
    { regNo: "220815", name: "Ajay Pokiya" },
    { regNo: "220816", name: "Dharmendra Parmar" },
    { regNo: "220817", name: "Sanjay Barapatre" },
    { regNo: "220818", name: "Ranjeet Pandey" },
    { regNo: "220819", name: "Sivaji Pragada" },
    { regNo: "220820", name: "Sudama Kumar" },
    { regNo: "220821", name: "Venkataramana Golagani" },
    { regNo: "220822", name: "Ganireddy Yadunadha Appu" },
    { regNo: "220823", name: "Vineet Kumar" },
    { regNo: "220824", name: "Rajasekhar Kolli" },
    { regNo: "220825", name: "Sai Vamsidhar Bontha" },
    { regNo: "220826", name: "Basha Mohiddin Jeelani" },
    { regNo: "220827", name: "N Chandra Choodan" },
    { regNo: "220828", name: "Anupam Jain" },
    { regNo: "220829", name: "Ayush Lakha" },
    { regNo: "220830", name: "Abhilash Kumar" },
    { regNo: "220831", name: "Sudhir Tulshiram Shinde" },
    { regNo: "220832", name: "Shashi Shekhar" },
    { regNo: "220833", name: "Capt.Syed Ahamedullah" },
    { regNo: "220834", name: "Avijeet Saha" },
    { regNo: "220835", name: "Shaik Sardar" },
    { regNo: "220836", name: "Kumar Gopal" },
    { regNo: "220837", name: "Asutosha Sahu" },
    { regNo: "220838", name: "Sandeep Chavan" }
  ];

  return (
    <Layout title="OPRC Level-2 | AMET University">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-6xl mx-auto pt-28 md:pt-32">
          {/* Hero Section */}
          <div className="flex items-center gap-3 mb-2">
            <Award className="h-8 w-8 text-aemet-blue" />
            <h1 className="text-3xl md:text-4xl font-bold text-aemet-navy">Oil Pollution Response Certificate (OPRC) Level-2</h1>
          </div>
          
          <Separator className="my-6" />
          
          <div className="bg-gradient-to-r from-aemet-navy/10 to-aemet-blue/10 p-6 rounded-lg mb-10 shadow-sm border border-aemet-blue/20 animate-fade-in">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="shrink-0">
                <Award className="h-12 w-12 text-aemet-navy" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-aemet-navy mb-4">OPRC Level-2 Certification</h2>
                <p className="text-gray-700 leading-relaxed">
                  The Oil Pollution Response Certificate (OPRC) Level-2 program at AMET University provides comprehensive 
                  training in advanced oil spill response techniques and maritime environmental protection. Our certified 
                  professionals are equipped with the knowledge and skills required to effectively manage and respond to 
                  oil pollution incidents at sea and coastal areas.
                </p>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 text-center">
              <Users className="h-8 w-8 text-aemet-blue mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-aemet-navy mb-2">{certificates.length}</h3>
              <p className="text-gray-600">Certified Professionals</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 text-center">
              <FileText className="h-8 w-8 text-aemet-blue mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-aemet-navy mb-2">2</h3>
              <p className="text-gray-600">Training Batches (2022 & 2023)</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 text-center">
              <Award className="h-8 w-8 text-aemet-blue mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-aemet-navy mb-2">Level-2</h3>
              <p className="text-gray-600">Advanced Certification</p>
            </div>
          </div>

          {/* Certificates Table */}
          <section className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <FileText className="h-6 w-6 text-aemet-blue" />
                <h2 className="text-xl font-semibold text-aemet-navy">OPRC Level-2 Certificates</h2>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-aemet-navy text-white">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-medium">Reg.No.</th>
                    <th className="px-6 py-3 text-left text-sm font-medium">Name</th>
                    <th className="px-6 py-3 text-left text-sm font-medium">Certificate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {certificates.map((cert, index) => (
                    <tr key={cert.regNo} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-aemet-navy">{cert.regNo}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{cert.name}</td>
                      <td className="px-6 py-4 text-sm">
                        <a 
                          href="#" 
                          className="inline-flex items-center text-aemet-blue hover:text-aemet-navy transition-colors duration-200 font-medium"
                        >
                          <FileText className="h-4 w-4 mr-1" />
                          View
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* About OPRC */}
          <section className="bg-gradient-to-r from-aemet-navy/5 to-aemet-blue/5 rounded-lg p-6 border border-aemet-blue/20 mt-8">
            <h2 className="text-xl font-semibold text-aemet-navy mb-4">About OPRC Level-2 Training</h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>
                The Oil Pollution Response Certificate (OPRC) Level-2 is an advanced certification program that builds 
                upon the foundation laid in Level-1 training. This comprehensive course covers advanced techniques in 
                oil spill response, incident management, and environmental protection strategies.
              </p>
              <p>
                Participants gain expertise in advanced containment and recovery operations, shoreline protection methods, 
                waste management, and coordination of large-scale response operations. The program is designed to meet 
                international maritime standards and regulatory requirements.
              </p>
              <p>
                AMET University, being a premier maritime institution, provides state-of-the-art training facilities and 
                experienced faculty to ensure that our graduates are well-prepared to handle complex oil pollution 
                response scenarios in real-world situations.
              </p>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default OPRCLevel2;