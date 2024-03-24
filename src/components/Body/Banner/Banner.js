import React from 'react';
import arrowImg from './img/arrow.png';
import backImg from './img/Group.png';
const Banner = () => {
    return (
        <div className=" h-auto  container mx-auto px-2 lg:px-5 xl:px-7 bg-bannerColor h-96">
            <div className='w-55rem mt-3 pt-8 pb-8 flex flex-col items-center justify-center'>
                <p className="text-2xl capitalize md:text-3xl lg:text-4xl xl:text-5xl font-montserrat text-center">
                    Digital transformation is our <span className='text-customOrange'>Motto</span> <br />
                    Let’s Create a Milestone <span className='text-customOrange'>Together</span>
                </p>

                <div className="flex justify-center mt-8 mb-8">
                    <div className="flex flex-col items-center mr-4">
                        <img className="max-w-full h-auto" src={arrowImg} alt="Description of the image" />
                        <p className="text-sm capitalize">No hiring headaches</p>
                    </div>
                    <div className="flex flex-col items-center mx-4">
                        <img className="max-w-full h-auto" src={arrowImg} alt="Description of the image" />
                        <p className="text-sm capitalize">Weekly turnaround times</p>
                    </div>
                    <div className="flex flex-col items-center ml-4">
                        <img className="max-w-full h-auto" src={arrowImg} alt="Description of the image" />
                        <p className="text-sm capitalize">One flat monthly rate</p>
                    </div>
                </div>
                <div className="flex-shrink-0  bg-customOrange w-18rem h-9 text-center rounded-lg flex justify-center">
                    <button className="text-white capitalize text-base w-18rem font-montserrat" style={{width:'15rem'}}>start your risk free trial</button>
                </div>
            </div>
            <div className='flex justify-center overflow-x-auto'>
                <img src={backImg} className='w-[30rem]' alt='image' />
            </div>    </div>
            )
}

export default Banner;
