// import { hashPassword } from '@/lib/bcrypt';

import { hashPassword } from '@/lib/bcrypt';
import { nanoid } from '@/lib/nanoid';
import { createPointUser } from '@/repositories/rewards/createPoint';
import { createUserReward } from '@/repositories/rewards/createUserReward';
import { createUser } from '@/repositories/user/createUser';
import { getUserByEmail } from '@/repositories/user/getUserByEmail';
import { findRefferalRepo } from '@/repositories/user/getUserByReferral.repository';
import { IUser } from '@/types/user.type';

export const registerAction = async (body: IUser, referral_number: string) => {
  try {
    const { email, password } = body;

    const userEmail = await getUserByEmail(email);

    if (userEmail) {
      return {
        status: 400,
        message: 'Email already exist',
      };
    }
    // Hashing password
    const hashedPassword = await hashPassword(password);
    body.password = hashedPassword;

    const refferalData = await findRefferalRepo(referral_number);
    const refferal = nanoid();
    const userRegister = await createUser(body, refferal);
    if (refferalData) {
      await createPointUser(refferalData.id),
        await createUserReward(
          userRegister.id,
          1,
          new Date(new Date().getTime() + 90 * 24 * 60 * 60 * 1000),
        );
    }

    return {
      status: 200,
      message: 'Register success',
      refferalData,
    };
  } catch (error) {
    throw error;
  }
};
