import React from 'react';
import { Briefcase, Anchor, Building2, Ship, Radio, Users, Shield, Navigation, Wrench } from 'lucide-react';

interface GmdssCareerProspectsTabProps {
  program: {
    gmdssCareerProspectsContent?: string;
    [key: string]: any;
  };
}

const renderFormattedText = (text: string) => {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('*') && part.endsWith('*') && !part.startsWith('**')) {
      return <em key={index}>{part.slice(1, -1)}</em>;
    }
    return part;
  });
};

const seaRoles = [
  {
    title: "Radio Officer / Communications Operator",
    description: "The most direct role, responsible for managing all onboard radio communication systems, including distress and safety communications, as well as general ship-to-ship and ship-to-shore communications.",
    icon: Radio
  },
  {
    title: "Deck Officer (Third Officer, Second Officer, Chief Officer, and Captain)",
    description: "All deck officers are required to hold a GMDSS Certificate of Competency (CoC) to perform duties related to navigation, watchkeeping, and safety management.",
    icon: Navigation
  },
  {
    title: "Offshore Installation Roles",
    description: "Opportunities are available on offshore support vessels, drilling rigs, and platforms as Radio Operators or in similar roles involving communication and emergency response coordination.",
    icon: Anchor
  }
];

const shoreRoles = [
  {
    title: "Marine Electronics Service Engineer",
    description: "Qualified to install, commission, troubleshoot, and repair marine navigation and communication equipment, and to conduct mandatory GMDSS radio surveys and Voyage Data Recorder (VDR) annual performance tests.",
    icon: Wrench
  },
  {
    title: "Maritime Safety Specialist",
    description: "Works with maritime authorities or private companies to ensure compliance with GMDSS regulations and international safety standards.",
    icon: Shield
  },
  {
    title: "Emergency Response Coordinator",
    description: "Employed in Maritime Rescue Coordination Centres (MRCCs) or emergency management organizations, handling distress communication and coordinating rescue operations.",
    icon: Radio
  },
  {
    title: "Vessel Traffic Services (VTS) Operator",
    description: "Manages and monitors vessel movements within ports and waterways, utilizing marine communication systems for navigation and safety.",
    icon: Navigation
  },
  {
    title: "Port or Terminal Marine Officer",
    description: "Oversees marine operations within ports and terminals, ensuring safe and efficient handling of vessels.",
    icon: Building2
  },
  {
    title: "Surveyor",
    description: "Works with classification societies or surveying firms to inspect and certify vessels' navigation and communication systems for compliance with international regulations.",
    icon: Users
  },
  {
    title: "Training Faculty",
    description: "With adequate sea experience, professionals can serve as instructors at maritime training institutions, teaching future seafarers about GMDSS operations and maritime safety procedures.",
    icon: Users
  }
];

const whyRequired = [
  {
    title: "Ensures Qualified Personnel",
    description: "The certificate confirms that a seafarer has received proper training to operate GMDSS equipment and handle emergency communications according to international standards (STCW)."
  },
  {
    title: "Facilitates Rapid Distress Alerting",
    description: "It ensures that trained personnel are on board to use both automated and manual components of the system to alert search and rescue services and nearby ships when a vessel is in distress."
  },
  {
    title: "Improves Search and Rescue Operations",
    description: "By ensuring proper use of communication equipment, the certification helps coordinate rescue efforts more efficiently and accurately locate vessels in distress."
  },
  {
    title: "Enables Effective Communication",
    description: "The GMDSS certificate is vital for managing all types of ship-to-ship and ship-to-shore transmissions, including distress calls, urgency messages, and safety broadcasts—crucial for ensuring safe navigation."
  },
  {
    title: "Mandatory for International Voyages",
    description: "For most large commercial ships engaged in international voyages, having a GMDSS-certified officer on board is a legal and regulatory requirement set by the International Maritime Organization (IMO)."
  }
];

const additionalOpportunities = [
  "MSV", "OSV", "DP vessels", "Oil and gas industries", "Pipe-laying barges",
  "Accommodation barges", "Drilling rigs", "Jack-up rigs", "Land rigs", "Drill ships",
  "Survey vessels", "Port signal stations", "Fishery Survey of India (FSI)", "CIFNET",
  "Radio surveyors", "Technical inspectors"
];

const GmdssCareerProspectsTab: React.FC<GmdssCareerProspectsTabProps> = ({ program }) => {
  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-aemet-navy mb-6 flex items-center gap-2">
        <Briefcase className="h-6 w-6 text-aemet-blue" />
        Career Prospects
      </h2>

      {/* Introduction Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 shadow-sm mb-6">
        <p className="text-gray-700 mb-4">
          A <strong>GMDSS certificate</strong> is required in the shipping industry to ensure that seafarers are qualified to operate the <strong>Global Maritime Distress and Safety System</strong>, which is a <strong>mandatory international communication system</strong> for ships. This certification verifies that crew members—such as deck officers—have the necessary skills to handle distress and safety communications, coordinate with rescue services, and operate advanced communication equipment effectively during emergencies.
        </p>
        <p className="text-gray-700">
          The GMDSS is critical for rapidly alerting authorities and nearby vessels in distress situations and for distributing <strong>maritime safety information (MSI)</strong>, which significantly enhances the chances of a successful rescue.
        </p>
      </div>

      {/* Why GMDSS Certificate is Required */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm mb-6">
        <h3 className="text-xl font-bold text-aemet-navy mb-4 flex items-center gap-2">
          <Shield className="h-5 w-5 text-aemet-blue" />
          Why the GMDSS Certificate Is Required
        </h3>
        <div className="space-y-4">
          {whyRequired.map((item, index) => (
            <div key={index} className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-aemet-blue font-bold text-sm">
                {index + 1}
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">{item.title}</h4>
                <p className="text-gray-600 text-sm mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Career Overview */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6 shadow-sm mb-6">
        <p className="text-gray-700">
          A <strong>Global Maritime Distress and Safety System (GMDSS)</strong> certificate opens up a wide range of career opportunities both at sea and ashore within the maritime industry. It is a <strong>mandatory qualification</strong> for all deck officers in the <strong>Merchant Navy</strong>, ensuring that they are proficient in operating critical communication and safety systems that are vital for shipboard operations and maritime safety worldwide.
        </p>
      </div>

      {/* Career Prospects at Sea */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm mb-6">
        <h3 className="text-xl font-bold text-aemet-navy mb-4 flex items-center gap-2">
          <Ship className="h-5 w-5 text-aemet-blue" />
          Career Prospects at Sea
        </h3>
        <p className="text-gray-600 mb-4">
          The GMDSS certificate is essential for most seagoing roles involving bridge operations and communication, including:
        </p>
        <div className="grid gap-4">
          {seaRoles.map((role, index) => {
            const IconComponent = role.icon;
            return (
              <div key={index} className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-aemet-blue rounded-full flex items-center justify-center">
                    <IconComponent className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{role.title}</h4>
                    <p className="text-gray-600 text-sm mt-1">{role.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Career Prospects Ashore */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm mb-6">
        <h3 className="text-xl font-bold text-aemet-navy mb-4 flex items-center gap-2">
          <Building2 className="h-5 w-5 text-aemet-blue" />
          Career Prospects Ashore
        </h3>
        <p className="text-gray-600 mb-4">
          The knowledge and skills gained from a GMDSS certification are equally valuable in various land-based maritime and technical roles, such as:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {shoreRoles.map((role, index) => {
            const IconComponent = role.icon;
            return (
              <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-aemet-navy rounded-full flex items-center justify-center">
                    <IconComponent className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">{role.title}</h4>
                    <p className="text-gray-600 text-xs mt-1">{role.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Additional Opportunities */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-lg p-6 shadow-sm">
        <h3 className="text-xl font-bold text-aemet-navy mb-4 flex items-center gap-2">
          <Users className="h-5 w-5 text-amber-600" />
          Additional Opportunities
        </h3>
        <p className="text-gray-700 mb-4">
          Apart from the above, GMDSS-certified professionals can find employment in:
        </p>
        <div className="flex flex-wrap gap-2">
          {additionalOpportunities.map((item, index) => (
            <span
              key={index}
              className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700 border border-amber-200 shadow-sm"
            >
              {item}
            </span>
          ))}
        </div>
        <p className="text-gray-600 text-sm mt-4">
          ...as well as with organizations employing radio surveyors and technical inspectors across various government departments.
        </p>
      </div>
    </div>
  );
};

export default GmdssCareerProspectsTab;
