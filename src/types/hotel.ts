
export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
}

export interface HotelImage {
  src: string;
  alt: string;
  hint: string;
}

export interface Hotel {
  id: string;
  name: string;
  slug: string;
  description: string;
  images: HotelImage[];
  contact: {
    phone: string;
    address: string;
  };
  stars: number;
  rating: {
    average: number;
    count: number;
  };
  featuredReviews: Review[];
}
