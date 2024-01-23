


import React from 'react'
import FeaturedProductSlider from './helper/FeaturedProductSlider'
import Link from 'next/link'

const FeatureProduct = () => {
    return (
        <section id='carosel'>
            <div className='pt-[6rem] pb-[3rem] bg-gray-900'>
                <div className='w-[80%] mx-auto flex items-center justify-between' >
                    <h1 className='md:text-[28px] text-[22px] lg:text-[34px] text-white'>Featured Event</h1>
                    <Link href="/events">
                        <button className='  cursor-pointer uppercase text-[13px] md:text-[15px] text-yellow-400'>View All Events</button>

                    </Link>

                </div>
                <div className='w-[80%] mt-[2rem] mx-auto'>
                    {/* featured Product slider */}
                    <FeaturedProductSlider />
                </div>
            </div>


        </section>
    )
}

export default FeatureProduct
