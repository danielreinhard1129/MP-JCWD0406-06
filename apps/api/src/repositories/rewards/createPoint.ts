import prisma from '@/prisma';

export const createPointUser = async (userId: number) => {
  try {
    const result = await prisma.point.upsert({
      where: { userId },
      update: {
        amount: { increment: 10000 },
        expired: new Date(new Date().getTime() + 90 * 24 * 60 * 60 * 1000), // Menambah masa kedaluwarsa saat melakukan update
      },
      create: {
        userId,
        amount: 10000,
        expired: new Date(new Date().getTime() + 90 * 24 * 60 * 60 * 1000),
      }, // Membuat row baru jika userId belum ada
    });
    return result;
  } catch (error) {
    throw error;
  }
};
