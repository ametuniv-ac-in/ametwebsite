
import React from 'react';
import { Separator } from "@/components/ui/separator";

const AcademicIntro = () => {
  return (
    <>
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-aemet-navy mb-4">Academic Research</h1>
        <p className="max-w-3xl mx-auto text-gray-600">
          Fostering scholarly inquiry and knowledge creation across disciplines at AMET University
        </p>
        <Separator className="max-w-md mx-auto my-6 bg-aemet-blue/30" />
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-aemet-navy mb-4">Academic Research at AMET</h2>
        <p className="text-gray-700 mb-4">
          Academy of Maritime Education and Training (AMET) declared as deemed to be University (under section 3 of UGC Act 1956) promotes academic research leading to Ph.D., in 15 academic disciplines. AMET appointed full time Faculty with Ph.D., qualifications to guide Ph.D., scholars as per the Guidelines of UGC Ph.D., regulations 2023.
        </p>
        <p className="text-gray-700 mb-4">
          AMET has more than 50 sophisticated laboratories, two exclusive research centers and seven specialized research laboratories with more than 124 major equipments to facilitate academic research. University has introduced Ph.D. programmes in all academic disciplines by following the guidelines of UGC (2016 Regulations and its amendments 2022).
        </p>
        <p className="text-gray-700 mb-4">
          Presently a total of 262 Ph.D. research scholars are doing their research in identified emerging areas of maritime studies and allied disciplines. University has so far awarded 168 doctorate degrees. University has promoted the concept of inter-disciplinary approach in research. Being a de-novo University, AMET has made sincere efforts to enhance the intellectual capital and establish a knowledge hub by conducting both academic and sponsored research.
        </p>
      </section>
    </>
  );
};

export default AcademicIntro;
