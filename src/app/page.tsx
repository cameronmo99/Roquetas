import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, MapPin, Star } from 'lucide-react';

import { businesses, events } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import BusinessCard from '@/components/BusinessCard';
import EventCard from '@/components/EventCard';
import AiRecommender from '@/components/AiRecommender';

export default function Home() {
  const featuredBusinesses = businesses.filter((b) => b.featured && b.category !== 'Hotel');
  const featuredHotels = businesses.filter((b) => b.featured && b.category === 'Hotel');
  const upcomingEvents = events.slice(0, 3);

  return (
    <div className="flex flex-col gap-16 md:gap-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full">
        <Image
          src="/images/roquetas-banner.jpg"
          alt="Beautiful beach in Roquetas de Mar"
          data-ai-hint="beach landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-primary-foreground">
          <h1 className="font-headline text-4xl font-bold md:text-6xl lg:text-7xl">
            Discover Roquetas de Mar
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl">
            Your ultimate guide to the best restaurants, bars, events, and attractions in town.
          </p>
          <div className="mt-8 flex gap-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/businesses">Explore Businesses</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/events">Upcoming Events</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <div className="container mx-auto px-4">
        {/* Featured Businesses Section */}
        <section id="featured">
          <div className="flex items-center justify-between">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">
              Featured Businesses
            </h2>
            <Button variant="link" asChild>
              <Link href="/businesses">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <p className="mt-2 text-muted-foreground">
            Paid placements from our partners.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredBusinesses.map((business) => (
              <BusinessCard key={business.id} business={business} />
            ))}
          </div>
        </section>

        {/* Featured Hotels Section */}
        {featuredHotels.length > 0 && (
            <section id="featured-hotels" className="mt-16 md:mt-24">
                <div className="flex items-center justify-between">
                <h2 className="font-headline text-3xl font-bold md:text-4xl">
                    Featured Hotels
                </h2>
                <Button variant="link" asChild>
                    <Link href="/businesses?category=Hotel">
                    View All <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
                </div>
                <p className="mt-2 text-muted-foreground">
                    Our top hotel recommendations.
                </p>
                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {featuredHotels.map((hotel) => (
                    <BusinessCard key={hotel.id} business={hotel} />
                ))}
                </div>
            </section>
        )}

        {/* AI Recommender Section */}
        <section id="ai-recommender" className="mt-16 md:mt-24">
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
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
