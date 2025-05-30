import type React from 'react';
import type { Hotel } from '@/types/hotel';
import { Button } from '@/components/ui/button';

interface PageNavigationProps {
  hotels: Pick<Hotel, 'name' | 'slug'>[];
}

const PageNavigation: React.FC<PageNavigationProps> = ({ hotels }) => {
  return (
    <nav className="sticky top-0 z-40 bg-background/90 backdrop-blur-md shadow-md border-b border-border">
      <div className="container mx-auto px-4 overflow-x-auto">
        <ul className="flex items-center justify-center space-x-2 md:space-x-4 py-3 whitespace-nowrap">
          {hotels.map((hotel) => (
            <li key={hotel.slug}>
              <Button variant="ghost" asChild className="text-sm md:text-base font-medium text-foreground hover:bg-accent/20 hover:text-accent-foreground px-3 py-2">
                <a href={`#${hotel.slug}`}>{hotel.name}</a>
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default PageNavigation;
