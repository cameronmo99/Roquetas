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
    longDescription: `Located right on Playa Serena in Roquetas de Mar, Hotel Bahía Serena is a 4-star aparthotel offering a blend of apartment-style comfort, family-friendly amenities, and a prime seaside setting.

Accommodation & Layout
- The hotel features 222 to 240 air-conditioned apartments, ranging from approx. 45m² to 70m², with 1 or 2 bedrooms, living/dining areas, fully equipped kitchenettes, and private terraces offering lateral or sea views. Interiors include satellite TV, kitchen appliances, safes, Wi-Fi, and daily housekeeping with towel changes.

Dining & Refreshments
- Two restaurants (buffet and à la carte), a cafeteria, snack bar, poolside bar, and even access to 15 beach bars cater to a range of tastes. Buffet options often include show cooking and kid-friendly choices.

Pools, Beach & Leisure Facilities
- The hotel offers two outdoor pools (one with a water slide, plus pool bar and loungers) and an indoor heated pool.
- Direct access to Playa Serena Beach—one of Roquetas de Mar’s awarded Blue Flag beaches—is a standout feature.
- On-site leisure activities include a mini-club, playground, live entertainment, table tennis, arcade/game room, and fitness centre with sauna and spa services.

Facilities & Services
- Guests benefit from a 24-hour reception, laundry service, snack and beauty salon, underground parking (approx. €20/day), and conference/meeting spaces for events.
- The hotel is wheelchair accessible, with lifts and accessible units.

Location & Nearby Attractions
- Situated in the heart of the Playa Serena urbanisation, it's within walking distance of shops, restaurants, public transport (≈100 m), and attractions like the Santa Ana Castle and Punta Entinas-Sabinar Natural Park.
- Almería airport is about 36 km away.

Summary

Feature Highlights
Location: Beachfront on Playa Serena; close to shops, transport, and local attractions
Accommodation: Spacious, well-equipped aparthotel-style rooms with sea views and kitchens
Amenities: Multiple pools, spa, fitness, minibars, multiple dining venues, entertainment
Family-Friendly: Mini-club, playground, animations, game room—great for all ages
Facilities: Parking, laundry, conference spaces; accessibility services
Atmosphere: Good value, relaxed, best suited for families or holiday stays rather than romantic escapes

If you're looking for a convenient, beachfront family-friendly option in Roquetas de Mar, Bahía Serena offers a comfortable stay with plenty to do on-site and nearby.`,
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
    images: ['https://media-cdn.tripadvisor.com/media/photo-s/0f/0e/68/82/lilly-s-bar.jpg', 'https://picsum.photos/600/400?random=20'],
    contact: {
      phone: '+34 123 456 789',
      website: '#',
    },
    address: {
      street: 'Av. de Playa Serena, 204',
      city: 'Roquetas de Mar, Almería',
      zip: '04740',
    },
    location: { lat: 36.7224167, lng: -2.6292778 },
    featured: false,
    reviews: [
      { id: 1, author: 'Chris G.', rating: 5, comment: 'Fantastic atmosphere and the staff are brilliant. Will be back!' },
      { id: 2, author: 'Sarah P.', rating: 4, comment: 'Great place to watch the football. Good prices too.' },
    ],
  },
  {
    id: '8',
    name: 'Doner Kebab "El Turco"',
    category: 'Takeaway',
    description: 'Quick and delicious kebabs, perfect for a late-night snack.',
    longDescription: 'Craving a delicious and fast meal? El Turco serves authentic doner kebabs, falafel wraps, and more. We use fresh ingredients to prepare your food quickly, making it the ideal choice for a meal on the go or a late-night craving.',
    images: ['https://picsum.photos/seed/kebab/600/400'],
    contact: { phone: '+34 950 33 44 55', website: '#' },
    address: { street: 'Calle Mástil, 10', city: 'Roquetas de Mar', zip: '04740' },
    location: { lat: 36.755, lng: -2.612 },
    featured: false,
    reviews: [{ id: 1, author: 'Tom H.', rating: 4, comment: 'Best kebab in town, hands down.' }],
  },
  {
    id: '9',
    name: 'Apartamentos Estrella de Mar',
    category: 'Apartment',
    description: 'Modern holiday apartments with a shared pool and sea views.',
    longDescription: 'Estrella de Mar offers comfortable and modern self-catering apartments, perfect for families and couples. Each unit includes a fully equipped kitchen, a private balcony, and access to our beautiful garden and swimming pool area.',
    images: ['https://picsum.photos/seed/apartment/600/400'],
    contact: { phone: '+34 950 66 77 88', website: 'https://estrelladelmar.es' },
    address: { street: 'Av. de las Sirenas, 45', city: 'Roquetas de Mar', zip: '04740' },
    location: { lat: 36.748, lng: -2.618 },
    featured: true,
    reviews: [],
  },
  {
    id: '10',
    name: 'Gran Plaza Shopping Centre',
    category: 'Shop',
    description: 'The largest shopping mall in the area with a variety of stores.',
    longDescription: 'Gran Plaza is your one-stop destination for shopping, dining, and entertainment. Featuring dozens of international and national brands, a large supermarket, a multi-screen cinema, and a food court with numerous options.',
    images: ['https://picsum.photos/seed/mall/600/400'],
    contact: { phone: '+34 950 00 11 22', website: 'https://granplazaroquetas.com' },
    address: { street: 'Av. de la Unión Europea, s/n', city: 'Roquetas de Mar', zip: '04740' },
    location: { lat: 36.775, lng: -2.605 },
    featured: false,
    reviews: [],
  },
  {
    id: '11',
    name: 'Souvenirs "El Faro"',
    category: 'Shop',
    description: 'A charming gift shop with local crafts and beachwear.',
    longDescription: 'Take a piece of Roquetas de Mar home with you. El Faro offers a wide selection of locally made pottery, olive oil, and other crafts. We also stock everything you need for a day at the beach, from sunscreen to sandals.',
    images: ['https://picsum.photos/seed/souvenir/600/400'],
    contact: { phone: '+34 950 99 88 77', website: '#' },
    address: { street: 'Paseo del Mar, 88', city: 'Roquetas de Mar', zip: '04740' },
    location: { lat: 36.751, lng: -2.614 },
    featured: false,
    reviews: [],
  },
  {
    id: '12',
    name: 'Pizza & Go',
    category: 'Takeaway',
    description: 'Delicious pizza slices ready in minutes. Perfect for a quick lunch.',
    longDescription: 'When you need a quick, hot, and tasty meal, Pizza & Go is the answer. We offer a variety of classic pizza slices, from Margarita to Pepperoni, all ready to be served in moments. You can also order whole pizzas for takeaway.',
    images: ['https://picsum.photos/seed/pizzago/600/400'],
    contact: { phone: '+34 950 12 12 12', website: '#' },
    address: { street: 'Av. de las Marinas, 112', city: 'Roquetas de Mar', zip: '04740' },
    location: { lat: 36.753, lng: -2.613 },
    featured: false,
    reviews: [{ id: 1, author: 'Alex B.', rating: 5, comment: 'Super fast and super delicious!' }],
  },
  {
    id: '13',
    name: 'Apartamentos Sol y Playa',
    category: 'Apartment',
    description: 'Budget-friendly apartments right next to the beach.',
    longDescription: 'Enjoy a fantastic holiday without breaking the bank. Sol y Playa offers simple but clean and comfortable apartments with kitchenettes and balconies. The location is unbeatable, just a one-minute walk from the main beach.',
    images: ['https://picsum.photos/seed/solplaya/600/400'],
    contact: { phone: '+34 950 45 45 45', website: 'https://solyplayaroquetas.es' },
    address: { street: 'Calle ancha, 33', city: 'Roquetas de Mar', zip: '04740' },
    location: { lat: 36.749, lng: -2.616 },
    featured: false,
    reviews: [],
  },
  {
    id: '14',
    name: 'Mercadona',
    category: 'Shop',
    description: 'Large supermarket with a wide range of groceries and household items.',
    longDescription: 'Mercadona is one of Spain\'s leading supermarket chains, offering a huge selection of fresh produce, meats, fish, pantry staples, and international foods. You can also find personal care products and cleaning supplies.',
    images: ['https://picsum.photos/seed/mercadona/600/400'],
    contact: { phone: '+34 900 50 01 03', website: 'https://mercadona.es' },
    address: { street: 'Av. de Roquetas, 200', city: 'Roquetas de Mar', zip: '04740' },
    location: { lat: 36.765, lng: -2.61 },
    featured: false,
    reviews: [],
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
