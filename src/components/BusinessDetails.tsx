import Image from 'next/image';
import { Coffee, Globe, GlassWater, MapPin, Phone, Star, UtensilsCrossed, StarHalf, Hotel, ShoppingBag, Building2, Store } from 'lucide-react';
import type { Business, BusinessCategory } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const categoryIcons: Record<BusinessCategory, React.ReactNode> = {
  Restaurant: <UtensilsCrossed className="h-5 w-5" />,
  Bar: <GlassWater className="h-5 w-5" />,
  Cafe: <Coffee className="h-5 w-5" />,
  Hotel: <Hotel className="h-5 w-5" />,
  Takeaway: <ShoppingBag className="h-5 w-5" />,
  Apartment: <Building2 className="h-5 w-5" />,
  Shop: <Store className="h-5 w-5" />,
};

function renderStars(rating: number) {
    if (typeof rating !== 'number' || rating < 0 || rating > 5) {
        return null;
    }
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="flex items-center text-accent">
        {Array.from({ length: fullStars }, (_, i) => <Star key={`full-${i}`} className="h-5 w-5 fill-accent" />)}
        {halfStar && <StarHalf className="h-5 w-5 fill-accent" />}
        {Array.from({ length: emptyStars }, (_, i) => <Star key={`empty-${i}`} className="h-5 w-5 text-muted-foreground/50" />)}
      </div>
    );
}

export default function BusinessDetails({ business }: { business: Business }) {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center gap-4 text-primary flex-wrap">
          {business.categories?.map(category => (
              <div key={category} className="flex items-center gap-2">
                {categoryIcons[category]}
                <span className="font-semibold">{category}</span>
              </div>
          ))}
        </div>
        <h1 className="mt-2 font-headline text-4xl font-bold md:text-6xl">{business.name}</h1>
        {business.featured && (
            <Badge className="mt-4 bg-accent text-accent-foreground">
                <Star className="mr-1 h-3 w-3" />
                Featured Partner
            </Badge>
        )}
      </div>

      {/* Image Gallery */}
      <div className="mb-12 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="aspect-video w-full">
          <Image
            src={business.images[0]}
            alt={`Main image of ${business.name}`}
            data-ai-hint="restaurant interior"
            width={800}
            height={600}
            className="h-full w-full rounded-lg object-cover shadow-md"
            priority
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          {business.images.slice(1, 3).map((img, index) => (
            <div key={index} className="aspect-video w-full">
              <Image
                src={img}
                alt={`Image ${index + 2} of ${business.name}`}
                data-ai-hint="food dish"
                width={400}
                height={300}
                className="h-full w-full rounded-lg object-cover shadow-sm"
              />
            </div>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2">
            <h2 className="font-headline text-2xl font-bold">About {business.name}</h2>
            <p className="mt-4 text-lg leading-relaxed">{business.longDescription}</p>

            <Separator className="my-8" />

            {/* Reviews Section */}
            <div>
                <h2 className="font-headline text-2xl font-bold">Reviews</h2>
                {business.reviews && business.reviews.length > 0 ? (
                    <div className="mt-4 space-y-6">
                        {business.reviews.map(review => (
                            <Card key={review.id} className="bg-background/80">
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <CardTitle className="text-lg font-headline">{review.author}</CardTitle>
                                        {renderStars(review.rating)}
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="italic text-muted-foreground">"{review.comment}"</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                ) : (
                    <p className="mt-4 text-muted-foreground">No reviews yet. Be the first to share your experience!</p>
                )}
            </div>
        </div>

        {/* Info Sidebar */}
        <div className="mt-8 lg:mt-0">
            <Card className="sticky top-24">
                <CardHeader>
                    <CardTitle className="font-headline">Contact & Location</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                    {business.address && <div className="flex items-start">
                        <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                        <span className="ml-3">{business.address.street}, {business.address.city} {business.address.zip}</span>
                    </div>}
                    {business.contact?.phone && <div className="flex items-center">
                        <Phone className="h-5 w-5 flex-shrink-0 text-primary" />
                        <a href={`tel:${business.contact.phone}`} className="ml-3 hover:underline">{business.contact.phone}</a>
                    </div>}
                    {business.contact?.website && <div className="flex items-center">
                        <Globe className="h-5 w-5 flex-shrink-0 text-primary" />
                        <a href={business.contact.website} target="_blank" rel="noopener noreferrer" className="ml-3 hover:underline truncate">{business.contact.website}</a>
                    </div>}
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
