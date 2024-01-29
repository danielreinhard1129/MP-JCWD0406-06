import prisma from "@/prisma";
import { Event } from "@/types/type.events";
import path from "path";

export const eventRepository = {
  createEvent: async (data: any) => {
    const { categoryId, ...eventData } = data;
    return prisma.event.create({
      data: {
        ...eventData,
        category: {
          connect: { id: categoryId },
        },
      },
    });
  },

  // menambahkan image
  appendImageToEvent: async (eventId: any, imagePath: string | null) => {
    if (imagePath !== null) {
      const imageName = path.basename(imagePath);
      const imagePathWithSlash = `/${imageName}`;
      console.log("imageName: " + imagePathWithSlash);

      return prisma.event.update({
        where: {
          id: eventId,
        },
        data: {
          image: imagePathWithSlash,
        },
      });
    } else {
      console.error(Error);
      throw new Error("Image file is missing in the request");
    }
  },
  getEventsByCategory: async (categoryId: number) => {
    const events = await prisma.event.findMany({
      where: {
        categoryId,
      },
      include: {
        category: true,
      },
    });

    return events.map((event) => ({
      ...event,
      categoryTitle: event.category.title,
    }));
  },

  getAllevents: async () => {
    const events = await prisma.event.findMany({
      include: {
        category: true,
      },
    });

    return events.map((event) => ({
      ...event,
      categoryTitle: event.category.title,
    }));
  },

  getEventById: async (eventId: number) => {
    const event = await prisma.event.findUnique({
      where: {
        id: eventId,
      },
      include: {
        category: true,
        Review: true,
      },
    });

    if (!event) {
      return null;
    }

    return {
      ...event,
      categoryTitle: event.category.title,
      reviews: event.Review,
    };
  },

  // EDIT EVENT
  editEvent: async (eventId: number, data: any) => {
    const { categoryId, ...eventData } = data;

    console.log("Updating event with ID:", eventId);
    console.log("New event data:", eventData);

    try {
      const updatedEvent = await prisma.event.update({
        where: {
          id: eventId,
        },
        data: {
          ...eventData,
          category: {
            connect: { id: categoryId },
          },
        },
      });

      console.log("Event updated successfully:", updatedEvent);

      return updatedEvent;
    } catch (error) {
      console.error("Error updating event:", error);
      throw error;
    }
  },

  // DELETE EVENT

  deleteEvent: async (eventId: number) => {
    return prisma.event.delete({
      where: {
        id: eventId,
      },
    });
  },

  // createTransaction: async (
  //   userId: number,
  //   eventId: number,
  //   qty: number,
  //   total: number,
  //   pointsUsed: number,
  //   discountId: number | null,
  //   userRewardId: number | null
  // ) => {
  //   // Create transaction
  //   const createTransaction = await prisma.transaction.create({
  //     data: {
  //       userId,
  //       eventId,
  //       qty,
  //       total,
  //       pointsUsed,
  //     },
  //   });

  //   // Update event's booked count
  //   await prisma.event.update({
  //     where: { id: eventId },
  //     data: { booked: { increment: qty } },
  //   });

  //   // Apply discount if available
  //   if (discountId) {
  //     await prisma.transactionDiscount.create({
  //       data: { discountId, transactionId: createTransaction.id },
  //     });
  //   }

  //   // Deduct user's points if used
  //   if (pointsUsed > 0) {
  //     // Feature to deduct user's points
  //     // Implement this based on your logic
  //   }

  //   // Process user reward if available
  //   if (userRewardId) {
  //     await prisma.userReward.update({
  //       where: { id: userRewardId },
  //       data: { isUsed: true },
  //     });

  //     await prisma.transactionUserReward.create({
  //       data: {
  //         userRewardId,
  //         transactionId: createTransaction.id,
  //       },
  //     });

  //     // Additional logic for user reward
  //     // Implement this based on your logic
  //   }

  //   return createTransaction;
  // },
};
