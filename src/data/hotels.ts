import type { Hotel } from '@/types/hotel';

export const hotelsData: Hotel[] = [
  {
    id: '1',
    name: 'HOTEL TAROA',
    slug: 'hotel-taroa',
    description: 'Hotel tranquilo frente al mar Caribe, cerca del parque Federman. Habitaciones decoradas con estilo local, Wi-Fi gratis, TV, minibar, caja fuerte. Algunas tienen vista al mar y cocina. Servicios: restaurante, bar, tienda, eventos.',
    images: [
      { src: 'https://imgs.search.brave.com/TQD5jJqn05D9Rv0QNH-kqZrOKehG8IAvigdvHsQTEgI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ob3Rl/bC10YXJvYS1yaW9o/YWNoYS5ob3RlbG1p/eC5lcy9kYXRhL1Bo/b3Rvcy9PcmlnaW5h/bFBob3RvLzIzNjUv/MjM2NTEyLzIzNjUx/Mjg4MS9Ib3RlbC1U/YXJvYS1SaW9oYWNo/YS1FeHRlcmlvci5K/UEVH', alt: 'Hotel Taroa Exterior', hint: 'hotel oceanfront colombia' },
      { src: 'https://static11.com-hotel.com/uploads/hotel/41356/photo/hotel-taroa-riohacha_172518734410.jpg', alt: 'Hotel Taroa Habitación', hint: 'hotel room elegant' },
      { src: 'https://static11.com-hotel.com/uploads/hotel/41356/photo/hotel-taroa-riohacha_17251873436.jpg', alt: 'Hotel Taroa Restaurante', hint: 'hotel restaurant' },
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
      { src: 'https://lh3.googleusercontent.com/place-photos/AJnk2cx_gDAL_9YsKswYbgHaogBQ5RFgAa6yHZ1zwTJpfoW3en5XrOgx6-02DqEp5icUGao6v-hxli8WyEkOK76_YWqTP-01SlJCvPezyfHcr_YU7VP0QK4s7W1bdcOw0vjFnNPBnbxtfTMadVPjnQ=s1600-w700', alt: 'Hotel Gimaura Exterior', hint: 'hotel beach hammock' },
      { src: 'https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAXQCQNSDGZ6byhle2P51NFuATtw-92VTV1Z8GFJCfrvOyAhyu_1ppuCfkdL2hXZH6KAEkRfdxt4m8Dk4JpykImxluJrr0y333hLKCBNziarIMj0VdltamCiodLeE8-urfERzhQUb-uGZ2HaYMJHyT2vPQD421KGQ8ep4e-stdMtCMDrTSJm4jeVlMEfZ4-WTKP4JJ9X33RSxojrO-ZayVcZwg839ZJyz15veFWdZPcmGccfJ9hAz68KtdLnqg3a7hC48zyH-oH79G9egLC104ut5rrxqYjGhHiRbdeeuOPrcQS_uK01mbUHhGOUoCTWrPg17UU7SqH0dmGvaaFHG3uu4S7U4PO4Pc2OgfzBQDJTA66iMNiXKyrwVAxxpgSIHf3sceRRgl4L2Xr5hu7l41EYyQLsB6XybqkReWABt1LYTT9DipPaHsiXHSTttk8wZH3pXi08Fz1J0neZ0OLH8Zrh1IUuycJuPAX1sa_j_G5X6tZaktq4dYF3mrt7IwC6wWbxQfwarGT_NdDWs2vhV1uyPL0Pf5Wa-aSYYFCNtzCV_gcXVSx7Xl8TMuhRN5eHNn13LZ9xvHpvX8Pg_aXMfYmDaIlgplGCQh9uSFEoaeB9wfG3hU3ea4SyH5u6q-vkzje6MGGjhcw&3u700&5m1&2e1&callback=none&r_url=https%3A%2F%2Fwww.waze.com%2Fes%2Flive-map%2Fdirections%2Fhotel-gimaura-%25F0%259F%258F%25A8-riohacha&key=AIzaSyD3pw7nGs7Jal1C4A7G3L9pYxfM6urTeMg&token=14925', alt: 'Hotel Gimaura Piscina', hint: 'hotel pool' },
      { src: 'https://lh3.googleusercontent.com/place-photos/AJnk2czL0hG02A5IHLMC_PDFPTumI3U2tWjnzQlHeTmZTdcb2EMVW1fBwV6cFDOFDu7Du_FQYrYtQClVTdlbIEGfIatWsPwWAy1O7l7tuUz0M0rSnAZClBtjowctjLy5KLQVMhtRsw8OJCKNJZ_Z8Q=s1600-w700', alt: 'Hotel Gimaura Habitación', hint: 'simple hotel room' },
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
      { src: 'https://imgs.search.brave.com/fZk4Q0MKPBtPLPhVjIDET-EX9Jf_I7WOvWrhYDl-2lM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ob3N0/ZWwtbGFndW5hLXNh/bGEtYnktZnNsLXJp/b2hhY2hhLmhvdGVs/bWl4LmVzL2RhdGEv/UGhvdG9zLzQ1MHg0/NTAvNzY1NC83NjU0/NDcvNzY1NDQ3MDM0/L0hvc3RlbC1MYWd1/bmEtU2FsYS1CeS1G/c2wtUmlvaGFjaGEt/RXh0ZXJpb3IuSlBF/Rw', alt: 'Hotel Laguna Salada Exterior', hint: 'hostel colorful facade' },
      { src: 'https://imgs.search.brave.com/8YT9ed78O3VMOH88jLy5AH-iXBoPNja9BOX7dE2QJSg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ob3N0/ZWwtbGFndW5hLXNh/bGEtYnktZnNsLXJp/b2hhY2hhLmhvdGVs/bWl4LmVzL2RhdGEv/UGhvdG9zL09yaWdp/bmFsUGhvdG8vNzI4/MS83MjgxNDIvNzI4/MTQyOTA0L0hvc3Rl/bC1MYWd1bmEtU2Fs/YS1CeS1Gc2wtUmlv/aGFjaGEtRXh0ZXJp/b3IuSlBFRw', alt: 'Hotel Laguna Salada Piscina Azotea', hint: 'hostel rooftop pool' },
      { src: 'https://imgs.search.brave.com/xz_lCG-pMYpA6yxCjwFgKSSbY7oB82H_mPdFzIhcWAo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/ZXJ2aWNlLnZhY2F0/aW9uY290dGFnZS5j/b20vNTAweDMyNS9l/bC1wYXNvLWhvdGVs/LWRvLWFycm95by1k/ZS1hZ3VhLWJjLTkx/OTQxMDMtNC5qcGc', alt: 'Hotel Laguna Salada Dormitorio', hint: 'hostel dorm room' },
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
      { src: 'https://imgs.search.brave.com/8imduGdEIkuQbhysBg2BDF2A7fOoWXY4agMw8_aLK90/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ob3Rl/bC1lbWVyYXdhYS1y/aW9oYWNoYS5ib29r/ZWQubmV0L2RhdGEv/UGhvdG9zL09yaWdp/bmFsUGhvdG8vNzU4/OS83NTg5MDQvNzU4/OTA0MTkzL0hvdGVs/LUVtZXJhd2FhLVJp/b2hhY2hhLUV4dGVy/aW9yLkpQRUc', alt: 'Hotel Emerawaa Exterior', hint: 'comfortable hotel exterior' },
      { src: 'https://imgs.search.brave.com/nuPhqszASAnBwZqHu3q3DmedaXaPMsfw1Qz3ksQ-xbI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ob3Rl/bC1lbWVyYXdhYS1y/aW9oYWNoYS5ob3Rl/bG1peC5lcy9kYXRh/L1Bob3Rvcy9Pcmln/aW5hbFBob3RvLzc1/ODkvNzU4OTAyLzc1/ODkwMjM1NC9Ib3Rl/bC1FbWVyYXdhYS1S/aW9oYWNoYS1FeHRl/cmlvci5KUEVH', alt: 'Hotel Emerawaa Habitación Amplia', hint: 'spacious hotel room' },
      { src: 'https://imgs.search.brave.com/9HBbVD2xDjVHReWL-gHom-o_DtmppeWJZzOUQ9njY3w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9saDMu/Z29vZ2xldXNlcmNv/bnRlbnQuY29tL3Av/QUYxUWlwTnREa2dS/cU9VN2JjTEZMZmdu/UlZKYnNqZW10Z0RJ/d1dDR2pqOVU9czE2/MDAtdzQwMA', alt: 'Hotel Emerawaa Lobby', hint: 'hotel lobby modern' },
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
      { src: 'https://imgs.search.brave.com/HYmgjg2uAcdvgpl3acTb7HiRejm9xSx9YTda-LGxGEs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ob3Rl/bC1icmlzYXMtZGVs/LW1hci5zYW5hbmRy/ZXNob3RlbHMuY29t/L2RhdGEvSW1hZ2Vz/LzEwODB4NzAwdy8x/NDU3NC8xNDU3NDI5/LzE0NTc0Mjk1MzYv/aW1hZ2Utc2FuLWFu/ZHJlcy1zYW4tYW5k/cmVzLWFuZC1wcm92/aWRlbmNpYS1pc2xh/bmRzLWhvdGVsLWJy/aXNhcy1kZWwtbWFy/LTM5LkpQRUc', alt: 'Hotel Brisas del Nare Terraza', hint: 'hotel terrace ocean view' },
      { src: 'https://imgs.search.brave.com/7HlJkrxHpZEcqo4h11miz-NbyLrQXtclsL3PnDOlP98/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9icmlz/YXMtZGVsLW1hci5o/b3RlbGVzLWNvc3Rh/LWF0bGFudGljYS1k/ZS1hcmdlbnRpbmEu/Y29tL2RhdGEvSW1h/Z2VzLzQ1MHg0NTB3/LzEwNzY3LzEwNzY3/MDAvMTA3NjcwMDQy/NC9pbWFnZS1taXJh/bWFyLWJ1ZW5vcy1h/aXJlcy1ob3RlbC1i/cmlzYXMtZGVsLW1h/ci0zNC5KUEVH', alt: 'Hotel Brisas del Nare Habitación', hint: 'cozy hotel room' },
      { src: 'https://imgs.search.brave.com/2PfosJuktvAL8VGbx3Xfl78bO5b2fJg3xi5hhLsQvVE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ob3Rl/bC1icmlzYXNkZWxt/YXIuY29tL2ltYWdl/cy9iYW5uZXJzL2hv/dGVsLWJyaXNhc2Rl/bC1tYXItY29tcGxl/dG8uanBn', alt: 'Hotel Brisas del Nare Vista Mar', hint: 'ocean view window' },
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
