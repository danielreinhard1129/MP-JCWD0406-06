import { excludeFields } from '@/helper/excludeFields';
import { comparePasswords } from '@/lib/bcrypt';
import { createToken } from '@/lib/jwt';
import { getUserByEmail } from '@/repositories/user/getUserByEmail';
import { IUser } from '@/types/user.type';

export const keepLoginAction = async (email: string) => {
  try {
    const user = await getUserByEmail(email);

    if (!user) throw new Error('Account not found!');

    const dataWithoutPassword = excludeFields(user, ['password']);

    return {
      message: 'Keep Login success',
      data: dataWithoutPassword,
    };
  } catch (error) {
    throw error;
  }
};
