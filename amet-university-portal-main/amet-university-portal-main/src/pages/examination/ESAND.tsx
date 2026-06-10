
import React from 'react';
import ExaminationLayout from '@/components/examination/ExaminationLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileCheck, Shield, Globe, User, Phone, Mail, Building2, ExternalLink } from 'lucide-react';

const ESAND = () => {
  return (
    <ExaminationLayout title="Certificate Verification">
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <div className="flex justify-center mb-4">
            <div className="bg-primary/10 p-4 rounded-full">
              <Shield className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-foreground">Certificate Verification</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Secure and instant verification of AMET University certificates through our digital platforms
          </p>
        </div>

        {/* Verification Options */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* e-SANAD Card */}
          <Card className="relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full"></div>
            <CardHeader className="relative">
              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">e-SANAD</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                National Academic Depository for secure digital certificate verification
              </p>
              <div className="bg-accent/50 p-4 rounded-lg">
                <p className="text-sm font-medium mb-2">Features:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Government authorized platform</li>
                  <li>• Instant verification</li>
                  <li>• Secure digital certificates</li>
                </ul>
              </div>
              <Button className="w-full" size="lg">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit e-Sanad Portal
              </Button>
            </CardContent>
          </Card>

          {/* Direct Verify Card */}
          <Card className="relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/10 to-transparent rounded-bl-full"></div>
            <CardHeader className="relative">
              <div className="flex items-center space-x-3">
                <div className="bg-secondary/10 p-3 rounded-lg">
                  <FileCheck className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-2xl">Direct Verify</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                AMET University's dedicated online certificate verification system for employers and organizations
              </p>
              <div className="bg-accent/50 p-4 rounded-lg">
                <p className="text-sm font-medium mb-2">Who can use:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Non-Government Organizations</li>
                  <li>• Companies and agencies</li>
                  <li>• Students and graduates</li>
                </ul>
              </div>
              <Button variant="secondary" className="w-full" size="lg">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit Direct-Verify
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <Card className="bg-gradient-to-r from-accent/20 to-secondary/10 border-accent">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="bg-accent p-3 rounded-lg">
                <User className="h-6 w-6 text-accent-foreground" />
              </div>
              <CardTitle className="text-2xl">Need Assistance?</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Nodal Officer - e-SANAD</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <User className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Dr. A. Rajesh Kanna</p>
                      <p className="text-sm text-muted-foreground">Nodal Officer - e-SANAD</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Building2 className="h-5 w-5 text-primary" />
                    <p className="text-sm">AMET University</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Contact Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">044 - 2744 4628 Extn: 132</p>
                      <p className="text-xs text-muted-foreground">Office Hours: 9 AM - 5 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">coe@ametuniv.ac.in</p>
                      <p className="text-xs text-muted-foreground">Email Support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Information Banner */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
          <div className="flex items-start space-x-4">
            <Shield className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground mb-2">Verification Authenticity</h3>
              <p className="text-sm text-muted-foreground">
                All certificates issued by AMET University can be verified through the official channels listed above. 
                For maximum security, we recommend using the e-SANAD platform for government-authorized verification.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ExaminationLayout>
  );
};

export default ESAND;
