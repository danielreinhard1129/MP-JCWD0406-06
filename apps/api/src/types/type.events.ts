// types.ts (di frontend)
export interface Event {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  creatorName: string;
  eventDate: Date;
  category: number;
  eventName: string;
  eventTime: string;
  endTime: Date;
  city: string;
  price: number;
  description: string;
  image: string | null;
}

export interface EventDetail extends Event {
  promotor: string;
  ticketPrice: string;
  // Tambahkan properti lain jika diperlukan
}

export interface Review {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  content: string;
  rating: number;
  userId: number;
  eventId: number;
}

export interface EventWithReviews extends EventDetail {
  reviews: Review[];
  // Tambahkan properti lain jika diperlukan
}
