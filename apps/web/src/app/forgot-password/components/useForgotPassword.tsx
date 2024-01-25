// 'use client';

// import { useState, useCallback } from 'react';
// import axios, { AxiosError } from 'axios';
// import { useRouter } from 'next/router';
// import { toast } from 'sonner';
// import { baseUrl } from '@/utils/config';

// export const useForgotPassword = () => {
//   const router = useRouter();
//   const [email, setEmail] = useState<string>('');

//   const handleForgotPassword = useCallback(async () => {
//     try {
//       if (!email) {
//         return toast('Input cannot be empty !');
//       }

//       const endpoint = `${baseUrl}/users/forgot-password`;
//       await axios.post(endpoint, { email });

//       toast('Email forgot password sent successfully');
//       router.push('/');
//     } catch (error) {
//       if (error instanceof AxiosError) {
//         const errorMsg = error.response?.data || error.message;
//         toast(errorMsg);
//       }
//     }
//   }, [email, router]);

//   return { email, setEmail, handleForgotPassword };
// };
