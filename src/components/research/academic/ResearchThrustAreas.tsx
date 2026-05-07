
import React from 'react';
import { 
  Ship, 
  Anchor, 
  Scale, 
  Server, 
  Globe, 
  Fish, 
  Droplet, 
  Shield, 
  Zap, 
  FlaskConical 
} from 'lucide-react';

const ResearchThrustAreas = () => {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold text-aemet-navy mb-6 flex items-center">
        <FlaskConical className="h-6 w-6 mr-2 text-aemet-blue" />
        Emerging Thrust Areas of Research at AMET
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Maritime Technology & Engineering */}
        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:border-aemet-blue/50 transition-colors">
          <div className="flex items-center mb-3">
            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
              <Ship className="h-5 w-5 text-aemet-blue" />
            </div>
            <h3 className="text-md font-semibold text-aemet-navy">Maritime Technology</h3>
          </div>
          <ul className="space-y-1.5 text-sm text-gray-700">
            <li className="flex items-start">
              <span className="h-4 w-4 rounded-full bg-blue-50 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span className="text-xs font-medium text-aemet-blue">✓</span>
              </span>
              <span>Ship Design</span>
            </li>
            <li className="flex items-start">
              <span className="h-4 w-4 rounded-full bg-blue-50 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span className="text-xs font-medium text-aemet-blue">✓</span>
              </span>
              <span>Design of Ballast Free Ship</span>
            </li>
            <li className="flex items-start">
              <span className="h-4 w-4 rounded-full bg-blue-50 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span className="text-xs font-medium text-aemet-blue">✓</span>
              </span>
              <span>CFD Analysis of Bilge Keel</span>
            </li>
            <li className="flex items-start">
              <span className="h-4 w-4 rounded-full bg-blue-50 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span className="text-xs font-medium text-aemet-blue">✓</span>
              </span>
              <span>Underwater AUV</span>
            </li>
            <li className="flex items-start">
              <span className="h-4 w-4 rounded-full bg-blue-50 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span className="text-xs font-medium text-aemet-blue">✓</span>
              </span>
              <span>Biomimetic Propulsion Technology</span>
            </li>
            <li className="flex items-start">
              <span className="h-4 w-4 rounded-full bg-blue-50 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span className="text-xs font-medium text-aemet-blue">✓</span>
              </span>
              <span>Underwater Gliders</span>
            </li>
          </ul>
        </div>
        
        {/* Maritime Operations & Management */}
        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:border-aemet-blue/50 transition-colors">
          <div className="flex items-center mb-3">
            <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
              <Anchor className="h-5 w-5 text-indigo-600" />
            </div>
            <h3 className="text-md font-semibold text-aemet-navy">Maritime Operations</h3>
          </div>
          <ul className="space-y-1.5 text-sm text-gray-700">
            <li className="flex items-start">
              <span className="h-4 w-4 rounded-full bg-indigo-50 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span className="text-xs font-medium text-indigo-600">✓</span>
              </span>
              <span>Maritime Security</span>
            </li>
            <li className="flex items-start">
              <span className="h-4 w-4 rounded-full bg-indigo-50 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span className="text-xs font-medium text-indigo-600">✓</span>
              </span>
              <span>Vessel Traffic Management</span>
            </li>
            <li className="flex items-start">
              <span className="h-4 w-4 rounded-full bg-indigo-50 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span className="text-xs font-medium text-indigo-600">✓</span>
              </span>
              <span>Coastal / Marine Management</span>
            </li>
            <li className="flex items-start">
              <span className="h-4 w-4 rounded-full bg-indigo-50 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span className="text-xs font-medium text-indigo-600">✓</span>
              </span>
              <span>Marine Navigation</span>
            </li>
            <li className="flex items-start">
              <span className="h-4 w-4 rounded-full bg-indigo-50 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span className="text-xs font-medium text-indigo-600">✓</span>
              </span>
              <span>Cargo Handling</span>
            </li>
            <li className="flex items-start">
              <span className="h-4 w-4 rounded-full bg-indigo-50 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span className="text-xs font-medium text-indigo-600">✓</span>
              </span>
              <span>Maritime Education</span>
            </li>
          </ul>
        </div>
        
        {/* Maritime Policy & Governance */}
        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:border-aemet-blue/50 transition-colors">
          <div className="flex items-center mb-3">
            <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
              <Scale className="h-5 w-5 text-purple-600" />
            </div>
            <h3 className="text-md font-semibold text-aemet-navy">Maritime Policy</h3>
          </div>
          <ul className="space-y-1.5 text-sm text-gray-700">
            <li className="flex items-start">
              <span className="h-4 w-4 rounded-full bg-purple-50 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span className="text-xs font-medium text-purple-600">✓</span>
              </span>
              <span>Inland Water Studies</span>
            </li>
            <li className="flex items-start">
              <span className="h-4 w-4 rounded-full bg-purple-50 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span className="text-xs font-medium text-purple-600">✓</span>
              </span>
              <span>Maritime Policies</span>
            </li>
            <li className="flex items-start">
              <span className="h-4 w-4 rounded-full bg-purple-50 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span className="text-xs font-medium text-purple-600">✓</span>
              </span>
              <span>Maritime Law</span>
            </li>
            <li className="flex items-start">
              <span className="h-4 w-4 rounded-full bg-purple-50 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span className="text-xs font-medium text-purple-600">✓</span>
              </span>
              <span>EXIM Studies</span>
            </li>
            <li className="flex items-start">
              <span className="h-4 w-4 rounded-full bg-purple-50 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span className="text-xs font-medium text-purple-600">✓</span>
              </span>
              <span>Marine Insurance</span>
            </li>
            <li className="flex items-start">
              <span className="h-4 w-4 rounded-full bg-purple-50 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span className="text-xs font-medium text-purple-600">✓</span>
              </span>
              <span>Maritime Boundaries</span>
            </li>
          </ul>
        </div>
        
        {/* Marine Business & Logistics */}
        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:border-aemet-blue/50 transition-colors">
          <div className="flex items-center mb-3">
            <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center mr-3">
              <Server className="h-5 w-5 text-orange-600" />
            </div>
            <h3 className="text-md font-semibold text-aemet-navy">Marine Business</h3>
          </div>
          <ul className="space-y-1.5 text-sm text-gray-700">
            <li className="flex items-start">
              <span className="h-4 w-4 rounded-full bg-orange-50 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span className="text-xs font-medium text-orange-600">✓</span>
              </span>
              <span>Shipping & Logistics Management</span>
            </li>
            <li className="flex items-start">
              <span className="h-4 w-4 rounded-full bg-orange-50 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span className="text-xs font-medium text-orange-600">✓</span>
              </span>
              <span>Maritime Fleet Operations</span>
            </li>
            <li className="flex items-start">
              <span className="h-4 w-4 rounded-full bg-orange-50 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span className="text-xs font-medium text-orange-600">✓</span>
              </span>
              <span>Oil & Gas Management</span>
            </li>
            <li className="flex items-start">
              <span className="h-4 w-4 rounded-full bg-orange-50 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span className="text-xs font-medium text-orange-600">✓</span>
              </span>
              <span>Marine Human Resource Management</span>
            </li>
            <li className="flex items-start">
              <span className="h-4 w-4 rounded-full bg-orange-50 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span className="text-xs font-medium text-orange-600">✓</span>
              </span>
              <span>Cross Cultural Management in Ships</span>
            </li>
            <li className="flex items-start">
              <span className="h-4 w-4 rounded-full bg-orange-50 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span className="text-xs font-medium text-orange-600">✓</span>
              </span>
              <span>Port Safety and Waste Management</span>
            </li>
          </ul>
        </div>
        
        {/* Marine Environmental Sciences */}
        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:border-aemet-blue/50 transition-colors">
          <div className="flex items-center mb-3">
            <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
              <Globe className="h-5 w-5 text-green-600" />
            </div>
            <h3 className="text-md font-semibold text-aemet-navy">Marine Environment</h3>
          </div>
          <ul className="space-y-1.5 text-sm text-gray-700">
            <li className="flex items-start">
              <span className="h-4 w-4 rounded-full bg-green-50 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span className="text-xs font-medium text-green-600">✓</span>
              </span>
              <span>Marine Pollution</span>
            </li>
            <li className="flex items-start">
              <span className="h-4 w-4 rounded-full bg-green-50 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span className="text-xs font-medium text-green-600">✓</span>
              </span>
              <span>Climate Change</span>
            </li>
            <li className="flex items-start">
              <span className="h-4 w-4 rounded-full bg-green-50 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span className="text-xs font-medium text-green-600">✓</span>
              </span>
              <span>Ocean Acidification</span>
            </li>
            <li className="flex items-start">
              <span className="h-4 w-4 rounded-full bg-green-50 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span className="text-xs font-medium text-green-600">✓</span>
              </span>
              <span>Oil Pollution and Oil Sleek</span>
            </li>
            <li className="flex items-start">
              <span className="h-4 w-4 rounded-full bg-green-50 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span className="text-xs font-medium text-green-600">✓</span>
              </span>
              <span>Coastal Hazards</span>
            </li>
            <li className="flex items-start">
              <span className="h-4 w-4 rounded-full bg-green-50 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span className="text-xs font-medium text-green-600">✓</span>
              </span>
              <span>Disaster Mitigation</span>
            </li>
          </ul>
        </div>
        
        {/* Marine Biotechnology */}
        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:border-aemet-blue/50 transition-colors">
          <div className="flex items-center mb-3">
            <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center mr-3">
              <Fish className="h-5 w-5 text-teal-600" />
            </div>
            <h3 className="text-md font-semibold text-aemet-navy">Marine Biotechnology</h3>
          </div>
          <ul className="space-y-1.5 text-sm text-gray-700">
            <li className="flex items-start">
              <span className="h-4 w-4 rounded-full bg-teal-50 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span className="text-xs font-medium text-teal-600">✓</span>
              </span>
              <span>Marine Bio Prospecting</span>
            </li>
            <li className="flex items-start">
              <span className="h-4 w-4 rounded-full bg-teal-50 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span className="text-xs font-medium text-teal-600">✓</span>
              </span>
              <span>Marine Pharmacology</span>
            </li>
            <li className="flex items-start">
              <span className="h-4 w-4 rounded-full bg-teal-50 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span className="text-xs font-medium text-teal-600">✓</span>
              </span>
              <span>Sea Weed Bio Products</span>
            </li>
            <li className="flex items-start">
              <span className="h-4 w-4 rounded-full bg-teal-50 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span className="text-xs font-medium text-teal-600">✓</span>
              </span>
              <span>Sea Food Microbiology</span>
            </li>
            <li className="flex items-start">
              <span className="h-4 w-4 rounded-full bg-teal-50 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span className="text-xs font-medium text-teal-600">✓</span>
              </span>
              <span>Invasive Species</span>
            </li>
            <li className="flex items-start">
              <span className="h-4 w-4 rounded-full bg-teal-50 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span className="text-xs font-medium text-teal-600">✓</span>
              </span>
              <span>Bio Fouling and Bio Corrosion</span>
            </li>
          </ul>
        </div>
        
        {/* Marine Ecology & Resources */}
        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:border-aemet-blue/50 transition-colors">
          <div className="flex items-center mb-3">
            <div className="h-10 w-10 rounded-full bg-cyan-100 flex items-center justify-center mr-3">
              <Droplet className="h-5 w-5 text-cyan-600" />
            </div>
            <h3 className="text-md font-semibold text-aemet-navy">Marine Ecology</h3>
          </div>
          <ul className="space-y-1.5 text-sm text-gray-700">
            <li className="flex items-start">
              <span className="h-4 w-4 rounded-full bg-cyan-50 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span className="text-xs font-medium text-cyan-600">✓</span>
              </span>
              <span>Estuarine Studies</span>
            </li>
            <li className="flex items-start">
              <span className="h-4 w-4 rounded-full bg-cyan-50 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span className="text-xs font-medium text-cyan-600">✓</span>
              </span>
              <span>Marine Ecology</span>
            </li>
            <li className="flex items-start">
              <span className="h-4 w-4 rounded-full bg-cyan-50 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span className="text-xs font-medium text-cyan-600">✓</span>
              </span>
              <span>Deep Sea Mining</span>
            </li>
            <li className="flex items-start">
              <span className="h-4 w-4 rounded-full bg-cyan-50 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span className="text-xs font-medium text-cyan-600">✓</span>
              </span>
              <span>Marine Health and Environment</span>
            </li>
          </ul>
        </div>
        
        {/* Maritime Security & Defense */}
        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:border-aemet-blue/50 transition-colors">
          <div className="flex items-center mb-3">
            <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center mr-3">
              <Shield className="h-5 w-5 text-red-600" />
            </div>
            <h3 className="text-md font-semibold text-aemet-navy">Maritime Security</h3>
          </div>
          <ul className="space-y-1.5 text-sm text-gray-700">
            <li className="flex items-start">
              <span className="h-4 w-4 rounded-full bg-red-50 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span className="text-xs font-medium text-red-600">✓</span>
              </span>
              <span>Maritime Terrorism and Piracy</span>
            </li>
          </ul>
        </div>
        
        {/* Marine Energy & Resources */}
        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:border-aemet-blue/50 transition-colors">
          <div className="flex items-center mb-3">
            <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center mr-3">
              <Zap className="h-5 w-5 text-amber-600" />
            </div>
            <h3 className="text-md font-semibold text-aemet-navy">Marine Energy</h3>
          </div>
          <ul className="space-y-1.5 text-sm text-gray-700">
            <li className="flex items-start">
              <span className="h-4 w-4 rounded-full bg-amber-50 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span className="text-xs font-medium text-amber-600">✓</span>
              </span>
              <span>Offshore Wind Energy</span>
            </li>
            <li className="flex items-start">
              <span className="h-4 w-4 rounded-full bg-amber-50 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span className="text-xs font-medium text-amber-600">✓</span>
              </span>
              <span>Wave Energy</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ResearchThrustAreas;
