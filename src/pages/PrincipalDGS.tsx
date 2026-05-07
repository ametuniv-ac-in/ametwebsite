import React from 'react';
import Layout from '@/components/Layout';
import { Anchor } from 'lucide-react';
import srinivasImg from '@/assets/principal/srinivas-gopal.png';

const PrincipalDGS = () => {
  return (
    <Layout title="Principal – DGS Courses | AMET University">
      <div className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary)/0.85)] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-2">
            <Anchor className="w-8 h-8" />
            <h1 className="text-3xl md:text-4xl font-bold">Principal – DGS Courses</h1>
          </div>
          <p className="text-white/80 text-lg">AMET University Principal – DGS Courses</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10 max-w-5xl">
        <div className="space-y-10">
          {/* Contact Table */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4 border-b pb-2">Contact Details</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-slate-300">
                <thead>
                  <tr className="bg-[hsl(var(--primary))] text-white">
                    <th className="border border-slate-300 px-4 py-3 text-left">Name</th>
                    <th className="border border-slate-300 px-4 py-3 text-left">Designation</th>
                    <th className="border border-slate-300 px-4 py-3 text-left">Phone</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="border border-slate-300 px-4 py-3 font-medium">Capt. Srinivas Gopal</td>
                    <td className="border border-slate-300 px-4 py-3">Master Mariner, Principal DGS course and Dean Department of Maritime Studies</td>
                    <td className="border border-slate-300 px-4 py-3">91 - 44 - 2744 4625 / 627 / 628</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Profile Section */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6 border-b pb-2">Profile</h2>
            <div className="float-left mr-6 mb-4">
              <img
                src={srinivasImg}
                alt="Capt. Srinivas Gopal"
                className="w-48 h-auto rounded-lg shadow-md"
              />
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="font-semibold text-foreground text-lg">Capt. Srinivas Gopal</p>
              <p className="text-foreground font-medium">Master Mariner</p>
              <p className="text-foreground font-medium">Principal DGS course and Dean Department of Maritime Studies</p>

              <p>
                Captain Srinivas Gopal, a Master Mariner with an illustrious seafaring career spanning 20 years at Sea and 18 years on shore, stands as a distinguished figure in the maritime domain. His command experience extends across a wide range of merchant vessels, including bulk carriers, tankers, special trade passenger vessels and general cargo ships till June 1999. He has then served ashore with M/s J M Baxi &amp; Co Ltd for 9 years as General Manager in Vessel Agency and Stevedoring for Chennai region. He then moved to M/s Merchant Shipping Services Pvt Ltd (a Sharaf Group Company) served as General Manager all India operations for non-container vessel. In his tenure he has operated as port captain for sensitive cargoes, submergible vessel handling at various ports in India.
              </p>

              <h3 className="text-lg font-semibold text-foreground pt-2">Academic Career at AMET</h3>
              <p>
                In July 2018, he brought his wealth of maritime expertise in sea going and onshore shipping sectors to AMET University. Over the past eight years, he has played a pivotal role in shaping future navigators through his teaching in core Nautical Science subjects.
              </p>

              <h3 className="text-lg font-semibold text-foreground pt-2">Key Areas of Expertise</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Cargo Handling and Stowage</li>
                <li>Bridge Resource Management</li>
                <li>Ship Operation Technology</li>
                <li>Maritime Management and Commerce</li>
                <li>Marine Environmental Science</li>
                <li>Chart Work</li>
                <li>Rules of the Road</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground pt-2">Leadership Role</h3>
              <p>
                He took over as HOD and Course in charge Nautical Science department in October 2022. From March 2023 he had been promoted to Principal DGS courses and Dean Maritime Studies ensuring academic excellence while integrating real-world maritime competencies into the curriculum and dealing.
              </p>
              <p>
                Captain Srinivas Gopal's career is defined by a dual mastery of the seas and the classroom. More than just navigating vessels across global trade routes, he specializes in navigating young talent toward high-impact maritime careers. By bridging the gap between rigorous seafaring excellence and academic leadership, Captain Gopal truly embodies the modern Master Mariner-Academician.
              </p>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default PrincipalDGS;
