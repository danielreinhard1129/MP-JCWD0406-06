'use client';

import { baseUrl } from '@/utils/config';
import axios, { AxiosError } from 'axios';
import { Button, Label, TextInput } from 'flowbite-react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import NextTopLoader from 'nextjs-toploader';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'sonner';

const CardResetPassword = () => {
  const searchParams = useSearchParams();

  const router = useRouter();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const token = searchParams.get('token');

  const handleResetPassword = async () => {
    try {
      if (!password || !confirmPassword) {
        return toast.error('Input cannot be empty !');
      }

      if (password !== confirmPassword) {
        return toast.error('Passwords do not match!');
      }

      await axios.patch(
        baseUrl + '/users/reset-password',
        {
          password,
          confirmPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      toast.success('Reset Password Success');

      router.push('/login');
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMsg = error.response?.data || error.message;
        toast.error(errorMsg);
      }
    }
  };

  return (
    <main className="flex justify-center items-center min-h-screen p-5">
      <NextTopLoader color="#000" showSpinner={false} />
      <div className="flex justify-center items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 w-full max-w-md mx-auto rounded-lg shadow-md p-6">
        <form className="flex flex-col gap-4 p-10 w-full">
          <h1 className="text-slate-700 font-bold text-2xl ">Reset Password</h1>
          <div className="flex justify-center items-center"></div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="Password" value="Password" />
            </div>
            <div className="relative">
              <TextInput
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                type={showPassword ? 'text' : 'password'}
                required
                shadow
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="confirmPassword" value="Confirm Password" />
            </div>
            <div className="relative">
              <TextInput
                onChange={(e) => setConfirmPassword(e.target.value)}
                id="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                required
                shadow
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
          </div>
          <Button color="dark" type="button" onClick={handleResetPassword}>
            Submit
          </Button>
        </form>
      </div>
    </main>
  );
};

export default CardResetPassword;
