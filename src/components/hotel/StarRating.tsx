import type React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarRatingProps {
  rating: number;
  maxStars?: number;
  starSize?: string; // e.g., "h-5 w-5"
  className?: string;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, maxStars = 5, starSize = "h-5 w-5", className }) => {
  return (
    <div className={cn("flex items-center space-x-1", className)}>
      {[...Array(maxStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <Star
            key={index}
            className={cn(
              starSize,
              starValue <= Math.round(rating) ? 'text-accent fill-accent' : 'text-muted-foreground/50 fill-muted-foreground/20'
            )}
            aria-hidden="true"
          />
        );
      })}
    </div>
  );
};

export default StarRating;
