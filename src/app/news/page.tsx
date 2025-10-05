import { newsItems } from '@/lib/news-data';
import { businesses } from '@/lib/data';
import NewsCard from '@/components/NewsCard';

export const metadata = {
  title: 'News & Updates | Roquetas Explorer',
  description: 'Stay up-to-date with the latest news, happy hours, and specialty nights from businesses in Roquetas de Mar.',
};

export default function NewsPage() {
  const newsWithBusiness = newsItems.map(newsItem => {
    const business = businesses.find(b => b.id === newsItem.businessId);
    return {
      ...newsItem,
      businessName: business?.name || 'Local Business',
      businessCategory: business?.category,
    };
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl font-bold md:text-5xl">
          What's New in Town
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          The latest updates, offers, and events from your favorite local spots.
        </p>
      </div>
      <div className="max-w-3xl mx-auto">
        <div className="space-y-8">
            {newsWithBusiness.map((item) => (
                <NewsCard key={item.id} newsItem={item} />
            ))}
        </div>
      </div>
    </div>
  );
}
