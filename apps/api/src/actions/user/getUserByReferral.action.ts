import { findRefferalRepo } from '@/repositories/user/getUserByReferral.repository';

export const getUserByReferralAction = async (referralNumber: string) => {
  try {
    const user = await findRefferalRepo(referralNumber);

    if (!user) {
      throw new Error('User not found with the specified referral number');
    }

    return {
      user,
      message: 'User found by referral number',
      status: 200,
    };
  } catch (error) {
    throw error;
  }
};
