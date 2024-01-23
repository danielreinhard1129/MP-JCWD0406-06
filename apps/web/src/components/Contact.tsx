import Image from 'next/image'
import React from 'react'

const Contact = () => {
    return (
        <div className='pt-[5rem] pb-[3rem] bg-gray-900 '>
            <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[1rem] md:gap-[8rem]'>

                <div>

                    <h1 className='text-[25px] md:text-[30px] lg:text-[35px] leading-[2.4rem] text-white'>
                        Get our Emails for info new Item, sales, and more.

                    </h1>
                    <p className="text-[17px] text-white mt-[0.8rem] mb-[1.5rem] opacity-70">
                        will email you a voucher worth 20.000 off your first order over 50.000

                    </p>
                    <div className='w-[100%] relative h-[2.7rem] mb-[0.3rem] bg-white'>
                        <input type="email"
                            placeholder='Enter your email'
                            className='w-[70%] md:w-[79%] bg-white ml-4 outline-none h-[2.7rem]' />
                        <button className='w-[20%] md:w-[18.5%] right-0 absolute h-[2.7rem] bg-blue-300 hover:bg-blue-700 transition-all duration-200'> Subscribe</button>
                        <p className='text-[14px] mt-[0.7rem] text-white capitalize opacity-35 font-thin'>
                            By subscribe you agree to our terms & conditions and privacy & cookies
                        </p>
                    </div>
                </div>
                <div className='mt-[1.5rem] md:mt-0' >
                    <h1 className='text-[20px] md:text-[25px] pt-3 mx-auto lg:text-[30px] leading-[2rem] text-white'>Need help? <br />
                        (willy +62 000 888 555)</h1>
                    <p className='text-white opacity-75 mt-[0.5rem]'> We are available 8:00am - 12:00pm</p>
                    <div className='mt-[2rem] flex items-center space-x-2'>
                        <Image src='/appstore.png' width={100} height={100} alt='AppStore' />
                        <Image src='/playstore.png' width={100} height={100} alt='playstore' />
                        <Image src='/microsoft.png' width={100} height={100} alt='microsoft' />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
