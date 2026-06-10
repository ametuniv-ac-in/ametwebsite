import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, AlertTriangle } from "lucide-react";

const AdmissionRecruitmentDrive = () => {
  return (
    <Card className="p-6 md:p-8 shadow-md bg-white mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-amet-navy mb-4 text-center">
        Admission and Recruitment Drive
      </h2>

      <p className="text-gray-700 text-center mb-8 text-lg">
        AMET is proudly associated with two pioneers of the shipping industry. Candidates applying for B.E. Marine
        Engineering, B.Sc. Nautical Science, DNS, or ETO can avail this golden opportunity.
      </p>

      {/* MAERSK Section */}
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl md:text-2xl font-bold text-amet-navy mb-4">
          AMET- A.P. Moller – MAERSK - Cadetship Program
        </h3>

        <div className="mb-6">
          <h4 className="font-semibold text-amet-navy mb-2">Association of AMET & MAERSK:</h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex gap-2">
              <span className="text-amet-blue">•</span>
              AMET and Maersk having strong Industry Academia relationships over two decades.
            </li>
            <li className="flex gap-2">
              <span className="text-amet-blue">•</span>
              More than 2500 cadets have been recruited by MAERSK and many of them are currently occupying coveted
              position in various renowned International Shipping companies as Managing Directors and CEOs.
            </li>
            <li className="flex gap-2">
              <span className="text-amet-blue">•</span>
              Setting a new benchmark in maritime education, AMET has established the Maersk Centre of Excellence (MCE)
              at the AMET IST Campus in Thenpattinam. Maersk participates in the annual admission cycle to recruit
              cadets for B.E. Marine Engineering, B.Sc. Nautical Science, and the Electro Technical Officer (ETO)
              programme.
            </li>
          </ul>
        </div>

        {/* MAERSK Eligibility */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-amet-navy mb-3">For BE Marine and B.Sc Nautical Science</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                • A Good Pass in 12th Standard examination with Physics, Chemistry, Mathematics and English as separate
                subjects with a PCM average minimum of 60% and English (either in 10th or 12th std) should be minimum of
                60%.
              </li>
              <li>
                • Qualifying in IMU CET or IIT-JEE/any State-level Engineering Entrance Examination (minimum of 40
                Percentile score) is mandatory for admission.
              </li>
              <li>• Passport is mandatory.</li>
              <li>• Should be a Citizen of India.</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-amet-navy mb-3">For ETO</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                • A four year degree in Electrical/Electronics or equivalent disciplines with minimum of 50% overall
                marks. English (either in 10th or 12th std) should be minimum of 50%.
              </li>
              <li>
                • Diploma holders are eligible for admission, subject to having at least one year of relevant work
                experience in the same stream.
              </li>
              <li>• Passport is mandatory.</li>
              <li>• Should be a Citizen of India.</li>
            </ul>
          </div>
        </div>

        {/* MAERSK Admission Process */}
        <div className="mb-6">
          <h4 className="font-semibold text-amet-navy mb-3">Admission and Selection Process</h4>
          <ol className="space-y-2 text-gray-700">
            <li className="flex gap-2">
              <span className="text-amet-blue font-semibold">1.</span> Applying for the course, online application will
              be available in the Website
            </li>
            <li className="flex gap-2">
              <span className="text-amet-blue font-semibold">2.</span> AMET CET 2026 has to be given by the applied
              candidates
            </li>
            <li className="flex gap-2">
              <span className="text-amet-blue font-semibold">3.</span> Ranklist will be published in the website on the
              basis of marks obtained in AMET CET and 12th Std PCM.
            </li>
            <li className="flex gap-2">
              <span className="text-amet-blue font-semibold">4.</span> The shortlisted candidates will be called for the
              offline Personal interview. The Interview date will be announced in the month of March 2026.
            </li>
            <li className="flex gap-2">
              <span className="text-amet-blue font-semibold">5.</span> The personal Interview will happen in four major
              cities like Chennai, Delhi, Mumbai and Cochin.
            </li>
            <li className="flex gap-2">
              <span className="text-amet-blue font-semibold">6.</span> The candidates shortlisted from the Personal
              Interview will be provided with a Maersk approved Medical centre list for Medical screening. The medical
              test will be done as per the norms of the DGS.
            </li>
            <li className="flex gap-2">
              <span className="text-amet-blue font-semibold">7.</span> Final selection is contingent upon the candidate
              successfully clearing both the Medical Screening and the Psychometric Test.
            </li>
            <li className="flex gap-2">
              <span className="text-amet-blue font-semibold">8.</span> The selected candidates will receive an official
              email. They must pay their first-term fees to confirm their seat.
            </li>
          </ol>
        </div>

        <Button asChild className="bg-blue-900 hover:bg-amet-navy">
          <a href="https://www.amet-ist.in/application-form.html" target="_blank" rel="noopener noreferrer">
            Apply Now <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>

      {/* V.Ships Section */}
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl md:text-2xl font-bold text-amet-navy mb-4">
          AMET- V. Ships Admission and Recruitment Drive
        </h3>

        <div className="mb-6">
          <ul className="space-y-2 text-gray-700">
            <li className="flex gap-2">
              <span className="text-amet-blue">•</span>
              AMET and V.Ships have had a strong industry academia relationship for over 10 years.
            </li>
            <li className="flex gap-2">
              <span className="text-amet-blue">•</span>
              AMET has established the exclusive V. Ships Maritime Knowledge Centre (VMKC) under the AMET Institute of
              Science and Technology at the Thenpattinam campus.
            </li>
            <li className="flex gap-2">
              <span className="text-amet-blue">•</span>
              V.Ships will select cadets during the AMET admission process for the following maritime courses B.E Marine
              Engineering, Diploma in Nautical Science and Electro Technical Officer.
            </li>
            <li className="flex gap-2">
              <span className="text-amet-blue">•</span>
              Cadets selected by V.Ships will be admitted by AMET to the selected Course provided that they satisfy any
              other eligibility guidelines stipulated by the Directorate General of Shipping (DGS), Government of India
              in relation to the relevant Course.
            </li>
          </ul>
        </div>

        {/* V.Ships Eligibility */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-amet-navy mb-3">For BE Marine and Diploma in Nautical Science</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                • Good Pass in 12th Standard examination with Physics, Chemistry, Mathematics and English as separate
                subjects with a PCM average minimum of 65% and English (either in 10th or 12th std) should be minimum of
                60%.
              </li>
              <li>
                • Qualifying in IMU CET or IIT-JEE/any State-level Engineering Entrance Examination (minimum of 40
                Percentile score) is mandatory for admission.
              </li>
              <li>• Passport is mandatory.</li>
              <li>• Should be a Citizen of India.</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-amet-navy mb-3">For ETO</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                • A four year degree in Electrical/Electronics or equivalent disciplines with minimum of 50% overall
                marks. English (either in 10th or 12th std) should be minimum of 50%.
              </li>
              <li>
                • Diploma holders are eligible for admission, subject to having at least one year of relevant work
                experience in the same stream.
              </li>
              <li>• Passport is mandatory.</li>
              <li>• Should be a Citizen of India.</li>
            </ul>
          </div>
        </div>

        {/* V.Ships Admission Process */}
        <div className="mb-6">
          <h4 className="font-semibold text-amet-navy mb-3">Admission and Selection Process</h4>
          <ol className="space-y-2 text-gray-700">
            <li className="flex gap-2">
              <span className="text-amet-blue font-semibold">1.</span> Applying for the course, online application will
              be available in the Website
            </li>
            <li className="flex gap-2">
              <span className="text-amet-blue font-semibold">2.</span> AMET CET 2026 has to be given by the applied
              candidates
            </li>
            <li className="flex gap-2">
              <span className="text-amet-blue font-semibold">3.</span> Followed by AMETCET APRO Test will be conducted.
              The Link will be sent to all the candidates through the registered mail id.
            </li>
            <li className="flex gap-2">
              <span className="text-amet-blue font-semibold">4.</span> The candidate cleared both AMET CET and APRO Test
              with the eligible 12th PCM marks will be called for the personal interview. The Interview date will be
              announced in the month of March 2026.
            </li>
            <li className="flex gap-2">
              <span className="text-amet-blue font-semibold">5.</span> The personal Interview venue will be updated
              along with the interview dates.
            </li>
            <li className="flex gap-2">
              <span className="text-amet-blue font-semibold">6.</span> The candidates shortlisted from the Personal
              Interview will be provided with a V.Ships approved medical centre list for Medical screening. The medical
              test will be done as per the norms of the DGS.
            </li>
            <li className="flex gap-2">
              <span className="text-amet-blue font-semibold">7.</span> Final selection is contingent upon the candidate
              successfully clearing the Medical Screening.
            </li>
            <li className="flex gap-2">
              <span className="text-amet-blue font-semibold">8.</span> The selected candidates will receive an official
              email. They must pay their first-term fees to confirm their seat.
            </li>
          </ol>
        </div>

        <Button asChild className="bg-blue-900 hover:bg-amet-navy">
          <a
            href="https://admission.ametuniv.ac.in/vships-center-of-excellence-application-form"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply Now <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>

      {/* Warning Note */}
      <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg mb-8">
        <div className="flex gap-3">
          <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
          <div>
            <p className="text-gray-700 mb-3">
              <strong>Note:</strong> The selection process of AMET Admission and recruitment is based purely on Merit.
              We have not appointed any agency or individual to issue admission letters for this cadetship training
              program. Moreover, certain agencies or individuals may demand huge sum of money or any sort of services or
              favors promising to get admission for this cadetship training program. If you come across any such
              fraudulent practices, kindly write to us at{" "}
              <a href="mailto:office@ametuniv.ac.in" className="text-amet-blue hover:underline">
                office@ametuniv.ac.in
              </a>
              .
            </p>
            <p className="text-gray-700">
              Please also note that AMET University shall not be held responsible or liable for anyone dealing with such
              agencies or individuals as any individual/group who would have dealt with such agencies or individuals
              would have done so at their own risk.
            </p>
          </div>
        </div>
      </div>

      {/* Refund Policy */}
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold text-amet-navy mb-3">Refund Policy</h3>
        <p className="text-gray-700 mb-4">
          Admission cancellation requests must be sent to{" "}
          <a href="mailto:admission@ametuniv.ac.in" className="text-amet-blue hover:underline">
            admission@ametuniv.ac.in
          </a>
          . Refunds are processed within 30 days based on the date of cancellation, with refund amounts ranging from
          ₹7,500 to ₹50,000 depending on the cancellation window. Cancellations on or after 16th July 2026 forfeit the
          full fees paid.
        </p>
        <Button asChild className="bg-amet-navy hover:bg-amet-blue text-white">
          <a href="/refund-policy">View Full Refund Policy</a>
        </Button>
      </div>
    </Card>
  );
};

export default AdmissionRecruitmentDrive;
