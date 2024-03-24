import React from 'react'

const YourBusiness = () => {
  return (
    <div className='container mx-auto px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32 pt-4 md:pt-16 mb-10'>
  <div className='flex-shrink-0 text-center mb-10'>
    <div className='flex-shrink-0 text-center'>
      <h1 className='capitalize font-montserrat text-black leading-6 md:leading-10 text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl'
        style={{ lineHeight: '1.5' }}>How to know if  <samp className='text-customOrange px-1'>TTS</samp>
        is right for your <samp className='text-customOrange px-1'>businesses</samp></h1>
    </div>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4">
    <div className="bg-black p-4 rounded-br-5 hover:bg-customOrange capitalize text-white transition-colors duration-300" style={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px', borderBottomRightRadius: '15px' }}>You want a new, innovative, and user-centered UX strategy for an existing product</div>
    <div className="bg-black p-4 hover:bg-customOrange capitalize text-white transition-colors duration-300" style={{ borderTopLeftRadius: '15px', borderBottomLeftRadius: '15px', borderTopRightRadius: '15px' }}>You want to understand where users struggle when using your product</div>
    <div className="bg-black p-4 hover:bg-customOrange capitalize text-white transition-colors duration-300" style={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px', borderBottomRightRadius: '15px' }}>You want to translate complex data into an easy-to-understand dashboard</div>
    <div className="bg-black p-4 hover:bg-customOrange capitalize text-white transition-colors duration-300" style={{ borderTopLeftRadius: '15px', borderBottomLeftRadius: '15px', borderTopRightRadius: '15px' }}>You need additional design resources that synergize with your (already) amazing design team</div>
    <div className="bg-black p-4 hover:bg-customOrange capitalize text-white transition-colors duration-300" style={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px', borderBottomRightRadius: '15px' }}>You‘re researching how UX can impact you business growth</div>
    <div className="bg-black p-4 hover:bg-customOrange capitalize text-white transition-colors duration-300" style={{ borderTopLeftRadius: '15px', borderBottomLeftRadius: '15px', borderTopRightRadius: '15px' }}>You want to understand your users and design products that meet their needs</div>
  </div>
</div>
  )
}

export default YourBusiness