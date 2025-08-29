import { businesses } from '@/lib/data';
import BusinessListings from '@/components/BusinessListings';

export const metadata = {
  title: 'Businesses in Roquetas de Mar',
  description: 'Find the best restaurants, bars, and cafes in Roquetas de Mar.',
};

export default function BusinessesPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold md:text-5xl">
          Explore Local Businesses
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          From fine dining to cozy cafes, discover your next favorite spot in Roquetas de Mar.
        </p>
      </div>
      <BusinessListings allBusinesses={businesses} />
    </div>
  );
}
