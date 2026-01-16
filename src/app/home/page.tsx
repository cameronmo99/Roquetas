'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

import type { Event } from '@/lib/types';
import { getUpcomingEvents } from '@/lib/firestore-data';
import { Button } from '@/components/ui/button';
import EventCard from '@/components/EventCard';
import AiRecommender from '@/components/AiRecommender';
import { Skeleton } from '@/components/ui/skeleton';

function EventsSkeleton() {
  return (
    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="space-y-4">
          <Skeleton className="aspect-[3/2] w-full" />
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      ))}
    </div>
  );
}


export default function HomePage() {
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const events = await getUpcomingEvents(3);
        setUpcomingEvents(events);
      } catch (error) {
        console.error("Failed to fetch upcoming events", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div className="flex flex-col gap-16 md:gap-24 py-16 md:py-24">
      <div className="container mx-auto px-4">

        {/* AI Recommender Section */}
        <section id="ai-recommender">
            <AiRecommender />
        </section>

        {/* Upcoming Events Section */}
        <section id="events" className="mt-16 md:mt-24">
          <div className="flex items-center justify-between">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">
              Upcoming Events
            </h2>
            <Button variant="link" asChild>
              <Link href="/events">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <p className="mt-2 text-muted-foreground">
            Don't miss out on what's happening in Roquetas de Mar.
          </p>
          {loading ? (
            <EventsSkeleton />
          ) : (
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}