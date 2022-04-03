import React from 'react';
import {FaShippingFast} from 'react-icons/fa'
import { MdOutlineLockOpen } from 'react-icons/md'
import {BsArrowRepeat} from 'react-icons/bs'

const Payments = () => {
    return (
        <div>
            <div className='bg-red-500 h-60 mx-20 mb-10 grid grid-cols-3 mt-32'>
                <div className='mt-10 ml-10'>
                    <FaShippingFast size={50} className='text-white mb-5'/>
                    <h2 className='text-2xl font-bold text-white'>Free Shipping Method</h2>
                    <p className='text-xl font-normal text-white'>aorem ixpsacdolor sit ameasecur<br/> adipisicing elitsf edasd.</p>
                </div>
                <div className='mt-10 ml-10'>
                    <MdOutlineLockOpen size={50} className='text-white mb-5'/>
                    <h2 className='text-2xl font-bold text-white'>Free Shipping Method</h2>
                    <p className='text-xl font-normal text-white'>aorem ixpsacdolor sit ameasecur<br/> adipisicing elitsf edasd.</p>
                </div>
                <div className='mt-10 ml-10'>
                    <BsArrowRepeat size={50} className='text-white mb-5'/>
                    <h2 className='text-2xl font-bold text-white'>Free Shipping Method</h2>
                    <p className='text-xl font-normal text-white'>aorem ixpsacdolor sit ameasecur<br/> adipisicing elitsf edasd.</p>
                </div>
            </div>
        </div>
    );
};

export default Payments;