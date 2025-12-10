
import Image from 'next/image';
import { places } from '@/lib/places-data';
import type { PlaceOfInterest, PlaceOfInterestCategory } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Waves, Mountain, Landmark } from 'lucide-react';

export const metadata = {
  title: 'Places of Interest in Roquetas de Mar',
  description: 'Discover beautiful beaches, nature reserves, and monuments in Roquetas de Mar.',
};

const categoryIcons: Record<PlaceOfInterestCategory, React.ReactNode> = {
  Beach: <Waves className="h-4 w-4" />,
  Nature: <Mountain className="h-4 w-4" />,
  Monument: <Landmark className="h-4 w-4" />,
};

interface PlaceCardProps {
    place: PlaceOfInterest;
}

function PlaceCard({ place }: PlaceCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden transition-all hover:shadow-lg">
      <div className="relative">
        <Image
          src={place.images[0]}
          alt={`Image of ${place.name}`}
          data-ai-hint={`${place.category.toLowerCase()} landscape`}
          width={600}
          height={400}
          className="aspect-[3/2] w-full object-cover"
        />
         <Badge variant="secondary" className="absolute left-3 top-3">
          {categoryIcons[place.category]}
          <span className="ml-1.5">{place.category}</span>
        </Badge>
      </div>
      <CardHeader>
        <CardTitle className="font-headline text-xl">{place.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="flex-1 text-muted-foreground">{place.description}</p>
      </CardContent>
    </Card>
  );
}


export default function PlacesPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl font-bold md:text-5xl">
          Discover Places of Interest
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Explore the natural beauty and historical landmarks of Roquetas de Mar.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {places.map((place) => (
          <PlaceCard key={place.id} place={place} />
        ))}
      </div>
    </div>
  );
}
