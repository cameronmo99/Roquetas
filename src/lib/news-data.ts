import type { NewsItem } from './types';

export const newsItems: NewsItem[] = [
  {
    id: 'news-1',
    businessId: '5', // Bar de Tapas El Rincón
    title: 'Tapas Tuesday!',
    content: 'Every Tuesday, get a free tapa with every drink purchased between 5 PM and 7 PM. Explore our wide selection of local wines and beers.',
    date: '2024-08-20',
    category: 'Specialty Night',
    image: 'https://picsum.photos/seed/news1/600/400',
  },
  {
    id: 'news-2',
    businessId: '2', // Chiringuito La Cabaña
    title: 'Sunset Happy Hour',
    content: 'Join us for 2-for-1 cocktails every weekday from 4 PM to 6 PM. There is no better place to watch the sunset!',
    date: '2024-08-19',
    category: 'Happy Hour',
    image: 'https://picsum.photos/seed/news2/600/400',
  },
  {
    id: 'news-3',
    businessId: '1', // Restaurante Alejandro
    title: 'New Tasting Menu',
    content: 'Chef Alejandro has unveiled a new 8-course tasting menu featuring the best of seasonal, local produce. Book your table now for an unforgettable culinary journey.',
    date: '2024-08-18',
    category: 'General',
    image: 'https://picsum.photos/seed/news3/600/400',
  },
  {
    id: 'news-4',
    businessId: '7', // Lilly's Bar
    title: 'Live Music Friday',
    content: 'The amazing local artist "Acoustic Andres" will be playing live this Friday from 9 PM. Come down for great tunes and a fantastic atmosphere.',
    date: '2024-08-16',
    category: 'Live Music',
    image: 'https://picsum.photos/seed/news4/600/400',
  },
  {
    id: 'news-5',
    businessId: '4', // Pizzeria La Mamma
    title: 'Family Pizza Night',
    content: 'Every Sunday, get any two large pizzas and a bottle of house wine for just €25. Perfect for a family dinner!',
    date: '2024-08-15',
    category: 'Specialty Night',
    image: 'https://picsum.photos/seed/news5/600/400',
  },
];
