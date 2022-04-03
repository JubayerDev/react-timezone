import React from 'react';
import w1 from '../../asstes/watch-image/w-1.webp'
import w2 from '../../asstes/watch-image/w-2.webp'
import w3 from '../../asstes/watch-image/w-3.webp'
import w4 from '../../asstes/watch-image/w-4.webp'
import w5 from '../../asstes/watch-image/w-5.webp'
import w6 from '../../asstes/watch-image/w-6.png'
import Payments from '../Payments/Payments';

const Shop = () => {
    return (
        <div>
            <div className='mt-10'>
                <h1 className='text-6xl font-bold text-center text-[#0B1C39]'>Watch Shop</h1>
            </div>

            <div className='grid grid-cols-3 ml-14'>
                <div>
                    <img src={w1} alt="" />
                    <button className='bg-red-500 py-3 px-36 text-white'>Add To Cart</button>
                    <h1 className='text-2xl font-bold mt-5 text-gray-700 text-center'>Thermo Ball Etip Gloves</h1>
                    <p className='text-xl text-gray-800 font-semibold text-center'>$45,743</p>
                </div>
                <div>
                    <img src={w2} alt="" />
                    <button className='bg-red-500 py-3 px-36 text-white'>Add To Cart</button>
                    <h1 className='text-2xl font-bold mt-5 text-gray-700 text-center'>Thermo Ball Etip Gloves</h1>
                    <p className='text-xl text-gray-800 font-semibold text-center'>$45,743</p>
                </div>
                <div>
                    <img src={w3} alt="" />
                    <button className='bg-red-500 py-3 px-36 text-white'>Add To Cart</button>
                    <h1 className='text-2xl font-bold mt-5 text-gray-700 text-center'>Thermo Ball Etip Gloves</h1>
                    <p className='text-xl text-gray-800 font-semibold text-center'>$45,743</p>
                </div>
                <div>
                    <img src={w4} alt="" />
                    <button className='bg-red-500 py-3 px-36 text-white'>Add To Cart</button>
                    <h1 className='text-2xl font-bold mt-5 text-gray-700 text-center'>Thermo Ball Etip Gloves</h1>
                    <p className='text-xl text-gray-800 font-semibold text-center'>$45,743</p>
                </div>
                <div>
                    <img src={w5} alt="" />
                    <button className='bg-red-500 py-3 px-36 text-white'>Add To Cart</button>
                    <h1 className='text-2xl font-bold mt-5 text-gray-700 text-center'>Thermo Ball Etip Gloves</h1>
                    <p className='text-xl text-gray-800 font-semibold text-center'>$45,743</p>
                </div>
                <div>
                    <img src={w6} alt="" />
                    <button className='bg-red-500 py-3 px-36 text-white'>Add To Cart</button>
                    <h1 className='text-2xl font-bold mt-5 text-gray-700 text-center'>Thermo Ball Etip Gloves</h1>
                    <p className='text-xl text-gray-800 font-semibold text-center'>$45,743</p>
                </div>
            </div>
            <Payments />
        </div>
    );
};

export default Shop;