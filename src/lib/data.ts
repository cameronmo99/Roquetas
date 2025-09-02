import type { Business, Event } from './types';

export const businesses: Business[] = [
  {
    id: '1',
    name: 'Restaurante Alejandro',
    category: 'Restaurant',
    description: 'Modern Mediterranean cuisine with stunning sea views.',
    longDescription:
      'Restaurante Alejandro offers a unique dining experience with its innovative dishes based on traditional Andalusian recipes. Our focus on fresh, local ingredients and our breathtaking location make us a must-visit in Roquetas de Mar. Perfect for romantic dinners and special occasions.',
    images: ['https://picsum.photos/600/400?random=1', 'https://picsum.photos/600/400?random=2', 'https://picsum.photos/600/400?random=3'],
    contact: {
      phone: '+34 950 32 24 08',
      website: 'https://restaurantealejandro.es',
    },
    address: {
      street: 'Av. Antonio Machado, 32',
      city: 'Roquetas de Mar',
      zip: '04740',
    },
    location: { lat: 36.758, lng: -2.607 },
    featured: true,
    reviews: [
      { id: 1, author: 'Jane D.', rating: 5, comment: 'Absolutely phenomenal food and service!' },
      { id: 2, author: 'John S.', rating: 5, comment: 'The best sea view in town. A magical experience.' },
    ],
  },
  {
    id: '2',
    name: 'Chiringuito La Cabaña',
    category: 'Bar',
    description: 'Relaxed beach bar serving fresh seafood and cocktails.',
    longDescription: 'Located right on the sand, Chiringuito La Cabaña is the perfect spot to unwind. Enjoy our famous grilled sardines, refreshing mojitos, and the sound of the waves. A family-friendly atmosphere with live music on weekends.',
    images: ['https://picsum.photos/600/400?random=4', 'https://picsum.photos/600/400?random=5'],
    contact: {
      phone: '+34 950 56 78 90',
      website: 'https://lacabanaroquetas.com',
    },
    address: {
      street: 'Paseo Marítimo, 12',
      city: 'Roquetas de Mar',
      zip: '04740',
    },
    location: { lat: 36.75, lng: -2.615 },
    featured: false,
    reviews: [
        { id: 1, author: 'Mike T.', rating: 4, comment: 'Great vibes and even better cocktails.' },
    ],
  },
  {
    id: '3',
    name: 'Cafetería El Sol',
    category: 'Cafe',
    description: 'Cozy cafe with artisanal coffee and homemade pastries.',
    longDescription: 'Start your day at Cafetería El Sol, a charming corner in the heart of Roquetas. We pride ourselves on our specialty coffee, sourced from local roasters, and our delicious selection of freshly baked cakes, croissants, and local treats.',
    images: ['https://picsum.photos/600/400?random=6', 'https://picsum.photos/600/400?random=7'],
    contact: {
      phone: '+34 950 12 34 56',
      website: 'https://elsolcafe.es',
    },
    address: {
      street: 'Plaza de la Constitución, 5',
      city: 'Roquetas de Mar',
      zip: '04740',
    },
    location: { lat: 36.76, lng: -2.609 },
    featured: true,
    reviews: [
        { id: 1, author: 'Emily R.', rating: 5, comment: 'The best coffee I have had in Spain! And the carrot cake is to die for.' },
        { id: 2, author: 'David L.', rating: 4, comment: 'A lovely, quiet spot to read and enjoy a coffee.' },
    ],
  },
    {
    id: '4',
    name: 'Pizzeria La Mamma',
    category: 'Restaurant',
    description: 'Authentic Italian pizza baked in a wood-fired oven.',
    longDescription: 'Pizzeria La Mamma brings a slice of Italy to Roquetas de Mar. Our pizzas are made with traditional techniques and the finest ingredients, baked to perfection in our wood-fired oven. A casual and friendly place for the whole family.',
    images: ['https://picsum.photos/600/400?random=8', 'https://picsum.photos/600/400?random=9'],
    contact: {
      phone: '+34 950 98 76 54',
      website: 'https://lamammapizza.es',
    },
    address: {
      street: 'Calle Real, 50',
      city: 'Roquetas de Mar',
      zip: '04740',
    },
    location: { lat: 36.762, lng: -2.611 },
    featured: false,
    reviews: [],
  },
  {
    id: '5',
    name: 'Bar de Tapas El Rincón',
    category: 'Bar',
    description: 'Traditional Spanish tapas with a wide selection of local wines.',
    longDescription: 'Experience the true flavor of Andalusia at El Rincón. We offer a vibrant atmosphere where you can enjoy a wide variety of tapas, from classic patatas bravas to creative daily specials. Pair them with a glass of wine from our curated local selection.',
    images: ['https://picsum.photos/600/400?random=10', 'https://picsum.photos/600/400?random=11'],
    contact: {
      phone: '+34 950 24 68 10',
      website: 'https://elrincontapas.es',
    },
    address: {
      street: 'Calle San José, 22',
      city: 'Roquetas de Mar',
      zip: '04740',
    },
    location: { lat: 36.759, lng: -2.608 },
    featured: true,
    reviews: [
      { id: 1, author: 'Sophie B.', rating: 5, comment: 'Incredible variety of tapas. Every single one was delicious!' },
    ],
  },
  {
    id: '6',
    name: 'Hotel Bahía Serena',
    category: 'Hotel',
    description: 'Family-friendly hotel with beachfront access and great amenities.',
    longDescription: 'Hotel Bahía Serena is the ideal choice for a family vacation, offering spacious rooms, stunning sea views, and direct access to the beach. Enjoy our pools, restaurants, and daily entertainment programs. Everything you need for a perfect getaway.',
    images: ['https://picsum.photos/600/400?random=16', 'https://picsum.photos/600/400?random=17', 'https://picsum.photos/600/400?random=18'],
    contact: {
      phone: '+34 950 11 22 33',
      website: 'https://hotelbahiaserena.es',
    },
    address: {
      street: 'Av. de las Gaviotas, 15',
      city: 'Roquetas de Mar',
      zip: '04740',
    },
    location: { lat: 36.745, lng: -2.62 },
    featured: true,
    reviews: [
      { id: 1, author: 'Mark C.', rating: 5, comment: 'Perfect location and fantastic facilities for kids.' },
    ],
  },
  {
    id: '7',
    name: "Lilly's Bar",
    category: 'Cafe',
    description: 'A friendly local bar with a great atmosphere and live sports.',
    longDescription: "Lilly's Bar is a popular spot in Roquetas de Mar, known for its welcoming staff and lively ambiance. It's the perfect place to enjoy a drink with friends, watch live sports on our big screens, or just relax after a day at the beach. We offer a wide selection of international and local beers, wines, and spirits, as well as classic bar snacks.",
    images: ['https://picsum.photos/600/400?random=19', 'https://picsum.photos/600/400?random=20'],
    contact: {
      phone: '+34 123 456 789',
      website: '#',
    },
    address: {
      street: 'Av. de las Marinas, 123',
      city: 'Roquetas de Mar',
      zip: '04740',
    },
    location: { lat: 36.755, lng: -2.612 },
    featured: false,
    reviews: [
      { id: 1, author: 'Chris G.', rating: 5, comment: 'Fantastic atmosphere and the staff are brilliant. Will be back!' },
      { id: 2, author: 'Sarah P.', rating: 4, comment: 'Great place to watch the football. Good prices too.' },
    ],
  },
];

export const events: Event[] = [
  {
    id: '1',
    name: 'Noche de San Juan',
    description: 'Celebrate the shortest night of the year with bonfires, music, and fireworks on the beach.',
    date: 'June 23, 2024',
    time: '21:00',
    location: 'Playa de la Romanilla',
    image: 'https://picsum.photos/600/400?random=12',
  },
  {
    id: '2',
    name: 'Festival de Flamenco',
    description: 'A week-long festival showcasing the best flamenco artists from across Andalusia.',
    date: 'July 15-22, 2024',
    time: '20:00',
    location: 'Castillo de Santa Ana',
    image: 'https://picsum.photos/600/400?random=13',
  },
  {
    id: '3',
    name: 'Mercado Medieval',
    description: 'Step back in time with a medieval market featuring crafts, food, and entertainment for all ages.',
    date: 'August 5-7, 2024',
    time: '10:00 - 22:00',
    location: 'Old Town Center',
    image: 'https://picsum.photos/600/400?random=14',
  },
  {
    id: '4',
    name: 'Roquetas de Mar Half Marathon',
    description: 'Join thousands of runners in the annual half marathon along the scenic coastline.',
    date: 'September 18, 2024',
    time: '09:00',
    location: 'Paseo Marítimo',
    image: 'https://picsum.photos/600/400?random=15',
  },
];
