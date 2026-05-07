
import React from 'react';
import DSWLayout from '@/components/dsw/DSWLayout';
import { User, Target, Shield, Award, Users, Heart, BookOpen, Globe, Star, Home } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { YoutubeEmbed } from '@/components/gallery/videos/YoutubeEmbed';

const DSWOverview = () => {
  return (
    <DSWLayout title="Directorate of Students Welfare">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-aemet-navy/10 to-aemet-blue/10 rounded-lg p-8 mb-12 shadow-md">
        <h1 className="text-3xl md:text-4xl font-bold text-aemet-navy mb-4">Directorate of Students Welfare</h1>
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="md:w-2/3">
            <p className="text-gray-700 leading-relaxed">
              Directorate of Students Welfare (DSW) plays a vital role among the students' community to provide the overall benefit in the form of Physical, Mental wellbeing, Personality, and Leadership quality.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <div className="bg-white p-5 rounded-full shadow-lg">
              <Heart className="h-20 w-20 text-aemet-blue" />
            </div>
          </div>
        </div>
      </div>

      {/* Campus Life Video Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-aemet-navy mb-6 flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-aemet-blue" />
          <span>Campus Life at AMET University</span>
        </h2>
        <YoutubeEmbed 
          videoId="h7vME9Xr3Z0" 
          title="AMET University Campus Life" 
          description="Experience the vibrant student life and opportunities available at AMET University."
        />
      </div>

      {/* Student Clubs & Organizations Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-aemet-navy mb-6 flex items-center gap-2">
          <Users className="h-6 w-6 text-aemet-blue" />
          <span>Student Clubs & Organizations</span>
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-aemet-blue/20">
          <img 
            src="/lovable-uploads/6e0d75a2-363e-41bc-ac93-4f89431d5dbb.png" 
            alt="AMET University Student Clubs and Organizations" 
            className="w-full h-auto object-contain rounded-lg mb-6"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "Unnat Bharat Abhiyan", icon: <Globe className="h-5 w-5 text-yellow-500" /> },
              { name: "Swachh Bharat", icon: <Globe className="h-5 w-5 text-green-600" /> },
              { name: "NCC", icon: <Shield className="h-5 w-5 text-blue-600" /> },
              { name: "NSS", icon: <Users className="h-5 w-5 text-orange-600" /> },
              { name: "AMETUNISPO", icon: <Star className="h-5 w-5 text-blue-500" /> },
              { name: "Student Council", icon: <Users className="h-5 w-5 text-red-600" /> },
              { name: "Cultural Club", icon: <Heart className="h-5 w-5 text-aemet-blue" /> },
              { name: "Halls of Residence", icon: <Home className="h-5 w-5 text-purple-600" /> }
            ].map((club, idx) => (
              <Card key={idx} className="hover:shadow-md transition-all duration-300 hover:bg-gray-50">
                <CardContent className="flex items-center gap-3 p-4">
                  <div className="bg-aemet-navy/5 p-2 rounded-full">
                    {club.icon}
                  </div>
                  <span className="text-sm font-medium text-aemet-navy">{club.name}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content with Cards Layout */}
      <div className="space-y-12 animate-fade-in">
        {/* Vision & Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-aemet-blue/20 hover:shadow-md transition-all duration-300">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-aemet-blue/20 to-aemet-blue/5 p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-aemet-navy/5 p-3 rounded-full shrink-0">
                    <Target className="h-10 w-10 text-aemet-blue" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-aemet-navy mb-4">Vision</h2>
                    <p className="text-gray-700 leading-relaxed">
                      To be a Centre part of Excellence to Provide Student's Welfare Services.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-aemet-blue/20 hover:shadow-md transition-all duration-300">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-aemet-blue/20 to-aemet-blue/5 p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-aemet-navy/5 p-3 rounded-full shrink-0">
                    <BookOpen className="h-10 w-10 text-aemet-blue" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-aemet-navy mb-4">Mission</h2>
                    <p className="text-gray-700 leading-relaxed">
                      To be resolute in the arrangement of all cadets/ students welfare services to the understudies to work with smooth running of the University scholastic Programs.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Objectives Section */}
        <div>
          <h2 className="text-2xl font-semibold text-aemet-navy mb-6 flex items-center gap-2">
            <Target className="h-6 w-6 text-aemet-blue" />
            <span>Objectives</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: <Award className="h-10 w-10 text-aemet-blue" />, text: "To shape the students into social assets, making them complete citizens alongside their academic accomplishments." },
              { icon: <Heart className="h-10 w-10 text-aemet-blue" />, text: "To provide resourceful provision of all welfare services to the students." },
              { icon: <BookOpen className="h-10 w-10 text-aemet-blue" />, text: "To showcase their talents to enrich campus life besides pursuing their academic targets." },
              { icon: <Shield className="h-10 w-10 text-aemet-blue" />, text: "To make each student safe in the campus." },
              { icon: <Users className="h-10 w-10 text-aemet-blue" />, text: "To create an atmosphere for harmony and co-operation amongst the Cadets." },
              { icon: <User className="h-10 w-10 text-aemet-blue" />, text: "To provide the Cadets a peaceful and pleasant environment to enable them to excel in their studies and personality development." }
            ].map((item, idx) => (
              <Card key={idx} className="hover:shadow-md transition-all duration-300 border-aemet-blue/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="shrink-0 bg-aemet-navy/5 p-3 rounded-full">
                      {item.icon}
                    </div>
                    <p className="text-gray-700">{item.text}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Roles and Responsibilities Section */}
        <div>
          <h2 className="text-2xl font-semibold text-aemet-navy mb-6 flex items-center gap-2">
            <User className="h-6 w-6 text-aemet-blue" />
            <span>Roles and Responsibilities of the Dean - Students Welfare</span>
          </h2>
          
          <div className="bg-white rounded-lg shadow-md p-6 border border-aemet-blue/20">
            <div className="grid grid-cols-1 gap-4">
              {[
                "To nominate student representatives for various Cells, Centres and Committees of the University in consultation with the higher Authorities.",
                "To make the students to participate in an effective way in the Student Council and also the DSW gives an advice when required."
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <div className="bg-aemet-blue text-white rounded-full w-6 h-6 flex-shrink-0 flex items-center justify-center mt-0.5">
                    {idx + 1}
                  </div>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DSWLayout>
  );
};

export default DSWOverview;
