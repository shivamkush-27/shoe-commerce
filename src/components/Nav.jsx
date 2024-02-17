import React from 'react';
import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';
import { PiBagSimpleLight } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";


const Nav = () => {
    return (
        <header className='padding-x py-8 absolute z-10 w-full'>
            <div className='column-3'>
                <nav className='flex justify-between items-center max-container'>
                    <a href="/">
                        <img src={headerLogo} alt="Nike Logo" width={130} height={29} />
                    </a>
                    <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                        {navLinks.map((item) => (
                            <li key={item.label}>
                                <a href={item.href} className='font-montserrat leading-normal font-semibold text-lg text-slate-gray hover:underline hover:underline-offset-8 decoration-2 hover:text-black'>
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div>
                        <ul className='flex column-3 items-center justify-center gap-2'>
                            <li><form><input type="text" name="text" placeholder='Search...' className='bg-slate-200 py-2 pl-5 rounded-full' /></form></li>
                            <li className='text-3xl cursor-pointer p-2 rounded-full hover:bg-slate-300'><FaRegHeart /></li>
                            <li className='text-3xl cursor-pointer p-2 rounded-full hover:bg-slate-300'><PiBagSimpleLight /></li>
                        </ul>
                    </div>
                </nav>
            </div>

        </header>
    )
}

export default Nav