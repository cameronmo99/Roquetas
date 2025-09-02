import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Coffee, GlassWater, Hotel, Star, UtensilsCrossed } from 'lucide-react';
import type { Business, BusinessCategory } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface BusinessCardProps {
  business: Business;
}

const categoryIcons: Record<BusinessCategory, React.ReactNode> = {
  Restaurant: <UtensilsCrossed className="h-4 w-4" />,
  Bar: <GlassWater className="h-4 w-4" />,
  Cafe: <Coffee className="h-4 w-4" />,
  Hotel: <Hotel className="h-4 w-4" />,
};

export default function BusinessCard({ business }: BusinessCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden transition-all hover:shadow-lg">
      <div className="relative">
        <Image
          src={business.images[0]}
          alt={`Image of ${business.name}`}
          data-ai-hint={`${business.category.toLowerCase()} interior`}
          width={600}
          height={400}
          className="aspect-[3/2] w-full object-cover"
        />
        {business.featured && (
          <Badge className="absolute right-3 top-3 bg-accent text-accent-foreground">
            <Star className="mr-1 h-3 w-3" />
            Featured
          </Badge>
        )}
      </div>
      <CardHeader>
        <CardTitle className="font-headline text-xl">{business.name}</CardTitle>
        <div className="flex items-center text-sm text-muted-foreground">
          {categoryIcons[business.category]}
          <span className="ml-1.5">{business.category}</span>
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col justify-between">
        <p className="mb-4 text-muted-foreground">{business.description}</p>
        <Button asChild className="mt-auto w-full">
          <Link href={`/businesses/${business.id}`}>
            View Details <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
