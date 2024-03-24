import React from 'react'
import arrimg from './Frame.png'

const Pcard = () => {

    return (
        <div className='container mx-auto px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32 pt-4 md:pt-16'>
            <div className='flex-shrink-0 text-center'>
                <div className='flex justify-center space-x-3 text-center flex-wrap'>
                    <div className='relative rounded-l-lg ml-4 mb-4'>
                        <p className='text-customOrange absolute -top-5 left-1/2 transform -translate-x-1/2'>save 10%</p>
                        <div className='bg-black rounded-l-lg w-full sm:w-36'>
                            <p className='py-2 text-white'>SILVER</p>
                        </div>
                    </div>
                    <div className='relative mb-4'>
                        <p className='text-customOrange absolute -top-5 left-1/2 transform -translate-x-1/2'>save 15%</p>
                        <div style={{ border: '1px solid #FFA500' }} className='bg-white w-full sm:w-36'>
                            <p className='py-2'>GOLD</p>
                        </div>
                    </div>
                    <div className='relative mb-4'>
                        <p className='text-customOrange absolute -top-5 left-1/2 transform -translate-x-1/2'>save 15%</p>
                        <div style={{ border: '1px solid #FFA500' }} className='bg-white w-full sm:w-36'>
                            <p className='py-2'>PREMIUM</p>
                        </div>
                    </div>
                </div>


            </div>

            <div className="w-full py-16 px-4 bg-white overflow-hidden md:overflow-visible">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div style={{ border: '1px solid #FFA500' }} className="w-full hover:bg-customOrange shadow-xl flex flex-col border-customOrange p-4 my-4 rounded-lg hover:scale-105 duration-300">
                        <h2 className="text-2xl text-black font-bold text-center ">Silver</h2>
                        <p className="text-base font-bold text-center text-black py-2">Great for basic UI/UX design needs</p>
                        <p className="text-center text-4xl font-bold text-customOrange hover:text-white pt-6">$2600</p>
                        <p className="text-center text-base font-bold text-customOrange pb-8">per month</p>
                        <hr className='bg-customOrange border-customOrange w-80 mx-auto  border-spacing-1 border-solid' />
                        <div className="text-start font-medium">
                            <p className="py-2 float-start mx-8 mt-8">What’s included:</p>
                            <p className="py-2 float-start text-sx mx-8">UI execution <br />Connect on Slack<br />One 30 minute meeting a week</p>
                            <p className="py-2 float-start text-sx mx-8">UI execution <br />Connect on Slack<br />One 30 minute meeting a week</p>
                            <p className="py-2 float-start mx-8">Design</p>
                            <p className="py-2 float-start  mx-8">1 designer working with 4-5 other customers at the same time</p>
                        </div>
                        <button className="bg-transparent hover:text-[#fff] hover:bg-customOrange duration-150 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 flex items-center justify-center">
                            Trial Free <img src={arrimg} className="ml-2" />
                        </button>
                    </div>

                    {/* Card 2 */}
                    <div style={{ border: '1px solid #FFA500' }} className="w-full hover:bg-customOrange shadow-xl flex flex-col border-customOrange p-4 my-4 rounded-lg hover:scale-105 duration-300">
                        <h2 className="text-2xl text-black font-bold text-center ">Gold</h2>
                        <p className="text-base font-bold text-center text-black py-2">Great for end-to-end product design</p>
                        <p className="text-center text-4xl font-bold text-customOrange hover:text-white pt-6">$3,595</p>
                        <p className="text-center text-base font-bold text-customOrange pb-8">per month</p>
                        <hr className='bg-customOrange border-customOrange w-80 mx-auto  border-spacing-1 border-solid' />
                        <div className="text-start font-medium">
                            <p className="py-2 float-start mx-8 mt-8">What’s included:</p>
                            <p className="py-2 float-start text-sx mx-8">Everything in Essential <br />Full UI/UX design and research<br />Dev ready Figma files<br />One 1 hour meeting a week</p>
                            <p className="py-2 float-start text-sx mx-8">UI execution <br />Connect on Slack<br />One 30 minute meeting a week</p>
                            <p className="py-2 float-start mx-8">Design</p>
                            <p className="py-2 float-start  mx-8">1 design lead <br />1 designer working on 2-3 other <br />customers at the same time</p>
                        </div>
                        <button className="bg-transparent hover:text-[#fff] hover:bg-customOrange duration-150 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 flex items-center justify-center">
                            Trial Free <img src={arrimg} className="ml-2" />
                        </button>

                    </div>

                    {/* Card 3 */}
                    <div style={{ border: '1px solid #FFA500' }} className="w-full shadow-xl flex flex-col hover:bg-customOrange border-customOrange p-4 my-4 rounded-lg hover:scale-105 duration-300">
                        <h2 className="text-2xl text-black font-bold text-center ">Silver</h2>
                        <p className="text-base font-bold text-center text-black py-2">Great for basic UI/UX design needs</p>
                        <p className="text-center text-4xl font-bold text-customOrange pt-6 hover:text-white">$2600</p>
                        <p className="text-center text-base font-bold text-customOrange pb-8">per month</p>
                        <hr className='bg-customOrange border-customOrange w-80 mx-auto  border-spacing-1 border-solid' />
                        <div className="text-start font-medium">
                            <p className="py-2 float-start mx-8 mt-8">What’s included:</p>
                            <p className="py-2 float-start text-sx mx-8">UI execution <br />Connect on Slack<br />One 30 minute meeting a week</p>
                            <p className="py-2 float-start text-sx mx-8">UI execution <br />Connect on Slack<br />One 30 minute meeting a week</p>
                            <p className="py-2 float-start mx-8">Design</p>
                            <p className="py-2 float-start  mx-8">1 designer working with 4-5 other customers at the same time</p>
                        </div>
                        <button className="bg-transparent hover:text-[#fff] hover:bg-customOrange duration-150 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 flex items-center justify-center">
                            Trial Free <img src={arrimg} className="ml-2" />
                        </button>
                    </div>
                </div>

            </div>

            <div className='w-full py-[1rem] px-4 bg-white'>
                <hr className='bg-black border-black w-80 mx-auto  border-spacing-1 border-solid' />
                <div className=' pt-8'>
                    <h2 className='text-2xl font-bold text-center'>Hey! Need a custom plan? <span className='text-customOrange'>Contact us!</span> </h2>
                    <p className='text-center text-base pt-2'>Try us risk free for 7 days, if you don’t love us, get your money back.</p>
                </div>
                <button className="bg-customOrange hover:text-[#fff] hover:bg-customOrange duration-150 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 flex items-center justify-center">
                    Get Started
                </button>
            </div>

        </div>
    )
}

export default Pcard