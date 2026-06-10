
import React from 'react';
import { Phone } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';

interface ProfileHeaderProps {
  name: string;
  title: string;
  phone: string;
  imageSrc: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ name, title, phone, imageSrc }) => {
  return (
    <Card className="p-6 shadow-md border-t-4 border-t-aemet-navy">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <Avatar className="w-48 h-48 rounded-lg shadow-md">
          <AvatarImage src={imageSrc} alt={name} className="object-cover object-top" />
          <AvatarFallback className="text-3xl bg-aemet-navy text-white">
            {name.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-3xl font-bold text-aemet-navy mb-2">{name}</h1>
          <h2 className="text-xl text-gray-600 mb-4">{title}</h2>
          <div className="flex items-center gap-2 text-gray-600">
            <Phone className="h-4 w-4" />
            <span>{phone}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProfileHeader;
