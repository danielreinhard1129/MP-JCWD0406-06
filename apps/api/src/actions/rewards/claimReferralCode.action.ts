import { findRefferalRepo } from '@/repositories/user/getUserByReferral.repository';

export const claimReferralCodeAction = async (referralCode: string) => {
  try {
    const result = await findRefferalRepo(referralCode);
    if (!result) {
      return {
        status: 200,
        message: 'Not Found',
      };
    }
    return {
      messege: 'Claim referral code success',
      status: 200,
      result,
    };
  } catch (error) {
    throw error;
  }
};
