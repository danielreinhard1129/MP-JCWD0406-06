import prisma from '@/prisma';

export const updatePointById = async (pointByUserId: number) => {
  try {
    const result = await prisma.point.updateMany({
      where: { userId: pointByUserId },
      data: { amount: 0 },
    });
    return result;
  } catch (error) {
    throw error;
  }
};
