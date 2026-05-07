import React from "react";
import Layout from "@/components/Layout";
import { FileText, Download, Shield, Award, BookOpen, Building2 } from "lucide-react";
const MandatoryDisclosure = () => {
  const disclosureItems = [
    // Accreditation & Certificates
    {
      category: "Accreditation & Certificates",
      icon: Award,
      items: [
        { title: "NBA Certificate", url: "https://docs.ametuniv.ac.in/mandatory-disclosure/nba-Certificate.pdf" },
        {
          title: "NBA Certificate for Engineering Programmes",
          url: "https://docs.ametuniv.ac.in/mandatory-disclosure/nba-certificate-engg.pdf",
        },
        {
          title: "NBA Certificate for MBA Programme",
          url: "https://docs.ametuniv.ac.in/mandatory-disclosure/nba-certificate-mba.pdf",
        },
        {
          title: "NAAC Certificate of Accreditation",
          url: "https://docs.ametuniv.ac.in/mandatory-disclosure/naac-cycle2.pdf",
        },
        { title: "CIP Grade Certificate", url: "https://docs.ametuniv.ac.in/mandatory-disclosure/cip-grade.pdf" },
        {
          title: "SIRO Recognition Certificate",
          url: "https://docs.ametuniv.ac.in/mandatory-disclosure/siro-recognition-certificate.pdf",
        },
        { title: "DSIR Registration", url: "https://docs.ametuniv.ac.in/mandatory-disclosure/dsir_registration.pdf" },
        { title: "ISO Certificate", url: "/pdfs/iso-certificate-valid-till-may-2028.pdf" },
      ],
    },

    // AICTE Approvals
    {
      category: "AICTE Approvals",
      icon: Shield,
      items: [
        {
          title: "AICTE Extension of Approval 2025-26",
          url: "/pdfs/aicte-eoa-2025-26.pdf",
        },
        {
          title: "AICTE Extension of Approval 2024-25",
          url: "https://docs.ametuniv.ac.in/mandatory-disclosure/aicte-eoa-2024-25.pdf",
        },
        {
          title: "AICTE Extension of Approval 2023-24",
          url: "https://docs.ametuniv.ac.in/mandatory-disclosure/aicte-eoa-2023-24.pdf",
        },
        {
          title: "AICTE Extension of Approval 2022-23",
          url: "https://docs.ametuniv.ac.in/mandatory-disclosure/aicte-eoa-2022-23.pdf",
        },
        {
          title: "AICTE Extension of Approval 2021-22",
          url: "https://docs.ametuniv.ac.in/mandatory-disclosure/aicte-eoa-2021-22.pdf",
        },
        {
          title: "AICTE Extension of Approval 2020-21",
          url: "https://docs.ametuniv.ac.in/mandatory-disclosure/aicte-eoa-2020-21.pdf",
        },
        {
          title: "AICTE Extension of Approval 2019-20",
          url: "https://docs.ametuniv.ac.in/mandatory-disclosure/aicte-eoa-2019-20.pdf",
        },
        {
          title: "AICTE Letter of Approval 2018-19",
          url: "https://docs.ametuniv.ac.in/mandatory-disclosure/aicte-eoa-2018-19.pdf",
        },
        {
          title: "DGS intake approval latest",
          url: "https://docs.ametuniv.ac.in/mandatory-disclosure/dgs-intake-approval.pdf",
        },
      ],
    },

    // Financial & Legal Documents
    {
      category: "Financial & Legal Documents",
      icon: FileText,
      items: [
        { title: "MOA 2023", url: "https://docs.ametuniv.ac.in/mandatory-disclosure/moa-2023.pdf" },
        {
          title: "Audited Statement of Account - Last Five Years",
          url: "/disclosures/audited-statements",
          internal: true,
        },
        {
          title: "Mandatory Disclosure 2025-26",
          url: "/pdfs/mandatory-disclosure-2025-26.pdf",
        },
        {
          title: "Corpus Fund",
          url: "/pdfs/corpus-fund.pdf",
        },
      ],
    },

    // UGC & MHRD Documents
    {
      category: "UGC & MHRD Documents",
      icon: Building2,
      items: [
        {
          title: "UGC - Evaluation Report 2020",
          url: "https://docs.ametuniv.ac.in/mandatory-disclosure/ugc-evaluation_report-2020.pdf",
        },
        {
          title: "MHRD approval for Deemed to be University",
          url: "https://docs.ametuniv.ac.in/mandatory-disclosure/ahrd_approval_for_deemed_status.pdf",
        },
        {
          title: "MHRD Notification latest",
          url: "https://docs.ametuniv.ac.in/mandatory-disclosure/mhrd_notification_latest.pdf",
        },
        {
          title: "UGC approval for B.Voc.",
          url: "https://docs.ametuniv.ac.in/mandatory-disclosure/ugc_approval-bvoc.pdf",
        },
      ],
    },

    // Academic Regulations
    {
      category: "Academic Regulations",
      icon: BookOpen,
      items: [
        {
          title: "FFCBCS Regulation 2022",
          url: "https://docs.ametuniv.ac.in/mandatory-disclosure/ffcbcs-regulation-2022.pdf",
        },
        {
          title: "CBCS Regulations 2018",
          url: "https://docs.ametuniv.ac.in/mandatory-disclosure/cbcs_regulations_2018.pdf",
        },
        { title: "CBCS Handbook", url: "https://docs.ametuniv.ac.in/mandatory-disclosure/cbcs-handbook.pdf" },
        {
          title: "Outcome Based Education",
          url: "https://docs.ametuniv.ac.in/mandatory-disclosure/outcome-based-education.pdf",
        },
        {
          title: "Curriculum and Syllabus Revision",
          url: "https://docs.ametuniv.ac.in/mandatory-disclosure/curriculum_and_syllabus_revision.pdf",
        },
        {
          title: "CBCS Regulations 2023",
          url: "https://www.ametuniv.ac.in/cbcs-regulations",
        },
      ],
    },

    // Governance & Administration
    {
      category: "Governance & Administration",
      icon: Building2,
      items: [
        {
          title: "Implementation Quality Mandate Objectives",
          url: "https://docs.ametuniv.ac.in/mandatory-disclosure/implementation_quality_mandate_objectives.pdf",
        },
        {
          title: "Quality Mandate Compliance of 10 initiatives",
          url: "https://docs.ametuniv.ac.in/mandatory-disclosure/quality_mandate_compliance_of_10_initiatives.pdf",
        },
        {
          title: "Major Administrative Committees",
          url: "/pdfs/major-administrative-committee.pdf",
        },
        { title: "AMET Vision 2020", url: "https://docs.ametuniv.ac.in/mandatory-disclosure/amet-vision-2020.pdf" },
        { title: "AMET Vision 2025", url: "https://docs.ametuniv.ac.in/mandatory-disclosure/amet-vision-2025.pdf" },
        { title: "Policies of AMET", url: "https://docs.ametuniv.ac.in/mandatory-disclosure/policies-of-amet.pdf" },
        {
          title: "AMET Rules and Regulations",
          url: "https://docs.ametuniv.ac.in/mandatory-disclosure/rules-regulations.pdf",
        },
        { title: "Service Rules", url: "https://docs.ametuniv.ac.in/mandatory-disclosure/service-rules.pdf" },
        {
          title: "Decentralization and Participative Management",
          url: "https://docs.ametuniv.ac.in/mandatory-disclosure/decentralization-participative-management.pdf",
        },
        { title: "Organogram of AMET", url: "/pdfs/organogram-of-amet.pdf" },
      ],
    },

    // Institutional Policies & Vision
    {
      category: "Institutional Policies & Vision",
      icon: BookOpen,
      items: [
        { title: "Institutional Development Plan (IDP)", url: "/pdfs/idp.pdf" },
        { title: "Vision 2030", url: "/pdfs/vision-2030.pdf" },
        { title: "Policies of the University", url: "/pdfs/policies-of-amet.pdf" },
        { title: "Service Rules", url: "/pdfs/service-rules.pdf" },
        { title: "Code of Conduct", url: "/pdfs/code-of-conduct.pdf" },
        { title: "AMET Rules and Regulations", url: "/pdfs/rules-and-regulations.pdf" },
        { title: "Vision 2025", url: "/pdfs/vision-2025.pdf" },
        { title: "Achievements of Vision 2025", url: "/pdfs/achievements-vision-2025.pdf" },
      ],
    },
  ];

  return (
    <Layout title="Mandatory Disclosure | AMET University">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-aemet-navy to-aemet-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Mandatory Disclosure</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Access all statutory documents, certificates, and regulatory approvals in compliance with UGC guidelines
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="space-y-8">
          {disclosureItems.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="bg-gradient-to-r from-aemet-navy to-aemet-blue p-4">
                  <div className="flex items-center gap-3 text-white">
                    <IconComponent className="h-6 w-6" />
                    <h2 className="text-xl font-semibold">{section.category}</h2>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {section.items.map((item, itemIndex) => (
                      <a
                        key={itemIndex}
                        href={item.url}
                        {...(!(item as any).internal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="group p-4 border border-gray-200 rounded-lg hover:border-aemet-blue hover:shadow-md transition-all duration-200"
                      >
                        <div className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-aemet-blue flex-shrink-0" />
                          <span className="text-gray-800 group-hover:text-aemet-blue transition-colors">
                            {item.title}
                          </span>
                          <Download className="h-4 w-4 text-gray-400 group-hover:text-aemet-blue transition-colors ml-auto" />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Information */}
        <div className="mt-12 bg-gray-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-aemet-navy mb-4">For Document Access</h3>
          <p className="text-gray-600 mb-6">
            For access to any of these documents or for additional information, please contact:
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto text-left">
            <div>
              <h4 className="font-semibold text-aemet-navy mb-2">Registrar Office</h4>
              <p className="text-gray-600">AMET University</p>
              <p className="text-gray-600">135, Rajiv Gandhi Salai (OMR), Kanathur</p>
              <p className="text-gray-600">Chennai - 603112, Tamil Nadu, India</p>
            </div>
            <div>
              <h4 className="font-semibold text-aemet-navy mb-2">Contact Details</h4>
              <p className="text-gray-600">Phone: +91-44-39626666</p>
              <p className="text-gray-600">Email: registrar@amet.edu</p>
              <p className="text-gray-600">Website: www.amet.edu</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default MandatoryDisclosure;
