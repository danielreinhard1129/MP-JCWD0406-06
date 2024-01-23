import { prisma } from "@/helper/prisma";
import path from "path";

export const eventRepository = {
  createEvent: async (data: any) => {
    return prisma.event.create({
      data,
    });
  },

  // getallevents

  // menambahkan image
  appendImageToEvent: async (eventId: any, imagePath: string | null) => {
    if (imagePath !== null) {
      const imageName = path.basename(imagePath);
      console.log("imageName: " + imageName);

      return prisma.event.update({
        where: {
          id: eventId,
        },
        data: {
          image: imageName,
        },
      });
    } else {
      console.error(Error);
      throw new Error("Image file is missing in the request");
    }
  },

  getAllevents: async () => {
    return prisma.event.findMany();
  },

  getEventById: async (eventId: number) => {
    return prisma.event.findUnique({
      where: {
        id: eventId,
      },
    });
  },
};
