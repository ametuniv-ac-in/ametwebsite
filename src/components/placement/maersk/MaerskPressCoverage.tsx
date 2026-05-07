
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const MaerskPressCoverage = () => {
  return (
    <Card className="overflow-hidden">
      <div className="bg-aemet-navy text-white p-4">
        <h2 className="text-xl font-semibold">Press Coverage</h2>
      </div>
      
      <div className="p-4">
        <Tabs defaultValue="section1" className="w-full">
          <TabsList className="w-full grid grid-cols-2 mb-6">
            <TabsTrigger value="section1" className="text-base">Tamil News Coverage</TabsTrigger>
            <TabsTrigger value="section2" className="text-base">English Publications</TabsTrigger>
          </TabsList>
          
          {/* Tamil Press Coverage */}
          <TabsContent value="section1" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* News Article 1 */}
              <Card>
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src="/lovable-uploads/0d75fece-9cc0-46c3-b68c-a75ee37108c6.png" 
                        alt="Maalai Murasu newspaper coverage" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-4 text-white">
                        <h3 className="font-semibold text-sm">மாலை முரசு</h3>
                        <p className="text-xs">கிழக்கு கடற்கரை சாலையில் அமெட் பல்கலைக்கழக அறிவுப் பூங்கா திறப்பு</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <Button variant="outline" size="sm" className="w-full" onClick={() => window.open("/lovable-uploads/0d75fece-9cc0-46c3-b68c-a75ee37108c6.png", "_blank")}>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Full Article
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* News Article 2 */}
              <Card>
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src="/lovable-uploads/21cdced7-0aa1-43bd-8d9b-ce71e2d4ed98.png" 
                        alt="News Article with ceremony photo" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-4 text-white">
                        <h3 className="font-semibold text-sm">அமெட் அறிவு பூங்கா-மெர்ஸ்க் தனிச்சிறப்பு மையம் திறப்பு</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <Button variant="outline" size="sm" className="w-full" onClick={() => window.open("/lovable-uploads/21cdced7-0aa1-43bd-8d9b-ce71e2d4ed98.png", "_blank")}>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Full Article
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* News Article 3 */}
              <Card>
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src="/lovable-uploads/f79dc283-a2f3-4284-9f9b-58623d07332b.png" 
                        alt="Dinamani News" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-4 text-white">
                        <h3 className="font-semibold text-sm">தினமணி கதம்பம்</h3>
                        <p className="text-xs">அமெட் அறிவுப் பூங்காவில் ஏ.பி. மொல்லர் - மெர்ஸ்க் தனிச்சிறப்பு மையம் திறப்பு</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <Button variant="outline" size="sm" className="w-full" onClick={() => window.open("/lovable-uploads/f79dc283-a2f3-4284-9f9b-58623d07332b.png", "_blank")}>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Full Article
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* News Article 4 */}
              <Card>
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src="/lovable-uploads/3b0c9d2c-533b-40ce-aa75-a9fa5eee9920.png" 
                        alt="News with inauguration photo" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-4 text-white">
                        <h3 className="font-semibold text-sm">தென்பட்டினம் கிராமத்தில் அமெட் அறிவுப் பூங்கா, தனிச்சிறப்பு மையம்</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <Button variant="outline" size="sm" className="w-full" onClick={() => window.open("/lovable-uploads/3b0c9d2c-533b-40ce-aa75-a9fa5eee9920.png", "_blank")}>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Full Article
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          {/* English Press Coverage */}
          <TabsContent value="section2" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* The Hindu Article */}
              <Card>
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src="/lovable-uploads/91c631ca-77dd-4be6-9b4b-eec7a2136eee.png" 
                        alt="The Hindu news article" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-4 text-white">
                        <h3 className="font-semibold text-sm">The Hindu</h3>
                        <p className="text-xs">AMET opens campus at Thenpattinam</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <Button variant="outline" size="sm" className="w-full" onClick={() => window.open("/lovable-uploads/91c631ca-77dd-4be6-9b4b-eec7a2136eee.png", "_blank")}>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Full Article
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Inauguration Photos */}
              <Card>
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src="/lovable-uploads/0f1f8c18-e19b-41cc-b521-e5e6f9d70a57.png" 
                        alt="Inauguration news with crowd" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-4 text-white">
                        <h3 className="font-semibold text-sm">Inauguration Ceremony</h3>
                        <p className="text-xs">மெர்ஸ்க் தனிச்சிறப்பு மையம் துவக்க விழா</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <Button variant="outline" size="sm" className="w-full" onClick={() => window.open("/lovable-uploads/0f1f8c18-e19b-41cc-b521-e5e6f9d70a57.png", "_blank")}>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Full Image
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Plaque Ceremony */}
              <Card>
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src="/lovable-uploads/b4be1565-a5a6-4cbe-8dcc-6367c7003a68.png" 
                        alt="Inauguration plaque ceremony" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-4 text-white">
                        <h3 className="font-semibold text-sm">Official Inauguration</h3>
                        <p className="text-xs">Mr. Niels H Bruss, VP-Head of Marine People and Culture, A.P. Moller – Maersk</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <Button variant="outline" size="sm" className="w-full" onClick={() => window.open("/lovable-uploads/b4be1565-a5a6-4cbe-8dcc-6367c7003a68.png", "_blank")}>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Full Image
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Official Delegation */}
              <Card>
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src="/lovable-uploads/005ab4c1-985b-4a51-b6a7-add1a29bafb2.png" 
                        alt="Detailed inauguration photo with caption" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-4 text-white">
                        <h3 className="font-semibold text-sm">Official Delegation</h3>
                        <p className="text-xs">AMET and Maersk leadership at the inauguration ceremony</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <Button variant="outline" size="sm" className="w-full" onClick={() => window.open("/lovable-uploads/005ab4c1-985b-4a51-b6a7-add1a29bafb2.png", "_blank")}>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Full Image
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Card>
  );
};

export default MaerskPressCoverage;
