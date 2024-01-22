import prisma from '@/prisma';
import { IUser } from '@/types/user.type';

export const createUser = async (
  data: IUser,
  generateReferralNumber: string,
) => {
  try {
    const { fullName, password, email, contact, address, roleId } = data;
    const result = await prisma.user.create({
      data: {
        fullName,
        password,
        email,
        contact,
        address,
        referral_number: generateReferralNumber,
        roleId,
      },
    });
    return result;
  } catch (error) {
    throw error;
  }
};
