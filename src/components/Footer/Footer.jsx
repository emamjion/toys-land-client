import React from 'react';
import logo from '../../assets/images/logo/toys-land-logo.png'
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";

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
                <h1 className='text-[#f3f3f3] font-semibold text-2xl mb-2'>Social Media</h1>
                <div className='flex'>
                    <Link className='mr-5'>
                        <span className='text-2xl text-white'> < FaFacebookSquare /> </span>
                    </Link>
                    <Link className='mr-5'>
                        <span className='text-2xl text-white'> < FaTwitterSquare /> </span>
                    </Link>
                    <Link className='mr-5'>
                        <span className='text-2xl text-white'> < FaInstagramSquare /> </span>
                    </Link>
                </div>
            </div>
            <div className='flex flex-col'>
                <h1  className='text-[#f3f3f3] font-semibold text-2xl mb-2'> Contact Us</h1>
                <div>
                    <p>Ap 867-859 Sit Rd. </p>
                    <p>Azusa New York 39531 </p>
                    <p>(793) 151-6230</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;