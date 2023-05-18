import React from 'react';
import logo from '../../assets/images/logo/toys-land-logo.png';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex items-center justify-between mt-6'>
            <Link className='flex items-center justify-center gap-4' to='/'>
                <img className='w-[80px] h-[80px]' src={logo} />
                <h2 className='text-[#2c3e50] font-bold text-3xl'>Toys Land</h2>
            </Link>
            <ul className='flex items-center justify-center'>
                <li className='mr-7 text-[#2c3e50]'>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li className='mr-7 text-[#2c3e50] font-semibold'>
                    <NavLink to='/all-toys'>All Toys</NavLink>
                </li>
                <li className='mr-7 text-[#2c3e50] font-semibold'>
                    <NavLink to='/my-toys'>My Toys</NavLink>
                </li>
                <li className='mr-7 text-[#2c3e50] font-semibold'>
                    <NavLink to='/add-toy'>Added A Toy</NavLink>
                </li>
                <li className='mr-7 text-[#2c3e50] font-semibold'>
                    <NavLink to='/blogs'>Blogs</NavLink>
                </li>
            </ul>
            <div className='flex items-center justify-center'>
                <h2>Profile</h2>
                <button className='px-6 py-2 bg-[#f39c12] ml-4 text-white font-semibold rounded'>Login</button>
            </div>
        </div>
    );
};

export default Header;