'use client';

import React, { useState } from 'react';
import NextTopLoader from 'nextjs-toploader';
import Link from 'next/link';
import axios, { AxiosError } from 'axios';
import { baseUrl } from '@/utils/config';
import { toast } from 'sonner';
import { Button, Label, TextInput } from 'flowbite-react';
import { useRouter } from 'next/navigation';

const CardForgotPassword = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');

  const handleForgotPassword = async () => {
    try {
      if (!email) {
        return toast('Input cannot be empty !');
      }

      await axios.post(baseUrl + '/users/forgot-password', { email });

      toast.success('Email forgot password sent successfully');
      router.push('/');
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMsg = error.response?.data || error.message;
        toast.error(errorMsg);
      }
    }
  };

  return (
    <main className="flex justify-center items-center min-h-screen p-4">
      <NextTopLoader color="#000" showSpinner={false} />
      <div className="flex justify-center items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 w-full max-w-md mx-auto rounded-lg shadow-md p-6">
        <form className="flex flex-col gap-4 p-10 w-full">
          <h1 className="text-slate-700 font-bold text-2xl ">
            Forgot Password
          </h1>
          <div className="flex justify-center items-center"></div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Email" />
            </div>
            <div className="relative">
              <TextInput
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                type="email"
                required
                shadow
              />
            </div>
          </div>
          <Link href={'/login'}>
            <p className="text-center pr-2 mb-2 md:text-center text-blue-950 text-sm">
              Already remembered ?
            </p>
          </Link>
          <Button color="dark" type="button" onClick={handleForgotPassword}>
            Reset Password
          </Button>
        </form>
      </div>
    </main>
  );
};

export default CardForgotPassword;
