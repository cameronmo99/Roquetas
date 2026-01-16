import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AiRecommender from '@/components/AiRecommender';
import BusinessCard from '@/components/BusinessCard';
import EventCard from '@/components/EventCard';
import HeroSection from '@/components/HeroSection';
import { getFeaturedBusinesses, getUpcomingEvents } from '@/lib/firestore-data';

export default async function Home() {
  const [allFeatured, upcomingEvents] = await Promise.all([
    getFeaturedBusinesses(),
    getUpcomingEvents(3)
  ]);

  const featuredHotels = allFeatured.filter(business => 
    business.categories.includes('Hotel')
  );
  
  const featuredBusinesses = allFeatured.filter(business => 
    !business.categories.includes('Hotel')
  );

  return (
    <div className="flex flex-col gap-16 md:gap-24">
      {/* Hero Section */}
      <HeroSection />
      
      <div className="container mx-auto px-4">
        {/* Featured Businesses Section */}
        {featuredBusinesses.length > 0 && (
          <section id="featured" className="mt-16 md:mt-24">
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
        )}

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
        {upcomingEvents.length > 0 && (
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
        )}
      </div>
    </div>
  );
}
