import React from 'react';
import { Phone, Award, Globe, BookOpen, Users } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface VCProfileHeaderProps {
  name: string;
  title: string;
  phone: string;
  imageSrc: string;
  email?: string;
  website?: string;
  showBadges?: boolean;
  showStats?: boolean;
}

const VCProfileHeader: React.FC<VCProfileHeaderProps> = ({ 
  name, 
  title, 
  phone, 
  imageSrc,
  email,
  website,
  showBadges = false,
  showStats = false
}) => {
  return (
    <div className="relative">
      {/* Hero Banner */}
      <div className="absolute inset-0 h-48 bg-gradient-to-r from-aemet-navy via-aemet-blue to-purple-600 rounded-t-2xl"></div>
      <div className="absolute inset-0 h-48 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20 rounded-t-2xl"></div>
      
      <Card className="relative overflow-visible border-none shadow-2xl">
        {/* Distinguished Badge */}
        {showBadges && (
          <div className="absolute top-4 right-4 z-10 flex gap-2 flex-wrap justify-end">
            <Badge className="bg-gradient-to-r from-amber-500 to-yellow-400 text-white border-none shadow-lg">
              <Award className="h-3 w-3 mr-1" />
              Top 2% World Scientist
            </Badge>
            <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-none shadow-lg">
              Vice Chancellor
            </Badge>
          </div>
        )}

        <div className="pt-32 pb-8 px-6 md:px-10">
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-end">
            {/* Profile Image with Special Border */}
            <div className="relative -mt-20">
              <Avatar className="w-56 h-56 rounded-2xl shadow-2xl ring-4 ring-white">
                <AvatarImage src={imageSrc} alt={name} className="object-cover object-top" />
                <AvatarFallback className="text-4xl bg-aemet-navy text-white">
                  {name.charAt(0)}
                </AvatarFallback>
              </Avatar>
            </div>

            {/* Info Section */}
            <div className="flex-1 space-y-4">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-aemet-navy via-aemet-blue to-purple-600 bg-clip-text text-transparent mb-2">
                  {name}
                </h1>
                <h2 className="text-2xl font-semibold text-aemet-blue mb-4">{title}</h2>
              </div>

              <div className="flex flex-wrap gap-4 text-gray-600">
                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg">
                  <Phone className="h-4 w-4 text-aemet-blue" />
                  <span className="text-sm font-medium">{phone}</span>
                </div>
                {email && (
                  <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg">
                    <Globe className="h-4 w-4 text-aemet-blue" />
                    <span className="text-sm font-medium">{email}</span>
                  </div>
                )}
                {website && (
                  <a 
                    href={website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-aemet-blue to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-shadow"
                  >
                    <Globe className="h-4 w-4" />
                    <span className="text-sm font-medium">Visit Website</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Key Statistics */}
          {showStats && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-aemet-navy mb-1">30+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-aemet-blue mb-1">265+</div>
                <div className="text-sm text-gray-600">Research Papers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-1">5,573</div>
                <div className="text-sm text-gray-600">Citations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-1">40</div>
                <div className="text-sm text-gray-600">H-Index</div>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default VCProfileHeader;
