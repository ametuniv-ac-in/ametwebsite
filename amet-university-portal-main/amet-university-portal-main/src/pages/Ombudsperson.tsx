import React from 'react';
import Layout from '@/components/Layout';
import { User } from 'lucide-react';
import mathivananImg from '@/assets/ombudsperson/mathivanan.png';

const Ombudsperson = () => {
  return (
    <Layout title="Ombudsperson | AMET University">
      <div className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary)/0.85)] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-2">
            <User className="w-8 h-8" />
            <h1 className="text-3xl md:text-4xl font-bold">Ombudsperson</h1>
          </div>
          <p className="text-white/80 text-lg">AMET University Ombudsperson Details</p>
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
                    <th className="border border-slate-300 px-4 py-3 text-left">Designation & Department</th>
                    <th className="border border-slate-300 px-4 py-3 text-left">Phone & E-mail</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="border border-slate-300 px-4 py-3 font-medium">Dr.N.Mathivanan</td>
                    <td className="border border-slate-300 px-4 py-3">Former Director and Head, Department of Centre for Advanced Study in Botany, University of Madras</td>
                    <td className="border border-slate-300 px-4 py-3">
                      <div>98402 53789</div>
                      <a href="mailto:prabhamathi@yahoo.com" className="text-blue-600 hover:underline">prabhamathi@yahoo.com</a>
                    </td>
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
                src={mathivananImg}
                alt="Dr. N. Mathivanan"
                className="w-48 h-auto rounded-lg shadow-md"
              />
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Prof. Mathivanan Narayanasamy born to Thiru Narayanasamy and Thirumathi Sakunthala on 7th March 1964, at Kalingikuppam village, Villupuram district, Tamil Nadu, hails from an agricultural family background. He obtained his M. Sc. (1988) degree in Botany from Annamalai University and M. Phil. (1989) and Ph. D. (1996) degrees in Botany with specialization in Plant Pathology from University of Madras. He joined as Scientist (Plant Pathology) in the Nagarjuna Agricultural Research and Development Institute, Hyderabad in 1995 and later elevated as Head & Programme Leader for Crop Protection Division in 2001. In 2002, he joined as a Lecturer in the Centre for Advanced Studies in Botany, University of Madras, Chennai and was subsequently promoted to Senior Lecturer, Assistant Professor, Senior Assistant Professor, Associate Professor and Professor. On 1 July 2015 he was appointed as Director & Head of the Centre for Advanced Studies in Botany and Head l/c of the Centre for Herbal Science, University of Madras and he served as the Director Guindy Campus during June 2017 to July 2018 and the Registrar l/c during October 2020 to March 2022 and in April 2022, he has been appointed as the Special Officer, University of Madras.
              </p>
              <p>
                He is a Member of the Senate and Academic Council and also served as the Director, Research Scheme & Projects, University of Madras. He was the Chief Coordinator of the UGC-UPE programme and Coordinator of the UGC-CPEPA, UGC-SAP (CAS-VIII Phase) and DST-FIST programmes. Currently, he is the Finance Officer and Overall Coordinator of RUSA 2.0 programme of the University of Madras. He is the Chairman, Board of Studies in Botany of University of Madras and Tamil Nadu Open University and also served as the Chairman, Board of Studies in PG Botany of Alagappa University. He served as the Convener of the State Integrated Boards of Studies in Botany to prepare the TANSCHE Syllabus for UG & PG Botany. He served as the member of the National Expert Committee of the Access and Benefit Sharing of the National Biodiversity Authority, Government of India. He is nominated as an Executive Committee member of the Tamil Nadu Science and Technology Centre and APEX Committee member of the Science City, Government of Tamil Nadu. He served as the Chairman of Scientific Committee of the Chennai Science Festival (CSF-2019) organized by the Science City, Government of Tamil Nadu.
              </p>
              <p>
                Biological Control, Plant & Microbial Diversity and their Metabolites, Discovery of Drug candidates from Actinomycetes, Extremophiles and Medicinal Plants are his research areas.
              </p>
              <p>
                He has received 22 major research projects from DBT, DST, ICAR, MHRD, MOES and UGC and also from industries with the total budget of more than INR 7.0 Crore. He is the evaluator for research projects of CSIR, DBT, DST, ICAR, MOEF, UGC, WNRF, etc. He has guided 4 PDF, 29 Ph. D. and 34 M. Phil. scholars and 45 M. Sc. and 3 M. Tech. students. Presently, he is guiding 1 PDF and 1 Ph. D. scholar. Prof. Mathivanan has published about 118 research articles in peer reviewed journals, 3 books, 2 technical bulletins, 19 book chapters and presented more than 250 papers and posters in national and international conferences/seminars/symposia. Nineteen of his papers/posters received Best oral paper/poster awards in the national and international conferences. He has organized more than 30 conferences/seminars/symposia/workshops. He has delivered 16 invited lectures in Universities/institutes in abroad and more than 170 in India. He has 1 Indian patent and a granted foreign patent to his credit. His h-index is 35 and i10-index is 68 with citations of 4521 (Google Scholar). He is a reviewer for about 35 reputed scientific journals and examiner for Ph. D. theses of various Universities in India and in abroad.
              </p>
              <p>
                He has received Senior Research Fellowship by Council of Industrial and Scientific Research, New Delhi (1992-95) for doctoral research, A-IMBO-AMBO, Japan Fellowship to visit Osaka University, Osaka, Japan (2003), INSA-DFG Fellowship by INSA, India and DFG, Germany to visit Institute of Plant Pathology and Plant Protection, Georg-August University, Gottingen, Germany (2005), Biotechnology Overseas Associateship by DBT, India to visit Washington State University, Pullman, USA (2007), Service Star Award in the World Congress of Integrated Medicines jointly organized by the Medicina Alternativa (Alma-Ata 1962), World Wellness Open University and Ministry of Family Welfare, Government of India held at Chennai between 23 and 26, March 2008, DAAD Fellowship by DAAD, Germany to visit the Institute of Plant Pathology and Plant Protection, Georg-August University, Gottingen, Germany (2008) and Outstanding Research Scientist on Noni Award by World Noni Research Foundation, Chennai, India (2009). He has bestowed with the prestigious Tamil Nadu Scientist Award (TANSA) for his outstanding contribution to Biological Sciences for the year 2016, Dr. V. Agnihothrudu Memorial award by the Mycological Society of India (2018), Prof. S.N. Banerjee Memorial award by the Indian Mycological Society, Kolkata (2020). Lifetime achievement award by Antiviral Research Society (2021) and Nature Science Foundation (2021), Mid-Career award by UGC (2022), Distinguished Alumnus Award by Annamalai University (2022), NABS-FDC Lecture award by the National Academy of Biological Sciences (2023) and Best Researcher award by the University of Madras (2023).
              </p>
              <p>
                Prof. Mathivanan has been elected as the Fellow of National Academy of Agricultural Sciences (2023), National Academy of Biological Sciences (2014), Mycological Society of India (2015), International Society of Noni Science (2015), The Academy of Sciences, Chennai (2016), Antiviral Research Society of India (2018) and Fellow of the Royal Society of Biology, United Kingdom (2020). He has been conferred with the Honorary Fellow of the Indian Mycological Society, Kolkata (2020). He is a Life Member in 7 Scientific Academies/Professional Societies. He has been elected as Joint Secretary of the Society for Biotechnologists (India) (2012), Executive Council Member of the International Society for Noni Science (2010), the National Academy of Biological Sciences (2013) and The Academy of Sciences, Chennai (2018) and was nominated as Member Networking Biotech Groups in India by the National Academy of Biological Sciences (2013). He has been elected as Joint Secretary of the Mycological Society of India (2020-2022) and Treasurer (2023-2026) and Section Editor for Plant Pathology of the Journal, "KAVAKA" (Transactions of the Mycological Society of India) (2020-2026), Member, Editorial Board of International Journal of Noni Research (2022) and Member, Editorial Board of Journal of Mycopathological Society (2024). Further, he has been nominated as Director-Seminars of The Academy of Sciences Chennai (2022-2024) and elected as Vice President of the National Academy of Biological Sciences (2022), International Society for Noni Science (2023) and Mycological Society of India (2024).
              </p>
              <p>
                He has visited more than 20 Universities/Institutes in Abu Dhabi, Australia, Austria, Canada, Dubai, Fiji, France, Germany, Hawaii (USA), Hong Kong, Hungary, Japan, Kenya, Malaysia, Oman, Sri Lanka, Tahiti, Thailand and USA for research collaborations, academic interactions and delivering lectures.
              </p>
            </div>
          </section>

        </div>
      </div>
    </Layout>
  );
};

export default Ombudsperson;
