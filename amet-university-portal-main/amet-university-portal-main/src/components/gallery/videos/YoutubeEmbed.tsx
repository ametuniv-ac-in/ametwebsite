
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface YoutubeEmbedProps {
  videoId: string;
  title: string;
  description?: string;
}

export const YoutubeEmbed: React.FC<YoutubeEmbedProps> = ({ 
  videoId, 
  title, 
  description 
}) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-0">
        <AspectRatio ratio={16 / 9}>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </AspectRatio>
        <div className="p-4">
          <h3 className="font-semibold text-aemet-navy text-lg">{title}</h3>
          {description && (
            <p className="text-sm text-gray-600 mt-1">{description}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
