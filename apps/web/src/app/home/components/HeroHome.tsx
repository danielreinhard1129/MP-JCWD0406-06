
import ButtonComp from '@/components/ButtonComp'

import React from 'react'


const HeroHome = () => {
    return (
        <div className='relative -w-[100vw] h-[60vh] md:h-[87vh] bg'>
            <div className=' w-[90%] md:w-[80%] mx-auto h-[100%] flex flex-col items-start justify-center'>
                <div className='text-white font-bold text-[25px] md:text-[30px] lg:text-[40px] uppercase'>
                    Best Place To Buy Event
                </div>
                <p className='text-white text-[14px] md:text-[18px] w-[90%] lg:w-[55%] mt-[1rem] md:mt-[0.2rem] mb-[1rem] opacity-75'>
                    Dengan banyaknya pilihan acara yang tersedia, kami hadir untuk mewujudkan setiap momen istimewa dalam hidup Anda. Pilihlah dari berbagai pilihan, mulai dari konser, pameran seni, hingga lokakarya kreatif, dan biarkan kami menjadi mitra Anda dalam merencanakan pengalaman tak terlupakan.
                </p>
                {/* component */}
                <ButtonComp />

            </div>

        </div>
    )
}

export default HeroHome
