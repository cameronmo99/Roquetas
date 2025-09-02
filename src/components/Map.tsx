'use client';

import { useState } from 'react';
import Link from 'next/link';
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from '@vis.gl/react-google-maps';
import { businesses } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UtensilsCrossed, GlassWater, Coffee, Hotel } from 'lucide-react';
import type { BusinessCategory } from '@/lib/types';

const categoryIcons: Record<BusinessCategory, React.ReactNode> = {
  Restaurant: <UtensilsCrossed className="h-5 w-5" />,
  Bar: <GlassWater className="h-5 w-5" />,
  Cafe: <Coffee className="h-5 w-5" />,
  Hotel: <Hotel className="h-5 w-5" />,
};

export default function MapComponent({ apiKey }: { apiKey: string }) {
  const [selectedBusinessId, setSelectedBusinessId] = useState<string | null>(null);

  const selectedBusiness = businesses.find(b => b.id === selectedBusinessId);
  
  const position = { lat: 36.76, lng: -2.61 }; // Center of Roquetas de Mar

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
          <AdvancedMarker
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

        {selectedBusiness && (
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
