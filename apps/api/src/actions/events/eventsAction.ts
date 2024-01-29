import { eventRepository } from "@/repositories/events/eventsRepo";

export const eventAction = {
  createEvent: async (eventData: any) => {
    return eventRepository.createEvent(eventData);
  },

  appendImageToEvent: async (eventId: number, imagePath: string) => {
    return eventRepository.appendImageToEvent(eventId, imagePath);
  },
  getAllevents: async () => {
    return eventRepository.getAllevents();
  },

  getEventById: async (eventId: number) => {
    return eventRepository.getEventById(eventId);
  },
  editEvent: async (eventId: number, eventData: any) => {
    return eventRepository.editEvent(eventId, eventData);
  },
  deleteEvent: async (eventId: number) => {
    return eventRepository.deleteEvent(eventId);
  },
  getEventsByCategory: async (categoryId: number) => {
    return eventRepository.getEventsByCategory(categoryId);
  },
};
