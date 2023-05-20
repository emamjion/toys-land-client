import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const { logIn, googleLogin } = useContext(AuthContext);
    
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            setSuccess('User has been Login!!');
            setError('');
            form.reset();
        })
        .catch(error => {
            setError(error.message);
            setSuccess('');
        })
    }

    const handleGoogleLogin = () => {
        googleLogin()
        .then(() => {})
        .catch(error => {
            console.error(error.message);
        })
    }
    
    return (
        <div className='my-24 bg-orange-200 text-center p-24'>
            <form onSubmit={handleLogin} className='shadow-xl bg-[#fff] w-[600px] mx-auto rounded-lg'>
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
                    <button onClick={handleGoogleLogin} className='flex items-center border-2 border-[#f39c12] p-4 rounded-lg cursor-pointer'>
                        <span  className='mr-2'>< FaGoogle /></span> <span className='inline font-medium'>Login with Google</span>
                    </button>
                </div>
                <div className='mt-3 pb-6 text-center'>
                    <p className='text-green-500 font-medium'>{success}</p>
                    <p className='text-red-500 font-medium'>{error}</p>
                </div>
            </form>
        </div>
    );
};

export default Login;