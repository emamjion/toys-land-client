import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex flex-col items-center justify-center border  mt-12 bg-[#f3f3f3] w-full h-[800px] background-img'>
            <h2 className='text-[150px]'>4<span className='text-[112px]'>0</span>4</h2>
            <p className='mt-3 tracking-wider text-2xl font-medium'>Page Not Found</p>
            <Link to='/'>
                <button className='border font-medium border-black mt-3 px-4 py-2'>Go to Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;