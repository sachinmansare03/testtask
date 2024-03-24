import React from 'react'
import image1 from './img/Group 2.png';
import image2 from './img/Group 7.png';
import image3 from './img/Group 5.png';

const Card = ({ number, title, imageSrc, description }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden  m-4 flex flex-col justify-center items-center">
            <div className="text-center font-thin flex justify-center items-center flex-col">
                <div className="bg-customOrange text-white rounded-full h-16 w-16 flex items-center justify-center text-3xl font-bold mb-2">{number}</div>
                <div className="text-customOrange text-xl mb-2 w-full md:w-60">{title}</div>
            </div>
            <div className="px-6 py-4 flex justify-center items-center">
                <img className="w-full md:max-w-md" src={imageSrc} alt={title} />
            </div>
            <div className="px-6 py-4 text-center">
                <p className="text-gray-700 capitalize text-base">{description}</p>
            </div>
        </div>
    );
};

const Signup = () => {
    return (
        <div className='container mx-auto px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32 pt-4 md:pt-8'>
            <div className='flex-shrink-0 text-center'>
                <div className='flex-shrink-0 text-center'>
                    <h1 className='capitalize font-montserrat leading-6 md:leading-10 text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl'
                        style={{ lineHeight: '1.5' }}>How <samp className='text-customOrange px-1'>signing up</samp>
                        with The Design Project <samp className='text-customOrange px-1'>works</samp>!?</h1>
                </div>
            </div>

            <div>
                <p className='flex-shrink-0 pt-14 mb-8 text-center'>
                    Take a minute to imagine how you’d feel watching your user count grow, and retention rates stay consistently high. When you prioritize effective UX, better retention and growth are natural consequences. Backed by countless hours of research and testing, TDP blends UX, UI, and Product design into a deliciously smooth process that fuels productivity and success.
                </p>
            </div>

            <div className="flex flex-wrap justify-center">
                <Card
                    number="1"
                    title="Sign up for one of our services"
                    imageSrc={image1}
                    description="Sign up for one of our affordable subscription play which offer a variety of options to fit your unique needs."
                />
                <Card
                    number="2"
                    title="Meet your perfect match"
                    imageSrc={image2}
                    description="We match you with the best TDP design expert for your needs. Then we schedule a call to learn about your startup."
                />
                <Card
                    number="3"
                    title="The first sprint begins (hold on tight)"
                    imageSrc={image3}
                    description="TDP manages the project, learns the intimate details of what your users want, and delivers impactful design iterations."
                />
            </div>


        </div>
    )
}

export default Signup