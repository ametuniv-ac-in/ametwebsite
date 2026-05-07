import React from 'react';
import { Building, ChevronRight, Monitor, BookOpen, Wrench, Ship, Cog, Search, GraduationCap, Lightbulb, Database, Code } from 'lucide-react';
import { cn } from '@/lib/utils';
import shipInCampus from '@/assets/facilities/marine-engineering/ship-in-campus.jpg';
import dieselEngineLab1 from '@/assets/facilities/marine-engineering/diesel-engine-lab-1.jpg';
import dieselEngineLab2 from '@/assets/facilities/marine-engineering/diesel-engine-lab-2.jpg';
import engineSimulatorLab from '@/assets/facilities/marine-engineering/engine-simulator-lab.jpg';
import petroleumFacility1 from '@/assets/petroleum-facilities-01.jpg';
import petroleumFacility2 from '@/assets/petroleum-facilities-02.jpg';
import absFacilities1 from '@/assets/abs-facilities-1.jpg';
import absFacilities2 from '@/assets/abs-facilities-2.jpg';

interface FacilitiesSectionProps {
  facilities: {
    name: string;
    description: string;
  }[];
  departmentId?: string;
}

const FacilitiesSection: React.FC<FacilitiesSectionProps> = ({ facilities, departmentId }) => {
  
  // AMET Business School specific facilities
  if (departmentId === 'amet-business-school') {
    return (
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <Building className="h-5 w-5 mr-2 text-aemet-blue" />
          Department Facilities
        </h3>

        {/* Facilities Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <img 
              src={absFacilities1} 
              alt="AMET Business School Classroom" 
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <img 
              src={absFacilities2} 
              alt="AMET Business School Learning Environment" 
              className="w-full h-64 object-cover"
            />
          </div>
        </div>

        {/* Academic Infrastructure */}
        <div className="bg-gradient-to-r from-aemet-blue/5 to-aemet-navy/5 rounded-lg p-6 border border-aemet-blue/20">
          <h4 className="text-lg font-bold text-aemet-navy mb-4 flex items-center">
            <Building className="h-5 w-5 mr-2 text-aemet-blue" />
            Academic Infrastructure
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/50 rounded-lg p-4">
              <h5 className="font-semibold text-aemet-navy mb-2">Department Academic Block</h5>
              <p className="text-sm text-gray-700">VO Chidambaram Block</p>
            </div>
            <div className="bg-white/50 rounded-lg p-4">
              <h5 className="font-semibold text-aemet-navy mb-2">Classrooms & Halls</h5>
              <p className="text-sm text-gray-700">10 ICT-enabled classrooms, 1 Seminar Hall, and 1 Computer Lab with 20 computers</p>
            </div>
          </div>
        </div>

        {/* ICT Facilities */}
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <h4 className="text-lg font-bold text-aemet-navy mb-4 flex items-center">
            <Monitor className="h-5 w-5 mr-2 text-aemet-blue" />
            ICT Facilities
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "Smart Boards",
              "LCD Projectors", 
              "Audio-Video equipments",
              "Video Conferencing equipment",
              "Facilities for Flipped Class activities",
              "Digital Library Resources"
            ].map((facility, index) => (
              <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                <div className="h-2 w-2 bg-aemet-blue rounded-full mr-3"></div>
                <span className="text-sm text-gray-700">{facility}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Laboratories */}
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <h4 className="text-lg font-bold text-aemet-navy mb-4 flex items-center">
            <Wrench className="h-5 w-5 mr-2 text-aemet-blue" />
            Laboratories
          </h4>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200">
            <h5 className="font-semibold text-aemet-navy mb-2">BiZ Lab</h5>
            <p className="text-sm text-gray-700">Established in collaboration with AIMA (All India Management Association)</p>
          </div>
        </div>

        {/* Software Available */}
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <h4 className="text-lg font-bold text-aemet-navy mb-4 flex items-center">
            <Database className="h-5 w-5 mr-2 text-aemet-blue" />
            Software Available
          </h4>
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 border border-purple-200">
            <h5 className="font-semibold text-aemet-navy mb-2">SPSS Software</h5>
            <p className="text-sm text-gray-700">University License for statistical analysis and research</p>
          </div>
        </div>

        {/* Library Facility */}
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <h4 className="text-lg font-bold text-aemet-navy mb-4 flex items-center">
            <BookOpen className="h-5 w-5 mr-2 text-aemet-blue" />
            Library Facility
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200">
              <h5 className="font-semibold text-aemet-navy mb-2">Books Collection</h5>
              <p className="text-sm text-gray-700 mb-1"><strong>Total Books:</strong> 16,239</p>
              <p className="text-sm text-gray-700"><strong>Titles:</strong> 3,189</p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-4 border border-amber-200">
              <h5 className="font-semibold text-aemet-navy mb-2">Journals</h5>
              <p className="text-sm text-gray-700 mb-1"><strong>Total Journals:</strong> 15</p>
              <p className="text-sm text-gray-700">8 National | 7 International</p>
            </div>
          </div>
        </div>

        {/* Research Support */}
        <div className="bg-gradient-to-r from-aemet-navy/5 to-aemet-blue/5 rounded-lg p-6 border border-aemet-navy/20">
          <h4 className="text-lg font-bold text-aemet-navy mb-4 flex items-center">
            <Lightbulb className="h-5 w-5 mr-2 text-aemet-blue" />
            Research Support
          </h4>
          <div className="space-y-3">
            {[
              "Encouraging students to enrich their research skills through Training",
              "Financial support to start their own startups",
              "Financial support to do their research projects through seed money Scheme",
              "Support through Incubation and Innovation center to come with their Ideas through Hackathon",
              "Financial support to file their patents"
            ].map((support, index) => (
              <div key={index} className="flex items-start p-3 bg-white/70 rounded-lg">
                <ChevronRight className="h-5 w-5 text-aemet-blue mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">{support}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  // Marine Engineering specific facilities
  if (departmentId === 'marine-engineering') {
    return (
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <Building className="h-5 w-5 mr-2 text-aemet-blue" />
          Department Facilities
        </h3>
        
        {/* Academic Infrastructure */}
        <div className="bg-gradient-to-r from-aemet-blue/5 to-aemet-navy/5 rounded-lg p-6 border border-aemet-blue/20">
          <h4 className="text-lg font-bold text-aemet-navy mb-4 flex items-center">
            <Building className="h-5 w-5 mr-2 text-aemet-blue" />
            Academic Infrastructure
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/50 rounded-lg p-4">
              <h5 className="font-semibold text-aemet-navy mb-2">Rabindranath Tagore Block</h5>
              <p className="text-sm text-gray-700">Department Academic Block housing all marine engineering facilities</p>
            </div>
            <div className="bg-white/50 rounded-lg p-4">
              <h5 className="font-semibold text-aemet-navy mb-2">Classrooms & Halls</h5>
              <p className="text-sm text-gray-700">32 ICT-enabled classrooms, 2 seminar halls, and 1 computer lab with 50 computers</p>
            </div>
          </div>
        </div>

        {/* Ship in Campus */}
        <div className="bg-gradient-to-r from-aemet-navy/5 to-aemet-blue/5 rounded-lg p-6 border border-aemet-navy/20">
          <h4 className="text-lg font-bold text-aemet-navy mb-4 flex items-center">
            <Ship className="h-5 w-5 mr-2 text-aemet-blue" />
            Ship in Campus - Jewel of AMET
          </h4>
          <div className="mb-4 rounded-lg overflow-hidden shadow-lg">
            <img 
              src={shipInCampus} 
              alt="Ship in Campus - AMET's training vessel" 
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="text-gray-700">State-of-the-art training vessel providing hands-on maritime experience for students within the campus premises.</p>
        </div>

        {/* ICT Facilities */}
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <h4 className="text-lg font-bold text-aemet-navy mb-4 flex items-center">
            <Monitor className="h-5 w-5 mr-2 text-aemet-blue" />
            ICT Facilities
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "Smart Boards",
              "LCD Projectors", 
              "Audio-Video equipments",
              "Video Conferencing equipment",
              "Facilities for Flipped Class activities",
              "Digital Library Resources"
            ].map((facility, index) => (
              <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                <div className="h-2 w-2 bg-aemet-blue rounded-full mr-3"></div>
                <span className="text-sm text-gray-700">{facility}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Laboratories */}
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <h4 className="text-lg font-bold text-aemet-navy mb-4 flex items-center">
            <Wrench className="h-5 w-5 mr-2 text-aemet-blue" />
            Specialized Laboratories
          </h4>
          
          {/* Featured Labs Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img 
                src={dieselEngineLab1} 
                alt="Diesel Engine Laboratory I" 
                className="w-full h-48 object-cover"
              />
              <div className="p-3 bg-aemet-blue/5">
                <h5 className="font-semibold text-aemet-navy text-sm">Diesel Engine Lab I</h5>
                <p className="text-xs text-gray-600 mt-1">Hands-on diesel engine training facility</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img 
                src={dieselEngineLab2} 
                alt="Diesel Engine Laboratory II" 
                className="w-full h-48 object-cover"
              />
              <div className="p-3 bg-aemet-blue/5">
                <h5 className="font-semibold text-aemet-navy text-sm">Diesel Engine Lab II</h5>
                <p className="text-xs text-gray-600 mt-1">Advanced engine systems and maintenance</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img 
                src={engineSimulatorLab} 
                alt="Engine Simulator Laboratory" 
                className="w-full h-48 object-cover"
              />
              <div className="p-3 bg-aemet-blue/5">
                <h5 className="font-semibold text-aemet-navy text-sm">Engine Simulator Lab</h5>
                <p className="text-xs text-gray-600 mt-1">State-of-the-art engine room simulation</p>
              </div>
            </div>
          </div>

          {/* Complete Laboratory List */}
          <h5 className="text-md font-semibold text-aemet-navy mb-3">Complete Laboratory List</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "Diesel Engine Lab-I", "Diesel Engine Lab-II", "Diesel Engine Lab-III",
              "Pump & Pumping System Lab-I", "Pump & Pumping System Lab-II", "Pump & Pumping System Lab-III",
              "Simulator Lab-I", "Simulator Lab-II", 
              "Fire Fighting Lab-I", "Fire Fighting Lab-II", "Fire Fighting Lab-III",
              "Static Model Demonstration Lab-I", "Static Model Demonstration Lab-II", "Static Model Demonstration Lab-III",
              "Welding Technology Lab-I", "Welding Technology Lab-II", "Welding Technology Lab-III"
            ].map((lab, index) => (
              <div key={index} className="flex items-center p-3 bg-blue-50 rounded-lg">
                <div className="h-2 w-2 bg-aemet-navy rounded-full mr-3"></div>
                <span className="text-sm text-gray-700">{lab}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Software & Library */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
            <h4 className="text-lg font-bold text-aemet-navy mb-4 flex items-center">
              <Cog className="h-5 w-5 mr-2 text-aemet-blue" />
              Software Available
            </h4>
            <div className="bg-aemet-blue/5 rounded-lg p-4">
              <h5 className="font-semibold text-aemet-navy mb-1">Neptune Engine Room Simulator</h5>
              <p className="text-sm text-gray-600">Advanced marine engine room simulation software for practical training</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
            <h4 className="text-lg font-bold text-aemet-navy mb-4 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-aemet-blue" />
              Library Facility
            </h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <span className="text-sm font-medium">Books & Titles</span>
                <span className="text-sm text-aemet-blue font-semibold">7,129 books / 1,451 titles</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <span className="text-sm font-medium">Journals</span>
                <span className="text-sm text-aemet-blue font-semibold">17 (9 National + 8 International)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Research Support */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 border border-green-200">
          <h4 className="text-lg font-bold text-aemet-navy mb-4 flex items-center">
            <Search className="h-5 w-5 mr-2 text-aemet-blue" />
            Research Support
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Encouraging students to enrich their research skills through Training",
              "Financial support to start their own startups",
              "Financial support to do their research projects through seed money Scheme",
              "Support through Incubation and Innovation center to come with their Ideas through Hackathon",
              "Financial support to file their patents"
            ].map((support, index) => (
              <div key={index} className="flex items-start p-3 bg-white/70 rounded-lg">
                <div className="h-2 w-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                <span className="text-sm text-gray-700">{support}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Naval Architecture specific facilities
  if (departmentId === 'naval-architecture') {
    return (
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <Building className="h-5 w-5 mr-2 text-aemet-blue" />
          Department Facilities
        </h3>
        
        {/* Academic Infrastructure */}
        <div className="bg-gradient-to-r from-aemet-blue/5 to-aemet-navy/5 rounded-lg p-6 border border-aemet-blue/20">
          <h4 className="text-lg font-bold text-aemet-navy mb-4 flex items-center">
            <Building className="h-5 w-5 mr-2 text-aemet-blue" />
            Department Academic Block: Mahatma Gandhi Block
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white/50 rounded-lg p-4">
              <h5 className="font-semibold text-aemet-navy mb-2">Classrooms with ICT</h5>
              <p className="text-2xl font-bold text-aemet-blue">05</p>
              <p className="text-sm text-gray-600">ICT-enabled classrooms</p>
            </div>
            <div className="bg-white/50 rounded-lg p-4">
              <h5 className="font-semibold text-aemet-navy mb-2">Seminar Halls</h5>
              <p className="text-2xl font-bold text-aemet-blue">01</p>
              <p className="text-sm text-gray-600">With ICT facility</p>
            </div>
            <div className="bg-white/50 rounded-lg p-4">
              <h5 className="font-semibold text-aemet-navy mb-2">Software Labs</h5>
              <p className="text-2xl font-bold text-aemet-blue">03</p>
              <p className="text-sm text-gray-600">15 computers each</p>
            </div>
            <div className="bg-white/50 rounded-lg p-4">
              <h5 className="font-semibold text-aemet-navy mb-2">Hydrodynamics Lab</h5>
              <p className="text-2xl font-bold text-aemet-blue">01</p>
              <p className="text-sm text-gray-600">With wave flume</p>
            </div>
            <div className="bg-white/50 rounded-lg p-4">
              <h5 className="font-semibold text-aemet-navy mb-2">Project Lab</h5>
              <p className="text-2xl font-bold text-aemet-blue">01</p>
              <p className="text-sm text-gray-600">15 computers</p>
            </div>
            <div className="bg-white/50 rounded-lg p-4">
              <h5 className="font-semibold text-aemet-navy mb-2">Research Lab</h5>
              <p className="text-2xl font-bold text-aemet-blue">01</p>
              <p className="text-sm text-gray-600">15 computers</p>
            </div>
            <div className="bg-white/50 rounded-lg p-4">
              <h5 className="font-semibold text-aemet-navy mb-2">Industry Supported Lab</h5>
              <p className="text-2xl font-bold text-aemet-blue">01</p>
            </div>
            <div className="bg-white/50 rounded-lg p-4">
              <h5 className="font-semibold text-aemet-navy mb-2">Drawing Halls</h5>
              <p className="text-2xl font-bold text-aemet-blue">02</p>
            </div>
            <div className="bg-white/50 rounded-lg p-4">
              <h5 className="font-semibold text-aemet-navy mb-2">Department Library</h5>
              <p className="text-2xl font-bold text-aemet-blue">01</p>
            </div>
          </div>
        </div>

        {/* ICT Facilities */}
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <h4 className="text-lg font-bold text-aemet-navy mb-4 flex items-center">
            <Monitor className="h-5 w-5 mr-2 text-aemet-blue" />
            ICT Facilities
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "Smart Boards",
              "LCD Projectors", 
              "Audio-Video equipments",
              "Video Conferencing equipment",
              "Facilities for Flipped Class activities",
              "Digital Library Resources"
            ].map((facility, index) => (
              <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                <div className="h-2 w-2 bg-aemet-blue rounded-full mr-3"></div>
                <span className="text-sm text-gray-700">{facility}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Research Facilities */}
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <h4 className="text-lg font-bold text-aemet-navy mb-4 flex items-center">
            <Wrench className="h-5 w-5 mr-2 text-aemet-blue" />
            Research Facilities
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "Ship Design Laboratory",
              "Marine Simulation Laboratory",
              "Marine Hydrodynamics Laboratory",
              "Ship Drawing Laboratory",
              "Numerical Marine Hydrodynamics Laboratory",
              "Ship System & Design Laboratory",
              "Wave Simulation Facility"
            ].map((facility, index) => (
              <div key={index} className="flex items-center p-3 bg-blue-50 rounded-lg">
                <div className="h-2 w-2 bg-aemet-navy rounded-full mr-3"></div>
                <span className="text-sm text-gray-700">{facility}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Software & Library */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
            <h4 className="text-lg font-bold text-aemet-navy mb-4 flex items-center">
              <Cog className="h-5 w-5 mr-2 text-aemet-blue" />
              Software Facilities
            </h4>
            <div className="space-y-3">
              {[
                "SSI Ship Constructor Software",
                "Siemens Star CCM+",
                "Bentley MAXSURF",
                "Bentley SACS",
                "Bentley MOSES",
                "AutoCAD"
              ].map((software, index) => (
                <div key={index} className="flex items-center p-3 bg-aemet-blue/5 rounded-lg">
                  <div className="h-2 w-2 bg-aemet-blue rounded-full mr-3"></div>
                  <span className="text-sm text-gray-700">{software}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
            <h4 className="text-lg font-bold text-aemet-navy mb-4 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-aemet-blue" />
              Library Facility
            </h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                <span className="text-sm font-medium">Books & Titles</span>
                <span className="text-sm text-aemet-blue font-semibold">4,080 books / 641 titles</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                <span className="text-sm font-medium">Print Journals</span>
                <span className="text-sm text-aemet-blue font-semibold">5 International</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                <span className="text-sm font-medium">e-Journals</span>
                <span className="text-sm text-aemet-blue font-semibold">55</span>
              </div>
            </div>
          </div>
        </div>

        {/* Research Support */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 border border-green-200">
          <h4 className="text-lg font-bold text-aemet-navy mb-4 flex items-center">
            <Search className="h-5 w-5 mr-2 text-aemet-blue" />
            Research Support
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Encouraging students to enrich their research skills through Training",
              "Financial support to start their own startups",
              "Financial support to do their research projects through seed money Scheme",
              "Support through Incubation and Innovation center to come with their Ideas through Hackathon",
              "Financial support to file their patents"
            ].map((support, index) => (
              <div key={index} className="flex items-start p-3 bg-white/70 rounded-lg">
                <div className="h-2 w-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                <span className="text-sm text-gray-700">{support}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Petroleum Engineering specific facilities
  if (departmentId === 'petroleum-engineering') {
    return (
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <Building className="h-5 w-5 mr-2 text-aemet-blue" />
          Department Facilities
        </h3>
        
        {/* Academic Infrastructure */}
        <div className="bg-gradient-to-r from-aemet-blue/5 to-aemet-navy/5 rounded-lg p-6 border border-aemet-blue/20">
          <h4 className="text-lg font-bold text-aemet-navy mb-4 flex items-center">
            <Building className="h-5 w-5 mr-2 text-aemet-blue" />
            Department Academic Block: V.O.Chidamabaram (V.O.C) Block
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white/50 rounded-lg p-4">
              <h5 className="font-semibold text-aemet-navy mb-2">Classrooms with ICT</h5>
              <p className="text-2xl font-bold text-aemet-blue">12</p>
              <p className="text-sm text-gray-600">ICT-enabled classrooms</p>
            </div>
            <div className="bg-white/50 rounded-lg p-4">
              <h5 className="font-semibold text-aemet-navy mb-2">Seminar Halls</h5>
              <p className="text-2xl font-bold text-aemet-blue">02</p>
              <p className="text-sm text-gray-600">With ICT facility</p>
            </div>
            <div className="bg-white/50 rounded-lg p-4">
              <h5 className="font-semibold text-aemet-navy mb-2">Computer Lab</h5>
              <p className="text-2xl font-bold text-aemet-blue">01</p>
              <p className="text-sm text-gray-600">40 computers</p>
            </div>
          </div>
        </div>

        {/* Facilities Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <img 
              src={petroleumFacility1} 
              alt="Petroleum Engineering Laboratory - Students in training" 
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <img 
              src={petroleumFacility2} 
              alt="Petroleum Engineering Laboratory - Practical training equipment" 
              className="w-full h-64 object-cover"
            />
          </div>
        </div>

        {/* ICT Facilities */}
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <h4 className="text-lg font-bold text-aemet-navy mb-4 flex items-center">
            <Monitor className="h-5 w-5 mr-2 text-aemet-blue" />
            ICT Facilities
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "Smart Boards",
              "LCD Projectors", 
              "Audio-Video equipments",
              "Video Conferencing equipment",
              "Facilities for Flipped Class activities",
              "Digital Library Resources"
            ].map((facility, index) => (
              <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                <div className="h-2 w-2 bg-aemet-blue rounded-full mr-3"></div>
                <span className="text-sm text-gray-700">{facility}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Laboratories */}
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <h4 className="text-lg font-bold text-aemet-navy mb-4 flex items-center">
            <Wrench className="h-5 w-5 mr-2 text-aemet-blue" />
            Specialized Laboratories
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "Petroleum Geology Laboratory",
              "Reservoir Engineering Laboratory",
              "Fluid Mechanics Laboratory",
              "Heat And Mass Transfer Laboratory",
              "Drilling Simulator & Software Laboratory",
              "Petroleum Testing Laboratory",
              "Drilling Fluids Laboratory"
            ].map((lab, index) => (
              <div key={index} className="flex items-center p-3 bg-blue-50 rounded-lg">
                <div className="h-2 w-2 bg-aemet-navy rounded-full mr-3"></div>
                <span className="text-sm text-gray-700">{lab}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Software & Library */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
            <h4 className="text-lg font-bold text-aemet-navy mb-4 flex items-center">
              <Cog className="h-5 w-5 mr-2 text-aemet-blue" />
              Software Available
            </h4>
            <div className="bg-aemet-blue/5 rounded-lg p-4">
              <h5 className="font-semibold text-aemet-navy mb-1">Drilling Simulator</h5>
              <p className="text-sm text-gray-600">Advanced drilling simulation software for practical training</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
            <h4 className="text-lg font-bold text-aemet-navy mb-4 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-aemet-blue" />
              Library Facility
            </h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <span className="text-sm font-medium">Books & Titles</span>
                <span className="text-sm text-aemet-blue font-semibold">4,595 books / 1,035 titles</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <span className="text-sm font-medium">Journals</span>
                <span className="text-sm text-aemet-blue font-semibold">11 (6 National + 5 International)</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <span className="text-sm font-medium">Database</span>
                <span className="text-sm text-aemet-blue font-semibold">One Petro (SPE) subscribed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Research Support */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 border border-green-200">
          <h4 className="text-lg font-bold text-aemet-navy mb-4 flex items-center">
            <Search className="h-5 w-5 mr-2 text-aemet-blue" />
            Research Support
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Encouraging students to enrich their research skills through Training",
              "Financial support to start their own startups",
              "Financial support to do their research projects through seed money Scheme",
              "Support through Incubation and Innovation center to come with their Ideas through Hackathon",
              "Financial support to file their patents"
            ].map((support, index) => (
              <div key={index} className="flex items-start p-3 bg-white/70 rounded-lg">
                <div className="h-2 w-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                <span className="text-sm text-gray-700">{support}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Mechanical Engineering specific facilities
  if (departmentId === 'mechanical-engineering') {
    const fluidMechanicsEquipment = [
      { name: "Orifice apparatus", qty: "01" },
      { name: "Pipe friction apparatus", qty: "01" },
      { name: "Mouth piece apparatus 1", qty: "01" },
      { name: "Metacentric height apparatus", qty: "01" },
      { name: "Reciprocating pump", qty: "01" },
      { name: "Triangular notch apparatus", qty: "01" },
      { name: "Francis Reaction turbine", qty: "01" },
      { name: "Pelton wheel turbine", qty: "01" },
      { name: "Orifice meter", qty: "01" },
      { name: "Venturi meter", qty: "01" },
      { name: "Rotameter", qty: "01" },
      { name: "Pitot tube apparatus", qty: "01" },
      { name: "Jet pump", qty: "01" },
      { name: "Gear pump", qty: "01" },
      { name: "Centrifugal single stage pump", qty: "01" },
      { name: "Centrifugal multistage pump", qty: "01" },
      { name: "Centrifugal pump performance Test Rig", qty: "01" },
      { name: "Bernoulli's theorem Apparatus", qty: "01" },
      { name: "Pipe friction apparatus 1", qty: "01" },
      { name: "Mouth piece apparatus 2", qty: "01" },
      { name: "Orifice meter and Venturi meter", qty: "01" },
      { name: "1.5 T AC Unit", qty: "01" }
    ];

    const thermalLab1Equipment = [
      { name: "Single cylinder CI engine test-rig with mechanical load (Rope Drum) (Kirloskar)", qty: "01" },
      { name: "Single Cylinder CI Engine Test-rig with electrical Load and Computerized set up (Kirloskar)", qty: "01" },
      { name: "Single cylinder CI engine test-rig with mechanical load (Belt drum) (Greaves)", qty: "01" },
      { name: "Single cylinder 4 Stroke CI Engines with mechanical load (Belt drum) (Kirloskar)", qty: "01" },
      { name: "Multi Cylinder Petrol Engine Test Rig with eddy current dynamometer (Maruti)", qty: "01" },
      { name: "Slow Speed 4 Stroke CI Engine Test Rig with mechanical load (Belt drum) (Field marshal)", qty: "01" },
      { name: "Single Cylinder SI Engine Test-rig with electrical Load (Honda GK200)", qty: "01" },
      { name: "Cut section model of 4 stroke diesel engine (Kirloskar)", qty: "01" },
      { name: "Cut section model of 4 stroke diesel engine (Meera)", qty: "01" },
      { name: "Cut section model of 2 stroke petrol engine (Bajaj)", qty: "01" },
      { name: "Cut section model of 4 stroke petrol engine (Bajaj)", qty: "01" },
      { name: "Pensky Martin flash point apparatus (closed cup)", qty: "01" },
      { name: "Cleave land - flash and fire point apparatus (open cup)", qty: "01" },
      { name: "Red wood viscometer-I", qty: "01" },
      { name: "Say bolt viscometer", qty: "01" },
      { name: "Two stage air compressor (ELGI)", qty: "01" },
      { name: "Engine exhaust gas analyser (AVL)", qty: "01" }
    ];

    const thermalLab2Equipment = [
      { name: "Guarded plate apparatus", qty: "01" },
      { name: "Heat Transfer in Forced Convection", qty: "01" },
      { name: "Heat Transfer in Natural convection", qty: "01" },
      { name: "Emissivity Measurement Apparatus", qty: "01" },
      { name: "Stefan-Boltzmann apparatus", qty: "01" },
      { name: "Heat Transfer from a Pin Fin Apparatus", qty: "01" },
      { name: "Heat Pipe Demonstrator", qty: "01" },
      { name: "Shell and Tube Heat Exchanger", qty: "01" },
      { name: "Parallel & counter flow heat exchanger", qty: "01" }
    ];

    const strengthOfMaterialsEquipment = [
      { name: "Hardness Testing Machine", qty: "01" },
      { name: "Spring Testing Machine", qty: "01" },
      { name: "Compression Testing Machine", qty: "01" },
      { name: "Fatigue Testing Machine", qty: "01" },
      { name: "Torsion Testing Machine", qty: "01" },
      { name: "Impact Testing Machine", qty: "01" },
      { name: "Universal Testing Machine", qty: "01" },
      { name: "Beam Deflection Machine", qty: "01" },
      { name: "Lateral Extensometer", qty: "01" },
      { name: "Ericson Cupping Test Machine", qty: "01" }
    ];

    const refrigerationEquipment = [
      { name: "Vapour Compression Refrigeration Test Rig", qty: "01" },
      { name: "Air-Conditioning Test Rig", qty: "01" },
      { name: "Vapour Compression Air Conditioning Test Rig (Cut Section)", qty: "01" },
      { name: "Cut Section Model of an Air-Conditioning System", qty: "01" },
      { name: "Cut Section Model of a Vapour Compression Refrigeration System", qty: "01" },
      { name: "Window Air-Conditioner", qty: "01" },
      { name: "Working Model of Components of Vapour Compression Refrigeration System", qty: "01" },
      { name: "Tool Set for Maintenance (Tube Cutter, Bender, Capillary Testing Gauge, Electronic Leak Detector)", qty: "01" },
      { name: "Model of a Domestic Refrigerator", qty: "01" }
    ];

    const hydraulicsPneumaticsEquipment = [
      { name: "Pneumatic Trainer Kit", qty: "02" },
      { name: "Electro Pneumatic Trainer Kit", qty: "01" },
      { name: "Hydraulic Trainer Kit", qty: "02" },
      { name: "Multi process Station", qty: "01" },
      { name: "Air compressor", qty: "01" }
    ];

    const cadCamEquipment = [
      { name: "Computer Systems", qty: "37" }
    ];

    const EquipmentTable = ({ equipment, labName }: { equipment: { name: string; qty: string }[], labName: string }) => (
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="bg-gradient-to-r from-aemet-navy to-aemet-blue px-4 py-3">
          <h5 className="font-bold text-white flex items-center">
            <Wrench className="h-4 w-4 mr-2" />
            {labName}
          </h5>
        </div>
        <div className="max-h-64 overflow-y-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 sticky top-0">
              <tr>
                <th className="text-left px-4 py-2 text-aemet-navy font-semibold">S.No</th>
                <th className="text-left px-4 py-2 text-aemet-navy font-semibold">Equipment Name</th>
                <th className="text-center px-4 py-2 text-aemet-navy font-semibold">Qty</th>
              </tr>
            </thead>
            <tbody>
              {equipment.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-2 text-gray-600">{index + 1}</td>
                  <td className="px-4 py-2 text-gray-700">{item.name}</td>
                  <td className="text-center px-4 py-2 text-aemet-blue font-medium">{item.qty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );

    return (
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <Building className="h-5 w-5 mr-2 text-aemet-blue" />
          Department Facilities - Labs and Unique Facilities
        </h3>
        
        {/* Introduction */}
        <div className="bg-gradient-to-r from-aemet-blue/5 to-aemet-navy/5 rounded-lg p-6 border border-aemet-blue/20">
          <p className="text-gray-700 mb-4">
            Listed below are the laboratories in the Mechanical Engineering Department. Each laboratory holds important significance in the department's academic and research functions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Hands-on Learning", desc: "Labs allow students to apply theoretical concepts to real machinery, tools, and systems." },
              { title: "Skill Development", desc: "Students gain practical skills in measurement, machining, fabrication, testing, and problem-solving." },
              { title: "Material Behaviours", desc: "Experiments help learners observe how materials respond to forces, temperature, and conditions." },
              { title: "Validation of Theory", desc: "Lab tests verify analytical and numerical models, connecting classroom learning with real-world performance." },
              { title: "Design & Innovation", desc: "Laboratories provide space to prototype, test, and improve mechanical components or systems." },
              { title: "Safety Awareness", desc: "Students learn proper handling of equipment and industrial safety practices." },
              { title: "Research & Development", desc: "Labs support advanced research in thermodynamics, robotics, fluid mechanics, and manufacturing." },
              { title: "Industry Readiness", desc: "Practical exposure makes students more prepared for engineering roles in industry." }
            ].map((item, index) => (
              <div key={index} className="bg-white/70 rounded-lg p-4 border border-aemet-blue/10">
                <h5 className="font-semibold text-aemet-navy mb-2 text-sm">{item.title}</h5>
                <p className="text-xs text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* List of Laboratories */}
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <h4 className="text-lg font-bold text-aemet-navy mb-4 flex items-center">
            <Wrench className="h-5 w-5 mr-2 text-aemet-blue" />
            List of Laboratories
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "Fluid Mechanics Laboratory",
              "Thermal Engineering - I Laboratory",
              "Thermal Engineering - II Laboratory",
              "Strength of Material Laboratory",
              "Refrigeration & Air conditioning Laboratory",
              "Hydraulic & Pneumatic Laboratory",
              "CAD/CAM Laboratory"
            ].map((lab, index) => (
              <div key={index} className="flex items-center p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
                <div className="h-6 w-6 bg-aemet-blue rounded-full flex items-center justify-center mr-3 text-white text-xs font-bold">{index + 1}</div>
                <span className="text-sm font-medium text-gray-700">{lab}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Laboratory Equipment Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <EquipmentTable equipment={fluidMechanicsEquipment} labName="Fluid Mechanics Laboratory" />
          <EquipmentTable equipment={thermalLab1Equipment} labName="Thermal Engineering Laboratory - I" />
          <EquipmentTable equipment={thermalLab2Equipment} labName="Thermal Engineering Laboratory - II" />
          <EquipmentTable equipment={strengthOfMaterialsEquipment} labName="Strength of Materials Laboratory" />
          <EquipmentTable equipment={refrigerationEquipment} labName="Refrigeration & AC Laboratory" />
          <EquipmentTable equipment={hydraulicsPneumaticsEquipment} labName="Hydraulic & Pneumatics Laboratory" />
        </div>

        {/* CAD/CAM Lab */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 border border-purple-200">
          <h4 className="text-lg font-bold text-aemet-navy mb-4 flex items-center">
            <Monitor className="h-5 w-5 mr-2 text-purple-600" />
            CAD/CAM Laboratory
          </h4>
          <div className="flex items-center justify-between bg-white/80 rounded-lg p-4">
            <span className="text-gray-700 font-medium">Computer Systems Available</span>
            <span className="text-2xl font-bold text-aemet-blue">37</span>
          </div>
        </div>
      </div>
    );
  }

  // Physics department specific facilities
  if (departmentId === 'physics') {
    return (
      <div className="space-y-8">
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <Building className="h-5 w-5 mr-2 text-aemet-blue" />
          Department Facilities
        </h3>

        {/* Student Laboratory */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
          <h4 className="text-lg font-bold text-aemet-navy mb-4 flex items-center">
            <Wrench className="h-5 w-5 mr-2 text-blue-600" />
            Student Laboratory
          </h4>
          <p className="text-sm text-gray-600 mb-4">Department of Physics - Student Lab | Required (UG): 1 | Available (UG): 1</p>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-aemet-navy text-white">
                  <th className="border border-gray-300 px-3 py-2 text-left">S.No</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Name of the Lab</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">UG/PG</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Venue</th>
                  <th className="border border-gray-300 px-3 py-2 text-center">Well Equipped</th>
                  <th className="border border-gray-300 px-3 py-2 text-center">Calibrated</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-3 py-2 text-center">1</td>
                  <td className="border border-gray-300 px-3 py-2 font-medium text-aemet-navy">Physics Laboratory</td>
                  <td className="border border-gray-300 px-3 py-2">UG</td>
                  <td className="border border-gray-300 px-3 py-2">A Block, 1st Floor</td>
                  <td className="border border-gray-300 px-3 py-2 text-center text-green-600 font-medium">Yes</td>
                  <td className="border border-gray-300 px-3 py-2 text-center text-green-600 font-medium">Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Research Laboratory 1 */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
          <h4 className="text-lg font-bold text-aemet-navy mb-4 flex items-center">
            <Search className="h-5 w-5 mr-2 text-purple-600" />
            Research Laboratory - 1
          </h4>
          
          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-aemet-navy text-white">
                  <th className="border border-gray-300 px-3 py-2 text-left">S.No</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Name of the Lab</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Venue</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Funding Agency</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-3 py-2 text-center">1</td>
                  <td className="border border-gray-300 px-3 py-2 font-medium text-aemet-navy">
                    Nanophotonics Research Laboratory<br/>
                    <span className="text-gray-600">Optics and Photonics Research Laboratory</span>
                  </td>
                  <td className="border border-gray-300 px-3 py-2">A Block, 1st Floor</td>
                  <td className="border border-gray-300 px-3 py-2">Multiple Funding Agencies</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h5 className="font-semibold text-aemet-navy mb-3">Major Equipment Details by Funding Agency</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/80 rounded-lg p-4 border border-purple-100">
              <h6 className="font-semibold text-purple-700 mb-2">CSIR - EMR (22(0780)/19/EMR-II)</h6>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Probe Sonicator (ULTRA-PS150-LCD-20)</li>
                <li>• Bench top Centrifuge (Neya-16R)</li>
                <li>• Spin Coating Unit with UV Curing System (HO-TH-05CT)</li>
                <li>• Halogen Lamp Broad-band 150W (HO-SP-QHL150)</li>
              </ul>
            </div>
            
            <div className="bg-white/80 rounded-lg p-4 border border-purple-100">
              <h6 className="font-semibold text-blue-700 mb-2">DST - MES (DST/TMD/MES/2k18/182)</h6>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Electrochemical Workstation (CH Instrument-CHI760E)</li>
              </ul>
            </div>
            
            <div className="bg-white/80 rounded-lg p-4 border border-purple-100">
              <h6 className="font-semibold text-green-700 mb-2">DST - SERB (ECR/2016/000404)</h6>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• UV-Visible Spectrophotometer (Agilent Cary 60)</li>
                <li>• Vacuum Oven (Acmas Weiber - Acm-22068-I)</li>
              </ul>
            </div>
            
            <div className="bg-white/80 rounded-lg p-4 border border-purple-100">
              <h6 className="font-semibold text-orange-700 mb-2">DST - OWUIS (DST/TMD/OWUIS-2018/RS-16)</h6>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• EXO Sonde Multipurpose Sensor (ELEK LITE-865)</li>
                <li>• FTIR Spectrometer (Agilent Cary 360)</li>
                <li>• Photon Counting Head (Hamamatsu, H8259-02)</li>
                <li>• Photon Counting Units (C9744 / C8855-01)</li>
                <li>• Motorized Rotation Stage (MRS100)</li>
                <li>• Compact Laser Diode – 405 nm (LDM-405)</li>
              </ul>
            </div>
            
            <div className="bg-white/80 rounded-lg p-4 border border-purple-100">
              <h6 className="font-semibold text-red-700 mb-2">BRNS</h6>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Photothermal Beam Deflection Unit</li>
              </ul>
            </div>
            
            <div className="bg-white/80 rounded-lg p-4 border border-purple-100">
              <h6 className="font-semibold text-teal-700 mb-2">AMET - Seed Money Project</h6>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Muffle Furnace</li>
                <li>• Fumehood</li>
                <li>• Double Distilled Water Unit</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Research Laboratory 2 */}
        <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-6 border border-green-200">
          <h4 className="text-lg font-bold text-aemet-navy mb-4 flex items-center">
            <Search className="h-5 w-5 mr-2 text-green-600" />
            Research Laboratory - 2
          </h4>
          
          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-aemet-navy text-white">
                  <th className="border border-gray-300 px-3 py-2 text-left">S.No</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Name of the Lab</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Venue</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Area</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Funding</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-3 py-2 text-center">2</td>
                  <td className="border border-gray-300 px-3 py-2 font-medium text-aemet-navy">
                    Optoelectronics Laboratory<br/>
                    <span className="text-gray-600">Energy and Biophotonics Laboratory</span>
                  </td>
                  <td className="border border-gray-300 px-3 py-2">E Block, 2nd Floor</td>
                  <td className="border border-gray-300 px-3 py-2">270 sq. ft.</td>
                  <td className="border border-gray-300 px-3 py-2">AMET Seed Money Project</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h5 className="font-semibold text-aemet-navy mb-3">Major Equipment</h5>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              "Muffle Furnace",
              "Hot Air Oven",
              "Hot Water Bath",
              "Microwave Oven",
              "Centrifuge",
              "Compact Laboratory Centrifuge"
            ].map((equipment, index) => (
              <div key={index} className="bg-white/80 rounded-lg p-3 text-center border border-green-100">
                <span className="text-sm text-gray-700">{equipment}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="bg-gradient-to-r from-aemet-navy/5 to-aemet-blue/5 rounded-lg p-6 border border-aemet-blue/20">
          <h4 className="text-lg font-bold text-aemet-navy mb-4">Facility Summary</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
              <div className="text-3xl font-bold text-aemet-blue mb-1">1</div>
              <div className="text-sm text-gray-600">Student Laboratory</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
              <div className="text-3xl font-bold text-purple-600 mb-1">2</div>
              <div className="text-sm text-gray-600">Research Laboratories</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
              <div className="text-3xl font-bold text-green-600 mb-1">6</div>
              <div className="text-sm text-gray-600">Funding Agencies</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Food Processing Technology specific facilities
  if (departmentId === 'food-processing') {
    return (
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <Building className="h-5 w-5 mr-2 text-aemet-blue" />
          Facilities in the Department
        </h3>

        {/* ICT Enabled Classrooms */}
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-6 border border-orange-200">
          <h4 className="text-lg font-bold text-aemet-navy mb-4 flex items-center">
            <Monitor className="h-5 w-5 mr-2 text-orange-600" />
            ICT Enabled Class Rooms
          </h4>
          <p className="text-gray-700">Modern classrooms equipped with ICT facilities for enhanced learning experience.</p>
        </div>

        {/* Unit Operation Laboratory */}
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <h4 className="text-lg font-bold text-aemet-navy mb-4 flex items-center">
            <Wrench className="h-5 w-5 mr-2 text-orange-600" />
            Unit Operation Laboratory
          </h4>
          <p className="text-gray-600 mb-4">To enhance the student research to next level, Unit Operation Laboratory was established with all the necessary instruments:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "Bucket Conveyor",
              "Screw Conveyor",
              "Plate Type Heat Exchanger",
              "Open Pan Evaporator",
              "Fluidized Bed Dryer",
              "Drag Co-efficient Apparatus"
            ].map((item, index) => (
              <div key={index} className="flex items-center p-3 bg-orange-50 rounded-lg">
                <div className="h-2 w-2 bg-orange-500 rounded-full mr-3"></div>
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Library Facility */}
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <h4 className="text-lg font-bold text-aemet-navy mb-4 flex items-center">
            <BookOpen className="h-5 w-5 mr-2 text-orange-600" />
            Library Facility
          </h4>
          <div className="space-y-3">
            <div className="flex items-start p-3 bg-orange-50/50 rounded-lg">
              <ChevronRight className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Department has a separate library facility with wide range of books and periodicals.</span>
            </div>
            <div className="flex items-start p-3 bg-orange-50/50 rounded-lg">
              <ChevronRight className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">E-Journals and e-Books access are available from the Main Library</span>
            </div>
          </div>
        </div>

        {/* Research Support */}
        <div className="bg-gradient-to-r from-orange-100/50 to-amber-100/50 rounded-lg p-6 border border-orange-200">
          <h4 className="text-lg font-bold text-aemet-navy mb-4 flex items-center">
            <Lightbulb className="h-5 w-5 mr-2 text-orange-600" />
            Research Support
          </h4>
          <div className="space-y-3">
            {[
              "Encouraging students to enrich their research skills through Training",
              "Financial support to start their own startups",
              "Financial support to do their research projects through seed money Scheme",
              "Support through Incubation and Innovation center to come with their Ideas through Hackathon",
              "Financial support to file their patents"
            ].map((support, index) => (
              <div key={index} className="flex items-start p-3 bg-white/70 rounded-lg">
                <ChevronRight className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">{support}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Research Facilities Header */}
        <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-lg p-4 text-center">
          <h3 className="text-xl font-bold">Research Facilities</h3>
        </div>

        {/* Food Processing Laboratory */}
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <h4 className="text-lg font-bold text-aemet-navy mb-4 flex items-center">
            <Wrench className="h-5 w-5 mr-2 text-orange-600" />
            Food Processing Laboratory
          </h4>
          <p className="text-gray-600 mb-4">Designed to enhance the laboratory experience by providing relevant background information and recipes that have been favourites with the students. Also included are laboratory activities to help develop research skills:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
            {[
              "Identify novel food products",
              "Study mechanisms of action for antimicrobial, anticancer, & antidiabetic compounds",
              "Study Nutraceuticals and their Innovation",
              "Use of processing technology in research and industry"
            ].map((item, index) => (
              <div key={index} className="flex items-start p-3 bg-orange-50 rounded-lg">
                <ChevronRight className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <h5 className="font-semibold text-aemet-navy mb-3">Equipment Available:</h5>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {[
              "Colori Spectrophotometer", "Baking Oven", "Extruder", "Muffle Furnace",
              "Gas Operated Boiling Pan", "Dough Mixer", "Pulp Fruit Juice Extractor",
              "Moisturizer Analyser", "Juice Press Machine", "Deep Fat Fryer",
              "Vegetable Cutter", "Bottle Corking Machine"
            ].map((equip, index) => (
              <div key={index} className="flex items-center p-2 bg-gray-50 rounded text-sm">
                <div className="h-1.5 w-1.5 bg-orange-500 rounded-full mr-2"></div>
                <span className="text-gray-700">{equip}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Food Analysis Laboratory */}
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <h4 className="text-lg font-bold text-aemet-navy mb-4 flex items-center">
            <Search className="h-5 w-5 mr-2 text-orange-600" />
            Food Analysis Laboratory
          </h4>
          <p className="text-gray-600 mb-4">Our Food Testing Laboratory (FTL) is equipped to analyse the Physico-chemical characteristics of Food materials including raw materials and finished products. We have wide range of High-throughput equipment to analyse Nutritional composition, Functional group analysis, Fatty acid profile, Phytochemical screening, Amino acid analysis, Pesticide residue screening, Micro & Macro nutrient analysis and Toxin analysis in various food matrices, Milk & milk products, Oil, Water, Beverages, Confectionaries, Fruits and Vegetables. The samples are analysed with the standard protocols like AOAC, AOCS, AACC and BIS standards.</p>
          <h5 className="font-semibold text-aemet-navy mb-3">Equipment Available:</h5>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {[
              "Viscometer", "Refrigerator", "Centrifuge", "Hot Air Oven",
              "Micro Centrifuge", "Soxhlet Extraction Unit", "Digital Analysis Balance",
              "Heating Mantle", "Distillation Unit", "Digital pH Meter", "Fat Extractor"
            ].map((equip, index) => (
              <div key={index} className="flex items-center p-2 bg-gray-50 rounded text-sm">
                <div className="h-1.5 w-1.5 bg-orange-500 rounded-full mr-2"></div>
                <span className="text-gray-700">{equip}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Food Microbiology Laboratory */}
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <h4 className="text-lg font-bold text-aemet-navy mb-4 flex items-center">
            <Wrench className="h-5 w-5 mr-2 text-orange-600" />
            Food Microbiology Laboratory
          </h4>
          <h5 className="font-semibold text-aemet-navy mb-3">Equipment Available:</h5>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {[
              "Laminar Air Flow Chamber", "Autoclave", "UV Spectrophotometer",
              "Centrifuge", "Shaker", "Colony Counter", "Incubator",
              "Magnetic Stirrer", "Microscope"
            ].map((equip, index) => (
              <div key={index} className="flex items-center p-2 bg-gray-50 rounded text-sm">
                <div className="h-1.5 w-1.5 bg-orange-500 rounded-full mr-2"></div>
                <span className="text-gray-700">{equip}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Unit Operation Laboratory (Research) */}
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <h4 className="text-lg font-bold text-aemet-navy mb-4 flex items-center">
            <Cog className="h-5 w-5 mr-2 text-orange-600" />
            Unit Operation Laboratory
          </h4>
          <h5 className="font-semibold text-aemet-navy mb-3">Equipment Available:</h5>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {[
              "Bucket Conveyor", "Screw Conveyor", "Plate Type Heat Exchanger",
              "Open Pan Evaporator", "Fluidized Bed Dryer", "Drag Co-efficient Apparatus"
            ].map((equip, index) => (
              <div key={index} className="flex items-center p-2 bg-gray-50 rounded text-sm">
                <div className="h-1.5 w-1.5 bg-orange-500 rounded-full mr-2"></div>
                <span className="text-gray-700">{equip}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Mining Engineering specific facilities
  if (departmentId === 'mining-engineering') {
    return (
      <div className="space-y-8">
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <Building className="h-5 w-5 mr-2 text-aemet-blue" />
          Department Facilities - Labs and Unique Facilities
        </h3>

        {/* Research Facilities */}
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <h4 className="text-lg font-bold text-aemet-navy mb-4 flex items-center">
            <Wrench className="h-5 w-5 mr-2 text-aemet-blue" />
            Research Facilities
          </h4>
          <p className="text-gray-600 mb-4">Instrumentation Available for Research</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-aemet-navy text-white">
                  <th className="border border-gray-300 px-4 py-3 text-left w-16">S. No</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Instrumentation Available for Research</th>
                </tr>
              </thead>
              <tbody>
                {[
                  "Universal testing machine",
                  "Impact testing Machine",
                  "Rock strata monitoring test instrument-Tell-tales",
                  "Core drill Machine",
                  "Point load index machine",
                  "Share strength testing machine"
                ].map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="border border-gray-300 px-4 py-3 text-center font-medium">{index + 1}</td>
                    <td className="border border-gray-300 px-4 py-3">{item}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Instruments & Software */}
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <h4 className="text-lg font-bold text-aemet-navy mb-4 flex items-center">
            <Database className="h-5 w-5 mr-2 text-aemet-blue" />
            Instruments & Software available for Research
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-aemet-navy text-white">
                  <th className="border border-gray-300 px-4 py-3 text-left w-16">S. No</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Name of Software</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Justification</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-3 text-center font-medium">1</td>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Rock Mechanics instruments</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">
                    This rock mechanics instruments are used for research work purpose and industrial projects. 
                    This is used for find the slope stability, FOS, rock properties.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  // Computer Science specific facilities
  if (departmentId === 'computer-science') {
    return (
      <div className="space-y-8">
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <Building className="h-5 w-5 mr-2 text-aemet-blue" />
          Department Facilities - Labs and Unique Facilities
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Lab Group 1 */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
            <div className="flex items-start gap-4">
              <div className="bg-aemet-blue p-3 rounded-full">
                <Monitor className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-aemet-navy mb-3">Lab Facilities - Set 1</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-aemet-blue" />
                    Cyber Security Lab
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-aemet-blue" />
                    Computer Graphics Lab
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-aemet-blue" />
                    DBMS Lab
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-aemet-blue" />
                    Network Lab
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Lab Group 2 */}
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg p-6 border border-purple-200">
            <div className="flex items-start gap-4">
              <div className="bg-purple-600 p-3 rounded-full">
                <Database className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-aemet-navy mb-3">Lab Facilities - Set 2</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-purple-600" />
                    Data Science Lab
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-purple-600" />
                    Operating System Lab
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-purple-600" />
                    Data Mining Lab
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-purple-600" />
                    Web Technology Lab
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-purple-600" />
                    Cloud Computing Lab
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Lab Group 3 */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
            <div className="flex items-start gap-4">
              <div className="bg-green-600 p-3 rounded-full">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-aemet-navy mb-3">Computer Organization & Architecture</h4>
                <p className="text-gray-700">
                  Specialized lab for understanding computer hardware organization, architecture concepts, and system design fundamentals.
                </p>
              </div>
            </div>
          </div>

          {/* Lab Group 4 */}
          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg p-6 border border-amber-200">
            <div className="flex items-start gap-4">
              <div className="bg-amber-500 p-3 rounded-full">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-aemet-navy mb-3">Design of Developer Lab</h4>
                <p className="text-gray-700">
                  Modern facility equipped for software development, UI/UX design, and hands-on programming projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-aemet-navy mb-4 flex items-center">
        <Building className="h-5 w-5 mr-2 text-aemet-blue" />
        Training Facilities
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {facilities.map((facility, index) => (
          <div 
            key={index}
            className={cn(
              "p-6 rounded-lg border border-gray-200 hover:border-aemet-blue/50 transition-colors",
              "bg-white hover:bg-blue-50/50"
            )}
          >
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-aemet-blue/10 flex items-center justify-center mr-4">
                <ChevronRight className="h-5 w-5 text-aemet-blue" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-aemet-navy mb-2">{facility.name}</h4>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacilitiesSection;
