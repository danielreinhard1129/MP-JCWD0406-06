/* eslint-disable @next/next/no-img-element */

'use client';

import axios, { AxiosError } from 'axios';
import { Button } from 'flowbite-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as yup from 'yup';
import YupPassword from 'yup-password';
import { IForm } from '../../../../types/form.type';
import { RegisterForm } from './RegisterForm';
YupPassword(yup);

const RegisterCard = () => {
  const baseUrl = 'http://localhost:8000/api';
  const router = useRouter();

  const handleSubmit = async (values: IForm) => {
    try {
      let roleId;

      if (values.roleId === 'customer') {
        roleId = 1;
      } else {
        roleId = 2;
      }
      await axios.post(baseUrl + '/users/register', {
        fullName: values.fullName,
        password: values.password,
        email: values.email,
        contact: values.contact,
        address: values.address,
        referral_number: values.referral_number,
        roleId: roleId,
      });

      toast.success('Register Success', {
        position: 'top-right',
        autoClose: 1000,
        theme: 'light',
      });
      setTimeout(() => {
        router.push('/login');
      }, 3000);
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMsg = error.response?.data || error.message;

        toast.error(errorMsg, {
          position: 'top-right',
          autoClose: 1000,
          theme: 'light',
        });
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="min-h-screen py-5 flex justify-center items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 ">
        <div className="container max-w-5xl flex flex-col md:flex-row bg-slate-700 rounded-md">
          <div className="w-full md:w-1/2 py-[10px] flex flex-col justify-center items-center">
            <h1 className="text-zinc-300 font-bold text-2xl ml-3 mb-5 mt-5">
              Welcome Back!
            </h1>
            <p className="text-center text-yellow-200 text-sm mx-auto w-full md:w-auto">
              Already have an account ?
              <br /> To keep connected with us please login with your personal
              info
            </p>
            <Link href={'/login'}>
              <Button className="mt-[20px]" color="light" pill>
                Sign In
              </Button>
            </Link>
          </div>
          <div className="w-full md:w-1/2 p-5">
            <div className="flex justify-center bg-white h-full rounded-md">
              <RegisterForm onSubmit={handleSubmit} />{' '}
              {/* use RegisterForm here */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterCard;
