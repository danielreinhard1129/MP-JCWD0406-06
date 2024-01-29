import { eventAction } from "@/actions/events/eventsAction";
import { Request, Response } from "express";

export const eventController = {
  // menambahkan event
  createEvent: async (req: Request, res: Response) => {
    try {
      const eventData = req.body;

      const createdEvent = await eventAction.createEvent(eventData);

      return res.status(201).json(createdEvent);
    } catch (error) {
      console.error("Error during event creation:", error);
      return res.status(500).json({ error: "Failed to create event" });
    }
  },
  // menambahkan gambar ke dalam event
  appendImageToEvent: async (req: Request, res: Response) => {
    try {
      const eventId = parseInt(req.params.id);
      if (isNaN(eventId)) {
        throw new Error("invalid eventId.please provide eventId");
      }
      const imagePath = req.file?.path;
      console.log(imagePath);
      if (imagePath) {
        await eventAction.appendImageToEvent(eventId, imagePath);
        return res.status(200).json({ message: "Image appended to event" });
      } else {
        throw new Error("Image file is missing in the request");
      }
    } catch (error) {
      console.error(error);

      res.status(500).json({ error: "Failed to append image to event" });
    }
  },
  // getAll events

  getAllevents: async (req: Request, res: Response) => {
    try {
      const allEvents = await eventAction.getAllevents();
      return res.status(200).json(allEvents);
    } catch (error) {
      console.error("Error getting all events:", error);
      return res.status(500).json({ error: "Failed to get all events" });
    }
  },

  getEventById: async (req: Request, res: Response) => {
    try {
      const eventId = parseInt(req.params.id);
      if (isNaN(eventId)) {
        throw new Error("Invalid eventId. Please provide a valid eventId");
      }
      const event = await eventAction.getEventById(eventId);
      if (event) {
        return res.status(200).json(event);
      } else {
        return res.status(404).json({ error: "Event not found" });
      }
    } catch (error) {
      console.error("Error getting event by id:", error);
      return res.status(500).json({ error: "Failed to get event by id" });
    }
  },

  editEvent: async (req: Request, res: Response) => {
    try {
      const eventId = parseInt(req.params.id);
      if (isNaN(eventId)) {
        throw new Error("Invalid eventId. Please provide a valid eventId");
      }

      const eventData = req.body;
      const editedEvent = await eventAction.editEvent(eventId, eventData);

      return res.status(200).json(editedEvent);
    } catch (error) {
      console.error("Error editing event:", error);
      return res.status(500).json({ error: "Failed to edit event" });
    }
  },

  deleteEvent: async (req: Request, res: Response) => {
    try {
      const eventId = parseInt(req.params.id);
      if (isNaN(eventId)) {
        throw new Error("Invalid eventId. Please provide a valid eventId");
      }

      await eventAction.deleteEvent(eventId);

      return res.status(204).json(); // No content for successful deletion
    } catch (error) {
      console.error("Error deleting event:", error);
      return res.status(500).json({ error: "Failed to delete event" });
    }
  },
  getEventsByCategory: async (req: Request, res: Response) => {
    try {
      const categoryId = parseInt(req.params.categoryId);
      if (isNaN(categoryId)) {
        throw new Error(
          "Invalid categoryId. Please provide a valid categoryId"
        );
      }

      const events = await eventAction.getEventsByCategory(categoryId);

      return res.status(200).json(events);
    } catch (error) {
      console.error("Error getting events by category:", error);
      return res
        .status(500)
        .json({ error: "Failed to get events by category" });
    }
  },
};
