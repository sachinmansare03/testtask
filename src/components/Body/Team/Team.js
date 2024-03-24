import React from 'react';
import image1 from './img/Clip path group.png';
import image2 from './img/svg.png';
import image3 from './img/svg (1).png';

const Card = ({ imageSrc, title, description }) => {
    return (
        <div className='max-w-xs rounded overflow-hidden mx-4 my-8'>
            <div className="flex justify-center">
                <img
                    className='w-1/2'
                    src={imageSrc}
                    alt='Card'
                />
            </div>
            <div className='px-6 py-4'>
                <div className='font-bold text-xl mb-2 text-center'>{title}</div>
                <p className='text-gray-700 text-base text-center'>{description}</p>
            </div>
        </div>
    );
};

const Team = () => {
    return (
        <div className='container mx-auto px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32 pt-4 md:pt-8'>
            <div className='flex-shrink-0 text-center'>
                <div className='flex-shrink-0 text-center'>
                    <h1 className='capitalize font-montserrat leading-6 md:leading-10 text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl' style={{ lineHeight: '1.5' }}>
                        A Diverse Team of{' '}
                        <span className='text-customOrange px-1'>Passionate</span> Tech nerds
                        who are<br /> here to help your{' '}
                        <span className='text-customOrange px-1'>startup succeed</span>
                    </h1>
                </div>
            </div>
            <div>
                <p className='flex-shrink-0 pt-5 md:pt-6 mb-8 text-center '>
                    From ideation to expansion, TDP understands the unique demands of your startup—providing you with<br />
                    optimized design strategies and fast turnarounds for an affordable monthly subscription.
                </p>
            </div>
            <div className='flex flex-wrap justify-center'>
                <Card
                    imageSrc={image1}
                    title='Costs 70% less'
                    description='We developed highly-optimized design processes to let us work fast and deliver incredible results—and we pass those savings on to you'
                />
                <Card
                    imageSrc={image2}
                    title='Adaptable and scalable'
                    description='High-velocity is crucial to a startup’s success, and that’s why TDP delivers new designs every week so your momentum never falters'
                />
                <Card
                    imageSrc={image3}
                    title='Fast turnaround times'
                    description='TDP was built for flexibility—we quickly adapt and grow as you grow'
                />
            </div>
        </div>
    )
}

export default Team