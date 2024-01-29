export interface IUser {
  id: number;
  fullName: string;
  password: string;
  email: string;
  updateAt: Date;
  createdAt: Date;
  contact: string;
  address: string;
  roleId: number;
  referral_number: string;
}
