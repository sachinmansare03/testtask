import React from 'react';
import img from './img/article (3).png';

export const UxDedignThird = () => {
  return (
    <div className='bg-customBlackHeader container mx-auto px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32 pt-4 md:pt-16'>
    <div className='bg-customBlueBg w-full overflow-hidden'>
      <img className='object-cover w-full h-1/2 md:h-50vh' src={img} alt='description_of_your_image' />
    </div>
  </div>
  )
}
