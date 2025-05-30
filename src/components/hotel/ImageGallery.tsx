import type React from 'react';
import Image from 'next/image';
import type { HotelImage } from '@/types/hotel';
import { Card, CardContent } from '@/components/ui/card';

interface ImageGalleryProps {
  images: HotelImage[];
  hotelName: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, hotelName }) => {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="mt-6 mb-4">
      <h3 className="text-xl font-semibold mb-3 text-foreground">Galería de Fotos</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <Card key={index} className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-0">
              <div className="aspect-video relative w-full">
                <img
                  src={image.src}
                  alt={`${hotelName} - Imagen ${index + 1}`}
                  className= "rounded-t-lg object-cover w-full h-full"
                  data-ai-hint={image.hint}
                />
              </div>
              <div className="p-3 bg-muted/30 rounded-b-lg">
                 <p className="text-xs text-center text-muted-foreground truncate">{image.alt}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
