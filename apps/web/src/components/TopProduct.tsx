import React from 'react'
import FeaturedProductSlider from './helper/FeaturedProductSlider'

const TopProduct = () => {
    return (
        <div className='bg-gray-800 pt-[4rem] pb-[3rem]'>
            <div className='w-[80%] mx-auto flex items-center justify-between'>
                <h1 className=' md:text-[28px] text-[22px] lg:text-[34px] text-white'>
                    Top Events

                </h1>
                <button className='uppercase text-[13px] md:text-[15px] text-yellow-400'>
                    view All Event

                </button>
            </div>
            <div className=' w-[80%] mt-[2rem] mx-auto'>

                <FeaturedProductSlider />






            </div>
        </div>
    )
}

export default TopProduct
