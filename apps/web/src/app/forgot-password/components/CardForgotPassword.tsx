// 'use client';
// import React, { useState, useCallback } from 'react';
// import axios, { AxiosError } from 'axios';
// import { useRouter } from 'next/navigation';
// import { toast } from 'sonner';
// import NextTopLoader from 'nextjs-toploader';
// import Link from 'next/link';
// import { Button, Label } from 'flowbite-react';
// import { baseUrl } from '@/utils/config';

// const useForgotPassword = () => {
//   const [email, setEmail] = useState('');
//   const router = useRouter();

//   const handleForgotPassword = useCallback(async () => {
//     try {
//       await axios.post(baseUrl + '/users/forgot-password', { email });
//       toast.success('Email forgot password sent successfully');

//       setTimeout(() => {
//         router.push('/login');
//       }, 1000);
//     } catch (error) {
//       if (error instanceof AxiosError) {
//         const errorMsg = error.response?.data || error.message;
//         toast.error(errorMsg);
//       }
//     }
//   }, [email, router]);

//   return { email, setEmail, handleForgotPassword };
// };

// const CardForgotPassword = () => {
//   const { email, setEmail, handleForgotPassword } = useForgotPassword();

//   return (
//     <main className="container max-w-7xl mx-auto r">
//       <NextTopLoader color="#000" showSpinner={false} />
//       <div className="flex justify-center items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen">
//         <div className="max-w-md w-full p-6 mx-5 bg-white rounded-lg shadow-md">
//           <h2 className="text-2xl font-bold mb-4 text-purple-800 font">
//             Forgot Password
//           </h2>
//           <form>
//             <div className="mb-4">
//               <Label htmlFor="email" className="block mb-2 text-gray-700">
//                 Email:
//               </Label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
//               />
//             </div>
//             <Link href={'/login'}>
//               <p className="text-center pr-2 mb-2 md:text-center text-blue-950 text-sm">
//                 Already remembered ?
//               </p>
//             </Link>
//             <Button
//               type="button"
//               className="w-full bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600"
//               onClick={handleForgotPassword}
//             >
//               Reset Password
//             </Button>
//           </form>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default CardForgotPassword;
