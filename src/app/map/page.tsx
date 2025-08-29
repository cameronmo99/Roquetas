import MapComponent from '@/components/Map';

export const metadata = {
  title: 'Interactive Map | Roquetas Explorer',
  description: 'Explore businesses and points of interest on the interactive map of Roquetas de Mar.',
};

export default function MapPage() {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return (
      <div className="container mx-auto flex h-[calc(100vh-4rem)] items-center justify-center px-4 py-8 md:py-12">
        <div className="rounded-lg bg-muted p-8 text-center">
          <h1 className="font-headline text-3xl font-bold">Map Unavailable</h1>
          <p className="mt-2 text-muted-foreground">
            The Google Maps API key is not configured.
            <br />
            Please add it to your .env file.
          </p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="relative h-[calc(100vh-4rem)] w-full">
      <div className="pointer-events-none absolute left-0 right-0 top-0 z-10 bg-gradient-to-b from-background/80 via-background/50 to-transparent p-4 pt-8 text-center">
        <h1 className="font-headline text-4xl font-bold text-foreground drop-shadow-md md:text-5xl">
          Interactive Map
        </h1>
        <p className="mx-auto mt-2 max-w-2xl text-lg text-foreground/90 drop-shadow">
          Click a pin to discover local businesses.
        </p>
      </div>
      <div className="h-full w-full">
        <MapComponent apiKey={apiKey} />
      </div>
    </div>
  );
}
