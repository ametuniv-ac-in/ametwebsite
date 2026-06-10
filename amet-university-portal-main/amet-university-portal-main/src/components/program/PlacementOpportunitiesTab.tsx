import React from 'react';
import { MapPin, Globe, Building2, TrendingUp } from 'lucide-react';

interface PlacementOpportunitiesTabProps {
  program: any;
}

const PlacementOpportunitiesTab: React.FC<PlacementOpportunitiesTabProps> = ({ program }) => {
  const internationalLocations = [
    'Singapore',
    'Qatar',
    'Dubai',
    'Sharjah',
    'Bahrain',
    'UK',
    'USA',
    'China',
    'Germany'
  ];

  const indianLocations = [
    'Mumbai',
    'Gujarat',
    'Cochin',
    'Chennai',
    'Goa',
    'Kolkata',
    'Mangalore'
  ];

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-aemet-navy mb-6">Placement Opportunities</h2>
      
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg p-6 mb-8">
        <div className="flex items-center gap-3 mb-3">
          <TrendingUp className="h-8 w-8" />
          <h3 className="text-xl font-bold">Global Placement Network</h3>
        </div>
        <p className="text-white/90">
          Our Naval Architecture graduates are placed in leading maritime companies and shipyards 
          across the globe and major industrial hubs in India.
        </p>
      </div>

      {/* International Placements */}
      <div className="bg-white border-2 border-blue-200 rounded-lg p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <Globe className="h-6 w-6 text-aemet-blue" />
          </div>
          <h3 className="text-xl font-bold text-aemet-navy">International Placements</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {internationalLocations.map((location, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg px-4 py-3 text-center hover:shadow-md transition-all"
            >
              <MapPin className="h-4 w-4 text-aemet-blue mx-auto mb-1" />
              <p className="text-sm font-semibold text-aemet-navy">{location}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Indian Placements */}
      <div className="bg-white border-2 border-orange-200 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
            <Building2 className="h-6 w-6 text-orange-600" />
          </div>
          <h3 className="text-xl font-bold text-aemet-navy">Indian Companies & Locations</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {indianLocations.map((location, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200 rounded-lg px-4 py-3 text-center hover:shadow-md transition-all"
            >
              <MapPin className="h-4 w-4 text-orange-600 mx-auto mb-1" />
              <p className="text-sm font-semibold text-aemet-navy">{location}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-5">
        <div className="flex items-start gap-3">
          <TrendingUp className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-green-900 mb-1">Excellent Placement Record</h4>
            <p className="text-green-800 text-sm">
              Our students are recruited by top maritime companies, shipyards, classification societies, 
              and offshore engineering firms in these locations, offering competitive packages and career growth opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacementOpportunitiesTab;
