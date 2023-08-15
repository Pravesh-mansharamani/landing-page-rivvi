import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Payment = () => {

    const handleStartTrial = () => {
        window.location.href = 'http://localhost:3000/';
    };

    const handleSmallEnterprise = () => {
    window.location.href = '#hero'; 
    };

    const handleLargeEnterprise = () => {
    window.location.href = '#contact';
    };

  return (
    <div className='w-full py-[5rem] px-4 bg-white' id='payment'>
        <div className='mb-12 justify-center text-center'>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Early-Bird Special Pricing</h1>
        </div>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
              <p className='text-center text-4xl font-bold'>FREE!</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Unlimited Usage</p>
                  <p className='py-2 border-b mx-8'>1 Granted User</p>
                  <p className='py-2 border-b mx-8'>Upload Files up to 1 GB</p>
              </div>
              <button className='bg-[#5271ff] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3' onClick={handleStartTrial} >Start Trial</button>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Small Enterprises</h2>
              <p className='text-center text-4xl font-bold'>$2 / month</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Unlimited Usage</p>
                  <p className='py-2 border-b mx-8'>10 Granted User</p>
                  <p className='py-2 border-b mx-8'>Upload files up to 4 GB</p>
              </div>
              <button className='bg-[#5271ff] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3' onClick={handleSmallEnterprise} >Start Trial</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Large Enterprises</h2>
              <p className='text-center text-4xl font-bold'>Custom</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Unlimited Usage</p>
                  <p className='py-2 border-b mx-8'>Unlimited User</p>
                  <p className='py-2 border-b mx-8'>Upload files up to 10 GB</p>
              </div>
             <button className='bg-[#5271ff] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3' onClick={handleLargeEnterprise} >Contact Us</button>
          </div>
      </div>
    </div>
  )
}

export default Payment