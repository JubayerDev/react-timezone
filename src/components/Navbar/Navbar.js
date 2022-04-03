import React from 'react';
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Logo from '../../asstes/download.webp';

const Navbar = () => {
    return (
        <nav className='flex items-center justify-around h-20'>
            <div className="logo">
                <Link to='/'>
                    <img src={Logo} alt="" />
                </Link>
            </div>
            <div className="flex gap-10 font-semibold">
                <Link to='/' className='hover:text-red-400'>Home</Link>
                <Link to='/shop' className='hover:text-red-400'>Shop</Link>
                <Link to='/about' className='hover:text-red-400'>About</Link>
            </div>
            <div className="flex gap-8">
                <BiSearch size={20} className='cursor-pointer hover:text-red-400 duration-200' />
                <AiOutlineUser size={20} className='cursor-pointer hover:text-red-400 duration-200' />
                <AiOutlineShoppingCart size={20} className='cursor-pointer hover:text-red-400 duration-200' />
            </div>
        </nav>
    );
};

export default Navbar;