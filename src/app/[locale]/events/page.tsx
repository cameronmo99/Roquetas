
import { events } from '@/lib/data';
import EventCard from '@/components/EventCard';

export const metadata = {
  title: 'Events in Roquetas de Mar',
  description: 'Find out what\'s happening in Roquetas de Mar with our event calendar.',
};

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl font-bold md:text-5xl">
          Upcoming Events
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          From vibrant festivals to local markets, there's always something happening in Roquetas de Mar.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
