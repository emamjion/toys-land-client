import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";

const Login = () => {
    return (
        <div className='my-24 bg-orange-200 text-center p-24'>
            <form className='shadow-xl bg-[#fff] w-[600px] mx-auto rounded-lg'>
                <h2 className='text-2xl font-medium py-6'>Login</h2>
                <div className='my-2'>
                    <input className='border border-[#757575] w-3/4 py-2 px-3 rounded' type="email" name="email" placeholder='Your Email' />
                </div>
                <div>
                    <input className='border border-[#757575] w-3/4 py-2 px-3 rounded' type="password" name="password" placeholder='Your Password' />
                </div>
                <div className='my-4'>
                    <input className='bg-[#f39c12] w-3/4 p-2 text-white cursor-pointer font-semibold text-lg rounded' type="submit" value="Login" />
                </div>
                <div className='mt-4 pb-6'>
                    <p>
                        <span className='text-[#757575]'>Not Registered?</span> <Link className='font-medium text-[#f39c12]' to='/register'>Create an account</Link>
                    </p>
                </div>
                <div className='text-lg font-bold'>or</div>
                <div className='flex items-center justify-center mt-4 pb-8'>
                    <button className='flex items-center border-2 border-[#f39c12] p-4 rounded-lg cursor-pointer'>
                        <span  className='mr-2'>< FaGoogle /></span> <span className='inline font-medium'>Login with Google</span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;