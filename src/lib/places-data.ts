import type { PlaceOfInterest } from './types';

export const places: PlaceOfInterest[] = [
    {
        id: 'place-1',
        name: 'Playa Serena',
        category: 'Beach',
        description: 'A wide, popular blue-flag beach known for its excellent facilities and calm waters.',
        longDescription: 'Playa Serena is one of the most well-known beaches in Roquetas de Mar. It boasts a long promenade, numerous chiringuitos (beach bars), and rental services for sunbeds and water sports. Its fine sand and gentle slope into the sea make it perfect for families with children. The beach is kept impeccably clean and has been awarded the Blue Flag for its quality and services.',
        images: ['https://picsum.photos/seed/serena-beach/800/600', 'https://picsum.photos/seed/serena-sunset/800/600'],
        location: { lat: 36.726, lng: -2.631 },
    },
    {
        id: 'place-2',
        name: 'Playa de la Urbanización',
        category: 'Beach',
        description: 'A long stretch of sandy beach adjacent to the Playa Serena golf course.',
        longDescription: 'Stretching for several kilometers, this beach is a continuation of Playa Serena and offers a more relaxed atmosphere. It is bordered by a popular promenade perfect for walking, cycling, and jogging. The beach is spacious, ensuring you can always find a quiet spot even during peak season. It features several access points and is equipped with showers and lifeguard services.',
        images: ['https://picsum.photos/seed/urbanizacion-beach/800/600', 'https://picsum.photos/seed/beach-walk/800/600'],
        location: { lat: 36.74, lng: -2.62 },
    },
    {
        id: 'place-3',
        name: 'Punta Entinas-Sabinar Nature Reserve',
        category: 'Nature',
        description: 'A protected coastal wetland and dune system, ideal for birdwatching and hiking.',
        longDescription: 'This beautiful nature reserve is a haven for wildlife, especially migratory birds. It features a unique landscape of sand dunes, salt marshes, and small lakes. Visitors can explore the area via several marked trails, either on foot or by bicycle. It\'s a perfect escape for nature lovers looking for tranquility away from the busier tourist areas. The reserve also includes pristine, undeveloped beaches.',
        images: ['https://picsum.photos/seed/entinas-sabinar/800/600', 'https://picsum.photos/seed/flamingos/800/600'],
        location: { lat: 36.70, lng: -2.69 },
    },
    {
        id: 'place-4',
        name: 'Castillo de Santa Ana',
        category: 'Monument',
        description: 'A restored coastal fortress that now hosts art exhibitions and cultural events.',
        longDescription: 'Originally built in the 17th century as a defense against pirates, the Castillo de Santa Ana has been beautifully restored and is now a cultural hub. It offers stunning views of the port and the coastline. The castle regularly hosts art exhibitions, concerts, and other events, making it a key cultural landmark in Roquetas de Mar. The adjacent lighthouse is also a picturesque spot.',
        images: ['https://picsum.photos/seed/santa-ana-castle/800/600', 'https://picsum.photos/seed/castle-view/800/600'],
        location: { lat: 36.753, lng: -2.606 },
    },
];
