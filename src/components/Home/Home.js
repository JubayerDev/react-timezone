import React from 'react';
import Watch from '../../asstes/watch.webp'

const Home = () => {
    return (
        <div className='flex bg-[#F0F0F2] items-center'>
            <div className='ml-28'>
                <h1 className='text-8xl font-bold text-[#0B1C39]'>Select Your New Perfect Style</h1>
                <p className='text-xl text-gray-500 mt-12'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio neque <br /> tempora at nulla in ullam nostrum numquam sapiente quas error.</p>
                <button className='py-3 px-8 bg-gray-900 mt-12 text-white font-semibold hover:bg-red-600 duration-200'>
                    Shop Now
                </button>
            </div>
            <div>
                <img className='mr-96' src={Watch} alt="" />
            </div>
        </div>
    );
};

export default Home;