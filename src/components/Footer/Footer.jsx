import React from 'react';
import logo from '../../assets/images/logo/toys-land-logo.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4 gap-6 bg-[#537188] p-12'>
            <div>
                <Link to='/'>
                    <img className='w-20 h-20' src={logo} />
                </Link>
                    <h2 className='text-2xl my-2 font-bold text-[#f3f3f3]'>Toys Land</h2>
                    <p className=''>
                        Toys Land is a Toys collection <br /> website where toy car can be seen.
                    </p>
            </div>
            <div className='flex flex-col'>
                <h1 className='text-[#f3f3f3] font-semibold text-2xl mb-2'>Navbar</h1>
                <Link className='font-medium underline'>Home</Link>
                <Link className='font-medium underline'>All Toys</Link>
                <Link className='font-medium underline'>My Toys</Link>
                <Link className='font-medium underline'>Added A Toy</Link>
                <Link className='font-medium underline'>Blogs</Link>
            </div>
            <div className='flex flex-col'>
                <h1 className='text-[#f3f3f3] font-semibold text-2xl mb-2'>Notice</h1>
                <Link className='font-medium underline'>Terms of Use</Link>
                <Link className='font-medium underline'>Privacy policy</Link>
                <Link className='font-medium underline'>Cookie policy</Link>
            </div>
            <div className='flex flex-col'>
                <h1 className='text-[#f3f3f3] font-semibold text-2xl mb-2'>Subscribe</h1>
                <span className='mb-1'>Enter your Email Address</span>
                <div>
                    <input className='p-2 rounded' type='email' placeholder='username@site.com' />
                    <button className='px-2 absolute left-3/4 py-2 bg-[#f39c12] ml-4 text-white font-semibold rounded'>Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Footer;