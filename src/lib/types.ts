export interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
}

export type BusinessCategory = 'Restaurant' | 'Bar' | 'Cafe' | 'Hotel';

export interface Business {
  id: string;
  name: string;
  category: BusinessCategory;
  description: string;
  longDescription: string;
  images: string[];
  contact: {
    phone: string;
    website: string;
  };
  address: {
    street: string;
    city: string;
    zip: string;
  };
  location: {
    lat: number;
    lng: number;
  };
  featured: boolean;
  reviews: Review[];
}

export interface Event {
  id: string;
  name: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
}

export type NewsCategory = 'Happy Hour' | 'Specialty Night' | 'Live Music' | 'General';

export interface NewsItem {
  id: string;
  businessId: string;
  title: string;
  content: string;
  date: string; // "YYYY-MM-DD"
  category: NewsCategory;
  image?: string;
}
