import type { Hotel } from '@/types/hotel';

export const hotelsData: Hotel[] = [
  {
    id: '1',
    name: 'HOTEL TAROA',
    slug: 'hotel-taroa',
    description: 'Hotel tranquilo frente al mar Caribe, cerca del parque Federman. Habitaciones decoradas con estilo local, Wi-Fi gratis, TV, minibar, caja fuerte. Algunas tienen vista al mar y cocina. Servicios: restaurante, bar, tienda, eventos.',
    images: [
      { src: 'https://placehold.co/600x400.png', alt: 'Hotel Taroa Exterior', hint: 'hotel oceanfront colombia' },
      { src: 'https://placehold.co/300x200.png', alt: 'Hotel Taroa Habitación', hint: 'hotel room elegant' },
      { src: 'https://placehold.co/300x200.png', alt: 'Hotel Taroa Restaurante', hint: 'hotel restaurant' },
    ],
    contact: {
      phone: '57291122',
      address: 'Cl. 14 #7-77, Riohacha, La Guajira',
    },
    stars: 4,
    rating: {
      average: 4.4,
      count: 904,
    },
    featuredReviews: [
      { id: 'r1-1', author: 'Mónica Hernández', rating: 4, date: 'Hace 1 mes', comment: 'Muy bien ubicado, limpio, desayuno rico, un poco ruidoso por el malecón.' },
      { id: 'r1-2', author: 'Eyler Saravia', rating: 3, date: 'Hace 2 semanas', comment: 'Gran potencial. Deberían tener página web moderna y redes activas.' },
      { id: 'r1-3', author: 'Astrid Ríos', rating: 4, date: 'Hace 3 meses', comment: 'Buena ubicación, atención amable, desayuno sabroso.' },
    ],
  },
  {
    id: '2',
    name: 'HOTEL GIMAURA',
    slug: 'hotel-gimaura',
    description: 'Hotel colorido frente a la playa, cerca del centro. Habitaciones sencillas, algunas con hamaca y vista al mar. Restaurante, piscina, solárium. Incluye desayuno y parqueadero.',
    images: [
      { src: 'https://placehold.co/600x400.png', alt: 'Hotel Gimaura Exterior', hint: 'hotel beach hammock' },
      { src: 'https://placehold.co/300x200.png', alt: 'Hotel Gimaura Piscina', hint: 'hotel pool' },
      { src: 'https://placehold.co/300x200.png', alt: 'Hotel Gimaura Habitación', hint: 'simple hotel room' },
    ],
    contact: {
      phone: '3005104604',
      address: 'Av. La Marina #1E-174, Riohacha',
    },
    stars: 3,
    rating: {
      average: 4.1,
      count: 920,
    },
    featuredReviews: [
      { id: 'r2-1', author: 'Astrid Rozo', rating: 4, date: 'Hace 1 semana', comment: 'Cómodo, limpio, pero necesita remodelación.' },
      { id: 'r2-2', author: 'Catalina Rivera', rating: 4, date: 'Hace 1 mes', comment: 'Excelente servicio, con piscina y cerca de la playa.' },
    ],
  },
  {
    id: '3',
    name: 'HOTEL LAGUNA SALADA BYFSL',
    slug: 'hotel-laguna-salada',
    description: 'Hostal tranquilo con fachada colorida. Dormitorios mixtos y privados con baño, TV. Piscina en la azotea, bar, restaurante, tenis de mesa, cocina común.',
    images: [
      { src: 'https://placehold.co/600x400.png', alt: 'Hotel Laguna Salada Exterior', hint: 'hostel colorful facade' },
      { src: 'https://placehold.co/300x200.png', alt: 'Hotel Laguna Salada Piscina Azotea', hint: 'hostel rooftop pool' },
      { src: 'https://placehold.co/300x200.png', alt: 'Hotel Laguna Salada Dormitorio', hint: 'hostel dorm room' },
    ],
    contact: {
      phone: '57292462',
      address: 'Cl. 3 #4-81, Riohacha',
    },
    stars: 3,
    rating: {
      average: 4.5,
      count: 578,
    },
    featuredReviews: [
      { id: 'r3-1', author: 'Laura Gómez', rating: 5, date: 'Hace 2 semanas', comment: 'Increíble ambiente, la piscina en la azotea es lo mejor. Muy limpio y personal amable.' },
      { id: 'r3-2', author: 'Carlos Pérez', rating: 4, date: 'Hace 1 mes', comment: 'Buena ubicación y excelente relación calidad-precio. La cocina común es muy útil.' },
    ],
  },
  {
    id: '4',
    name: 'HOTEL EMERAWAA',
    slug: 'hotel-emerawaa',
    description: 'Hotel confortable con habitaciones amplias, excelente ubicación en Riohacha. Ideal para descansar en vacaciones.',
    images: [
      { src: 'https://placehold.co/600x400.png', alt: 'Hotel Emerawaa Exterior', hint: 'comfortable hotel exterior' },
      { src: 'https://placehold.co/300x200.png', alt: 'Hotel Emerawaa Habitación Amplia', hint: 'spacious hotel room' },
      { src: 'https://placehold.co/300x200.png', alt: 'Hotel Emerawaa Lobby', hint: 'hotel lobby modern' },
    ],
    contact: {
      phone: '3157308857',
      address: 'Cl. 35 #2-85, Riohacha',
    },
    stars: 3,
    rating: {
      average: 4.5,
      count: 387,
    },
    featuredReviews: [
      { id: 'r4-1', author: 'Sofía Castro', rating: 5, date: 'Hace 3 semanas', comment: 'Habitaciones muy espaciosas y cómodas. El personal fue muy atento durante nuestra estadía.' },
      { id: 'r4-2', author: 'Juan Rodríguez', rating: 4, date: 'Hace 2 meses', comment: 'Ubicación perfecta para explorar Riohacha. El hotel es tranquilo y perfecto para descansar.' },
    ],
  },
  {
    id: '5',
    name: 'HOTEL BRISAS DEL NARE',
    slug: 'hotel-brisas-del-nare',
    description: 'Hotel con terraza y vista al mar. Habitaciones con aire acondicionado, TV por cable y baño privado. Wi-Fi y parqueadero gratis.',
    images: [
      { src: 'https://placehold.co/600x400.png', alt: 'Hotel Brisas del Nare Terraza', hint: 'hotel terrace ocean view' },
      { src: 'https://placehold.co/300x200.png', alt: 'Hotel Brisas del Nare Habitación', hint: 'cozy hotel room' },
      { src: 'https://placehold.co/300x200.png', alt: 'Hotel Brisas del Nare Vista Mar', hint: 'ocean view window' },
    ],
    contact: {
      phone: '3137999968',
      address: 'Cl. 4 #10-05, Riohacha',
    },
    stars: 3,
    rating: {
      average: 4.5,
      count: 263,
    },
    featuredReviews: [
      { id: 'r5-1', author: 'Nidia Muñoz', rating: 5, date: 'Hace 1 mes', comment: 'Excelente atención. Se siente como en casa.' },
      { id: 'r5-2', author: 'Ariana Medina', rating: 5, date: 'Hace 2 semanas', comment: 'Muy acogedor y bien ubicado.' },
      { id: 'r5-3', author: 'Jackson Belzares', rating: 5, date: 'Hace 1 semana', comment: 'Atención excelente, como estar en casa.' },
    ],
  },
];
