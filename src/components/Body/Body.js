import React from 'react'
import Banner from './Banner/Banner';
import BottomHeading from './BnrBottomHeading/BottomHeading';
import Team from './Team/Team';
import Signup from './Signup/Signup';
import UxDedesign from './UxDedesign/UxDedesign';
import { UxDedignSecond } from './UxDedesign/UxDedignSecond';
import { UxDedignThird } from './UxDedesign/UxDedignThird';
import Pcard from './Pcard/Pcard';
import Footer from '../Footer/Footer';
import Navbar from '../Header/Navbar';
import YourBusiness from './yourBusiness/YourBusiness';
import Frequently from './Frequently/Frequently'
import Something from './Something/Something';
// import Testimonial from './Testimonial/Testimonial';

// import Testimonial from './Testimonial/Testimonial';
// import bannerIcon from './Banner/img/Group 11.png';
const Body = () => {
    return (<>
    <div className='bg-bannerColor'>
    <Navbar />
        <Banner />
    </div>
        <BottomHeading />
         <Team />
         <Signup />
         <UxDedesign />
         <UxDedignSecond />
         <UxDedignThird />
         {/* <Testimonial /> */}
         <Pcard />
         <YourBusiness/>
         <Frequently />
         <Something />
         <Footer />
    </>
    )
}

export default Body