
import React from 'react';
import Layout from '@/components/Layout';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import { Globe, Briefcase, Shield, BookOpen, Map, HeartPulse, GraduationCap, Calendar, Users, Mail, Phone } from 'lucide-react';

const GuidelinesInternational = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Add extra padding at the top to push content below the navbar */}
        <div className="max-w-5xl mx-auto pt-16 md:pt-20">
          <div className="flex items-center gap-3 mb-2">
            <Globe className="h-8 w-8 text-aemet-blue" />
            <h1 className="text-3xl md:text-4xl font-bold text-aemet-navy">International Student Guidelines</h1>
          </div>
          
          <Separator className="my-6" />
          
          <div className="bg-gradient-to-r from-aemet-navy/10 to-aemet-blue/10 p-6 rounded-lg mb-10 shadow-sm border border-aemet-blue/20 animate-fade-in">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="shrink-0">
                <Shield className="h-12 w-12 text-aemet-navy" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-aemet-navy mb-4">University Centre for International Relations (UCIR)</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  The UCIR department has been exclusively established to look after the welfare of International students studying at AMET. The welfare activities include but are not limited to providing familiarization about safety and security procedures, academic curriculum, national and regional culture, and AMET code of conduct.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  UCIR is entrusted with the responsibility of securing residential permits for all international students by carrying out the mandated immigration procedures. UCIR resolves international student's academic and non-academic grievances, facilitating their progress in academic and extracurricular activities.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  International student's medical requirements are swiftly met through the functional network of UCIR. Precisely, UCIR operates as a single window system to cater to the entire needs of international students from the time of their initial entry to AMET until their final exit.
                </p>
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-aemet-navy mt-12 mb-6 flex items-center gap-2">
            <Briefcase className="h-6 w-6 text-aemet-blue" /> 
            <span>The Scope of UCIR Activities</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {ucirActivities.map((activity, index) => (
              <Card key={index} className="border-aemet-blue/20 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3 h-full">
                    <activity.icon className="h-5 w-5 text-aemet-blue mt-0.5 shrink-0" />
                    <p className="text-gray-700">{activity.text}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-aemet-navy text-white p-8 rounded-lg shadow-lg animate-fade-in">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Mail className="h-5 w-5" /> 
              <span>For International Admission Enquiry</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-aemet-blue shrink-0" />
                <p><span className="opacity-80">Mobile:</span> +91 - 94447 52994</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-aemet-blue shrink-0" />
                <p><span className="opacity-80">E-Mail:</span> <a href="mailto:internationaloffice@ametuniv.ac.in" className="underline hover:text-aemet-blue transition-colors">internationaloffice@ametuniv.ac.in</a></p>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="h-5 w-5 text-aemet-blue shrink-0" />
                <p><span className="opacity-80">Skype ID:</span> admission.amet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

// Activities with appropriate icons
const ucirActivities = [
  { icon: BookOpen, text: "To facilitate admission process for foreign students" },
  { icon: Users, text: "To provide orientation and counseling to foreign students before and after admission" },
  { icon: Briefcase, text: "To maintain database of foreign students studying at AMET" },
  { icon: Shield, text: "To address the academic and nonacademic grievances of foreign students" },
  { icon: Briefcase, text: "To be the custodian of foreign students' Passport, Residential permit and testimonials" },
  { icon: Map, text: "To assist foreign students with visas, residential permits and extensions" },
  { icon: Briefcase, text: "To facilitate the issuance of Uniforms and sports suits to foreign students" },
  { icon: Users, text: "To arrange periodical cultural meets exclusively for foreign students" },
  { icon: GraduationCap, text: "To provide updates about academic progress to respective sponsors" },
  { icon: Users, text: "To liaise with Head of Departments regarding academic activity" },
  { icon: Users, text: "To liaise with wardens regarding nonacademic activity" },
  { icon: Briefcase, text: "To liaise with Department of accounts for pocket money and funds" },
  { icon: Briefcase, text: "To liaise with catering officer for food aspects" },
  { icon: Users, text: "To liaise with Department of Physical Education for sports activities" },
  { icon: Calendar, text: "To coordinate with sponsors regarding arrival and departure flight schedules" },
  { icon: BookOpen, text: "To facilitate issuance of study material to foreign students" },
  { icon: Briefcase, text: "To facilitate issuance of Identity card to foreign students" },
  { icon: Briefcase, text: "To facilitate issuance of certificates (Bona fide, Residential permit, etc.)" },
  { icon: Users, text: "To be present as a member in committees convened to inquire foreign students" },
  { icon: HeartPulse, text: "To arrange health insurance for foreign students" },
  { icon: BookOpen, text: "To facilitate training and development of English language skills" },
  { icon: Briefcase, text: "To facilitate opening and closing of Bank accounts" },
  { icon: HeartPulse, text: "To facilitate medical checkup and treatment" },
  { icon: Briefcase, text: "To maintain the annual strength of foreign students" },
  { icon: Map, text: "To facilitate the availability of university transport" },
  { icon: Briefcase, text: "To provide course and fees information to prospective students" },
];

export default GuidelinesInternational;
