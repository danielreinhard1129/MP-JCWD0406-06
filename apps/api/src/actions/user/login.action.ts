import { getUserByEmail } from '@/repositories/user/getUserByEmail';
import { IUser } from '@/types/user.type';

export const registerAction = async (data: IUser) => {
  try {
    const user = await getUserByEmail(data.email);

    if (user) throw new Error('Email already exist');

    return {
      message: 'Register success',
      status: 200,
    };
  } catch (error) {
    throw error;
  }
};
