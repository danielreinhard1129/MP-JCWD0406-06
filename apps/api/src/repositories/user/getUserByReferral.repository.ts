import prisma from '@/prisma';

export const findRefferalRepo = async (referral_number?: string) => {
  try {
    const result = await prisma.user.findUnique({
      where: { referral_number },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};
