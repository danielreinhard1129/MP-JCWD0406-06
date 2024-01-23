'use client';

import React, { useState } from 'react';
import NextTopLoader from 'nextjs-toploader';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement forgot password logic
    console.log('Forgot password form submitted');
  };

  return (
    <main className="container max-w-7xl mx-auto">
      <NextTopLoader color="#000" showSpinner={false} />
      <div className="flex justify-center items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen">
        <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-purple-800">
            Forgot Password
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-gray-700">
                Email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600"
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ForgotPasswordPage;
