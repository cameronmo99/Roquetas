
import { Suspense } from 'react';
import { getBusinesses } from '@/lib/firestore-data';
import BusinessListings from '@/components/BusinessListings';
import { Skeleton } from '@/components/ui/skeleton';

export const metadata = {
  title: 'Businesses in Roquetas de Mar',
  description: 'Find the best restaurants, bars, and cafes in Roquetas de Mar.',
};

function ListingsSkeleton() {
  return (
    <div className="mt-12">
      <div className="mb-8 flex flex-col gap-4 md:flex-row">
        <Skeleton className="h-10 flex-1" />
        <Skeleton className="h-10 w-full md:w-[200px]" />
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="space-y-4">
            <Skeleton className="aspect-[3/2] w-full" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-10 w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}


export default async function BusinessesPage() {
  const businesses = await getBusinesses();
  
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
      <Suspense fallback={<ListingsSkeleton />}>
        <BusinessListings allBusinesses={businesses} />
      </Suspense>
    </div>
  );
}
