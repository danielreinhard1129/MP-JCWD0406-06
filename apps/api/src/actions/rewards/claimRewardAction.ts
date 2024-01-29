import { deleteUserRewardById } from '@/repositories/rewards/deleteUserRewardById';
import { updatePointById } from '@/repositories/rewards/updatePointById';
import { updateUserVoucherById } from '@/repositories/rewards/updateUserVoucherByid';

interface Data {
  userVoucherId: number;
  userRewardId: number;
  pointByUserId: number;
}

export const claimRewardAction = async (data: Data) => {
  try {
    const { userVoucherId, userRewardId, pointByUserId } = data;

    if (userVoucherId) {
      await updateUserVoucherById(userVoucherId);
    }

    if (userRewardId) {
      await deleteUserRewardById(userRewardId);
    }

    if (pointByUserId) {
      await updatePointById(pointByUserId);
    }

    return {
      message: 'Success claim',
      status: 200,
    };
  } catch (error) {
    throw error;
  }
};
