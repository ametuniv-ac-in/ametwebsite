
import React from 'react';
import GalleryLayout from '@/components/gallery/GalleryLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { YoutubeEmbed } from '@/components/gallery/videos/YoutubeEmbed';

const Videos = () => {
  return (
    <GalleryLayout
      title="Video Gallery" 
      description="Explore AMET University's infrastructure, facilities, and research labs through our video collection."
    >
      <Tabs defaultValue="facilities" className="w-full">
        <TabsList className="w-full max-w-4xl mb-8 flex flex-wrap justify-start">
          <TabsTrigger value="facilities">Campus Facilities</TabsTrigger>
          <TabsTrigger value="research">Research Labs</TabsTrigger>
          <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
        </TabsList>
        
        <TabsContent value="facilities" className="space-y-6">
          <h2 className="text-2xl font-semibold text-aemet-navy mb-4">Campus Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <YoutubeEmbed 
              title="Library" 
              videoId="pVyRC63j8MA" 
            />
            <YoutubeEmbed 
              title="Gymnasium" 
              videoId="eC04fUNJUWA" 
            />
            <YoutubeEmbed 
              title="Health Care" 
              videoId="hPFF84YvrjU" 
            />
            <YoutubeEmbed 
              title="ATM" 
              videoId="B22WkyrsydU" 
            />
            <YoutubeEmbed 
              title="Lifts" 
              videoId="MLnoj5D2PVg" 
            />
            <YoutubeEmbed 
              title="Reprographic" 
              videoId="BxYYFUt6foo" 
            />
            <YoutubeEmbed 
              title="Stationary" 
              videoId="pGifI3Q7rcU" 
            />
            <YoutubeEmbed 
              title="Saloon" 
              videoId="mURpTKcfIKQ" 
            />
            <YoutubeEmbed 
              title="Wifi" 
              videoId="1bwOI84ntCE" 
            />
            <YoutubeEmbed 
              title="Media Centre" 
              videoId="wPMEee_tEBo" 
              description="Sponsored by AMET Alumni Association" 
            />
            <YoutubeEmbed 
              title="Educational Materials Resource Development Centre" 
              videoId="p7OjrpxXr-k" 
              description="EMRDC" 
            />
          </div>
        </TabsContent>
        
        <TabsContent value="research" className="space-y-6">
          <h2 className="text-2xl font-semibold text-aemet-navy mb-4">Research Laboratories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <YoutubeEmbed 
              title="CMIS" 
              videoId="dt6uLaWwM5Q" 
            />
            <YoutubeEmbed 
              title="Energy and Biophotonics" 
              videoId="RltDEV2CKbI" 
            />
            <YoutubeEmbed 
              title="Marine Bioprospecting" 
              videoId="IPt4M3fvFGo" 
            />
            <YoutubeEmbed 
              title="Marine Science" 
              videoId="GpMAs67S0u8" 
            />
            <YoutubeEmbed 
              title="Nanophotonics" 
              videoId="iX29RGp8fco" 
            />
            <YoutubeEmbed 
              title="NDE" 
              videoId="jEvx4bitDaQ" 
            />
            <YoutubeEmbed 
              title="Optics and Photonics" 
              videoId="ap6c9injdR0" 
            />
            <YoutubeEmbed 
              title="Opto-Electronics" 
              videoId="hmTTrdLKi7E" 
            />
            <YoutubeEmbed 
              title="Research / Statistical Databases" 
              videoId="OnbwMfUb2yc" 
            />
          </div>
        </TabsContent>
        
        <TabsContent value="infrastructure" className="space-y-6">
          <h2 className="text-2xl font-semibold text-aemet-navy mb-4">Campus Infrastructure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <YoutubeEmbed 
              title="Barrier Free Environment" 
              videoId="SNykxIlgK5k" 
            />
            <YoutubeEmbed 
              title="Business Lab" 
              videoId="NQdTjVbNns4" 
            />
            <YoutubeEmbed 
              title="Green Campus Initiatives" 
              videoId="YRy-jMHhMLo" 
            />
            <YoutubeEmbed 
              title="Green House" 
              videoId="LkzPHRP5Z04" 
            />
            <YoutubeEmbed 
              title="Marine Museum" 
              videoId="WIrGoxGJVeQ" 
            />
            <YoutubeEmbed 
              title="Water Conservation Facilities" 
              videoId="-8FQHgxHn0g" 
            />
            <YoutubeEmbed 
              title="RO Plant" 
              videoId="eC6UBhEPF4o" 
            />
            <YoutubeEmbed 
              title="STP" 
              videoId="ZV_Hk_jC7I8" 
            />
          </div>
        </TabsContent>
      </Tabs>
    </GalleryLayout>
  );
};

export default Videos;
