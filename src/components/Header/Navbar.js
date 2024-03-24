import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="py-4 bg-transparent">
            <div className="flex justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between  h-16">
                    <div className="flex items-center">

                        <div className="hidden md:block ">
                            <div className="ml-4 flex items-center space-x-4">
                                <a href="#" className="text-[1.1rem] text-customBlack font-montserrat capitalize hover:text-customOrange px-3 py-2 rounded-md text-sm font-medium">How it works</a>
                                <a href="#" className="text-[1.1rem] text-customBlack font-montserrat hover:text-customOrange px-3 py-2 rounded-md text-sm font-medium">About</a>
                                <a href="#" className="text-[1.1rem] text-customBlack font-montserrat hover:text-customOrange px-3 py-2 rounded-md text-sm font-medium">Work</a>
                                <a href="#" className="text-[1.1rem] text-customBlackfont-montserrat hover:text-customOrange px-3 py-2 rounded-md text-sm font-medium">Pricing</a>
                                <a href="#" className="text-[1.1rem] text-customBlack font-montserrat hover:text-customOrange px-3 py-2 rounded-md text-sm font-medium">Blog</a>
                            </div>
                        </div>
                        <div class="hidden md:block w-12"></div>
                        <div className="flex-shrink-0 ml-4 gap-8 bg-customOrange w-36 h-9 text-center rounded-lg flex justify-center">
                            <button className=" text-white text-base capitalize font-montserrat">Get Started</button>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen ? 'true' : 'false'}
                        >
                            <span className="sr-only ">Open main menu</span>
                            {/* Icon when menu is closed. */}
                            {/* Menu open: "hidden", Menu closed: "block" */}
                            <svg className={isOpen ? 'hidden h-6 w-6' : 'block h-6 w-6'} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                            {/* Icon when menu is open. */}
                            {/* Menu open: "block", Menu closed: "hidden" */}
                            <svg className={isOpen ? 'block h-6 w-6' : 'hidden h-6 w-6'} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile menu, toggle classes based on menu state. */}
            <div className={isOpen ? 'md:hidden block' : 'md:hidden hidden'} id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <a href="#" className=" text-customBlack font-montserrat hover:text-customOrange block px-3 py-2 rounded-md text-base font-medium">Home</a>
                    <a href="#" className=" text-customBlack font-montserrat hover:text-customOrange block px-3 py-2 rounded-md text-base font-medium">About</a>
                    <a href="#" className=" text-customBlack font-montserrat hover:text-customOrange block px-3 py-2 rounded-md text-base font-medium">Services</a>
                    <a href="#" className=" text-customBlack font-montserrat hover:text-customOrange block px-3 py-2 rounded-md text-base font-medium">Contact</a>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;