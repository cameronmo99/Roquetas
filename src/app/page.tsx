
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, MapPin, Star, UtensilsCrossed, Hotel, Building, Plane, Waves, Newspaper, Phone } from 'lucide-react';

import { businesses, events } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import BusinessCard from '@/components/BusinessCard';
import EventCard from '@/components/EventCard';
import AiRecommender from '@/components/AiRecommender';

const tileLinks = [
    { href: '/businesses?category=Restaurant', label: 'Food & Drink', icon: <UtensilsCrossed size={32} /> },
    { href: '/businesses?category=Hotel', label: 'Accommodation', icon: <Hotel size={32} /> },
    { href: '/places', label: 'Places', icon: <Waves size={32} /> },
    { href: '/events', label: 'Events', icon: <Calendar size={32} /> },
    { href: '/news', label: 'News', icon: <Newspaper size={32} /> },
    { href: '/transport', label: 'Transport', icon: <Plane size={32} /> },
    { href: '/map', label: 'Map', icon: <MapPin size={32} /> },
    { href: '/contact', label: 'Contact', icon: <Phone size={32} /> },
];


export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true);
  const featuredBusinesses = businesses.filter((b) => b.featured && b.category !== 'Hotel');
  const featuredHotels = businesses.filter((b) => b.featured && b.category === 'Hotel');
  const upcomingEvents = events.slice(0, 3);

  return (
    <div className="flex flex-col gap-16 md:gap-24">
      {/* Hero Section */}
      <section className="relative h-screen w-full">
        <Image
          src="/images/Banner.png?v=2"
          alt="Banner of Roquetas de Mar"
          data-ai-hint="beach landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-primary-foreground">
        
          {/* Welcome Message and Enter Button */}
          <div
            className={`transition-opacity duration-500 ease-in-out ${showWelcome ? 'opacity-100' : 'opacity-0 hidden'}`}
          >
            <div className="rounded-lg bg-black/50 p-6 md:p-10 max-w-4xl mx-4 backdrop-blur-sm">
              <h1 className="font-headline text-3xl font-bold md:text-5xl">
                  Welcome to the Roquetas de Mar Explorer App!
              </h1>
              <div className="mt-6 space-y-4 text-base md:text-lg text-left">
                  <p>
                      This app is designed to be your handy guide before and during your stay in Roquetas de Mar. Inside, you'll find recommendations on the best places to eat, drink, and stay, as well as must-see attractions, essential contacts, and much more.
                  </p>
                  <p>
                      We hope you find the information helpful for making the most of your visit. Your feedback is always welcome, as it helps us keep improving the experience.
                  </p>
                  <p className="font-semibold pt-4">
                      The Roquetas Explorer Team
                  </p>
              </div>
              <Button
                size="lg"
                className="mt-8 animate-fade-in-up"
                onClick={() => setShowWelcome(false)}
              >
                Enter Site
              </Button>
            </div>
          </div>
          
          {/* Tile Navigation */}
          <div
            className={`transition-opacity duration-500 ease-in-out ${!showWelcome ? 'opacity-100' : 'opacity-0 hidden'}`}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
                {tileLinks.map(link => (
                    <Link href={link.href} key={link.href}>
                        <div className="flex flex-col items-center justify-center text-center p-4 bg-black/50 backdrop-blur-sm rounded-lg h-36 w-40 transition-all duration-300 hover:bg-black/70 hover:scale-105">
                            {link.icon}
                            <span className="mt-2 font-headline text-base">{link.label}</span>
                        </div>
                    </Link>
                ))}
            </div>
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
