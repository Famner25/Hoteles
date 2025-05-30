import type React from 'react';
import type { Hotel } from '@/types/hotel';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import StarRating from './StarRating';
import ReviewCard from './ReviewCard';
import ImageGallery from './ImageGallery';
import { Phone, MapPin, Star as HotelStarIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface HotelCardProps {
  hotel: Hotel;
}

const HotelCard: React.FC<HotelCardProps> = ({ hotel }) => {
  return (
    <Card className="w-full shadow-xl rounded-xl overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
      <CardHeader className="bg-gradient-to-r from-primary/10 via-background to-primary/10 p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <CardTitle className="text-3xl font-bold text-primary tracking-tight">{hotel.name}</CardTitle>
          <div className="mt-2 md:mt-0 flex items-center space-x-2">
            <StarRating rating={hotel.stars} maxStars={hotel.stars} starSize="h-6 w-6" className="text-accent" />
            <Badge variant="secondary" className="text-sm font-medium">{hotel.stars} Estrellas</Badge>
          </div>
        </div>
        <CardDescription className="mt-2 text-base text-muted-foreground">{hotel.description}</CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <ImageGallery images={hotel.images} hotelName={hotel.name} />

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Información de Contacto</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-primary" />
                <span className="text-foreground/90">Teléfono: {hotel.contact.phone}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-primary" />
                <span className="text-foreground/90">Dirección: {hotel.contact.address}</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Calificación General</h3>
            <div className="flex items-center space-x-2 text-sm">
              <StarRating rating={hotel.rating.average} starSize="h-5 w-5" />
              <span className="font-semibold text-foreground/90">{hotel.rating.average.toFixed(1)}</span>
              <span className="text-muted-foreground">({hotel.rating.count} reseñas)</span>
            </div>
          </div>
        </div>

        {hotel.featuredReviews && hotel.featuredReviews.length > 0 && (
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4 text-foreground border-b pb-2 border-border">Reseñas Destacadas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {hotel.featuredReviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="bg-muted/50 p-4 text-xs text-muted-foreground text-center justify-center">
        <p>¡Visita {hotel.name} en tu próximo viaje a Riohacha!</p>
      </CardFooter>
    </Card>
  );
};

export default HotelCard;
