
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
import { Trophy } from 'lucide-react';
import maritimeExcellence2025 from '@/assets/awards/maritime-excellence-2025.jpeg';

const AwardCard = ({ title, description, image }: { title: string; description: string; image: string }) => {
  return (
    <Card className="overflow-hidden h-full bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-2">
      <div className="flex flex-col h-full">
        <div className="aspect-video overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
          />
        </div>
        <div className="flex-grow">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <Trophy className="h-5 w-5 text-amber-500" />
              <h3 className="text-xl font-bold text-aemet-navy">{title}</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">{description}</p>
          </CardContent>
        </div>
      </div>
    </Card>
  );
};

const Awards = () => {
  const awards = [
    {
      title: "Maritime Excellence Achiever's Award 2025",
      description: "Winner of Maritime Excellence Achiever's Award for \"Maritime Education and Skill Development\" at India Maritime Week 2025 by Shri. Sarbananda Sonowal, Hon'ble Minister of Ports, Shipping and Waterways, along with Shri. Shantanu Thakur, Minister of State.",
      image: maritimeExcellence2025
    },
    {
      title: "Maritime Excellence Achievers Award 2023",
      description: "Our Chancellor Dr.J.Ramachandran received the \"Maritime Excellence Achievers Award 2023\" from Shri T.K.Ramachandran, Secretary, Ministry of Ports, Shipping and Waterways at the Global Maritime India Summit, Mumbai",
      image: "/lovable-uploads/391356c9-9856-4018-87a5-2533cb36c3a8.png"
    },
    {
      title: "Our President Dr. J. Ramachandran received Excellence Award",
      description: "Our President Dr. J. Ramachandran received Excellence Award for his outstanding contributions to maritime education and training",
      image: "/lovable-uploads/f119c9ef-0c81-4b40-8cd6-a8e706bbb1d6.png"
    },
    {
      title: "Lifetime Achievement Award 2017",
      description: "Our Chancellor Dr J Ramachandran had received \"Lifetime Achievement Award 2017\" from Shri Nitin Gadkari",
      image: "/lovable-uploads/012e7a5d-7104-4614-bd61-dcbc1852fd08.png"
    },
    {
      title: "LLOYD'S LIST Middle East and Indian Subcontinent Awards 2013",
      description: "LLOYD'S LIST Middle East and Indian Subcontinent Awards 2013 in Maritime Education",
      image: "/lovable-uploads/09b67956-da55-4cc1-aea9-82e4a9626ea9.png"
    },
    {
      title: "India Shipping Summit Awards",
      description: "Our President Dr. J. Ramachandran received Award",
      image: "/lovable-uploads/6b887f29-d8c3-42cc-87fa-0da52213bdfd.png"
    },
    {
      title: "Edupreneur 2012 awards",
      description: "Edupreneur 2012 awards",
      image: "/lovable-uploads/89af634a-36f3-4b2d-bf92-fd26ea6898fd.png"
    },
    {
      title: "Sailor Today Award",
      description: "Academy of Maritime Education and Training (AMET) Wins Sailor Today Award",
      image: "/lovable-uploads/e68e885f-14bb-43c6-829d-ca195b6a2814.png"
    },
    {
      title: "NMD Award of Excellence for Life Time Exceptional Distinguished Achievement - 2008",
      description: "Life Time Achievement Award - NMD Award of Excellence for Life Time Exceptional Distinguished Achievement - 2008",
      image: "/lovable-uploads/0936fe54-1740-4356-b1bd-e0958cf66ca2.png"
    },
    {
      title: "Doctor of Education",
      description: "Dr. Janakiraman Ramachandran – Doctor of Education",
      image: "/lovable-uploads/f22c9e1c-f94f-4d0d-98ea-4cc8a8c5d5cc.png"
    },
    {
      title: "Best Maritime Academy Award",
      description: "Academy of Maritime Education and Training (AMET) Honoured With Best Maritime Academy Award",
      image: "/lovable-uploads/9dd54b97-6099-4dcd-b00a-f0699e5b036b.png"
    },
    {
      title: "Certificate of Excellence",
      description: "Certificate of Excellence",
      image: "/lovable-uploads/b1ba695b-5f36-4f4a-a4f2-dd098b9906bb.png"
    },
    {
      title: "The Lloyds List Middle East & Indian Subcontinent - Training Award For 2007",
      description: "The Lloyds List Middle East & Indian Subcontinent - Training Award For 2007",
      image: "/lovable-uploads/42c5dc37-1d38-4478-875e-2978c89d88c9.png"
    }
  ];

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
                <BreadcrumbLink href="#">About Us</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Awards</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      
      <div className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-aemet-navy mb-8 text-center">Awards & Recognition</h1>
          
          <div className="mb-8 max-w-3xl mx-auto">
            <p className="text-center text-gray-600">
              Over the years, AMET University has been recognized for its excellence in maritime education and training.
              Here are some of the prestigious awards and recognitions received by our institution and leadership.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {awards.map((award, index) => (
              <AwardCard
                key={index}
                title={award.title}
                description={award.description}
                image={award.image}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Awards;
