import React from 'react'
import Typed from 'react-typed'

const Hero = () => {

  const openLink = () => {
    window.location.href = 'https://nextjs-chatbot-three.vercel.app/'
  }
  return (
    <div id='hero'>
        <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#5271ff] font-bold p-2 text-xl'>
        Meet GAIL your new HR partner.
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
        AI Powered Chatbot
        </h1>
        <div className='flex justify-center items-center'>
          <p className= 'md:text-5xl sm:text-4xl text-xl py-4'>
            Answer your query related to
          </p>
          <Typed
          className='md:text-5xl sm:text-4xl text-xl md:pl-4 pl-2 text-[#5271ff]'
            strings={['HR', 'Payroll']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl text-gray-500'>Get answers to common payroll related questions like overtime, vacation days, sick days and more!</p>
        <button className='bg-[#5271ff] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black' onClick={openLink}>Try Now</button>
      </div>
    </div>
    </div>
  )
}

export default Hero