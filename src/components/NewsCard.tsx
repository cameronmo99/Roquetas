
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import { UtensilsCrossed, GlassWater, Coffee, Hotel, Tag, Calendar, Building } from 'lucide-react';

import type { NewsItem, NewsCategory, BusinessCategory } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from './ui/skeleton';

interface NewsCardProps {
  newsItem: NewsItem & { businessName: string; businessCategory?: BusinessCategory };
}

const categoryIcons: Record<BusinessCategory, React.ReactNode> = {
    Restaurant: <UtensilsCrossed className="h-4 w-4" />,
    Bar: <GlassWater className="h-4 w-4" />,
    Cafe: <Coffee className="h-4 w-4" />,
    Hotel: <Hotel className="h-4 w-4" />,
};

const getCategoryColor = (category: NewsCategory) => {
    switch (category) {
        case 'Happy Hour':
            return 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/50 dark:text-green-300 dark:border-green-800';
        case 'Specialty Night':
            return 'bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900/50 dark:text-purple-300 dark:border-purple-800';
        case 'Live Music':
            return 'bg-pink-100 text-pink-800 border-pink-200 dark:bg-pink-900/50 dark:text-pink-300 dark:border-pink-800';
        default:
            return 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/50 dark:text-blue-300 dark:border-blue-800';
    }
}


export default function NewsCard({ newsItem }: NewsCardProps) {
  const { title, content, date, category, image, businessId, businessName, businessCategory } = newsItem;
  const [formattedDate, setFormattedDate] = useState<string | null>(null);

  useEffect(() => {
    setFormattedDate(format(parseISO(date), 'MMMM d, yyyy'));
  }, [date]);

  return (
    <Card className="flex flex-col overflow-hidden transition-all hover:shadow-lg md:flex-row">
      {image && (
        <div className="md:w-1/3">
            <Image
                src={image}
                alt={`Image for ${title}`}
                data-ai-hint="food drink event"
                width={400}
                height={400}
                className="h-full w-full object-cover aspect-video md:aspect-auto"
            />
        </div>
      )}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
            <div className='flex items-center gap-2 flex-wrap mb-2'>
                <Badge variant="outline" className={getCategoryColor(category)}>
                    <Tag className="mr-1.5 h-3 w-3" />
                    {category}
                </Badge>
                {businessCategory && (
                     <Badge variant="secondary">
                        {categoryIcons[businessCategory]}
                        <span className="ml-1.5">{businessCategory}</span>
                    </Badge>
                )}
            </div>
            <CardTitle className="font-headline text-2xl mb-2">{title}</CardTitle>
            <p className="text-muted-foreground mb-4">{content}</p>
        </div>
        <CardFooter className="flex-col sm:flex-row sm:items-center sm:justify-between p-0 mt-4 gap-4">
            <div className="flex items-center text-sm text-muted-foreground">
                <Building className="mr-2 h-4 w-4" />
                <Link href={`/businesses/${businessId}`} className="font-semibold hover:underline">{businessName}</Link>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="mr-2 h-4 w-4" />
                {formattedDate ? (
                    <span>{formattedDate}</span>
                ) : (
                    <Skeleton className="h-4 w-24" />
                )}
            </div>
        </CardFooter>
      </div>
    </Card>
  );
}
