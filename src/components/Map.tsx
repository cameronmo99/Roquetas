'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from '@vis.gl/react-google-maps';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UtensilsCrossed, GlassWater, Coffee, Hotel, ShoppingBag, Building2, Store } from 'lucide-react';
import type { Business, BusinessCategory } from '@/lib/types';
import { getBusinesses } from '@/lib/firestore-data';
import { Skeleton } from './ui/skeleton';

const categoryIcons: Record<BusinessCategory, React.ReactNode> = {
  Restaurant: <UtensilsCrossed className="h-5 w-5" />,
  Bar: <GlassWater className="h-5 w-5" />,
  Cafe: <Coffee className="h-5 w-5" />,
  Hotel: <Hotel className="h-5 w-5" />,
  Takeaway: <ShoppingBag className="h-5 w-5" />,
  Apartment: <Building2 className="h-5 w-5" />,
  Shop: <Store className="h-5 w-5" />,
};

export default function MapComponent({ apiKey }: { apiKey: string }) {
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [selectedBusinessId, setSelectedBusinessId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const businessesData = await getBusinesses();
        setBusinesses(businessesData);
      } catch (error) {
        console.error("Failed to fetch businesses for map", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const selectedBusiness = businesses.find(b => b.id === selectedBusinessId);
  
  const position = { lat: 36.76, lng: -2.61 }; // Center of Roquetas de Mar

  if (loading) {
    return <Skeleton className="h-full w-full" />;
  }

  return (
    <APIProvider apiKey={apiKey}>
      <Map
        defaultCenter={position}
        defaultZoom={14}
        mapId="roquetas-explorer-map"
        disableDefaultUI={true}
        gestureHandling={'greedy'}
      >
        {businesses.map((business) => (
          business.location && <AdvancedMarker
            key={business.id}
            position={business.location}
            onClick={() => setSelectedBusinessId(business.id)}
          >
            <Pin
              background={'hsl(var(--primary))'}
              borderColor={'hsl(var(--primary))'}
              glyphColor={'hsl(var(--primary-foreground))'}
            />
          </AdvancedMarker>
        ))}

        {selectedBusiness && selectedBusiness.location && (
          <InfoWindow
            position={selectedBusiness.location}
            onCloseClick={() => setSelectedBusinessId(null)}
            pixelOffset={[0, -40]}
          >
            <div className="w-64">
              <Card className="border-0 bg-transparent shadow-none">
                  <CardHeader className="flex-row items-center gap-3 space-y-0 p-2">
                      <div className="flex-shrink-0 text-primary">
                          {categoryIcons[selectedBusiness.category]}
                      </div>
                      <CardTitle className="text-base font-headline leading-tight">{selectedBusiness.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-2 pt-0">
                      <p className="mb-3 line-clamp-2 text-xs text-muted-foreground">{selectedBusiness.description}</p>
                      <Button asChild size="sm" className="w-full">
                          <Link href={`/businesses/${selectedBusiness.id}`}>
                              View Details
                          </Link>
                      </Button>
                  </CardContent>
              </Card>
            </div>
          </InfoWindow>
        )}
      </Map>
    </APIProvider>
  );
}
