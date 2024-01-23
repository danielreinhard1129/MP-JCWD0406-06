import { Router } from "express";

import { uploader } from "@/middleware/uploader";
import { eventController } from "@/controllers/events/contollerEvents";

export class EventRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  private routes(): void {
    // Get all events
    this.router.get("/events", eventController.getAllevents);

    // Get event by id
    this.router.get("/events/:id", eventController.getEventById);
    this.router.post("/events", eventController.createEvent);
    this.router.post(
      "/events/:id/images",
      uploader("IMG", "/events").single("image"),
      eventController.appendImageToEvent
    );
  }
}

export default new EventRouter().router;
