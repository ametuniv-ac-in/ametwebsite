import React from 'react';
import PlacementLayout from '@/components/placement/PlacementLayout';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface TeamMember {
  id: string;
  name: string;
  title: string;
  subtitle?: string;
  image: string;
  preview: string;
  content: React.ReactNode;
}

const teamMembers: TeamMember[] = [
  {
    id: 'capt-chandrasekhar',
    name: 'Capt. V. Chandrasekhar',
    title: 'Director of Placements and Business Strategy, AMET University',
    image: '/images/capt-chandrasekhar.png',
    preview: 'Capt. V. Chandrasekhar is an accomplished maritime professional with a career spanning over five decades. He began his journey in 1972 as a deck cadet with the Shipping Corporation of India.',
    content: (
      <>
        <p className="mb-4">
          Capt. V. Chandrasekhar is an accomplished maritime professional with a career spanning over five decades. He began his journey in 1972 as a deck cadet with the Shipping Corporation of India and steadily progressed to the rank of Master, commanding various types of vessels including general cargo, tankers, bulk carriers, container ships, and passenger ships.
        </p>
        <p className="mb-4">
          During his time at sea, Capt. Chandrasekhar accumulated a wealth of experience, spending over 30 years sailing, with 12 of those years as a Captain on foreign-going vessels. He also briefly served for 2 years as a Nautical Surveyor at the MMD Chennai. He went back to sea with Searland, Barbers Ship Management and Denholm's as a Chief Officer / Master.
        </p>
        <p className="mb-4">
          In 1998, Capt. Chandrasekhar transitioned ashore, taking up managerial roles in prominent shipping companies. He served as the General Manager at Seaways Shipping in Hyderabad before moving to Dubai to work with Emirates Trading Agency and later, Dubai Aluminium Company (now known as Emirates Global Aluminium) for a total of 16 years. In Dubai, he played a crucial role as the Head of Supply Chain, overseeing the movement of over 4 million tonnes of raw materials and finished Products.
        </p>
        <p className="mb-4">
          In 2016, Capt. Chandrasekhar returned to India and joined AMET University as a faculty member in the Nautical Science Department. Recognizing his leadership and strategic acumen, he was appointed as the Director of Placements and Business Strategy by the Hon. Chancellor.
        </p>
        <p className="mb-4">
          Capt. Chandrasekhar is known for his commitment to excellence and his strong team player mindset. He is delighted to be part of the AMET family once again, this time as the Principal of AMET City College.
        </p>
      </>
    ),
  },
  {
    id: 'capt-francis-joseph',
    name: 'Capt. Francis Joseph',
    title: 'Master Mariner',
    image: '/images/capt-francis-joseph.jpg',
    preview: 'Capt. Francis Joseph a Master Mariner, brings 40 years of experience of which the initial 25 years with the giant shipping organisation A.P. Moller Maersk.',
    content: (
      <>
        <p className="mb-4">
          Capt. Francis Joseph a Master Mariner, brings 40 years of experience of which the initial 25 years with the giant shipping organisation A.P. Moller Maersk, where besides commanding different large vessels he held Management Level positions.
        </p>
        <p className="mb-4">
          His later 15 years continued with other Danish ship-owners, namely Herning Shipping and Nordic Tankers, as Managing Director / General Manager. As a leader, he has always been passionate about people development to assemble high-quality crew members. He strongly believes in a client-focused and people-centric leadership style.
        </p>
        <p className="mb-4">
          During his time in Maersk, he also played a vital role in getting MoU being signed between leading Maritime Universities in India and China which resulted in a cascading effort of sponsoring numerous students per year, for a dual cadet program which also led to a Degree. His efforts not only ceased with just making these Students as trained and qualified mariners but also seen them occupying exalted positions in various Shipping organizations globally.
        </p>
        <p className="mb-4">
          Capt. Francis Joseph was also the chairman of the Singapore Maritime Federation (SMEF), an organisation of ship managers whose membership represents over 800 vessels and 30,000 seafarers. During that 11 years, he was part of different Maritime related Advisory committees including the MPA task force.
        </p>
      </>
    ),
  },
  {
    id: 'capt-nagarajan',
    name: 'Capt. M.S. Nagarajan',
    title: 'Director – Hong Kong',
    image: '/images/capt-ms-nagarajan.jpg',
    preview: 'Captain M.S. Nagarajan is a distinguished maritime professional with over 45 years of experience spanning seafaring, global ship management, and large-scale human capital development.',
    content: (
      <>
        <p className="mb-4">
          Captain M.S. Nagarajan is a distinguished maritime professional with over 45 years of experience spanning seafaring, global ship management, and large-scale human capital development. He brings deep expertise in maritime training governance, cadet-to-officer career pathways, competency assurance, and workforce sustainability, making him a strong contributor to Maritime Training Boards, Academies, and Advisory Councils.
        </p>
        <p className="mb-4">
          A former Master Mariner, Captain Nagarajan sailed for 15 years before transitioning ashore into senior leadership roles. He spent nearly three decades with Fleet Management Limited, Hong Kong, culminating in his role as Executive Director. In this capacity, he provided strategic oversight for training quality, leadership continuity, and crew competence across a fleet of approximately 670 vessels, one of the largest managed fleets globally.
        </p>
        <p className="mb-4">
          Captain Nagarajan has been instrumental in building end-to-end seafarer talent pipelines, including cadet intake strategies, officer development frameworks, and succession planning for senior shipboard roles. As Director of Fleet Personnel, he led multinational crew development initiatives, expanded recruitment and training ecosystems in Asia, and strengthened partnerships between shipowners, manning agencies, and maritime institutes.
        </p>
        <p className="mb-4">
          He is widely respected for integrating crew welfare, mental health, and ethical leadership into training philosophies, particularly demonstrated during the COVID-19 crisis when he ensured operational continuity while safeguarding seafarer wellbeing.
        </p>
        <p className="mb-4">
          Captain Nagarajan holds a Doctorate in Management Studies and a B.Sc. in Nautical Science from the University of Mumbai. In 2018, he received the Exemplary Personal Achievement Award from Sailor Today in recognition of his contributions to the maritime industry.
        </p>
        <p className="mb-4">
          He brings to AMET team, a rare combination of sea-going credibility, training oversight, and strategic governance, with a strong commitment to shaping future-ready maritime professionals aligned with global standards.
        </p>
      </>
    ),
  },
  {
    id: 'anand-tripathi',
    name: 'Anand Tripathi',
    title: 'Resident Director, Mumbai',
    subtitle: 'Seasoned Maritime Management Professional',
    image: '/images/anand-tripathi.jpg',
    preview: 'Business Leader with 35 years of diverse, cross-functional experience, with seven years at AMET University, Chennai. Thirty Plus years in Maritime across Business Development, Process Excellence, HR, Education & Training functions.',
    content: (
      <>
        <p className="mb-4">
          Business Leader with 35 years of diverse, cross-functional experience, with seven years at AMET University, Chennai. Thirty Plus years in Maritime across Business Development, Process Excellence, HR, Education & Training functions.
        </p>
        <p className="mb-4">
          Full-Time Post Graduate Diploma in International Trade from IIFT, New Delhi with First Class marks in 1994. B. Marine from Directorate of Marine Engineering Training (DMET), Kolkata, (now MERI) with First Class marks in 1988.
        </p>

        <h4 className="text-lg font-semibold text-aemet-navy mt-6 mb-3">Career Record</h4>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li><strong>Nov'18 till date:</strong> AMET University, Chennai as Resident Director, Mumbai – Helping the Mumbai-Pune Maritime Hub discover AMET University strengths and offerings. Placed 1500 cadets with 23 new companies, including signing long-term MOU's with leading ship-managers.</li>
          <li><strong>Jun'12 – Feb'18:</strong> Bernhard Schulte Shipmanagement (BSM), Mumbai as GM, Global Shared Services Centre (GSC)</li>
          <li><strong>Apr'05 – Jun'12:</strong> Bernhard Schulte Shipmanagement (BSM), Mumbai as AGM (Human Capital & Progress)</li>
          <li><strong>Nov'00 – Apr'05:</strong> Eurasia Maritime Management Ltd., Mumbai as Manager – Marketing & CRM</li>
          <li><strong>Apr'98 – Nov'00:</strong> Samrat Shipping, Mumbai as Dy. Manager, MIS & Chartering (3rd Party Shipbroker)</li>
          <li><strong>Jan'97 – Mar'98:</strong> Ranbaxy Labs Ltd., Mumbai as Commercial Manager – Purchase & Merchant Exports</li>
          <li><strong>Jul'94 – Dec'96:</strong> G. Premjee (GP) Group, Bangkok as Commodities Trader</li>
          <li><strong>Jul'89 – Dec'92:</strong> Sailed on-board Merchant Ships as a Marine Engineer</li>
        </ul>

        <h4 className="text-lg font-semibold text-aemet-navy mt-6 mb-3">Certifications</h4>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Executive Development Programme in HRM from XLRI (April 2019)</li>
          <li>Certified Business Analyst by IMS Pro School in association with NSE-NCFM</li>
          <li>Certified Lean Six-Sigma Green Belt from Benchmark Six Sigma</li>
          <li>Trained in Hay's methodology for job evaluation, benchmarking, grading and rewards & benefits design</li>
          <li>6 Months Certification Course in HRD Interventions from Dr. T V Rao's TVRLS</li>
          <li>Certified in Thomas Profiling Methodology & Trained in TDS and remuneration design</li>
          <li>1 Year Course in Logistics from Institute of Rail Transport, New Delhi</li>
        </ul>
      </>
    ),
  },
  {
    id: 'pragash',
    name: 'Mr. C. Pragash',
    title: 'Deputy Director – Centre for Placement and Training',
    image: '/images/pragash-c.jpg',
    preview: 'Mr. C. Pragash is the Deputy Director at the Centre for Placement and Training. He has been associated with AMET since February 2017 and plays a key role in student placement and industry collaboration.',
    content: (
      <>
        <p className="mb-4">
          Mr. C. Pragash is the Deputy Director at the Centre for Placement and Training. He has been associated with AMET since February 2017 and plays a key role in student placement and industry collaboration.
        </p>
        <p className="mb-4">
          He holds a Master's Degree in Engineering and brings over 14 years of teaching and administrative experience, having served in reputed institutions across Tamil Nadu. In recognition of his outstanding contribution to academics and engineering education, he received the "Best Engineer Award" from The Institution of Engineers (India) for his distinguished performance in academic activities.
        </p>
        <p className="mb-4">
          At AMET, Mr. C. Pragash is responsible for the placement of cadets and students, engaging with leading shipping companies both in India and abroad. His strong industry connect and proactive approach have significantly enhanced the placement opportunities for maritime cadets.
        </p>
      </>
    ),
  },
  {
    id: 'john-alexander',
    name: 'Mr. S. John Alexander',
    title: 'Senior Executive, Centre for Placement and Training',
    image: '/images/john-alexander.jpg',
    preview: 'Mr. S. John Alexander is a strategic-minded Admin professional with 20+ years of demonstrated success in imparting strategic administrative direction to ensure efficient operations.',
    content: (
      <>
        <p className="mb-4">
          Mr. S. John Alexander is a strategic-minded Admin professional with 20+ years of demonstrated success in imparting strategic administrative direction to ensure efficient operations, augmenting overall productivity at improved costs and superior service levels. Consistently succeeds in developing winning teams and implements comprehensive strategies. Highly successful in building professional relations and liaising with multifarious bureaus.
        </p>
        <p className="mb-4">
          Result-oriented professional with rich expertise of two decades with diverse industries. Engaged in all vital administrative areas like facilities, vendor management, Cafeteria, security management, etc. Demonstrated skills in setting-up ITES Management facilities.
        </p>
        <p className="mb-4">
          Pioneered in complete facility management viz., operations & maintenance. Received Best Performer awards from HCL Technologies. Successfully identified facilities and made it operational within 60 days with 500 seats for HCL Technologies Ltd.
        </p>
      </>
    ),
  },
];

const Director = () => {
  return (
    <PlacementLayout title="Placement Officials">
      <div className="container mx-auto py-4">
        <Accordion type="single" collapsible className="space-y-4">
          {teamMembers.map((member) => (
            <AccordionItem
              key={member.id}
              value={member.id}
              className="bg-white rounded-lg shadow-sm border-none"
            >
              <div className="p-4">
                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.title}`}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-lg object-cover object-top shadow-md flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h2 className="text-xl md:text-2xl font-bold text-aemet-navy">
                      {member.name}
                    </h2>
                    <p className="text-sm md:text-base font-semibold text-aemet-blue mt-1">
                      {member.title}
                    </p>
                    {member.subtitle && (
                      <p className="text-sm text-muted-foreground mt-1">
                        {member.subtitle}
                      </p>
                    )}
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                      {member.preview}
                    </p>
                    <AccordionTrigger className="py-2 hover:no-underline justify-start gap-2 text-aemet-blue text-sm font-medium">
                      View Full Profile
                    </AccordionTrigger>
                  </div>
                </div>
              </div>
              <AccordionContent className="px-4 pb-4">
                <div className="prose max-w-none text-sm md:text-base pt-2 border-t">
                  {member.content}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </PlacementLayout>
  );
};

export default Director;
