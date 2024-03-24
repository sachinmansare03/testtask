import React from 'react'
import Ycombinator from './img/y_combinator_0dd7d14b20.svg.png';
import accel from './img/accel_1cb5297bba.svg.png';
import sequioia from './img/sequioia_70b028d972.svg.png';
import a16z from './img/a16z_3853ceb4aa.svg.png';

const BottomHeading = () => {
    return (
        <div className='container mx-auto bg-customBlackHeader'>
            <div className='flex-shrink-0 text-center pt-12 pb-12'>
                <p className='text-white capitalize text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-montserrat'>
                    We helped our customers raise <span className='text-customOrange'>$1B+</span>
                </p>
            </div>
            <div className="flex flex-wrap justify-center items-center pb-14">
                <img className="w-full sm:w-auto md:w-auto lg:w-auto xl:w-auto h-auto border-r border-solid border-customOrange pr-4 pb-4" src={Ycombinator} alt="Description of the image" />
                <img className="w-full sm:w-auto md:w-auto lg:w-auto xl:w-auto h-auto border-r border-solid border-customOrange pr-4 pb-4" src={accel} alt="Description of the image" />
                <img className="w-full sm:w-auto md:w-auto lg:w-auto xl:w-auto h-auto border-r border-solid border-customOrange pr-4 pb-4" src={sequioia} alt="Description of the image" />
                <img className="w-full sm:w-auto md:w-auto lg:w-auto xl:w-auto h-auto" src={a16z} alt="Description of the image" />
            </div>
        </div>



    )
}

export default BottomHeading