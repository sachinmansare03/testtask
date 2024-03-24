import React from 'react';
import logo from './logo 1 (3) (1) 2.png';
import mailImg from './svg (2).png';
import instaImg from './svg (3).png';
import linkImg from './svg (4).png'

const Footer = () => {
    return (
        <div className='container bg-customBlackHeader mx-auto px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32 pt-4 md:pt-16'>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            <div className="md:col-span-4 mb-9">
                <div className='Logo'>
                    <img src={logo} className="max-w-full max-h-full" alt='logo' />
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between md:justify-start space-y-4 md:space-y-0 md:space-x-4 pt-5">
                    <div className="flex items-center space-x-2">
                        <a href="#">
                            <img src={mailImg} className="w-6 h-6" alt="Mail" />
                        </a>
                        <p className="text-xs text-white">triontechsolution@gmail.com</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <a href="#">
                            <img src={instaImg} className="w-6 h-6" alt="Instagram" />
                        </a>
                        <p className="text-xs text-white">triontechsolution</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <a href="#">
                            <img src={linkImg} className="w-6 h-6" alt="LinkedIn" />
                        </a>
                        <p className="text-xs text-white">trion tech solution</p>
                    </div>
                </div>
            </div>
            <div className="md:col-span-2 mb-9">
                {/* Content for the second column */}
                <ul className='text-right text-white space-y-2'>
                    <li>How it Works</li>
                    <li>About</li>
                    <li>Our Work</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
    </div>
    
    )
}

export default Footer