
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookType, FileText, BookOpen } from 'lucide-react';

interface PublicationStat {
  category: string;
  count: number;
  icon: React.ComponentType<{ className?: string }>;
}

interface PublicationStatsProps {
  stats: PublicationStat[];
}

const PublicationStats: React.FC<PublicationStatsProps> = ({ stats }) => {
  return (
    <div className="grid md:grid-cols-4 gap-4 mb-10">
      {stats.map((stat, index) => (
        <Card key={index} className="border-t-4 border-t-aemet-blue">
          <CardHeader className="pb-2">
            <stat.icon className="h-6 w-6 text-aemet-blue mb-2" />
            <CardTitle className="text-4xl font-bold text-aemet-navy">{stat.count}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">{stat.category}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PublicationStats;
