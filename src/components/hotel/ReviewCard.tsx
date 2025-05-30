import type React from 'react';
import type { Review } from '@/types/hotel';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import StarRating from './StarRating';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserCircle2 } from 'lucide-react';

interface ReviewCardProps {
  review: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  const authorInitial = review.author.charAt(0).toUpperCase();
  return (
    <Card className="bg-secondary/50 border-border shadow-sm hover:shadow-md transition-shadow duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-center space-x-3">
          <Avatar>
            <AvatarImage src={`https://placehold.co/40x40.png?text=${authorInitial}`} alt={review.author} data-ai-hint="person avatar" />
            <AvatarFallback className="bg-primary text-primary-foreground">
              {authorInitial}
            </AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-base font-semibold">{review.author}</CardTitle>
            <div className="flex items-center space-x-2">
              <StarRating rating={review.rating} starSize="h-4 w-4" />
              <span className="text-xs text-muted-foreground">{review.date}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-foreground/90 leading-relaxed">{review.comment}</p>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
