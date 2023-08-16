import React from 'react';
import demoVideo from '../assets/GailAI.mp4';

const Section = () => {
    const openLink = () => {
        window.location.href = 'https://nextjs-chatbot-three.vercel.app/';
    };

    return (
        <div className='w-full bg-white py-16 px-4 my-auto' id='section'>
            <div className='max-w-[1240px] mx-auto flex flex-col md:flex-row items-center'>
                <div className='md:w-1/2'>
                    <video className='w-full h-full mx-auto my-4' src={demoVideo} autoPlay loop muted />
                </div>
                <div className='md:w-1/2 md:pl-8 flex flex-col justify-center'>
                    <p className='text-[#5271ff] font-bold'>Title in green</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Reliable HR Assistant.</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa quidem maxime suscipit, natus ipsam,
                        inventore rerum cupiditate blanditiis quasi recusandae dignissimos, ut numquam minima? Iure iusto
                        veniam voluptatem accusamus fugiat!
                    </p>
                    <button
                        className='bg-black text-[#5271ff] w-[200px] rounded-md font-medium my-6 md:my-0 py-3 mx-auto md:mx-0'
                        onClick={openLink}
                    >
                        Try Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Section;
