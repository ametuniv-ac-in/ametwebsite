import React from 'react';
import Layout from '@/components/Layout';
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Target, Heart, Users, Clock, MapPin } from 'lucide-react';

const PhysicalEducation = () => {
  return (
    <Layout>
      <div className="bg-gray-50 py-3 border-b">
        <div className="container mx-auto px-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Academics</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Physical Education</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      
      <div className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-aemet-navy mb-8 text-center">Physical Education & Sports</h1>
          
          <div className="mb-12 max-w-3xl mx-auto">
            <p className="text-center text-gray-600 leading-relaxed">
              AMET University believes in holistic development through sports and physical education, 
              promoting fitness, teamwork, and leadership among students while maintaining academic excellence.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Introduction */}
            <Card className="border-l-4 border-l-aemet-blue">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <Trophy className="h-8 w-8 text-aemet-blue mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-aemet-navy mb-4">Department of Physical Education</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      The Department of Physical Education at AMET University is dedicated to fostering physical fitness, 
                      mental well-being, and character development through comprehensive sports and physical education programs. 
                      We provide state-of-the-art facilities and professional coaching to help students excel in various sports.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Our programs are designed to develop not just physical skills but also leadership qualities, 
                      team spirit, discipline, and sportsmanship that serve students throughout their lives.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Objectives */}
            <div>
              <h2 className="text-2xl font-bold text-aemet-navy mb-8 flex items-center gap-2">
                <Target className="h-6 w-6 text-aemet-blue" />
                Objectives & Mission
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <Heart className="h-8 w-8 text-aemet-blue" />,
                    title: "Physical Fitness",
                    description: "Promote overall health and physical fitness through regular exercise and sports activities."
                  },
                  {
                    icon: <Users className="h-8 w-8 text-aemet-blue" />,
                    title: "Character Building",
                    description: "Develop leadership, teamwork, discipline, and sportsmanship among students."
                  },
                  {
                    icon: <Trophy className="h-8 w-8 text-aemet-blue" />,
                    title: "Competitive Excellence",
                    description: "Identify and nurture sporting talent to compete at state, national, and international levels."
                  },
                  {
                    icon: <Target className="h-8 w-8 text-aemet-blue" />,
                    title: "Stress Management",
                    description: "Provide recreational activities and stress relief through sports and physical activities."
                  }
                ].map((objective, index) => (
                  <Card key={index} className="hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-aemet-navy/10 p-3 rounded-full">
                          {objective.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-aemet-navy mb-2">{objective.title}</h3>
                          <p className="text-gray-700">{objective.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sports & Facilities */}
            <div>
              <h2 className="text-2xl font-bold text-aemet-navy mb-6">Sports & Facilities Available</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    category: "Outdoor Sports",
                    facilities: ["Football Ground", "Cricket Ground", "Basketball Court", "Volleyball Court", "Tennis Court", "Athletics Track"]
                  },
                  {
                    category: "Indoor Sports",
                    facilities: ["Table Tennis", "Badminton", "Chess", "Carrom", "Indoor Games Hall", "Gymnasium"]
                  },
                  {
                    category: "Water Sports",
                    facilities: ["Swimming Pool", "Water Polo", "Diving", "Swimming Training", "Aquatic Fitness", "Water Safety"]
                  },
                  {
                    category: "Fitness Center",
                    facilities: ["Modern Gymnasium", "Cardio Equipment", "Weight Training", "Fitness Classes", "Personal Training", "Yoga Hall"]
                  },
                  {
                    category: "Specialized Training",
                    facilities: ["Sailing Training", "Marine Sports", "Rock Climbing", "Adventure Sports", "Martial Arts", "Self Defense"]
                  },
                  {
                    category: "Support Facilities",
                    facilities: ["Sports Medicine", "Physiotherapy", "Nutritional Guidance", "Sports Psychology", "Equipment Store", "Changing Rooms"]
                  }
                ].map((category, index) => (
                  <Card key={index} className="hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-aemet-navy mb-4">{category.category}</h3>
                      <ul className="space-y-2">
                        {category.facilities.map((facility, facilityIndex) => (
                          <li key={facilityIndex} className="flex items-start gap-2 text-gray-700">
                            <div className="w-1.5 h-1.5 bg-aemet-blue rounded-full mt-2"></div>
                            <span>{facility}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Programs & Activities */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-aemet-navy mb-6">Programs & Activities</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-aemet-navy mb-4">Regular Programs</h3>
                    <ul className="space-y-2">
                      {[
                        "Daily physical training sessions",
                        "Inter-departmental sports competitions",
                        "Annual sports meet",
                        "Fitness assessment programs",
                        "Sports skill development workshops",
                        "Health and wellness seminars"
                      ].map((program, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-700">
                          <div className="w-1.5 h-1.5 bg-aemet-blue rounded-full mt-2"></div>
                          <span>{program}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-aemet-navy mb-4">Competitive Sports</h3>
                    <ul className="space-y-2">
                      {[
                        "University-level tournaments",
                        "State and national championships",
                        "Inter-university competitions",
                        "Maritime sports competitions",
                        "International sporting events",
                        "Professional sports training"
                      ].map((competition, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-700">
                          <div className="w-1.5 h-1.5 bg-aemet-blue rounded-full mt-2"></div>
                          <span>{competition}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Timings & Contact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-aemet-navy mb-4 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-aemet-blue" />
                    Facility Timings
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <div>
                      <p className="font-medium">Gymnasium & Indoor Sports</p>
                      <p>Monday - Friday: 6:00 AM - 10:00 PM</p>
                      <p>Saturday - Sunday: 7:00 AM - 9:00 PM</p>
                    </div>
                    <div>
                      <p className="font-medium">Outdoor Sports</p>
                      <p>Daily: 5:30 AM - 7:00 PM</p>
                    </div>
                    <div>
                      <p className="font-medium">Swimming Pool</p>
                      <p>Daily: 6:00 AM - 8:00 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-aemet-navy mb-4 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-aemet-blue" />
                    Contact Information
                  </h3>
                  <div className="space-y-2 text-gray-700">
                    <p><span className="font-medium">Department:</span> Physical Education</p>
                    <p><span className="font-medium">Location:</span> Sports Complex, AMET Campus</p>
                    <p><span className="font-medium">Phone:</span> +91-44-2747-4756</p>
                    <p><span className="font-medium">Email:</span> 
                      <a href="mailto:sports@amet.ac.in" className="text-aemet-blue hover:underline ml-1">sports@amet.ac.in</a>
                    </p>
                    <p><span className="font-medium">Sports Officer:</span> Available Mon-Fri, 9 AM - 5 PM</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PhysicalEducation;