import React from 'react'
import imgBG from './img/Group_386_cb42464eab.png.png'

const UxDedesign = () => {
    return (
        <div className='bg-customBlackHeader container mx-auto px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32 pt-4 md:pt-16'>
        <div className='flex-shrink-0 text-center'>
          <div className='flex-shrink-0 text-center'>
            <h1 className='capitalize font-montserrat text-white leading-6 md:leading-10 text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl' style={{ lineHeight: '1.5' }}>
              How <samp className='text-customOrange px-1'>accessible</samp> UX design is changing the <samp className='text-customOrange px-1'>businesses</samp> for the better
            </h1>
          </div>
        </div>
        <div className='bg-customBlueBg w-full flex overflow-hidden'>
          <div className='w-full md:w-1/2 flex justify-center items-center p-4 md:p-8'>
            <div className='bg-customBlackHeader w-full md:w-96 p-12 md:p-16 shadow-lg rounded-lg mt-8 md:mt-20'>
              <div className="mb-8">
                <button className="bg-customOrange text-white text-base capitalize font-montserrat px-6 py-3 rounded-lg">Socure</button>
              </div>
              <p className='text-center capitalize font-montserrat text-white'>A predictive analytics platform for consumer digital identity verification</p>
              <div className="mt-8">
                <button className="bg-black border border-customOrange text-white text-base capitalize font-montserrat px-6 py-3 rounded-lg">read case study</button>
              </div>
            </div>
          </div>
          <div className='w-full md:w-1/2'>
            <img className='object-cover w-full h-full' src={imgBG} alt='description_of_your_image' />
          </div>
        </div>
      </div>
      
    )
}

export default UxDedesign