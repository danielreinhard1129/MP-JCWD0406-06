'use client';

import Image from "next/image";

function Footer() {
  return (
    <div className="pt-[3rem] pb-[3rem] bg-gray-800">
      <div className="w-[80%] border-b-[1.2px] pb-[2rem] border-b-slate-500 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[3rem]">
        <div>
          <h1 className="text-[25px] uppercase text-white mb-[1rem]">
            Symphony Event{' '}
          </h1>
          <p className="text-[14px] text-white opacity-60">
            Selaras dengan Symphony, kami menghadirkan pengalaman event yang
            menyatukan keindahan, kecerdasan, dan koneksi yang harmonis.
          </p>
          <p className="text-[14px] mt-[1.4rem] text-white opacity-80">
            (+62 0856 000 366 -@wiilySimatupang )
          </p>
        </div>
        <div className="lg:mx-auto">
          <h1 className="text-[20px] text-white mb-[1.5rem]">Information</h1>
          <p className="footer_link">About Us</p>
          <p className="footer_link">Privacy Police</p>
          <p className="footer_link">Return Police</p>
          <p className="footer_link">Shipping Police</p>
          <p className="footer_link">Propshipping</p>
        </div>
        <div className="lg:mx-auto">
          <h1 className="text-[20px] text-white mb-[1.5rem]">Account</h1>
          <p className="footer_link">Dashboard</p>
          <p className="footer_link">My Orders</p>
          <p className="footer_link">Account Details</p>
          <p className="footer_link">Track My Orders</p>
        </div>
        <div className="lg:mx-auto">
          <h1 className="text-[20px] text-white mb-[1.5rem]">Shop</h1>
          <p className="footer_link">Affiliate</p>
          <p className="footer_link">Best Sellers</p>
          <p className="footer_link">Latest Product</p>
          <p className="footer_link">Sale Product</p>
        </div>
      </div>
      <div className=" mt-[2rem] grid grid-cols-1 gap-[1.4rem] sm:grid-cols-2 justify-between w-[80%] mx-auto">
        <p className="text-[14px] text-white opacity-60">&#169;Copyright Symphony 2024 </p>
        <Image src={'/images/payments/Payment.webp'} width={280} height={250} alt="Payment method" className="object-contain sm:ml-auto" />
      </div>
    </div>
  );
}
export default Footer;
