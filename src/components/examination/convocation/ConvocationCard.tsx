
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Award, Image as ImageIcon } from 'lucide-react';
import { ConvocationData } from './types';

interface ConvocationCardProps {
  convocation: ConvocationData;
}

const ConvocationCard: React.FC<ConvocationCardProps> = ({ convocation }) => {
  return (
    <Card className="mb-6 overflow-hidden border-t-4 border-t-aemet-navy">
      <CardContent className="p-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-2xl font-bold text-aemet-navy mb-2">
              {convocation.number} Convocation
            </h3>
            <div className="flex items-center text-gray-600 mb-4">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{convocation.date}</span>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <p className="text-sm text-gray-600">Undergraduate</p>
                <p className="text-2xl font-bold text-aemet-navy">{convocation.graduatesCount.undergraduate}</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <p className="text-sm text-gray-600">Postgraduate</p>
                <p className="text-2xl font-bold text-aemet-navy">{convocation.graduatesCount.postgraduate}</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <p className="text-sm text-gray-600">Ph.D</p>
                <p className="text-2xl font-bold text-aemet-navy">{convocation.graduatesCount.phd}</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
                <Award className="h-4 w-4 mr-2 text-amber-500" />
                Honoris Causa Recipients
              </h4>
              <div className="space-y-3">
                {convocation.honorisRecipients.length > 0 ? (
                  convocation.honorisRecipients.map((recipient, index) => (
                    <div key={index} className="bg-amber-50 p-3 rounded-md">
                      <p className="font-medium text-aemet-navy">{recipient.name}</p>
                      <div className="text-sm text-gray-600">
                        {recipient.title.map((line, i) => (
                          <p key={i}>{line}</p>
                        ))}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-gray-500 italic">No honorary recipients for this convocation</div>
                )}
              </div>
            </div>
          </div>
          
          <div className="flex justify-center items-start">
            {convocation.image ? (
              <div className="rounded-md overflow-hidden shadow-md w-full max-w-md">
                <img 
                  src={convocation.image} 
                  alt={`${convocation.number} Convocation`} 
                  className="w-full h-auto object-cover"
                />
                <div className="bg-aemet-navy text-white p-2 text-center text-sm">
                  {convocation.number} Convocation Ceremony
                </div>
              </div>
            ) : (
              <div className="rounded-md overflow-hidden border border-gray-200 bg-gray-50 flex items-center justify-center w-full max-w-md aspect-video">
                <div className="text-center p-6">
                  <ImageIcon className="h-12 w-12 mx-auto text-gray-400 mb-2" />
                  <p className="text-gray-500">{convocation.number} Convocation</p>
                  <p className="text-gray-400 text-sm">No image available</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ConvocationCard;
