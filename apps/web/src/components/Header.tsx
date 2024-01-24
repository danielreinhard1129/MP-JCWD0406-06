/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from '@heroicons/react/16/solid';
import { useState, useRef, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { loginAction, logoutAction } from '@/lib/features/userSlice';
import axios from 'axios';

export const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const user = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  const handleLogout = () => {
    localStorage.removeItem('token_auth');
    dispatch(logoutAction());
  };
  const baseUrl = 'http://localhost:8000/api';

  useEffect(() => {
    const token = localStorage.getItem('token_auth');

    const keepLogin = async () => {
      try {
        const { data } = await axios.get(baseUrl + '/users/keeplogin', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        dispatch(loginAction(data.data));
      } catch (error) {
        console.log(error);
      }
    };
    keepLogin();
  }, []);
  return (
    <nav className="h-[13vh] bg-gray-800">
      <div className="w-[95%] md:w-[80%] mx-auto h-[100%] flex items-center justify-between">
        {/* logo */}
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={140} height={140} />
        </Link>
        {/* search button */}
        <div className="h-[50%] hidden flex-[0.7] overflow-hidden bg-gray-200 rounded-md md:flex items-center">
          <input
            type="text"
            placeholder="Search Event (eg. Colll play Conser)"
            className="block pl-[0.5rem] w-[90%] outline-none mx-auto h-[100%] bg-gray-200"
          />

          <MagnifyingGlassIcon className="w-[1.8rem] h-[1.8rem] mr-[1.4rem] cursor-pointer" />
        </div>
        {/* keranjang */}
        <div className="flex items-center justify-center space-x-8">
          <div className="relative">
            <ShoppingBagIcon className="w-[2rem] h-[2rem] text-white cursor-pointer" />
            <div
              className="w-[20px] text-[12px] absolute top-[-7px] right-[-7px] h-[20px] flex items-center text-white
             justify-center font-semibold rounded-full bg-red-600"
            >
              4
            </div>
          </div>
          <HeartIcon className="w-[2rem] h-[2rem] text-white cursor-pointer" />
          <div className="relative">
            <UserIcon
              onClick={() => setShowDropdown(!showDropdown)}
              className="w-[2rem] h-[2rem] text-white cursor-pointer"
            />
            {showDropdown && (
              <div className="absolute left-0 mt-2 w-35 bg-white rounded-md overflow-hidden shadow-xl z-10">
                {!user.id ? (
                  <>
                    <Link
                      href="/login"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white"
                      onClick={() => setShowDropdown(false)}
                    >
                      Login
                    </Link>
                    <Link
                      href="/register"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white"
                      onClick={() => setShowDropdown(false)}
                    >
                      Register
                    </Link>
                  </>
                ) : (
                  <>
                    <div className="block px-4 py-2 text-sm text-gray-700">
                      {user.email}
                    </div>
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white"
                      onClick={() => setShowDropdown(false)}
                    >
                      Profile
                    </Link>
                    <Link
                      href="/login"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white"
                      onClick={handleLogout}
                    >
                      Log-out
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
