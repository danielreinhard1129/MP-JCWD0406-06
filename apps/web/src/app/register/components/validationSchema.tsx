import * as yup from 'yup';
import YupPassword from 'yup-password';
YupPassword(yup);

export const validationSchema = yup.object().shape({
  fullName: yup
    .string()
    .required('Full Name cannot be empty')
    .test(
      'no-at-sign',
      'Username cannot contain "@"',
      (value) => !value || value.indexOf('@') === -1,
    ),
  contact: yup
    .string()
    .matches(
      /^\+?[1-9][0-9\-]+$/,
      'Invalid phone number format. Cannot start with 0',
    )
    .max(13)
    .min(4, 'Phone number must be at least 4 digits')
    .required('Contact cannot be empty'),
  address: yup.string().required('Address cannot Empty !'),
  referral_number: yup.string(),
  email: yup.string().email().required('Email cannot Empty !'),
  roleId: yup.string().required('Select Role !'),
  password: yup
    .string()
    .required('Password cannot be empty !')
    .min(6)
    .minLowercase(1)
    .minNumbers(1)
    .minSymbols(1)
    .minUppercase(1),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Password must match')
    .required('Password cannot be empty'),
});
