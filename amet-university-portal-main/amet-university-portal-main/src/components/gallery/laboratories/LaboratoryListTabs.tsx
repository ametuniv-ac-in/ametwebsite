
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LabData } from './types';

interface LaboratoryListTabsProps {
  courses: string[];
  groupedLabs: Record<string, LabData[]>;
}

const LaboratoryListTabs: React.FC<LaboratoryListTabsProps> = ({ courses, groupedLabs }) => {
  return (
    <div className="mt-10 mb-8">
      <h2 className="text-2xl font-bold text-aemet-navy mb-6">List of Laboratories by Department</h2>
      
      <Tabs defaultValue={courses[0]} className="w-full">
        <TabsList className="mb-6 flex flex-wrap gap-2 justify-start">
          {courses.map((course) => (
            <TabsTrigger key={course} value={course} className="px-4 py-2 rounded-md text-sm mb-2">
              {course}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {courses.map((course) => (
          <TabsContent key={course} value={course} className="mt-0">
            <Card>
              <CardHeader className="bg-aemet-navy text-white">
                <CardTitle className="text-xl">{course}</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {groupedLabs[course].map((lab) => (
                    <div key={lab.id} className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                      <p className="font-semibold text-aemet-navy">{lab.name}</p>
                      <p className="text-gray-500 text-sm mt-1">Lab ID: {lab.id}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default LaboratoryListTabs;
