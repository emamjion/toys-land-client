import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='my-24 bg-orange-200 text-center p-24'>
            <form className='shadow-xl bg-[#fff] w-[600px] mx-auto rounded-lg'>
                <h2 className='text-2xl font-medium py-6'>Register</h2>
                <div className='my-2'>
                    <input className='border border-[#757575] w-3/4 py-2 px-3 rounded' type="text" name="name" placeholder='Your Name' />
                </div>
                <div className='my-2'>
                    <input className='border border-[#757575] w-3/4 py-2 px-3 rounded' type="text" name="photo" placeholder='Your photoURL' />
                </div>
                <div className='my-2'>
                    <input className='border border-[#757575] w-3/4 py-2 px-3 rounded' type="email" name="email" placeholder='Your Email' />
                </div>
                <div>
                    <input className='border border-[#757575] w-3/4 py-2 px-3 rounded' type="password" name="password" placeholder='Your Password' />
                </div>
                <div className='my-4'>
                    <input className='bg-[#f39c12] w-3/4 p-2 text-white cursor-pointer font-semibold text-lg rounded' type="submit" value="Create account" />
                </div>
                <div className='mt-4 pb-6'>
                    <p>
                        <span className='text-[#757575]'>Already a User?</span> <Link className='font-medium text-[#f39c12]' to='/login'>Login</Link>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Register;