
import React from 'react';
import { Award, BookOpen } from 'lucide-react';

type DoctoralResearch = {
  title: string;
  scholar: string;
  year: string;
};

const InnovativeDoctoral = () => {
  const doctoralResearch: DoctoralResearch[] = [
    {
      title: "Services Marketing of a Green field Port with Special Reference to Kattupalli Port in Chennai Region",
      scholar: "Mr. Sharma Suraj Bhan",
      year: "2016"
    },
    {
      title: "An Assessment on BOG treatment equipment onboard LNG carriers-A Corporate study for LNG Shipping Business",
      scholar: "S. Kamalakannan",
      year: "2015"
    },
    {
      title: "Economics of self unloader onboard bulk carrier in thermal coal shipping business",
      scholar: "S. Dasaratharam",
      year: "2015"
    },
    {
      title: "A Study on the occupational stress of Indian Mariners on Merchant ships",
      scholar: "J. Rengamani",
      year: "2015"
    },
    {
      title: "Analysis of Imaging & Communication System for Modern Autonomous Underwater Vehicles",
      scholar: "R. Sathish Kumar",
      year: "2015"
    },
    {
      title: "Facilitating Intelligible Pronunciation as a key to Better English Communication for Deck Officers on Board-An ESL Experimental Study",
      scholar: "P. Suresh",
      year: "2015"
    },
    {
      title: "Hydrodynamic Investigations on Nearshore Morphological Changes Due to Construction of Breakwaters through Case Studies",
      scholar: "Mrs.D.K.Baby Girija",
      year: "2015"
    },
    {
      title: "An Interpretation of Coaxial and Non- Coaxial Components of Shear Strength of Marine Soils ( A Multi disciplinary Approach to Complex Soil Problems)",
      scholar: "Mr.J.Rajaraman",
      year: "2015"
    },
    {
      title: "Engineering Assessment of Environmental Parameters for the Jawaharlal Nehru Port Trust,Navi Mumbai, India",
      scholar: "Mrs.Yogeshwari",
      year: "2015"
    },
    {
      title: "Development and Application of Microbial Consortium for the Sustainable Management of Shirmp Aquaculture",
      scholar: "Mr. R. Karthik",
      year: "2016"
    },
    {
      title: "Development of Coastal Shipping in India with Special Reference to Container Trade",
      scholar: "Ms. T. K. Asha",
      year: "2016"
    },
    {
      title: "Ultrasonic and Spectral studies on some dyes and their metal complexes-their role in Marine Application",
      scholar: "Mr. M. Jayandran",
      year: "2012"
    },
    {
      title: "Ultrasonic studies on Marine Oils- A study on Binary Mixture System",
      scholar: "Mr. S. Ekambaram",
      year: "2014"
    },
    {
      title: "Study of inhibitors of general corrosion and corrosion material handling in the construction of Ship",
      scholar: "Mr. B. Anand",
      year: "2012"
    },
    {
      title: "Diversity of marine Actinomycetes in the rhizosphere of coastal sand dunes and their biotechnological application",
      scholar: "Ms. S. Sangeetha",
      year: "2013"
    },
    {
      title: "Application of E-learning in maritime education and training (MET)",
      scholar: "Mr. Swapan Das Sarma",
      year: "2013"
    },
    {
      title: "Integrated offshore power station for harnessing alternate source of energy",
      scholar: "Mr. K. N. G. Reddy",
      year: "2014"
    },
    {
      title: "Redesigning maritime education and training to suit the changing global shipping scenario",
      scholar: "Capt. S. Nathan",
      year: "2014"
    },
    {
      title: "Investigation on fuel saving techniques for propulsion of ocean going vessels",
      scholar: "Cdr. A. S. Perumal",
      year: "2014"
    },
    {
      title: "Electrochemical and ultrasonic studies on certain marine chemicals",
      scholar: "C. Kamalakumar",
      year: "2014"
    }
  ];

  return (
    <section className="mb-12 bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
      <h2 className="text-xl font-semibold text-aemet-navy mb-4 flex items-center">
        <Award className="h-5 w-5 mr-2 text-aemet-blue" />
        Innovative Areas of Doctoral Research
      </h2>
      
      <p className="text-gray-700 mb-6">
        AMET has so far awarded 168 Ph.D., degrees in maritime and allied fields. Being the first University to offer Ph.D., programme to the maritime professionals and research aspirants, AMET has promoted innovative Ph.D., research in emerging areas of maritime studies and few are listed below:
      </p>
      
      <div className="space-y-4">
        {doctoralResearch.map((research, index) => (
          <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-100 hover:border-aemet-blue/30 transition-colors">
            <div className="flex items-start">
              <div className="mt-1 h-3 w-3 bg-aemet-blue rounded-full mr-3 flex-shrink-0"></div>
              <div>
                <p className="font-medium text-gray-800">{research.title}</p>
                <p className="text-sm text-gray-600 mt-1">
                  <span className="italic">{research.scholar}</span> - <span className="font-semibold">{research.year}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InnovativeDoctoral;
