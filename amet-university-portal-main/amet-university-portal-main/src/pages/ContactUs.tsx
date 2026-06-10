
import React from 'react';
import Layout from '@/components/Layout';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  User, 
  Building, 
  MessageCircle,
  Printer,
  GraduationCap
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const ContactUs = () => {
  return (
    <Layout title="Contact Us | AMET University">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="max-w-5xl mx-auto pt-28 md:pt-32">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-aemet-navy/10 to-aemet-blue/10 rounded-lg p-8 mb-12 shadow-md">
            <h1 className="text-3xl md:text-4xl font-bold text-aemet-navy mb-4">Contact Us</h1>
            <p className="text-gray-700 leading-relaxed">
              Get in touch with AMET University. We're here to answer your questions and provide assistance.
            </p>
          </div>

          {/* Main Campus */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-aemet-navy mb-6 flex items-center gap-2">
              <Building className="h-6 w-6 text-aemet-blue" />
              <span>Main Campus</span>
            </h2>

            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-100 p-6 flex items-center justify-center">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.293247310053!2d80.23929627466866!3d12.883953987389706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525b3604ca87fb%3A0x47a56ac2ee3f50c1!2sAMET%20University!5e0!3m2!1sen!2sin!4v1712366486879!5m2!1sen!2sin" 
                    width="100%" 
                    height="300" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    aria-label="AMET University Location Map"
                    title="AMET University Location"
                  ></iframe>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="font-medium text-lg text-aemet-navy flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-aemet-blue flex-shrink-0" />
                      <span>Address</span>
                    </div>
                    <p className="text-gray-700 pl-7">
                      Academy of Maritime Education and Training (AMET)<br />
                      135, East Coast Road<br />
                      Kanathur - 603 112<br />
                      Tamil Nadu, India
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="font-medium text-lg text-aemet-navy flex items-center gap-2">
                      <Phone className="h-5 w-5 text-aemet-blue flex-shrink-0" />
                      <span>Telephone</span>
                    </div>
                    <p className="text-gray-700 pl-7">
                      +91 - 44 - 2744 4625 / 627 / 628
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="font-medium text-lg text-aemet-navy flex items-center gap-2">
                      <Printer className="h-5 w-5 text-aemet-blue flex-shrink-0" />
                      <span>Fax</span>
                    </div>
                    <p className="text-gray-700 pl-7">
                      +91 - 44 - 2747 2804 / 2747 2904
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="font-medium text-lg text-aemet-navy flex items-center gap-2">
                      <Mail className="h-5 w-5 text-aemet-blue flex-shrink-0" />
                      <span>Email</span>
                    </div>
                    <p className="text-gray-700 pl-7">
                      <a href="mailto:office@ametuniv.ac.in" className="text-aemet-blue hover:underline">
                        office@ametuniv.ac.in
                      </a>
                    </p>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>

          {/* Key Officials */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-aemet-navy mb-6 flex items-center gap-2">
              <User className="h-6 w-6 text-aemet-blue" />
              <span>Key Officials</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Vice-Chancellor */}
              <Card className="border-aemet-blue/20 hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-aemet-navy/5 p-2.5 rounded-full">
                        <GraduationCap className="h-6 w-6 text-aemet-blue" />
                      </div>
                      <h3 className="font-semibold text-lg text-aemet-navy">Vice-Chancellor</h3>
                    </div>
                    
                    <div className="pl-12 space-y-2">
                      <p className="font-medium text-gray-800">
                        Prof. Dr. V. Rajendran, M.Tech, Ph.D, D.Sc
                      </p>
                      
                      <div className="flex items-start gap-2 text-gray-700">
                        <Phone className="h-4 w-4 text-aemet-blue mt-1 flex-shrink-0" />
                        <span>+91 - 44 - 2744 4629 Extn. No: 501</span>
                      </div>
                      
                      <div className="flex items-start gap-2 text-gray-700">
                        <Mail className="h-4 w-4 text-aemet-blue mt-1 flex-shrink-0" />
                        <a href="mailto:vc@ametuniv.ac.in" className="text-aemet-blue hover:underline">
                          vc@ametuniv.ac.in
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Registrar */}
              <Card className="border-aemet-blue/20 hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-aemet-navy/5 p-2.5 rounded-full">
                        <User className="h-6 w-6 text-aemet-blue" />
                      </div>
                      <h3 className="font-semibold text-lg text-aemet-navy">Registrar</h3>
                    </div>
                    
                    <div className="pl-12 space-y-2">
                      <p className="font-medium text-gray-800">
                        Dr. V. Sangeetha Albin
                      </p>
                      
                      <div className="flex items-start gap-2 text-gray-700">
                        <Phone className="h-4 w-4 text-aemet-blue mt-1 flex-shrink-0" />
                        <span>Extn. No: 107</span>
                      </div>
                      
                      <div className="flex items-start gap-2 text-gray-700">
                        <Printer className="h-4 w-4 text-aemet-blue mt-1 flex-shrink-0" />
                        <span>2747 2804</span>
                      </div>
                      
                      <div className="flex items-start gap-2 text-gray-700">
                        <Mail className="h-4 w-4 text-aemet-blue mt-1 flex-shrink-0" />
                        <a href="mailto:registrar@ametuniv.ac.in" className="text-aemet-blue hover:underline">
                          registrar@ametuniv.ac.in
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Branch Offices */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-aemet-navy mb-6 flex items-center gap-2">
              <Building className="h-6 w-6 text-aemet-blue" />
              <span>Branch Offices</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* City Office */}
              <Card className="border-aemet-blue/20 hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-aemet-navy/5 p-2.5 rounded-full">
                        <Building className="h-6 w-6 text-aemet-blue" />
                      </div>
                      <h3 className="font-semibold text-lg text-aemet-navy">City Office - Chennai</h3>
                    </div>
                    
                    <div className="space-y-3 pl-12">
                      <p className="text-gray-700">
                        5107, H2, II Avenue, Anna Nagar<br />
                        Chennai - 600 040
                      </p>
                      
                      <div className="flex items-start gap-2 text-gray-700">
                        <Phone className="h-4 w-4 text-aemet-blue mt-1 flex-shrink-0" />
                        <div>
                          <div>+91 - 44 - 2616 1180 / 2616 1026 / 2616 1438</div>
                          <div>Mobile: 0 87545 99801</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Cochin Office */}
              <Card className="border-aemet-blue/20 hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-aemet-navy/5 p-2.5 rounded-full">
                        <Building className="h-6 w-6 text-aemet-blue" />
                      </div>
                      <h3 className="font-semibold text-lg text-aemet-navy">Cochin Office</h3>
                    </div>
                    
                    <div className="space-y-3 pl-12">
                      <p className="text-gray-700">
                        3rd Floor, Spacez Castle Rocks Business Center<br />
                        Near South Overbridge<br />
                        Manorama Junction<br />
                        Cochin - 682 016, Kerala
                      </p>
                      
                      <div className="flex items-start gap-2 text-gray-700">
                        <Phone className="h-4 w-4 text-aemet-blue mt-1 flex-shrink-0" />
                        <span>Mobile: 0 99620 80324</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Admissions Contact */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-aemet-navy mb-6 flex items-center gap-2">
              <MessageCircle className="h-6 w-6 text-aemet-blue" />
              <span>Admission Enquiries</span>
            </h2>
            
            <Card className="border-aemet-blue/20">
              <CardContent className="p-6">
                <div className="flex flex-col space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-aemet-navy/5 p-2.5 rounded-full">
                      <Phone className="h-6 w-6 text-aemet-blue" />
                    </div>
                    <h3 className="font-semibold text-lg text-aemet-navy">Toll Free Number: 1800 108 3030</h3>
                  </div>
                  
                  <div className="pl-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">Hindi / English</span>
                            <span className="text-aemet-blue">0 87545 99801</span>
                          </div>
                          <Separator />
                        </div>
                        
                        <div className="space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">English / Tamil / Telugu</span>
                            <span className="text-aemet-blue">0 93443 91418</span>
                          </div>
                          <Separator />
                        </div>
                        
                        <div className="space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">Tamil / English</span>
                            <span className="text-aemet-blue">0 99416 46119</span>
                          </div>
                          <Separator />
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">English / Tamil / Kannada</span>
                            <span className="text-aemet-blue">0 76677 99444</span>
                          </div>
                          <Separator />
                        </div>
                        
                        <div className="space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">Malayalam / English</span>
                            <span className="text-aemet-blue">0 99620 80324</span>
                          </div>
                          <Separator />
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 space-y-4">
                      <div className="flex items-start gap-3">
                        <Mail className="h-5 w-5 text-aemet-blue mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium">For All Indian Admission Enquiry</p>
                          <a href="mailto:admission@ametuniv.ac.in" className="text-aemet-blue hover:underline">
                            admission@ametuniv.ac.in
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Globe className="h-5 w-5 text-aemet-blue mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium">For All International Admission Enquiry</p>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                            <a href="mailto:internationaloffice@ametuniv.ac.in" className="text-aemet-blue hover:underline">
                              internationaloffice@ametuniv.ac.in
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
