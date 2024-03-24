import React from 'react';
import imgG from './Group 10.png'

const something = () => {
    return (
        <div className='container mx-auto px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32 pt-4 md:pt-16 mb-10'>
        <div className='flex justify-center text-center mb-10'>
            <div className='flex-shrink-0 text-center w-full md:w-[50rem]'>
                <h1 className='capitalize font-montserrat text-base text-black leading-6 md:leading-10 text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl'
                    style={{ lineHeight: '1' }}>
                    Let’s <samp className='text-customOrange px-1'>build</samp>
                    something <samp className='text-customOrange px-1'>together</samp>
                </h1>
                <p className='capitalize font-montserrat mt-6 text-black md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl'>
                    Try us risk free for 7 days, if you don’t love us, get your money back.
                </p>
                <button className="bg-customOrange mt-12 text-[#fff] hover:bg-customOrange duration-150 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 flex items-center justify-center">
                    Get Started
                </button>
                <div className='flex justify-center overflow-x-auto'>
                    <img src={imgG} className='max-w-full' alt='image' />
                </div>
            </div>
        </div>
    </div>
    

    )
}

export default something