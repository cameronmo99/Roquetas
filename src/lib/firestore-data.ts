import { db } from './firebase';
import { collection, getDocs, doc, getDoc, query, where, orderBy, limit } from 'firebase/firestore';
import type { Business, Event, NewsItem, PlaceOfInterest, BusinessCategory } from './types';

// Helper function to convert Firestore snapshot to data array
function snapshotToData<T>(snapshot: any): T[] {
  return snapshot.docs.map((doc: any) => ({ id: doc.id, ...doc.data() } as T));
}

// Fetch all businesses
export async function getBusinesses(): Promise<Business[]> {
  const businessesCol = collection(db, 'businesses');
  const businessSnapshot = await getDocs(businessesCol);
  return snapshotToData<Business>(businessSnapshot);
}

// Fetch a single business by ID
export async function getBusinessById(id: string): Promise<Business | null> {
  const businessDocRef = doc(db, 'businesses', id);
  const businessSnap = await getDoc(businessDocRef);
  if (businessSnap.exists()) {
    return { id: businessSnap.id, ...businessSnap.data() } as Business;
  }
  return null;
}

// Fetch featured businesses
export async function getFeaturedBusinesses(): Promise<Business[]> {
    const businessesCol = collection(db, 'businesses');
    const q = query(businessesCol, where('featured', '==', true), where('categories', 'not-in', [['Hotel']]));
    const snapshot = await getDocs(q);
    return snapshotToData<Business>(snapshot);
}

// Fetch featured hotels
export async function getFeaturedHotels(): Promise<Business[]> {
    const businessesCol = collection(db, 'businesses');
    const q = query(businessesCol, where('featured', '==', true), where('categories', 'array-contains', 'Hotel'));
    const snapshot = await getDocs(q);
    return snapshotToData<Business>(snapshot);
}

// Fetch all events
export async function getEvents(): Promise<Event[]> {
  const eventsCol = collection(db, 'events');
  const q = query(eventsCol, orderBy('date', 'desc'));
  const eventSnapshot = await getDocs(q);
  return snapshotToData<Event>(eventSnapshot);
}

// Fetch upcoming events
export async function getUpcomingEvents(count: number = 3): Promise<Event[]> {
  const eventsCol = collection(db, 'events');
  // This is a simplified query. For true 'upcoming', you'd compare against today's date.
  const q = query(eventsCol, orderBy('date', 'asc'), limit(count));
  const snapshot = await getDocs(q);
  return snapshotToData<Event>(snapshot);
}


// Fetch all news items
export async function getNews(): Promise<(NewsItem & { businessName: string; businessCategories?: BusinessCategory[] })[]> {
    const newsCol = collection(db, 'news');
    const q = query(newsCol, orderBy('date', 'desc'));
    const newsSnapshot = await getDocs(q);
    const newsItems = snapshotToData<NewsItem>(newsSnapshot);

    const newsWithBusiness = await Promise.all(newsItems.map(async (newsItem) => {
        let businessName = 'Local Business';
        let businessCategories;
        if (newsItem.businessId) {
            const business = await getBusinessById(newsItem.businessId);
            if(business) {
                businessName = business.name;
                businessCategories = business.categories;
            }
        }
        return {
            ...newsItem,
            businessName,
            businessCategories,
        };
    }));

    return newsWithBusiness;
}

// Fetch all places of interest
export async function getPlaces(): Promise<PlaceOfInterest[]> {
  const placesCol = collection(db, 'places');
  const placeSnapshot = await getDocs(placesCol);
  return snapshotToData<PlaceOfInterest>(placeSnapshot);
}
