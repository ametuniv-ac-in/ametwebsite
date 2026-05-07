
import React, { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X } from 'lucide-react';

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  description?: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  columns?: 2 | 3 | 4;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, columns = 3 }) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const columnClass = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
  }[columns];

  return (
    <>
      <div className={`grid ${columnClass} gap-6 md:gap-8`}>
        {images.map((image, index) => (
          <div 
            key={index} 
            className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white cursor-pointer transform hover:-translate-y-1"
            onClick={() => setSelectedImage(image)}
          >
            <div className="relative overflow-hidden h-80 sm:h-96">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-aemet-navy text-lg">{image.title}</h3>
              {image.description && (
                <p className="text-gray-600 text-sm mt-1 line-clamp-2">{image.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden bg-transparent border-none shadow-none">
          <div className="relative bg-white rounded-lg overflow-hidden">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 bg-black bg-opacity-50 text-white rounded-full p-1 z-50 hover:bg-opacity-70 transition-all"
              aria-label="Close dialog"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="max-h-[85vh] overflow-auto">
              <img 
                src={selectedImage?.src} 
                alt={selectedImage?.alt || ''} 
                className="w-full h-auto object-contain"
              />
              <div className="p-4 bg-white">
                <h3 className="font-bold text-xl text-aemet-navy">{selectedImage?.title}</h3>
                {selectedImage?.description && (
                  <p className="text-gray-700 mt-2">{selectedImage?.description}</p>
                )}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ImageGallery;
