
"use client"

import { Link as ScrollLink } from 'react-scroll';

const ButtonComp = () => {
    return (
        <div>

            <ScrollLink
                to='carosel'
                spy={true}
                smooth={true}
                duration={500}
                offset={-70} // Adjust the offset as needed
            >
                <button className='before:ease bg-slate-300 text-[17px] relative h-12 w-40 overflow-hidden border border-black shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-blue-900 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180 rounded-lg'>
                    <span className='relative z-10'>Discover Now</span>
                </button>
            </ScrollLink>

        </div>
    );
};

export default ButtonComp;
