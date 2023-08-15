import React from 'react';
import demoVideo from '../assets/FileUpload.mp4';

const Feature = () => {
    const openLink = () => {
        window.location.href = 'http://127.0.0.1:5000/upload';
    };

    return (
        <div className='w-full bg-white py-16 px-4 my-auto' id='feature'>
            <div className='max-w-[1240px] mx-auto flex flex-col md:flex-row items-center'>
                <div className='md:w-1/2 md:pr-8 flex flex-col justify-center'>
                    <p className='text-[#5271ff] font-bold'>TITLE IN BLUE SMALL</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>TITLE IN BLACK BIG</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa quidem maxime suscipit, natus
                        ipsam, inventore rerum cupiditate blanditiis quasi recusandae dignissimos, ut numquam minima? Iure
                        iusto veniam voluptatem accusamus fugiat!
                    </p>
                    <button
                        className='bg-black text-[#5271ff] w-[200px] rounded-md font-medium my-6 md:my-0 py-3'
                        onClick={openLink}
                    >
                        Try Now
                    </button>
                </div>
                <div className='md:w-1/2'>
                    <video className='w-full h-full mx-auto my-4' src={demoVideo} autoPlay loop muted />
                </div>
            </div>
        </div>
    );
};

export default Feature;
