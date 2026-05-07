
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { CalendarIcon } from "lucide-react";
import { PlacementActivity } from '@/data/placementActivities';

interface ActivityCardProps {
  activity: PlacementActivity;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={activity.imageUrl} 
          alt={activity.title} 
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-4 flex-1 flex flex-col">
        <div className="flex items-center text-aemet-blue mb-2">
          <CalendarIcon className="w-4 h-4 mr-1" />
          <span className="text-sm font-medium">{activity.date}</span>
        </div>
        <h3 className="font-bold text-aemet-navy mb-2">{activity.title}</h3>
        <p className="text-gray-600 text-sm mt-auto">{activity.description}</p>
      </CardContent>
    </Card>
  );
};

export default ActivityCard;
