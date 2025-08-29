import Image from 'next/image';
import { Calendar, Clock, MapPin } from 'lucide-react';
import type { Event } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden transition-all hover:shadow-lg">
      <Image
        src={event.image}
        alt={`Image for ${event.name}`}
        data-ai-hint="event festival"
        width={600}
        height={400}
        className="aspect-[3/2] w-full object-cover"
      />
      <CardHeader>
        <CardTitle className="font-headline text-xl">{event.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-muted-foreground">{event.description}</p>
        <div className="space-y-2 text-sm">
          <div className="flex items-center">
            <Calendar className="mr-2 h-4 w-4 text-primary" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="mr-2 h-4 w-4 text-primary" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="mr-2 h-4 w-4 text-primary" />
            <span>{event.location}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
