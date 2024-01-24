/* eslint-disable @next/next/no-img-element */

'use client'; // Fix typo

import { loginAction } from '@/lib/features/userSlice';
import { useAppDispatch } from '@/lib/hooks';
import axios, { AxiosError } from 'axios';
import { Button, Label, TextInput } from 'flowbite-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'sonner';

const LoginCard = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const baseUrl = 'http://localhost:8000/api';

  const handleLogin = async () => {
    try {
      if (!email || !password) {
        return toast.error('Inputs cannot be empty');
      }

      const { data } = await axios.post(baseUrl + '/users/login', {
        email,
        password,
      });
      dispatch(loginAction(data.data));
      localStorage.setItem('token_auth', data.token);

      toast.success('Login Success');
      setTimeout(() => {
        router.push('/');
      }, 1000);
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMsg = error.response?.data || error.message;

        toast.error(errorMsg, {
          position: 'top-right',
        });
      }
    }
  };

  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 ">
        <div className="container max-w-4xl flex flex-col md:flex-row bg-slate-700 rounded-md mx-4">
          <div className="w-full md:w-1/2 pl-[10px] flex flex-col justify-center items-center">
            <h1 className="text-zinc-300 font-bold text-2xl mt-5">
              Hello, Friends !
            </h1>
            <p className="text-center pr-2 md:text-center text-yellow-200 text-sm">
              Please Enter your personal details
              <br /> and start journey with us !
            </p>
            <Link href={'/register'}>
              <Button className="mt-[20px]" color="light" pill>
                Sign Up
              </Button>
            </Link>
          </div>
          <div className="w-full md:w-1/2 p-5">
            <div className="bg-white h-full rounded-md">
              <form
                className="flex max-w-md flex-col gap-4 p-10"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleLogin();
                }}
              >
                <div className="flex justify-center items-center">
                  <h1 className="text-slate-700 font-bold text-2xl ">
                    Sign In Here
                  </h1>
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="email" value="Email" />
                  </div>
                  <TextInput
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    type="email"
                    placeholder="yourmail@mail.com"
                    required
                    shadow
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="password" value="Password" />
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
                <Link href={'/forgot-password'}>
                  <p className="text-center pr-2 md:text-center text-blue-950 text-sm">
                    Forgot Password ?
                  </p>
                </Link>
                <Button color="dark" type="button" onClick={handleLogin}>
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginCard;
