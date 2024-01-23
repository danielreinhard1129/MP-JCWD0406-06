/* eslint-disable @next/next/no-img-element */

'use client'; // Fix typo

import axios, { AxiosError } from 'axios';
import { Button, Label, TextInput } from 'flowbite-react';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const LoginCard = () => {
  const [inputReferral, setInputReferral] = useState('');
  const [success, setSuccess] = useState(false);
  const baseUrl = 'http://localhost:8000/api';
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      password: '',
      email: '',
    },
    onSubmit: async (values) => {
      try {
        await axios.post(baseUrl + '/users/login', {
          password: values.password,
          email: values.email,
        });
        alert('Login success');
        router.push('/');
      } catch (error) {
        if (error instanceof AxiosError) {
          const errorMsg = error.response?.data || error.message;
          alert(errorMsg);
        }
      }

      console.log(values);
    },
  });

  return (
    <>
      <div className="min-h-screen flex justify-center items-center">
        <div className="container max-w-4xl flex flex-col md:flex-row bg-slate-700 rounded-md">
          <div className="w-full md:w-1/2 pl-[10px] flex flex-col justify-center items-center">
            <h1 className="text-zinc-300 font-bold text-2xl mt-5">
              Hello, Friends!
            </h1>
            <p className="text-center pr-2 md:text-center text-yellow-200 text-sm">
              Enter your personal details and start journey with us
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
                onSubmit={formik.handleSubmit}
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
                    value={formik.values.email}
                    onChange={formik.handleChange}
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
                  <TextInput
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    id="password"
                    type="password"
                    required
                    shadow
                  />
                </div>

                <Button color="dark" type="submit">
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
