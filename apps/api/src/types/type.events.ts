export interface Event {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  creatorName: string;
  eventDate: Date;
  category: string;
  eventName: string;
  eventTime: string;
  endTime: Date;
  city: string;
  price: number;
  description: string;
  image: string | null;
}
