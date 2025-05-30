import PageHeader from '@/components/layout/PageHeader';
import PageNavigation from '@/components/layout/PageNavigation';
import PageFooter from '@/components/layout/PageFooter';
import HotelCard from '@/components/hotel/HotelCard';
import { hotelsData } from '@/data/hotels';
import type { Hotel } from '@/types/hotel';

export default function HomePage() {
  const navHotels = hotelsData.map(hotel => ({ name: hotel.name, slug: hotel.slug }));

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <PageHeader />
      <PageNavigation hotels={navHotels} />

      <main className="flex-grow container mx-auto px-4 py-10 sm:py-12 md:py-16">
        <div className="space-y-16 md:space-y-20 lg:space-y-24">
          {hotelsData.map((hotel: Hotel) => (
            <section 
              id={hotel.slug} 
              key={hotel.id} 
              className="scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-32" // Offset for sticky nav height
              aria-labelledby={`${hotel.slug}-heading`}
            >
              {/* Hidden h2 for accessibility, HotelCard provides visual title */}
              <h2 id={`${hotel.slug}-heading`} className="sr-only">{hotel.name}</h2>
              <HotelCard hotel={hotel} />
            </section>
          ))}
        </div>
      </main>

      <PageFooter />
    </div>
  );
}
